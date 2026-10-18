import { pathToFileURL } from "node:url";
import axios from "axios";
import Ajv from "ajv";
import { Client as FtpClient } from "basic-ftp";
import CryptoJS from "crypto-js";
import createDOMPurify from "dompurify";
import elliptic from "elliptic";
import { XMLParser } from "fast-xml-parser";
import FormData from "form-data";
import Handlebars from "handlebars";
import { Hono } from "hono";
import yaml from "js-yaml";
import jwt from "jsonwebtoken";
import Koa from "koa";
import _ from "lodash";
import multer from "multer";
import mysql from "mysql2";
import forge from "node-forge";
import nodemailer from "nodemailer";
import protobuf from "protobufjs";
import shellQuote from "shell-quote";
import * as tar from "tar";
import { fetch as undiciFetch } from "undici";
import WebSocket from "ws";
import XRegExp from "xregexp";

const app = new Hono();
const koa = new Koa();
const parser = new XMLParser();
const ajv = new Ajv();
const template = Handlebars.compile("Hello {{name}}");
const validate = ajv.compile({ type: "object", properties: { ok: { type: "boolean" } } });

app.get("/", (c) => {
  const name = _.escape(c.req.query("name") || "demo");
  const digest = forge.md.sha256.create().update("demo").digest().toHex();

  return c.json({
    message: template({ name }),
    xml: parser.parse("<greet>ok</greet>"),
    config: yaml.load("service: demo"),
    pattern: XRegExp("^demo$").test("demo"),
    valid: validate({ ok: true }),
    axios: typeof axios.get,
    ftp: typeof FtpClient,
    hash: CryptoJS.SHA256("demo").toString().slice(0, 12),
    purify: typeof createDOMPurify,
    curve: new elliptic.ec("secp256k1").n.toString(16).slice(0, 8),
    form: typeof FormData,
    jwt: typeof jwt.sign,
    koa: typeof koa.use,
    upload: typeof multer,
    mysql: typeof mysql.createConnection,
    forge: digest.slice(0, 12),
    mail: typeof nodemailer.createTransport,
    protobuf: typeof protobuf.parse,
    quoted: shellQuote.parse("echo demo")[0],
    tar: typeof tar.list,
    fetch: typeof undiciFetch,
    ws: typeof WebSocket,
  });
});

export default app;

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  console.log("node-app demo loaded");
}
