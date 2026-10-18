import { pathToFileURL } from "node:url";
import Ajv from "ajv";
import CryptoJS from "crypto-js";
import createDOMPurify from "dompurify";
import elliptic from "elliptic";
import { XMLParser } from "fast-xml-parser";
import FormData from "form-data";
import yaml from "js-yaml";
import jwt from "jsonwebtoken";
import Koa from "koa/lib/application.js";
import _ from "lodash";
import multer from "multer";
import protobuf from "protobufjs";
import shellQuote from "shell-quote";
import * as tar from "tar";
import WebSocket from "ws";
import XRegExp from "xregexp";

const app = new Koa();
const parser = new XMLParser();
const ajv = new Ajv();
const validate = ajv.compile({ type: "object", properties: { ok: { type: "boolean" } } });

app.use(async (ctx) => {
  if (ctx.path !== "/") {
    ctx.status = 404;
    return;
  }

  const name = _.escape(ctx.query.name || "demo");
  ctx.body = {
    message: `Hello ${name}`,
    xml: parser.parse("<greet>ok</greet>"),
    config: yaml.load("service: demo"),
    pattern: XRegExp("^demo$").test("demo"),
    valid: validate({ ok: true }),
    hash: CryptoJS.SHA256("demo").toString().slice(0, 12),
    purify: typeof createDOMPurify,
    curve: new elliptic.ec("secp256k1").n.toString(16).slice(0, 8),
    form: typeof FormData,
    jwt: typeof jwt.sign,
    upload: typeof multer,
    protobuf: typeof protobuf.parse,
    quoted: shellQuote.parse("echo demo")[0],
    tar: typeof tar.list,
    ws: typeof WebSocket,
  };
});

export default app;

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  console.log("node-app demo loaded");
}
