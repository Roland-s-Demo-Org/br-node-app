# node-app

Demo Node app for Aikido libraries. Every direct dependency is pinned to an upstream version that has an Aikido patched build in `as_root_io_cve_info` (`distro = npm`). The lockfile installs those upstream versions, so a scan can show the Aikido fix as available.

Counts are distinct advisories on the latest `-aikido.N` build of that exact version.

| Package | Installed | Aikido fix | Critical | High | Medium | Low |
| --- | --- | --- | ---: | ---: | ---: | ---: |
| axios | 1.14.0 | 1.14.0-aikido.11 | 1 | 11 | 17 | 0 |
| hono | 4.12.12 | 4.12.12-aikido.2 | 0 | 1 | 17 | 0 |
| dompurify | 3.2.4 | 3.2.4-aikido.4 | 0 | 0 | 20 | 0 |
| protobufjs | 8.0.1 | 8.0.1-aikido.9 | 1 | 5 | 6 | 0 |
| tar | 7.4.3 | 7.4.3-aikido.12 | 1 | 8 | 3 | 0 |
| multer | 1.4.5-lts.1 | 1.4.5-lts.1-aikido.1 | 0 | 10 | 0 | 0 |
| nodemailer | 6.10.1 | 6.10.1-aikido.6 | 0 | 2 | 7 | 0 |
| undici | 6.21.3 | 6.21.3-aikido.10 | 0 | 4 | 4 | 0 |
| handlebars | 4.7.8 | 4.7.8-aikido.6 | 1 | 4 | 2 | 0 |
| node-forge | 1.3.1 | 1.3.1-aikido.5 | 0 | 6 | 1 | 0 |
| fast-xml-parser | 5.2.5 | 5.2.5-aikido.4 | 1 | 3 | 2 | 1 |
| mysql2 | 3.9.2 | 3.9.2-aikido.2 | 2 | 1 | 2 | 0 |
| basic-ftp | 5.2.0 | 5.2.0-aikido.4 | 1 | 4 | 0 | 0 |
| lodash | 4.17.21 | 4.17.21-aikido.2 | 0 | 2 | 3 | 0 |
| jsonwebtoken | 8.5.1 | 8.5.1-aikido.5 | 0 | 2 | 2 | 0 |
| js-yaml | 4.1.0 | 4.1.0-aikido.5 | 0 | 2 | 2 | 0 |
| koa | 2.15.4 | 2.15.4-aikido.4 | 1 | 1 | 1 | 1 |
| ws | 8.17.1 | 8.17.1-aikido.2 | 0 | 2 | 1 | 0 |
| crypto-js | 3.3.0 | 3.3.0-aikido.4 | 3 | 0 | 0 | 0 |
| shell-quote | 1.8.3 | 1.8.3-aikido.3 | 1 | 1 | 0 | 0 |
| form-data | 4.0.4 | 4.0.4-aikido.1 | 1 | 1 | 0 | 0 |
| elliptic | 6.6.0 | 6.6.0-aikido.1 | 1 | 0 | 0 | 1 |
| ajv | 6.5.2 | 6.5.2-aikido.2 | 0 | 0 | 2 | 0 |
| xregexp | 4.0.0 | 4.0.0-aikido.1 | 0 | 1 | 0 | 0 |

```bash
npm ci
npm start
```
