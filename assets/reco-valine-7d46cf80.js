var name = "rollup_babel";
var version = "1.4.18";
var main = "index.js";
var author = "reco_luan";
var license = "MIT";
var scripts = {
  dev: "rollup -c"
};
var devDependencies = {
  "@babel/core": "^7.16.5",
  "@babel/plugin-transform-runtime": "^7.16.5",
  "@babel/preset-env": "^7.16.5",
  "@rollup/plugin-babel": "^5.3.0",
  "@rollup/plugin-commonjs": "^21.0.1",
  "@rollup/plugin-html": "^0.2.4",
  "@rollup/plugin-node-resolve": "^13.1.1",
  "@rollup/plugin-typescript": "^8.3.0",
  rollup: "^2.61.1",
  "rollup-plugin-typescript2": "^0.31.1",
  tslib: "^2.3.1",
  typescript: "^4.5.4"
};
var dependencies = {
  "@babel/runtime": "^7.16.5",
  "@babel/runtime-corejs3": "^7.16.5",
  "@rollup/plugin-json": "^4.1.0",
  autosize: "^5.0.1",
  "blueimp-md5": "^2.19.0",
  "core-js": "3.20.0",
  hanabi: "^0.4.0",
  "leancloud-storage": "^4.12.2",
  marked: "^4.0.16"
};
var pkg = {
  name,
  version,
  main,
  author,
  license,
  scripts,
  devDependencies,
  dependencies
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var md5$1 = { exports: {} };
(function(module) {
  (function($) {
    function safeAdd(x, y) {
      var lsw = (x & 65535) + (y & 65535);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 65535;
    }
    function bitRotateLeft(num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    }
    function md5cmn(q, a, b, x, s, t2) {
      return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t2)), s), b);
    }
    function md5ff(a, b, c, d2, x, s, t2) {
      return md5cmn(b & c | ~b & d2, a, b, x, s, t2);
    }
    function md5gg(a, b, c, d2, x, s, t2) {
      return md5cmn(b & d2 | c & ~d2, a, b, x, s, t2);
    }
    function md5hh(a, b, c, d2, x, s, t2) {
      return md5cmn(b ^ c ^ d2, a, b, x, s, t2);
    }
    function md5ii(a, b, c, d2, x, s, t2) {
      return md5cmn(c ^ (b | ~d2), a, b, x, s, t2);
    }
    function binlMD5(x, len) {
      x[len >> 5] |= 128 << len % 32;
      x[(len + 64 >>> 9 << 4) + 14] = len;
      var i2;
      var olda;
      var oldb;
      var oldc;
      var oldd;
      var a = 1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d2 = 271733878;
      for (i2 = 0; i2 < x.length; i2 += 16) {
        olda = a;
        oldb = b;
        oldc = c;
        oldd = d2;
        a = md5ff(a, b, c, d2, x[i2], 7, -680876936);
        d2 = md5ff(d2, a, b, c, x[i2 + 1], 12, -389564586);
        c = md5ff(c, d2, a, b, x[i2 + 2], 17, 606105819);
        b = md5ff(b, c, d2, a, x[i2 + 3], 22, -1044525330);
        a = md5ff(a, b, c, d2, x[i2 + 4], 7, -176418897);
        d2 = md5ff(d2, a, b, c, x[i2 + 5], 12, 1200080426);
        c = md5ff(c, d2, a, b, x[i2 + 6], 17, -1473231341);
        b = md5ff(b, c, d2, a, x[i2 + 7], 22, -45705983);
        a = md5ff(a, b, c, d2, x[i2 + 8], 7, 1770035416);
        d2 = md5ff(d2, a, b, c, x[i2 + 9], 12, -1958414417);
        c = md5ff(c, d2, a, b, x[i2 + 10], 17, -42063);
        b = md5ff(b, c, d2, a, x[i2 + 11], 22, -1990404162);
        a = md5ff(a, b, c, d2, x[i2 + 12], 7, 1804603682);
        d2 = md5ff(d2, a, b, c, x[i2 + 13], 12, -40341101);
        c = md5ff(c, d2, a, b, x[i2 + 14], 17, -1502002290);
        b = md5ff(b, c, d2, a, x[i2 + 15], 22, 1236535329);
        a = md5gg(a, b, c, d2, x[i2 + 1], 5, -165796510);
        d2 = md5gg(d2, a, b, c, x[i2 + 6], 9, -1069501632);
        c = md5gg(c, d2, a, b, x[i2 + 11], 14, 643717713);
        b = md5gg(b, c, d2, a, x[i2], 20, -373897302);
        a = md5gg(a, b, c, d2, x[i2 + 5], 5, -701558691);
        d2 = md5gg(d2, a, b, c, x[i2 + 10], 9, 38016083);
        c = md5gg(c, d2, a, b, x[i2 + 15], 14, -660478335);
        b = md5gg(b, c, d2, a, x[i2 + 4], 20, -405537848);
        a = md5gg(a, b, c, d2, x[i2 + 9], 5, 568446438);
        d2 = md5gg(d2, a, b, c, x[i2 + 14], 9, -1019803690);
        c = md5gg(c, d2, a, b, x[i2 + 3], 14, -187363961);
        b = md5gg(b, c, d2, a, x[i2 + 8], 20, 1163531501);
        a = md5gg(a, b, c, d2, x[i2 + 13], 5, -1444681467);
        d2 = md5gg(d2, a, b, c, x[i2 + 2], 9, -51403784);
        c = md5gg(c, d2, a, b, x[i2 + 7], 14, 1735328473);
        b = md5gg(b, c, d2, a, x[i2 + 12], 20, -1926607734);
        a = md5hh(a, b, c, d2, x[i2 + 5], 4, -378558);
        d2 = md5hh(d2, a, b, c, x[i2 + 8], 11, -2022574463);
        c = md5hh(c, d2, a, b, x[i2 + 11], 16, 1839030562);
        b = md5hh(b, c, d2, a, x[i2 + 14], 23, -35309556);
        a = md5hh(a, b, c, d2, x[i2 + 1], 4, -1530992060);
        d2 = md5hh(d2, a, b, c, x[i2 + 4], 11, 1272893353);
        c = md5hh(c, d2, a, b, x[i2 + 7], 16, -155497632);
        b = md5hh(b, c, d2, a, x[i2 + 10], 23, -1094730640);
        a = md5hh(a, b, c, d2, x[i2 + 13], 4, 681279174);
        d2 = md5hh(d2, a, b, c, x[i2], 11, -358537222);
        c = md5hh(c, d2, a, b, x[i2 + 3], 16, -722521979);
        b = md5hh(b, c, d2, a, x[i2 + 6], 23, 76029189);
        a = md5hh(a, b, c, d2, x[i2 + 9], 4, -640364487);
        d2 = md5hh(d2, a, b, c, x[i2 + 12], 11, -421815835);
        c = md5hh(c, d2, a, b, x[i2 + 15], 16, 530742520);
        b = md5hh(b, c, d2, a, x[i2 + 2], 23, -995338651);
        a = md5ii(a, b, c, d2, x[i2], 6, -198630844);
        d2 = md5ii(d2, a, b, c, x[i2 + 7], 10, 1126891415);
        c = md5ii(c, d2, a, b, x[i2 + 14], 15, -1416354905);
        b = md5ii(b, c, d2, a, x[i2 + 5], 21, -57434055);
        a = md5ii(a, b, c, d2, x[i2 + 12], 6, 1700485571);
        d2 = md5ii(d2, a, b, c, x[i2 + 3], 10, -1894986606);
        c = md5ii(c, d2, a, b, x[i2 + 10], 15, -1051523);
        b = md5ii(b, c, d2, a, x[i2 + 1], 21, -2054922799);
        a = md5ii(a, b, c, d2, x[i2 + 8], 6, 1873313359);
        d2 = md5ii(d2, a, b, c, x[i2 + 15], 10, -30611744);
        c = md5ii(c, d2, a, b, x[i2 + 6], 15, -1560198380);
        b = md5ii(b, c, d2, a, x[i2 + 13], 21, 1309151649);
        a = md5ii(a, b, c, d2, x[i2 + 4], 6, -145523070);
        d2 = md5ii(d2, a, b, c, x[i2 + 11], 10, -1120210379);
        c = md5ii(c, d2, a, b, x[i2 + 2], 15, 718787259);
        b = md5ii(b, c, d2, a, x[i2 + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d2 = safeAdd(d2, oldd);
      }
      return [a, b, c, d2];
    }
    function binl2rstr(input) {
      var i2;
      var output = "";
      var length32 = input.length * 32;
      for (i2 = 0; i2 < length32; i2 += 8) {
        output += String.fromCharCode(input[i2 >> 5] >>> i2 % 32 & 255);
      }
      return output;
    }
    function rstr2binl(input) {
      var i2;
      var output = [];
      output[(input.length >> 2) - 1] = void 0;
      for (i2 = 0; i2 < output.length; i2 += 1) {
        output[i2] = 0;
      }
      var length8 = input.length * 8;
      for (i2 = 0; i2 < length8; i2 += 8) {
        output[i2 >> 5] |= (input.charCodeAt(i2 / 8) & 255) << i2 % 32;
      }
      return output;
    }
    function rstrMD5(s) {
      return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
    }
    function rstrHMACMD5(key, data2) {
      var i2;
      var bkey = rstr2binl(key);
      var ipad = [];
      var opad = [];
      var hash;
      ipad[15] = opad[15] = void 0;
      if (bkey.length > 16) {
        bkey = binlMD5(bkey, key.length * 8);
      }
      for (i2 = 0; i2 < 16; i2 += 1) {
        ipad[i2] = bkey[i2] ^ 909522486;
        opad[i2] = bkey[i2] ^ 1549556828;
      }
      hash = binlMD5(ipad.concat(rstr2binl(data2)), 512 + data2.length * 8);
      return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
    }
    function rstr2hex(input) {
      var hexTab = "0123456789abcdef";
      var output = "";
      var x;
      var i2;
      for (i2 = 0; i2 < input.length; i2 += 1) {
        x = input.charCodeAt(i2);
        output += hexTab.charAt(x >>> 4 & 15) + hexTab.charAt(x & 15);
      }
      return output;
    }
    function str2rstrUTF8(input) {
      return unescape(encodeURIComponent(input));
    }
    function rawMD5(s) {
      return rstrMD5(str2rstrUTF8(s));
    }
    function hexMD5(s) {
      return rstr2hex(rawMD5(s));
    }
    function rawHMACMD5(k, d2) {
      return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d2));
    }
    function hexHMACMD5(k, d2) {
      return rstr2hex(rawHMACMD5(k, d2));
    }
    function md52(string, key, raw) {
      if (!key) {
        if (!raw) {
          return hexMD5(string);
        }
        return rawMD5(string);
      }
      if (!raw) {
        return hexHMACMD5(key, string);
      }
      return rawHMACMD5(key, string);
    }
    if (module.exports) {
      module.exports = md52;
    } else {
      $.md5 = md52;
    }
  })(commonjsGlobal);
})(md5$1);
var md5 = md5$1.exports;
function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: "",
    highlight: null,
    langPrefix: "language-",
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}
let defaults = getDefaults();
function changeDefaults(newDefaults) {
  defaults = newDefaults;
}
const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
const escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape$1(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}
const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape$1(html) {
  return html.replace(unescapeTest, (_, n2) => {
    n2 = n2.toLowerCase();
    if (n2 === "colon")
      return ":";
    if (n2.charAt(0) === "#") {
      return n2.charAt(1) === "x" ? String.fromCharCode(parseInt(n2.substring(2), 16)) : String.fromCharCode(+n2.substring(1));
    }
    return "";
  });
}
const caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  regex = typeof regex === "string" ? regex : regex.source;
  opt = opt || "";
  const obj = {
    replace: (name2, val) => {
      val = val.source || val;
      val = val.replace(caret, "$1");
      regex = regex.replace(name2, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}
const nonWordAndColonTest = /[^\w:]/g;
const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape$1(href)).replace(nonWordAndColonTest, "").toLowerCase();
    } catch (e2) {
      return null;
    }
    if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch (e2) {
    return null;
  }
  return href;
}
const baseUrls = {};
const justDomain = /^[^:]+:\/*[^/]*$/;
const protocol = /^([^:]+:)[\s\S]*$/;
const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function resolveUrl(base, href) {
  if (!baseUrls[" " + base]) {
    if (justDomain.test(base)) {
      baseUrls[" " + base] = base + "/";
    } else {
      baseUrls[" " + base] = rtrim(base, "/", true);
    }
  }
  base = baseUrls[" " + base];
  const relativeBase = base.indexOf(":") === -1;
  if (href.substring(0, 2) === "//") {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, "$1") + href;
  } else if (href.charAt(0) === "/") {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, "$1") + href;
  } else {
    return base + href;
  }
}
const noopTest = { exec: function noopTest2() {
} };
function merge(obj) {
  let i2 = 1, target, key;
  for (; i2 < arguments.length; i2++) {
    target = arguments[i2];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }
  return obj;
}
function splitCells(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped = false, curr = offset;
    while (--curr >= 0 && str[curr] === "\\")
      escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(/ \|/);
  let i2 = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count)
      cells.push("");
  }
  for (; i2 < cells.length; i2++) {
    cells[i2] = cells[i2].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim(str, c, invert) {
  const l2 = str.length;
  if (l2 === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l2) {
    const currChar = str.charAt(l2 - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l2 - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l2 = str.length;
  let level = 0, i2 = 0;
  for (; i2 < l2; i2++) {
    if (str[i2] === "\\") {
      i2++;
    } else if (str[i2] === b[0]) {
      level++;
    } else if (str[i2] === b[1]) {
      level--;
      if (level < 0) {
        return i2;
      }
    }
  }
  return -1;
}
function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
  }
}
function repeatString(pattern, count) {
  if (count < 1) {
    return "";
  }
  let result = "";
  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }
    count >>= 1;
    pattern += pattern;
  }
  return result + pattern;
}
function outputLink(cap, link, raw, lexer) {
  const href = link.href;
  const title = link.title ? escape$1(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer.inlineTokens(text, [])
    };
    lexer.state.inLink = false;
    return token;
  }
  return {
    type: "image",
    raw,
    href,
    title,
    text: escape$1(text)
  };
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map((node) => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
class Tokenizer {
  constructor(options) {
    this.options = options || defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim() : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      const token = {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: cap[0]
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ *>[ \t]?/gm, "");
      return {
        type: "blockquote",
        raw: cap[0],
        tokens: this.lexer.blockTokens(text, []),
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i2, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      while (src) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        line = cap[2].split("\n", 1)[0];
        nextLine = src.split("\n", 1)[0];
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        blankLine = false;
        if (!line && /^ *$/.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          while (src) {
            rawLine = src.split("\n", 1)[0];
            line = rawLine;
            if (this.options.pedantic) {
              line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
            }
            if (nextBulletRegex.test(line)) {
              break;
            }
            if (hrRegex.test(src)) {
              break;
            }
            if (line.search(/[^ ]/) >= indent || !line.trim()) {
              itemContents += "\n" + line.slice(indent);
            } else if (!blankLine) {
              itemContents += "\n" + line;
            } else {
              break;
            }
            if (!blankLine && !line.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
          }
        }
        if (!list.loose) {
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
          }
        }
        list.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });
        list.raw += raw;
      }
      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();
      const l2 = list.items.length;
      for (i2 = 0; i2 < l2; i2++) {
        this.lexer.state.top = false;
        list.items[i2].tokens = this.lexer.blockTokens(list.items[i2].text, []);
        const spacers = list.items[i2].tokens.filter((t2) => t2.type === "space");
        const hasMultipleLineBreaks = spacers.every((t2) => {
          const chars = t2.raw.split("");
          let lineBreaks = 0;
          for (const char of chars) {
            if (char === "\n") {
              lineBreaks += 1;
            }
            if (lineBreaks > 1) {
              return true;
            }
          }
          return false;
        });
        if (!list.loose && spacers.length && hasMultipleLineBreaks) {
          list.loose = true;
          list.items[i2].loose = true;
        }
      }
      return list;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        raw: cap[0],
        pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
        text: cap[0]
      };
      if (this.options.sanitize) {
        token.type = "paragraph";
        token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$1(cap[0]);
        token.tokens = [];
        this.lexer.inline(token.text, token.tokens);
      }
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      if (cap[3])
        cap[3] = cap[3].substring(1, cap[3].length - 1);
      const tag = cap[1].toLowerCase().replace(/\s+/g, " ");
      return {
        type: "def",
        tag,
        raw: cap[0],
        href: cap[2],
        title: cap[3]
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      const item = {
        type: "table",
        header: splitCells(cap[1]).map((c) => {
          return { text: c };
        }),
        align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : []
      };
      if (item.header.length === item.align.length) {
        item.raw = cap[0];
        let l2 = item.align.length;
        let i2, j, k, row;
        for (i2 = 0; i2 < l2; i2++) {
          if (/^ *-+: *$/.test(item.align[i2])) {
            item.align[i2] = "right";
          } else if (/^ *:-+: *$/.test(item.align[i2])) {
            item.align[i2] = "center";
          } else if (/^ *:-+ *$/.test(item.align[i2])) {
            item.align[i2] = "left";
          } else {
            item.align[i2] = null;
          }
        }
        l2 = item.rows.length;
        for (i2 = 0; i2 < l2; i2++) {
          item.rows[i2] = splitCells(item.rows[i2], item.header.length).map((c) => {
            return { text: c };
          });
        }
        l2 = item.header.length;
        for (j = 0; j < l2; j++) {
          item.header[j].tokens = [];
          this.lexer.inline(item.header[j].text, item.header[j].tokens);
        }
        l2 = item.rows.length;
        for (j = 0; j < l2; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = [];
            this.lexer.inline(row[k].text, row[k].tokens);
          }
        }
        return item;
      }
    }
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      const token = {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const token = {
        type: "paragraph",
        raw: cap[0],
        text: cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      const token = {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape$1(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: this.options.sanitize ? "text" : "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$1(cap[0]) : cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
        title: title ? title.replace(this.rules.inline._escapes, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
      link = links[link.toLowerCase()];
      if (!link || !link.href) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match)
      return;
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
      return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || nextChar && (prevChar === "" || this.rules.inline.punctuation.exec(prevChar))) {
      const lLength = match[0].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim)
          continue;
        rLength = rDelim.length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = src.slice(1, lLength + match.index + rLength);
          return {
            type: "em",
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text: text2,
            tokens: this.lexer.inlineTokens(text2, [])
          };
        }
        const text = src.slice(2, lLength + match.index + rLength - 1);
        return {
          type: "strong",
          raw: src.slice(0, lLength + match.index + rLength + 1),
          text,
          tokens: this.lexer.inlineTokens(text, [])
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape$1(text, true);
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2], [])
      };
    }
  }
  autolink(src, mangle2) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = escape$1(this.options.mangle ? mangle2(cap[1]) : cap[1]);
        href = "mailto:" + text;
      } else {
        text = escape$1(cap[1]);
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src, mangle2) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@") {
        text = escape$1(this.options.mangle ? mangle2(cap[0]) : cap[0]);
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape$1(cap[0]);
        if (cap[1] === "www.") {
          href = "http://" + text;
        } else {
          href = text;
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src, smartypants2) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape$1(cap[0]) : cap[0];
      } else {
        text = escape$1(this.options.smartypants ? smartypants2(cap[0]) : cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text
      };
    }
  }
}
const block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace("label", block._label).replace("title", block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */).replace("bull", block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block.def.source + ")").getRegex();
block._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, "i").replace("comment", block._comment).replace("tag", block._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.blockquote = edit(block.blockquote).replace("paragraph", block.paragraph).getRegex();
block.normal = merge({}, block);
block.gfm = merge({}, block.normal, {
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
  // Cells
});
block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", block.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.pedantic = merge({}, block.normal, {
  html: edit(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
});
const inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //          () Skip orphan inside strong  () Consume to delim (1) #***                (2) a***#, a***                   (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
    // ^- Not allowed for _
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};
inline._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();
inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /\\\*|\\_/g;
inline._comment = edit(block._comment).replace("(?:-->|$)", "-->").getRegex();
inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "g").replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "g").replace(/punct/g, inline._punctuation).getRegex();
inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace("scheme", inline._scheme).replace("email", inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace("comment", inline._comment).replace("attribute", inline._attribute).getRegex();
inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace("label", inline._label).replace("href", inline._href).replace("title", inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace("label", inline._label).replace("ref", block._label).getRegex();
inline.nolink = edit(inline.nolink).replace("ref", block._label).getRegex();
inline.reflinkSearch = edit(inline.reflinkSearch, "g").replace("reflink", inline.reflink).replace("nolink", inline.nolink).getRegex();
inline.normal = merge({}, inline);
inline.pedantic = merge({}, inline.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline._label).getRegex()
});
inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
inline.gfm.url = edit(inline.gfm.url, "i").replace("email", inline.gfm._extended_email).getRegex();
inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace("{2,}", "*").getRegex(),
  text: edit(inline.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
});
function smartypants(text) {
  return text.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
}
function mangle(text) {
  let out = "", i2, ch;
  const l2 = text.length;
  for (i2 = 0; i2 < l2; i2++) {
    ch = text.charCodeAt(i2);
    if (Math.random() > 0.5) {
      ch = "x" + ch.toString(16);
    }
    out += "&#" + ch + ";";
  }
  return out;
}
class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */ Object.create(null);
    this.options = options || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */
  static lex(src, options) {
    const lexer = new Lexer(options);
    return lexer.lex(src);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options) {
    const lexer = new Lexer(options);
    return lexer.inlineTokens(src);
  }
  /**
   * Preprocessing
   */
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n");
    this.blockTokens(src, this.tokens);
    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }
    return this.tokens;
  }
  /**
   * Lexing
   */
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + "    ".repeat(tabs.length);
      });
    }
    let token, lastToken, cutSrc, lastParagraphClipped;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          tokens[tokens.length - 1].raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens) {
    this.inlineQueue.push({ src, tokens });
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
}
class Renderer {
  constructor(options) {
    this.options = options || defaults;
  }
  code(code, infostring, escaped) {
    const lang = (infostring || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }
    code = code.replace(/\n$/, "") + "\n";
    if (!lang) {
      return "<pre><code>" + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="' + this.options.langPrefix + escape$1(lang, true) + '">' + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
  }
  /**
   * @param {string} quote
   */
  blockquote(quote) {
    return `<blockquote>
${quote}</blockquote>
`;
  }
  html(html) {
    return html;
  }
  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      const id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}">${text}</h${level}>
`;
    }
    return `<h${level}>${text}</h${level}>
`;
  }
  hr() {
    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
  }
  list(body, ordered, start) {
    const type = ordered ? "ol" : "ul", startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
  }
  /**
   * @param {string} text
   */
  listitem(text) {
    return `<li>${text}</li>
`;
  }
  checkbox(checked) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  /**
   * @param {string} text
   */
  paragraph(text) {
    return `<p>${text}</p>
`;
  }
  /**
   * @param {string} header
   * @param {string} body
   */
  table(header, body) {
    if (body)
      body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  /**
   * @param {string} content
   */
  tablerow(content) {
    return `<tr>
${content}</tr>
`;
  }
  tablecell(content, flags) {
    const type = flags.header ? "th" : "td";
    const tag = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
    return tag + content + `</${type}>
`;
  }
  /**
   * span level renderer
   * @param {string} text
   */
  strong(text) {
    return `<strong>${text}</strong>`;
  }
  /**
   * @param {string} text
   */
  em(text) {
    return `<em>${text}</em>`;
  }
  /**
   * @param {string} text
   */
  codespan(text) {
    return `<code>${text}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  /**
   * @param {string} text
   */
  del(text) {
    return `<del>${text}</del>`;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + escape$1(href) + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += this.options.xhtml ? "/>" : ">";
    return out;
  }
  text(text) {
    return text;
  }
}
class TextRenderer {
  // no need for block level renderers
  strong(text) {
    return text;
  }
  em(text) {
    return text;
  }
  codespan(text) {
    return text;
  }
  del(text) {
    return text;
  }
  html(text) {
    return text;
  }
  text(text) {
    return text;
  }
  link(href, title, text) {
    return "" + text;
  }
  image(href, title, text) {
    return "" + text;
  }
  br() {
    return "";
  }
}
class Slugger {
  constructor() {
    this.seen = {};
  }
  /**
   * @param {string} value
   */
  serialize(value) {
    return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  /**
   * Finds the next safe (unique) slug to use
   * @param {string} originalSlug
   * @param {boolean} isDryRun
   */
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + "-" + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }
  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */
  slug(value, options = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options.dryrun);
  }
}
class Parser {
  constructor(options) {
    this.options = options || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }
  /**
   * Static Parse Method
   */
  static parse(tokens, options) {
    const parser = new Parser(options);
    return parser.parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options) {
    const parser = new Parser(options);
    return parser.parseInline(tokens);
  }
  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = "", i2, j, k, l2, l3, row, cell, header, body, token, ordered, start, loose, itemBody, item, checked, task, checkbox, ret;
    const l4 = tokens.length;
    for (i2 = 0; i2 < l4; i2++) {
      token = tokens[i2];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "space": {
          continue;
        }
        case "hr": {
          out += this.renderer.hr();
          continue;
        }
        case "heading": {
          out += this.renderer.heading(
            this.parseInline(token.tokens),
            token.depth,
            unescape$1(this.parseInline(token.tokens, this.textRenderer)),
            this.slugger
          );
          continue;
        }
        case "code": {
          out += this.renderer.code(
            token.text,
            token.lang,
            token.escaped
          );
          continue;
        }
        case "table": {
          header = "";
          cell = "";
          l2 = token.header.length;
          for (j = 0; j < l2; j++) {
            cell += this.renderer.tablecell(
              this.parseInline(token.header[j].tokens),
              { header: true, align: token.align[j] }
            );
          }
          header += this.renderer.tablerow(cell);
          body = "";
          l2 = token.rows.length;
          for (j = 0; j < l2; j++) {
            row = token.rows[j];
            cell = "";
            l3 = row.length;
            for (k = 0; k < l3; k++) {
              cell += this.renderer.tablecell(
                this.parseInline(row[k].tokens),
                { header: false, align: token.align[k] }
              );
            }
            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case "blockquote": {
          body = this.parse(token.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case "list": {
          ordered = token.ordered;
          start = token.start;
          loose = token.loose;
          l2 = token.items.length;
          body = "";
          for (j = 0; j < l2; j++) {
            item = token.items[j];
            checked = item.checked;
            task = item.task;
            itemBody = "";
            if (item.task) {
              checkbox = this.renderer.checkbox(checked);
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                  item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                    item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: "text",
                    text: checkbox
                  });
                }
              } else {
                itemBody += checkbox;
              }
            }
            itemBody += this.parse(item.tokens, loose);
            body += this.renderer.listitem(itemBody, task, checked);
          }
          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case "html": {
          out += this.renderer.html(token.text);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case "text": {
          body = token.tokens ? this.parseInline(token.tokens) : token.text;
          while (i2 + 1 < l4 && tokens[i2 + 1].type === "text") {
            token = tokens[++i2];
            body += "\n" + (token.tokens ? this.parseInline(token.tokens) : token.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "", i2, token, ret;
    const l2 = tokens.length;
    for (i2 = 0; i2 < l2; i2++) {
      token = tokens[i2];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "escape": {
          out += renderer.text(token.text);
          break;
        }
        case "html": {
          out += renderer.html(token.text);
          break;
        }
        case "link": {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case "image": {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case "strong": {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case "em": {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case "codespan": {
          out += renderer.codespan(token.text);
          break;
        }
        case "br": {
          out += renderer.br();
          break;
        }
        case "del": {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case "text": {
          out += renderer.text(token.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
}
function marked(src, opt, callback) {
  if (typeof src === "undefined" || src === null) {
    throw new Error("marked(): input parameter is undefined or null");
  }
  if (typeof src !== "string") {
    throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected");
  }
  if (typeof opt === "function") {
    callback = opt;
    opt = null;
  }
  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);
  if (callback) {
    const highlight = opt.highlight;
    let tokens;
    try {
      tokens = Lexer.lex(src, opt);
    } catch (e2) {
      return callback(e2);
    }
    const done = function(err) {
      let out;
      if (!err) {
        try {
          if (opt.walkTokens) {
            marked.walkTokens(tokens, opt.walkTokens);
          }
          out = Parser.parse(tokens, opt);
        } catch (e2) {
          err = e2;
        }
      }
      opt.highlight = highlight;
      return err ? callback(err) : callback(null, out);
    };
    if (!highlight || highlight.length < 3) {
      return done();
    }
    delete opt.highlight;
    if (!tokens.length)
      return done();
    let pending = 0;
    marked.walkTokens(tokens, function(token) {
      if (token.type === "code") {
        pending++;
        setTimeout(() => {
          highlight(token.text, token.lang, function(err, code) {
            if (err) {
              return done(err);
            }
            if (code != null && code !== token.text) {
              token.text = code;
              token.escaped = true;
            }
            pending--;
            if (pending === 0) {
              done();
            }
          });
        }, 0);
      }
    });
    if (pending === 0) {
      done();
    }
    return;
  }
  try {
    const tokens = Lexer.lex(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parse(tokens, opt);
  } catch (e2) {
    e2.message += "\nPlease report this to https://github.com/markedjs/marked.";
    if (opt.silent) {
      return "<p>An error occurred:</p><pre>" + escape$1(e2.message + "", true) + "</pre>";
    }
    throw e2;
  }
}
marked.options = marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = getDefaults;
marked.defaults = defaults;
marked.use = function(...args) {
  const opts = merge({}, ...args);
  const extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };
  let hasExtensions;
  args.forEach((pack) => {
    if (pack.extensions) {
      hasExtensions = true;
      pack.extensions.forEach((ext) => {
        if (!ext.name) {
          throw new Error("extension name required");
        }
        if (ext.renderer) {
          const prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
          if (prevRenderer) {
            extensions.renderers[ext.name] = function(...args2) {
              let ret = ext.renderer.apply(this, args2);
              if (ret === false) {
                ret = prevRenderer.apply(this, args2);
              }
              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }
        if (ext.tokenizer) {
          if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
            throw new Error("extension level must be 'block' or 'inline'");
          }
          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }
          if (ext.start) {
            if (ext.level === "block") {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === "inline") {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }
        if (ext.childTokens) {
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
    }
    if (pack.renderer) {
      const renderer = marked.defaults.renderer || new Renderer();
      for (const prop in pack.renderer) {
        const prevRenderer = renderer[prop];
        renderer[prop] = (...args2) => {
          let ret = pack.renderer[prop].apply(renderer, args2);
          if (ret === false) {
            ret = prevRenderer.apply(renderer, args2);
          }
          return ret;
        };
      }
      opts.renderer = renderer;
    }
    if (pack.tokenizer) {
      const tokenizer = marked.defaults.tokenizer || new Tokenizer();
      for (const prop in pack.tokenizer) {
        const prevTokenizer = tokenizer[prop];
        tokenizer[prop] = (...args2) => {
          let ret = pack.tokenizer[prop].apply(tokenizer, args2);
          if (ret === false) {
            ret = prevTokenizer.apply(tokenizer, args2);
          }
          return ret;
        };
      }
      opts.tokenizer = tokenizer;
    }
    if (pack.walkTokens) {
      const walkTokens = marked.defaults.walkTokens;
      opts.walkTokens = function(token) {
        pack.walkTokens.call(this, token);
        if (walkTokens) {
          walkTokens.call(this, token);
        }
      };
    }
    if (hasExtensions) {
      opts.extensions = extensions;
    }
    marked.setOptions(opts);
  });
};
marked.walkTokens = function(tokens, callback) {
  for (const token of tokens) {
    callback.call(marked, token);
    switch (token.type) {
      case "table": {
        for (const cell of token.header) {
          marked.walkTokens(cell.tokens, callback);
        }
        for (const row of token.rows) {
          for (const cell of row) {
            marked.walkTokens(cell.tokens, callback);
          }
        }
        break;
      }
      case "list": {
        marked.walkTokens(token.items, callback);
        break;
      }
      default: {
        if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) {
          marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
            marked.walkTokens(token[childTokens], callback);
          });
        } else if (token.tokens) {
          marked.walkTokens(token.tokens, callback);
        }
      }
    }
  }
};
marked.parseInline = function(src, opt) {
  if (typeof src === "undefined" || src === null) {
    throw new Error("marked.parseInline(): input parameter is undefined or null");
  }
  if (typeof src !== "string") {
    throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected");
  }
  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);
  try {
    const tokens = Lexer.lexInline(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parseInline(tokens, opt);
  } catch (e2) {
    e2.message += "\nPlease report this to https://github.com/markedjs/marked.";
    if (opt.silent) {
      return "<p>An error occurred:</p><pre>" + escape$1(e2.message + "", true) + "</pre>";
    }
    throw e2;
  }
};
marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.parse = marked;
marked.options;
const setOptions = marked.setOptions;
marked.use;
marked.walkTokens;
marked.parseInline;
Parser.parse;
Lexer.lex;
var e, t, n = "function" == typeof Map ? /* @__PURE__ */ new Map() : (e = [], t = [], { has: function(t2) {
  return e.indexOf(t2) > -1;
}, get: function(n2) {
  return t[e.indexOf(n2)];
}, set: function(n2, o2) {
  -1 === e.indexOf(n2) && (e.push(n2), t.push(o2));
}, delete: function(n2) {
  var o2 = e.indexOf(n2);
  o2 > -1 && (e.splice(o2, 1), t.splice(o2, 1));
} }), o = function(e2) {
  return new Event(e2, { bubbles: true });
};
try {
  new Event("test");
} catch (e2) {
  o = function(e3) {
    var t2 = document.createEvent("Event");
    return t2.initEvent(e3, true, false), t2;
  };
}
function r(e2) {
  var t2 = n.get(e2);
  t2 && t2.destroy();
}
function i(e2) {
  var t2 = n.get(e2);
  t2 && t2.update();
}
var l = null;
"undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((l = function(e2) {
  return e2;
}).destroy = function(e2) {
  return e2;
}, l.update = function(e2) {
  return e2;
}) : ((l = function(e2, t2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], function(e3) {
    return function(e4) {
      if (e4 && e4.nodeName && "TEXTAREA" === e4.nodeName && !n.has(e4)) {
        var t3, r2 = null, i2 = null, l2 = null, d2 = function() {
          e4.clientWidth !== i2 && c();
        }, a = function(t4) {
          window.removeEventListener("resize", d2, false), e4.removeEventListener("input", c, false), e4.removeEventListener("keyup", c, false), e4.removeEventListener("autosize:destroy", a, false), e4.removeEventListener("autosize:update", c, false), Object.keys(t4).forEach(function(n2) {
            e4.style[n2] = t4[n2];
          }), n.delete(e4);
        }.bind(e4, { height: e4.style.height, resize: e4.style.resize, overflowY: e4.style.overflowY, overflowX: e4.style.overflowX, wordWrap: e4.style.wordWrap });
        e4.addEventListener("autosize:destroy", a, false), "onpropertychange" in e4 && "oninput" in e4 && e4.addEventListener("keyup", c, false), window.addEventListener("resize", d2, false), e4.addEventListener("input", c, false), e4.addEventListener("autosize:update", c, false), e4.style.overflowX = "hidden", e4.style.wordWrap = "break-word", n.set(e4, { destroy: a, update: c }), "vertical" === (t3 = window.getComputedStyle(e4, null)).resize ? e4.style.resize = "none" : "both" === t3.resize && (e4.style.resize = "horizontal"), r2 = "content-box" === t3.boxSizing ? -(parseFloat(t3.paddingTop) + parseFloat(t3.paddingBottom)) : parseFloat(t3.borderTopWidth) + parseFloat(t3.borderBottomWidth), isNaN(r2) && (r2 = 0), c();
      }
      function u(t4) {
        var n2 = e4.style.width;
        e4.style.width = "0px", e4.style.width = n2, e4.style.overflowY = t4;
      }
      function s() {
        if (0 !== e4.scrollHeight) {
          var t4 = function(e5) {
            for (var t5 = []; e5 && e5.parentNode && e5.parentNode instanceof Element; )
              e5.parentNode.scrollTop && t5.push({ node: e5.parentNode, scrollTop: e5.parentNode.scrollTop }), e5 = e5.parentNode;
            return t5;
          }(e4), n2 = document.documentElement && document.documentElement.scrollTop;
          e4.style.height = "", e4.style.height = e4.scrollHeight + r2 + "px", i2 = e4.clientWidth, t4.forEach(function(e5) {
            e5.node.scrollTop = e5.scrollTop;
          }), n2 && (document.documentElement.scrollTop = n2);
        }
      }
      function c() {
        s();
        var t4 = Math.round(parseFloat(e4.style.height)), n2 = window.getComputedStyle(e4, null), r3 = "content-box" === n2.boxSizing ? Math.round(parseFloat(n2.height)) : e4.offsetHeight;
        if (r3 < t4 ? "hidden" === n2.overflowY && (u("scroll"), s(), r3 = "content-box" === n2.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e4, null).height)) : e4.offsetHeight) : "hidden" !== n2.overflowY && (u("hidden"), s(), r3 = "content-box" === n2.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e4, null).height)) : e4.offsetHeight), l2 !== r3) {
          l2 = r3;
          var i3 = o("autosize:resized");
          try {
            e4.dispatchEvent(i3);
          } catch (e5) {
          }
        }
      }
    }(e3);
  }), e2;
}).destroy = function(e2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], r), e2;
}, l.update = function(e2) {
  return e2 && Array.prototype.forEach.call(e2.length ? e2 : [e2], i), e2;
});
var d = l;
const timeAgo = (date, locale) => {
  if (date) {
    try {
      var oldTime = date.getTime();
      var currTime = (/* @__PURE__ */ new Date()).getTime();
      var diffValue = currTime - oldTime;
      var days = Math.floor(diffValue / (24 * 3600 * 1e3));
      if (days === 0) {
        var leave1 = diffValue % (24 * 3600 * 1e3);
        var hours = Math.floor(leave1 / (3600 * 1e3));
        if (hours === 0) {
          var leave2 = leave1 % (3600 * 1e3);
          var minutes = Math.floor(leave2 / (60 * 1e3));
          if (minutes === 0) {
            var leave3 = leave2 % (60 * 1e3);
            var seconds = Math.round(leave3 / 1e3);
            return seconds + ` ${locale["timeago"]["seconds"]}`;
          }
          return minutes + ` ${locale["timeago"]["minutes"]}`;
        }
        return hours + ` ${locale["timeago"]["hours"]}`;
      }
      if (days < 0)
        return locale["timeago"]["now"];
      if (days < 8) {
        return days + ` ${locale["timeago"]["days"]}`;
      } else {
        return dateFormat(date);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
const dateFormat = (date) => {
  var vDay = padWithZeros(date.getDate(), 2);
  var vMonth = padWithZeros(date.getMonth() + 1, 2);
  var vYear = padWithZeros(date.getFullYear(), 2);
  return `${vYear}-${vMonth}-${vDay}`;
};
const padWithZeros = (vNumber, width) => {
  var numAsString = vNumber.toString();
  while (numAsString.length < width) {
    numAsString = "0" + numAsString;
  }
  return numAsString;
};
function detectFactory(u) {
  var _this = this;
  var match = {
    //内核
    "Trident": u.indexOf("Trident") > -1 || u.indexOf("NET CLR") > -1,
    "Presto": u.indexOf("Presto") > -1,
    "WebKit": u.indexOf("AppleWebKit") > -1,
    "Gecko": u.indexOf("Gecko/") > -1,
    //浏览器
    "Safari": u.indexOf("Safari") > -1,
    "Chrome": u.indexOf("Chrome") > -1 || u.indexOf("CriOS") > -1,
    "IE": u.indexOf("MSIE") > -1 || u.indexOf("Trident") > -1,
    "Edge": u.indexOf("Edge") > -1,
    "Firefox": u.indexOf("Firefox") > -1 || u.indexOf("FxiOS") > -1,
    "Firefox Focus": u.indexOf("Focus") > -1,
    "Chromium": u.indexOf("Chromium") > -1,
    "Opera": u.indexOf("Opera") > -1 || u.indexOf("OPR") > -1,
    "Vivaldi": u.indexOf("Vivaldi") > -1,
    "Yandex": u.indexOf("YaBrowser") > -1,
    "Kindle": u.indexOf("Kindle") > -1 || u.indexOf("Silk/") > -1,
    "360": u.indexOf("360EE") > -1 || u.indexOf("360SE") > -1,
    "UC": u.indexOf("UC") > -1 || u.indexOf(" UBrowser") > -1,
    "QQBrowser": u.indexOf("QQBrowser") > -1,
    "QQ": u.indexOf("QQ/") > -1,
    "Baidu": u.indexOf("Baidu") > -1 || u.indexOf("BIDUBrowser") > -1,
    "Maxthon": u.indexOf("Maxthon") > -1,
    "Sogou": u.indexOf("MetaSr") > -1 || u.indexOf("Sogou") > -1,
    "LBBROWSER": u.indexOf("LBBROWSER") > -1,
    "2345Explorer": u.indexOf("2345Explorer") > -1,
    "TheWorld": u.indexOf("TheWorld") > -1,
    "XiaoMi": u.indexOf("MiuiBrowser") > -1,
    "Quark": u.indexOf("Quark") > -1,
    "Qiyu": u.indexOf("Qiyu") > -1,
    "Wechat": u.indexOf("MicroMessenger") > -1,
    "Taobao": u.indexOf("AliApp(TB") > -1,
    "Alipay": u.indexOf("AliApp(AP") > -1,
    "Weibo": u.indexOf("Weibo") > -1,
    "Douban": u.indexOf("com.douban.frodo") > -1,
    "Suning": u.indexOf("SNEBUY-APP") > -1,
    "iQiYi": u.indexOf("IqiyiApp") > -1,
    //系统或平台
    "Windows": u.indexOf("Windows") > -1,
    "Linux": u.indexOf("Linux") > -1 || u.indexOf("X11") > -1,
    "Mac OS": u.indexOf("Macintosh") > -1,
    "Android": u.indexOf("Android") > -1 || u.indexOf("Adr") > -1,
    "Ubuntu": u.indexOf("Ubuntu") > -1,
    "FreeBSD": u.indexOf("FreeBSD") > -1,
    "Debian": u.indexOf("Debian") > -1,
    "Windows Phone": u.indexOf("IEMobile") > -1 || u.indexOf("Windows Phone") > -1,
    "BlackBerry": u.indexOf("BlackBerry") > -1 || u.indexOf("RIM") > -1,
    "MeeGo": u.indexOf("MeeGo") > -1,
    "Symbian": u.indexOf("Symbian") > -1,
    "iOS": u.indexOf("like Mac OS X") > -1,
    "Chrome OS": u.indexOf("CrOS") > -1,
    "WebOS": u.indexOf("hpwOS") > -1,
    //设备
    "Mobile": u.indexOf("Mobi") > -1 || u.indexOf("iPh") > -1 || u.indexOf("480") > -1,
    "Tablet": u.indexOf("Tablet") > -1 || u.indexOf("Pad") > -1 || u.indexOf("Nexus 7") > -1
  };
  if (match["Mobile"]) {
    match["Mobile"] = !(u.indexOf("iPad") > -1);
  }
  var hash = {
    engine: ["WebKit", "Trident", "Gecko", "Presto"],
    browser: ["Safari", "Chrome", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera", "Vivaldi", "Yandex", "Kindle", "360", "UC", "QQBrowser", "QQ", "Baidu", "Maxthon", "Sogou", "LBBROWSER", "2345Explorer", "TheWorld", "XiaoMi", "Quark", "Qiyu", "Wechat", "Taobao", "Alipay", "Weibo", "Douban", "Suning", "iQiYi"],
    os: ["Windows", "Linux", "Mac OS", "Android", "Ubuntu", "FreeBSD", "Debian", "iOS", "Windows Phone", "BlackBerry", "MeeGo", "Symbian", "Chrome OS", "WebOS"],
    device: ["Mobile", "Tablet"]
  };
  _this.device = "PC";
  for (var s in hash) {
    for (var i2 = 0; i2 < hash[s].length; i2++) {
      var value = hash[s][i2];
      if (match[value]) {
        _this[s] = value;
      }
    }
  }
  var osVersion = {
    "Windows": function() {
      var v = u.replace(/^.*Windows NT ([\d.]+);.*$/, "$1");
      var hash2 = {
        "6.4": "10",
        "6.3": "8.1",
        "6.2": "8",
        "6.1": "7",
        "6.0": "Vista",
        "5.2": "XP",
        "5.1": "XP",
        "5.0": "2000"
      };
      return hash2[v] || v;
    },
    "Android": function() {
      return u.replace(/^.*Android ([\d.]+);.*$/, "$1");
    },
    "iOS": function() {
      return u.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, ".");
    },
    "Debian": function() {
      return u.replace(/^.*Debian\/([\d.]+).*$/, "$1");
    },
    "Windows Phone": function() {
      return u.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2");
    },
    "Mac OS": function() {
      return u.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, ".");
    },
    "WebOS": function() {
      return u.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1");
    }
  };
  _this.osVersion = "";
  if (osVersion[_this.os]) {
    _this.osVersion = osVersion[_this.os]();
    if (_this.osVersion == u) {
      _this.osVersion = "";
    }
  }
  var version2 = {
    "Safari": function() {
      return u.replace(/^.*Version\/([\d.]+).*$/, "$1");
    },
    "Chrome": function() {
      return u.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1");
    },
    "IE": function() {
      return u.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1");
    },
    "Edge": function() {
      return u.replace(/^.*Edge\/([\d.]+).*$/, "$1");
    },
    "Firefox": function() {
      return u.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1");
    },
    "Firefox Focus": function() {
      return u.replace(/^.*Focus\/([\d.]+).*$/, "$1");
    },
    "Chromium": function() {
      return u.replace(/^.*Chromium\/([\d.]+).*$/, "$1");
    },
    "Opera": function() {
      return u.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1");
    },
    "Vivaldi": function() {
      return u.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1");
    },
    "Yandex": function() {
      return u.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1");
    },
    "Kindle": function() {
      return u.replace(/^.*Version\/([\d.]+).*$/, "$1");
    },
    "Maxthon": function() {
      return u.replace(/^.*Maxthon\/([\d.]+).*$/, "$1");
    },
    "QQBrowser": function() {
      return u.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1");
    },
    "QQ": function() {
      return u.replace(/^.*QQ\/([\d.]+).*$/, "$1");
    },
    "Baidu": function() {
      return u.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1");
    },
    "UC": function() {
      return u.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1");
    },
    "Sogou": function() {
      return u.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1");
    },
    "2345Explorer": function() {
      return u.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1");
    },
    "TheWorld": function() {
      return u.replace(/^.*TheWorld ([\d.]+).*$/, "$1");
    },
    "XiaoMi": function() {
      return u.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1");
    },
    "Quark": function() {
      return u.replace(/^.*Quark\/([\d.]+).*$/, "$1");
    },
    "Qiyu": function() {
      return u.replace(/^.*Qiyu\/([\d.]+).*$/, "$1");
    },
    "Wechat": function() {
      return u.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1");
    },
    "Taobao": function() {
      return u.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1");
    },
    "Alipay": function() {
      return u.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1");
    },
    "Weibo": function() {
      return u.replace(/^.*weibo__([\d.]+).*$/, "$1");
    },
    "Douban": function() {
      return u.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1");
    },
    "Suning": function() {
      return u.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1");
    },
    "iQiYi": function() {
      return u.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1");
    }
  };
  _this.version = "";
  if (version2[_this.browser]) {
    _this.version = version2[_this.browser]();
    if (_this.version == u) {
      _this.version = "";
    }
  }
  if (_this.browser == "Edge") {
    _this.engine = "EdgeHTML";
  } else if (_this.browser == "Chrome" && parseInt(_this.version) > 27) {
    _this.engine = "Blink";
  } else if (_this.browser == "Opera" && parseInt(_this.version) > 12) {
    _this.engine = "Blink";
  } else if (_this.browser == "Yandex") {
    _this.engine = "Blink";
  } else if (_this.browser == void 0) {
    _this.browser = "Unknow App";
  }
}
function detect(u) {
  return new detectFactory(u);
}
const unescapeMap = {};
const escapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "`": "&#x60;",
  "\\": "&#x5c;"
};
for (let key in escapeMap) {
  unescapeMap[escapeMap[key]] = key;
}
const reUnescapedHtml = /[&<>"'`\\]/g;
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
const reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#x60|#x5c);/g;
const reHasEscapedHtml = RegExp(reEscapedHtml.source);
const Utils = {
  on(type, el, handler, capture) {
    type = type.split(" ");
    for (let i2 = 0, len = type.length; i2 < len; i2++) {
      Utils.off(type[i2], el, handler, capture);
      if (el.addEventListener)
        el.addEventListener(type[i2], handler, capture || false);
      else if (el.attachEvent)
        el.attachEvent(`on${type[i2]}`, handler);
      else
        el[`on${type[i2]}`] = handler;
    }
  },
  off(type, el, handler, capture) {
    type = type.split(" ");
    for (let i2 = 0, len = type.length; i2 < len; i2++) {
      if (el.removeEventListener)
        el.removeEventListener(type, handler, capture || false);
      else if (el.detachEvent)
        el.detachEvent(`on${type}`, handler);
      else
        el[`on${type}`] = null;
    }
  },
  escape(s) {
    return s && reHasUnescapedHtml.test(s) ? s.replace(reUnescapedHtml, (chr) => escapeMap[chr]) : s;
  },
  unescape(s) {
    return s && reHasEscapedHtml.test(s) ? s.replace(reEscapedHtml, (entity) => unescapeMap[entity]) : s;
  },
  /**
   * Create Element
   * @param {String} name ElementTagName
   * @param {Object} attrName 
   * @param {Object} attrVal 
   */
  create(name2, attrName, attrVal) {
    let el = document.createElement(name2);
    Utils.attr(el, attrName, attrVal);
    return el;
  },
  /**
   * el.querySelector
   * @param {HTMLElement} el HTMLElement
   * @param {String} selector 
   */
  find(el, selector) {
    return el.querySelector(selector);
  },
  /**
   * el.querySelectorAll
   * @param {HTMLElement} el HTMLElement
   * @param {String} selector 
   */
  findAll(el, selector) {
    return el.querySelectorAll(selector);
  },
  /**
   * get/set attributes
   * @param {HTMLElement} el 
   * @param {String | Object} name 
   * @param {String} value 
   */
  attr(el, name2, value) {
    if (typeof el.getAttribute === "undefined")
      return Utils.prop(el, name2, value);
    if (value !== void 0) {
      if (value === null)
        Utils.removeAttr(el, name2);
      else
        el.setAttribute(name2, value);
    } else if ({}.toString.call(name2) === "[object Object]") {
      Utils.each(name2, (k, v) => {
        el.setAttribute(k, v);
      });
    } else
      return el.getAttribute(name2);
  },
  /**
   * get/set props
   * @param {HTMLElement} el 
   * @param {String} name 
   * @param {String} value 
   */
  prop(el, name2, value) {
    if (value !== void 0)
      return el[name2] = value;
    else if ({}.toString.call(name2) === "[object Object]") {
      Utils.each(name2, (k, v) => {
        el[k] = v;
      });
    } else
      return el[name2];
  },
  /**
   * Remove el attribute
   * @param {HTMLElement} el 
   * @param {String} names 
   * @returns {HTMLElement} el
   */
  removeAttr(el, names) {
    let name2, i2 = 0, attrNames = names && names.match(/[^\x20\t\r\n\f\*\/\\]+/g);
    if (attrNames && el.nodeType === 1) {
      while (name2 = attrNames[i2++]) {
        el.removeAttribute(name2);
      }
    }
    return el;
  },
  /**
   * Clear element attributes
   * @param {HTMLElement} el 
   */
  clearAttr(el) {
    let attrs = el.attributes;
    let ignoreAttrs = ["align", "alt", "checked", "class", "disabled", "href", "id", "target", "title", "type", "src", "style"];
    Utils.each(attrs, (idx, attr) => {
      let name2 = attr.name;
      switch (name2.toLowerCase()) {
        case "style":
          let style = attr.value;
          Utils.each(style.split(";"), (idx2, item) => {
            if (item.indexOf("color") > -1)
              Utils.attr(el, "style", item);
            else
              Utils.removeAttr(el, "style");
          });
          break;
        case "class":
          if (el.nodeName == "CODE")
            return false;
          let clazz = attr.value;
          if (clazz.indexOf("at") > -1)
            Utils.attr(el, "class", "at");
          else if (clazz.indexOf("vemoji") > -1)
            Utils.attr(el, "class", "vemoji");
          else
            Utils.removeAttr(el, "class");
          break;
        default:
          if (ignoreAttrs.indexOf(name2) > -1)
            return true;
          else
            Utils.removeAttr(el, name2);
          break;
      }
    });
    return el;
  },
  /**
   * Remove Child node
   * @param {HTMLElement} child 
   */
  remove(child) {
    try {
      if (child.parentNode)
        child.parentNode.removeChild(child);
    } catch (error) {
    }
  },
  /**
   * 遍历对象或者数组
   * collection, callback(indexInArray, valueOfElement)
   * @param {Object} collection 
   * @param {Function} callback 
   * @return {Object} collection
   */
  each(collection, callback) {
    let i2 = 0, length = collection.length, likeArray = ["[object Array]", "[object NodeList]"], type = {}.toString.call(collection);
    if (likeArray.indexOf(type) > -1) {
      for (; i2 < length; i2++) {
        if (callback && callback.call(collection[i2], i2, collection[i2]) === false)
          break;
      }
    } else {
      for (i2 in collection) {
        if (collection.hasOwnProperty(i2)) {
          if (callback && callback.call(collection[i2], i2, collection[i2]) === false)
            break;
        }
      }
    }
    return collection;
  }
};
const data = {
  "grinning": "😀",
  "smiley": "😃",
  "smile": "😄",
  "grin": "😁",
  "laughing": "😆",
  "sweat_smile": "😅",
  "joy": "😂",
  "blush": "😊",
  "innocent": "😇",
  "wink": "😉",
  "relieved": "😌",
  "heart_eyes": "😍",
  "kissing_heart": "😘",
  "kissing": "😗",
  "kissing_smiling_eyes": "😙",
  "kissing_closed_eyes": "😚",
  "yum": "😋",
  "stuck_out_tongue_winking_eye": "😜",
  "stuck_out_tongue_closed_eyes": "😝",
  "stuck_out_tongue": "😛",
  "sunglasses": "😎",
  "smirk": "😏",
  "unamused": "😒",
  "disappointed": "😞",
  "pensive": "😔",
  "worried": "😟",
  "confused": "😕",
  "persevere": "😣",
  "confounded": "😖",
  "tired_face": "😫",
  "weary": "😩",
  "angry": "😠",
  "rage": "😡",
  "no_mouth": "😶",
  "neutral_face": "😐",
  "expressionless": "😑",
  "hushed": "😯",
  "frowning": "😦",
  "anguished": "😧",
  "open_mouth": "😮",
  "astonished": "😲",
  "dizzy_face": "😵",
  "flushed": "😳",
  "scream": "😱",
  "fearful": "😨",
  "cold_sweat": "😰",
  "cry": "😢",
  "disappointed_relieved": "😥",
  "sob": "😭",
  "sweat": "😓",
  "sleepy": "😪",
  "sleeping": "😴",
  "mask": "😷",
  "smiling_imp": "😈",
  "smiley_cat": "😺",
  "smile_cat": "😸",
  "joy_cat": "😹",
  "heart_eyes_cat": "😻",
  "smirk_cat": "😼",
  "kissing_cat": "😽",
  "scream_cat": "🙀",
  "crying_cat_face": "😿",
  "pouting_cat": "😾",
  "cat": "🐱",
  "mouse": "🐭",
  "cow": "🐮",
  "monkey_face": "🐵",
  "hand": "✋",
  "fist": "✊",
  "v": "✌️",
  "point_up": "👆",
  "point_down": "👇",
  "point_left": "👈",
  "point_right": "👉",
  "facepunch": "👊",
  "wave": "👋",
  "clap": "👏",
  "open_hands": "👐",
  "+1": "👍",
  "-1": "👎",
  "ok_hand": "👌",
  "pray": "🙏",
  "ear": "👂",
  "eyes": "👀",
  "nose": "👃",
  "lips": "👄",
  "tongue": "👅",
  "heart": "❤️",
  "cupid": "💘",
  "sparkling_heart": "💖",
  "star": "⭐️",
  "sparkles": "✨",
  "zap": "⚡️",
  "sunny": "☀️",
  "cloud": "☁️",
  "snowflake": "❄️",
  "umbrella": "☔️",
  "coffee": "☕️",
  "airplane": "✈️",
  "anchor": "⚓️",
  "watch": "⌚️",
  "phone": "☎️",
  "hourglass": "⌛️",
  "email": "✉️",
  "scissors": "✂️",
  "black_nib": "✒️",
  "pencil2": "✏️",
  "x": "❌",
  "recycle": "♻️",
  "white_check_mark": "✅",
  "negative_squared_cross_mark": "❎",
  "m": "Ⓜ️",
  "i": "ℹ️",
  "tm": "™️",
  "copyright": "©️",
  "registered": "®️"
};
const Emoji = {
  data,
  parse: (str) => String(str).replace(/:(.+?):/g, (placeholder, key) => Emoji.data[key] || placeholder)
};
var hanabi$1 = { exports: {} };
(function(module, exports) {
  (function(global2, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    function createCommonjsModule(fn, module2) {
      return module2 = { exports: {} }, fn(module2, module2.exports), module2.exports;
    }
    var index$1 = createCommonjsModule(function(module2) {
      var comment = module2.exports = function() {
        return new RegExp("(?:" + comment.line().source + ")|(?:" + comment.block().source + ")", "gm");
      };
      comment.line = function() {
        return /(?:^|\s)\/\/(.+?)$/gm;
      };
      comment.block = function() {
        return /\/\*([\S\s]*?)\*\//gm;
      };
    });
    var defaultColors = ["23AC69", "91C132", "F19726", "E8552D", "1AAB8E", "E1147F", "2980C1", "1BA1E6", "9FA0A0", "F19726", "E30B20", "E30B20", "A3338B"];
    var index = function(input, ref) {
      if (ref === void 0)
        ref = {};
      var colors = ref.colors;
      if (colors === void 0)
        colors = defaultColors;
      var index2 = 0;
      var cache = {};
      var wordRe = /[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/;
      var leftAngleRe = /</;
      var re = new RegExp("(" + wordRe.source + "|" + leftAngleRe.source + ")|(" + index$1().source + ")", "gmi");
      return input.replace(re, function(m, word, cm) {
        if (cm) {
          return toComment(cm);
        }
        if (word === "<") {
          return "&lt;";
        }
        var color;
        if (cache[word]) {
          color = cache[word];
        } else {
          color = colors[index2];
          cache[word] = color;
        }
        var out = '<span style="color: #' + color + '">' + word + "</span>";
        index2 = ++index2 % colors.length;
        return out;
      });
    };
    function toComment(cm) {
      return '<span style="color: slategray">' + cm + "</span>";
    }
    return index;
  });
})(hanabi$1);
var hanabi = hanabi$1.exports;
var av = { exports: {} };
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(typeof self !== "undefined" ? self : commonjsGlobal, function() {
    return (
      /******/
      function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
          if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
          }
          var module2 = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
          };
          modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
          module2.l = true;
          return module2.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports2, name2, getter) {
          if (!__webpack_require__.o(exports2, name2)) {
            Object.defineProperty(exports2, name2, {
              /******/
              configurable: false,
              /******/
              enumerable: true,
              /******/
              get: getter
              /******/
            });
          }
        };
        __webpack_require__.n = function(module2) {
          var getter = module2 && module2.__esModule ? (
            /******/
            function getDefault() {
              return module2["default"];
            }
          ) : (
            /******/
            function getModuleExports() {
              return module2;
            }
          );
          __webpack_require__.d(getter, "a", getter);
          return getter;
        };
        __webpack_require__.o = function(object, property) {
          return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 171);
      }([
        /* 0 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
          var __WEBPACK_IMPORTED_MODULE_0__index_default_js__ = __webpack_require__(194);
          __webpack_require__.d(__webpack_exports__, "default", function() {
            return __WEBPACK_IMPORTED_MODULE_0__index_default_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(74);
          __webpack_require__.d(__webpack_exports__, "VERSION", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["VERSION"];
          });
          __webpack_require__.d(__webpack_exports__, "restArguments", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["restArguments"];
          });
          __webpack_require__.d(__webpack_exports__, "isObject", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isObject"];
          });
          __webpack_require__.d(__webpack_exports__, "isNull", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isNull"];
          });
          __webpack_require__.d(__webpack_exports__, "isUndefined", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isUndefined"];
          });
          __webpack_require__.d(__webpack_exports__, "isBoolean", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isBoolean"];
          });
          __webpack_require__.d(__webpack_exports__, "isElement", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isElement"];
          });
          __webpack_require__.d(__webpack_exports__, "isString", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isString"];
          });
          __webpack_require__.d(__webpack_exports__, "isNumber", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isNumber"];
          });
          __webpack_require__.d(__webpack_exports__, "isDate", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isDate"];
          });
          __webpack_require__.d(__webpack_exports__, "isRegExp", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isRegExp"];
          });
          __webpack_require__.d(__webpack_exports__, "isError", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isError"];
          });
          __webpack_require__.d(__webpack_exports__, "isSymbol", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isSymbol"];
          });
          __webpack_require__.d(__webpack_exports__, "isArrayBuffer", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isArrayBuffer"];
          });
          __webpack_require__.d(__webpack_exports__, "isDataView", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isDataView"];
          });
          __webpack_require__.d(__webpack_exports__, "isArray", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isArray"];
          });
          __webpack_require__.d(__webpack_exports__, "isFunction", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isFunction"];
          });
          __webpack_require__.d(__webpack_exports__, "isArguments", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isArguments"];
          });
          __webpack_require__.d(__webpack_exports__, "isFinite", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isFinite"];
          });
          __webpack_require__.d(__webpack_exports__, "isNaN", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isNaN"];
          });
          __webpack_require__.d(__webpack_exports__, "isTypedArray", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isTypedArray"];
          });
          __webpack_require__.d(__webpack_exports__, "isEmpty", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isEmpty"];
          });
          __webpack_require__.d(__webpack_exports__, "isMatch", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isMatch"];
          });
          __webpack_require__.d(__webpack_exports__, "isEqual", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isEqual"];
          });
          __webpack_require__.d(__webpack_exports__, "isMap", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isMap"];
          });
          __webpack_require__.d(__webpack_exports__, "isWeakMap", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isWeakMap"];
          });
          __webpack_require__.d(__webpack_exports__, "isSet", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isSet"];
          });
          __webpack_require__.d(__webpack_exports__, "isWeakSet", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["isWeakSet"];
          });
          __webpack_require__.d(__webpack_exports__, "keys", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["keys"];
          });
          __webpack_require__.d(__webpack_exports__, "allKeys", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["allKeys"];
          });
          __webpack_require__.d(__webpack_exports__, "values", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["values"];
          });
          __webpack_require__.d(__webpack_exports__, "pairs", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["pairs"];
          });
          __webpack_require__.d(__webpack_exports__, "invert", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["invert"];
          });
          __webpack_require__.d(__webpack_exports__, "functions", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["functions"];
          });
          __webpack_require__.d(__webpack_exports__, "methods", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["methods"];
          });
          __webpack_require__.d(__webpack_exports__, "extend", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["extend"];
          });
          __webpack_require__.d(__webpack_exports__, "extendOwn", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["extendOwn"];
          });
          __webpack_require__.d(__webpack_exports__, "assign", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["assign"];
          });
          __webpack_require__.d(__webpack_exports__, "defaults", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["defaults"];
          });
          __webpack_require__.d(__webpack_exports__, "create", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["create"];
          });
          __webpack_require__.d(__webpack_exports__, "clone", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["clone"];
          });
          __webpack_require__.d(__webpack_exports__, "tap", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["tap"];
          });
          __webpack_require__.d(__webpack_exports__, "get", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["get"];
          });
          __webpack_require__.d(__webpack_exports__, "has", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["has"];
          });
          __webpack_require__.d(__webpack_exports__, "mapObject", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["mapObject"];
          });
          __webpack_require__.d(__webpack_exports__, "identity", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["identity"];
          });
          __webpack_require__.d(__webpack_exports__, "constant", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["constant"];
          });
          __webpack_require__.d(__webpack_exports__, "noop", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["noop"];
          });
          __webpack_require__.d(__webpack_exports__, "toPath", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["toPath"];
          });
          __webpack_require__.d(__webpack_exports__, "property", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["property"];
          });
          __webpack_require__.d(__webpack_exports__, "propertyOf", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["propertyOf"];
          });
          __webpack_require__.d(__webpack_exports__, "matcher", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["matcher"];
          });
          __webpack_require__.d(__webpack_exports__, "matches", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["matches"];
          });
          __webpack_require__.d(__webpack_exports__, "times", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["times"];
          });
          __webpack_require__.d(__webpack_exports__, "random", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["random"];
          });
          __webpack_require__.d(__webpack_exports__, "now", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["now"];
          });
          __webpack_require__.d(__webpack_exports__, "escape", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["escape"];
          });
          __webpack_require__.d(__webpack_exports__, "unescape", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["unescape"];
          });
          __webpack_require__.d(__webpack_exports__, "templateSettings", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["templateSettings"];
          });
          __webpack_require__.d(__webpack_exports__, "template", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["template"];
          });
          __webpack_require__.d(__webpack_exports__, "result", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["result"];
          });
          __webpack_require__.d(__webpack_exports__, "uniqueId", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["uniqueId"];
          });
          __webpack_require__.d(__webpack_exports__, "chain", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["chain"];
          });
          __webpack_require__.d(__webpack_exports__, "iteratee", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["iteratee"];
          });
          __webpack_require__.d(__webpack_exports__, "partial", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["partial"];
          });
          __webpack_require__.d(__webpack_exports__, "bind", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["bind"];
          });
          __webpack_require__.d(__webpack_exports__, "bindAll", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["bindAll"];
          });
          __webpack_require__.d(__webpack_exports__, "memoize", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["memoize"];
          });
          __webpack_require__.d(__webpack_exports__, "delay", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["delay"];
          });
          __webpack_require__.d(__webpack_exports__, "defer", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["defer"];
          });
          __webpack_require__.d(__webpack_exports__, "throttle", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["throttle"];
          });
          __webpack_require__.d(__webpack_exports__, "debounce", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["debounce"];
          });
          __webpack_require__.d(__webpack_exports__, "wrap", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["wrap"];
          });
          __webpack_require__.d(__webpack_exports__, "negate", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["negate"];
          });
          __webpack_require__.d(__webpack_exports__, "compose", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["compose"];
          });
          __webpack_require__.d(__webpack_exports__, "after", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["after"];
          });
          __webpack_require__.d(__webpack_exports__, "before", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["before"];
          });
          __webpack_require__.d(__webpack_exports__, "once", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["once"];
          });
          __webpack_require__.d(__webpack_exports__, "findKey", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["findKey"];
          });
          __webpack_require__.d(__webpack_exports__, "findIndex", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["findIndex"];
          });
          __webpack_require__.d(__webpack_exports__, "findLastIndex", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["findLastIndex"];
          });
          __webpack_require__.d(__webpack_exports__, "sortedIndex", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["sortedIndex"];
          });
          __webpack_require__.d(__webpack_exports__, "indexOf", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["indexOf"];
          });
          __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["lastIndexOf"];
          });
          __webpack_require__.d(__webpack_exports__, "find", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["find"];
          });
          __webpack_require__.d(__webpack_exports__, "detect", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["detect"];
          });
          __webpack_require__.d(__webpack_exports__, "findWhere", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["findWhere"];
          });
          __webpack_require__.d(__webpack_exports__, "each", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["each"];
          });
          __webpack_require__.d(__webpack_exports__, "forEach", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["forEach"];
          });
          __webpack_require__.d(__webpack_exports__, "map", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["map"];
          });
          __webpack_require__.d(__webpack_exports__, "collect", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["collect"];
          });
          __webpack_require__.d(__webpack_exports__, "reduce", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["reduce"];
          });
          __webpack_require__.d(__webpack_exports__, "foldl", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["foldl"];
          });
          __webpack_require__.d(__webpack_exports__, "inject", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["inject"];
          });
          __webpack_require__.d(__webpack_exports__, "reduceRight", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["reduceRight"];
          });
          __webpack_require__.d(__webpack_exports__, "foldr", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["foldr"];
          });
          __webpack_require__.d(__webpack_exports__, "filter", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["filter"];
          });
          __webpack_require__.d(__webpack_exports__, "select", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["select"];
          });
          __webpack_require__.d(__webpack_exports__, "reject", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["reject"];
          });
          __webpack_require__.d(__webpack_exports__, "every", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["every"];
          });
          __webpack_require__.d(__webpack_exports__, "all", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["all"];
          });
          __webpack_require__.d(__webpack_exports__, "some", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["some"];
          });
          __webpack_require__.d(__webpack_exports__, "any", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["any"];
          });
          __webpack_require__.d(__webpack_exports__, "contains", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["contains"];
          });
          __webpack_require__.d(__webpack_exports__, "includes", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["includes"];
          });
          __webpack_require__.d(__webpack_exports__, "include", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["include"];
          });
          __webpack_require__.d(__webpack_exports__, "invoke", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["invoke"];
          });
          __webpack_require__.d(__webpack_exports__, "pluck", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["pluck"];
          });
          __webpack_require__.d(__webpack_exports__, "where", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["where"];
          });
          __webpack_require__.d(__webpack_exports__, "max", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["max"];
          });
          __webpack_require__.d(__webpack_exports__, "min", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["min"];
          });
          __webpack_require__.d(__webpack_exports__, "shuffle", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["shuffle"];
          });
          __webpack_require__.d(__webpack_exports__, "sample", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["sample"];
          });
          __webpack_require__.d(__webpack_exports__, "sortBy", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["sortBy"];
          });
          __webpack_require__.d(__webpack_exports__, "groupBy", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["groupBy"];
          });
          __webpack_require__.d(__webpack_exports__, "indexBy", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["indexBy"];
          });
          __webpack_require__.d(__webpack_exports__, "countBy", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["countBy"];
          });
          __webpack_require__.d(__webpack_exports__, "partition", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["partition"];
          });
          __webpack_require__.d(__webpack_exports__, "toArray", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["toArray"];
          });
          __webpack_require__.d(__webpack_exports__, "size", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["size"];
          });
          __webpack_require__.d(__webpack_exports__, "pick", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["pick"];
          });
          __webpack_require__.d(__webpack_exports__, "omit", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["omit"];
          });
          __webpack_require__.d(__webpack_exports__, "first", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["first"];
          });
          __webpack_require__.d(__webpack_exports__, "head", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["head"];
          });
          __webpack_require__.d(__webpack_exports__, "take", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["take"];
          });
          __webpack_require__.d(__webpack_exports__, "initial", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["initial"];
          });
          __webpack_require__.d(__webpack_exports__, "last", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["last"];
          });
          __webpack_require__.d(__webpack_exports__, "rest", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["rest"];
          });
          __webpack_require__.d(__webpack_exports__, "tail", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["tail"];
          });
          __webpack_require__.d(__webpack_exports__, "drop", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["drop"];
          });
          __webpack_require__.d(__webpack_exports__, "compact", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["compact"];
          });
          __webpack_require__.d(__webpack_exports__, "flatten", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["flatten"];
          });
          __webpack_require__.d(__webpack_exports__, "without", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["without"];
          });
          __webpack_require__.d(__webpack_exports__, "uniq", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["uniq"];
          });
          __webpack_require__.d(__webpack_exports__, "unique", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["unique"];
          });
          __webpack_require__.d(__webpack_exports__, "union", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["union"];
          });
          __webpack_require__.d(__webpack_exports__, "intersection", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["intersection"];
          });
          __webpack_require__.d(__webpack_exports__, "difference", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["difference"];
          });
          __webpack_require__.d(__webpack_exports__, "unzip", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["unzip"];
          });
          __webpack_require__.d(__webpack_exports__, "transpose", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["transpose"];
          });
          __webpack_require__.d(__webpack_exports__, "zip", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["zip"];
          });
          __webpack_require__.d(__webpack_exports__, "object", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["object"];
          });
          __webpack_require__.d(__webpack_exports__, "range", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["range"];
          });
          __webpack_require__.d(__webpack_exports__, "chunk", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["chunk"];
          });
          __webpack_require__.d(__webpack_exports__, "mixin", function() {
            return __WEBPACK_IMPORTED_MODULE_1__index_js__["mixin"];
          });
        },
        /* 1 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          (function(global2) {
            __webpack_require__.d(__webpack_exports__, "e", function() {
              return VERSION;
            });
            __webpack_require__.d(__webpack_exports__, "p", function() {
              return root;
            });
            __webpack_require__.d(__webpack_exports__, "a", function() {
              return ArrayProto;
            });
            __webpack_require__.d(__webpack_exports__, "c", function() {
              return ObjProto;
            });
            __webpack_require__.d(__webpack_exports__, "d", function() {
              return SymbolProto;
            });
            __webpack_require__.d(__webpack_exports__, "o", function() {
              return push;
            });
            __webpack_require__.d(__webpack_exports__, "q", function() {
              return slice;
            });
            __webpack_require__.d(__webpack_exports__, "t", function() {
              return toString;
            });
            __webpack_require__.d(__webpack_exports__, "i", function() {
              return hasOwnProperty;
            });
            __webpack_require__.d(__webpack_exports__, "r", function() {
              return supportsArrayBuffer;
            });
            __webpack_require__.d(__webpack_exports__, "s", function() {
              return supportsDataView;
            });
            __webpack_require__.d(__webpack_exports__, "k", function() {
              return nativeIsArray;
            });
            __webpack_require__.d(__webpack_exports__, "m", function() {
              return nativeKeys;
            });
            __webpack_require__.d(__webpack_exports__, "j", function() {
              return nativeCreate;
            });
            __webpack_require__.d(__webpack_exports__, "l", function() {
              return nativeIsView;
            });
            __webpack_require__.d(__webpack_exports__, "g", function() {
              return _isNaN;
            });
            __webpack_require__.d(__webpack_exports__, "f", function() {
              return _isFinite;
            });
            __webpack_require__.d(__webpack_exports__, "h", function() {
              return hasEnumBug;
            });
            __webpack_require__.d(__webpack_exports__, "n", function() {
              return nonEnumerableProps;
            });
            __webpack_require__.d(__webpack_exports__, "b", function() {
              return MAX_ARRAY_INDEX;
            });
            var VERSION = "1.12.1";
            var root = typeof self == "object" && self.self === self && self || typeof global2 == "object" && global2.global === global2 && global2 || Function("return this")() || {};
            var ArrayProto = Array.prototype, ObjProto = Object.prototype;
            var SymbolProto = typeof Symbol !== "undefined" ? Symbol.prototype : null;
            var push = ArrayProto.push, slice = ArrayProto.slice, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty;
            var supportsArrayBuffer = typeof ArrayBuffer !== "undefined", supportsDataView = typeof DataView !== "undefined";
            var nativeIsArray = Array.isArray, nativeKeys = Object.keys, nativeCreate = Object.create, nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;
            var _isNaN = isNaN, _isFinite = isFinite;
            var hasEnumBug = !{ toString: null }.propertyIsEnumerable("toString");
            var nonEnumerableProps = [
              "valueOf",
              "isPrototypeOf",
              "toString",
              "propertyIsEnumerable",
              "hasOwnProperty",
              "toLocaleString"
            ];
            var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
          }).call(__webpack_exports__, __webpack_require__(109));
        },
        /* 2 */
        /***/
        function(module2, exports2) {
          var core = module2.exports = { version: "2.6.9" };
          if (typeof __e == "number")
            __e = core;
        },
        /* 3 */
        /***/
        function(module2, exports2, __webpack_require__) {
          module2.exports = { "default": __webpack_require__(174), __esModule: true };
        },
        /* 4 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = keys;
          var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(26);
          var __WEBPACK_IMPORTED_MODULE_1__setup_js__ = __webpack_require__(1);
          var __WEBPACK_IMPORTED_MODULE_2__has_js__ = __webpack_require__(22);
          var __WEBPACK_IMPORTED_MODULE_3__collectNonEnumProps_js__ = __webpack_require__(120);
          function keys(obj) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__isObject_js__[
              "a"
              /* default */
            ])(obj))
              return [];
            if (__WEBPACK_IMPORTED_MODULE_1__setup_js__[
              "m"
              /* nativeKeys */
            ])
              return Object(__WEBPACK_IMPORTED_MODULE_1__setup_js__[
                "m"
                /* nativeKeys */
              ])(obj);
            var keys2 = [];
            for (var key in obj)
              if (Object(__WEBPACK_IMPORTED_MODULE_2__has_js__[
                "a"
                /* default */
              ])(obj, key))
                keys2.push(key);
            if (__WEBPACK_IMPORTED_MODULE_1__setup_js__[
              "h"
              /* hasEnumBug */
            ])
              Object(__WEBPACK_IMPORTED_MODULE_3__collectNonEnumProps_js__[
                "a"
                /* default */
              ])(obj, keys2);
            return keys2;
          }
        },
        /* 5 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = tagTester;
          var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
          function tagTester(name2) {
            var tag = "[object " + name2 + "]";
            return function(obj) {
              return __WEBPACK_IMPORTED_MODULE_0__setup_js__[
                "t"
                /* toString */
              ].call(obj) === tag;
            };
          }
        },
        /* 6 */
        /***/
        function(module2, exports2) {
          var global2 = module2.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
          if (typeof __g == "number")
            __g = global2;
        },
        /* 7 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var store = __webpack_require__(69)("wks");
          var uid = __webpack_require__(54);
          var Symbol2 = __webpack_require__(6).Symbol;
          var USE_SYMBOL = typeof Symbol2 == "function";
          var $exports = module2.exports = function(name2) {
            return store[name2] || (store[name2] = USE_SYMBOL && Symbol2[name2] || (USE_SYMBOL ? Symbol2 : uid)("Symbol." + name2));
          };
          $exports.store = store;
        },
        /* 8 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = cb;
          var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(10);
          var __WEBPACK_IMPORTED_MODULE_1__baseIteratee_js__ = __webpack_require__(130);
          var __WEBPACK_IMPORTED_MODULE_2__iteratee_js__ = __webpack_require__(131);
          function cb(value, context, argCount) {
            if (__WEBPACK_IMPORTED_MODULE_0__underscore_js__[
              "a"
              /* default */
            ].iteratee !== __WEBPACK_IMPORTED_MODULE_2__iteratee_js__[
              "a"
              /* default */
            ])
              return __WEBPACK_IMPORTED_MODULE_0__underscore_js__[
                "a"
                /* default */
              ].iteratee(value, context);
            return Object(__WEBPACK_IMPORTED_MODULE_1__baseIteratee_js__[
              "a"
              /* default */
            ])(value, context, argCount);
          }
        },
        /* 9 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = restArguments;
          function restArguments(func, startIndex) {
            startIndex = startIndex == null ? func.length - 1 : +startIndex;
            return function() {
              var length = Math.max(arguments.length - startIndex, 0), rest = Array(length), index = 0;
              for (; index < length; index++) {
                rest[index] = arguments[index + startIndex];
              }
              switch (startIndex) {
                case 0:
                  return func.call(this, rest);
                case 1:
                  return func.call(this, arguments[0], rest);
                case 2:
                  return func.call(this, arguments[0], arguments[1], rest);
              }
              var args = Array(startIndex + 1);
              for (index = 0; index < startIndex; index++) {
                args[index] = arguments[index];
              }
              args[startIndex] = rest;
              return func.apply(this, args);
            };
          }
        },
        /* 10 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = _;
          var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
          function _(obj) {
            if (obj instanceof _)
              return obj;
            if (!(this instanceof _))
              return new _(obj);
            this._wrapped = obj;
          }
          _.VERSION = __WEBPACK_IMPORTED_MODULE_0__setup_js__[
            "e"
            /* VERSION */
          ];
          _.prototype.value = function() {
            return this._wrapped;
          };
          _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
          _.prototype.toString = function() {
            return String(this._wrapped);
          };
        },
        /* 11 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__createSizePropertyCheck_js__ = __webpack_require__(118);
          var __WEBPACK_IMPORTED_MODULE_1__getLength_js__ = __webpack_require__(14);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__createSizePropertyCheck_js__[
            "a"
            /* default */
          ])(__WEBPACK_IMPORTED_MODULE_1__getLength_js__[
            "a"
            /* default */
          ]);
        },
        /* 12 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _promise = __webpack_require__(3);
          var _promise2 = _interopRequireDefault(_promise);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var _ = __webpack_require__(0);
          var md52 = __webpack_require__(312);
          var _require = __webpack_require__(0), extend = _require.extend;
          var AV2 = __webpack_require__(36);
          var _require2 = __webpack_require__(15), getSessionToken = _require2.getSessionToken;
          var ajax = __webpack_require__(60);
          var sign = function sign2(key, isMasterKey) {
            var now = (/* @__PURE__ */ new Date()).getTime();
            var signature = md52(now + key);
            if (isMasterKey) {
              return signature + "," + now + ",master";
            }
            return signature + "," + now;
          };
          var setAppKey = function setAppKey2(headers, signKey) {
            if (signKey) {
              headers["X-LC-Sign"] = sign(AV2.applicationKey);
            } else {
              headers["X-LC-Key"] = AV2.applicationKey;
            }
          };
          var setHeaders = function setHeaders2() {
            var authOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            var signKey = arguments[1];
            var headers = {
              "X-LC-Id": AV2.applicationId,
              "Content-Type": "application/json;charset=UTF-8"
            };
            var useMasterKey = false;
            if (typeof authOptions.useMasterKey === "boolean") {
              useMasterKey = authOptions.useMasterKey;
            } else if (typeof AV2._config.useMasterKey === "boolean") {
              useMasterKey = AV2._config.useMasterKey;
            }
            if (useMasterKey) {
              if (AV2.masterKey) {
                if (signKey) {
                  headers["X-LC-Sign"] = sign(AV2.masterKey, true);
                } else {
                  headers["X-LC-Key"] = AV2.masterKey + ",master";
                }
              } else {
                console.warn("masterKey is not set, fall back to use appKey");
                setAppKey(headers, signKey);
              }
            } else {
              setAppKey(headers, signKey);
            }
            if (AV2.hookKey) {
              headers["X-LC-Hook-Key"] = AV2.hookKey;
            }
            if (AV2._config.production !== null) {
              headers["X-LC-Prod"] = String(AV2._config.production);
            }
            headers["X-LC-UA"] = AV2._sharedConfig.userAgent;
            return _promise2.default.resolve().then(function() {
              var sessionToken = getSessionToken(authOptions);
              if (sessionToken) {
                headers["X-LC-Session"] = sessionToken;
              } else if (!AV2._config.disableCurrentUser) {
                return AV2.User.currentAsync().then(function(currentUser) {
                  if (currentUser && currentUser._sessionToken) {
                    headers["X-LC-Session"] = currentUser._sessionToken;
                  }
                  return headers;
                });
              }
              return headers;
            });
          };
          var createApiUrl = function createApiUrl2(_ref) {
            var _ref$service = _ref.service, service = _ref$service === void 0 ? "api" : _ref$service, _ref$version = _ref.version, version2 = _ref$version === void 0 ? "1.1" : _ref$version, path = _ref.path;
            var apiURL = AV2._config.serverURLs[service];
            if (!apiURL)
              throw new Error("undefined server URL for " + service);
            if (apiURL.charAt(apiURL.length - 1) !== "/") {
              apiURL += "/";
            }
            apiURL += version2;
            if (path) {
              apiURL += path;
            }
            return apiURL;
          };
          var request = function request2(_ref2) {
            var service = _ref2.service, version2 = _ref2.version, method = _ref2.method, path = _ref2.path, query = _ref2.query, data2 = _ref2.data, authOptions = _ref2.authOptions, _ref2$signKey = _ref2.signKey, signKey = _ref2$signKey === void 0 ? true : _ref2$signKey;
            if (!(AV2.applicationId && (AV2.applicationKey || AV2.masterKey))) {
              throw new Error("Not initialized");
            }
            if (AV2._appRouter) {
              AV2._appRouter.refresh();
            }
            var timeout = AV2._config.requestTimeout;
            var url = createApiUrl({ service, path, version: version2 });
            return setHeaders(authOptions, signKey).then(function(headers) {
              return ajax({ method, url, query, data: data2, headers, timeout }).catch(function(error) {
                var errorJSON = {
                  code: error.code || -1,
                  error: error.message || error.responseText
                };
                if (error.response && error.response.code) {
                  errorJSON = error.response;
                } else if (error.responseText) {
                  try {
                    errorJSON = JSON.parse(error.responseText);
                  } catch (e2) {
                  }
                }
                errorJSON.rawMessage = errorJSON.rawMessage || errorJSON.error;
                if (!AV2._sharedConfig.keepErrorRawMessage) {
                  errorJSON.error += " [" + (error.statusCode || "N/A") + " " + method + " " + url + "]";
                }
                var err = new Error(errorJSON.error);
                delete errorJSON.error;
                throw _.extend(err, errorJSON);
              });
            });
          };
          var _request = function _request2(route, className, objectId, method, data2, authOptions, query) {
            var path = "";
            if (route)
              path += "/" + route;
            if (className)
              path += "/" + className;
            if (objectId)
              path += "/" + objectId;
            if (data2 && data2._fetchWhenSave)
              throw new Error("_fetchWhenSave should be in the query");
            if (data2 && data2._where)
              throw new Error("_where should be in the query");
            if (method && method.toLowerCase() === "get") {
              query = extend({}, query, data2);
              data2 = null;
            }
            return request({
              method,
              path,
              query,
              data: data2,
              authOptions
            });
          };
          AV2.request = request;
          module2.exports = {
            _request,
            request
          };
        },
        /* 13 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
          var __WEBPACK_IMPORTED_MODULE_1__setup_js__ = __webpack_require__(1);
          var isFunction = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__[
            "a"
            /* default */
          ])("Function");
          var nodelist = __WEBPACK_IMPORTED_MODULE_1__setup_js__[
            "p"
            /* root */
          ].document && __WEBPACK_IMPORTED_MODULE_1__setup_js__[
            "p"
            /* root */
          ].document.childNodes;
          if (typeof /./ != "function" && typeof Int8Array != "object" && typeof nodelist != "function") {
            isFunction = function(obj) {
              return typeof obj == "function" || false;
            };
          }
          __webpack_exports__["a"] = isFunction;
        },
        /* 14 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__shallowProperty_js__ = __webpack_require__(119);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__shallowProperty_js__[
            "a"
            /* default */
          ])("length");
        },
        /* 15 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _promise = __webpack_require__(3);
          var _promise2 = _interopRequireDefault(_promise);
          var _getPrototypeOf = __webpack_require__(160);
          var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var _ = __webpack_require__(0);
          var isNullOrUndefined = function isNullOrUndefined2(x) {
            return _.isNull(x) || _.isUndefined(x);
          };
          var ensureArray = function ensureArray2(target) {
            if (_.isArray(target)) {
              return target;
            }
            if (target === void 0 || target === null) {
              return [];
            }
            return [target];
          };
          var transformFetchOptions = function transformFetchOptions2() {
            var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, keys = _ref.keys, include = _ref.include, includeACL = _ref.includeACL;
            var fetchOptions = {};
            if (keys) {
              fetchOptions.keys = ensureArray(keys).join(",");
            }
            if (include) {
              fetchOptions.include = ensureArray(include).join(",");
            }
            if (includeACL) {
              fetchOptions.returnACL = includeACL;
            }
            return fetchOptions;
          };
          var getSessionToken = function getSessionToken2(authOptions) {
            if (authOptions.sessionToken) {
              return authOptions.sessionToken;
            }
            if (authOptions.user && typeof authOptions.user.getSessionToken === "function") {
              return authOptions.user.getSessionToken();
            }
          };
          var tap = function tap2(interceptor) {
            return function(value) {
              return interceptor(value), value;
            };
          };
          var EmptyConstructor = function EmptyConstructor2() {
          };
          var inherits = function inherits2(parent, protoProps, staticProps) {
            var child;
            if (protoProps && protoProps.hasOwnProperty("constructor")) {
              child = protoProps.constructor;
            } else {
              child = function child2() {
                parent.apply(this, arguments);
              };
            }
            _.extend(child, parent);
            EmptyConstructor.prototype = parent.prototype;
            child.prototype = new EmptyConstructor();
            if (protoProps) {
              _.extend(child.prototype, protoProps);
            }
            if (staticProps) {
              _.extend(child, staticProps);
            }
            child.prototype.constructor = child;
            child.__super__ = parent.prototype;
            return child;
          };
          var parseDate = function parseDate2(iso8601) {
            return new Date(iso8601);
          };
          var setValue = function setValue2(target, key, value) {
            var segs = key.split(".");
            var lastSeg = segs.pop();
            var currentTarget = target;
            segs.forEach(function(seg) {
              if (currentTarget[seg] === void 0)
                currentTarget[seg] = {};
              currentTarget = currentTarget[seg];
            });
            currentTarget[lastSeg] = value;
            return target;
          };
          var findValue = function findValue2(target, key) {
            var segs = key.split(".");
            var firstSeg = segs[0];
            var lastSeg = segs.pop();
            var currentTarget = target;
            for (var i2 = 0; i2 < segs.length; i2++) {
              currentTarget = currentTarget[segs[i2]];
              if (currentTarget === void 0) {
                return [void 0, void 0, lastSeg];
              }
            }
            var value = currentTarget[lastSeg];
            return [value, currentTarget, lastSeg, firstSeg];
          };
          var isPlainObject = function isPlainObject2(obj) {
            return _.isObject(obj) && (0, _getPrototypeOf2.default)(obj) === Object.prototype;
          };
          var continueWhile = function continueWhile2(predicate, asyncFunction) {
            if (predicate()) {
              return asyncFunction().then(function() {
                return continueWhile2(predicate, asyncFunction);
              });
            }
            return _promise2.default.resolve();
          };
          module2.exports = {
            isNullOrUndefined,
            ensureArray,
            transformFetchOptions,
            getSessionToken,
            tap,
            inherits,
            parseDate,
            setValue,
            findValue,
            isPlainObject,
            continueWhile
          };
        },
        /* 16 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var global2 = __webpack_require__(6);
          var core = __webpack_require__(2);
          var ctx = __webpack_require__(31);
          var hide = __webpack_require__(23);
          var has = __webpack_require__(24);
          var PROTOTYPE = "prototype";
          var $export = function(type, name2, source) {
            var IS_FORCED = type & $export.F;
            var IS_GLOBAL = type & $export.G;
            var IS_STATIC = type & $export.S;
            var IS_PROTO = type & $export.P;
            var IS_BIND = type & $export.B;
            var IS_WRAP = type & $export.W;
            var exports3 = IS_GLOBAL ? core : core[name2] || (core[name2] = {});
            var expProto = exports3[PROTOTYPE];
            var target = IS_GLOBAL ? global2 : IS_STATIC ? global2[name2] : (global2[name2] || {})[PROTOTYPE];
            var key, own, out;
            if (IS_GLOBAL)
              source = name2;
            for (key in source) {
              own = !IS_FORCED && target && target[key] !== void 0;
              if (own && has(exports3, key))
                continue;
              out = own ? target[key] : source[key];
              exports3[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx(out, global2) : IS_WRAP && target[key] == out ? function(C) {
                var F = function(a, b, c) {
                  if (this instanceof C) {
                    switch (arguments.length) {
                      case 0:
                        return new C();
                      case 1:
                        return new C(a);
                      case 2:
                        return new C(a, b);
                    }
                    return new C(a, b, c);
                  }
                  return C.apply(this, arguments);
                };
                F[PROTOTYPE] = C[PROTOTYPE];
                return F;
              }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
              if (IS_PROTO) {
                (exports3.virtual || (exports3.virtual = {}))[key] = out;
                if (type & $export.R && expProto && !expProto[key])
                  hide(expProto, key, out);
              }
            }
          };
          $export.F = 1;
          $export.G = 2;
          $export.S = 4;
          $export.P = 8;
          $export.B = 16;
          $export.W = 32;
          $export.U = 64;
          $export.R = 128;
          module2.exports = $export;
        },
        /* 17 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var isObject = __webpack_require__(20);
          module2.exports = function(it) {
            if (!isObject(it))
              throw TypeError(it + " is not an object!");
            return it;
          };
        },
        /* 18 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var anObject = __webpack_require__(17);
          var IE8_DOM_DEFINE = __webpack_require__(97);
          var toPrimitive = __webpack_require__(65);
          var dP = Object.defineProperty;
          exports2.f = __webpack_require__(21) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPrimitive(P, true);
            anObject(Attributes);
            if (IE8_DOM_DEFINE)
              try {
                return dP(O, P, Attributes);
              } catch (e2) {
              }
            if ("get" in Attributes || "set" in Attributes)
              throw TypeError("Accessors not supported!");
            if ("value" in Attributes)
              O[P] = Attributes.value;
            return O;
          };
        },
        /* 19 */
        /***/
        function(module2, exports2, __webpack_require__) {
          module2.exports = { "default": __webpack_require__(266), __esModule: true };
        },
        /* 20 */
        /***/
        function(module2, exports2) {
          module2.exports = function(it) {
            return typeof it === "object" ? it !== null : typeof it === "function";
          };
        },
        /* 21 */
        /***/
        function(module2, exports2, __webpack_require__) {
          module2.exports = !__webpack_require__(41)(function() {
            return Object.defineProperty({}, "a", { get: function() {
              return 7;
            } }).a != 7;
          });
        },
        /* 22 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = has;
          var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
          function has(obj, key) {
            return obj != null && __WEBPACK_IMPORTED_MODULE_0__setup_js__[
              "i"
              /* hasOwnProperty */
            ].call(obj, key);
          }
        },
        /* 23 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var dP = __webpack_require__(18);
          var createDesc = __webpack_require__(42);
          module2.exports = __webpack_require__(21) ? function(object, key, value) {
            return dP.f(object, key, createDesc(1, value));
          } : function(object, key, value) {
            object[key] = value;
            return object;
          };
        },
        /* 24 */
        /***/
        function(module2, exports2) {
          var hasOwnProperty = {}.hasOwnProperty;
          module2.exports = function(it, key) {
            return hasOwnProperty.call(it, key);
          };
        },
        /* 25 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var IObject = __webpack_require__(178);
          var defined = __webpack_require__(63);
          module2.exports = function(it) {
            return IObject(defined(it));
          };
        },
        /* 26 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = isObject;
          function isObject(obj) {
            var type = typeof obj;
            return type === "function" || type === "object" && !!obj;
          }
        },
        /* 27 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
          var __WEBPACK_IMPORTED_MODULE_1__tagTester_js__ = __webpack_require__(5);
          __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__setup_js__[
            "k"
            /* nativeIsArray */
          ] || Object(__WEBPACK_IMPORTED_MODULE_1__tagTester_js__[
            "a"
            /* default */
          ])("Array");
        },
        /* 28 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = each;
          var __WEBPACK_IMPORTED_MODULE_0__optimizeCb_js__ = __webpack_require__(48);
          var __WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__ = __webpack_require__(11);
          var __WEBPACK_IMPORTED_MODULE_2__keys_js__ = __webpack_require__(4);
          function each(obj, iteratee, context) {
            iteratee = Object(__WEBPACK_IMPORTED_MODULE_0__optimizeCb_js__[
              "a"
              /* default */
            ])(iteratee, context);
            var i2, length;
            if (Object(__WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__[
              "a"
              /* default */
            ])(obj)) {
              for (i2 = 0, length = obj.length; i2 < length; i2++) {
                iteratee(obj[i2], i2, obj);
              }
            } else {
              var _keys = Object(__WEBPACK_IMPORTED_MODULE_2__keys_js__[
                "a"
                /* default */
              ])(obj);
              for (i2 = 0, length = _keys.length; i2 < length; i2++) {
                iteratee(obj[_keys[i2]], _keys[i2], obj);
              }
            }
            return obj;
          }
        },
        /* 29 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _ = __webpack_require__(0);
          function AVError(code, message) {
            var error = new Error(message);
            error.code = code;
            return error;
          }
          _.extend(
            AVError,
            /** @lends AV.Error */
            {
              /**
               * Error code indicating some error other than those enumerated here.
               * @constant
               */
              OTHER_CAUSE: -1,
              /**
               * Error code indicating that something has gone wrong with the server.
               * If you get this error code, it is AV's fault. Contact us at
               * https://avoscloud.com/help
               * @constant
               */
              INTERNAL_SERVER_ERROR: 1,
              /**
               * Error code indicating the connection to the AV servers failed.
               * @constant
               */
              CONNECTION_FAILED: 100,
              /**
               * Error code indicating the specified object doesn't exist.
               * @constant
               */
              OBJECT_NOT_FOUND: 101,
              /**
               * Error code indicating you tried to query with a datatype that doesn't
               * support it, like exact matching an array or object.
               * @constant
               */
              INVALID_QUERY: 102,
              /**
               * Error code indicating a missing or invalid classname. Classnames are
               * case-sensitive. They must start with a letter, and a-zA-Z0-9_ are the
               * only valid characters.
               * @constant
               */
              INVALID_CLASS_NAME: 103,
              /**
               * Error code indicating an unspecified object id.
               * @constant
               */
              MISSING_OBJECT_ID: 104,
              /**
               * Error code indicating an invalid key name. Keys are case-sensitive. They
               * must start with a letter, and a-zA-Z0-9_ are the only valid characters.
               * @constant
               */
              INVALID_KEY_NAME: 105,
              /**
               * Error code indicating a malformed pointer. You should not see this unless
               * you have been mucking about changing internal AV code.
               * @constant
               */
              INVALID_POINTER: 106,
              /**
               * Error code indicating that badly formed JSON was received upstream. This
               * either indicates you have done something unusual with modifying how
               * things encode to JSON, or the network is failing badly.
               * @constant
               */
              INVALID_JSON: 107,
              /**
               * Error code indicating that the feature you tried to access is only
               * available internally for testing purposes.
               * @constant
               */
              COMMAND_UNAVAILABLE: 108,
              /**
               * You must call AV.initialize before using the AV library.
               * @constant
               */
              NOT_INITIALIZED: 109,
              /**
               * Error code indicating that a field was set to an inconsistent type.
               * @constant
               */
              INCORRECT_TYPE: 111,
              /**
               * Error code indicating an invalid channel name. A channel name is either
               * an empty string (the broadcast channel) or contains only a-zA-Z0-9_
               * characters.
               * @constant
               */
              INVALID_CHANNEL_NAME: 112,
              /**
               * Error code indicating that push is misconfigured.
               * @constant
               */
              PUSH_MISCONFIGURED: 115,
              /**
               * Error code indicating that the object is too large.
               * @constant
               */
              OBJECT_TOO_LARGE: 116,
              /**
               * Error code indicating that the operation isn't allowed for clients.
               * @constant
               */
              OPERATION_FORBIDDEN: 119,
              /**
               * Error code indicating the result was not found in the cache.
               * @constant
               */
              CACHE_MISS: 120,
              /**
               * Error code indicating that an invalid key was used in a nested
               * JSONObject.
               * @constant
               */
              INVALID_NESTED_KEY: 121,
              /**
               * Error code indicating that an invalid filename was used for AVFile.
               * A valid file name contains only a-zA-Z0-9_. characters and is between 1
               * and 128 characters.
               * @constant
               */
              INVALID_FILE_NAME: 122,
              /**
               * Error code indicating an invalid ACL was provided.
               * @constant
               */
              INVALID_ACL: 123,
              /**
               * Error code indicating that the request timed out on the server. Typically
               * this indicates that the request is too expensive to run.
               * @constant
               */
              TIMEOUT: 124,
              /**
               * Error code indicating that the email address was invalid.
               * @constant
               */
              INVALID_EMAIL_ADDRESS: 125,
              /**
               * Error code indicating a missing content type.
               * @constant
               */
              MISSING_CONTENT_TYPE: 126,
              /**
               * Error code indicating a missing content length.
               * @constant
               */
              MISSING_CONTENT_LENGTH: 127,
              /**
               * Error code indicating an invalid content length.
               * @constant
               */
              INVALID_CONTENT_LENGTH: 128,
              /**
               * Error code indicating a file that was too large.
               * @constant
               */
              FILE_TOO_LARGE: 129,
              /**
               * Error code indicating an error saving a file.
               * @constant
               */
              FILE_SAVE_ERROR: 130,
              /**
               * Error code indicating an error deleting a file.
               * @constant
               */
              FILE_DELETE_ERROR: 153,
              /**
               * Error code indicating that a unique field was given a value that is
               * already taken.
               * @constant
               */
              DUPLICATE_VALUE: 137,
              /**
               * Error code indicating that a role's name is invalid.
               * @constant
               */
              INVALID_ROLE_NAME: 139,
              /**
               * Error code indicating that an application quota was exceeded.  Upgrade to
               * resolve.
               * @constant
               */
              EXCEEDED_QUOTA: 140,
              /**
               * Error code indicating that a Cloud Code script failed.
               * @constant
               */
              SCRIPT_FAILED: 141,
              /**
               * Error code indicating that a Cloud Code validation failed.
               * @constant
               */
              VALIDATION_ERROR: 142,
              /**
               * Error code indicating that invalid image data was provided.
               * @constant
               */
              INVALID_IMAGE_DATA: 150,
              /**
               * Error code indicating an unsaved file.
               * @constant
               */
              UNSAVED_FILE_ERROR: 151,
              /**
               * Error code indicating an invalid push time.
               */
              INVALID_PUSH_TIME_ERROR: 152,
              /**
               * Error code indicating that the username is missing or empty.
               * @constant
               */
              USERNAME_MISSING: 200,
              /**
               * Error code indicating that the password is missing or empty.
               * @constant
               */
              PASSWORD_MISSING: 201,
              /**
               * Error code indicating that the username has already been taken.
               * @constant
               */
              USERNAME_TAKEN: 202,
              /**
               * Error code indicating that the email has already been taken.
               * @constant
               */
              EMAIL_TAKEN: 203,
              /**
               * Error code indicating that the email is missing, but must be specified.
               * @constant
               */
              EMAIL_MISSING: 204,
              /**
               * Error code indicating that a user with the specified email was not found.
               * @constant
               */
              EMAIL_NOT_FOUND: 205,
              /**
               * Error code indicating that a user object without a valid session could
               * not be altered.
               * @constant
               */
              SESSION_MISSING: 206,
              /**
               * Error code indicating that a user can only be created through signup.
               * @constant
               */
              MUST_CREATE_USER_THROUGH_SIGNUP: 207,
              /**
               * Error code indicating that an an account being linked is already linked
               * to another user.
               * @constant
               */
              ACCOUNT_ALREADY_LINKED: 208,
              /**
               * Error code indicating that a user cannot be linked to an account because
               * that account's id could not be found.
               * @constant
               */
              LINKED_ID_MISSING: 250,
              /**
               * Error code indicating that a user with a linked (e.g. Facebook) account
               * has an invalid session.
               * @constant
               */
              INVALID_LINKED_SESSION: 251,
              /**
               * Error code indicating that a service being linked (e.g. Facebook or
               * Twitter) is unsupported.
               * @constant
               */
              UNSUPPORTED_SERVICE: 252,
              /**
               * Error code indicating a real error code is unavailable because
               * we had to use an XDomainRequest object to allow CORS requests in
               * Internet Explorer, which strips the body from HTTP responses that have
               * a non-2XX status code.
               * @constant
               */
              X_DOMAIN_REQUEST: 602
            }
          );
          module2.exports = AVError;
        },
        /* 30 */
        /***/
        function(module2, exports2, __webpack_require__) {
          exports2.__esModule = true;
          var _iterator = __webpack_require__(61);
          var _iterator2 = _interopRequireDefault(_iterator);
          var _symbol = __webpack_require__(51);
          var _symbol2 = _interopRequireDefault(_symbol);
          var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function(obj) {
            return typeof obj;
          } : function(obj) {
            return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
          };
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          exports2.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function(obj) {
            return typeof obj === "undefined" ? "undefined" : _typeof(obj);
          } : function(obj) {
            return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
          };
        },
        /* 31 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var aFunction = __webpack_require__(52);
          module2.exports = function(fn, that, length) {
            aFunction(fn);
            if (that === void 0)
              return fn;
            switch (length) {
              case 1:
                return function(a) {
                  return fn.call(that, a);
                };
              case 2:
                return function(a, b) {
                  return fn.call(that, a, b);
                };
              case 3:
                return function(a, b, c) {
                  return fn.call(that, a, b, c);
                };
            }
            return function() {
              return fn.apply(that, arguments);
            };
          };
        },
        /* 32 */
        /***/
        function(module2, exports2) {
          module2.exports = {};
        },
        /* 33 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = values;
          var __WEBPACK_IMPORTED_MODULE_0__keys_js__ = __webpack_require__(4);
          function values(obj) {
            var _keys = Object(__WEBPACK_IMPORTED_MODULE_0__keys_js__[
              "a"
              /* default */
            ])(obj);
            var length = _keys.length;
            var values2 = Array(length);
            for (var i2 = 0; i2 < length; i2++) {
              values2[i2] = obj[_keys[i2]];
            }
            return values2;
          }
        },
        /* 34 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = flatten;
          var __WEBPACK_IMPORTED_MODULE_0__getLength_js__ = __webpack_require__(14);
          var __WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__ = __webpack_require__(11);
          var __WEBPACK_IMPORTED_MODULE_2__isArray_js__ = __webpack_require__(27);
          var __WEBPACK_IMPORTED_MODULE_3__isArguments_js__ = __webpack_require__(77);
          function flatten(input, depth, strict, output) {
            output = output || [];
            if (!depth && depth !== 0) {
              depth = Infinity;
            } else if (depth <= 0) {
              return output.concat(input);
            }
            var idx = output.length;
            for (var i2 = 0, length = Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__[
              "a"
              /* default */
            ])(input); i2 < length; i2++) {
              var value = input[i2];
              if (Object(__WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__[
                "a"
                /* default */
              ])(value) && (Object(__WEBPACK_IMPORTED_MODULE_2__isArray_js__[
                "a"
                /* default */
              ])(value) || Object(__WEBPACK_IMPORTED_MODULE_3__isArguments_js__[
                "a"
                /* default */
              ])(value))) {
                if (depth > 1) {
                  flatten(value, depth - 1, strict, output);
                  idx = output.length;
                } else {
                  var j = 0, len = value.length;
                  while (j < len)
                    output[idx++] = value[j++];
                }
              } else if (!strict) {
                output[idx++] = value;
              }
            }
            return output;
          }
        },
        /* 35 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = map;
          var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(8);
          var __WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__ = __webpack_require__(11);
          var __WEBPACK_IMPORTED_MODULE_2__keys_js__ = __webpack_require__(4);
          function map(obj, iteratee, context) {
            iteratee = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__[
              "a"
              /* default */
            ])(iteratee, context);
            var _keys = !Object(__WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__[
              "a"
              /* default */
            ])(obj) && Object(__WEBPACK_IMPORTED_MODULE_2__keys_js__[
              "a"
              /* default */
            ])(obj), length = (_keys || obj).length, results = Array(length);
            for (var index = 0; index < length; index++) {
              var currentKey = _keys ? _keys[index] : index;
              results[index] = iteratee(obj[currentKey], currentKey, obj);
            }
            return results;
          }
        },
        /* 36 */
        /***/
        function(module2, exports2, __webpack_require__) {
          (function(global2) {
            var _stringify = __webpack_require__(19);
            var _stringify2 = _interopRequireDefault(_stringify);
            var _keys = __webpack_require__(158);
            var _keys2 = _interopRequireDefault(_keys);
            var _promise = __webpack_require__(3);
            var _promise2 = _interopRequireDefault(_promise);
            function _interopRequireDefault(obj) {
              return obj && obj.__esModule ? obj : { default: obj };
            }
            var _ = __webpack_require__(0);
            var uuid = __webpack_require__(159);
            var debug = __webpack_require__(37);
            var _require = __webpack_require__(15), inherits = _require.inherits, parseDate = _require.parseDate;
            var version2 = __webpack_require__(161);
            var _require2 = __webpack_require__(38), setAdapters = _require2.setAdapters, adapterManager = _require2.adapterManager;
            var AV2 = global2.AV || {};
            AV2._config = {
              serverURLs: {},
              useMasterKey: false,
              production: null,
              realtime: null,
              requestTimeout: null
            };
            var initialUserAgent = "LeanCloud-JS-SDK/" + version2;
            AV2._sharedConfig = {
              userAgent: initialUserAgent,
              liveQueryRealtime: null
            };
            adapterManager.on("platformInfo", function(platformInfo) {
              var ua = initialUserAgent;
              if (platformInfo) {
                if (platformInfo.userAgent) {
                  ua = platformInfo.userAgent;
                } else {
                  var comments = platformInfo.name;
                  if (platformInfo.version) {
                    comments += "/" + platformInfo.version;
                  }
                  if (platformInfo.extra) {
                    comments += "; " + platformInfo.extra;
                  }
                  ua += " (" + comments + ")";
                }
              }
              AV2._sharedConfig.userAgent = ua;
            });
            AV2._getAVPath = function(path) {
              if (!AV2.applicationId) {
                throw new Error("You need to call AV.initialize before using AV.");
              }
              if (!path) {
                path = "";
              }
              if (!_.isString(path)) {
                throw new Error("Tried to get a localStorage path that wasn't a String.");
              }
              if (path[0] === "/") {
                path = path.substring(1);
              }
              return "AV/" + AV2.applicationId + "/" + path;
            };
            AV2._installationId = null;
            AV2._getInstallationId = function() {
              if (AV2._installationId) {
                return _promise2.default.resolve(AV2._installationId);
              }
              var path = AV2._getAVPath("installationId");
              return AV2.localStorage.getItemAsync(path).then(function(_installationId) {
                AV2._installationId = _installationId;
                if (!AV2._installationId) {
                  AV2._installationId = _installationId = uuid();
                  return AV2.localStorage.setItemAsync(path, _installationId).then(function() {
                    return _installationId;
                  });
                }
                return _installationId;
              });
            };
            AV2._subscriptionId = null;
            AV2._refreshSubscriptionId = function() {
              var path = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : AV2._getAVPath("subscriptionId");
              var subscriptionId = AV2._subscriptionId = uuid();
              return AV2.localStorage.setItemAsync(path, subscriptionId).then(function() {
                return subscriptionId;
              });
            };
            AV2._getSubscriptionId = function() {
              if (AV2._subscriptionId) {
                return _promise2.default.resolve(AV2._subscriptionId);
              }
              var path = AV2._getAVPath("subscriptionId");
              return AV2.localStorage.getItemAsync(path).then(function(_subscriptionId) {
                AV2._subscriptionId = _subscriptionId;
                if (!AV2._subscriptionId) {
                  _subscriptionId = AV2._refreshSubscriptionId(path);
                }
                return _subscriptionId;
              });
            };
            AV2._parseDate = parseDate;
            AV2._extend = function(protoProps, classProps) {
              var child = inherits(this, protoProps, classProps);
              child.extend = this.extend;
              return child;
            };
            AV2._encode = function(value, seenObjects, disallowObjects) {
              var full = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
              if (value instanceof AV2.Object) {
                if (disallowObjects) {
                  throw new Error("AV.Objects not allowed here");
                }
                if (!seenObjects || _.include(seenObjects, value) || !value._hasData) {
                  return value._toPointer();
                }
                return value._toFullJSON(seenObjects.concat(value), full);
              }
              if (value instanceof AV2.ACL) {
                return value.toJSON();
              }
              if (_.isDate(value)) {
                return full ? { __type: "Date", iso: value.toJSON() } : value.toJSON();
              }
              if (value instanceof AV2.GeoPoint) {
                return value.toJSON();
              }
              if (_.isArray(value)) {
                return _.map(value, function(x) {
                  return AV2._encode(x, seenObjects, disallowObjects, full);
                });
              }
              if (_.isRegExp(value)) {
                return value.source;
              }
              if (value instanceof AV2.Relation) {
                return value.toJSON();
              }
              if (value instanceof AV2.Op) {
                return value.toJSON();
              }
              if (value instanceof AV2.File) {
                if (!value.url() && !value.id) {
                  throw new Error("Tried to save an object containing an unsaved file.");
                }
                return value._toFullJSON(seenObjects, full);
              }
              if (_.isObject(value)) {
                return _.mapObject(value, function(v, k) {
                  return AV2._encode(v, seenObjects, disallowObjects, full);
                });
              }
              return value;
            };
            AV2._decode = function(value, key) {
              if (!_.isObject(value) || _.isDate(value)) {
                return value;
              }
              if (_.isArray(value)) {
                return _.map(value, function(v2) {
                  return AV2._decode(v2);
                });
              }
              if (value instanceof AV2.Object) {
                return value;
              }
              if (value instanceof AV2.File) {
                return value;
              }
              if (value instanceof AV2.Op) {
                return value;
              }
              if (value instanceof AV2.GeoPoint) {
                return value;
              }
              if (value instanceof AV2.ACL) {
                return value;
              }
              if (key === "ACL") {
                return new AV2.ACL(value);
              }
              if (value.__op) {
                return AV2.Op._decode(value);
              }
              var className;
              if (value.__type === "Pointer") {
                className = value.className;
                var pointer = AV2.Object._create(className);
                if ((0, _keys2.default)(value).length > 3) {
                  var v = _.clone(value);
                  delete v.__type;
                  delete v.className;
                  pointer._finishFetch(v, true);
                } else {
                  pointer._finishFetch({ objectId: value.objectId }, false);
                }
                return pointer;
              }
              if (value.__type === "Object") {
                className = value.className;
                var _v = _.clone(value);
                delete _v.__type;
                delete _v.className;
                var object = AV2.Object._create(className);
                object._finishFetch(_v, true);
                return object;
              }
              if (value.__type === "Date") {
                return AV2._parseDate(value.iso);
              }
              if (value.__type === "GeoPoint") {
                return new AV2.GeoPoint({
                  latitude: value.latitude,
                  longitude: value.longitude
                });
              }
              if (value.__type === "Relation") {
                if (!key)
                  throw new Error("key missing decoding a Relation");
                var relation = new AV2.Relation(null, key);
                relation.targetClassName = value.className;
                return relation;
              }
              if (value.__type === "File") {
                var file = new AV2.File(value.name);
                var _v2 = _.clone(value);
                delete _v2.__type;
                file._finishFetch(_v2);
                return file;
              }
              return _.mapObject(value, AV2._decode);
            };
            AV2.parseJSON = AV2._decode;
            AV2.parse = function(text) {
              return AV2.parseJSON(JSON.parse(text));
            };
            AV2.stringify = function(target) {
              return (0, _stringify2.default)(AV2._encode(target, [], false, true));
            };
            AV2._encodeObjectOrArray = function(value) {
              var encodeAVObject = function encodeAVObject2(object) {
                if (object && object._toFullJSON) {
                  object = object._toFullJSON([]);
                }
                return _.mapObject(object, function(value2) {
                  return AV2._encode(value2, []);
                });
              };
              if (_.isArray(value)) {
                return value.map(function(object) {
                  return encodeAVObject(object);
                });
              } else {
                return encodeAVObject(value);
              }
            };
            AV2._arrayEach = _.each;
            AV2._traverse = function(object, func, seen) {
              if (object instanceof AV2.Object) {
                seen = seen || [];
                if (_.indexOf(seen, object) >= 0) {
                  return;
                }
                seen.push(object);
                AV2._traverse(object.attributes, func, seen);
                return func(object);
              }
              if (object instanceof AV2.Relation || object instanceof AV2.File) {
                return func(object);
              }
              if (_.isArray(object)) {
                _.each(object, function(child, index) {
                  var newChild = AV2._traverse(child, func, seen);
                  if (newChild) {
                    object[index] = newChild;
                  }
                });
                return func(object);
              }
              if (_.isObject(object)) {
                AV2._each(object, function(child, key) {
                  var newChild = AV2._traverse(child, func, seen);
                  if (newChild) {
                    object[key] = newChild;
                  }
                });
                return func(object);
              }
              return func(object);
            };
            AV2._objectEach = AV2._each = function(obj, callback) {
              if (_.isObject(obj)) {
                _.each(_.keys(obj), function(key) {
                  callback(obj[key], key);
                });
              } else {
                _.each(obj, callback);
              }
            };
            AV2.debug = {
              /**
               * Enable debug
               */
              enable: function enable() {
                var namespaces = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "leancloud*";
                return debug.enable(namespaces);
              },
              /**
               * Disable debug
               */
              disable: debug.disable
            };
            AV2.setAdapters = setAdapters;
            module2.exports = AV2;
          }).call(exports2, __webpack_require__(109));
        },
        /* 37 */
        /***/
        function(module2, exports2, __webpack_require__) {
          function _typeof(obj) {
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
              _typeof = function _typeof2(obj2) {
                return typeof obj2;
              };
            } else {
              _typeof = function _typeof2(obj2) {
                return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
              };
            }
            return _typeof(obj);
          }
          exports2.log = log;
          exports2.formatArgs = formatArgs;
          exports2.save = save;
          exports2.load = load;
          exports2.useColors = useColors;
          exports2.storage = localstorage();
          exports2.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
          function useColors() {
            if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
              return true;
            }
            if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
              return false;
            }
            return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
            typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
            // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
            typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
            typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
          }
          function formatArgs(args) {
            args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
            if (!this.useColors) {
              return;
            }
            var c = "color: " + this.color;
            args.splice(1, 0, c, "color: inherit");
            var index = 0;
            var lastC = 0;
            args[0].replace(/%[a-zA-Z%]/g, function(match) {
              if (match === "%%") {
                return;
              }
              index++;
              if (match === "%c") {
                lastC = index;
              }
            });
            args.splice(lastC, 0, c);
          }
          function log() {
            var _console;
            return (typeof console === "undefined" ? "undefined" : _typeof(console)) === "object" && console.log && (_console = console).log.apply(_console, arguments);
          }
          function save(namespaces) {
            try {
              if (namespaces) {
                exports2.storage.setItem("debug", namespaces);
              } else {
                exports2.storage.removeItem("debug");
              }
            } catch (error) {
            }
          }
          function load() {
            var r2;
            try {
              r2 = exports2.storage.getItem("debug");
            } catch (error) {
            }
            if (!r2 && typeof process !== "undefined" && "env" in process) {
              r2 = {}.DEBUG;
            }
            return r2;
          }
          function localstorage() {
            try {
              return localStorage;
            } catch (error) {
            }
          }
          module2.exports = __webpack_require__(271)(exports2);
          var formatters = module2.exports.formatters;
          formatters.j = function(v) {
            try {
              return JSON.stringify(v);
            } catch (error) {
              return "[UnexpectedJSONParseError]: " + error.message;
            }
          };
        },
        /* 38 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _ = __webpack_require__(0);
          var EventEmitter = __webpack_require__(162);
          var _require = __webpack_require__(15), inherits = _require.inherits;
          var AdapterManager = inherits(EventEmitter, {
            constructor: function constructor() {
              EventEmitter.apply(this);
              this._adapters = {};
            },
            getAdapter: function getAdapter(name2) {
              var adapter = this._adapters[name2];
              if (adapter === void 0) {
                throw new Error(name2 + " adapter is not configured");
              }
              return adapter;
            },
            setAdapters: function setAdapters(newAdapters) {
              var _this = this;
              _.extend(this._adapters, newAdapters);
              _.keys(newAdapters).forEach(function(name2) {
                return _this.emit(name2, newAdapters[name2]);
              });
            }
          });
          var adapterManager = new AdapterManager();
          module2.exports = {
            getAdapter: adapterManager.getAdapter.bind(adapterManager),
            setAdapters: adapterManager.setAdapters.bind(adapterManager),
            adapterManager
          };
        },
        /* 39 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var $at = __webpack_require__(175)(true);
          __webpack_require__(96)(String, "String", function(iterated) {
            this._t = String(iterated);
            this._i = 0;
          }, function() {
            var O = this._t;
            var index = this._i;
            var point;
            if (index >= O.length)
              return { value: void 0, done: true };
            point = $at(O, index);
            this._i += point.length;
            return { value: point, done: false };
          });
        },
        /* 40 */
        /***/
        function(module2, exports2) {
          module2.exports = true;
        },
        /* 41 */
        /***/
        function(module2, exports2) {
          module2.exports = function(exec) {
            try {
              return !!exec();
            } catch (e2) {
              return true;
            }
          };
        },
        /* 42 */
        /***/
        function(module2, exports2) {
          module2.exports = function(bitmap, value) {
            return {
              enumerable: !(bitmap & 1),
              configurable: !(bitmap & 2),
              writable: !(bitmap & 4),
              value
            };
          };
        },
        /* 43 */
        /***/
        function(module2, exports2) {
          var toString = {}.toString;
          module2.exports = function(it) {
            return toString.call(it).slice(8, -1);
          };
        },
        /* 44 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var defined = __webpack_require__(63);
          module2.exports = function(it) {
            return Object(defined(it));
          };
        },
        /* 45 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_require__.d(__webpack_exports__, "a", function() {
            return hasStringTagBug;
          });
          __webpack_require__.d(__webpack_exports__, "b", function() {
            return isIE11;
          });
          var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
          var __WEBPACK_IMPORTED_MODULE_1__hasObjectTag_js__ = __webpack_require__(200);
          var hasStringTagBug = __WEBPACK_IMPORTED_MODULE_0__setup_js__[
            "s"
            /* supportsDataView */
          ] && Object(__WEBPACK_IMPORTED_MODULE_1__hasObjectTag_js__[
            "a"
            /* default */
          ])(new DataView(new ArrayBuffer(8))), isIE11 = typeof Map !== "undefined" && Object(__WEBPACK_IMPORTED_MODULE_1__hasObjectTag_js__[
            "a"
            /* default */
          ])(/* @__PURE__ */ new Map());
        },
        /* 46 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = allKeys;
          var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(26);
          var __WEBPACK_IMPORTED_MODULE_1__setup_js__ = __webpack_require__(1);
          var __WEBPACK_IMPORTED_MODULE_2__collectNonEnumProps_js__ = __webpack_require__(120);
          function allKeys(obj) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__isObject_js__[
              "a"
              /* default */
            ])(obj))
              return [];
            var keys = [];
            for (var key in obj)
              keys.push(key);
            if (__WEBPACK_IMPORTED_MODULE_1__setup_js__[
              "h"
              /* hasEnumBug */
            ])
              Object(__WEBPACK_IMPORTED_MODULE_2__collectNonEnumProps_js__[
                "a"
                /* default */
              ])(obj, keys);
            return keys;
          }
        },
        /* 47 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = toPath;
          var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(10);
          __webpack_require__(129);
          function toPath(path) {
            return __WEBPACK_IMPORTED_MODULE_0__underscore_js__[
              "a"
              /* default */
            ].toPath(path);
          }
        },
        /* 48 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = optimizeCb;
          function optimizeCb(func, context, argCount) {
            if (context === void 0)
              return func;
            switch (argCount == null ? 3 : argCount) {
              case 1:
                return function(value) {
                  return func.call(context, value);
                };
              case 3:
                return function(value, index, collection) {
                  return func.call(context, value, index, collection);
                };
              case 4:
                return function(accumulator, value, index, collection) {
                  return func.call(context, accumulator, value, index, collection);
                };
            }
            return function() {
              return func.apply(context, arguments);
            };
          }
        },
        /* 49 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = filter;
          var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(8);
          var __WEBPACK_IMPORTED_MODULE_1__each_js__ = __webpack_require__(28);
          function filter(obj, predicate, context) {
            var results = [];
            predicate = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__[
              "a"
              /* default */
            ])(predicate, context);
            Object(__WEBPACK_IMPORTED_MODULE_1__each_js__[
              "a"
              /* default */
            ])(obj, function(value, index, list) {
              if (predicate(value, index, list))
                results.push(value);
            });
            return results;
          }
        },
        /* 50 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = contains;
          var __WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__ = __webpack_require__(11);
          var __WEBPACK_IMPORTED_MODULE_1__values_js__ = __webpack_require__(33);
          var __WEBPACK_IMPORTED_MODULE_2__indexOf_js__ = __webpack_require__(145);
          function contains(obj, item, fromIndex, guard) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__[
              "a"
              /* default */
            ])(obj))
              obj = Object(__WEBPACK_IMPORTED_MODULE_1__values_js__[
                "a"
                /* default */
              ])(obj);
            if (typeof fromIndex != "number" || guard)
              fromIndex = 0;
            return Object(__WEBPACK_IMPORTED_MODULE_2__indexOf_js__[
              "a"
              /* default */
            ])(obj, item, fromIndex) >= 0;
          }
        },
        /* 51 */
        /***/
        function(module2, exports2, __webpack_require__) {
          module2.exports = { "default": __webpack_require__(280), __esModule: true };
        },
        /* 52 */
        /***/
        function(module2, exports2) {
          module2.exports = function(it) {
            if (typeof it != "function")
              throw TypeError(it + " is not a function!");
            return it;
          };
        },
        /* 53 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var $keys = __webpack_require__(99);
          var enumBugKeys = __webpack_require__(70);
          module2.exports = Object.keys || function keys(O) {
            return $keys(O, enumBugKeys);
          };
        },
        /* 54 */
        /***/
        function(module2, exports2) {
          var id = 0;
          var px = Math.random();
          module2.exports = function(key) {
            return "Symbol(".concat(key === void 0 ? "" : key, ")_", (++id + px).toString(36));
          };
        },
        /* 55 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var def = __webpack_require__(18).f;
          var has = __webpack_require__(24);
          var TAG = __webpack_require__(7)("toStringTag");
          module2.exports = function(it, tag, stat) {
            if (it && !has(it = stat ? it : it.prototype, TAG))
              def(it, TAG, { configurable: true, value: tag });
          };
        },
        /* 56 */
        /***/
        function(module2, exports2, __webpack_require__) {
          __webpack_require__(181);
          var global2 = __webpack_require__(6);
          var hide = __webpack_require__(23);
          var Iterators = __webpack_require__(32);
          var TO_STRING_TAG = __webpack_require__(7)("toStringTag");
          var DOMIterables = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(",");
          for (var i2 = 0; i2 < DOMIterables.length; i2++) {
            var NAME = DOMIterables[i2];
            var Collection = global2[NAME];
            var proto = Collection && Collection.prototype;
            if (proto && !proto[TO_STRING_TAG])
              hide(proto, TO_STRING_TAG, NAME);
            Iterators[NAME] = Iterators.Array;
          }
        },
        /* 57 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = matcher;
          var __WEBPACK_IMPORTED_MODULE_0__extendOwn_js__ = __webpack_require__(81);
          var __WEBPACK_IMPORTED_MODULE_1__isMatch_js__ = __webpack_require__(121);
          function matcher(attrs) {
            attrs = Object(__WEBPACK_IMPORTED_MODULE_0__extendOwn_js__[
              "a"
              /* default */
            ])({}, attrs);
            return function(obj) {
              return Object(__WEBPACK_IMPORTED_MODULE_1__isMatch_js__[
                "a"
                /* default */
              ])(obj, attrs);
            };
          }
        },
        /* 58 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
          var __WEBPACK_IMPORTED_MODULE_1__executeBound_js__ = __webpack_require__(137);
          var __WEBPACK_IMPORTED_MODULE_2__underscore_js__ = __webpack_require__(10);
          var partial = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__[
            "a"
            /* default */
          ])(function(func, boundArgs) {
            var placeholder = partial.placeholder;
            var bound = function() {
              var position = 0, length = boundArgs.length;
              var args = Array(length);
              for (var i2 = 0; i2 < length; i2++) {
                args[i2] = boundArgs[i2] === placeholder ? arguments[position++] : boundArgs[i2];
              }
              while (position < arguments.length)
                args.push(arguments[position++]);
              return Object(__WEBPACK_IMPORTED_MODULE_1__executeBound_js__[
                "a"
                /* default */
              ])(func, bound, this, this, args);
            };
            return bound;
          });
          partial.placeholder = __WEBPACK_IMPORTED_MODULE_2__underscore_js__[
            "a"
            /* default */
          ];
          __webpack_exports__["a"] = partial;
        },
        /* 59 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = group;
          var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(8);
          var __WEBPACK_IMPORTED_MODULE_1__each_js__ = __webpack_require__(28);
          function group(behavior, partition) {
            return function(obj, iteratee, context) {
              var result = partition ? [[], []] : {};
              iteratee = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__[
                "a"
                /* default */
              ])(iteratee, context);
              Object(__WEBPACK_IMPORTED_MODULE_1__each_js__[
                "a"
                /* default */
              ])(obj, function(value, index) {
                var key = iteratee(value, index, obj);
                behavior(result, value, key);
              });
              return result;
            };
          }
        },
        /* 60 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _stringify = __webpack_require__(19);
          var _stringify2 = _interopRequireDefault(_stringify);
          var _typeof2 = __webpack_require__(30);
          var _typeof3 = _interopRequireDefault(_typeof2);
          var _keys = __webpack_require__(158);
          var _keys2 = _interopRequireDefault(_keys);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          __webpack_require__(0);
          var _require = __webpack_require__(288), timeout = _require.timeout;
          var debug = __webpack_require__(37);
          var debugRequest = debug("leancloud:request");
          var debugRequestError = debug("leancloud:request:error");
          var _require2 = __webpack_require__(38), getAdapter = _require2.getAdapter;
          var requestsCount = 0;
          var ajax = function ajax2(_ref) {
            var method = _ref.method, url = _ref.url, query = _ref.query, data2 = _ref.data, _ref$headers = _ref.headers, headers = _ref$headers === void 0 ? {} : _ref$headers, time = _ref.timeout, onprogress = _ref.onprogress;
            if (query) {
              var queryString = (0, _keys2.default)(query).map(function(key) {
                var value = query[key];
                if (value === void 0)
                  return void 0;
                var v = (typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value)) === "object" ? (0, _stringify2.default)(value) : value;
                return encodeURIComponent(key) + "=" + encodeURIComponent(v);
              }).filter(function(qs) {
                return qs;
              }).join("&");
              url = url + "?" + queryString;
            }
            var count = requestsCount++;
            debugRequest("request(%d) %s %s %o %o %o", count, method, url, query, data2, headers);
            var request = getAdapter("request");
            var promise = request(url, { method, headers, data: data2, onprogress }).then(function(response) {
              debugRequest("response(%d) %d %O %o", count, response.status, response.data || response.text, response.header);
              if (response.ok === false) {
                var error = new Error();
                error.response = response;
                throw error;
              }
              return response.data;
            }).catch(function(error) {
              if (error.response) {
                if (!debug.enabled("leancloud:request")) {
                  debugRequestError("request(%d) %s %s %o %o %o", count, method, url, query, data2, headers);
                }
                debugRequestError("response(%d) %d %O %o", count, error.response.status, error.response.data || error.response.text, error.response.header);
                error.statusCode = error.response.status;
                error.responseText = error.response.text;
                error.response = error.response.data;
              }
              throw error;
            });
            return time ? timeout(promise, time) : promise;
          };
          module2.exports = ajax;
        },
        /* 61 */
        /***/
        function(module2, exports2, __webpack_require__) {
          module2.exports = { "default": __webpack_require__(279), __esModule: true };
        },
        /* 62 */
        /***/
        function(module2, exports2) {
          var ceil = Math.ceil;
          var floor = Math.floor;
          module2.exports = function(it) {
            return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
          };
        },
        /* 63 */
        /***/
        function(module2, exports2) {
          module2.exports = function(it) {
            if (it == void 0)
              throw TypeError("Can't call method on  " + it);
            return it;
          };
        },
        /* 64 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var isObject = __webpack_require__(20);
          var document2 = __webpack_require__(6).document;
          var is = isObject(document2) && isObject(document2.createElement);
          module2.exports = function(it) {
            return is ? document2.createElement(it) : {};
          };
        },
        /* 65 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var isObject = __webpack_require__(20);
          module2.exports = function(it, S) {
            if (!isObject(it))
              return it;
            var fn, val;
            if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it)))
              return val;
            if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it)))
              return val;
            if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it)))
              return val;
            throw TypeError("Can't convert object to primitive value");
          };
        },
        /* 66 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var anObject = __webpack_require__(17);
          var dPs = __webpack_require__(177);
          var enumBugKeys = __webpack_require__(70);
          var IE_PROTO = __webpack_require__(68)("IE_PROTO");
          var Empty = function() {
          };
          var PROTOTYPE = "prototype";
          var createDict = function() {
            var iframe = __webpack_require__(64)("iframe");
            var i2 = enumBugKeys.length;
            var lt = "<";
            var gt = ">";
            var iframeDocument;
            iframe.style.display = "none";
            __webpack_require__(100).appendChild(iframe);
            iframe.src = "javascript:";
            iframeDocument = iframe.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
            iframeDocument.close();
            createDict = iframeDocument.F;
            while (i2--)
              delete createDict[PROTOTYPE][enumBugKeys[i2]];
            return createDict();
          };
          module2.exports = Object.create || function create(O, Properties) {
            var result;
            if (O !== null) {
              Empty[PROTOTYPE] = anObject(O);
              result = new Empty();
              Empty[PROTOTYPE] = null;
              result[IE_PROTO] = O;
            } else
              result = createDict();
            return Properties === void 0 ? result : dPs(result, Properties);
          };
        },
        /* 67 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var toInteger = __webpack_require__(62);
          var min = Math.min;
          module2.exports = function(it) {
            return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
          };
        },
        /* 68 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var shared = __webpack_require__(69)("keys");
          var uid = __webpack_require__(54);
          module2.exports = function(key) {
            return shared[key] || (shared[key] = uid(key));
          };
        },
        /* 69 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var core = __webpack_require__(2);
          var global2 = __webpack_require__(6);
          var SHARED = "__core-js_shared__";
          var store = global2[SHARED] || (global2[SHARED] = {});
          (module2.exports = function(key, value) {
            return store[key] || (store[key] = value !== void 0 ? value : {});
          })("versions", []).push({
            version: core.version,
            mode: __webpack_require__(40) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
          });
        },
        /* 70 */
        /***/
        function(module2, exports2) {
          module2.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
        },
        /* 71 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var cof = __webpack_require__(43);
          var TAG = __webpack_require__(7)("toStringTag");
          var ARG = cof(function() {
            return arguments;
          }()) == "Arguments";
          var tryGet = function(it, key) {
            try {
              return it[key];
            } catch (e2) {
            }
          };
          module2.exports = function(it) {
            var O, T, B;
            return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (T = tryGet(O = Object(it), TAG)) == "string" ? T : ARG ? cof(O) : (B = cof(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : B;
          };
        },
        /* 72 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var classof = __webpack_require__(71);
          var ITERATOR = __webpack_require__(7)("iterator");
          var Iterators = __webpack_require__(32);
          module2.exports = __webpack_require__(2).getIteratorMethod = function(it) {
            if (it != void 0)
              return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
          };
        },
        /* 73 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var aFunction = __webpack_require__(52);
          function PromiseCapability(C) {
            var resolve, reject;
            this.promise = new C(function($$resolve, $$reject) {
              if (resolve !== void 0 || reject !== void 0)
                throw TypeError("Bad Promise constructor");
              resolve = $$resolve;
              reject = $$reject;
            });
            this.resolve = aFunction(resolve);
            this.reject = aFunction(reject);
          }
          module2.exports.f = function(C) {
            return new PromiseCapability(C);
          };
        },
        /* 74 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
          var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
          __webpack_require__.d(__webpack_exports__, "VERSION", function() {
            return __WEBPACK_IMPORTED_MODULE_0__setup_js__["e"];
          });
          var __WEBPACK_IMPORTED_MODULE_1__restArguments_js__ = __webpack_require__(9);
          __webpack_require__.d(__webpack_exports__, "restArguments", function() {
            return __WEBPACK_IMPORTED_MODULE_1__restArguments_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_2__isObject_js__ = __webpack_require__(26);
          __webpack_require__.d(__webpack_exports__, "isObject", function() {
            return __WEBPACK_IMPORTED_MODULE_2__isObject_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_3__isNull_js__ = __webpack_require__(195);
          __webpack_require__.d(__webpack_exports__, "isNull", function() {
            return __WEBPACK_IMPORTED_MODULE_3__isNull_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_4__isUndefined_js__ = __webpack_require__(110);
          __webpack_require__.d(__webpack_exports__, "isUndefined", function() {
            return __WEBPACK_IMPORTED_MODULE_4__isUndefined_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_5__isBoolean_js__ = __webpack_require__(111);
          __webpack_require__.d(__webpack_exports__, "isBoolean", function() {
            return __WEBPACK_IMPORTED_MODULE_5__isBoolean_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_6__isElement_js__ = __webpack_require__(196);
          __webpack_require__.d(__webpack_exports__, "isElement", function() {
            return __WEBPACK_IMPORTED_MODULE_6__isElement_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_7__isString_js__ = __webpack_require__(75);
          __webpack_require__.d(__webpack_exports__, "isString", function() {
            return __WEBPACK_IMPORTED_MODULE_7__isString_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_8__isNumber_js__ = __webpack_require__(112);
          __webpack_require__.d(__webpack_exports__, "isNumber", function() {
            return __WEBPACK_IMPORTED_MODULE_8__isNumber_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_9__isDate_js__ = __webpack_require__(197);
          __webpack_require__.d(__webpack_exports__, "isDate", function() {
            return __WEBPACK_IMPORTED_MODULE_9__isDate_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_10__isRegExp_js__ = __webpack_require__(198);
          __webpack_require__.d(__webpack_exports__, "isRegExp", function() {
            return __WEBPACK_IMPORTED_MODULE_10__isRegExp_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_11__isError_js__ = __webpack_require__(199);
          __webpack_require__.d(__webpack_exports__, "isError", function() {
            return __WEBPACK_IMPORTED_MODULE_11__isError_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_12__isSymbol_js__ = __webpack_require__(113);
          __webpack_require__.d(__webpack_exports__, "isSymbol", function() {
            return __WEBPACK_IMPORTED_MODULE_12__isSymbol_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_13__isArrayBuffer_js__ = __webpack_require__(114);
          __webpack_require__.d(__webpack_exports__, "isArrayBuffer", function() {
            return __WEBPACK_IMPORTED_MODULE_13__isArrayBuffer_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_14__isDataView_js__ = __webpack_require__(76);
          __webpack_require__.d(__webpack_exports__, "isDataView", function() {
            return __WEBPACK_IMPORTED_MODULE_14__isDataView_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_15__isArray_js__ = __webpack_require__(27);
          __webpack_require__.d(__webpack_exports__, "isArray", function() {
            return __WEBPACK_IMPORTED_MODULE_15__isArray_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_16__isFunction_js__ = __webpack_require__(13);
          __webpack_require__.d(__webpack_exports__, "isFunction", function() {
            return __WEBPACK_IMPORTED_MODULE_16__isFunction_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_17__isArguments_js__ = __webpack_require__(77);
          __webpack_require__.d(__webpack_exports__, "isArguments", function() {
            return __WEBPACK_IMPORTED_MODULE_17__isArguments_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_18__isFinite_js__ = __webpack_require__(201);
          __webpack_require__.d(__webpack_exports__, "isFinite", function() {
            return __WEBPACK_IMPORTED_MODULE_18__isFinite_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_19__isNaN_js__ = __webpack_require__(115);
          __webpack_require__.d(__webpack_exports__, "isNaN", function() {
            return __WEBPACK_IMPORTED_MODULE_19__isNaN_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_20__isTypedArray_js__ = __webpack_require__(116);
          __webpack_require__.d(__webpack_exports__, "isTypedArray", function() {
            return __WEBPACK_IMPORTED_MODULE_20__isTypedArray_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_21__isEmpty_js__ = __webpack_require__(203);
          __webpack_require__.d(__webpack_exports__, "isEmpty", function() {
            return __WEBPACK_IMPORTED_MODULE_21__isEmpty_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_22__isMatch_js__ = __webpack_require__(121);
          __webpack_require__.d(__webpack_exports__, "isMatch", function() {
            return __WEBPACK_IMPORTED_MODULE_22__isMatch_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_23__isEqual_js__ = __webpack_require__(204);
          __webpack_require__.d(__webpack_exports__, "isEqual", function() {
            return __WEBPACK_IMPORTED_MODULE_23__isEqual_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_24__isMap_js__ = __webpack_require__(206);
          __webpack_require__.d(__webpack_exports__, "isMap", function() {
            return __WEBPACK_IMPORTED_MODULE_24__isMap_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_25__isWeakMap_js__ = __webpack_require__(207);
          __webpack_require__.d(__webpack_exports__, "isWeakMap", function() {
            return __WEBPACK_IMPORTED_MODULE_25__isWeakMap_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_26__isSet_js__ = __webpack_require__(208);
          __webpack_require__.d(__webpack_exports__, "isSet", function() {
            return __WEBPACK_IMPORTED_MODULE_26__isSet_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_27__isWeakSet_js__ = __webpack_require__(209);
          __webpack_require__.d(__webpack_exports__, "isWeakSet", function() {
            return __WEBPACK_IMPORTED_MODULE_27__isWeakSet_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_28__keys_js__ = __webpack_require__(4);
          __webpack_require__.d(__webpack_exports__, "keys", function() {
            return __WEBPACK_IMPORTED_MODULE_28__keys_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_29__allKeys_js__ = __webpack_require__(46);
          __webpack_require__.d(__webpack_exports__, "allKeys", function() {
            return __WEBPACK_IMPORTED_MODULE_29__allKeys_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_30__values_js__ = __webpack_require__(33);
          __webpack_require__.d(__webpack_exports__, "values", function() {
            return __WEBPACK_IMPORTED_MODULE_30__values_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_31__pairs_js__ = __webpack_require__(210);
          __webpack_require__.d(__webpack_exports__, "pairs", function() {
            return __WEBPACK_IMPORTED_MODULE_31__pairs_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_32__invert_js__ = __webpack_require__(122);
          __webpack_require__.d(__webpack_exports__, "invert", function() {
            return __WEBPACK_IMPORTED_MODULE_32__invert_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_33__functions_js__ = __webpack_require__(123);
          __webpack_require__.d(__webpack_exports__, "functions", function() {
            return __WEBPACK_IMPORTED_MODULE_33__functions_js__["a"];
          });
          __webpack_require__.d(__webpack_exports__, "methods", function() {
            return __WEBPACK_IMPORTED_MODULE_33__functions_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_34__extend_js__ = __webpack_require__(124);
          __webpack_require__.d(__webpack_exports__, "extend", function() {
            return __WEBPACK_IMPORTED_MODULE_34__extend_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_35__extendOwn_js__ = __webpack_require__(81);
          __webpack_require__.d(__webpack_exports__, "extendOwn", function() {
            return __WEBPACK_IMPORTED_MODULE_35__extendOwn_js__["a"];
          });
          __webpack_require__.d(__webpack_exports__, "assign", function() {
            return __WEBPACK_IMPORTED_MODULE_35__extendOwn_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_36__defaults_js__ = __webpack_require__(125);
          __webpack_require__.d(__webpack_exports__, "defaults", function() {
            return __WEBPACK_IMPORTED_MODULE_36__defaults_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_37__create_js__ = __webpack_require__(211);
          __webpack_require__.d(__webpack_exports__, "create", function() {
            return __WEBPACK_IMPORTED_MODULE_37__create_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_38__clone_js__ = __webpack_require__(127);
          __webpack_require__.d(__webpack_exports__, "clone", function() {
            return __WEBPACK_IMPORTED_MODULE_38__clone_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_39__tap_js__ = __webpack_require__(212);
          __webpack_require__.d(__webpack_exports__, "tap", function() {
            return __WEBPACK_IMPORTED_MODULE_39__tap_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_40__get_js__ = __webpack_require__(128);
          __webpack_require__.d(__webpack_exports__, "get", function() {
            return __WEBPACK_IMPORTED_MODULE_40__get_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_41__has_js__ = __webpack_require__(213);
          __webpack_require__.d(__webpack_exports__, "has", function() {
            return __WEBPACK_IMPORTED_MODULE_41__has_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_42__mapObject_js__ = __webpack_require__(214);
          __webpack_require__.d(__webpack_exports__, "mapObject", function() {
            return __WEBPACK_IMPORTED_MODULE_42__mapObject_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_43__identity_js__ = __webpack_require__(83);
          __webpack_require__.d(__webpack_exports__, "identity", function() {
            return __WEBPACK_IMPORTED_MODULE_43__identity_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_44__constant_js__ = __webpack_require__(117);
          __webpack_require__.d(__webpack_exports__, "constant", function() {
            return __WEBPACK_IMPORTED_MODULE_44__constant_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_45__noop_js__ = __webpack_require__(132);
          __webpack_require__.d(__webpack_exports__, "noop", function() {
            return __WEBPACK_IMPORTED_MODULE_45__noop_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_46__toPath_js__ = __webpack_require__(129);
          __webpack_require__.d(__webpack_exports__, "toPath", function() {
            return __WEBPACK_IMPORTED_MODULE_46__toPath_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_47__property_js__ = __webpack_require__(84);
          __webpack_require__.d(__webpack_exports__, "property", function() {
            return __WEBPACK_IMPORTED_MODULE_47__property_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_48__propertyOf_js__ = __webpack_require__(215);
          __webpack_require__.d(__webpack_exports__, "propertyOf", function() {
            return __WEBPACK_IMPORTED_MODULE_48__propertyOf_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_49__matcher_js__ = __webpack_require__(57);
          __webpack_require__.d(__webpack_exports__, "matcher", function() {
            return __WEBPACK_IMPORTED_MODULE_49__matcher_js__["a"];
          });
          __webpack_require__.d(__webpack_exports__, "matches", function() {
            return __WEBPACK_IMPORTED_MODULE_49__matcher_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_50__times_js__ = __webpack_require__(216);
          __webpack_require__.d(__webpack_exports__, "times", function() {
            return __WEBPACK_IMPORTED_MODULE_50__times_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_51__random_js__ = __webpack_require__(133);
          __webpack_require__.d(__webpack_exports__, "random", function() {
            return __WEBPACK_IMPORTED_MODULE_51__random_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_52__now_js__ = __webpack_require__(85);
          __webpack_require__.d(__webpack_exports__, "now", function() {
            return __WEBPACK_IMPORTED_MODULE_52__now_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_53__escape_js__ = __webpack_require__(217);
          __webpack_require__.d(__webpack_exports__, "escape", function() {
            return __WEBPACK_IMPORTED_MODULE_53__escape_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_54__unescape_js__ = __webpack_require__(218);
          __webpack_require__.d(__webpack_exports__, "unescape", function() {
            return __WEBPACK_IMPORTED_MODULE_54__unescape_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_55__templateSettings_js__ = __webpack_require__(136);
          __webpack_require__.d(__webpack_exports__, "templateSettings", function() {
            return __WEBPACK_IMPORTED_MODULE_55__templateSettings_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_56__template_js__ = __webpack_require__(220);
          __webpack_require__.d(__webpack_exports__, "template", function() {
            return __WEBPACK_IMPORTED_MODULE_56__template_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_57__result_js__ = __webpack_require__(221);
          __webpack_require__.d(__webpack_exports__, "result", function() {
            return __WEBPACK_IMPORTED_MODULE_57__result_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_58__uniqueId_js__ = __webpack_require__(222);
          __webpack_require__.d(__webpack_exports__, "uniqueId", function() {
            return __WEBPACK_IMPORTED_MODULE_58__uniqueId_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_59__chain_js__ = __webpack_require__(223);
          __webpack_require__.d(__webpack_exports__, "chain", function() {
            return __WEBPACK_IMPORTED_MODULE_59__chain_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_60__iteratee_js__ = __webpack_require__(131);
          __webpack_require__.d(__webpack_exports__, "iteratee", function() {
            return __WEBPACK_IMPORTED_MODULE_60__iteratee_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_61__partial_js__ = __webpack_require__(58);
          __webpack_require__.d(__webpack_exports__, "partial", function() {
            return __WEBPACK_IMPORTED_MODULE_61__partial_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_62__bind_js__ = __webpack_require__(138);
          __webpack_require__.d(__webpack_exports__, "bind", function() {
            return __WEBPACK_IMPORTED_MODULE_62__bind_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_63__bindAll_js__ = __webpack_require__(224);
          __webpack_require__.d(__webpack_exports__, "bindAll", function() {
            return __WEBPACK_IMPORTED_MODULE_63__bindAll_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_64__memoize_js__ = __webpack_require__(225);
          __webpack_require__.d(__webpack_exports__, "memoize", function() {
            return __WEBPACK_IMPORTED_MODULE_64__memoize_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_65__delay_js__ = __webpack_require__(139);
          __webpack_require__.d(__webpack_exports__, "delay", function() {
            return __WEBPACK_IMPORTED_MODULE_65__delay_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_66__defer_js__ = __webpack_require__(226);
          __webpack_require__.d(__webpack_exports__, "defer", function() {
            return __WEBPACK_IMPORTED_MODULE_66__defer_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_67__throttle_js__ = __webpack_require__(227);
          __webpack_require__.d(__webpack_exports__, "throttle", function() {
            return __WEBPACK_IMPORTED_MODULE_67__throttle_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_68__debounce_js__ = __webpack_require__(228);
          __webpack_require__.d(__webpack_exports__, "debounce", function() {
            return __WEBPACK_IMPORTED_MODULE_68__debounce_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_69__wrap_js__ = __webpack_require__(229);
          __webpack_require__.d(__webpack_exports__, "wrap", function() {
            return __WEBPACK_IMPORTED_MODULE_69__wrap_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_70__negate_js__ = __webpack_require__(86);
          __webpack_require__.d(__webpack_exports__, "negate", function() {
            return __WEBPACK_IMPORTED_MODULE_70__negate_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_71__compose_js__ = __webpack_require__(230);
          __webpack_require__.d(__webpack_exports__, "compose", function() {
            return __WEBPACK_IMPORTED_MODULE_71__compose_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_72__after_js__ = __webpack_require__(231);
          __webpack_require__.d(__webpack_exports__, "after", function() {
            return __WEBPACK_IMPORTED_MODULE_72__after_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_73__before_js__ = __webpack_require__(140);
          __webpack_require__.d(__webpack_exports__, "before", function() {
            return __WEBPACK_IMPORTED_MODULE_73__before_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_74__once_js__ = __webpack_require__(232);
          __webpack_require__.d(__webpack_exports__, "once", function() {
            return __WEBPACK_IMPORTED_MODULE_74__once_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_75__findKey_js__ = __webpack_require__(141);
          __webpack_require__.d(__webpack_exports__, "findKey", function() {
            return __WEBPACK_IMPORTED_MODULE_75__findKey_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_76__findIndex_js__ = __webpack_require__(87);
          __webpack_require__.d(__webpack_exports__, "findIndex", function() {
            return __WEBPACK_IMPORTED_MODULE_76__findIndex_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_77__findLastIndex_js__ = __webpack_require__(143);
          __webpack_require__.d(__webpack_exports__, "findLastIndex", function() {
            return __WEBPACK_IMPORTED_MODULE_77__findLastIndex_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_78__sortedIndex_js__ = __webpack_require__(144);
          __webpack_require__.d(__webpack_exports__, "sortedIndex", function() {
            return __WEBPACK_IMPORTED_MODULE_78__sortedIndex_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_79__indexOf_js__ = __webpack_require__(145);
          __webpack_require__.d(__webpack_exports__, "indexOf", function() {
            return __WEBPACK_IMPORTED_MODULE_79__indexOf_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_80__lastIndexOf_js__ = __webpack_require__(233);
          __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() {
            return __WEBPACK_IMPORTED_MODULE_80__lastIndexOf_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_81__find_js__ = __webpack_require__(147);
          __webpack_require__.d(__webpack_exports__, "find", function() {
            return __WEBPACK_IMPORTED_MODULE_81__find_js__["a"];
          });
          __webpack_require__.d(__webpack_exports__, "detect", function() {
            return __WEBPACK_IMPORTED_MODULE_81__find_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_82__findWhere_js__ = __webpack_require__(234);
          __webpack_require__.d(__webpack_exports__, "findWhere", function() {
            return __WEBPACK_IMPORTED_MODULE_82__findWhere_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_83__each_js__ = __webpack_require__(28);
          __webpack_require__.d(__webpack_exports__, "each", function() {
            return __WEBPACK_IMPORTED_MODULE_83__each_js__["a"];
          });
          __webpack_require__.d(__webpack_exports__, "forEach", function() {
            return __WEBPACK_IMPORTED_MODULE_83__each_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_84__map_js__ = __webpack_require__(35);
          __webpack_require__.d(__webpack_exports__, "map", function() {
            return __WEBPACK_IMPORTED_MODULE_84__map_js__["a"];
          });
          __webpack_require__.d(__webpack_exports__, "collect", function() {
            return __WEBPACK_IMPORTED_MODULE_84__map_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_85__reduce_js__ = __webpack_require__(235);
          __webpack_require__.d(__webpack_exports__, "reduce", function() {
            return __WEBPACK_IMPORTED_MODULE_85__reduce_js__["a"];
          });
          __webpack_require__.d(__webpack_exports__, "foldl", function() {
            return __WEBPACK_IMPORTED_MODULE_85__reduce_js__["a"];
          });
          __webpack_require__.d(__webpack_exports__, "inject", function() {
            return __WEBPACK_IMPORTED_MODULE_85__reduce_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_86__reduceRight_js__ = __webpack_require__(236);
          __webpack_require__.d(__webpack_exports__, "reduceRight", function() {
            return __WEBPACK_IMPORTED_MODULE_86__reduceRight_js__["a"];
          });
          __webpack_require__.d(__webpack_exports__, "foldr", function() {
            return __WEBPACK_IMPORTED_MODULE_86__reduceRight_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_87__filter_js__ = __webpack_require__(49);
          __webpack_require__.d(__webpack_exports__, "filter", function() {
            return __WEBPACK_IMPORTED_MODULE_87__filter_js__["a"];
          });
          __webpack_require__.d(__webpack_exports__, "select", function() {
            return __WEBPACK_IMPORTED_MODULE_87__filter_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_88__reject_js__ = __webpack_require__(237);
          __webpack_require__.d(__webpack_exports__, "reject", function() {
            return __WEBPACK_IMPORTED_MODULE_88__reject_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_89__every_js__ = __webpack_require__(238);
          __webpack_require__.d(__webpack_exports__, "every", function() {
            return __WEBPACK_IMPORTED_MODULE_89__every_js__["a"];
          });
          __webpack_require__.d(__webpack_exports__, "all", function() {
            return __WEBPACK_IMPORTED_MODULE_89__every_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_90__some_js__ = __webpack_require__(239);
          __webpack_require__.d(__webpack_exports__, "some", function() {
            return __WEBPACK_IMPORTED_MODULE_90__some_js__["a"];
          });
          __webpack_require__.d(__webpack_exports__, "any", function() {
            return __WEBPACK_IMPORTED_MODULE_90__some_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_91__contains_js__ = __webpack_require__(50);
          __webpack_require__.d(__webpack_exports__, "contains", function() {
            return __WEBPACK_IMPORTED_MODULE_91__contains_js__["a"];
          });
          __webpack_require__.d(__webpack_exports__, "includes", function() {
            return __WEBPACK_IMPORTED_MODULE_91__contains_js__["a"];
          });
          __webpack_require__.d(__webpack_exports__, "include", function() {
            return __WEBPACK_IMPORTED_MODULE_91__contains_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_92__invoke_js__ = __webpack_require__(240);
          __webpack_require__.d(__webpack_exports__, "invoke", function() {
            return __WEBPACK_IMPORTED_MODULE_92__invoke_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_93__pluck_js__ = __webpack_require__(88);
          __webpack_require__.d(__webpack_exports__, "pluck", function() {
            return __WEBPACK_IMPORTED_MODULE_93__pluck_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_94__where_js__ = __webpack_require__(241);
          __webpack_require__.d(__webpack_exports__, "where", function() {
            return __WEBPACK_IMPORTED_MODULE_94__where_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_95__max_js__ = __webpack_require__(149);
          __webpack_require__.d(__webpack_exports__, "max", function() {
            return __WEBPACK_IMPORTED_MODULE_95__max_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_96__min_js__ = __webpack_require__(242);
          __webpack_require__.d(__webpack_exports__, "min", function() {
            return __WEBPACK_IMPORTED_MODULE_96__min_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_97__shuffle_js__ = __webpack_require__(243);
          __webpack_require__.d(__webpack_exports__, "shuffle", function() {
            return __WEBPACK_IMPORTED_MODULE_97__shuffle_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_98__sample_js__ = __webpack_require__(150);
          __webpack_require__.d(__webpack_exports__, "sample", function() {
            return __WEBPACK_IMPORTED_MODULE_98__sample_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_99__sortBy_js__ = __webpack_require__(244);
          __webpack_require__.d(__webpack_exports__, "sortBy", function() {
            return __WEBPACK_IMPORTED_MODULE_99__sortBy_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_100__groupBy_js__ = __webpack_require__(245);
          __webpack_require__.d(__webpack_exports__, "groupBy", function() {
            return __WEBPACK_IMPORTED_MODULE_100__groupBy_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_101__indexBy_js__ = __webpack_require__(246);
          __webpack_require__.d(__webpack_exports__, "indexBy", function() {
            return __WEBPACK_IMPORTED_MODULE_101__indexBy_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_102__countBy_js__ = __webpack_require__(247);
          __webpack_require__.d(__webpack_exports__, "countBy", function() {
            return __WEBPACK_IMPORTED_MODULE_102__countBy_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_103__partition_js__ = __webpack_require__(248);
          __webpack_require__.d(__webpack_exports__, "partition", function() {
            return __WEBPACK_IMPORTED_MODULE_103__partition_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_104__toArray_js__ = __webpack_require__(249);
          __webpack_require__.d(__webpack_exports__, "toArray", function() {
            return __WEBPACK_IMPORTED_MODULE_104__toArray_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_105__size_js__ = __webpack_require__(250);
          __webpack_require__.d(__webpack_exports__, "size", function() {
            return __WEBPACK_IMPORTED_MODULE_105__size_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_106__pick_js__ = __webpack_require__(151);
          __webpack_require__.d(__webpack_exports__, "pick", function() {
            return __WEBPACK_IMPORTED_MODULE_106__pick_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_107__omit_js__ = __webpack_require__(252);
          __webpack_require__.d(__webpack_exports__, "omit", function() {
            return __WEBPACK_IMPORTED_MODULE_107__omit_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_108__first_js__ = __webpack_require__(253);
          __webpack_require__.d(__webpack_exports__, "first", function() {
            return __WEBPACK_IMPORTED_MODULE_108__first_js__["a"];
          });
          __webpack_require__.d(__webpack_exports__, "head", function() {
            return __WEBPACK_IMPORTED_MODULE_108__first_js__["a"];
          });
          __webpack_require__.d(__webpack_exports__, "take", function() {
            return __WEBPACK_IMPORTED_MODULE_108__first_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_109__initial_js__ = __webpack_require__(152);
          __webpack_require__.d(__webpack_exports__, "initial", function() {
            return __WEBPACK_IMPORTED_MODULE_109__initial_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_110__last_js__ = __webpack_require__(254);
          __webpack_require__.d(__webpack_exports__, "last", function() {
            return __WEBPACK_IMPORTED_MODULE_110__last_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_111__rest_js__ = __webpack_require__(153);
          __webpack_require__.d(__webpack_exports__, "rest", function() {
            return __WEBPACK_IMPORTED_MODULE_111__rest_js__["a"];
          });
          __webpack_require__.d(__webpack_exports__, "tail", function() {
            return __WEBPACK_IMPORTED_MODULE_111__rest_js__["a"];
          });
          __webpack_require__.d(__webpack_exports__, "drop", function() {
            return __WEBPACK_IMPORTED_MODULE_111__rest_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_112__compact_js__ = __webpack_require__(255);
          __webpack_require__.d(__webpack_exports__, "compact", function() {
            return __WEBPACK_IMPORTED_MODULE_112__compact_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_113__flatten_js__ = __webpack_require__(256);
          __webpack_require__.d(__webpack_exports__, "flatten", function() {
            return __WEBPACK_IMPORTED_MODULE_113__flatten_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_114__without_js__ = __webpack_require__(257);
          __webpack_require__.d(__webpack_exports__, "without", function() {
            return __WEBPACK_IMPORTED_MODULE_114__without_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_115__uniq_js__ = __webpack_require__(155);
          __webpack_require__.d(__webpack_exports__, "uniq", function() {
            return __WEBPACK_IMPORTED_MODULE_115__uniq_js__["a"];
          });
          __webpack_require__.d(__webpack_exports__, "unique", function() {
            return __WEBPACK_IMPORTED_MODULE_115__uniq_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_116__union_js__ = __webpack_require__(258);
          __webpack_require__.d(__webpack_exports__, "union", function() {
            return __WEBPACK_IMPORTED_MODULE_116__union_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_117__intersection_js__ = __webpack_require__(259);
          __webpack_require__.d(__webpack_exports__, "intersection", function() {
            return __WEBPACK_IMPORTED_MODULE_117__intersection_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_118__difference_js__ = __webpack_require__(154);
          __webpack_require__.d(__webpack_exports__, "difference", function() {
            return __WEBPACK_IMPORTED_MODULE_118__difference_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_119__unzip_js__ = __webpack_require__(156);
          __webpack_require__.d(__webpack_exports__, "unzip", function() {
            return __WEBPACK_IMPORTED_MODULE_119__unzip_js__["a"];
          });
          __webpack_require__.d(__webpack_exports__, "transpose", function() {
            return __WEBPACK_IMPORTED_MODULE_119__unzip_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_120__zip_js__ = __webpack_require__(260);
          __webpack_require__.d(__webpack_exports__, "zip", function() {
            return __WEBPACK_IMPORTED_MODULE_120__zip_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_121__object_js__ = __webpack_require__(261);
          __webpack_require__.d(__webpack_exports__, "object", function() {
            return __WEBPACK_IMPORTED_MODULE_121__object_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_122__range_js__ = __webpack_require__(262);
          __webpack_require__.d(__webpack_exports__, "range", function() {
            return __WEBPACK_IMPORTED_MODULE_122__range_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_123__chunk_js__ = __webpack_require__(263);
          __webpack_require__.d(__webpack_exports__, "chunk", function() {
            return __WEBPACK_IMPORTED_MODULE_123__chunk_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_124__mixin_js__ = __webpack_require__(264);
          __webpack_require__.d(__webpack_exports__, "mixin", function() {
            return __WEBPACK_IMPORTED_MODULE_124__mixin_js__["a"];
          });
          var __WEBPACK_IMPORTED_MODULE_125__underscore_array_methods_js__ = __webpack_require__(265);
          __webpack_require__.d(__webpack_exports__, "default", function() {
            return __WEBPACK_IMPORTED_MODULE_125__underscore_array_methods_js__["a"];
          });
        },
        /* 75 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__[
            "a"
            /* default */
          ])("String");
        },
        /* 76 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
          var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(13);
          var __WEBPACK_IMPORTED_MODULE_2__isArrayBuffer_js__ = __webpack_require__(114);
          var __WEBPACK_IMPORTED_MODULE_3__stringTagBug_js__ = __webpack_require__(45);
          var isDataView = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__[
            "a"
            /* default */
          ])("DataView");
          function ie10IsDataView(obj) {
            return obj != null && Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__[
              "a"
              /* default */
            ])(obj.getInt8) && Object(__WEBPACK_IMPORTED_MODULE_2__isArrayBuffer_js__[
              "a"
              /* default */
            ])(obj.buffer);
          }
          __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_3__stringTagBug_js__[
            "a"
            /* hasStringTagBug */
          ] ? ie10IsDataView : isDataView;
        },
        /* 77 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
          var __WEBPACK_IMPORTED_MODULE_1__has_js__ = __webpack_require__(22);
          var isArguments = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__[
            "a"
            /* default */
          ])("Arguments");
          (function() {
            if (!isArguments(arguments)) {
              isArguments = function(obj) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__has_js__[
                  "a"
                  /* default */
                ])(obj, "callee");
              };
            }
          })();
          __webpack_exports__["a"] = isArguments;
        },
        /* 78 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__shallowProperty_js__ = __webpack_require__(119);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__shallowProperty_js__[
            "a"
            /* default */
          ])("byteLength");
        },
        /* 79 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = ie11fingerprint;
          __webpack_require__.d(__webpack_exports__, "b", function() {
            return mapMethods;
          });
          __webpack_require__.d(__webpack_exports__, "d", function() {
            return weakMapMethods;
          });
          __webpack_require__.d(__webpack_exports__, "c", function() {
            return setMethods;
          });
          var __WEBPACK_IMPORTED_MODULE_0__getLength_js__ = __webpack_require__(14);
          var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(13);
          var __WEBPACK_IMPORTED_MODULE_2__allKeys_js__ = __webpack_require__(46);
          function ie11fingerprint(methods) {
            var length = Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__[
              "a"
              /* default */
            ])(methods);
            return function(obj) {
              if (obj == null)
                return false;
              var keys = Object(__WEBPACK_IMPORTED_MODULE_2__allKeys_js__[
                "a"
                /* default */
              ])(obj);
              if (Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__[
                "a"
                /* default */
              ])(keys))
                return false;
              for (var i2 = 0; i2 < length; i2++) {
                if (!Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__[
                  "a"
                  /* default */
                ])(obj[methods[i2]]))
                  return false;
              }
              return methods !== weakMapMethods || !Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__[
                "a"
                /* default */
              ])(obj[forEachName]);
            };
          }
          var forEachName = "forEach", hasName = "has", commonInit = ["clear", "delete"], mapTail = ["get", hasName, "set"];
          var mapMethods = commonInit.concat(forEachName, mapTail), weakMapMethods = commonInit.concat(mapTail), setMethods = ["add"].concat(commonInit, forEachName, hasName);
        },
        /* 80 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = createAssigner;
          function createAssigner(keysFunc, defaults2) {
            return function(obj) {
              var length = arguments.length;
              if (defaults2)
                obj = Object(obj);
              if (length < 2 || obj == null)
                return obj;
              for (var index = 1; index < length; index++) {
                var source = arguments[index], keys = keysFunc(source), l2 = keys.length;
                for (var i2 = 0; i2 < l2; i2++) {
                  var key = keys[i2];
                  if (!defaults2 || obj[key] === void 0)
                    obj[key] = source[key];
                }
              }
              return obj;
            };
          }
        },
        /* 81 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__createAssigner_js__ = __webpack_require__(80);
          var __WEBPACK_IMPORTED_MODULE_1__keys_js__ = __webpack_require__(4);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__createAssigner_js__[
            "a"
            /* default */
          ])(__WEBPACK_IMPORTED_MODULE_1__keys_js__[
            "a"
            /* default */
          ]);
        },
        /* 82 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = deepGet;
          function deepGet(obj, path) {
            var length = path.length;
            for (var i2 = 0; i2 < length; i2++) {
              if (obj == null)
                return void 0;
              obj = obj[path[i2]];
            }
            return length ? obj : void 0;
          }
        },
        /* 83 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = identity;
          function identity(value) {
            return value;
          }
        },
        /* 84 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = property;
          var __WEBPACK_IMPORTED_MODULE_0__deepGet_js__ = __webpack_require__(82);
          var __WEBPACK_IMPORTED_MODULE_1__toPath_js__ = __webpack_require__(47);
          function property(path) {
            path = Object(__WEBPACK_IMPORTED_MODULE_1__toPath_js__[
              "a"
              /* default */
            ])(path);
            return function(obj) {
              return Object(__WEBPACK_IMPORTED_MODULE_0__deepGet_js__[
                "a"
                /* default */
              ])(obj, path);
            };
          }
        },
        /* 85 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = Date.now || function() {
            return (/* @__PURE__ */ new Date()).getTime();
          };
        },
        /* 86 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = negate;
          function negate(predicate) {
            return function() {
              return !predicate.apply(this, arguments);
            };
          }
        },
        /* 87 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__createPredicateIndexFinder_js__ = __webpack_require__(142);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__createPredicateIndexFinder_js__[
            "a"
            /* default */
          ])(1);
        },
        /* 88 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = pluck;
          var __WEBPACK_IMPORTED_MODULE_0__map_js__ = __webpack_require__(35);
          var __WEBPACK_IMPORTED_MODULE_1__property_js__ = __webpack_require__(84);
          function pluck(obj, key) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__map_js__[
              "a"
              /* default */
            ])(obj, Object(__WEBPACK_IMPORTED_MODULE_1__property_js__[
              "a"
              /* default */
            ])(key));
          }
        },
        /* 89 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var $export = __webpack_require__(16);
          var core = __webpack_require__(2);
          var fails = __webpack_require__(41);
          module2.exports = function(KEY, exec) {
            var fn = (core.Object || {})[KEY] || Object[KEY];
            var exp = {};
            exp[KEY] = exec(fn);
            $export($export.S + $export.F * fails(function() {
              fn(1);
            }), "Object", exp);
          };
        },
        /* 90 */
        /***/
        function(module2, exports2, __webpack_require__) {
          module2.exports = { "default": __webpack_require__(276), __esModule: true };
        },
        /* 91 */
        /***/
        function(module2, exports2, __webpack_require__) {
          exports2.f = __webpack_require__(7);
        },
        /* 92 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var global2 = __webpack_require__(6);
          var core = __webpack_require__(2);
          var LIBRARY = __webpack_require__(40);
          var wksExt = __webpack_require__(91);
          var defineProperty = __webpack_require__(18).f;
          module2.exports = function(name2) {
            var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global2.Symbol || {});
            if (name2.charAt(0) != "_" && !(name2 in $Symbol))
              defineProperty($Symbol, name2, { value: wksExt.f(name2) });
          };
        },
        /* 93 */
        /***/
        function(module2, exports2) {
          exports2.f = {}.propertyIsEnumerable;
        },
        /* 94 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var pIE = __webpack_require__(93);
          var createDesc = __webpack_require__(42);
          var toIObject = __webpack_require__(25);
          var toPrimitive = __webpack_require__(65);
          var has = __webpack_require__(24);
          var IE8_DOM_DEFINE = __webpack_require__(97);
          var gOPD = Object.getOwnPropertyDescriptor;
          exports2.f = __webpack_require__(21) ? gOPD : function getOwnPropertyDescriptor(O, P) {
            O = toIObject(O);
            P = toPrimitive(P, true);
            if (IE8_DOM_DEFINE)
              try {
                return gOPD(O, P);
              } catch (e2) {
              }
            if (has(O, P))
              return createDesc(!pIE.f.call(O, P), O[P]);
          };
        },
        /* 95 */
        /***/
        function(module2, exports2) {
        },
        /* 96 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var LIBRARY = __webpack_require__(40);
          var $export = __webpack_require__(16);
          var redefine = __webpack_require__(98);
          var hide = __webpack_require__(23);
          var Iterators = __webpack_require__(32);
          var $iterCreate = __webpack_require__(176);
          var setToStringTag = __webpack_require__(55);
          var getPrototypeOf = __webpack_require__(101);
          var ITERATOR = __webpack_require__(7)("iterator");
          var BUGGY = !([].keys && "next" in [].keys());
          var FF_ITERATOR = "@@iterator";
          var KEYS = "keys";
          var VALUES = "values";
          var returnThis = function() {
            return this;
          };
          module2.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
            $iterCreate(Constructor, NAME, next);
            var getMethod = function(kind) {
              if (!BUGGY && kind in proto)
                return proto[kind];
              switch (kind) {
                case KEYS:
                  return function keys() {
                    return new Constructor(this, kind);
                  };
                case VALUES:
                  return function values() {
                    return new Constructor(this, kind);
                  };
              }
              return function entries() {
                return new Constructor(this, kind);
              };
            };
            var TAG = NAME + " Iterator";
            var DEF_VALUES = DEFAULT == VALUES;
            var VALUES_BUG = false;
            var proto = Base.prototype;
            var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
            var $default = $native || getMethod(DEFAULT);
            var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : void 0;
            var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
            var methods, key, IteratorPrototype;
            if ($anyNative) {
              IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
              if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                setToStringTag(IteratorPrototype, TAG, true);
                if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function")
                  hide(IteratorPrototype, ITERATOR, returnThis);
              }
            }
            if (DEF_VALUES && $native && $native.name !== VALUES) {
              VALUES_BUG = true;
              $default = function values() {
                return $native.call(this);
              };
            }
            if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
              hide(proto, ITERATOR, $default);
            }
            Iterators[NAME] = $default;
            Iterators[TAG] = returnThis;
            if (DEFAULT) {
              methods = {
                values: DEF_VALUES ? $default : getMethod(VALUES),
                keys: IS_SET ? $default : getMethod(KEYS),
                entries: $entries
              };
              if (FORCED)
                for (key in methods) {
                  if (!(key in proto))
                    redefine(proto, key, methods[key]);
                }
              else
                $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
            }
            return methods;
          };
        },
        /* 97 */
        /***/
        function(module2, exports2, __webpack_require__) {
          module2.exports = !__webpack_require__(21) && !__webpack_require__(41)(function() {
            return Object.defineProperty(__webpack_require__(64)("div"), "a", { get: function() {
              return 7;
            } }).a != 7;
          });
        },
        /* 98 */
        /***/
        function(module2, exports2, __webpack_require__) {
          module2.exports = __webpack_require__(23);
        },
        /* 99 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var has = __webpack_require__(24);
          var toIObject = __webpack_require__(25);
          var arrayIndexOf = __webpack_require__(179)(false);
          var IE_PROTO = __webpack_require__(68)("IE_PROTO");
          module2.exports = function(object, names) {
            var O = toIObject(object);
            var i2 = 0;
            var result = [];
            var key;
            for (key in O)
              if (key != IE_PROTO)
                has(O, key) && result.push(key);
            while (names.length > i2)
              if (has(O, key = names[i2++])) {
                ~arrayIndexOf(result, key) || result.push(key);
              }
            return result;
          };
        },
        /* 100 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var document2 = __webpack_require__(6).document;
          module2.exports = document2 && document2.documentElement;
        },
        /* 101 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var has = __webpack_require__(24);
          var toObject = __webpack_require__(44);
          var IE_PROTO = __webpack_require__(68)("IE_PROTO");
          var ObjectProto = Object.prototype;
          module2.exports = Object.getPrototypeOf || function(O) {
            O = toObject(O);
            if (has(O, IE_PROTO))
              return O[IE_PROTO];
            if (typeof O.constructor == "function" && O instanceof O.constructor) {
              return O.constructor.prototype;
            }
            return O instanceof Object ? ObjectProto : null;
          };
        },
        /* 102 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var anObject = __webpack_require__(17);
          module2.exports = function(iterator, fn, value, entries) {
            try {
              return entries ? fn(anObject(value)[0], value[1]) : fn(value);
            } catch (e2) {
              var ret = iterator["return"];
              if (ret !== void 0)
                anObject(ret.call(iterator));
              throw e2;
            }
          };
        },
        /* 103 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var Iterators = __webpack_require__(32);
          var ITERATOR = __webpack_require__(7)("iterator");
          var ArrayProto = Array.prototype;
          module2.exports = function(it) {
            return it !== void 0 && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
          };
        },
        /* 104 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var anObject = __webpack_require__(17);
          var aFunction = __webpack_require__(52);
          var SPECIES = __webpack_require__(7)("species");
          module2.exports = function(O, D) {
            var C = anObject(O).constructor;
            var S;
            return C === void 0 || (S = anObject(C)[SPECIES]) == void 0 ? D : aFunction(S);
          };
        },
        /* 105 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var ctx = __webpack_require__(31);
          var invoke = __webpack_require__(187);
          var html = __webpack_require__(100);
          var cel = __webpack_require__(64);
          var global2 = __webpack_require__(6);
          var process2 = global2.process;
          var setTask = global2.setImmediate;
          var clearTask = global2.clearImmediate;
          var MessageChannel = global2.MessageChannel;
          var Dispatch = global2.Dispatch;
          var counter = 0;
          var queue = {};
          var ONREADYSTATECHANGE = "onreadystatechange";
          var defer, channel, port;
          var run = function() {
            var id = +this;
            if (queue.hasOwnProperty(id)) {
              var fn = queue[id];
              delete queue[id];
              fn();
            }
          };
          var listener = function(event2) {
            run.call(event2.data);
          };
          if (!setTask || !clearTask) {
            setTask = function setImmediate(fn) {
              var args = [];
              var i2 = 1;
              while (arguments.length > i2)
                args.push(arguments[i2++]);
              queue[++counter] = function() {
                invoke(typeof fn == "function" ? fn : Function(fn), args);
              };
              defer(counter);
              return counter;
            };
            clearTask = function clearImmediate(id) {
              delete queue[id];
            };
            if (__webpack_require__(43)(process2) == "process") {
              defer = function(id) {
                process2.nextTick(ctx(run, id, 1));
              };
            } else if (Dispatch && Dispatch.now) {
              defer = function(id) {
                Dispatch.now(ctx(run, id, 1));
              };
            } else if (MessageChannel) {
              channel = new MessageChannel();
              port = channel.port2;
              channel.port1.onmessage = listener;
              defer = ctx(port.postMessage, port, 1);
            } else if (global2.addEventListener && typeof postMessage == "function" && !global2.importScripts) {
              defer = function(id) {
                global2.postMessage(id + "", "*");
              };
              global2.addEventListener("message", listener, false);
            } else if (ONREADYSTATECHANGE in cel("script")) {
              defer = function(id) {
                html.appendChild(cel("script"))[ONREADYSTATECHANGE] = function() {
                  html.removeChild(this);
                  run.call(id);
                };
              };
            } else {
              defer = function(id) {
                setTimeout(ctx(run, id, 1), 0);
              };
            }
          }
          module2.exports = {
            set: setTask,
            clear: clearTask
          };
        },
        /* 106 */
        /***/
        function(module2, exports2) {
          module2.exports = function(exec) {
            try {
              return { e: false, v: exec() };
            } catch (e2) {
              return { e: true, v: e2 };
            }
          };
        },
        /* 107 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var anObject = __webpack_require__(17);
          var isObject = __webpack_require__(20);
          var newPromiseCapability = __webpack_require__(73);
          module2.exports = function(C, x) {
            anObject(C);
            if (isObject(x) && x.constructor === C)
              return x;
            var promiseCapability = newPromiseCapability.f(C);
            var resolve = promiseCapability.resolve;
            resolve(x);
            return promiseCapability.promise;
          };
        },
        /* 108 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var ITERATOR = __webpack_require__(7)("iterator");
          var SAFE_CLOSING = false;
          try {
            var riter = [7][ITERATOR]();
            riter["return"] = function() {
              SAFE_CLOSING = true;
            };
            Array.from(riter, function() {
              throw 2;
            });
          } catch (e2) {
          }
          module2.exports = function(exec, skipClosing) {
            if (!skipClosing && !SAFE_CLOSING)
              return false;
            var safe = false;
            try {
              var arr = [7];
              var iter = arr[ITERATOR]();
              iter.next = function() {
                return { done: safe = true };
              };
              arr[ITERATOR] = function() {
                return iter;
              };
              exec(arr);
            } catch (e2) {
            }
            return safe;
          };
        },
        /* 109 */
        /***/
        function(module2, exports2) {
          var g;
          g = function() {
            return this;
          }();
          try {
            g = g || Function("return this")() || (1, eval)("this");
          } catch (e2) {
            if (typeof window === "object")
              g = window;
          }
          module2.exports = g;
        },
        /* 110 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = isUndefined;
          function isUndefined(obj) {
            return obj === void 0;
          }
        },
        /* 111 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = isBoolean;
          var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
          function isBoolean(obj) {
            return obj === true || obj === false || __WEBPACK_IMPORTED_MODULE_0__setup_js__[
              "t"
              /* toString */
            ].call(obj) === "[object Boolean]";
          }
        },
        /* 112 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__[
            "a"
            /* default */
          ])("Number");
        },
        /* 113 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__[
            "a"
            /* default */
          ])("Symbol");
        },
        /* 114 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__[
            "a"
            /* default */
          ])("ArrayBuffer");
        },
        /* 115 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = isNaN2;
          var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
          var __WEBPACK_IMPORTED_MODULE_1__isNumber_js__ = __webpack_require__(112);
          function isNaN2(obj) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__isNumber_js__[
              "a"
              /* default */
            ])(obj) && Object(__WEBPACK_IMPORTED_MODULE_0__setup_js__[
              "g"
              /* _isNaN */
            ])(obj);
          }
        },
        /* 116 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
          var __WEBPACK_IMPORTED_MODULE_1__isDataView_js__ = __webpack_require__(76);
          var __WEBPACK_IMPORTED_MODULE_2__constant_js__ = __webpack_require__(117);
          var __WEBPACK_IMPORTED_MODULE_3__isBufferLike_js__ = __webpack_require__(202);
          var typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
          function isTypedArray(obj) {
            return __WEBPACK_IMPORTED_MODULE_0__setup_js__[
              "l"
              /* nativeIsView */
            ] ? Object(__WEBPACK_IMPORTED_MODULE_0__setup_js__[
              "l"
              /* nativeIsView */
            ])(obj) && !Object(__WEBPACK_IMPORTED_MODULE_1__isDataView_js__[
              "a"
              /* default */
            ])(obj) : Object(__WEBPACK_IMPORTED_MODULE_3__isBufferLike_js__[
              "a"
              /* default */
            ])(obj) && typedArrayPattern.test(__WEBPACK_IMPORTED_MODULE_0__setup_js__[
              "t"
              /* toString */
            ].call(obj));
          }
          __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__setup_js__[
            "r"
            /* supportsArrayBuffer */
          ] ? isTypedArray : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__[
            "a"
            /* default */
          ])(false);
        },
        /* 117 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = constant;
          function constant(value) {
            return function() {
              return value;
            };
          }
        },
        /* 118 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = createSizePropertyCheck;
          var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
          function createSizePropertyCheck(getSizeProperty) {
            return function(collection) {
              var sizeProperty = getSizeProperty(collection);
              return typeof sizeProperty == "number" && sizeProperty >= 0 && sizeProperty <= __WEBPACK_IMPORTED_MODULE_0__setup_js__[
                "b"
                /* MAX_ARRAY_INDEX */
              ];
            };
          }
        },
        /* 119 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = shallowProperty;
          function shallowProperty(key) {
            return function(obj) {
              return obj == null ? void 0 : obj[key];
            };
          }
        },
        /* 120 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = collectNonEnumProps;
          var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
          var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(13);
          var __WEBPACK_IMPORTED_MODULE_2__has_js__ = __webpack_require__(22);
          function emulatedSet(keys) {
            var hash = {};
            for (var l2 = keys.length, i2 = 0; i2 < l2; ++i2)
              hash[keys[i2]] = true;
            return {
              contains: function(key) {
                return hash[key];
              },
              push: function(key) {
                hash[key] = true;
                return keys.push(key);
              }
            };
          }
          function collectNonEnumProps(obj, keys) {
            keys = emulatedSet(keys);
            var nonEnumIdx = __WEBPACK_IMPORTED_MODULE_0__setup_js__[
              "n"
              /* nonEnumerableProps */
            ].length;
            var constructor = obj.constructor;
            var proto = Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__[
              "a"
              /* default */
            ])(constructor) && constructor.prototype || __WEBPACK_IMPORTED_MODULE_0__setup_js__[
              "c"
              /* ObjProto */
            ];
            var prop = "constructor";
            if (Object(__WEBPACK_IMPORTED_MODULE_2__has_js__[
              "a"
              /* default */
            ])(obj, prop) && !keys.contains(prop))
              keys.push(prop);
            while (nonEnumIdx--) {
              prop = __WEBPACK_IMPORTED_MODULE_0__setup_js__[
                "n"
                /* nonEnumerableProps */
              ][nonEnumIdx];
              if (prop in obj && obj[prop] !== proto[prop] && !keys.contains(prop)) {
                keys.push(prop);
              }
            }
          }
        },
        /* 121 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = isMatch;
          var __WEBPACK_IMPORTED_MODULE_0__keys_js__ = __webpack_require__(4);
          function isMatch(object, attrs) {
            var _keys = Object(__WEBPACK_IMPORTED_MODULE_0__keys_js__[
              "a"
              /* default */
            ])(attrs), length = _keys.length;
            if (object == null)
              return !length;
            var obj = Object(object);
            for (var i2 = 0; i2 < length; i2++) {
              var key = _keys[i2];
              if (attrs[key] !== obj[key] || !(key in obj))
                return false;
            }
            return true;
          }
        },
        /* 122 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = invert;
          var __WEBPACK_IMPORTED_MODULE_0__keys_js__ = __webpack_require__(4);
          function invert(obj) {
            var result = {};
            var _keys = Object(__WEBPACK_IMPORTED_MODULE_0__keys_js__[
              "a"
              /* default */
            ])(obj);
            for (var i2 = 0, length = _keys.length; i2 < length; i2++) {
              result[obj[_keys[i2]]] = _keys[i2];
            }
            return result;
          }
        },
        /* 123 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = functions;
          var __WEBPACK_IMPORTED_MODULE_0__isFunction_js__ = __webpack_require__(13);
          function functions(obj) {
            var names = [];
            for (var key in obj) {
              if (Object(__WEBPACK_IMPORTED_MODULE_0__isFunction_js__[
                "a"
                /* default */
              ])(obj[key]))
                names.push(key);
            }
            return names.sort();
          }
        },
        /* 124 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__createAssigner_js__ = __webpack_require__(80);
          var __WEBPACK_IMPORTED_MODULE_1__allKeys_js__ = __webpack_require__(46);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__createAssigner_js__[
            "a"
            /* default */
          ])(__WEBPACK_IMPORTED_MODULE_1__allKeys_js__[
            "a"
            /* default */
          ]);
        },
        /* 125 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__createAssigner_js__ = __webpack_require__(80);
          var __WEBPACK_IMPORTED_MODULE_1__allKeys_js__ = __webpack_require__(46);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__createAssigner_js__[
            "a"
            /* default */
          ])(__WEBPACK_IMPORTED_MODULE_1__allKeys_js__[
            "a"
            /* default */
          ], true);
        },
        /* 126 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = baseCreate;
          var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(26);
          var __WEBPACK_IMPORTED_MODULE_1__setup_js__ = __webpack_require__(1);
          function ctor() {
            return function() {
            };
          }
          function baseCreate(prototype) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__isObject_js__[
              "a"
              /* default */
            ])(prototype))
              return {};
            if (__WEBPACK_IMPORTED_MODULE_1__setup_js__[
              "j"
              /* nativeCreate */
            ])
              return Object(__WEBPACK_IMPORTED_MODULE_1__setup_js__[
                "j"
                /* nativeCreate */
              ])(prototype);
            var Ctor = ctor();
            Ctor.prototype = prototype;
            var result = new Ctor();
            Ctor.prototype = null;
            return result;
          }
        },
        /* 127 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = clone;
          var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(26);
          var __WEBPACK_IMPORTED_MODULE_1__isArray_js__ = __webpack_require__(27);
          var __WEBPACK_IMPORTED_MODULE_2__extend_js__ = __webpack_require__(124);
          function clone(obj) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__isObject_js__[
              "a"
              /* default */
            ])(obj))
              return obj;
            return Object(__WEBPACK_IMPORTED_MODULE_1__isArray_js__[
              "a"
              /* default */
            ])(obj) ? obj.slice() : Object(__WEBPACK_IMPORTED_MODULE_2__extend_js__[
              "a"
              /* default */
            ])({}, obj);
          }
        },
        /* 128 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = get;
          var __WEBPACK_IMPORTED_MODULE_0__toPath_js__ = __webpack_require__(47);
          var __WEBPACK_IMPORTED_MODULE_1__deepGet_js__ = __webpack_require__(82);
          var __WEBPACK_IMPORTED_MODULE_2__isUndefined_js__ = __webpack_require__(110);
          function get(object, path, defaultValue) {
            var value = Object(__WEBPACK_IMPORTED_MODULE_1__deepGet_js__[
              "a"
              /* default */
            ])(object, Object(__WEBPACK_IMPORTED_MODULE_0__toPath_js__[
              "a"
              /* default */
            ])(path));
            return Object(__WEBPACK_IMPORTED_MODULE_2__isUndefined_js__[
              "a"
              /* default */
            ])(value) ? defaultValue : value;
          }
        },
        /* 129 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = toPath;
          var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(10);
          var __WEBPACK_IMPORTED_MODULE_1__isArray_js__ = __webpack_require__(27);
          function toPath(path) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__isArray_js__[
              "a"
              /* default */
            ])(path) ? path : [path];
          }
          __WEBPACK_IMPORTED_MODULE_0__underscore_js__[
            "a"
            /* default */
          ].toPath = toPath;
        },
        /* 130 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = baseIteratee;
          var __WEBPACK_IMPORTED_MODULE_0__identity_js__ = __webpack_require__(83);
          var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(13);
          var __WEBPACK_IMPORTED_MODULE_2__isObject_js__ = __webpack_require__(26);
          var __WEBPACK_IMPORTED_MODULE_3__isArray_js__ = __webpack_require__(27);
          var __WEBPACK_IMPORTED_MODULE_4__matcher_js__ = __webpack_require__(57);
          var __WEBPACK_IMPORTED_MODULE_5__property_js__ = __webpack_require__(84);
          var __WEBPACK_IMPORTED_MODULE_6__optimizeCb_js__ = __webpack_require__(48);
          function baseIteratee(value, context, argCount) {
            if (value == null)
              return __WEBPACK_IMPORTED_MODULE_0__identity_js__[
                "a"
                /* default */
              ];
            if (Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__[
              "a"
              /* default */
            ])(value))
              return Object(__WEBPACK_IMPORTED_MODULE_6__optimizeCb_js__[
                "a"
                /* default */
              ])(value, context, argCount);
            if (Object(__WEBPACK_IMPORTED_MODULE_2__isObject_js__[
              "a"
              /* default */
            ])(value) && !Object(__WEBPACK_IMPORTED_MODULE_3__isArray_js__[
              "a"
              /* default */
            ])(value))
              return Object(__WEBPACK_IMPORTED_MODULE_4__matcher_js__[
                "a"
                /* default */
              ])(value);
            return Object(__WEBPACK_IMPORTED_MODULE_5__property_js__[
              "a"
              /* default */
            ])(value);
          }
        },
        /* 131 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = iteratee;
          var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(10);
          var __WEBPACK_IMPORTED_MODULE_1__baseIteratee_js__ = __webpack_require__(130);
          function iteratee(value, context) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__baseIteratee_js__[
              "a"
              /* default */
            ])(value, context, Infinity);
          }
          __WEBPACK_IMPORTED_MODULE_0__underscore_js__[
            "a"
            /* default */
          ].iteratee = iteratee;
        },
        /* 132 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = noop;
          function noop() {
          }
        },
        /* 133 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = random;
          function random(min, max) {
            if (max == null) {
              max = min;
              min = 0;
            }
            return min + Math.floor(Math.random() * (max - min + 1));
          }
        },
        /* 134 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = createEscaper;
          var __WEBPACK_IMPORTED_MODULE_0__keys_js__ = __webpack_require__(4);
          function createEscaper(map) {
            var escaper = function(match) {
              return map[match];
            };
            var source = "(?:" + Object(__WEBPACK_IMPORTED_MODULE_0__keys_js__[
              "a"
              /* default */
            ])(map).join("|") + ")";
            var testRegexp = RegExp(source);
            var replaceRegexp = RegExp(source, "g");
            return function(string) {
              string = string == null ? "" : "" + string;
              return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
            };
          }
        },
        /* 135 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
          };
        },
        /* 136 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(10);
          __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__underscore_js__[
            "a"
            /* default */
          ].templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
          };
        },
        /* 137 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = executeBound;
          var __WEBPACK_IMPORTED_MODULE_0__baseCreate_js__ = __webpack_require__(126);
          var __WEBPACK_IMPORTED_MODULE_1__isObject_js__ = __webpack_require__(26);
          function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
            if (!(callingContext instanceof boundFunc))
              return sourceFunc.apply(context, args);
            var self2 = Object(__WEBPACK_IMPORTED_MODULE_0__baseCreate_js__[
              "a"
              /* default */
            ])(sourceFunc.prototype);
            var result = sourceFunc.apply(self2, args);
            if (Object(__WEBPACK_IMPORTED_MODULE_1__isObject_js__[
              "a"
              /* default */
            ])(result))
              return result;
            return self2;
          }
        },
        /* 138 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
          var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(13);
          var __WEBPACK_IMPORTED_MODULE_2__executeBound_js__ = __webpack_require__(137);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__[
            "a"
            /* default */
          ])(function(func, context, args) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__[
              "a"
              /* default */
            ])(func))
              throw new TypeError("Bind must be called on a function");
            var bound = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__[
              "a"
              /* default */
            ])(function(callArgs) {
              return Object(__WEBPACK_IMPORTED_MODULE_2__executeBound_js__[
                "a"
                /* default */
              ])(func, bound, context, this, args.concat(callArgs));
            });
            return bound;
          });
        },
        /* 139 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__[
            "a"
            /* default */
          ])(function(func, wait, args) {
            return setTimeout(function() {
              return func.apply(null, args);
            }, wait);
          });
        },
        /* 140 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = before;
          function before(times, func) {
            var memo;
            return function() {
              if (--times > 0) {
                memo = func.apply(this, arguments);
              }
              if (times <= 1)
                func = null;
              return memo;
            };
          }
        },
        /* 141 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = findKey;
          var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(8);
          var __WEBPACK_IMPORTED_MODULE_1__keys_js__ = __webpack_require__(4);
          function findKey(obj, predicate, context) {
            predicate = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__[
              "a"
              /* default */
            ])(predicate, context);
            var _keys = Object(__WEBPACK_IMPORTED_MODULE_1__keys_js__[
              "a"
              /* default */
            ])(obj), key;
            for (var i2 = 0, length = _keys.length; i2 < length; i2++) {
              key = _keys[i2];
              if (predicate(obj[key], key, obj))
                return key;
            }
          }
        },
        /* 142 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = createPredicateIndexFinder;
          var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(8);
          var __WEBPACK_IMPORTED_MODULE_1__getLength_js__ = __webpack_require__(14);
          function createPredicateIndexFinder(dir) {
            return function(array, predicate, context) {
              predicate = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__[
                "a"
                /* default */
              ])(predicate, context);
              var length = Object(__WEBPACK_IMPORTED_MODULE_1__getLength_js__[
                "a"
                /* default */
              ])(array);
              var index = dir > 0 ? 0 : length - 1;
              for (; index >= 0 && index < length; index += dir) {
                if (predicate(array[index], index, array))
                  return index;
              }
              return -1;
            };
          }
        },
        /* 143 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__createPredicateIndexFinder_js__ = __webpack_require__(142);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__createPredicateIndexFinder_js__[
            "a"
            /* default */
          ])(-1);
        },
        /* 144 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = sortedIndex;
          var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(8);
          var __WEBPACK_IMPORTED_MODULE_1__getLength_js__ = __webpack_require__(14);
          function sortedIndex(array, obj, iteratee, context) {
            iteratee = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__[
              "a"
              /* default */
            ])(iteratee, context, 1);
            var value = iteratee(obj);
            var low = 0, high = Object(__WEBPACK_IMPORTED_MODULE_1__getLength_js__[
              "a"
              /* default */
            ])(array);
            while (low < high) {
              var mid = Math.floor((low + high) / 2);
              if (iteratee(array[mid]) < value)
                low = mid + 1;
              else
                high = mid;
            }
            return low;
          }
        },
        /* 145 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__sortedIndex_js__ = __webpack_require__(144);
          var __WEBPACK_IMPORTED_MODULE_1__findIndex_js__ = __webpack_require__(87);
          var __WEBPACK_IMPORTED_MODULE_2__createIndexFinder_js__ = __webpack_require__(146);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_2__createIndexFinder_js__[
            "a"
            /* default */
          ])(1, __WEBPACK_IMPORTED_MODULE_1__findIndex_js__[
            "a"
            /* default */
          ], __WEBPACK_IMPORTED_MODULE_0__sortedIndex_js__[
            "a"
            /* default */
          ]);
        },
        /* 146 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = createIndexFinder;
          var __WEBPACK_IMPORTED_MODULE_0__getLength_js__ = __webpack_require__(14);
          var __WEBPACK_IMPORTED_MODULE_1__setup_js__ = __webpack_require__(1);
          var __WEBPACK_IMPORTED_MODULE_2__isNaN_js__ = __webpack_require__(115);
          function createIndexFinder(dir, predicateFind, sortedIndex) {
            return function(array, item, idx) {
              var i2 = 0, length = Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__[
                "a"
                /* default */
              ])(array);
              if (typeof idx == "number") {
                if (dir > 0) {
                  i2 = idx >= 0 ? idx : Math.max(idx + length, i2);
                } else {
                  length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
                }
              } else if (sortedIndex && idx && length) {
                idx = sortedIndex(array, item);
                return array[idx] === item ? idx : -1;
              }
              if (item !== item) {
                idx = predicateFind(__WEBPACK_IMPORTED_MODULE_1__setup_js__[
                  "q"
                  /* slice */
                ].call(array, i2, length), __WEBPACK_IMPORTED_MODULE_2__isNaN_js__[
                  "a"
                  /* default */
                ]);
                return idx >= 0 ? idx + i2 : -1;
              }
              for (idx = dir > 0 ? i2 : length - 1; idx >= 0 && idx < length; idx += dir) {
                if (array[idx] === item)
                  return idx;
              }
              return -1;
            };
          }
        },
        /* 147 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = find;
          var __WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__ = __webpack_require__(11);
          var __WEBPACK_IMPORTED_MODULE_1__findIndex_js__ = __webpack_require__(87);
          var __WEBPACK_IMPORTED_MODULE_2__findKey_js__ = __webpack_require__(141);
          function find(obj, predicate, context) {
            var keyFinder = Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__[
              "a"
              /* default */
            ])(obj) ? __WEBPACK_IMPORTED_MODULE_1__findIndex_js__[
              "a"
              /* default */
            ] : __WEBPACK_IMPORTED_MODULE_2__findKey_js__[
              "a"
              /* default */
            ];
            var key = keyFinder(obj, predicate, context);
            if (key !== void 0 && key !== -1)
              return obj[key];
          }
        },
        /* 148 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = createReduce;
          var __WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__ = __webpack_require__(11);
          var __WEBPACK_IMPORTED_MODULE_1__keys_js__ = __webpack_require__(4);
          var __WEBPACK_IMPORTED_MODULE_2__optimizeCb_js__ = __webpack_require__(48);
          function createReduce(dir) {
            var reducer = function(obj, iteratee, memo, initial) {
              var _keys = !Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__[
                "a"
                /* default */
              ])(obj) && Object(__WEBPACK_IMPORTED_MODULE_1__keys_js__[
                "a"
                /* default */
              ])(obj), length = (_keys || obj).length, index = dir > 0 ? 0 : length - 1;
              if (!initial) {
                memo = obj[_keys ? _keys[index] : index];
                index += dir;
              }
              for (; index >= 0 && index < length; index += dir) {
                var currentKey = _keys ? _keys[index] : index;
                memo = iteratee(memo, obj[currentKey], currentKey, obj);
              }
              return memo;
            };
            return function(obj, iteratee, memo, context) {
              var initial = arguments.length >= 3;
              return reducer(obj, Object(__WEBPACK_IMPORTED_MODULE_2__optimizeCb_js__[
                "a"
                /* default */
              ])(iteratee, context, 4), memo, initial);
            };
          }
        },
        /* 149 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = max;
          var __WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__ = __webpack_require__(11);
          var __WEBPACK_IMPORTED_MODULE_1__values_js__ = __webpack_require__(33);
          var __WEBPACK_IMPORTED_MODULE_2__cb_js__ = __webpack_require__(8);
          var __WEBPACK_IMPORTED_MODULE_3__each_js__ = __webpack_require__(28);
          function max(obj, iteratee, context) {
            var result = -Infinity, lastComputed = -Infinity, value, computed;
            if (iteratee == null || typeof iteratee == "number" && typeof obj[0] != "object" && obj != null) {
              obj = Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__[
                "a"
                /* default */
              ])(obj) ? obj : Object(__WEBPACK_IMPORTED_MODULE_1__values_js__[
                "a"
                /* default */
              ])(obj);
              for (var i2 = 0, length = obj.length; i2 < length; i2++) {
                value = obj[i2];
                if (value != null && value > result) {
                  result = value;
                }
              }
            } else {
              iteratee = Object(__WEBPACK_IMPORTED_MODULE_2__cb_js__[
                "a"
                /* default */
              ])(iteratee, context);
              Object(__WEBPACK_IMPORTED_MODULE_3__each_js__[
                "a"
                /* default */
              ])(obj, function(v, index, list) {
                computed = iteratee(v, index, list);
                if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
                  result = v;
                  lastComputed = computed;
                }
              });
            }
            return result;
          }
        },
        /* 150 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = sample;
          var __WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__ = __webpack_require__(11);
          var __WEBPACK_IMPORTED_MODULE_1__clone_js__ = __webpack_require__(127);
          var __WEBPACK_IMPORTED_MODULE_2__values_js__ = __webpack_require__(33);
          var __WEBPACK_IMPORTED_MODULE_3__getLength_js__ = __webpack_require__(14);
          var __WEBPACK_IMPORTED_MODULE_4__random_js__ = __webpack_require__(133);
          function sample(obj, n2, guard) {
            if (n2 == null || guard) {
              if (!Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__[
                "a"
                /* default */
              ])(obj))
                obj = Object(__WEBPACK_IMPORTED_MODULE_2__values_js__[
                  "a"
                  /* default */
                ])(obj);
              return obj[Object(__WEBPACK_IMPORTED_MODULE_4__random_js__[
                "a"
                /* default */
              ])(obj.length - 1)];
            }
            var sample2 = Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__[
              "a"
              /* default */
            ])(obj) ? Object(__WEBPACK_IMPORTED_MODULE_1__clone_js__[
              "a"
              /* default */
            ])(obj) : Object(__WEBPACK_IMPORTED_MODULE_2__values_js__[
              "a"
              /* default */
            ])(obj);
            var length = Object(__WEBPACK_IMPORTED_MODULE_3__getLength_js__[
              "a"
              /* default */
            ])(sample2);
            n2 = Math.max(Math.min(n2, length), 0);
            var last = length - 1;
            for (var index = 0; index < n2; index++) {
              var rand = Object(__WEBPACK_IMPORTED_MODULE_4__random_js__[
                "a"
                /* default */
              ])(index, last);
              var temp = sample2[index];
              sample2[index] = sample2[rand];
              sample2[rand] = temp;
            }
            return sample2.slice(0, n2);
          }
        },
        /* 151 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
          var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(13);
          var __WEBPACK_IMPORTED_MODULE_2__optimizeCb_js__ = __webpack_require__(48);
          var __WEBPACK_IMPORTED_MODULE_3__allKeys_js__ = __webpack_require__(46);
          var __WEBPACK_IMPORTED_MODULE_4__keyInObj_js__ = __webpack_require__(251);
          var __WEBPACK_IMPORTED_MODULE_5__flatten_js__ = __webpack_require__(34);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__[
            "a"
            /* default */
          ])(function(obj, keys) {
            var result = {}, iteratee = keys[0];
            if (obj == null)
              return result;
            if (Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__[
              "a"
              /* default */
            ])(iteratee)) {
              if (keys.length > 1)
                iteratee = Object(__WEBPACK_IMPORTED_MODULE_2__optimizeCb_js__[
                  "a"
                  /* default */
                ])(iteratee, keys[1]);
              keys = Object(__WEBPACK_IMPORTED_MODULE_3__allKeys_js__[
                "a"
                /* default */
              ])(obj);
            } else {
              iteratee = __WEBPACK_IMPORTED_MODULE_4__keyInObj_js__[
                "a"
                /* default */
              ];
              keys = Object(__WEBPACK_IMPORTED_MODULE_5__flatten_js__[
                "a"
                /* default */
              ])(keys, false, false);
              obj = Object(obj);
            }
            for (var i2 = 0, length = keys.length; i2 < length; i2++) {
              var key = keys[i2];
              var value = obj[key];
              if (iteratee(value, key, obj))
                result[key] = value;
            }
            return result;
          });
        },
        /* 152 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = initial;
          var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
          function initial(array, n2, guard) {
            return __WEBPACK_IMPORTED_MODULE_0__setup_js__[
              "q"
              /* slice */
            ].call(array, 0, Math.max(0, array.length - (n2 == null || guard ? 1 : n2)));
          }
        },
        /* 153 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = rest;
          var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
          function rest(array, n2, guard) {
            return __WEBPACK_IMPORTED_MODULE_0__setup_js__[
              "q"
              /* slice */
            ].call(array, n2 == null || guard ? 1 : n2);
          }
        },
        /* 154 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
          var __WEBPACK_IMPORTED_MODULE_1__flatten_js__ = __webpack_require__(34);
          var __WEBPACK_IMPORTED_MODULE_2__filter_js__ = __webpack_require__(49);
          var __WEBPACK_IMPORTED_MODULE_3__contains_js__ = __webpack_require__(50);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__[
            "a"
            /* default */
          ])(function(array, rest) {
            rest = Object(__WEBPACK_IMPORTED_MODULE_1__flatten_js__[
              "a"
              /* default */
            ])(rest, true, true);
            return Object(__WEBPACK_IMPORTED_MODULE_2__filter_js__[
              "a"
              /* default */
            ])(array, function(value) {
              return !Object(__WEBPACK_IMPORTED_MODULE_3__contains_js__[
                "a"
                /* default */
              ])(rest, value);
            });
          });
        },
        /* 155 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = uniq;
          var __WEBPACK_IMPORTED_MODULE_0__isBoolean_js__ = __webpack_require__(111);
          var __WEBPACK_IMPORTED_MODULE_1__cb_js__ = __webpack_require__(8);
          var __WEBPACK_IMPORTED_MODULE_2__getLength_js__ = __webpack_require__(14);
          var __WEBPACK_IMPORTED_MODULE_3__contains_js__ = __webpack_require__(50);
          function uniq(array, isSorted, iteratee, context) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__isBoolean_js__[
              "a"
              /* default */
            ])(isSorted)) {
              context = iteratee;
              iteratee = isSorted;
              isSorted = false;
            }
            if (iteratee != null)
              iteratee = Object(__WEBPACK_IMPORTED_MODULE_1__cb_js__[
                "a"
                /* default */
              ])(iteratee, context);
            var result = [];
            var seen = [];
            for (var i2 = 0, length = Object(__WEBPACK_IMPORTED_MODULE_2__getLength_js__[
              "a"
              /* default */
            ])(array); i2 < length; i2++) {
              var value = array[i2], computed = iteratee ? iteratee(value, i2, array) : value;
              if (isSorted && !iteratee) {
                if (!i2 || seen !== computed)
                  result.push(value);
                seen = computed;
              } else if (iteratee) {
                if (!Object(__WEBPACK_IMPORTED_MODULE_3__contains_js__[
                  "a"
                  /* default */
                ])(seen, computed)) {
                  seen.push(computed);
                  result.push(value);
                }
              } else if (!Object(__WEBPACK_IMPORTED_MODULE_3__contains_js__[
                "a"
                /* default */
              ])(result, value)) {
                result.push(value);
              }
            }
            return result;
          }
        },
        /* 156 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = unzip;
          var __WEBPACK_IMPORTED_MODULE_0__max_js__ = __webpack_require__(149);
          var __WEBPACK_IMPORTED_MODULE_1__getLength_js__ = __webpack_require__(14);
          var __WEBPACK_IMPORTED_MODULE_2__pluck_js__ = __webpack_require__(88);
          function unzip(array) {
            var length = array && Object(__WEBPACK_IMPORTED_MODULE_0__max_js__[
              "a"
              /* default */
            ])(array, __WEBPACK_IMPORTED_MODULE_1__getLength_js__[
              "a"
              /* default */
            ]).length || 0;
            var result = Array(length);
            for (var index = 0; index < length; index++) {
              result[index] = Object(__WEBPACK_IMPORTED_MODULE_2__pluck_js__[
                "a"
                /* default */
              ])(array, index);
            }
            return result;
          }
        },
        /* 157 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = chainResult;
          var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(10);
          function chainResult(instance, obj) {
            return instance._chain ? Object(__WEBPACK_IMPORTED_MODULE_0__underscore_js__[
              "a"
              /* default */
            ])(obj).chain() : obj;
          }
        },
        /* 158 */
        /***/
        function(module2, exports2, __webpack_require__) {
          module2.exports = { "default": __webpack_require__(267), __esModule: true };
        },
        /* 159 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var rng = __webpack_require__(269);
          var bytesToUuid = __webpack_require__(270);
          function v4(options, buf, offset) {
            var i2 = buf && offset || 0;
            if (typeof options == "string") {
              buf = options === "binary" ? new Array(16) : null;
              options = null;
            }
            options = options || {};
            var rnds = options.random || (options.rng || rng)();
            rnds[6] = rnds[6] & 15 | 64;
            rnds[8] = rnds[8] & 63 | 128;
            if (buf) {
              for (var ii = 0; ii < 16; ++ii) {
                buf[i2 + ii] = rnds[ii];
              }
            }
            return buf || bytesToUuid(rnds);
          }
          module2.exports = v4;
        },
        /* 160 */
        /***/
        function(module2, exports2, __webpack_require__) {
          module2.exports = { "default": __webpack_require__(273), __esModule: true };
        },
        /* 161 */
        /***/
        function(module2, exports2, __webpack_require__) {
          module2.exports = "4.12.2";
        },
        /* 162 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var has = Object.prototype.hasOwnProperty, prefix = "~";
          function Events() {
          }
          if (Object.create) {
            Events.prototype = /* @__PURE__ */ Object.create(null);
            if (!new Events().__proto__)
              prefix = false;
          }
          function EE(fn, context, once) {
            this.fn = fn;
            this.context = context;
            this.once = once || false;
          }
          function EventEmitter() {
            this._events = new Events();
            this._eventsCount = 0;
          }
          EventEmitter.prototype.eventNames = function eventNames() {
            var names = [], events, name2;
            if (this._eventsCount === 0)
              return names;
            for (name2 in events = this._events) {
              if (has.call(events, name2))
                names.push(prefix ? name2.slice(1) : name2);
            }
            if (Object.getOwnPropertySymbols) {
              return names.concat(Object.getOwnPropertySymbols(events));
            }
            return names;
          };
          EventEmitter.prototype.listeners = function listeners(event2, exists) {
            var evt = prefix ? prefix + event2 : event2, available = this._events[evt];
            if (exists)
              return !!available;
            if (!available)
              return [];
            if (available.fn)
              return [available.fn];
            for (var i2 = 0, l2 = available.length, ee = new Array(l2); i2 < l2; i2++) {
              ee[i2] = available[i2].fn;
            }
            return ee;
          };
          EventEmitter.prototype.emit = function emit(event2, a1, a2, a3, a4, a5) {
            var evt = prefix ? prefix + event2 : event2;
            if (!this._events[evt])
              return false;
            var listeners = this._events[evt], len = arguments.length, args, i2;
            if (listeners.fn) {
              if (listeners.once)
                this.removeListener(event2, listeners.fn, void 0, true);
              switch (len) {
                case 1:
                  return listeners.fn.call(listeners.context), true;
                case 2:
                  return listeners.fn.call(listeners.context, a1), true;
                case 3:
                  return listeners.fn.call(listeners.context, a1, a2), true;
                case 4:
                  return listeners.fn.call(listeners.context, a1, a2, a3), true;
                case 5:
                  return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
                case 6:
                  return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
              }
              for (i2 = 1, args = new Array(len - 1); i2 < len; i2++) {
                args[i2 - 1] = arguments[i2];
              }
              listeners.fn.apply(listeners.context, args);
            } else {
              var length = listeners.length, j;
              for (i2 = 0; i2 < length; i2++) {
                if (listeners[i2].once)
                  this.removeListener(event2, listeners[i2].fn, void 0, true);
                switch (len) {
                  case 1:
                    listeners[i2].fn.call(listeners[i2].context);
                    break;
                  case 2:
                    listeners[i2].fn.call(listeners[i2].context, a1);
                    break;
                  case 3:
                    listeners[i2].fn.call(listeners[i2].context, a1, a2);
                    break;
                  case 4:
                    listeners[i2].fn.call(listeners[i2].context, a1, a2, a3);
                    break;
                  default:
                    if (!args)
                      for (j = 1, args = new Array(len - 1); j < len; j++) {
                        args[j - 1] = arguments[j];
                      }
                    listeners[i2].fn.apply(listeners[i2].context, args);
                }
              }
            }
            return true;
          };
          EventEmitter.prototype.on = function on(event2, fn, context) {
            var listener = new EE(fn, context || this), evt = prefix ? prefix + event2 : event2;
            if (!this._events[evt])
              this._events[evt] = listener, this._eventsCount++;
            else if (!this._events[evt].fn)
              this._events[evt].push(listener);
            else
              this._events[evt] = [this._events[evt], listener];
            return this;
          };
          EventEmitter.prototype.once = function once(event2, fn, context) {
            var listener = new EE(fn, context || this, true), evt = prefix ? prefix + event2 : event2;
            if (!this._events[evt])
              this._events[evt] = listener, this._eventsCount++;
            else if (!this._events[evt].fn)
              this._events[evt].push(listener);
            else
              this._events[evt] = [this._events[evt], listener];
            return this;
          };
          EventEmitter.prototype.removeListener = function removeListener(event2, fn, context, once) {
            var evt = prefix ? prefix + event2 : event2;
            if (!this._events[evt])
              return this;
            if (!fn) {
              if (--this._eventsCount === 0)
                this._events = new Events();
              else
                delete this._events[evt];
              return this;
            }
            var listeners = this._events[evt];
            if (listeners.fn) {
              if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
                if (--this._eventsCount === 0)
                  this._events = new Events();
                else
                  delete this._events[evt];
              }
            } else {
              for (var i2 = 0, events = [], length = listeners.length; i2 < length; i2++) {
                if (listeners[i2].fn !== fn || once && !listeners[i2].once || context && listeners[i2].context !== context) {
                  events.push(listeners[i2]);
                }
              }
              if (events.length)
                this._events[evt] = events.length === 1 ? events[0] : events;
              else if (--this._eventsCount === 0)
                this._events = new Events();
              else
                delete this._events[evt];
            }
            return this;
          };
          EventEmitter.prototype.removeAllListeners = function removeAllListeners(event2) {
            var evt;
            if (event2) {
              evt = prefix ? prefix + event2 : event2;
              if (this._events[evt]) {
                if (--this._eventsCount === 0)
                  this._events = new Events();
                else
                  delete this._events[evt];
              }
            } else {
              this._events = new Events();
              this._eventsCount = 0;
            }
            return this;
          };
          EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
          EventEmitter.prototype.addListener = EventEmitter.prototype.on;
          EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
            return this;
          };
          EventEmitter.prefixed = prefix;
          EventEmitter.EventEmitter = EventEmitter;
          {
            module2.exports = EventEmitter;
          }
        },
        /* 163 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _promise = __webpack_require__(3);
          var _promise2 = _interopRequireDefault(_promise);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var _require = __webpack_require__(38), getAdapter = _require.getAdapter;
          var syncApiNames = ["getItem", "setItem", "removeItem", "clear"];
          var localStorage2 = {
            get async() {
              return getAdapter("storage").async;
            }
          };
          syncApiNames.forEach(function(apiName) {
            localStorage2[apiName + "Async"] = function() {
              var storage = getAdapter("storage");
              return _promise2.default.resolve(storage[apiName].apply(storage, arguments));
            };
            localStorage2[apiName] = function() {
              var storage = getAdapter("storage");
              if (!storage.async) {
                return storage[apiName].apply(storage, arguments);
              }
              var error = new Error("Synchronous API [" + apiName + "] is not available in this runtime.");
              error.code = "SYNC_API_NOT_AVAILABLE";
              throw error;
            };
          });
          module2.exports = localStorage2;
        },
        /* 164 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _stringify = __webpack_require__(19);
          var _stringify2 = _interopRequireDefault(_stringify);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var storage = __webpack_require__(163);
          var AV2 = __webpack_require__(36);
          var removeAsync = exports2.removeAsync = storage.removeItemAsync.bind(storage);
          var getCacheData = function getCacheData2(cacheData, key) {
            try {
              cacheData = JSON.parse(cacheData);
            } catch (e2) {
              return null;
            }
            if (cacheData) {
              var expired = cacheData.expiredAt && cacheData.expiredAt < Date.now();
              if (!expired) {
                return cacheData.value;
              }
              return removeAsync(key).then(function() {
                return null;
              });
            }
            return null;
          };
          exports2.getAsync = function(key) {
            key = "AV/" + AV2.applicationId + "/" + key;
            return storage.getItemAsync(key).then(function(cache) {
              return getCacheData(cache, key);
            });
          };
          exports2.setAsync = function(key, value, ttl) {
            var cache = { value };
            if (typeof ttl === "number") {
              cache.expiredAt = Date.now() + ttl;
            }
            return storage.setItemAsync("AV/" + AV2.applicationId + "/" + key, (0, _stringify2.default)(cache));
          };
        },
        /* 165 */
        /***/
        function(module2, exports2) {
          exports2.f = Object.getOwnPropertySymbols;
        },
        /* 166 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var $keys = __webpack_require__(99);
          var hiddenKeys = __webpack_require__(70).concat("length", "prototype");
          exports2.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
            return $keys(O, hiddenKeys);
          };
        },
        /* 167 */
        /***/
        function(module2, exports2, __webpack_require__) {
          module2.exports = { "default": __webpack_require__(308), __esModule: true };
        },
        /* 168 */
        /***/
        function(module2, exports2) {
          var charenc = {
            // UTF-8 encoding
            utf8: {
              // Convert a string to a byte array
              stringToBytes: function(str) {
                return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
              },
              // Convert a byte array to a string
              bytesToString: function(bytes) {
                return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
              }
            },
            // Binary encoding
            bin: {
              // Convert a string to a byte array
              stringToBytes: function(str) {
                for (var bytes = [], i2 = 0; i2 < str.length; i2++)
                  bytes.push(str.charCodeAt(i2) & 255);
                return bytes;
              },
              // Convert a byte array to a string
              bytesToString: function(bytes) {
                for (var str = [], i2 = 0; i2 < bytes.length; i2++)
                  str.push(String.fromCharCode(bytes[i2]));
                return str.join("");
              }
            }
          };
          module2.exports = charenc;
        },
        /* 169 */
        /***/
        function(module2, exports2, __webpack_require__) {
          module2.exports = { "default": __webpack_require__(321), __esModule: true };
        },
        /* 170 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _iterator = __webpack_require__(61);
          var _iterator2 = _interopRequireDefault(_iterator);
          var _typeof3 = __webpack_require__(30);
          var _typeof4 = _interopRequireDefault(_typeof3);
          var _symbol = __webpack_require__(51);
          var _symbol2 = _interopRequireDefault(_symbol);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _typeof(obj) {
            "@babel/helpers - typeof";
            if (typeof _symbol2.default === "function" && (0, _typeof4.default)(_iterator2.default) === "symbol") {
              _typeof = function _typeof2(obj2) {
                return typeof obj2 === "undefined" ? "undefined" : (0, _typeof4.default)(obj2);
              };
            } else {
              _typeof = function _typeof2(obj2) {
                return obj2 && typeof _symbol2.default === "function" && obj2.constructor === _symbol2.default && obj2 !== _symbol2.default.prototype ? "symbol" : typeof obj2 === "undefined" ? "undefined" : (0, _typeof4.default)(obj2);
              };
            }
            return _typeof(obj);
          }
          function isObject(obj) {
            return obj !== null && _typeof(obj) === "object";
          }
          module2.exports = isObject;
        },
        /* 171 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var AV2 = __webpack_require__(172);
          var useAdatpers = __webpack_require__(337);
          module2.exports = useAdatpers(AV2);
        },
        /* 172 */
        /***/
        function(module2, exports2, __webpack_require__) {
          module2.exports = __webpack_require__(173);
        },
        /* 173 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _promise = __webpack_require__(3);
          var _promise2 = _interopRequireDefault(_promise);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          /*!
           * LeanCloud JavaScript SDK
           * https://leancloud.cn
           *
           * Copyright 2016 LeanCloud.cn, Inc.
           * The LeanCloud JavaScript SDK is freely distributable under the MIT license.
           */
          var _ = __webpack_require__(0);
          var AV2 = __webpack_require__(36);
          AV2._ = _;
          AV2.version = __webpack_require__(161);
          AV2.Promise = _promise2.default;
          AV2.localStorage = __webpack_require__(163);
          AV2.Cache = __webpack_require__(164);
          AV2.Error = __webpack_require__(29);
          __webpack_require__(275);
          __webpack_require__(289)(AV2);
          __webpack_require__(290)(AV2);
          __webpack_require__(291)(AV2);
          __webpack_require__(292)(AV2);
          __webpack_require__(293)(AV2);
          __webpack_require__(294)(AV2);
          __webpack_require__(316)(AV2);
          __webpack_require__(323)(AV2);
          __webpack_require__(324)(AV2);
          __webpack_require__(326)(AV2);
          __webpack_require__(327)(AV2);
          __webpack_require__(328)(AV2);
          __webpack_require__(329)(AV2);
          __webpack_require__(330)(AV2);
          __webpack_require__(331)(AV2);
          __webpack_require__(332)(AV2);
          __webpack_require__(333)(AV2);
          __webpack_require__(334)(AV2);
          AV2.Conversation = __webpack_require__(335);
          __webpack_require__(336);
          module2.exports = AV2;
        },
        /* 174 */
        /***/
        function(module2, exports2, __webpack_require__) {
          __webpack_require__(95);
          __webpack_require__(39);
          __webpack_require__(56);
          __webpack_require__(184);
          __webpack_require__(192);
          __webpack_require__(193);
          module2.exports = __webpack_require__(2).Promise;
        },
        /* 175 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var toInteger = __webpack_require__(62);
          var defined = __webpack_require__(63);
          module2.exports = function(TO_STRING) {
            return function(that, pos) {
              var s = String(defined(that));
              var i2 = toInteger(pos);
              var l2 = s.length;
              var a, b;
              if (i2 < 0 || i2 >= l2)
                return TO_STRING ? "" : void 0;
              a = s.charCodeAt(i2);
              return a < 55296 || a > 56319 || i2 + 1 === l2 || (b = s.charCodeAt(i2 + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i2) : a : TO_STRING ? s.slice(i2, i2 + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
            };
          };
        },
        /* 176 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var create = __webpack_require__(66);
          var descriptor = __webpack_require__(42);
          var setToStringTag = __webpack_require__(55);
          var IteratorPrototype = {};
          __webpack_require__(23)(IteratorPrototype, __webpack_require__(7)("iterator"), function() {
            return this;
          });
          module2.exports = function(Constructor, NAME, next) {
            Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
            setToStringTag(Constructor, NAME + " Iterator");
          };
        },
        /* 177 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var dP = __webpack_require__(18);
          var anObject = __webpack_require__(17);
          var getKeys = __webpack_require__(53);
          module2.exports = __webpack_require__(21) ? Object.defineProperties : function defineProperties(O, Properties) {
            anObject(O);
            var keys = getKeys(Properties);
            var length = keys.length;
            var i2 = 0;
            var P;
            while (length > i2)
              dP.f(O, P = keys[i2++], Properties[P]);
            return O;
          };
        },
        /* 178 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var cof = __webpack_require__(43);
          module2.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
            return cof(it) == "String" ? it.split("") : Object(it);
          };
        },
        /* 179 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var toIObject = __webpack_require__(25);
          var toLength = __webpack_require__(67);
          var toAbsoluteIndex = __webpack_require__(180);
          module2.exports = function(IS_INCLUDES) {
            return function($this, el, fromIndex) {
              var O = toIObject($this);
              var length = toLength(O.length);
              var index = toAbsoluteIndex(fromIndex, length);
              var value;
              if (IS_INCLUDES && el != el)
                while (length > index) {
                  value = O[index++];
                  if (value != value)
                    return true;
                }
              else
                for (; length > index; index++)
                  if (IS_INCLUDES || index in O) {
                    if (O[index] === el)
                      return IS_INCLUDES || index || 0;
                  }
              return !IS_INCLUDES && -1;
            };
          };
        },
        /* 180 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var toInteger = __webpack_require__(62);
          var max = Math.max;
          var min = Math.min;
          module2.exports = function(index, length) {
            index = toInteger(index);
            return index < 0 ? max(index + length, 0) : min(index, length);
          };
        },
        /* 181 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var addToUnscopables = __webpack_require__(182);
          var step = __webpack_require__(183);
          var Iterators = __webpack_require__(32);
          var toIObject = __webpack_require__(25);
          module2.exports = __webpack_require__(96)(Array, "Array", function(iterated, kind) {
            this._t = toIObject(iterated);
            this._i = 0;
            this._k = kind;
          }, function() {
            var O = this._t;
            var kind = this._k;
            var index = this._i++;
            if (!O || index >= O.length) {
              this._t = void 0;
              return step(1);
            }
            if (kind == "keys")
              return step(0, index);
            if (kind == "values")
              return step(0, O[index]);
            return step(0, [index, O[index]]);
          }, "values");
          Iterators.Arguments = Iterators.Array;
          addToUnscopables("keys");
          addToUnscopables("values");
          addToUnscopables("entries");
        },
        /* 182 */
        /***/
        function(module2, exports2) {
          module2.exports = function() {
          };
        },
        /* 183 */
        /***/
        function(module2, exports2) {
          module2.exports = function(done, value) {
            return { value, done: !!done };
          };
        },
        /* 184 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var LIBRARY = __webpack_require__(40);
          var global2 = __webpack_require__(6);
          var ctx = __webpack_require__(31);
          var classof = __webpack_require__(71);
          var $export = __webpack_require__(16);
          var isObject = __webpack_require__(20);
          var aFunction = __webpack_require__(52);
          var anInstance = __webpack_require__(185);
          var forOf = __webpack_require__(186);
          var speciesConstructor = __webpack_require__(104);
          var task = __webpack_require__(105).set;
          var microtask = __webpack_require__(188)();
          var newPromiseCapabilityModule = __webpack_require__(73);
          var perform = __webpack_require__(106);
          var userAgent = __webpack_require__(189);
          var promiseResolve = __webpack_require__(107);
          var PROMISE = "Promise";
          var TypeError2 = global2.TypeError;
          var process2 = global2.process;
          var versions = process2 && process2.versions;
          var v8 = versions && versions.v8 || "";
          var $Promise = global2[PROMISE];
          var isNode = classof(process2) == "process";
          var empty = function() {
          };
          var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
          var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
          var USE_NATIVE = !!function() {
            try {
              var promise = $Promise.resolve(1);
              var FakePromise = (promise.constructor = {})[__webpack_require__(7)("species")] = function(exec) {
                exec(empty, empty);
              };
              return (isNode || typeof PromiseRejectionEvent == "function") && promise.then(empty) instanceof FakePromise && v8.indexOf("6.6") !== 0 && userAgent.indexOf("Chrome/66") === -1;
            } catch (e2) {
            }
          }();
          var isThenable = function(it) {
            var then;
            return isObject(it) && typeof (then = it.then) == "function" ? then : false;
          };
          var notify = function(promise, isReject) {
            if (promise._n)
              return;
            promise._n = true;
            var chain = promise._c;
            microtask(function() {
              var value = promise._v;
              var ok = promise._s == 1;
              var i2 = 0;
              var run = function(reaction) {
                var handler = ok ? reaction.ok : reaction.fail;
                var resolve = reaction.resolve;
                var reject = reaction.reject;
                var domain2 = reaction.domain;
                var result, then, exited;
                try {
                  if (handler) {
                    if (!ok) {
                      if (promise._h == 2)
                        onHandleUnhandled(promise);
                      promise._h = 1;
                    }
                    if (handler === true)
                      result = value;
                    else {
                      if (domain2)
                        domain2.enter();
                      result = handler(value);
                      if (domain2) {
                        domain2.exit();
                        exited = true;
                      }
                    }
                    if (result === reaction.promise) {
                      reject(TypeError2("Promise-chain cycle"));
                    } else if (then = isThenable(result)) {
                      then.call(result, resolve, reject);
                    } else
                      resolve(result);
                  } else
                    reject(value);
                } catch (e2) {
                  if (domain2 && !exited)
                    domain2.exit();
                  reject(e2);
                }
              };
              while (chain.length > i2)
                run(chain[i2++]);
              promise._c = [];
              promise._n = false;
              if (isReject && !promise._h)
                onUnhandled(promise);
            });
          };
          var onUnhandled = function(promise) {
            task.call(global2, function() {
              var value = promise._v;
              var unhandled = isUnhandled(promise);
              var result, handler, console2;
              if (unhandled) {
                result = perform(function() {
                  if (isNode) {
                    process2.emit("unhandledRejection", value, promise);
                  } else if (handler = global2.onunhandledrejection) {
                    handler({ promise, reason: value });
                  } else if ((console2 = global2.console) && console2.error) {
                    console2.error("Unhandled promise rejection", value);
                  }
                });
                promise._h = isNode || isUnhandled(promise) ? 2 : 1;
              }
              promise._a = void 0;
              if (unhandled && result.e)
                throw result.v;
            });
          };
          var isUnhandled = function(promise) {
            return promise._h !== 1 && (promise._a || promise._c).length === 0;
          };
          var onHandleUnhandled = function(promise) {
            task.call(global2, function() {
              var handler;
              if (isNode) {
                process2.emit("rejectionHandled", promise);
              } else if (handler = global2.onrejectionhandled) {
                handler({ promise, reason: promise._v });
              }
            });
          };
          var $reject = function(value) {
            var promise = this;
            if (promise._d)
              return;
            promise._d = true;
            promise = promise._w || promise;
            promise._v = value;
            promise._s = 2;
            if (!promise._a)
              promise._a = promise._c.slice();
            notify(promise, true);
          };
          var $resolve = function(value) {
            var promise = this;
            var then;
            if (promise._d)
              return;
            promise._d = true;
            promise = promise._w || promise;
            try {
              if (promise === value)
                throw TypeError2("Promise can't be resolved itself");
              if (then = isThenable(value)) {
                microtask(function() {
                  var wrapper = { _w: promise, _d: false };
                  try {
                    then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
                  } catch (e2) {
                    $reject.call(wrapper, e2);
                  }
                });
              } else {
                promise._v = value;
                promise._s = 1;
                notify(promise, false);
              }
            } catch (e2) {
              $reject.call({ _w: promise, _d: false }, e2);
            }
          };
          if (!USE_NATIVE) {
            $Promise = function Promise2(executor) {
              anInstance(this, $Promise, PROMISE, "_h");
              aFunction(executor);
              Internal.call(this);
              try {
                executor(ctx($resolve, this, 1), ctx($reject, this, 1));
              } catch (err) {
                $reject.call(this, err);
              }
            };
            Internal = function Promise2(executor) {
              this._c = [];
              this._a = void 0;
              this._s = 0;
              this._d = false;
              this._v = void 0;
              this._h = 0;
              this._n = false;
            };
            Internal.prototype = __webpack_require__(190)($Promise.prototype, {
              // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
              then: function then(onFulfilled, onRejected) {
                var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
                reaction.ok = typeof onFulfilled == "function" ? onFulfilled : true;
                reaction.fail = typeof onRejected == "function" && onRejected;
                reaction.domain = isNode ? process2.domain : void 0;
                this._c.push(reaction);
                if (this._a)
                  this._a.push(reaction);
                if (this._s)
                  notify(this, false);
                return reaction.promise;
              },
              // 25.4.5.1 Promise.prototype.catch(onRejected)
              "catch": function(onRejected) {
                return this.then(void 0, onRejected);
              }
            });
            OwnPromiseCapability = function() {
              var promise = new Internal();
              this.promise = promise;
              this.resolve = ctx($resolve, promise, 1);
              this.reject = ctx($reject, promise, 1);
            };
            newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
              return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
            };
          }
          $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
          __webpack_require__(55)($Promise, PROMISE);
          __webpack_require__(191)(PROMISE);
          Wrapper = __webpack_require__(2)[PROMISE];
          $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
            // 25.4.4.5 Promise.reject(r)
            reject: function reject(r2) {
              var capability = newPromiseCapability(this);
              var $$reject = capability.reject;
              $$reject(r2);
              return capability.promise;
            }
          });
          $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
            // 25.4.4.6 Promise.resolve(x)
            resolve: function resolve(x) {
              return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
            }
          });
          $export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(108)(function(iter) {
            $Promise.all(iter)["catch"](empty);
          })), PROMISE, {
            // 25.4.4.1 Promise.all(iterable)
            all: function all(iterable) {
              var C = this;
              var capability = newPromiseCapability(C);
              var resolve = capability.resolve;
              var reject = capability.reject;
              var result = perform(function() {
                var values = [];
                var index = 0;
                var remaining = 1;
                forOf(iterable, false, function(promise) {
                  var $index = index++;
                  var alreadyCalled = false;
                  values.push(void 0);
                  remaining++;
                  C.resolve(promise).then(function(value) {
                    if (alreadyCalled)
                      return;
                    alreadyCalled = true;
                    values[$index] = value;
                    --remaining || resolve(values);
                  }, reject);
                });
                --remaining || resolve(values);
              });
              if (result.e)
                reject(result.v);
              return capability.promise;
            },
            // 25.4.4.4 Promise.race(iterable)
            race: function race(iterable) {
              var C = this;
              var capability = newPromiseCapability(C);
              var reject = capability.reject;
              var result = perform(function() {
                forOf(iterable, false, function(promise) {
                  C.resolve(promise).then(capability.resolve, reject);
                });
              });
              if (result.e)
                reject(result.v);
              return capability.promise;
            }
          });
        },
        /* 185 */
        /***/
        function(module2, exports2) {
          module2.exports = function(it, Constructor, name2, forbiddenField) {
            if (!(it instanceof Constructor) || forbiddenField !== void 0 && forbiddenField in it) {
              throw TypeError(name2 + ": incorrect invocation!");
            }
            return it;
          };
        },
        /* 186 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var ctx = __webpack_require__(31);
          var call = __webpack_require__(102);
          var isArrayIter = __webpack_require__(103);
          var anObject = __webpack_require__(17);
          var toLength = __webpack_require__(67);
          var getIterFn = __webpack_require__(72);
          var BREAK = {};
          var RETURN = {};
          var exports2 = module2.exports = function(iterable, entries, fn, that, ITERATOR) {
            var iterFn = ITERATOR ? function() {
              return iterable;
            } : getIterFn(iterable);
            var f = ctx(fn, that, entries ? 2 : 1);
            var index = 0;
            var length, step, iterator, result;
            if (typeof iterFn != "function")
              throw TypeError(iterable + " is not iterable!");
            if (isArrayIter(iterFn))
              for (length = toLength(iterable.length); length > index; index++) {
                result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
                if (result === BREAK || result === RETURN)
                  return result;
              }
            else
              for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
                result = call(iterator, f, step.value, entries);
                if (result === BREAK || result === RETURN)
                  return result;
              }
          };
          exports2.BREAK = BREAK;
          exports2.RETURN = RETURN;
        },
        /* 187 */
        /***/
        function(module2, exports2) {
          module2.exports = function(fn, args, that) {
            var un = that === void 0;
            switch (args.length) {
              case 0:
                return un ? fn() : fn.call(that);
              case 1:
                return un ? fn(args[0]) : fn.call(that, args[0]);
              case 2:
                return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
              case 3:
                return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
              case 4:
                return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
            }
            return fn.apply(that, args);
          };
        },
        /* 188 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var global2 = __webpack_require__(6);
          var macrotask = __webpack_require__(105).set;
          var Observer = global2.MutationObserver || global2.WebKitMutationObserver;
          var process2 = global2.process;
          var Promise2 = global2.Promise;
          var isNode = __webpack_require__(43)(process2) == "process";
          module2.exports = function() {
            var head, last, notify;
            var flush = function() {
              var parent, fn;
              if (isNode && (parent = process2.domain))
                parent.exit();
              while (head) {
                fn = head.fn;
                head = head.next;
                try {
                  fn();
                } catch (e2) {
                  if (head)
                    notify();
                  else
                    last = void 0;
                  throw e2;
                }
              }
              last = void 0;
              if (parent)
                parent.enter();
            };
            if (isNode) {
              notify = function() {
                process2.nextTick(flush);
              };
            } else if (Observer && !(global2.navigator && global2.navigator.standalone)) {
              var toggle = true;
              var node = document.createTextNode("");
              new Observer(flush).observe(node, { characterData: true });
              notify = function() {
                node.data = toggle = !toggle;
              };
            } else if (Promise2 && Promise2.resolve) {
              var promise = Promise2.resolve(void 0);
              notify = function() {
                promise.then(flush);
              };
            } else {
              notify = function() {
                macrotask.call(global2, flush);
              };
            }
            return function(fn) {
              var task = { fn, next: void 0 };
              if (last)
                last.next = task;
              if (!head) {
                head = task;
                notify();
              }
              last = task;
            };
          };
        },
        /* 189 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var global2 = __webpack_require__(6);
          var navigator2 = global2.navigator;
          module2.exports = navigator2 && navigator2.userAgent || "";
        },
        /* 190 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var hide = __webpack_require__(23);
          module2.exports = function(target, src, safe) {
            for (var key in src) {
              if (safe && target[key])
                target[key] = src[key];
              else
                hide(target, key, src[key]);
            }
            return target;
          };
        },
        /* 191 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var global2 = __webpack_require__(6);
          var core = __webpack_require__(2);
          var dP = __webpack_require__(18);
          var DESCRIPTORS = __webpack_require__(21);
          var SPECIES = __webpack_require__(7)("species");
          module2.exports = function(KEY) {
            var C = typeof core[KEY] == "function" ? core[KEY] : global2[KEY];
            if (DESCRIPTORS && C && !C[SPECIES])
              dP.f(C, SPECIES, {
                configurable: true,
                get: function() {
                  return this;
                }
              });
          };
        },
        /* 192 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var $export = __webpack_require__(16);
          var core = __webpack_require__(2);
          var global2 = __webpack_require__(6);
          var speciesConstructor = __webpack_require__(104);
          var promiseResolve = __webpack_require__(107);
          $export($export.P + $export.R, "Promise", { "finally": function(onFinally) {
            var C = speciesConstructor(this, core.Promise || global2.Promise);
            var isFunction = typeof onFinally == "function";
            return this.then(
              isFunction ? function(x) {
                return promiseResolve(C, onFinally()).then(function() {
                  return x;
                });
              } : onFinally,
              isFunction ? function(e2) {
                return promiseResolve(C, onFinally()).then(function() {
                  throw e2;
                });
              } : onFinally
            );
          } });
        },
        /* 193 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var $export = __webpack_require__(16);
          var newPromiseCapability = __webpack_require__(73);
          var perform = __webpack_require__(106);
          $export($export.S, "Promise", { "try": function(callbackfn) {
            var promiseCapability = newPromiseCapability.f(this);
            var result = perform(callbackfn);
            (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
            return promiseCapability.promise;
          } });
        },
        /* 194 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(74);
          var _ = Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["mixin"])(__WEBPACK_IMPORTED_MODULE_0__index_js__);
          _._ = _;
          __webpack_exports__["a"] = _;
        },
        /* 195 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = isNull;
          function isNull(obj) {
            return obj === null;
          }
        },
        /* 196 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = isElement;
          function isElement(obj) {
            return !!(obj && obj.nodeType === 1);
          }
        },
        /* 197 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__[
            "a"
            /* default */
          ])("Date");
        },
        /* 198 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__[
            "a"
            /* default */
          ])("RegExp");
        },
        /* 199 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__[
            "a"
            /* default */
          ])("Error");
        },
        /* 200 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__[
            "a"
            /* default */
          ])("Object");
        },
        /* 201 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = isFinite2;
          var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
          var __WEBPACK_IMPORTED_MODULE_1__isSymbol_js__ = __webpack_require__(113);
          function isFinite2(obj) {
            return !Object(__WEBPACK_IMPORTED_MODULE_1__isSymbol_js__[
              "a"
              /* default */
            ])(obj) && Object(__WEBPACK_IMPORTED_MODULE_0__setup_js__[
              "f"
              /* _isFinite */
            ])(obj) && !isNaN(parseFloat(obj));
          }
        },
        /* 202 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__createSizePropertyCheck_js__ = __webpack_require__(118);
          var __WEBPACK_IMPORTED_MODULE_1__getByteLength_js__ = __webpack_require__(78);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__createSizePropertyCheck_js__[
            "a"
            /* default */
          ])(__WEBPACK_IMPORTED_MODULE_1__getByteLength_js__[
            "a"
            /* default */
          ]);
        },
        /* 203 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = isEmpty;
          var __WEBPACK_IMPORTED_MODULE_0__getLength_js__ = __webpack_require__(14);
          var __WEBPACK_IMPORTED_MODULE_1__isArray_js__ = __webpack_require__(27);
          var __WEBPACK_IMPORTED_MODULE_2__isString_js__ = __webpack_require__(75);
          var __WEBPACK_IMPORTED_MODULE_3__isArguments_js__ = __webpack_require__(77);
          var __WEBPACK_IMPORTED_MODULE_4__keys_js__ = __webpack_require__(4);
          function isEmpty(obj) {
            if (obj == null)
              return true;
            var length = Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__[
              "a"
              /* default */
            ])(obj);
            if (typeof length == "number" && (Object(__WEBPACK_IMPORTED_MODULE_1__isArray_js__[
              "a"
              /* default */
            ])(obj) || Object(__WEBPACK_IMPORTED_MODULE_2__isString_js__[
              "a"
              /* default */
            ])(obj) || Object(__WEBPACK_IMPORTED_MODULE_3__isArguments_js__[
              "a"
              /* default */
            ])(obj)))
              return length === 0;
            return Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__[
              "a"
              /* default */
            ])(Object(__WEBPACK_IMPORTED_MODULE_4__keys_js__[
              "a"
              /* default */
            ])(obj)) === 0;
          }
        },
        /* 204 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = isEqual;
          var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(10);
          var __WEBPACK_IMPORTED_MODULE_1__setup_js__ = __webpack_require__(1);
          var __WEBPACK_IMPORTED_MODULE_2__getByteLength_js__ = __webpack_require__(78);
          var __WEBPACK_IMPORTED_MODULE_3__isTypedArray_js__ = __webpack_require__(116);
          var __WEBPACK_IMPORTED_MODULE_4__isFunction_js__ = __webpack_require__(13);
          var __WEBPACK_IMPORTED_MODULE_5__stringTagBug_js__ = __webpack_require__(45);
          var __WEBPACK_IMPORTED_MODULE_6__isDataView_js__ = __webpack_require__(76);
          var __WEBPACK_IMPORTED_MODULE_7__keys_js__ = __webpack_require__(4);
          var __WEBPACK_IMPORTED_MODULE_8__has_js__ = __webpack_require__(22);
          var __WEBPACK_IMPORTED_MODULE_9__toBufferView_js__ = __webpack_require__(205);
          var tagDataView = "[object DataView]";
          function eq(a, b, aStack, bStack) {
            if (a === b)
              return a !== 0 || 1 / a === 1 / b;
            if (a == null || b == null)
              return false;
            if (a !== a)
              return b !== b;
            var type = typeof a;
            if (type !== "function" && type !== "object" && typeof b != "object")
              return false;
            return deepEq(a, b, aStack, bStack);
          }
          function deepEq(a, b, aStack, bStack) {
            if (a instanceof __WEBPACK_IMPORTED_MODULE_0__underscore_js__[
              "a"
              /* default */
            ])
              a = a._wrapped;
            if (b instanceof __WEBPACK_IMPORTED_MODULE_0__underscore_js__[
              "a"
              /* default */
            ])
              b = b._wrapped;
            var className = __WEBPACK_IMPORTED_MODULE_1__setup_js__[
              "t"
              /* toString */
            ].call(a);
            if (className !== __WEBPACK_IMPORTED_MODULE_1__setup_js__[
              "t"
              /* toString */
            ].call(b))
              return false;
            if (__WEBPACK_IMPORTED_MODULE_5__stringTagBug_js__[
              "a"
              /* hasStringTagBug */
            ] && className == "[object Object]" && Object(__WEBPACK_IMPORTED_MODULE_6__isDataView_js__[
              "a"
              /* default */
            ])(a)) {
              if (!Object(__WEBPACK_IMPORTED_MODULE_6__isDataView_js__[
                "a"
                /* default */
              ])(b))
                return false;
              className = tagDataView;
            }
            switch (className) {
              case "[object RegExp]":
              case "[object String]":
                return "" + a === "" + b;
              case "[object Number]":
                if (+a !== +a)
                  return +b !== +b;
                return +a === 0 ? 1 / +a === 1 / b : +a === +b;
              case "[object Date]":
              case "[object Boolean]":
                return +a === +b;
              case "[object Symbol]":
                return __WEBPACK_IMPORTED_MODULE_1__setup_js__[
                  "d"
                  /* SymbolProto */
                ].valueOf.call(a) === __WEBPACK_IMPORTED_MODULE_1__setup_js__[
                  "d"
                  /* SymbolProto */
                ].valueOf.call(b);
              case "[object ArrayBuffer]":
              case tagDataView:
                return deepEq(Object(__WEBPACK_IMPORTED_MODULE_9__toBufferView_js__[
                  "a"
                  /* default */
                ])(a), Object(__WEBPACK_IMPORTED_MODULE_9__toBufferView_js__[
                  "a"
                  /* default */
                ])(b), aStack, bStack);
            }
            var areArrays = className === "[object Array]";
            if (!areArrays && Object(__WEBPACK_IMPORTED_MODULE_3__isTypedArray_js__[
              "a"
              /* default */
            ])(a)) {
              var byteLength = Object(__WEBPACK_IMPORTED_MODULE_2__getByteLength_js__[
                "a"
                /* default */
              ])(a);
              if (byteLength !== Object(__WEBPACK_IMPORTED_MODULE_2__getByteLength_js__[
                "a"
                /* default */
              ])(b))
                return false;
              if (a.buffer === b.buffer && a.byteOffset === b.byteOffset)
                return true;
              areArrays = true;
            }
            if (!areArrays) {
              if (typeof a != "object" || typeof b != "object")
                return false;
              var aCtor = a.constructor, bCtor = b.constructor;
              if (aCtor !== bCtor && !(Object(__WEBPACK_IMPORTED_MODULE_4__isFunction_js__[
                "a"
                /* default */
              ])(aCtor) && aCtor instanceof aCtor && Object(__WEBPACK_IMPORTED_MODULE_4__isFunction_js__[
                "a"
                /* default */
              ])(bCtor) && bCtor instanceof bCtor) && ("constructor" in a && "constructor" in b)) {
                return false;
              }
            }
            aStack = aStack || [];
            bStack = bStack || [];
            var length = aStack.length;
            while (length--) {
              if (aStack[length] === a)
                return bStack[length] === b;
            }
            aStack.push(a);
            bStack.push(b);
            if (areArrays) {
              length = a.length;
              if (length !== b.length)
                return false;
              while (length--) {
                if (!eq(a[length], b[length], aStack, bStack))
                  return false;
              }
            } else {
              var _keys = Object(__WEBPACK_IMPORTED_MODULE_7__keys_js__[
                "a"
                /* default */
              ])(a), key;
              length = _keys.length;
              if (Object(__WEBPACK_IMPORTED_MODULE_7__keys_js__[
                "a"
                /* default */
              ])(b).length !== length)
                return false;
              while (length--) {
                key = _keys[length];
                if (!(Object(__WEBPACK_IMPORTED_MODULE_8__has_js__[
                  "a"
                  /* default */
                ])(b, key) && eq(a[key], b[key], aStack, bStack)))
                  return false;
              }
            }
            aStack.pop();
            bStack.pop();
            return true;
          }
          function isEqual(a, b) {
            return eq(a, b);
          }
        },
        /* 205 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = toBufferView;
          var __WEBPACK_IMPORTED_MODULE_0__getByteLength_js__ = __webpack_require__(78);
          function toBufferView(bufferSource) {
            return new Uint8Array(
              bufferSource.buffer || bufferSource,
              bufferSource.byteOffset || 0,
              Object(__WEBPACK_IMPORTED_MODULE_0__getByteLength_js__[
                "a"
                /* default */
              ])(bufferSource)
            );
          }
        },
        /* 206 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
          var __WEBPACK_IMPORTED_MODULE_1__stringTagBug_js__ = __webpack_require__(45);
          var __WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__ = __webpack_require__(79);
          __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_1__stringTagBug_js__[
            "b"
            /* isIE11 */
          ] ? Object(__WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__[
            "a"
            /* ie11fingerprint */
          ])(__WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__[
            "b"
            /* mapMethods */
          ]) : Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__[
            "a"
            /* default */
          ])("Map");
        },
        /* 207 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
          var __WEBPACK_IMPORTED_MODULE_1__stringTagBug_js__ = __webpack_require__(45);
          var __WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__ = __webpack_require__(79);
          __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_1__stringTagBug_js__[
            "b"
            /* isIE11 */
          ] ? Object(__WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__[
            "a"
            /* ie11fingerprint */
          ])(__WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__[
            "d"
            /* weakMapMethods */
          ]) : Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__[
            "a"
            /* default */
          ])("WeakMap");
        },
        /* 208 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
          var __WEBPACK_IMPORTED_MODULE_1__stringTagBug_js__ = __webpack_require__(45);
          var __WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__ = __webpack_require__(79);
          __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_1__stringTagBug_js__[
            "b"
            /* isIE11 */
          ] ? Object(__WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__[
            "a"
            /* ie11fingerprint */
          ])(__WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__[
            "c"
            /* setMethods */
          ]) : Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__[
            "a"
            /* default */
          ])("Set");
        },
        /* 209 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(5);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__[
            "a"
            /* default */
          ])("WeakSet");
        },
        /* 210 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = pairs;
          var __WEBPACK_IMPORTED_MODULE_0__keys_js__ = __webpack_require__(4);
          function pairs(obj) {
            var _keys = Object(__WEBPACK_IMPORTED_MODULE_0__keys_js__[
              "a"
              /* default */
            ])(obj);
            var length = _keys.length;
            var pairs2 = Array(length);
            for (var i2 = 0; i2 < length; i2++) {
              pairs2[i2] = [_keys[i2], obj[_keys[i2]]];
            }
            return pairs2;
          }
        },
        /* 211 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = create;
          var __WEBPACK_IMPORTED_MODULE_0__baseCreate_js__ = __webpack_require__(126);
          var __WEBPACK_IMPORTED_MODULE_1__extendOwn_js__ = __webpack_require__(81);
          function create(prototype, props) {
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__baseCreate_js__[
              "a"
              /* default */
            ])(prototype);
            if (props)
              Object(__WEBPACK_IMPORTED_MODULE_1__extendOwn_js__[
                "a"
                /* default */
              ])(result, props);
            return result;
          }
        },
        /* 212 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = tap;
          function tap(obj, interceptor) {
            interceptor(obj);
            return obj;
          }
        },
        /* 213 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = has;
          var __WEBPACK_IMPORTED_MODULE_0__has_js__ = __webpack_require__(22);
          var __WEBPACK_IMPORTED_MODULE_1__toPath_js__ = __webpack_require__(47);
          function has(obj, path) {
            path = Object(__WEBPACK_IMPORTED_MODULE_1__toPath_js__[
              "a"
              /* default */
            ])(path);
            var length = path.length;
            for (var i2 = 0; i2 < length; i2++) {
              var key = path[i2];
              if (!Object(__WEBPACK_IMPORTED_MODULE_0__has_js__[
                "a"
                /* default */
              ])(obj, key))
                return false;
              obj = obj[key];
            }
            return !!length;
          }
        },
        /* 214 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = mapObject;
          var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(8);
          var __WEBPACK_IMPORTED_MODULE_1__keys_js__ = __webpack_require__(4);
          function mapObject(obj, iteratee, context) {
            iteratee = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__[
              "a"
              /* default */
            ])(iteratee, context);
            var _keys = Object(__WEBPACK_IMPORTED_MODULE_1__keys_js__[
              "a"
              /* default */
            ])(obj), length = _keys.length, results = {};
            for (var index = 0; index < length; index++) {
              var currentKey = _keys[index];
              results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
            }
            return results;
          }
        },
        /* 215 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = propertyOf;
          var __WEBPACK_IMPORTED_MODULE_0__noop_js__ = __webpack_require__(132);
          var __WEBPACK_IMPORTED_MODULE_1__get_js__ = __webpack_require__(128);
          function propertyOf(obj) {
            if (obj == null)
              return __WEBPACK_IMPORTED_MODULE_0__noop_js__[
                "a"
                /* default */
              ];
            return function(path) {
              return Object(__WEBPACK_IMPORTED_MODULE_1__get_js__[
                "a"
                /* default */
              ])(obj, path);
            };
          }
        },
        /* 216 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = times;
          var __WEBPACK_IMPORTED_MODULE_0__optimizeCb_js__ = __webpack_require__(48);
          function times(n2, iteratee, context) {
            var accum = Array(Math.max(0, n2));
            iteratee = Object(__WEBPACK_IMPORTED_MODULE_0__optimizeCb_js__[
              "a"
              /* default */
            ])(iteratee, context, 1);
            for (var i2 = 0; i2 < n2; i2++)
              accum[i2] = iteratee(i2);
            return accum;
          }
        },
        /* 217 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__createEscaper_js__ = __webpack_require__(134);
          var __WEBPACK_IMPORTED_MODULE_1__escapeMap_js__ = __webpack_require__(135);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__createEscaper_js__[
            "a"
            /* default */
          ])(__WEBPACK_IMPORTED_MODULE_1__escapeMap_js__[
            "a"
            /* default */
          ]);
        },
        /* 218 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__createEscaper_js__ = __webpack_require__(134);
          var __WEBPACK_IMPORTED_MODULE_1__unescapeMap_js__ = __webpack_require__(219);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__createEscaper_js__[
            "a"
            /* default */
          ])(__WEBPACK_IMPORTED_MODULE_1__unescapeMap_js__[
            "a"
            /* default */
          ]);
        },
        /* 219 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__invert_js__ = __webpack_require__(122);
          var __WEBPACK_IMPORTED_MODULE_1__escapeMap_js__ = __webpack_require__(135);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__invert_js__[
            "a"
            /* default */
          ])(__WEBPACK_IMPORTED_MODULE_1__escapeMap_js__[
            "a"
            /* default */
          ]);
        },
        /* 220 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = template;
          var __WEBPACK_IMPORTED_MODULE_0__defaults_js__ = __webpack_require__(125);
          var __WEBPACK_IMPORTED_MODULE_1__underscore_js__ = __webpack_require__(10);
          __webpack_require__(136);
          var noMatch = /(.)^/;
          var escapes = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
          };
          var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;
          function escapeChar(match) {
            return "\\" + escapes[match];
          }
          var bareIdentifier = /^\s*(\w|\$)+\s*$/;
          function template(text, settings, oldSettings) {
            if (!settings && oldSettings)
              settings = oldSettings;
            settings = Object(__WEBPACK_IMPORTED_MODULE_0__defaults_js__[
              "a"
              /* default */
            ])({}, settings, __WEBPACK_IMPORTED_MODULE_1__underscore_js__[
              "a"
              /* default */
            ].templateSettings);
            var matcher = RegExp([
              (settings.escape || noMatch).source,
              (settings.interpolate || noMatch).source,
              (settings.evaluate || noMatch).source
            ].join("|") + "|$", "g");
            var index = 0;
            var source = "__p+='";
            text.replace(matcher, function(match, escape2, interpolate, evaluate, offset) {
              source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
              index = offset + match.length;
              if (escape2) {
                source += "'+\n((__t=(" + escape2 + "))==null?'':_.escape(__t))+\n'";
              } else if (interpolate) {
                source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
              } else if (evaluate) {
                source += "';\n" + evaluate + "\n__p+='";
              }
              return match;
            });
            source += "';\n";
            var argument = settings.variable;
            if (argument) {
              if (!bareIdentifier.test(argument))
                throw new Error(argument);
            } else {
              source = "with(obj||{}){\n" + source + "}\n";
              argument = "obj";
            }
            source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
            var render;
            try {
              render = new Function(argument, "_", source);
            } catch (e2) {
              e2.source = source;
              throw e2;
            }
            var template2 = function(data2) {
              return render.call(this, data2, __WEBPACK_IMPORTED_MODULE_1__underscore_js__[
                "a"
                /* default */
              ]);
            };
            template2.source = "function(" + argument + "){\n" + source + "}";
            return template2;
          }
        },
        /* 221 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = result;
          var __WEBPACK_IMPORTED_MODULE_0__isFunction_js__ = __webpack_require__(13);
          var __WEBPACK_IMPORTED_MODULE_1__toPath_js__ = __webpack_require__(47);
          function result(obj, path, fallback) {
            path = Object(__WEBPACK_IMPORTED_MODULE_1__toPath_js__[
              "a"
              /* default */
            ])(path);
            var length = path.length;
            if (!length) {
              return Object(__WEBPACK_IMPORTED_MODULE_0__isFunction_js__[
                "a"
                /* default */
              ])(fallback) ? fallback.call(obj) : fallback;
            }
            for (var i2 = 0; i2 < length; i2++) {
              var prop = obj == null ? void 0 : obj[path[i2]];
              if (prop === void 0) {
                prop = fallback;
                i2 = length;
              }
              obj = Object(__WEBPACK_IMPORTED_MODULE_0__isFunction_js__[
                "a"
                /* default */
              ])(prop) ? prop.call(obj) : prop;
            }
            return obj;
          }
        },
        /* 222 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = uniqueId;
          var idCounter = 0;
          function uniqueId(prefix) {
            var id = ++idCounter + "";
            return prefix ? prefix + id : id;
          }
        },
        /* 223 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = chain;
          var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(10);
          function chain(obj) {
            var instance = Object(__WEBPACK_IMPORTED_MODULE_0__underscore_js__[
              "a"
              /* default */
            ])(obj);
            instance._chain = true;
            return instance;
          }
        },
        /* 224 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
          var __WEBPACK_IMPORTED_MODULE_1__flatten_js__ = __webpack_require__(34);
          var __WEBPACK_IMPORTED_MODULE_2__bind_js__ = __webpack_require__(138);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__[
            "a"
            /* default */
          ])(function(obj, keys) {
            keys = Object(__WEBPACK_IMPORTED_MODULE_1__flatten_js__[
              "a"
              /* default */
            ])(keys, false, false);
            var index = keys.length;
            if (index < 1)
              throw new Error("bindAll must be passed function names");
            while (index--) {
              var key = keys[index];
              obj[key] = Object(__WEBPACK_IMPORTED_MODULE_2__bind_js__[
                "a"
                /* default */
              ])(obj[key], obj);
            }
            return obj;
          });
        },
        /* 225 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = memoize;
          var __WEBPACK_IMPORTED_MODULE_0__has_js__ = __webpack_require__(22);
          function memoize(func, hasher) {
            var memoize2 = function(key) {
              var cache = memoize2.cache;
              var address = "" + (hasher ? hasher.apply(this, arguments) : key);
              if (!Object(__WEBPACK_IMPORTED_MODULE_0__has_js__[
                "a"
                /* default */
              ])(cache, address))
                cache[address] = func.apply(this, arguments);
              return cache[address];
            };
            memoize2.cache = {};
            return memoize2;
          }
        },
        /* 226 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__partial_js__ = __webpack_require__(58);
          var __WEBPACK_IMPORTED_MODULE_1__delay_js__ = __webpack_require__(139);
          var __WEBPACK_IMPORTED_MODULE_2__underscore_js__ = __webpack_require__(10);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__partial_js__[
            "a"
            /* default */
          ])(__WEBPACK_IMPORTED_MODULE_1__delay_js__[
            "a"
            /* default */
          ], __WEBPACK_IMPORTED_MODULE_2__underscore_js__[
            "a"
            /* default */
          ], 1);
        },
        /* 227 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = throttle;
          var __WEBPACK_IMPORTED_MODULE_0__now_js__ = __webpack_require__(85);
          function throttle(func, wait, options) {
            var timeout, context, args, result;
            var previous = 0;
            if (!options)
              options = {};
            var later = function() {
              previous = options.leading === false ? 0 : Object(__WEBPACK_IMPORTED_MODULE_0__now_js__[
                "a"
                /* default */
              ])();
              timeout = null;
              result = func.apply(context, args);
              if (!timeout)
                context = args = null;
            };
            var throttled = function() {
              var _now = Object(__WEBPACK_IMPORTED_MODULE_0__now_js__[
                "a"
                /* default */
              ])();
              if (!previous && options.leading === false)
                previous = _now;
              var remaining = wait - (_now - previous);
              context = this;
              args = arguments;
              if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                  clearTimeout(timeout);
                  timeout = null;
                }
                previous = _now;
                result = func.apply(context, args);
                if (!timeout)
                  context = args = null;
              } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
              }
              return result;
            };
            throttled.cancel = function() {
              clearTimeout(timeout);
              previous = 0;
              timeout = context = args = null;
            };
            return throttled;
          }
        },
        /* 228 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = debounce;
          var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
          var __WEBPACK_IMPORTED_MODULE_1__now_js__ = __webpack_require__(85);
          function debounce(func, wait, immediate) {
            var timeout, previous, args, result, context;
            var later = function() {
              var passed = Object(__WEBPACK_IMPORTED_MODULE_1__now_js__[
                "a"
                /* default */
              ])() - previous;
              if (wait > passed) {
                timeout = setTimeout(later, wait - passed);
              } else {
                timeout = null;
                if (!immediate)
                  result = func.apply(context, args);
                if (!timeout)
                  args = context = null;
              }
            };
            var debounced = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__[
              "a"
              /* default */
            ])(function(_args) {
              context = this;
              args = _args;
              previous = Object(__WEBPACK_IMPORTED_MODULE_1__now_js__[
                "a"
                /* default */
              ])();
              if (!timeout) {
                timeout = setTimeout(later, wait);
                if (immediate)
                  result = func.apply(context, args);
              }
              return result;
            });
            debounced.cancel = function() {
              clearTimeout(timeout);
              timeout = args = context = null;
            };
            return debounced;
          }
        },
        /* 229 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = wrap;
          var __WEBPACK_IMPORTED_MODULE_0__partial_js__ = __webpack_require__(58);
          function wrap(func, wrapper) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__partial_js__[
              "a"
              /* default */
            ])(wrapper, func);
          }
        },
        /* 230 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = compose;
          function compose() {
            var args = arguments;
            var start = args.length - 1;
            return function() {
              var i2 = start;
              var result = args[start].apply(this, arguments);
              while (i2--)
                result = args[i2].call(this, result);
              return result;
            };
          }
        },
        /* 231 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = after;
          function after(times, func) {
            return function() {
              if (--times < 1) {
                return func.apply(this, arguments);
              }
            };
          }
        },
        /* 232 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__partial_js__ = __webpack_require__(58);
          var __WEBPACK_IMPORTED_MODULE_1__before_js__ = __webpack_require__(140);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__partial_js__[
            "a"
            /* default */
          ])(__WEBPACK_IMPORTED_MODULE_1__before_js__[
            "a"
            /* default */
          ], 2);
        },
        /* 233 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__findLastIndex_js__ = __webpack_require__(143);
          var __WEBPACK_IMPORTED_MODULE_1__createIndexFinder_js__ = __webpack_require__(146);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_1__createIndexFinder_js__[
            "a"
            /* default */
          ])(-1, __WEBPACK_IMPORTED_MODULE_0__findLastIndex_js__[
            "a"
            /* default */
          ]);
        },
        /* 234 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = findWhere;
          var __WEBPACK_IMPORTED_MODULE_0__find_js__ = __webpack_require__(147);
          var __WEBPACK_IMPORTED_MODULE_1__matcher_js__ = __webpack_require__(57);
          function findWhere(obj, attrs) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__find_js__[
              "a"
              /* default */
            ])(obj, Object(__WEBPACK_IMPORTED_MODULE_1__matcher_js__[
              "a"
              /* default */
            ])(attrs));
          }
        },
        /* 235 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__createReduce_js__ = __webpack_require__(148);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__createReduce_js__[
            "a"
            /* default */
          ])(1);
        },
        /* 236 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__createReduce_js__ = __webpack_require__(148);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__createReduce_js__[
            "a"
            /* default */
          ])(-1);
        },
        /* 237 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = reject;
          var __WEBPACK_IMPORTED_MODULE_0__filter_js__ = __webpack_require__(49);
          var __WEBPACK_IMPORTED_MODULE_1__negate_js__ = __webpack_require__(86);
          var __WEBPACK_IMPORTED_MODULE_2__cb_js__ = __webpack_require__(8);
          function reject(obj, predicate, context) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__filter_js__[
              "a"
              /* default */
            ])(obj, Object(__WEBPACK_IMPORTED_MODULE_1__negate_js__[
              "a"
              /* default */
            ])(Object(__WEBPACK_IMPORTED_MODULE_2__cb_js__[
              "a"
              /* default */
            ])(predicate)), context);
          }
        },
        /* 238 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = every;
          var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(8);
          var __WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__ = __webpack_require__(11);
          var __WEBPACK_IMPORTED_MODULE_2__keys_js__ = __webpack_require__(4);
          function every(obj, predicate, context) {
            predicate = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__[
              "a"
              /* default */
            ])(predicate, context);
            var _keys = !Object(__WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__[
              "a"
              /* default */
            ])(obj) && Object(__WEBPACK_IMPORTED_MODULE_2__keys_js__[
              "a"
              /* default */
            ])(obj), length = (_keys || obj).length;
            for (var index = 0; index < length; index++) {
              var currentKey = _keys ? _keys[index] : index;
              if (!predicate(obj[currentKey], currentKey, obj))
                return false;
            }
            return true;
          }
        },
        /* 239 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = some;
          var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(8);
          var __WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__ = __webpack_require__(11);
          var __WEBPACK_IMPORTED_MODULE_2__keys_js__ = __webpack_require__(4);
          function some(obj, predicate, context) {
            predicate = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__[
              "a"
              /* default */
            ])(predicate, context);
            var _keys = !Object(__WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__[
              "a"
              /* default */
            ])(obj) && Object(__WEBPACK_IMPORTED_MODULE_2__keys_js__[
              "a"
              /* default */
            ])(obj), length = (_keys || obj).length;
            for (var index = 0; index < length; index++) {
              var currentKey = _keys ? _keys[index] : index;
              if (predicate(obj[currentKey], currentKey, obj))
                return true;
            }
            return false;
          }
        },
        /* 240 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
          var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(13);
          var __WEBPACK_IMPORTED_MODULE_2__map_js__ = __webpack_require__(35);
          var __WEBPACK_IMPORTED_MODULE_3__deepGet_js__ = __webpack_require__(82);
          var __WEBPACK_IMPORTED_MODULE_4__toPath_js__ = __webpack_require__(47);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__[
            "a"
            /* default */
          ])(function(obj, path, args) {
            var contextPath, func;
            if (Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__[
              "a"
              /* default */
            ])(path)) {
              func = path;
            } else {
              path = Object(__WEBPACK_IMPORTED_MODULE_4__toPath_js__[
                "a"
                /* default */
              ])(path);
              contextPath = path.slice(0, -1);
              path = path[path.length - 1];
            }
            return Object(__WEBPACK_IMPORTED_MODULE_2__map_js__[
              "a"
              /* default */
            ])(obj, function(context) {
              var method = func;
              if (!method) {
                if (contextPath && contextPath.length) {
                  context = Object(__WEBPACK_IMPORTED_MODULE_3__deepGet_js__[
                    "a"
                    /* default */
                  ])(context, contextPath);
                }
                if (context == null)
                  return void 0;
                method = context[path];
              }
              return method == null ? method : method.apply(context, args);
            });
          });
        },
        /* 241 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = where;
          var __WEBPACK_IMPORTED_MODULE_0__filter_js__ = __webpack_require__(49);
          var __WEBPACK_IMPORTED_MODULE_1__matcher_js__ = __webpack_require__(57);
          function where(obj, attrs) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__filter_js__[
              "a"
              /* default */
            ])(obj, Object(__WEBPACK_IMPORTED_MODULE_1__matcher_js__[
              "a"
              /* default */
            ])(attrs));
          }
        },
        /* 242 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = min;
          var __WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__ = __webpack_require__(11);
          var __WEBPACK_IMPORTED_MODULE_1__values_js__ = __webpack_require__(33);
          var __WEBPACK_IMPORTED_MODULE_2__cb_js__ = __webpack_require__(8);
          var __WEBPACK_IMPORTED_MODULE_3__each_js__ = __webpack_require__(28);
          function min(obj, iteratee, context) {
            var result = Infinity, lastComputed = Infinity, value, computed;
            if (iteratee == null || typeof iteratee == "number" && typeof obj[0] != "object" && obj != null) {
              obj = Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__[
                "a"
                /* default */
              ])(obj) ? obj : Object(__WEBPACK_IMPORTED_MODULE_1__values_js__[
                "a"
                /* default */
              ])(obj);
              for (var i2 = 0, length = obj.length; i2 < length; i2++) {
                value = obj[i2];
                if (value != null && value < result) {
                  result = value;
                }
              }
            } else {
              iteratee = Object(__WEBPACK_IMPORTED_MODULE_2__cb_js__[
                "a"
                /* default */
              ])(iteratee, context);
              Object(__WEBPACK_IMPORTED_MODULE_3__each_js__[
                "a"
                /* default */
              ])(obj, function(v, index, list) {
                computed = iteratee(v, index, list);
                if (computed < lastComputed || computed === Infinity && result === Infinity) {
                  result = v;
                  lastComputed = computed;
                }
              });
            }
            return result;
          }
        },
        /* 243 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = shuffle;
          var __WEBPACK_IMPORTED_MODULE_0__sample_js__ = __webpack_require__(150);
          function shuffle(obj) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__sample_js__[
              "a"
              /* default */
            ])(obj, Infinity);
          }
        },
        /* 244 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = sortBy;
          var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(8);
          var __WEBPACK_IMPORTED_MODULE_1__pluck_js__ = __webpack_require__(88);
          var __WEBPACK_IMPORTED_MODULE_2__map_js__ = __webpack_require__(35);
          function sortBy(obj, iteratee, context) {
            var index = 0;
            iteratee = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__[
              "a"
              /* default */
            ])(iteratee, context);
            return Object(__WEBPACK_IMPORTED_MODULE_1__pluck_js__[
              "a"
              /* default */
            ])(Object(__WEBPACK_IMPORTED_MODULE_2__map_js__[
              "a"
              /* default */
            ])(obj, function(value, key, list) {
              return {
                value,
                index: index++,
                criteria: iteratee(value, key, list)
              };
            }).sort(function(left, right) {
              var a = left.criteria;
              var b = right.criteria;
              if (a !== b) {
                if (a > b || a === void 0)
                  return 1;
                if (a < b || b === void 0)
                  return -1;
              }
              return left.index - right.index;
            }), "value");
          }
        },
        /* 245 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__group_js__ = __webpack_require__(59);
          var __WEBPACK_IMPORTED_MODULE_1__has_js__ = __webpack_require__(22);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__group_js__[
            "a"
            /* default */
          ])(function(result, value, key) {
            if (Object(__WEBPACK_IMPORTED_MODULE_1__has_js__[
              "a"
              /* default */
            ])(result, key))
              result[key].push(value);
            else
              result[key] = [value];
          });
        },
        /* 246 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__group_js__ = __webpack_require__(59);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__group_js__[
            "a"
            /* default */
          ])(function(result, value, key) {
            result[key] = value;
          });
        },
        /* 247 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__group_js__ = __webpack_require__(59);
          var __WEBPACK_IMPORTED_MODULE_1__has_js__ = __webpack_require__(22);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__group_js__[
            "a"
            /* default */
          ])(function(result, value, key) {
            if (Object(__WEBPACK_IMPORTED_MODULE_1__has_js__[
              "a"
              /* default */
            ])(result, key))
              result[key]++;
            else
              result[key] = 1;
          });
        },
        /* 248 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__group_js__ = __webpack_require__(59);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__group_js__[
            "a"
            /* default */
          ])(function(result, value, pass) {
            result[pass ? 0 : 1].push(value);
          }, true);
        },
        /* 249 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = toArray;
          var __WEBPACK_IMPORTED_MODULE_0__isArray_js__ = __webpack_require__(27);
          var __WEBPACK_IMPORTED_MODULE_1__setup_js__ = __webpack_require__(1);
          var __WEBPACK_IMPORTED_MODULE_2__isString_js__ = __webpack_require__(75);
          var __WEBPACK_IMPORTED_MODULE_3__isArrayLike_js__ = __webpack_require__(11);
          var __WEBPACK_IMPORTED_MODULE_4__map_js__ = __webpack_require__(35);
          var __WEBPACK_IMPORTED_MODULE_5__identity_js__ = __webpack_require__(83);
          var __WEBPACK_IMPORTED_MODULE_6__values_js__ = __webpack_require__(33);
          var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
          function toArray(obj) {
            if (!obj)
              return [];
            if (Object(__WEBPACK_IMPORTED_MODULE_0__isArray_js__[
              "a"
              /* default */
            ])(obj))
              return __WEBPACK_IMPORTED_MODULE_1__setup_js__[
                "q"
                /* slice */
              ].call(obj);
            if (Object(__WEBPACK_IMPORTED_MODULE_2__isString_js__[
              "a"
              /* default */
            ])(obj)) {
              return obj.match(reStrSymbol);
            }
            if (Object(__WEBPACK_IMPORTED_MODULE_3__isArrayLike_js__[
              "a"
              /* default */
            ])(obj))
              return Object(__WEBPACK_IMPORTED_MODULE_4__map_js__[
                "a"
                /* default */
              ])(obj, __WEBPACK_IMPORTED_MODULE_5__identity_js__[
                "a"
                /* default */
              ]);
            return Object(__WEBPACK_IMPORTED_MODULE_6__values_js__[
              "a"
              /* default */
            ])(obj);
          }
        },
        /* 250 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = size;
          var __WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__ = __webpack_require__(11);
          var __WEBPACK_IMPORTED_MODULE_1__keys_js__ = __webpack_require__(4);
          function size(obj) {
            if (obj == null)
              return 0;
            return Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__[
              "a"
              /* default */
            ])(obj) ? obj.length : Object(__WEBPACK_IMPORTED_MODULE_1__keys_js__[
              "a"
              /* default */
            ])(obj).length;
          }
        },
        /* 251 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = keyInObj;
          function keyInObj(value, key, obj) {
            return key in obj;
          }
        },
        /* 252 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
          var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(13);
          var __WEBPACK_IMPORTED_MODULE_2__negate_js__ = __webpack_require__(86);
          var __WEBPACK_IMPORTED_MODULE_3__map_js__ = __webpack_require__(35);
          var __WEBPACK_IMPORTED_MODULE_4__flatten_js__ = __webpack_require__(34);
          var __WEBPACK_IMPORTED_MODULE_5__contains_js__ = __webpack_require__(50);
          var __WEBPACK_IMPORTED_MODULE_6__pick_js__ = __webpack_require__(151);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__[
            "a"
            /* default */
          ])(function(obj, keys) {
            var iteratee = keys[0], context;
            if (Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__[
              "a"
              /* default */
            ])(iteratee)) {
              iteratee = Object(__WEBPACK_IMPORTED_MODULE_2__negate_js__[
                "a"
                /* default */
              ])(iteratee);
              if (keys.length > 1)
                context = keys[1];
            } else {
              keys = Object(__WEBPACK_IMPORTED_MODULE_3__map_js__[
                "a"
                /* default */
              ])(Object(__WEBPACK_IMPORTED_MODULE_4__flatten_js__[
                "a"
                /* default */
              ])(keys, false, false), String);
              iteratee = function(value, key) {
                return !Object(__WEBPACK_IMPORTED_MODULE_5__contains_js__[
                  "a"
                  /* default */
                ])(keys, key);
              };
            }
            return Object(__WEBPACK_IMPORTED_MODULE_6__pick_js__[
              "a"
              /* default */
            ])(obj, iteratee, context);
          });
        },
        /* 253 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = first;
          var __WEBPACK_IMPORTED_MODULE_0__initial_js__ = __webpack_require__(152);
          function first(array, n2, guard) {
            if (array == null || array.length < 1)
              return n2 == null || guard ? void 0 : [];
            if (n2 == null || guard)
              return array[0];
            return Object(__WEBPACK_IMPORTED_MODULE_0__initial_js__[
              "a"
              /* default */
            ])(array, array.length - n2);
          }
        },
        /* 254 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = last;
          var __WEBPACK_IMPORTED_MODULE_0__rest_js__ = __webpack_require__(153);
          function last(array, n2, guard) {
            if (array == null || array.length < 1)
              return n2 == null || guard ? void 0 : [];
            if (n2 == null || guard)
              return array[array.length - 1];
            return Object(__WEBPACK_IMPORTED_MODULE_0__rest_js__[
              "a"
              /* default */
            ])(array, Math.max(0, array.length - n2));
          }
        },
        /* 255 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = compact;
          var __WEBPACK_IMPORTED_MODULE_0__filter_js__ = __webpack_require__(49);
          function compact(array) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__filter_js__[
              "a"
              /* default */
            ])(array, Boolean);
          }
        },
        /* 256 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = flatten;
          var __WEBPACK_IMPORTED_MODULE_0__flatten_js__ = __webpack_require__(34);
          function flatten(array, depth) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__flatten_js__[
              "a"
              /* default */
            ])(array, depth, false);
          }
        },
        /* 257 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
          var __WEBPACK_IMPORTED_MODULE_1__difference_js__ = __webpack_require__(154);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__[
            "a"
            /* default */
          ])(function(array, otherArrays) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__difference_js__[
              "a"
              /* default */
            ])(array, otherArrays);
          });
        },
        /* 258 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
          var __WEBPACK_IMPORTED_MODULE_1__uniq_js__ = __webpack_require__(155);
          var __WEBPACK_IMPORTED_MODULE_2__flatten_js__ = __webpack_require__(34);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__[
            "a"
            /* default */
          ])(function(arrays) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__uniq_js__[
              "a"
              /* default */
            ])(Object(__WEBPACK_IMPORTED_MODULE_2__flatten_js__[
              "a"
              /* default */
            ])(arrays, true, true));
          });
        },
        /* 259 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = intersection;
          var __WEBPACK_IMPORTED_MODULE_0__getLength_js__ = __webpack_require__(14);
          var __WEBPACK_IMPORTED_MODULE_1__contains_js__ = __webpack_require__(50);
          function intersection(array) {
            var result = [];
            var argsLength = arguments.length;
            for (var i2 = 0, length = Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__[
              "a"
              /* default */
            ])(array); i2 < length; i2++) {
              var item = array[i2];
              if (Object(__WEBPACK_IMPORTED_MODULE_1__contains_js__[
                "a"
                /* default */
              ])(result, item))
                continue;
              var j;
              for (j = 1; j < argsLength; j++) {
                if (!Object(__WEBPACK_IMPORTED_MODULE_1__contains_js__[
                  "a"
                  /* default */
                ])(arguments[j], item))
                  break;
              }
              if (j === argsLength)
                result.push(item);
            }
            return result;
          }
        },
        /* 260 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(9);
          var __WEBPACK_IMPORTED_MODULE_1__unzip_js__ = __webpack_require__(156);
          __webpack_exports__["a"] = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__[
            "a"
            /* default */
          ])(__WEBPACK_IMPORTED_MODULE_1__unzip_js__[
            "a"
            /* default */
          ]);
        },
        /* 261 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = object;
          var __WEBPACK_IMPORTED_MODULE_0__getLength_js__ = __webpack_require__(14);
          function object(list, values) {
            var result = {};
            for (var i2 = 0, length = Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__[
              "a"
              /* default */
            ])(list); i2 < length; i2++) {
              if (values) {
                result[list[i2]] = values[i2];
              } else {
                result[list[i2][0]] = list[i2][1];
              }
            }
            return result;
          }
        },
        /* 262 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = range;
          function range(start, stop, step) {
            if (stop == null) {
              stop = start || 0;
              start = 0;
            }
            if (!step) {
              step = stop < start ? -1 : 1;
            }
            var length = Math.max(Math.ceil((stop - start) / step), 0);
            var range2 = Array(length);
            for (var idx = 0; idx < length; idx++, start += step) {
              range2[idx] = start;
            }
            return range2;
          }
        },
        /* 263 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = chunk;
          var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(1);
          function chunk(array, count) {
            if (count == null || count < 1)
              return [];
            var result = [];
            var i2 = 0, length = array.length;
            while (i2 < length) {
              result.push(__WEBPACK_IMPORTED_MODULE_0__setup_js__[
                "q"
                /* slice */
              ].call(array, i2, i2 += count));
            }
            return result;
          }
        },
        /* 264 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          __webpack_exports__["a"] = mixin;
          var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(10);
          var __WEBPACK_IMPORTED_MODULE_1__each_js__ = __webpack_require__(28);
          var __WEBPACK_IMPORTED_MODULE_2__functions_js__ = __webpack_require__(123);
          var __WEBPACK_IMPORTED_MODULE_3__setup_js__ = __webpack_require__(1);
          var __WEBPACK_IMPORTED_MODULE_4__chainResult_js__ = __webpack_require__(157);
          function mixin(obj) {
            Object(__WEBPACK_IMPORTED_MODULE_1__each_js__[
              "a"
              /* default */
            ])(Object(__WEBPACK_IMPORTED_MODULE_2__functions_js__[
              "a"
              /* default */
            ])(obj), function(name2) {
              var func = __WEBPACK_IMPORTED_MODULE_0__underscore_js__[
                "a"
                /* default */
              ][name2] = obj[name2];
              __WEBPACK_IMPORTED_MODULE_0__underscore_js__[
                "a"
                /* default */
              ].prototype[name2] = function() {
                var args = [this._wrapped];
                __WEBPACK_IMPORTED_MODULE_3__setup_js__[
                  "o"
                  /* push */
                ].apply(args, arguments);
                return Object(__WEBPACK_IMPORTED_MODULE_4__chainResult_js__[
                  "a"
                  /* default */
                ])(this, func.apply(__WEBPACK_IMPORTED_MODULE_0__underscore_js__[
                  "a"
                  /* default */
                ], args));
              };
            });
            return __WEBPACK_IMPORTED_MODULE_0__underscore_js__[
              "a"
              /* default */
            ];
          }
        },
        /* 265 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(10);
          var __WEBPACK_IMPORTED_MODULE_1__each_js__ = __webpack_require__(28);
          var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(1);
          var __WEBPACK_IMPORTED_MODULE_3__chainResult_js__ = __webpack_require__(157);
          Object(__WEBPACK_IMPORTED_MODULE_1__each_js__[
            "a"
            /* default */
          ])(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(name2) {
            var method = __WEBPACK_IMPORTED_MODULE_2__setup_js__[
              "a"
              /* ArrayProto */
            ][name2];
            __WEBPACK_IMPORTED_MODULE_0__underscore_js__[
              "a"
              /* default */
            ].prototype[name2] = function() {
              var obj = this._wrapped;
              if (obj != null) {
                method.apply(obj, arguments);
                if ((name2 === "shift" || name2 === "splice") && obj.length === 0) {
                  delete obj[0];
                }
              }
              return Object(__WEBPACK_IMPORTED_MODULE_3__chainResult_js__[
                "a"
                /* default */
              ])(this, obj);
            };
          });
          Object(__WEBPACK_IMPORTED_MODULE_1__each_js__[
            "a"
            /* default */
          ])(["concat", "join", "slice"], function(name2) {
            var method = __WEBPACK_IMPORTED_MODULE_2__setup_js__[
              "a"
              /* ArrayProto */
            ][name2];
            __WEBPACK_IMPORTED_MODULE_0__underscore_js__[
              "a"
              /* default */
            ].prototype[name2] = function() {
              var obj = this._wrapped;
              if (obj != null)
                obj = method.apply(obj, arguments);
              return Object(__WEBPACK_IMPORTED_MODULE_3__chainResult_js__[
                "a"
                /* default */
              ])(this, obj);
            };
          });
          __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__underscore_js__[
            "a"
            /* default */
          ];
        },
        /* 266 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var core = __webpack_require__(2);
          var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
          module2.exports = function stringify(it) {
            return $JSON.stringify.apply($JSON, arguments);
          };
        },
        /* 267 */
        /***/
        function(module2, exports2, __webpack_require__) {
          __webpack_require__(268);
          module2.exports = __webpack_require__(2).Object.keys;
        },
        /* 268 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var toObject = __webpack_require__(44);
          var $keys = __webpack_require__(53);
          __webpack_require__(89)("keys", function() {
            return function keys(it) {
              return $keys(toObject(it));
            };
          });
        },
        /* 269 */
        /***/
        function(module2, exports2) {
          var getRandomValues = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
          if (getRandomValues) {
            var rnds8 = new Uint8Array(16);
            module2.exports = function whatwgRNG() {
              getRandomValues(rnds8);
              return rnds8;
            };
          } else {
            var rnds = new Array(16);
            module2.exports = function mathRNG() {
              for (var i2 = 0, r2; i2 < 16; i2++) {
                if ((i2 & 3) === 0)
                  r2 = Math.random() * 4294967296;
                rnds[i2] = r2 >>> ((i2 & 3) << 3) & 255;
              }
              return rnds;
            };
          }
        },
        /* 270 */
        /***/
        function(module2, exports2) {
          var byteToHex = [];
          for (var i2 = 0; i2 < 256; ++i2) {
            byteToHex[i2] = (i2 + 256).toString(16).substr(1);
          }
          function bytesToUuid(buf, offset) {
            var i3 = offset || 0;
            var bth = byteToHex;
            return [
              bth[buf[i3++]],
              bth[buf[i3++]],
              bth[buf[i3++]],
              bth[buf[i3++]],
              "-",
              bth[buf[i3++]],
              bth[buf[i3++]],
              "-",
              bth[buf[i3++]],
              bth[buf[i3++]],
              "-",
              bth[buf[i3++]],
              bth[buf[i3++]],
              "-",
              bth[buf[i3++]],
              bth[buf[i3++]],
              bth[buf[i3++]],
              bth[buf[i3++]],
              bth[buf[i3++]],
              bth[buf[i3++]]
            ].join("");
          }
          module2.exports = bytesToUuid;
        },
        /* 271 */
        /***/
        function(module2, exports2, __webpack_require__) {
          function setup(env) {
            createDebug.debug = createDebug;
            createDebug.default = createDebug;
            createDebug.coerce = coerce;
            createDebug.disable = disable;
            createDebug.enable = enable;
            createDebug.enabled = enabled;
            createDebug.humanize = __webpack_require__(272);
            Object.keys(env).forEach(function(key) {
              createDebug[key] = env[key];
            });
            createDebug.instances = [];
            createDebug.names = [];
            createDebug.skips = [];
            createDebug.formatters = {};
            function selectColor(namespace) {
              var hash = 0;
              for (var i2 = 0; i2 < namespace.length; i2++) {
                hash = (hash << 5) - hash + namespace.charCodeAt(i2);
                hash |= 0;
              }
              return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
            }
            createDebug.selectColor = selectColor;
            function createDebug(namespace) {
              var prevTime;
              function debug() {
                if (!debug.enabled) {
                  return;
                }
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                var self2 = debug;
                var curr = Number(/* @__PURE__ */ new Date());
                var ms = curr - (prevTime || curr);
                self2.diff = ms;
                self2.prev = prevTime;
                self2.curr = curr;
                prevTime = curr;
                args[0] = createDebug.coerce(args[0]);
                if (typeof args[0] !== "string") {
                  args.unshift("%O");
                }
                var index = 0;
                args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
                  if (match === "%%") {
                    return match;
                  }
                  index++;
                  var formatter = createDebug.formatters[format];
                  if (typeof formatter === "function") {
                    var val = args[index];
                    match = formatter.call(self2, val);
                    args.splice(index, 1);
                    index--;
                  }
                  return match;
                });
                createDebug.formatArgs.call(self2, args);
                var logFn = self2.log || createDebug.log;
                logFn.apply(self2, args);
              }
              debug.namespace = namespace;
              debug.enabled = createDebug.enabled(namespace);
              debug.useColors = createDebug.useColors();
              debug.color = selectColor(namespace);
              debug.destroy = destroy;
              debug.extend = extend;
              if (typeof createDebug.init === "function") {
                createDebug.init(debug);
              }
              createDebug.instances.push(debug);
              return debug;
            }
            function destroy() {
              var index = createDebug.instances.indexOf(this);
              if (index !== -1) {
                createDebug.instances.splice(index, 1);
                return true;
              }
              return false;
            }
            function extend(namespace, delimiter) {
              return createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
            }
            function enable(namespaces) {
              createDebug.save(namespaces);
              createDebug.names = [];
              createDebug.skips = [];
              var i2;
              var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
              var len = split.length;
              for (i2 = 0; i2 < len; i2++) {
                if (!split[i2]) {
                  continue;
                }
                namespaces = split[i2].replace(/\*/g, ".*?");
                if (namespaces[0] === "-") {
                  createDebug.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
                } else {
                  createDebug.names.push(new RegExp("^" + namespaces + "$"));
                }
              }
              for (i2 = 0; i2 < createDebug.instances.length; i2++) {
                var instance = createDebug.instances[i2];
                instance.enabled = createDebug.enabled(instance.namespace);
              }
            }
            function disable() {
              createDebug.enable("");
            }
            function enabled(name2) {
              if (name2[name2.length - 1] === "*") {
                return true;
              }
              var i2;
              var len;
              for (i2 = 0, len = createDebug.skips.length; i2 < len; i2++) {
                if (createDebug.skips[i2].test(name2)) {
                  return false;
                }
              }
              for (i2 = 0, len = createDebug.names.length; i2 < len; i2++) {
                if (createDebug.names[i2].test(name2)) {
                  return true;
                }
              }
              return false;
            }
            function coerce(val) {
              if (val instanceof Error) {
                return val.stack || val.message;
              }
              return val;
            }
            createDebug.enable(createDebug.load());
            return createDebug;
          }
          module2.exports = setup;
        },
        /* 272 */
        /***/
        function(module2, exports2) {
          var s = 1e3;
          var m = s * 60;
          var h = m * 60;
          var d2 = h * 24;
          var w = d2 * 7;
          var y = d2 * 365.25;
          module2.exports = function(val, options) {
            options = options || {};
            var type = typeof val;
            if (type === "string" && val.length > 0) {
              return parse(val);
            } else if (type === "number" && isFinite(val)) {
              return options.long ? fmtLong(val) : fmtShort(val);
            }
            throw new Error(
              "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
            );
          };
          function parse(str) {
            str = String(str);
            if (str.length > 100) {
              return;
            }
            var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
              str
            );
            if (!match) {
              return;
            }
            var n2 = parseFloat(match[1]);
            var type = (match[2] || "ms").toLowerCase();
            switch (type) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return n2 * y;
              case "weeks":
              case "week":
              case "w":
                return n2 * w;
              case "days":
              case "day":
              case "d":
                return n2 * d2;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return n2 * h;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return n2 * m;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return n2 * s;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return n2;
              default:
                return void 0;
            }
          }
          function fmtShort(ms) {
            var msAbs = Math.abs(ms);
            if (msAbs >= d2) {
              return Math.round(ms / d2) + "d";
            }
            if (msAbs >= h) {
              return Math.round(ms / h) + "h";
            }
            if (msAbs >= m) {
              return Math.round(ms / m) + "m";
            }
            if (msAbs >= s) {
              return Math.round(ms / s) + "s";
            }
            return ms + "ms";
          }
          function fmtLong(ms) {
            var msAbs = Math.abs(ms);
            if (msAbs >= d2) {
              return plural(ms, msAbs, d2, "day");
            }
            if (msAbs >= h) {
              return plural(ms, msAbs, h, "hour");
            }
            if (msAbs >= m) {
              return plural(ms, msAbs, m, "minute");
            }
            if (msAbs >= s) {
              return plural(ms, msAbs, s, "second");
            }
            return ms + " ms";
          }
          function plural(ms, msAbs, n2, name2) {
            var isPlural = msAbs >= n2 * 1.5;
            return Math.round(ms / n2) + " " + name2 + (isPlural ? "s" : "");
          }
        },
        /* 273 */
        /***/
        function(module2, exports2, __webpack_require__) {
          __webpack_require__(274);
          module2.exports = __webpack_require__(2).Object.getPrototypeOf;
        },
        /* 274 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var toObject = __webpack_require__(44);
          var $getPrototypeOf = __webpack_require__(101);
          __webpack_require__(89)("getPrototypeOf", function() {
            return function getPrototypeOf(it) {
              return $getPrototypeOf(toObject(it));
            };
          });
        },
        /* 275 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _defineProperty = __webpack_require__(90);
          var _defineProperty2 = _interopRequireDefault(_defineProperty);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var AV2 = __webpack_require__(36);
          var AppRouter = __webpack_require__(278);
          var _require = __webpack_require__(15), isNullOrUndefined = _require.isNullOrUndefined;
          var _require2 = __webpack_require__(0), extend = _require2.extend, isObject = _require2.isObject, isEmpty = _require2.isEmpty;
          var isCNApp = function isCNApp2(appId) {
            return appId.slice(-9) !== "-MdYXbMMI";
          };
          var fillServerURLs = function fillServerURLs2(url) {
            return {
              push: url,
              stats: url,
              engine: url,
              api: url,
              rtm: url
            };
          };
          function getDefaultServerURLs(appId) {
            if (isCNApp(appId)) {
              return {};
            }
            var id = appId.slice(0, 8).toLowerCase();
            var domain2 = "lncldglobal.com";
            return {
              push: "https://" + id + ".push." + domain2,
              stats: "https://" + id + ".stats." + domain2,
              engine: "https://" + id + ".engine." + domain2,
              api: "https://" + id + ".api." + domain2,
              rtm: "https://" + id + ".rtm." + domain2
            };
          }
          var _disableAppRouter = false;
          var _initialized = false;
          AV2.init = function init(options) {
            if (!isObject(options)) {
              return AV2.init({
                appId: options,
                appKey: arguments.length <= 1 ? void 0 : arguments[1],
                masterKey: arguments.length <= 2 ? void 0 : arguments[2]
              });
            }
            var appId = options.appId, appKey = options.appKey, masterKey = options.masterKey, hookKey = options.hookKey, serverURL = options.serverURL, _options$serverURLs = options.serverURLs, serverURLs = _options$serverURLs === void 0 ? serverURL : _options$serverURLs, disableCurrentUser = options.disableCurrentUser, production = options.production, realtime = options.realtime;
            if (_initialized)
              console.warn("Initializing LeanCloud Storage SDK which has already been initialized. Reinitializing the SDK might cause problems like unexpected cross-app data writing and invalid relations.");
            if (!appId)
              throw new TypeError("appId must be a string");
            if (!appKey)
              throw new TypeError("appKey must be a string");
            if (masterKey)
              console.warn("MasterKey is not supposed to be used at client side.");
            if (isCNApp(appId)) {
              if (!serverURLs && isEmpty(AV2._config.serverURLs)) {
                throw new TypeError("serverURL option is required for apps from CN region");
              }
            }
            if (appId !== AV2._config.applicationId) {
              AV2._config.masterKey = masterKey;
              AV2._config.hookKey = hookKey;
            } else {
              if (masterKey)
                AV2._config.masterKey = masterKey;
              if (hookKey)
                AV2._config.hookKey = hookKey;
            }
            AV2._config.applicationId = appId;
            AV2._config.applicationKey = appKey;
            if (!isNullOrUndefined(production)) {
              AV2.setProduction(production);
            }
            if (typeof disableCurrentUser !== "undefined")
              AV2._config.disableCurrentUser = disableCurrentUser;
            var disableAppRouter = _disableAppRouter || typeof serverURLs !== "undefined";
            if (!disableAppRouter) {
              AV2._appRouter = new AppRouter(AV2);
            }
            AV2._setServerURLs(extend({}, getDefaultServerURLs(appId), AV2._config.serverURLs, typeof serverURLs === "string" ? fillServerURLs(serverURLs) : serverURLs), disableAppRouter);
            if (realtime) {
              AV2._config.realtime = realtime;
            } else if (AV2._sharedConfig.liveQueryRealtime) {
              var _AV$_config$serverURL = AV2._config.serverURLs, api = _AV$_config$serverURL.api, rtm = _AV$_config$serverURL.rtm;
              AV2._config.realtime = new AV2._sharedConfig.liveQueryRealtime({
                appId,
                appKey,
                server: {
                  api,
                  RTMRouter: rtm
                }
              });
            }
            _initialized = true;
          };
          AV2.setProduction = function(production) {
            if (!isNullOrUndefined(production)) {
              AV2._config.production = production ? 1 : 0;
            } else {
              AV2._config.production = null;
            }
          };
          AV2._setServerURLs = function(urls) {
            var disableAppRouter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
            if (typeof urls !== "string") {
              extend(AV2._config.serverURLs, urls);
            } else {
              AV2._config.serverURLs = fillServerURLs(urls);
            }
            if (disableAppRouter) {
              if (AV2._appRouter) {
                AV2._appRouter.disable();
              } else {
                _disableAppRouter = true;
              }
            }
          };
          AV2.setServerURL = function(urls) {
            return AV2._setServerURLs(urls);
          };
          AV2.setServerURLs = AV2.setServerURL;
          AV2.keepErrorRawMessage = function(value) {
            AV2._sharedConfig.keepErrorRawMessage = value;
          };
          AV2.setRequestTimeout = function(ms) {
            AV2._config.requestTimeout = ms;
          };
          AV2.initialize = AV2.init;
          var defineConfig = function defineConfig2(property) {
            return (0, _defineProperty2.default)(AV2, property, {
              get: function get() {
                return AV2._config[property];
              },
              set: function set(value) {
                AV2._config[property] = value;
              }
            });
          };
          ["applicationId", "applicationKey", "masterKey", "hookKey"].forEach(defineConfig);
        },
        /* 276 */
        /***/
        function(module2, exports2, __webpack_require__) {
          __webpack_require__(277);
          var $Object = __webpack_require__(2).Object;
          module2.exports = function defineProperty(it, key, desc) {
            return $Object.defineProperty(it, key, desc);
          };
        },
        /* 277 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var $export = __webpack_require__(16);
          $export($export.S + $export.F * !__webpack_require__(21), "Object", { defineProperty: __webpack_require__(18).f });
        },
        /* 278 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var ajax = __webpack_require__(60);
          var Cache = __webpack_require__(164);
          function AppRouter(AV2) {
            var _this = this;
            this.AV = AV2;
            this.lockedUntil = 0;
            Cache.getAsync("serverURLs").then(function(data2) {
              if (_this.disabled)
                return;
              if (!data2)
                return _this.lock(0);
              var serverURLs = data2.serverURLs, lockedUntil = data2.lockedUntil;
              _this.AV._setServerURLs(serverURLs, false);
              _this.lockedUntil = lockedUntil;
            }).catch(function() {
              return _this.lock(0);
            });
          }
          AppRouter.prototype.disable = function disable() {
            this.disabled = true;
          };
          AppRouter.prototype.lock = function lock(ttl) {
            this.lockedUntil = Date.now() + ttl;
          };
          AppRouter.prototype.refresh = function refresh() {
            var _this2 = this;
            if (this.disabled)
              return;
            if (Date.now() < this.lockedUntil)
              return;
            this.lock(10);
            var url = "https://app-router.com/2/route";
            return ajax({
              method: "get",
              url,
              query: {
                appId: this.AV.applicationId
              }
            }).then(function(servers) {
              if (_this2.disabled)
                return;
              var ttl = servers.ttl;
              if (!ttl)
                throw new Error("missing ttl");
              ttl = ttl * 1e3;
              var protocal = "https://";
              var serverURLs = {
                push: protocal + servers.push_server,
                stats: protocal + servers.stats_server,
                engine: protocal + servers.engine_server,
                api: protocal + servers.api_server
              };
              _this2.AV._setServerURLs(serverURLs, false);
              _this2.lock(ttl);
              return Cache.setAsync("serverURLs", {
                serverURLs,
                lockedUntil: _this2.lockedUntil
              }, ttl);
            }).catch(function(error) {
              console.warn("refresh server URLs failed: " + error.message);
              _this2.lock(600);
            });
          };
          module2.exports = AppRouter;
        },
        /* 279 */
        /***/
        function(module2, exports2, __webpack_require__) {
          __webpack_require__(39);
          __webpack_require__(56);
          module2.exports = __webpack_require__(91).f("iterator");
        },
        /* 280 */
        /***/
        function(module2, exports2, __webpack_require__) {
          __webpack_require__(281);
          __webpack_require__(95);
          __webpack_require__(286);
          __webpack_require__(287);
          module2.exports = __webpack_require__(2).Symbol;
        },
        /* 281 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var global2 = __webpack_require__(6);
          var has = __webpack_require__(24);
          var DESCRIPTORS = __webpack_require__(21);
          var $export = __webpack_require__(16);
          var redefine = __webpack_require__(98);
          var META2 = __webpack_require__(282).KEY;
          var $fails = __webpack_require__(41);
          var shared = __webpack_require__(69);
          var setToStringTag = __webpack_require__(55);
          var uid = __webpack_require__(54);
          var wks = __webpack_require__(7);
          var wksExt = __webpack_require__(91);
          var wksDefine = __webpack_require__(92);
          var enumKeys = __webpack_require__(283);
          var isArray = __webpack_require__(284);
          var anObject = __webpack_require__(17);
          var isObject = __webpack_require__(20);
          var toObject = __webpack_require__(44);
          var toIObject = __webpack_require__(25);
          var toPrimitive = __webpack_require__(65);
          var createDesc = __webpack_require__(42);
          var _create = __webpack_require__(66);
          var gOPNExt = __webpack_require__(285);
          var $GOPD = __webpack_require__(94);
          var $GOPS = __webpack_require__(165);
          var $DP = __webpack_require__(18);
          var $keys = __webpack_require__(53);
          var gOPD = $GOPD.f;
          var dP = $DP.f;
          var gOPN = gOPNExt.f;
          var $Symbol = global2.Symbol;
          var $JSON = global2.JSON;
          var _stringify = $JSON && $JSON.stringify;
          var PROTOTYPE = "prototype";
          var HIDDEN = wks("_hidden");
          var TO_PRIMITIVE = wks("toPrimitive");
          var isEnum = {}.propertyIsEnumerable;
          var SymbolRegistry = shared("symbol-registry");
          var AllSymbols = shared("symbols");
          var OPSymbols = shared("op-symbols");
          var ObjectProto = Object[PROTOTYPE];
          var USE_NATIVE = typeof $Symbol == "function" && !!$GOPS.f;
          var QObject = global2.QObject;
          var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
          var setSymbolDesc = DESCRIPTORS && $fails(function() {
            return _create(dP({}, "a", {
              get: function() {
                return dP(this, "a", { value: 7 }).a;
              }
            })).a != 7;
          }) ? function(it, key, D) {
            var protoDesc = gOPD(ObjectProto, key);
            if (protoDesc)
              delete ObjectProto[key];
            dP(it, key, D);
            if (protoDesc && it !== ObjectProto)
              dP(ObjectProto, key, protoDesc);
          } : dP;
          var wrap = function(tag) {
            var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
            sym._k = tag;
            return sym;
          };
          var isSymbol = USE_NATIVE && typeof $Symbol.iterator == "symbol" ? function(it) {
            return typeof it == "symbol";
          } : function(it) {
            return it instanceof $Symbol;
          };
          var $defineProperty = function defineProperty(it, key, D) {
            if (it === ObjectProto)
              $defineProperty(OPSymbols, key, D);
            anObject(it);
            key = toPrimitive(key, true);
            anObject(D);
            if (has(AllSymbols, key)) {
              if (!D.enumerable) {
                if (!has(it, HIDDEN))
                  dP(it, HIDDEN, createDesc(1, {}));
                it[HIDDEN][key] = true;
              } else {
                if (has(it, HIDDEN) && it[HIDDEN][key])
                  it[HIDDEN][key] = false;
                D = _create(D, { enumerable: createDesc(0, false) });
              }
              return setSymbolDesc(it, key, D);
            }
            return dP(it, key, D);
          };
          var $defineProperties = function defineProperties(it, P) {
            anObject(it);
            var keys = enumKeys(P = toIObject(P));
            var i2 = 0;
            var l2 = keys.length;
            var key;
            while (l2 > i2)
              $defineProperty(it, key = keys[i2++], P[key]);
            return it;
          };
          var $create = function create(it, P) {
            return P === void 0 ? _create(it) : $defineProperties(_create(it), P);
          };
          var $propertyIsEnumerable = function propertyIsEnumerable(key) {
            var E = isEnum.call(this, key = toPrimitive(key, true));
            if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
              return false;
            return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
          };
          var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
            it = toIObject(it);
            key = toPrimitive(key, true);
            if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))
              return;
            var D = gOPD(it, key);
            if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))
              D.enumerable = true;
            return D;
          };
          var $getOwnPropertyNames = function getOwnPropertyNames(it) {
            var names = gOPN(toIObject(it));
            var result = [];
            var i2 = 0;
            var key;
            while (names.length > i2) {
              if (!has(AllSymbols, key = names[i2++]) && key != HIDDEN && key != META2)
                result.push(key);
            }
            return result;
          };
          var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
            var IS_OP = it === ObjectProto;
            var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
            var result = [];
            var i2 = 0;
            var key;
            while (names.length > i2) {
              if (has(AllSymbols, key = names[i2++]) && (IS_OP ? has(ObjectProto, key) : true))
                result.push(AllSymbols[key]);
            }
            return result;
          };
          if (!USE_NATIVE) {
            $Symbol = function Symbol2() {
              if (this instanceof $Symbol)
                throw TypeError("Symbol is not a constructor!");
              var tag = uid(arguments.length > 0 ? arguments[0] : void 0);
              var $set = function(value) {
                if (this === ObjectProto)
                  $set.call(OPSymbols, value);
                if (has(this, HIDDEN) && has(this[HIDDEN], tag))
                  this[HIDDEN][tag] = false;
                setSymbolDesc(this, tag, createDesc(1, value));
              };
              if (DESCRIPTORS && setter)
                setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
              return wrap(tag);
            };
            redefine($Symbol[PROTOTYPE], "toString", function toString() {
              return this._k;
            });
            $GOPD.f = $getOwnPropertyDescriptor;
            $DP.f = $defineProperty;
            __webpack_require__(166).f = gOPNExt.f = $getOwnPropertyNames;
            __webpack_require__(93).f = $propertyIsEnumerable;
            $GOPS.f = $getOwnPropertySymbols;
            if (DESCRIPTORS && !__webpack_require__(40)) {
              redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, true);
            }
            wksExt.f = function(name2) {
              return wrap(wks(name2));
            };
          }
          $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
          for (var es6Symbols = (
            // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
            "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(",")
          ), j = 0; es6Symbols.length > j; )
            wks(es6Symbols[j++]);
          for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k; )
            wksDefine(wellKnownSymbols[k++]);
          $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
            // 19.4.2.1 Symbol.for(key)
            "for": function(key) {
              return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
            },
            // 19.4.2.5 Symbol.keyFor(sym)
            keyFor: function keyFor(sym) {
              if (!isSymbol(sym))
                throw TypeError(sym + " is not a symbol!");
              for (var key in SymbolRegistry)
                if (SymbolRegistry[key] === sym)
                  return key;
            },
            useSetter: function() {
              setter = true;
            },
            useSimple: function() {
              setter = false;
            }
          });
          $export($export.S + $export.F * !USE_NATIVE, "Object", {
            // 19.1.2.2 Object.create(O [, Properties])
            create: $create,
            // 19.1.2.4 Object.defineProperty(O, P, Attributes)
            defineProperty: $defineProperty,
            // 19.1.2.3 Object.defineProperties(O, Properties)
            defineProperties: $defineProperties,
            // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
            getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
            // 19.1.2.7 Object.getOwnPropertyNames(O)
            getOwnPropertyNames: $getOwnPropertyNames,
            // 19.1.2.8 Object.getOwnPropertySymbols(O)
            getOwnPropertySymbols: $getOwnPropertySymbols
          });
          var FAILS_ON_PRIMITIVES = $fails(function() {
            $GOPS.f(1);
          });
          $export($export.S + $export.F * FAILS_ON_PRIMITIVES, "Object", {
            getOwnPropertySymbols: function getOwnPropertySymbols(it) {
              return $GOPS.f(toObject(it));
            }
          });
          $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
            var S = $Symbol();
            return _stringify([S]) != "[null]" || _stringify({ a: S }) != "{}" || _stringify(Object(S)) != "{}";
          })), "JSON", {
            stringify: function stringify(it) {
              var args = [it];
              var i2 = 1;
              var replacer, $replacer;
              while (arguments.length > i2)
                args.push(arguments[i2++]);
              $replacer = replacer = args[1];
              if (!isObject(replacer) && it === void 0 || isSymbol(it))
                return;
              if (!isArray(replacer))
                replacer = function(key, value) {
                  if (typeof $replacer == "function")
                    value = $replacer.call(this, key, value);
                  if (!isSymbol(value))
                    return value;
                };
              args[1] = replacer;
              return _stringify.apply($JSON, args);
            }
          });
          $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(23)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
          setToStringTag($Symbol, "Symbol");
          setToStringTag(Math, "Math", true);
          setToStringTag(global2.JSON, "JSON", true);
        },
        /* 282 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var META2 = __webpack_require__(54)("meta");
          var isObject = __webpack_require__(20);
          var has = __webpack_require__(24);
          var setDesc = __webpack_require__(18).f;
          var id = 0;
          var isExtensible = Object.isExtensible || function() {
            return true;
          };
          var FREEZE = !__webpack_require__(41)(function() {
            return isExtensible(Object.preventExtensions({}));
          });
          var setMeta = function(it) {
            setDesc(it, META2, { value: {
              i: "O" + ++id,
              // object ID
              w: {}
              // weak collections IDs
            } });
          };
          var fastKey = function(it, create) {
            if (!isObject(it))
              return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
            if (!has(it, META2)) {
              if (!isExtensible(it))
                return "F";
              if (!create)
                return "E";
              setMeta(it);
            }
            return it[META2].i;
          };
          var getWeak = function(it, create) {
            if (!has(it, META2)) {
              if (!isExtensible(it))
                return true;
              if (!create)
                return false;
              setMeta(it);
            }
            return it[META2].w;
          };
          var onFreeze = function(it) {
            if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META2))
              setMeta(it);
            return it;
          };
          var meta = module2.exports = {
            KEY: META2,
            NEED: false,
            fastKey,
            getWeak,
            onFreeze
          };
        },
        /* 283 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var getKeys = __webpack_require__(53);
          var gOPS = __webpack_require__(165);
          var pIE = __webpack_require__(93);
          module2.exports = function(it) {
            var result = getKeys(it);
            var getSymbols = gOPS.f;
            if (getSymbols) {
              var symbols = getSymbols(it);
              var isEnum = pIE.f;
              var i2 = 0;
              var key;
              while (symbols.length > i2)
                if (isEnum.call(it, key = symbols[i2++]))
                  result.push(key);
            }
            return result;
          };
        },
        /* 284 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var cof = __webpack_require__(43);
          module2.exports = Array.isArray || function isArray(arg) {
            return cof(arg) == "Array";
          };
        },
        /* 285 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var toIObject = __webpack_require__(25);
          var gOPN = __webpack_require__(166).f;
          var toString = {}.toString;
          var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
          var getWindowNames = function(it) {
            try {
              return gOPN(it);
            } catch (e2) {
              return windowNames.slice();
            }
          };
          module2.exports.f = function getOwnPropertyNames(it) {
            return windowNames && toString.call(it) == "[object Window]" ? getWindowNames(it) : gOPN(toIObject(it));
          };
        },
        /* 286 */
        /***/
        function(module2, exports2, __webpack_require__) {
          __webpack_require__(92)("asyncIterator");
        },
        /* 287 */
        /***/
        function(module2, exports2, __webpack_require__) {
          __webpack_require__(92)("observable");
        },
        /* 288 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var TimeoutError;
          module2.exports.timeout = function(promise, timeoutMillis) {
            var error = new TimeoutError(), timeout;
            return Promise.race([
              promise,
              new Promise(function(resolve, reject) {
                timeout = setTimeout(function() {
                  reject(error);
                }, timeoutMillis);
              })
            ]).then(function(v) {
              clearTimeout(timeout);
              return v;
            }, function(err) {
              clearTimeout(timeout);
              throw err;
            });
          };
          TimeoutError = module2.exports.TimeoutError = function() {
            Error.call(this);
            this.stack = Error().stack;
            this.message = "Timeout";
          };
          TimeoutError.prototype = Object.create(Error.prototype);
          TimeoutError.prototype.name = "TimeoutError";
        },
        /* 289 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _ = __webpack_require__(0);
          module2.exports = function(AV2) {
            var eventSplitter = /\s+/;
            var slice = Array.prototype.slice;
            AV2.Events = {
              /**
               * Bind one or more space separated events, `events`, to a `callback`
               * function. Passing `"all"` will bind the callback to all events fired.
               */
              on: function on(events, callback, context) {
                var calls, event2, node, tail, list;
                if (!callback) {
                  return this;
                }
                events = events.split(eventSplitter);
                calls = this._callbacks || (this._callbacks = {});
                event2 = events.shift();
                while (event2) {
                  list = calls[event2];
                  node = list ? list.tail : {};
                  node.next = tail = {};
                  node.context = context;
                  node.callback = callback;
                  calls[event2] = { tail, next: list ? list.next : node };
                  event2 = events.shift();
                }
                return this;
              },
              /**
               * Remove one or many callbacks. If `context` is null, removes all callbacks
               * with that function. If `callback` is null, removes all callbacks for the
               * event. If `events` is null, removes all bound callbacks for all events.
               */
              off: function off(events, callback, context) {
                var event2, calls, node, tail, cb, ctx;
                if (!(calls = this._callbacks)) {
                  return;
                }
                if (!(events || callback || context)) {
                  delete this._callbacks;
                  return this;
                }
                events = events ? events.split(eventSplitter) : _.keys(calls);
                event2 = events.shift();
                while (event2) {
                  node = calls[event2];
                  delete calls[event2];
                  if (!node || !(callback || context)) {
                    continue;
                  }
                  tail = node.tail;
                  node = node.next;
                  while (node !== tail) {
                    cb = node.callback;
                    ctx = node.context;
                    if (callback && cb !== callback || context && ctx !== context) {
                      this.on(event2, cb, ctx);
                    }
                    node = node.next;
                  }
                  event2 = events.shift();
                }
                return this;
              },
              /**
               * Trigger one or many events, firing all bound callbacks. Callbacks are
               * passed the same arguments as `trigger` is, apart from the event name
               * (unless you're listening on `"all"`, which will cause your callback to
               * receive the true name of the event as the first argument).
               */
              trigger: function trigger(events) {
                var event2, node, calls, tail, args, all, rest;
                if (!(calls = this._callbacks)) {
                  return this;
                }
                all = calls.all;
                events = events.split(eventSplitter);
                rest = slice.call(arguments, 1);
                event2 = events.shift();
                while (event2) {
                  node = calls[event2];
                  if (node) {
                    tail = node.tail;
                    while ((node = node.next) !== tail) {
                      node.callback.apply(node.context || this, rest);
                    }
                  }
                  node = all;
                  if (node) {
                    tail = node.tail;
                    args = [event2].concat(rest);
                    while ((node = node.next) !== tail) {
                      node.callback.apply(node.context || this, args);
                    }
                  }
                  event2 = events.shift();
                }
                return this;
              }
            };
            AV2.Events.bind = AV2.Events.on;
            AV2.Events.unbind = AV2.Events.off;
          };
        },
        /* 290 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _promise = __webpack_require__(3);
          var _promise2 = _interopRequireDefault(_promise);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var _ = __webpack_require__(0);
          module2.exports = function(AV2) {
            AV2.GeoPoint = function(arg1, arg2) {
              if (_.isArray(arg1)) {
                AV2.GeoPoint._validate(arg1[0], arg1[1]);
                this.latitude = arg1[0];
                this.longitude = arg1[1];
              } else if (_.isObject(arg1)) {
                AV2.GeoPoint._validate(arg1.latitude, arg1.longitude);
                this.latitude = arg1.latitude;
                this.longitude = arg1.longitude;
              } else if (_.isNumber(arg1) && _.isNumber(arg2)) {
                AV2.GeoPoint._validate(arg1, arg2);
                this.latitude = arg1;
                this.longitude = arg2;
              } else {
                this.latitude = 0;
                this.longitude = 0;
              }
              var self2 = this;
              if (this.__defineGetter__ && this.__defineSetter__) {
                this._latitude = this.latitude;
                this._longitude = this.longitude;
                this.__defineGetter__("latitude", function() {
                  return self2._latitude;
                });
                this.__defineGetter__("longitude", function() {
                  return self2._longitude;
                });
                this.__defineSetter__("latitude", function(val) {
                  AV2.GeoPoint._validate(val, self2.longitude);
                  self2._latitude = val;
                });
                this.__defineSetter__("longitude", function(val) {
                  AV2.GeoPoint._validate(self2.latitude, val);
                  self2._longitude = val;
                });
              }
            };
            AV2.GeoPoint._validate = function(latitude, longitude) {
              if (latitude < -90) {
                throw new Error("AV.GeoPoint latitude " + latitude + " < -90.0.");
              }
              if (latitude > 90) {
                throw new Error("AV.GeoPoint latitude " + latitude + " > 90.0.");
              }
              if (longitude < -180) {
                throw new Error("AV.GeoPoint longitude " + longitude + " < -180.0.");
              }
              if (longitude > 180) {
                throw new Error("AV.GeoPoint longitude " + longitude + " > 180.0.");
              }
            };
            AV2.GeoPoint.current = function() {
              return new _promise2.default(function(resolve, reject) {
                navigator.geolocation.getCurrentPosition(function(location2) {
                  resolve(new AV2.GeoPoint({
                    latitude: location2.coords.latitude,
                    longitude: location2.coords.longitude
                  }));
                }, reject);
              });
            };
            _.extend(
              AV2.GeoPoint.prototype,
              /** @lends AV.GeoPoint.prototype */
              {
                /**
                 * Returns a JSON representation of the GeoPoint, suitable for AV.
                 * @return {Object}
                 */
                toJSON: function toJSON() {
                  AV2.GeoPoint._validate(this.latitude, this.longitude);
                  return {
                    __type: "GeoPoint",
                    latitude: this.latitude,
                    longitude: this.longitude
                  };
                },
                /**
                 * Returns the distance from this GeoPoint to another in radians.
                 * @param {AV.GeoPoint} point the other AV.GeoPoint.
                 * @return {Number}
                 */
                radiansTo: function radiansTo(point) {
                  var d2r = Math.PI / 180;
                  var lat1rad = this.latitude * d2r;
                  var long1rad = this.longitude * d2r;
                  var lat2rad = point.latitude * d2r;
                  var long2rad = point.longitude * d2r;
                  var deltaLat = lat1rad - lat2rad;
                  var deltaLong = long1rad - long2rad;
                  var sinDeltaLatDiv2 = Math.sin(deltaLat / 2);
                  var sinDeltaLongDiv2 = Math.sin(deltaLong / 2);
                  var a = sinDeltaLatDiv2 * sinDeltaLatDiv2 + Math.cos(lat1rad) * Math.cos(lat2rad) * sinDeltaLongDiv2 * sinDeltaLongDiv2;
                  a = Math.min(1, a);
                  return 2 * Math.asin(Math.sqrt(a));
                },
                /**
                 * Returns the distance from this GeoPoint to another in kilometers.
                 * @param {AV.GeoPoint} point the other AV.GeoPoint.
                 * @return {Number}
                 */
                kilometersTo: function kilometersTo(point) {
                  return this.radiansTo(point) * 6371;
                },
                /**
                 * Returns the distance from this GeoPoint to another in miles.
                 * @param {AV.GeoPoint} point the other AV.GeoPoint.
                 * @return {Number}
                 */
                milesTo: function milesTo(point) {
                  return this.radiansTo(point) * 3958.8;
                }
              }
            );
          };
        },
        /* 291 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _ = __webpack_require__(0);
          module2.exports = function(AV2) {
            var PUBLIC_KEY = "*";
            AV2.ACL = function(arg1) {
              var self2 = this;
              self2.permissionsById = {};
              if (_.isObject(arg1)) {
                if (arg1 instanceof AV2.User) {
                  self2.setReadAccess(arg1, true);
                  self2.setWriteAccess(arg1, true);
                } else {
                  if (_.isFunction(arg1)) {
                    throw new Error("AV.ACL() called with a function.  Did you forget ()?");
                  }
                  AV2._objectEach(arg1, function(accessList, userId) {
                    if (!_.isString(userId)) {
                      throw new Error("Tried to create an ACL with an invalid userId.");
                    }
                    self2.permissionsById[userId] = {};
                    AV2._objectEach(accessList, function(allowed, permission) {
                      if (permission !== "read" && permission !== "write") {
                        throw new Error("Tried to create an ACL with an invalid permission type.");
                      }
                      if (!_.isBoolean(allowed)) {
                        throw new Error("Tried to create an ACL with an invalid permission value.");
                      }
                      self2.permissionsById[userId][permission] = allowed;
                    });
                  });
                }
              }
            };
            AV2.ACL.prototype.toJSON = function() {
              return _.clone(this.permissionsById);
            };
            AV2.ACL.prototype._setAccess = function(accessType, userId, allowed) {
              if (userId instanceof AV2.User) {
                userId = userId.id;
              } else if (userId instanceof AV2.Role) {
                userId = "role:" + userId.getName();
              }
              if (!_.isString(userId)) {
                throw new Error("userId must be a string.");
              }
              if (!_.isBoolean(allowed)) {
                throw new Error("allowed must be either true or false.");
              }
              var permissions = this.permissionsById[userId];
              if (!permissions) {
                if (!allowed) {
                  return;
                } else {
                  permissions = {};
                  this.permissionsById[userId] = permissions;
                }
              }
              if (allowed) {
                this.permissionsById[userId][accessType] = true;
              } else {
                delete permissions[accessType];
                if (_.isEmpty(permissions)) {
                  delete this.permissionsById[userId];
                }
              }
            };
            AV2.ACL.prototype._getAccess = function(accessType, userId) {
              if (userId instanceof AV2.User) {
                userId = userId.id;
              } else if (userId instanceof AV2.Role) {
                userId = "role:" + userId.getName();
              }
              var permissions = this.permissionsById[userId];
              if (!permissions) {
                return false;
              }
              return permissions[accessType] ? true : false;
            };
            AV2.ACL.prototype.setReadAccess = function(userId, allowed) {
              this._setAccess("read", userId, allowed);
            };
            AV2.ACL.prototype.getReadAccess = function(userId) {
              return this._getAccess("read", userId);
            };
            AV2.ACL.prototype.setWriteAccess = function(userId, allowed) {
              this._setAccess("write", userId, allowed);
            };
            AV2.ACL.prototype.getWriteAccess = function(userId) {
              return this._getAccess("write", userId);
            };
            AV2.ACL.prototype.setPublicReadAccess = function(allowed) {
              this.setReadAccess(PUBLIC_KEY, allowed);
            };
            AV2.ACL.prototype.getPublicReadAccess = function() {
              return this.getReadAccess(PUBLIC_KEY);
            };
            AV2.ACL.prototype.setPublicWriteAccess = function(allowed) {
              this.setWriteAccess(PUBLIC_KEY, allowed);
            };
            AV2.ACL.prototype.getPublicWriteAccess = function() {
              return this.getWriteAccess(PUBLIC_KEY);
            };
            AV2.ACL.prototype.getRoleReadAccess = function(role) {
              if (role instanceof AV2.Role) {
                role = role.getName();
              }
              if (_.isString(role)) {
                return this.getReadAccess("role:" + role);
              }
              throw new Error("role must be a AV.Role or a String");
            };
            AV2.ACL.prototype.getRoleWriteAccess = function(role) {
              if (role instanceof AV2.Role) {
                role = role.getName();
              }
              if (_.isString(role)) {
                return this.getWriteAccess("role:" + role);
              }
              throw new Error("role must be a AV.Role or a String");
            };
            AV2.ACL.prototype.setRoleReadAccess = function(role, allowed) {
              if (role instanceof AV2.Role) {
                role = role.getName();
              }
              if (_.isString(role)) {
                this.setReadAccess("role:" + role, allowed);
                return;
              }
              throw new Error("role must be a AV.Role or a String");
            };
            AV2.ACL.prototype.setRoleWriteAccess = function(role, allowed) {
              if (role instanceof AV2.Role) {
                role = role.getName();
              }
              if (_.isString(role)) {
                this.setWriteAccess("role:" + role, allowed);
                return;
              }
              throw new Error("role must be a AV.Role or a String");
            };
          };
        },
        /* 292 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _ = __webpack_require__(0);
          module2.exports = function(AV2) {
            AV2.Op = function() {
              this._initialize.apply(this, arguments);
            };
            _.extend(
              AV2.Op.prototype,
              /** @lends AV.Op.prototype */
              {
                _initialize: function _initialize() {
                }
              }
            );
            _.extend(AV2.Op, {
              /**
               * To create a new Op, call AV.Op._extend();
               * @private
               */
              _extend: AV2._extend,
              // A map of __op string to decoder function.
              _opDecoderMap: {},
              /**
               * Registers a function to convert a json object with an __op field into an
               * instance of a subclass of AV.Op.
               * @private
               */
              _registerDecoder: function _registerDecoder(opName, decoder) {
                AV2.Op._opDecoderMap[opName] = decoder;
              },
              /**
               * Converts a json object into an instance of a subclass of AV.Op.
               * @private
               */
              _decode: function _decode(json) {
                var decoder = AV2.Op._opDecoderMap[json.__op];
                if (decoder) {
                  return decoder(json);
                } else {
                  return void 0;
                }
              }
            });
            AV2.Op._registerDecoder("Batch", function(json) {
              var op = null;
              AV2._arrayEach(json.ops, function(nextOp) {
                nextOp = AV2.Op._decode(nextOp);
                op = nextOp._mergeWithPrevious(op);
              });
              return op;
            });
            AV2.Op.Set = AV2.Op._extend(
              /** @lends AV.Op.Set.prototype */
              {
                _initialize: function _initialize(value) {
                  this._value = value;
                },
                /**
                 * Returns the new value of this field after the set.
                 */
                value: function value() {
                  return this._value;
                },
                /**
                 * Returns a JSON version of the operation suitable for sending to AV.
                 * @return {Object}
                 */
                toJSON: function toJSON() {
                  return AV2._encode(this.value());
                },
                _mergeWithPrevious: function _mergeWithPrevious(previous) {
                  return this;
                },
                _estimate: function _estimate(oldValue) {
                  return this.value();
                }
              }
            );
            AV2.Op._UNSET = {};
            AV2.Op.Unset = AV2.Op._extend(
              /** @lends AV.Op.Unset.prototype */
              {
                /**
                 * Returns a JSON version of the operation suitable for sending to AV.
                 * @return {Object}
                 */
                toJSON: function toJSON() {
                  return { __op: "Delete" };
                },
                _mergeWithPrevious: function _mergeWithPrevious(previous) {
                  return this;
                },
                _estimate: function _estimate(oldValue) {
                  return AV2.Op._UNSET;
                }
              }
            );
            AV2.Op._registerDecoder("Delete", function(json) {
              return new AV2.Op.Unset();
            });
            AV2.Op.Increment = AV2.Op._extend(
              /** @lends AV.Op.Increment.prototype */
              {
                _initialize: function _initialize(amount) {
                  this._amount = amount;
                },
                /**
                 * Returns the amount to increment by.
                 * @return {Number} the amount to increment by.
                 */
                amount: function amount() {
                  return this._amount;
                },
                /**
                 * Returns a JSON version of the operation suitable for sending to AV.
                 * @return {Object}
                 */
                toJSON: function toJSON() {
                  return { __op: "Increment", amount: this._amount };
                },
                _mergeWithPrevious: function _mergeWithPrevious(previous) {
                  if (!previous) {
                    return this;
                  } else if (previous instanceof AV2.Op.Unset) {
                    return new AV2.Op.Set(this.amount());
                  } else if (previous instanceof AV2.Op.Set) {
                    return new AV2.Op.Set(previous.value() + this.amount());
                  } else if (previous instanceof AV2.Op.Increment) {
                    return new AV2.Op.Increment(this.amount() + previous.amount());
                  } else {
                    throw new Error("Op is invalid after previous op.");
                  }
                },
                _estimate: function _estimate(oldValue) {
                  if (!oldValue) {
                    return this.amount();
                  }
                  return oldValue + this.amount();
                }
              }
            );
            AV2.Op._registerDecoder("Increment", function(json) {
              return new AV2.Op.Increment(json.amount);
            });
            AV2.Op.BitAnd = AV2.Op._extend(
              /** @lends AV.Op.BitAnd.prototype */
              {
                _initialize: function _initialize(value) {
                  this._value = value;
                },
                value: function value() {
                  return this._value;
                },
                /**
                 * Returns a JSON version of the operation suitable for sending to AV.
                 * @return {Object}
                 */
                toJSON: function toJSON() {
                  return { __op: "BitAnd", value: this.value() };
                },
                _mergeWithPrevious: function _mergeWithPrevious(previous) {
                  if (!previous) {
                    return this;
                  } else if (previous instanceof AV2.Op.Unset) {
                    return new AV2.Op.Set(0);
                  } else if (previous instanceof AV2.Op.Set) {
                    return new AV2.Op.Set(previous.value() & this.value());
                  } else {
                    throw new Error("Op is invalid after previous op.");
                  }
                },
                _estimate: function _estimate(oldValue) {
                  return oldValue & this.value();
                }
              }
            );
            AV2.Op._registerDecoder("BitAnd", function(json) {
              return new AV2.Op.BitAnd(json.value);
            });
            AV2.Op.BitOr = AV2.Op._extend(
              /** @lends AV.Op.BitOr.prototype */
              {
                _initialize: function _initialize(value) {
                  this._value = value;
                },
                value: function value() {
                  return this._value;
                },
                /**
                 * Returns a JSON version of the operation suitable for sending to AV.
                 * @return {Object}
                 */
                toJSON: function toJSON() {
                  return { __op: "BitOr", value: this.value() };
                },
                _mergeWithPrevious: function _mergeWithPrevious(previous) {
                  if (!previous) {
                    return this;
                  } else if (previous instanceof AV2.Op.Unset) {
                    return new AV2.Op.Set(this.value());
                  } else if (previous instanceof AV2.Op.Set) {
                    return new AV2.Op.Set(previous.value() | this.value());
                  } else {
                    throw new Error("Op is invalid after previous op.");
                  }
                },
                _estimate: function _estimate(oldValue) {
                  return oldValue | this.value();
                }
              }
            );
            AV2.Op._registerDecoder("BitOr", function(json) {
              return new AV2.Op.BitOr(json.value);
            });
            AV2.Op.BitXor = AV2.Op._extend(
              /** @lends AV.Op.BitXor.prototype */
              {
                _initialize: function _initialize(value) {
                  this._value = value;
                },
                value: function value() {
                  return this._value;
                },
                /**
                 * Returns a JSON version of the operation suitable for sending to AV.
                 * @return {Object}
                 */
                toJSON: function toJSON() {
                  return { __op: "BitXor", value: this.value() };
                },
                _mergeWithPrevious: function _mergeWithPrevious(previous) {
                  if (!previous) {
                    return this;
                  } else if (previous instanceof AV2.Op.Unset) {
                    return new AV2.Op.Set(this.value());
                  } else if (previous instanceof AV2.Op.Set) {
                    return new AV2.Op.Set(previous.value() ^ this.value());
                  } else {
                    throw new Error("Op is invalid after previous op.");
                  }
                },
                _estimate: function _estimate(oldValue) {
                  return oldValue ^ this.value();
                }
              }
            );
            AV2.Op._registerDecoder("BitXor", function(json) {
              return new AV2.Op.BitXor(json.value);
            });
            AV2.Op.Add = AV2.Op._extend(
              /** @lends AV.Op.Add.prototype */
              {
                _initialize: function _initialize(objects) {
                  this._objects = objects;
                },
                /**
                 * Returns the objects to be added to the array.
                 * @return {Array} The objects to be added to the array.
                 */
                objects: function objects() {
                  return this._objects;
                },
                /**
                 * Returns a JSON version of the operation suitable for sending to AV.
                 * @return {Object}
                 */
                toJSON: function toJSON() {
                  return { __op: "Add", objects: AV2._encode(this.objects()) };
                },
                _mergeWithPrevious: function _mergeWithPrevious(previous) {
                  if (!previous) {
                    return this;
                  } else if (previous instanceof AV2.Op.Unset) {
                    return new AV2.Op.Set(this.objects());
                  } else if (previous instanceof AV2.Op.Set) {
                    return new AV2.Op.Set(this._estimate(previous.value()));
                  } else if (previous instanceof AV2.Op.Add) {
                    return new AV2.Op.Add(previous.objects().concat(this.objects()));
                  } else {
                    throw new Error("Op is invalid after previous op.");
                  }
                },
                _estimate: function _estimate(oldValue) {
                  if (!oldValue) {
                    return _.clone(this.objects());
                  } else {
                    return oldValue.concat(this.objects());
                  }
                }
              }
            );
            AV2.Op._registerDecoder("Add", function(json) {
              return new AV2.Op.Add(AV2._decode(json.objects));
            });
            AV2.Op.AddUnique = AV2.Op._extend(
              /** @lends AV.Op.AddUnique.prototype */
              {
                _initialize: function _initialize(objects) {
                  this._objects = _.uniq(objects);
                },
                /**
                 * Returns the objects to be added to the array.
                 * @return {Array} The objects to be added to the array.
                 */
                objects: function objects() {
                  return this._objects;
                },
                /**
                 * Returns a JSON version of the operation suitable for sending to AV.
                 * @return {Object}
                 */
                toJSON: function toJSON() {
                  return { __op: "AddUnique", objects: AV2._encode(this.objects()) };
                },
                _mergeWithPrevious: function _mergeWithPrevious(previous) {
                  if (!previous) {
                    return this;
                  } else if (previous instanceof AV2.Op.Unset) {
                    return new AV2.Op.Set(this.objects());
                  } else if (previous instanceof AV2.Op.Set) {
                    return new AV2.Op.Set(this._estimate(previous.value()));
                  } else if (previous instanceof AV2.Op.AddUnique) {
                    return new AV2.Op.AddUnique(this._estimate(previous.objects()));
                  } else {
                    throw new Error("Op is invalid after previous op.");
                  }
                },
                _estimate: function _estimate(oldValue) {
                  if (!oldValue) {
                    return _.clone(this.objects());
                  } else {
                    var newValue = _.clone(oldValue);
                    AV2._arrayEach(this.objects(), function(obj) {
                      if (obj instanceof AV2.Object && obj.id) {
                        var matchingObj = _.find(newValue, function(anObj) {
                          return anObj instanceof AV2.Object && anObj.id === obj.id;
                        });
                        if (!matchingObj) {
                          newValue.push(obj);
                        } else {
                          var index = _.indexOf(newValue, matchingObj);
                          newValue[index] = obj;
                        }
                      } else if (!_.contains(newValue, obj)) {
                        newValue.push(obj);
                      }
                    });
                    return newValue;
                  }
                }
              }
            );
            AV2.Op._registerDecoder("AddUnique", function(json) {
              return new AV2.Op.AddUnique(AV2._decode(json.objects));
            });
            AV2.Op.Remove = AV2.Op._extend(
              /** @lends AV.Op.Remove.prototype */
              {
                _initialize: function _initialize(objects) {
                  this._objects = _.uniq(objects);
                },
                /**
                 * Returns the objects to be removed from the array.
                 * @return {Array} The objects to be removed from the array.
                 */
                objects: function objects() {
                  return this._objects;
                },
                /**
                 * Returns a JSON version of the operation suitable for sending to AV.
                 * @return {Object}
                 */
                toJSON: function toJSON() {
                  return { __op: "Remove", objects: AV2._encode(this.objects()) };
                },
                _mergeWithPrevious: function _mergeWithPrevious(previous) {
                  if (!previous) {
                    return this;
                  } else if (previous instanceof AV2.Op.Unset) {
                    return previous;
                  } else if (previous instanceof AV2.Op.Set) {
                    return new AV2.Op.Set(this._estimate(previous.value()));
                  } else if (previous instanceof AV2.Op.Remove) {
                    return new AV2.Op.Remove(_.union(previous.objects(), this.objects()));
                  } else {
                    throw new Error("Op is invalid after previous op.");
                  }
                },
                _estimate: function _estimate(oldValue) {
                  if (!oldValue) {
                    return [];
                  } else {
                    var newValue = _.difference(oldValue, this.objects());
                    AV2._arrayEach(this.objects(), function(obj) {
                      if (obj instanceof AV2.Object && obj.id) {
                        newValue = _.reject(newValue, function(other) {
                          return other instanceof AV2.Object && other.id === obj.id;
                        });
                      }
                    });
                    return newValue;
                  }
                }
              }
            );
            AV2.Op._registerDecoder("Remove", function(json) {
              return new AV2.Op.Remove(AV2._decode(json.objects));
            });
            AV2.Op.Relation = AV2.Op._extend(
              /** @lends AV.Op.Relation.prototype */
              {
                _initialize: function _initialize(adds, removes) {
                  this._targetClassName = null;
                  var self2 = this;
                  var pointerToId = function pointerToId2(object) {
                    if (object instanceof AV2.Object) {
                      if (!object.id) {
                        throw new Error("You can't add an unsaved AV.Object to a relation.");
                      }
                      if (!self2._targetClassName) {
                        self2._targetClassName = object.className;
                      }
                      if (self2._targetClassName !== object.className) {
                        throw new Error("Tried to create a AV.Relation with 2 different types: " + self2._targetClassName + " and " + object.className + ".");
                      }
                      return object.id;
                    }
                    return object;
                  };
                  this.relationsToAdd = _.uniq(_.map(adds, pointerToId));
                  this.relationsToRemove = _.uniq(_.map(removes, pointerToId));
                },
                /**
                 * Returns an array of unfetched AV.Object that are being added to the
                 * relation.
                 * @return {Array}
                 */
                added: function added() {
                  var self2 = this;
                  return _.map(this.relationsToAdd, function(objectId) {
                    var object = AV2.Object._create(self2._targetClassName);
                    object.id = objectId;
                    return object;
                  });
                },
                /**
                 * Returns an array of unfetched AV.Object that are being removed from
                 * the relation.
                 * @return {Array}
                 */
                removed: function removed() {
                  var self2 = this;
                  return _.map(this.relationsToRemove, function(objectId) {
                    var object = AV2.Object._create(self2._targetClassName);
                    object.id = objectId;
                    return object;
                  });
                },
                /**
                 * Returns a JSON version of the operation suitable for sending to AV.
                 * @return {Object}
                 */
                toJSON: function toJSON() {
                  var adds = null;
                  var removes = null;
                  var self2 = this;
                  var idToPointer = function idToPointer2(id) {
                    return {
                      __type: "Pointer",
                      className: self2._targetClassName,
                      objectId: id
                    };
                  };
                  var pointers = null;
                  if (this.relationsToAdd.length > 0) {
                    pointers = _.map(this.relationsToAdd, idToPointer);
                    adds = { __op: "AddRelation", objects: pointers };
                  }
                  if (this.relationsToRemove.length > 0) {
                    pointers = _.map(this.relationsToRemove, idToPointer);
                    removes = { __op: "RemoveRelation", objects: pointers };
                  }
                  if (adds && removes) {
                    return { __op: "Batch", ops: [adds, removes] };
                  }
                  return adds || removes || {};
                },
                _mergeWithPrevious: function _mergeWithPrevious(previous) {
                  if (!previous) {
                    return this;
                  } else if (previous instanceof AV2.Op.Unset) {
                    throw new Error("You can't modify a relation after deleting it.");
                  } else if (previous instanceof AV2.Op.Relation) {
                    if (previous._targetClassName && previous._targetClassName !== this._targetClassName) {
                      throw new Error("Related object must be of class " + previous._targetClassName + ", but " + this._targetClassName + " was passed in.");
                    }
                    var newAdd = _.union(_.difference(previous.relationsToAdd, this.relationsToRemove), this.relationsToAdd);
                    var newRemove = _.union(_.difference(previous.relationsToRemove, this.relationsToAdd), this.relationsToRemove);
                    var newRelation = new AV2.Op.Relation(newAdd, newRemove);
                    newRelation._targetClassName = this._targetClassName;
                    return newRelation;
                  } else {
                    throw new Error("Op is invalid after previous op.");
                  }
                },
                _estimate: function _estimate(oldValue, object, key) {
                  if (!oldValue) {
                    var relation = new AV2.Relation(object, key);
                    relation.targetClassName = this._targetClassName;
                  } else if (oldValue instanceof AV2.Relation) {
                    if (this._targetClassName) {
                      if (oldValue.targetClassName) {
                        if (oldValue.targetClassName !== this._targetClassName) {
                          throw new Error("Related object must be a " + oldValue.targetClassName + ", but a " + this._targetClassName + " was passed in.");
                        }
                      } else {
                        oldValue.targetClassName = this._targetClassName;
                      }
                    }
                    return oldValue;
                  } else {
                    throw new Error("Op is invalid after previous op.");
                  }
                }
              }
            );
            AV2.Op._registerDecoder("AddRelation", function(json) {
              return new AV2.Op.Relation(AV2._decode(json.objects), []);
            });
            AV2.Op._registerDecoder("RemoveRelation", function(json) {
              return new AV2.Op.Relation([], AV2._decode(json.objects));
            });
          };
        },
        /* 293 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _ = __webpack_require__(0);
          module2.exports = function(AV2) {
            AV2.Relation = function(parent, key) {
              if (!_.isString(key)) {
                throw new TypeError("key must be a string");
              }
              this.parent = parent;
              this.key = key;
              this.targetClassName = null;
            };
            AV2.Relation.reverseQuery = function(parentClass, relationKey, child) {
              var query = new AV2.Query(parentClass);
              query.equalTo(relationKey, child._toPointer());
              return query;
            };
            _.extend(
              AV2.Relation.prototype,
              /** @lends AV.Relation.prototype */
              {
                /**
                 * Makes sure that this relation has the right parent and key.
                 * @private
                 */
                _ensureParentAndKey: function _ensureParentAndKey(parent, key) {
                  this.parent = this.parent || parent;
                  this.key = this.key || key;
                  if (this.parent !== parent) {
                    throw new Error("Internal Error. Relation retrieved from two different Objects.");
                  }
                  if (this.key !== key) {
                    throw new Error("Internal Error. Relation retrieved from two different keys.");
                  }
                },
                /**
                 * Adds a AV.Object or an array of AV.Objects to the relation.
                 * @param {AV.Object|AV.Object[]} objects The item or items to add.
                 */
                add: function add(objects) {
                  if (!_.isArray(objects)) {
                    objects = [objects];
                  }
                  var change = new AV2.Op.Relation(objects, []);
                  this.parent.set(this.key, change);
                  this.targetClassName = change._targetClassName;
                },
                /**
                 * Removes a AV.Object or an array of AV.Objects from this relation.
                 * @param {AV.Object|AV.Object[]} objects The item or items to remove.
                 */
                remove: function remove(objects) {
                  if (!_.isArray(objects)) {
                    objects = [objects];
                  }
                  var change = new AV2.Op.Relation([], objects);
                  this.parent.set(this.key, change);
                  this.targetClassName = change._targetClassName;
                },
                /**
                 * Returns a JSON version of the object suitable for saving to disk.
                 * @return {Object}
                 */
                toJSON: function toJSON() {
                  return { __type: "Relation", className: this.targetClassName };
                },
                /**
                 * Returns a AV.Query that is limited to objects in this
                 * relation.
                 * @return {AV.Query}
                 */
                query: function query() {
                  var targetClass;
                  var query2;
                  if (!this.targetClassName) {
                    targetClass = AV2.Object._getSubclass(this.parent.className);
                    query2 = new AV2.Query(targetClass);
                    query2._defaultParams.redirectClassNameForKey = this.key;
                  } else {
                    targetClass = AV2.Object._getSubclass(this.targetClassName);
                    query2 = new AV2.Query(targetClass);
                  }
                  query2._addCondition("$relatedTo", "object", this.parent._toPointer());
                  query2._addCondition("$relatedTo", "key", this.key);
                  return query2;
                }
              }
            );
          };
        },
        /* 294 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _promise = __webpack_require__(3);
          var _promise2 = _interopRequireDefault(_promise);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var _ = __webpack_require__(0);
          var cos = __webpack_require__(295);
          var qiniu = __webpack_require__(296);
          var s3 = __webpack_require__(311);
          var AVError = __webpack_require__(29);
          var AVRequest = __webpack_require__(12)._request;
          var _require = __webpack_require__(15), tap = _require.tap, transformFetchOptions = _require.transformFetchOptions;
          var debug = __webpack_require__(37)("leancloud:file");
          var parseBase64 = __webpack_require__(315);
          module2.exports = function(AV2) {
            var extname = function extname2(path) {
              if (!_.isString(path))
                return "";
              return path.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4];
            };
            var b64Digit = function b64Digit2(number) {
              if (number < 26) {
                return String.fromCharCode(65 + number);
              }
              if (number < 52) {
                return String.fromCharCode(97 + (number - 26));
              }
              if (number < 62) {
                return String.fromCharCode(48 + (number - 52));
              }
              if (number === 62) {
                return "+";
              }
              if (number === 63) {
                return "/";
              }
              throw new Error("Tried to encode large digit " + number + " in base64.");
            };
            var encodeBase64 = function encodeBase642(array) {
              var chunks = [];
              chunks.length = Math.ceil(array.length / 3);
              _.times(chunks.length, function(i2) {
                var b1 = array[i2 * 3];
                var b2 = array[i2 * 3 + 1] || 0;
                var b3 = array[i2 * 3 + 2] || 0;
                var has2 = i2 * 3 + 1 < array.length;
                var has3 = i2 * 3 + 2 < array.length;
                chunks[i2] = [b64Digit(b1 >> 2 & 63), b64Digit(b1 << 4 & 48 | b2 >> 4 & 15), has2 ? b64Digit(b2 << 2 & 60 | b3 >> 6 & 3) : "=", has3 ? b64Digit(b3 & 63) : "="].join("");
              });
              return chunks.join("");
            };
            AV2.File = function(name2, data2, mimeType) {
              this.attributes = {
                name: name2,
                url: "",
                metaData: {},
                // 用来存储转换后要上传的 base64 String
                base64: ""
              };
              if (_.isString(data2)) {
                throw new TypeError("Creating an AV.File from a String is not yet supported.");
              }
              if (_.isArray(data2)) {
                this.attributes.metaData.size = data2.length;
                data2 = { base64: encodeBase64(data2) };
              }
              this._extName = "";
              this._data = data2;
              this._uploadHeaders = {};
              if (data2 && data2.blob && typeof data2.blob.uri === "string") {
                this._extName = extname(data2.blob.uri);
              }
              if (typeof Blob !== "undefined" && data2 instanceof Blob) {
                if (data2.size) {
                  this.attributes.metaData.size = data2.size;
                }
                if (data2.name) {
                  this._extName = extname(data2.name);
                }
              }
              var owner = void 0;
              if (data2 && data2.owner) {
                owner = data2.owner;
              } else if (!AV2._config.disableCurrentUser) {
                try {
                  owner = AV2.User.current();
                } catch (error) {
                  if ("SYNC_API_NOT_AVAILABLE" !== error.code) {
                    throw error;
                  }
                }
              }
              this.attributes.metaData.owner = owner ? owner.id : "unknown";
              this.set("mime_type", mimeType);
            };
            AV2.File.withURL = function(name2, url, metaData, type) {
              if (!name2 || !url) {
                throw new Error("Please provide file name and url");
              }
              var file = new AV2.File(name2, null, type);
              if (metaData) {
                for (var prop in metaData) {
                  if (!file.attributes.metaData[prop])
                    file.attributes.metaData[prop] = metaData[prop];
                }
              }
              file.attributes.url = url;
              file.attributes.metaData.__source = "external";
              file.attributes.metaData.size = 0;
              return file;
            };
            AV2.File.createWithoutData = function(objectId) {
              if (!objectId) {
                throw new TypeError("The objectId must be provided");
              }
              var file = new AV2.File();
              file.id = objectId;
              return file;
            };
            _.extend(
              AV2.File.prototype,
              /** @lends AV.File.prototype */
              {
                className: "_File",
                _toFullJSON: function _toFullJSON(seenObjects) {
                  var _this = this;
                  var full = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                  var json = _.clone(this.attributes);
                  AV2._objectEach(json, function(val, key) {
                    json[key] = AV2._encode(val, seenObjects, void 0, full);
                  });
                  AV2._objectEach(this._operations, function(val, key) {
                    json[key] = val;
                  });
                  if (_.has(this, "id")) {
                    json.objectId = this.id;
                  }
                  ["createdAt", "updatedAt"].forEach(function(key) {
                    if (_.has(_this, key)) {
                      var val = _this[key];
                      json[key] = _.isDate(val) ? val.toJSON() : val;
                    }
                  });
                  if (full) {
                    json.__type = "File";
                  }
                  return json;
                },
                /**
                 * Returns a JSON version of the file with meta data.
                 * Inverse to {@link AV.parseJSON}
                 * @since 3.0.0
                 * @return {Object}
                 */
                toFullJSON: function toFullJSON() {
                  var seenObjects = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                  return this._toFullJSON(seenObjects);
                },
                /**
                 * Returns a JSON version of the object.
                 * @return {Object}
                 */
                toJSON: function toJSON(key, holder) {
                  var seenObjects = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [this];
                  return this._toFullJSON(seenObjects, false);
                },
                /**
                 * Gets a Pointer referencing this file.
                 * @private
                 */
                _toPointer: function _toPointer() {
                  return {
                    __type: "Pointer",
                    className: this.className,
                    objectId: this.id
                  };
                },
                /**
                 * Returns the ACL for this file.
                 * @returns {AV.ACL} An instance of AV.ACL.
                 */
                getACL: function getACL() {
                  return this._acl;
                },
                /**
                 * Sets the ACL to be used for this file.
                 * @param {AV.ACL} acl An instance of AV.ACL.
                 */
                setACL: function setACL(acl) {
                  if (!(acl instanceof AV2.ACL)) {
                    return new AVError(AVError.OTHER_CAUSE, "ACL must be a AV.ACL.");
                  }
                  this._acl = acl;
                  return this;
                },
                /**
                 * Gets the name of the file. Before save is called, this is the filename
                 * given by the user. After save is called, that name gets prefixed with a
                 * unique identifier.
                 */
                name: function name2() {
                  return this.get("name");
                },
                /**
                 * Gets the url of the file. It is only available after you save the file or
                 * after you get the file from a AV.Object.
                 * @return {String}
                 */
                url: function url() {
                  return this.get("url");
                },
                /**
                 * Gets the attributs of the file object.
                 * @param {String} The attribute name which want to get.
                 * @returns {Any}
                 */
                get: function get(attrName) {
                  switch (attrName) {
                    case "objectId":
                      return this.id;
                    case "url":
                    case "name":
                    case "mime_type":
                    case "metaData":
                    case "createdAt":
                    case "updatedAt":
                      return this.attributes[attrName];
                    default:
                      return this.attributes.metaData[attrName];
                  }
                },
                /**
                 * Set the metaData of the file object.
                 * @param {Object} Object is an key value Object for setting metaData.
                 * @param {String} attr is an optional metadata key.
                 * @param {Object} value is an optional metadata value.
                 * @returns {String|Number|Array|Object}
                 */
                set: function set() {
                  var _this2 = this;
                  var set2 = function set3(attrName, value) {
                    switch (attrName) {
                      case "name":
                      case "url":
                      case "mime_type":
                      case "base64":
                      case "metaData":
                        _this2.attributes[attrName] = value;
                        break;
                      default:
                        _this2.attributes.metaData[attrName] = value;
                        break;
                    }
                  };
                  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }
                  switch (args.length) {
                    case 1:
                      for (var k in args[0]) {
                        set2(k, args[0][k]);
                      }
                      break;
                    case 2:
                      set2(args[0], args[1]);
                      break;
                  }
                  return this;
                },
                /**
                 * Set a header for the upload request.
                 * For more infomation, go to https://url.leanapp.cn/avfile-upload-headers
                 *
                 * @param {String} key header key
                 * @param {String} value header value
                 * @return {AV.File} this
                 */
                setUploadHeader: function setUploadHeader(key, value) {
                  this._uploadHeaders[key] = value;
                  return this;
                },
                /**
                 * <p>Returns the file's metadata JSON object if no arguments is given.Returns the
                 * metadata value if a key is given.Set metadata value if key and value are both given.</p>
                 * <p><pre>
                 *  var metadata = file.metaData(); //Get metadata JSON object.
                 *  var size = file.metaData('size');  // Get the size metadata value.
                 *  file.metaData('format', 'jpeg'); //set metadata attribute and value.
                 *</pre></p>
                 * @return {Object} The file's metadata JSON object.
                 * @param {String} attr an optional metadata key.
                 * @param {Object} value an optional metadata value.
                 **/
                metaData: function metaData(attr, value) {
                  if (attr && value) {
                    this.attributes.metaData[attr] = value;
                    return this;
                  } else if (attr && !value) {
                    return this.attributes.metaData[attr];
                  } else {
                    return this.attributes.metaData;
                  }
                },
                /**
                 * 如果文件是图片，获取图片的缩略图URL。可以传入宽度、高度、质量、格式等参数。
                 * @return {String} 缩略图URL
                 * @param {Number} width 宽度，单位：像素
                 * @param {Number} heigth 高度，单位：像素
                 * @param {Number} quality 质量，1-100的数字，默认100
                 * @param {Number} scaleToFit 是否将图片自适应大小。默认为true。
                 * @param {String} fmt 格式，默认为png，也可以为jpeg,gif等格式。
                 */
                thumbnailURL: function thumbnailURL(width, height) {
                  var quality = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 100;
                  var scaleToFit = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
                  var fmt = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "png";
                  var url = this.attributes.url;
                  if (!url) {
                    throw new Error("Invalid url.");
                  }
                  if (!width || !height || width <= 0 || height <= 0) {
                    throw new Error("Invalid width or height value.");
                  }
                  if (quality <= 0 || quality > 100) {
                    throw new Error("Invalid quality value.");
                  }
                  var mode = scaleToFit ? 2 : 1;
                  return url + "?imageView/" + mode + "/w/" + width + "/h/" + height + "/q/" + quality + "/format/" + fmt;
                },
                /**
                 * Returns the file's size.
                 * @return {Number} The file's size in bytes.
                 **/
                size: function size() {
                  return this.metaData().size;
                },
                /**
                 * Returns the file's owner.
                 * @return {String} The file's owner id.
                 */
                ownerId: function ownerId() {
                  return this.metaData().owner;
                },
                /**
                 * Destroy the file.
                 * @param {AuthOptions} options
                 * @return {Promise} A promise that is fulfilled when the destroy
                 *     completes.
                 */
                destroy: function destroy(options) {
                  if (!this.id) {
                    return _promise2.default.reject(new Error("The file id does not eixst."));
                  }
                  var request = AVRequest("files", null, this.id, "DELETE", null, options);
                  return request;
                },
                /**
                 * Request Qiniu upload token
                 * @param {string} type
                 * @return {Promise} Resolved with the response
                 * @private
                 */
                _fileToken: function _fileToken(type, authOptions) {
                  var name2 = this.attributes.name;
                  var extName = extname(name2);
                  if (!extName && this._extName) {
                    name2 += this._extName;
                    extName = this._extName;
                  }
                  var data2 = {
                    name: name2,
                    keep_file_name: authOptions.keepFileName,
                    key: authOptions.key,
                    ACL: this._acl,
                    mime_type: type,
                    metaData: this.attributes.metaData
                  };
                  return AVRequest("fileTokens", null, null, "POST", data2, authOptions);
                },
                /**
                 * @callback UploadProgressCallback
                 * @param {XMLHttpRequestProgressEvent} event - The progress event with 'loaded' and 'total' attributes
                 */
                /**
                 * Saves the file to the AV cloud.
                 * @param {AuthOptions} [options] AuthOptions plus:
                 * @param {UploadProgressCallback} [options.onprogress] 文件上传进度，在 Node.js 中无效，回调参数说明详见 {@link UploadProgressCallback}。
                 * @param {boolean} [options.keepFileName = false] 保留下载文件的文件名。
                 * @param {string} [options.key] 指定文件的 key。设置该选项需要使用 masterKey
                 * @return {Promise} Promise that is resolved when the save finishes.
                 */
                save: function save() {
                  var _this3 = this;
                  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                  if (this.id) {
                    throw new Error("File is already saved.");
                  }
                  if (!this._previousSave) {
                    if (this._data) {
                      var mimeType = this.get("mime_type");
                      this._previousSave = this._fileToken(mimeType, options).then(function(uploadInfo) {
                        if (uploadInfo.mime_type) {
                          mimeType = uploadInfo.mime_type;
                          _this3.set("mime_type", mimeType);
                        }
                        _this3._token = uploadInfo.token;
                        return _promise2.default.resolve().then(function() {
                          var data3 = _this3._data;
                          if (data3 && data3.base64) {
                            return parseBase64(data3.base64, mimeType);
                          }
                          if (data3 && data3.blob) {
                            if (!data3.blob.type && mimeType) {
                              data3.blob.type = mimeType;
                            }
                            if (!data3.blob.name) {
                              data3.blob.name = _this3.get("name");
                            }
                            return data3.blob;
                          }
                          if (typeof Blob !== "undefined" && data3 instanceof Blob) {
                            return data3;
                          }
                          throw new TypeError("malformed file data");
                        }).then(function(data3) {
                          var _options = _.extend({}, options);
                          if (options.onprogress) {
                            _options.onprogress = function(event2) {
                              if (event2.direction === "download")
                                return;
                              return options.onprogress(event2);
                            };
                          }
                          switch (uploadInfo.provider) {
                            case "s3":
                              return s3(uploadInfo, data3, _this3, _options);
                            case "qcloud":
                              return cos(uploadInfo, data3, _this3, _options);
                            case "qiniu":
                            default:
                              return qiniu(uploadInfo, data3, _this3, _options);
                          }
                        }).then(tap(function() {
                          return _this3._callback(true);
                        }), function(error) {
                          _this3._callback(false);
                          throw error;
                        });
                      });
                    } else if (this.attributes.url && this.attributes.metaData.__source === "external") {
                      var data2 = {
                        name: this.attributes.name,
                        ACL: this._acl,
                        metaData: this.attributes.metaData,
                        mime_type: this.mimeType,
                        url: this.attributes.url
                      };
                      this._previousSave = AVRequest("files", null, null, "post", data2, options).then(function(response) {
                        _this3.id = response.objectId;
                        return _this3;
                      });
                    }
                  }
                  return this._previousSave;
                },
                _callback: function _callback(success) {
                  AVRequest("fileCallback", null, null, "post", {
                    token: this._token,
                    result: success
                  }).catch(debug);
                  delete this._token;
                  delete this._data;
                },
                /**
                 * fetch the file from server. If the server's representation of the
                 * model differs from its current attributes, they will be overriden,
                 * @param {Object} fetchOptions Optional options to set 'keys',
                 *      'include' and 'includeACL' option.
                 * @param {AuthOptions} options
                 * @return {Promise} A promise that is fulfilled when the fetch
                 *     completes.
                 */
                fetch: function fetch(fetchOptions, options) {
                  if (!this.id) {
                    throw new Error("Cannot fetch unsaved file");
                  }
                  var request = AVRequest("files", null, this.id, "GET", transformFetchOptions(fetchOptions), options);
                  return request.then(this._finishFetch.bind(this));
                },
                _finishFetch: function _finishFetch(response) {
                  var value = AV2.Object.prototype.parse(response);
                  value.attributes = {
                    name: value.name,
                    url: value.url,
                    mime_type: value.mime_type,
                    bucket: value.bucket
                  };
                  value.attributes.metaData = value.metaData || {};
                  value.id = value.objectId;
                  delete value.objectId;
                  delete value.metaData;
                  delete value.url;
                  delete value.name;
                  delete value.mime_type;
                  delete value.bucket;
                  _.extend(this, value);
                  return this;
                }
              }
            );
          };
        },
        /* 295 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _require = __webpack_require__(38), getAdapter = _require.getAdapter;
          var debug = __webpack_require__(37)("cos");
          module2.exports = function(uploadInfo, data2, file) {
            var saveOptions = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            var url = uploadInfo.upload_url + "?sign=" + encodeURIComponent(uploadInfo.token);
            var fileFormData = {
              field: "fileContent",
              data: data2,
              name: file.attributes.name
            };
            var options = {
              headers: file._uploadHeaders,
              data: {
                op: "upload"
              },
              onprogress: saveOptions.onprogress
            };
            debug("url: %s, file: %o, options: %o", url, fileFormData, options);
            var upload = getAdapter("upload");
            return upload(url, fileFormData, options).then(function(response) {
              debug(response.status, response.data);
              if (response.ok === false) {
                var error = new Error(response.status);
                error.response = response;
                throw error;
              }
              file.attributes.url = uploadInfo.url;
              file._bucket = uploadInfo.bucket;
              file.id = uploadInfo.objectId;
              return file;
            }, function(error) {
              var response = error.response;
              if (response) {
                debug(response.status, response.data);
                error.statusCode = response.status;
                error.response = response.data;
              }
              throw error;
            });
          };
        },
        /* 296 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _getPrototypeOf = __webpack_require__(160);
          var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
          var _possibleConstructorReturn2 = __webpack_require__(297);
          var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
          var _inherits2 = __webpack_require__(298);
          var _inherits3 = _interopRequireDefault(_inherits2);
          var _promise = __webpack_require__(3);
          var _promise2 = _interopRequireDefault(_promise);
          var _classCallCheck2 = __webpack_require__(306);
          var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
          var _createClass2 = __webpack_require__(307);
          var _createClass3 = _interopRequireDefault(_createClass2);
          var _getIterator2 = __webpack_require__(167);
          var _getIterator3 = _interopRequireDefault(_getIterator2);
          var _stringify = __webpack_require__(19);
          var _stringify2 = _interopRequireDefault(_stringify);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var _require = __webpack_require__(38), getAdapter = _require.getAdapter;
          var debug = __webpack_require__(37)("leancloud:qiniu");
          var ajax = __webpack_require__(60);
          var btoa2 = __webpack_require__(310);
          var SHARD_THRESHOLD = 1024 * 1024 * 64;
          var CHUNK_SIZE = 1024 * 1024 * 16;
          function upload(uploadInfo, data2, file) {
            var saveOptions = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            var uptoken = uploadInfo.token;
            var url = uploadInfo.upload_url || "https://upload.qiniup.com";
            var fileFormData = {
              field: "file",
              data: data2,
              name: file.attributes.name
            };
            var options = {
              headers: file._uploadHeaders,
              data: {
                name: file.attributes.name,
                key: uploadInfo.key,
                token: uptoken
              },
              onprogress: saveOptions.onprogress
            };
            debug("url: %s, file: %o, options: %o", url, fileFormData, options);
            var upload2 = getAdapter("upload");
            return upload2(url, fileFormData, options).then(function(response) {
              debug(response.status, response.data);
              if (response.ok === false) {
                var message = response.status;
                if (response.data) {
                  if (response.data.error) {
                    message = response.data.error;
                  } else {
                    message = (0, _stringify2.default)(response.data);
                  }
                }
                var error = new Error(message);
                error.response = response;
                throw error;
              }
              file.attributes.url = uploadInfo.url;
              file._bucket = uploadInfo.bucket;
              file.id = uploadInfo.objectId;
              return file;
            }, function(error) {
              var response = error.response;
              if (response) {
                debug(response.status, response.data);
                error.statusCode = response.status;
                error.response = response.data;
              }
              throw error;
            });
          }
          function urlSafeBase64(string) {
            var base64 = btoa2(unescape(encodeURIComponent(string)));
            var result = "";
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = void 0;
            try {
              for (var _iterator = (0, _getIterator3.default)(base64), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var ch = _step.value;
                switch (ch) {
                  case "+":
                    result += "-";
                    break;
                  case "/":
                    result += "_";
                    break;
                  default:
                    result += ch;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
            return result;
          }
          var ShardUploader = function() {
            function ShardUploader2(uploadInfo, data2, file, saveOptions) {
              var _this = this;
              (0, _classCallCheck3.default)(this, ShardUploader2);
              this.uploadInfo = uploadInfo;
              this.data = data2;
              this.file = file;
              this.size = void 0;
              this.offset = 0;
              this.uploadedChunks = 0;
              var key = urlSafeBase64(uploadInfo.key);
              var uploadURL = uploadInfo.upload_url || "https://upload.qiniup.com";
              this.baseURL = uploadURL + "/buckets/" + uploadInfo.bucket + "/objects/" + key + "/uploads";
              this.upToken = "UpToken " + uploadInfo.token;
              this.uploaded = 0;
              if (saveOptions && saveOptions.onprogress) {
                this.onProgress = function(_ref) {
                  var loaded = _ref.loaded;
                  loaded += _this.uploadedChunks * CHUNK_SIZE;
                  if (loaded <= _this.uploaded) {
                    return;
                  }
                  if (_this.size) {
                    saveOptions.onprogress({
                      loaded,
                      total: _this.size,
                      percent: loaded / _this.size * 100
                    });
                  } else {
                    saveOptions.onprogress({ loaded });
                  }
                  _this.uploaded = loaded;
                };
              }
            }
            (0, _createClass3.default)(ShardUploader2, [{
              key: "getUploadId",
              value: function getUploadId() {
                return ajax({
                  method: "POST",
                  url: this.baseURL,
                  headers: {
                    Authorization: this.upToken
                  }
                }).then(function(res) {
                  return res.uploadId;
                });
              }
            }, {
              key: "getChunk",
              value: function getChunk() {
                throw new Error("Not implemented");
              }
              /**
               * @param {string} uploadId
               * @param {number} partNumber
               * @param {any} data
               * @returns {Promise<{ partNumber: number, etag: string }>}
               */
            }, {
              key: "uploadPart",
              value: function uploadPart(uploadId, partNumber, data2) {
                return ajax({
                  method: "PUT",
                  url: this.baseURL + "/" + uploadId + "/" + partNumber,
                  headers: {
                    Authorization: this.upToken
                  },
                  data: data2,
                  onprogress: this.onProgress
                }).then(function(_ref2) {
                  var etag = _ref2.etag;
                  return { partNumber, etag };
                });
              }
            }, {
              key: "stopUpload",
              value: function stopUpload(uploadId) {
                return ajax({
                  method: "DELETE",
                  url: this.baseURL + "/" + uploadId,
                  headers: {
                    Authorization: this.upToken
                  }
                });
              }
            }, {
              key: "upload",
              value: function upload2() {
                var _this2 = this;
                var parts = [];
                return this.getUploadId().then(function(uploadId) {
                  var uploadPart = function uploadPart2() {
                    return _promise2.default.resolve(_this2.getChunk()).then(function(chunk) {
                      if (!chunk) {
                        return;
                      }
                      var partNumber = parts.length + 1;
                      return _this2.uploadPart(uploadId, partNumber, chunk).then(function(part) {
                        parts.push(part);
                        _this2.uploadedChunks++;
                        return uploadPart2();
                      });
                    }).catch(function(error) {
                      return _this2.stopUpload(uploadId).then(function() {
                        return _promise2.default.reject(error);
                      });
                    });
                  };
                  return uploadPart().then(function() {
                    return ajax({
                      method: "POST",
                      url: _this2.baseURL + "/" + uploadId,
                      headers: {
                        Authorization: _this2.upToken
                      },
                      data: {
                        parts,
                        fname: _this2.file.attributes.name,
                        mimeType: _this2.file.attributes.mime_type
                      }
                    });
                  });
                }).then(function() {
                  _this2.file.attributes.url = _this2.uploadInfo.url;
                  _this2.file._bucket = _this2.uploadInfo.bucket;
                  _this2.file.id = _this2.uploadInfo.objectId;
                  return _this2.file;
                });
              }
            }]);
            return ShardUploader2;
          }();
          var BlobUploader = function(_ShardUploader) {
            (0, _inherits3.default)(BlobUploader2, _ShardUploader);
            function BlobUploader2(uploadInfo, data2, file, saveOptions) {
              (0, _classCallCheck3.default)(this, BlobUploader2);
              var _this3 = (0, _possibleConstructorReturn3.default)(this, (BlobUploader2.__proto__ || (0, _getPrototypeOf2.default)(BlobUploader2)).call(this, uploadInfo, data2, file, saveOptions));
              _this3.size = data2.size;
              return _this3;
            }
            (0, _createClass3.default)(BlobUploader2, [{
              key: "getChunk",
              value: function getChunk() {
                if (this.offset >= this.size) {
                  return null;
                }
                var chunk = this.data.slice(this.offset, this.offset + CHUNK_SIZE);
                this.offset += chunk.size;
                return chunk;
              }
            }]);
            return BlobUploader2;
          }(ShardUploader);
          function isBlob(data2) {
            return typeof Blob !== "undefined" && data2 instanceof Blob;
          }
          module2.exports = function(uploadInfo, data2, file) {
            var saveOptions = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            if (isBlob(data2) && data2.size >= SHARD_THRESHOLD) {
              return new BlobUploader(uploadInfo, data2, file, saveOptions).upload();
            }
            return upload(uploadInfo, data2, file, saveOptions);
          };
        },
        /* 297 */
        /***/
        function(module2, exports2, __webpack_require__) {
          exports2.__esModule = true;
          var _typeof2 = __webpack_require__(30);
          var _typeof3 = _interopRequireDefault(_typeof2);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          exports2.default = function(self2, call) {
            if (!self2) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self2;
          };
        },
        /* 298 */
        /***/
        function(module2, exports2, __webpack_require__) {
          exports2.__esModule = true;
          var _setPrototypeOf = __webpack_require__(299);
          var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);
          var _create = __webpack_require__(303);
          var _create2 = _interopRequireDefault(_create);
          var _typeof2 = __webpack_require__(30);
          var _typeof3 = _interopRequireDefault(_typeof2);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          exports2.default = function(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
            }
            subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            if (superClass)
              _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
          };
        },
        /* 299 */
        /***/
        function(module2, exports2, __webpack_require__) {
          module2.exports = { "default": __webpack_require__(300), __esModule: true };
        },
        /* 300 */
        /***/
        function(module2, exports2, __webpack_require__) {
          __webpack_require__(301);
          module2.exports = __webpack_require__(2).Object.setPrototypeOf;
        },
        /* 301 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var $export = __webpack_require__(16);
          $export($export.S, "Object", { setPrototypeOf: __webpack_require__(302).set });
        },
        /* 302 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var isObject = __webpack_require__(20);
          var anObject = __webpack_require__(17);
          var check = function(O, proto) {
            anObject(O);
            if (!isObject(proto) && proto !== null)
              throw TypeError(proto + ": can't set as prototype!");
          };
          module2.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? (
              // eslint-disable-line
              function(test, buggy, set) {
                try {
                  set = __webpack_require__(31)(Function.call, __webpack_require__(94).f(Object.prototype, "__proto__").set, 2);
                  set(test, []);
                  buggy = !(test instanceof Array);
                } catch (e2) {
                  buggy = true;
                }
                return function setPrototypeOf(O, proto) {
                  check(O, proto);
                  if (buggy)
                    O.__proto__ = proto;
                  else
                    set(O, proto);
                  return O;
                };
              }({}, false)
            ) : void 0),
            check
          };
        },
        /* 303 */
        /***/
        function(module2, exports2, __webpack_require__) {
          module2.exports = { "default": __webpack_require__(304), __esModule: true };
        },
        /* 304 */
        /***/
        function(module2, exports2, __webpack_require__) {
          __webpack_require__(305);
          var $Object = __webpack_require__(2).Object;
          module2.exports = function create(P, D) {
            return $Object.create(P, D);
          };
        },
        /* 305 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var $export = __webpack_require__(16);
          $export($export.S, "Object", { create: __webpack_require__(66) });
        },
        /* 306 */
        /***/
        function(module2, exports2, __webpack_require__) {
          exports2.__esModule = true;
          exports2.default = function(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          };
        },
        /* 307 */
        /***/
        function(module2, exports2, __webpack_require__) {
          exports2.__esModule = true;
          var _defineProperty = __webpack_require__(90);
          var _defineProperty2 = _interopRequireDefault(_defineProperty);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          exports2.default = function() {
            function defineProperties(target, props) {
              for (var i2 = 0; i2 < props.length; i2++) {
                var descriptor = props[i2];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                  descriptor.writable = true;
                (0, _defineProperty2.default)(target, descriptor.key, descriptor);
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps)
                defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();
        },
        /* 308 */
        /***/
        function(module2, exports2, __webpack_require__) {
          __webpack_require__(56);
          __webpack_require__(39);
          module2.exports = __webpack_require__(309);
        },
        /* 309 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var anObject = __webpack_require__(17);
          var get = __webpack_require__(72);
          module2.exports = __webpack_require__(2).getIterator = function(it) {
            var iterFn = get(it);
            if (typeof iterFn != "function")
              throw TypeError(it + " is not iterable!");
            return anObject(iterFn.call(it));
          };
        },
        /* 310 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          module2.exports = function(string) {
            var result = "";
            for (var i2 = 0; i2 < string.length; ) {
              var a = string.charCodeAt(i2++);
              var b = string.charCodeAt(i2++);
              var c = string.charCodeAt(i2++);
              if (a > 255 || b > 255 || c > 255) {
                throw new TypeError("Failed to encode base64: The string to be encoded contains characters outside of the Latin1 range.");
              }
              var bitmap = a << 16 | b << 8 | c;
              result += b64.charAt(bitmap >> 18 & 63) + b64.charAt(bitmap >> 12 & 63) + b64.charAt(bitmap >> 6 & 63) + b64.charAt(bitmap & 63);
            }
            var rest = string.length % 3;
            return rest ? result.slice(0, rest - 3) + "===".substring(rest) : result;
          };
        },
        /* 311 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _ = __webpack_require__(0);
          var ajax = __webpack_require__(60);
          module2.exports = function upload(uploadInfo, data2, file) {
            var saveOptions = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
            return ajax({
              url: uploadInfo.upload_url,
              method: "PUT",
              data: data2,
              headers: _.extend({
                "Content-Type": file.get("mime_type"),
                "Cache-Control": "public, max-age=31536000"
              }, file._uploadHeaders),
              onprogress: saveOptions.onprogress
            }).then(function() {
              file.attributes.url = uploadInfo.url;
              file._bucket = uploadInfo.bucket;
              file.id = uploadInfo.objectId;
              return file;
            });
          };
        },
        /* 312 */
        /***/
        function(module2, exports2, __webpack_require__) {
          (function() {
            var crypt = __webpack_require__(313), utf8 = __webpack_require__(168).utf8, isBuffer = __webpack_require__(314), bin = __webpack_require__(168).bin, md52 = function(message, options) {
              if (message.constructor == String)
                if (options && options.encoding === "binary")
                  message = bin.stringToBytes(message);
                else
                  message = utf8.stringToBytes(message);
              else if (isBuffer(message))
                message = Array.prototype.slice.call(message, 0);
              else if (!Array.isArray(message))
                message = message.toString();
              var m = crypt.bytesToWords(message), l2 = message.length * 8, a = 1732584193, b = -271733879, c = -1732584194, d2 = 271733878;
              for (var i2 = 0; i2 < m.length; i2++) {
                m[i2] = (m[i2] << 8 | m[i2] >>> 24) & 16711935 | (m[i2] << 24 | m[i2] >>> 8) & 4278255360;
              }
              m[l2 >>> 5] |= 128 << l2 % 32;
              m[(l2 + 64 >>> 9 << 4) + 14] = l2;
              var FF = md52._ff, GG = md52._gg, HH = md52._hh, II = md52._ii;
              for (var i2 = 0; i2 < m.length; i2 += 16) {
                var aa = a, bb = b, cc = c, dd = d2;
                a = FF(a, b, c, d2, m[i2 + 0], 7, -680876936);
                d2 = FF(d2, a, b, c, m[i2 + 1], 12, -389564586);
                c = FF(c, d2, a, b, m[i2 + 2], 17, 606105819);
                b = FF(b, c, d2, a, m[i2 + 3], 22, -1044525330);
                a = FF(a, b, c, d2, m[i2 + 4], 7, -176418897);
                d2 = FF(d2, a, b, c, m[i2 + 5], 12, 1200080426);
                c = FF(c, d2, a, b, m[i2 + 6], 17, -1473231341);
                b = FF(b, c, d2, a, m[i2 + 7], 22, -45705983);
                a = FF(a, b, c, d2, m[i2 + 8], 7, 1770035416);
                d2 = FF(d2, a, b, c, m[i2 + 9], 12, -1958414417);
                c = FF(c, d2, a, b, m[i2 + 10], 17, -42063);
                b = FF(b, c, d2, a, m[i2 + 11], 22, -1990404162);
                a = FF(a, b, c, d2, m[i2 + 12], 7, 1804603682);
                d2 = FF(d2, a, b, c, m[i2 + 13], 12, -40341101);
                c = FF(c, d2, a, b, m[i2 + 14], 17, -1502002290);
                b = FF(b, c, d2, a, m[i2 + 15], 22, 1236535329);
                a = GG(a, b, c, d2, m[i2 + 1], 5, -165796510);
                d2 = GG(d2, a, b, c, m[i2 + 6], 9, -1069501632);
                c = GG(c, d2, a, b, m[i2 + 11], 14, 643717713);
                b = GG(b, c, d2, a, m[i2 + 0], 20, -373897302);
                a = GG(a, b, c, d2, m[i2 + 5], 5, -701558691);
                d2 = GG(d2, a, b, c, m[i2 + 10], 9, 38016083);
                c = GG(c, d2, a, b, m[i2 + 15], 14, -660478335);
                b = GG(b, c, d2, a, m[i2 + 4], 20, -405537848);
                a = GG(a, b, c, d2, m[i2 + 9], 5, 568446438);
                d2 = GG(d2, a, b, c, m[i2 + 14], 9, -1019803690);
                c = GG(c, d2, a, b, m[i2 + 3], 14, -187363961);
                b = GG(b, c, d2, a, m[i2 + 8], 20, 1163531501);
                a = GG(a, b, c, d2, m[i2 + 13], 5, -1444681467);
                d2 = GG(d2, a, b, c, m[i2 + 2], 9, -51403784);
                c = GG(c, d2, a, b, m[i2 + 7], 14, 1735328473);
                b = GG(b, c, d2, a, m[i2 + 12], 20, -1926607734);
                a = HH(a, b, c, d2, m[i2 + 5], 4, -378558);
                d2 = HH(d2, a, b, c, m[i2 + 8], 11, -2022574463);
                c = HH(c, d2, a, b, m[i2 + 11], 16, 1839030562);
                b = HH(b, c, d2, a, m[i2 + 14], 23, -35309556);
                a = HH(a, b, c, d2, m[i2 + 1], 4, -1530992060);
                d2 = HH(d2, a, b, c, m[i2 + 4], 11, 1272893353);
                c = HH(c, d2, a, b, m[i2 + 7], 16, -155497632);
                b = HH(b, c, d2, a, m[i2 + 10], 23, -1094730640);
                a = HH(a, b, c, d2, m[i2 + 13], 4, 681279174);
                d2 = HH(d2, a, b, c, m[i2 + 0], 11, -358537222);
                c = HH(c, d2, a, b, m[i2 + 3], 16, -722521979);
                b = HH(b, c, d2, a, m[i2 + 6], 23, 76029189);
                a = HH(a, b, c, d2, m[i2 + 9], 4, -640364487);
                d2 = HH(d2, a, b, c, m[i2 + 12], 11, -421815835);
                c = HH(c, d2, a, b, m[i2 + 15], 16, 530742520);
                b = HH(b, c, d2, a, m[i2 + 2], 23, -995338651);
                a = II(a, b, c, d2, m[i2 + 0], 6, -198630844);
                d2 = II(d2, a, b, c, m[i2 + 7], 10, 1126891415);
                c = II(c, d2, a, b, m[i2 + 14], 15, -1416354905);
                b = II(b, c, d2, a, m[i2 + 5], 21, -57434055);
                a = II(a, b, c, d2, m[i2 + 12], 6, 1700485571);
                d2 = II(d2, a, b, c, m[i2 + 3], 10, -1894986606);
                c = II(c, d2, a, b, m[i2 + 10], 15, -1051523);
                b = II(b, c, d2, a, m[i2 + 1], 21, -2054922799);
                a = II(a, b, c, d2, m[i2 + 8], 6, 1873313359);
                d2 = II(d2, a, b, c, m[i2 + 15], 10, -30611744);
                c = II(c, d2, a, b, m[i2 + 6], 15, -1560198380);
                b = II(b, c, d2, a, m[i2 + 13], 21, 1309151649);
                a = II(a, b, c, d2, m[i2 + 4], 6, -145523070);
                d2 = II(d2, a, b, c, m[i2 + 11], 10, -1120210379);
                c = II(c, d2, a, b, m[i2 + 2], 15, 718787259);
                b = II(b, c, d2, a, m[i2 + 9], 21, -343485551);
                a = a + aa >>> 0;
                b = b + bb >>> 0;
                c = c + cc >>> 0;
                d2 = d2 + dd >>> 0;
              }
              return crypt.endian([a, b, c, d2]);
            };
            md52._ff = function(a, b, c, d2, x, s, t2) {
              var n2 = a + (b & c | ~b & d2) + (x >>> 0) + t2;
              return (n2 << s | n2 >>> 32 - s) + b;
            };
            md52._gg = function(a, b, c, d2, x, s, t2) {
              var n2 = a + (b & d2 | c & ~d2) + (x >>> 0) + t2;
              return (n2 << s | n2 >>> 32 - s) + b;
            };
            md52._hh = function(a, b, c, d2, x, s, t2) {
              var n2 = a + (b ^ c ^ d2) + (x >>> 0) + t2;
              return (n2 << s | n2 >>> 32 - s) + b;
            };
            md52._ii = function(a, b, c, d2, x, s, t2) {
              var n2 = a + (c ^ (b | ~d2)) + (x >>> 0) + t2;
              return (n2 << s | n2 >>> 32 - s) + b;
            };
            md52._blocksize = 16;
            md52._digestsize = 16;
            module2.exports = function(message, options) {
              if (message === void 0 || message === null)
                throw new Error("Illegal argument " + message);
              var digestbytes = crypt.wordsToBytes(md52(message, options));
              return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt.bytesToHex(digestbytes);
            };
          })();
        },
        /* 313 */
        /***/
        function(module2, exports2) {
          (function() {
            var base64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", crypt = {
              // Bit-wise rotation left
              rotl: function(n2, b) {
                return n2 << b | n2 >>> 32 - b;
              },
              // Bit-wise rotation right
              rotr: function(n2, b) {
                return n2 << 32 - b | n2 >>> b;
              },
              // Swap big-endian to little-endian and vice versa
              endian: function(n2) {
                if (n2.constructor == Number) {
                  return crypt.rotl(n2, 8) & 16711935 | crypt.rotl(n2, 24) & 4278255360;
                }
                for (var i2 = 0; i2 < n2.length; i2++)
                  n2[i2] = crypt.endian(n2[i2]);
                return n2;
              },
              // Generate an array of any length of random bytes
              randomBytes: function(n2) {
                for (var bytes = []; n2 > 0; n2--)
                  bytes.push(Math.floor(Math.random() * 256));
                return bytes;
              },
              // Convert a byte array to big-endian 32-bit words
              bytesToWords: function(bytes) {
                for (var words = [], i2 = 0, b = 0; i2 < bytes.length; i2++, b += 8)
                  words[b >>> 5] |= bytes[i2] << 24 - b % 32;
                return words;
              },
              // Convert big-endian 32-bit words to a byte array
              wordsToBytes: function(words) {
                for (var bytes = [], b = 0; b < words.length * 32; b += 8)
                  bytes.push(words[b >>> 5] >>> 24 - b % 32 & 255);
                return bytes;
              },
              // Convert a byte array to a hex string
              bytesToHex: function(bytes) {
                for (var hex = [], i2 = 0; i2 < bytes.length; i2++) {
                  hex.push((bytes[i2] >>> 4).toString(16));
                  hex.push((bytes[i2] & 15).toString(16));
                }
                return hex.join("");
              },
              // Convert a hex string to a byte array
              hexToBytes: function(hex) {
                for (var bytes = [], c = 0; c < hex.length; c += 2)
                  bytes.push(parseInt(hex.substr(c, 2), 16));
                return bytes;
              },
              // Convert a byte array to a base-64 string
              bytesToBase64: function(bytes) {
                for (var base64 = [], i2 = 0; i2 < bytes.length; i2 += 3) {
                  var triplet = bytes[i2] << 16 | bytes[i2 + 1] << 8 | bytes[i2 + 2];
                  for (var j = 0; j < 4; j++)
                    if (i2 * 8 + j * 6 <= bytes.length * 8)
                      base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 63));
                    else
                      base64.push("=");
                }
                return base64.join("");
              },
              // Convert a base-64 string to a byte array
              base64ToBytes: function(base64) {
                base64 = base64.replace(/[^A-Z0-9+\/]/ig, "");
                for (var bytes = [], i2 = 0, imod4 = 0; i2 < base64.length; imod4 = ++i2 % 4) {
                  if (imod4 == 0)
                    continue;
                  bytes.push((base64map.indexOf(base64.charAt(i2 - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i2)) >>> 6 - imod4 * 2);
                }
                return bytes;
              }
            };
            module2.exports = crypt;
          })();
        },
        /* 314 */
        /***/
        function(module2, exports2) {
          /*!
           * Determine if an object is a Buffer
           *
           * @author   Feross Aboukhadijeh <https://feross.org>
           * @license  MIT
           */
          module2.exports = function(obj) {
            return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
          };
          function isBuffer(obj) {
            return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
          }
          function isSlowBuffer(obj) {
            return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isBuffer(obj.slice(0, 0));
          }
        },
        /* 315 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var dataURItoBlob = function dataURItoBlob2(dataURI, type) {
            var byteString;
            if (dataURI.indexOf("base64") < 0) {
              byteString = atob(dataURI);
            } else if (dataURI.split(",")[0].indexOf("base64") >= 0) {
              type = type || dataURI.split(",")[0].split(":")[1].split(";")[0];
              byteString = atob(dataURI.split(",")[1]);
            } else {
              byteString = unescape(dataURI.split(",")[1]);
            }
            var ia = new Uint8Array(byteString.length);
            for (var i2 = 0; i2 < byteString.length; i2++) {
              ia[i2] = byteString.charCodeAt(i2);
            }
            return new Blob([ia], { type });
          };
          module2.exports = dataURItoBlob;
        },
        /* 316 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _getOwnPropertyDescriptor = __webpack_require__(317);
          var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);
          var _stringify = __webpack_require__(19);
          var _stringify2 = _interopRequireDefault(_stringify);
          var _slicedToArray2 = __webpack_require__(320);
          var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
          var _promise = __webpack_require__(3);
          var _promise2 = _interopRequireDefault(_promise);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var _ = __webpack_require__(0);
          var AVError = __webpack_require__(29);
          var _require = __webpack_require__(12), _request = _require._request;
          var _require2 = __webpack_require__(15), isNullOrUndefined = _require2.isNullOrUndefined, ensureArray = _require2.ensureArray, transformFetchOptions = _require2.transformFetchOptions, setValue = _require2.setValue, findValue = _require2.findValue, isPlainObject = _require2.isPlainObject, continueWhile = _require2.continueWhile;
          var recursiveToPointer = function recursiveToPointer2(value) {
            if (_.isArray(value))
              return value.map(recursiveToPointer2);
            if (isPlainObject(value))
              return _.mapObject(value, recursiveToPointer2);
            if (_.isObject(value) && value._toPointer)
              return value._toPointer();
            return value;
          };
          var RESERVED_KEYS = ["objectId", "createdAt", "updatedAt"];
          var checkReservedKey = function checkReservedKey2(key) {
            if (RESERVED_KEYS.indexOf(key) !== -1) {
              throw new Error("key[" + key + "] is reserved");
            }
          };
          var handleBatchResults = function handleBatchResults2(results) {
            var firstError = _.find(results, function(result) {
              return result instanceof Error;
            });
            if (!firstError) {
              return results;
            }
            var error = new AVError(firstError.code, firstError.message);
            error.results = results;
            throw error;
          };
          function getValue(object, prop) {
            if (!(object && object[prop])) {
              return null;
            }
            return _.isFunction(object[prop]) ? object[prop]() : object[prop];
          }
          module2.exports = function(AV2) {
            AV2.Object = function(attributes, options) {
              if (_.isString(attributes)) {
                return AV2.Object._create.apply(this, arguments);
              }
              attributes = attributes || {};
              if (options && options.parse) {
                attributes = this.parse(attributes);
                attributes = this._mergeMagicFields(attributes);
              }
              var defaults2 = getValue(this, "defaults");
              if (defaults2) {
                attributes = _.extend({}, defaults2, attributes);
              }
              if (options && options.collection) {
                this.collection = options.collection;
              }
              this._serverData = {};
              this._opSetQueue = [{}];
              this._flags = {};
              this.attributes = {};
              this._hashedJSON = {};
              this._escapedAttributes = {};
              this.cid = _.uniqueId("c");
              this.changed = {};
              this._silent = {};
              this._pending = {};
              this.set(attributes, { silent: true });
              this.changed = {};
              this._silent = {};
              this._pending = {};
              this._hasData = true;
              this._previousAttributes = _.clone(this.attributes);
              this.initialize.apply(this, arguments);
            };
            AV2.Object.saveAll = function(list, options) {
              return AV2.Object._deepSaveAsync(list, null, options);
            };
            AV2.Object.fetchAll = function(objects, options) {
              return _promise2.default.resolve().then(function() {
                return _request("batch", null, null, "POST", {
                  requests: _.map(objects, function(object) {
                    if (!object.className)
                      throw new Error("object must have className to fetch");
                    if (!object.id)
                      throw new Error("object must have id to fetch");
                    if (object.dirty())
                      throw new Error("object is modified but not saved");
                    return {
                      method: "GET",
                      path: "/1.1/classes/" + object.className + "/" + object.id
                    };
                  })
                }, options);
              }).then(function(response) {
                var results = _.map(objects, function(object, i2) {
                  if (response[i2].success) {
                    var fetchedAttrs = object.parse(response[i2].success);
                    object._cleanupUnsetKeys(fetchedAttrs);
                    object._finishFetch(fetchedAttrs);
                    return object;
                  }
                  if (response[i2].success === null) {
                    return new AVError(AVError.OBJECT_NOT_FOUND, "Object not found.");
                  }
                  return new AVError(response[i2].error.code, response[i2].error.error);
                });
                return handleBatchResults(results);
              });
            };
            _.extend(
              AV2.Object.prototype,
              AV2.Events,
              /** @lends AV.Object.prototype */
              {
                _fetchWhenSave: false,
                /**
                 * Initialize is an empty function by default. Override it with your own
                 * initialization logic.
                 */
                initialize: function initialize() {
                },
                /**
                 * Set whether to enable fetchWhenSave option when updating object.
                 * When set true, SDK would fetch the latest object after saving.
                 * Default is false.
                 *
                 * @deprecated use AV.Object#save with options.fetchWhenSave instead
                 * @param {boolean} enable  true to enable fetchWhenSave option.
                 */
                fetchWhenSave: function fetchWhenSave(enable) {
                  console.warn("AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead.");
                  if (!_.isBoolean(enable)) {
                    throw new Error("Expect boolean value for fetchWhenSave");
                  }
                  this._fetchWhenSave = enable;
                },
                /**
                 * Returns the object's objectId.
                 * @return {String} the objectId.
                 */
                getObjectId: function getObjectId() {
                  return this.id;
                },
                /**
                 * Returns the object's createdAt attribute.
                 * @return {Date}
                 */
                getCreatedAt: function getCreatedAt() {
                  return this.createdAt;
                },
                /**
                 * Returns the object's updatedAt attribute.
                 * @return {Date}
                 */
                getUpdatedAt: function getUpdatedAt() {
                  return this.updatedAt;
                },
                /**
                 * Returns a JSON version of the object.
                 * @return {Object}
                 */
                toJSON: function toJSON(key, holder) {
                  var seenObjects = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
                  return this._toFullJSON(seenObjects, false);
                },
                /**
                 * Returns a JSON version of the object with meta data.
                 * Inverse to {@link AV.parseJSON}
                 * @since 3.0.0
                 * @return {Object}
                 */
                toFullJSON: function toFullJSON() {
                  var seenObjects = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                  return this._toFullJSON(seenObjects);
                },
                _toFullJSON: function _toFullJSON(seenObjects) {
                  var _this = this;
                  var full = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                  var json = _.clone(this.attributes);
                  if (_.isArray(seenObjects)) {
                    var newSeenObjects = seenObjects.concat(this);
                  }
                  AV2._objectEach(json, function(val, key) {
                    json[key] = AV2._encode(val, newSeenObjects, void 0, full);
                  });
                  AV2._objectEach(this._operations, function(val, key) {
                    json[key] = val;
                  });
                  if (_.has(this, "id")) {
                    json.objectId = this.id;
                  }
                  ["createdAt", "updatedAt"].forEach(function(key) {
                    if (_.has(_this, key)) {
                      var val = _this[key];
                      json[key] = _.isDate(val) ? val.toJSON() : val;
                    }
                  });
                  if (full) {
                    json.__type = "Object";
                    if (_.isArray(seenObjects) && seenObjects.length)
                      json.__type = "Pointer";
                    json.className = this.className;
                  }
                  return json;
                },
                /**
                 * Updates _hashedJSON to reflect the current state of this object.
                 * Adds any changed hash values to the set of pending changes.
                 * @private
                 */
                _refreshCache: function _refreshCache() {
                  var self2 = this;
                  if (self2._refreshingCache) {
                    return;
                  }
                  self2._refreshingCache = true;
                  AV2._objectEach(this.attributes, function(value, key) {
                    if (value instanceof AV2.Object) {
                      value._refreshCache();
                    } else if (_.isObject(value)) {
                      if (self2._resetCacheForKey(key)) {
                        self2.set(key, new AV2.Op.Set(value), { silent: true });
                      }
                    }
                  });
                  delete self2._refreshingCache;
                },
                /**
                 * Returns true if this object has been modified since its last
                 * save/refresh.  If an attribute is specified, it returns true only if that
                 * particular attribute has been modified since the last save/refresh.
                 * @param {String} attr An attribute name (optional).
                 * @return {Boolean}
                 */
                dirty: function dirty(attr) {
                  this._refreshCache();
                  var currentChanges = _.last(this._opSetQueue);
                  if (attr) {
                    return currentChanges[attr] ? true : false;
                  }
                  if (!this.id) {
                    return true;
                  }
                  if (_.keys(currentChanges).length > 0) {
                    return true;
                  }
                  return false;
                },
                /**
                 * Returns the keys of the modified attribute since its last save/refresh.
                 * @return {String[]}
                 */
                dirtyKeys: function dirtyKeys() {
                  this._refreshCache();
                  var currentChanges = _.last(this._opSetQueue);
                  return _.keys(currentChanges);
                },
                /**
                 * Gets a Pointer referencing this Object.
                 * @private
                 */
                _toPointer: function _toPointer() {
                  return {
                    __type: "Pointer",
                    className: this.className,
                    objectId: this.id
                  };
                },
                /**
                 * Gets the value of an attribute.
                 * @param {String} attr The string name of an attribute.
                 */
                get: function get(attr) {
                  switch (attr) {
                    case "objectId":
                      return this.id;
                    case "createdAt":
                    case "updatedAt":
                      return this[attr];
                    default:
                      return this.attributes[attr];
                  }
                },
                /**
                 * Gets a relation on the given class for the attribute.
                 * @param {String} attr The attribute to get the relation for.
                 * @return {AV.Relation}
                 */
                relation: function relation(attr) {
                  var value = this.get(attr);
                  if (value) {
                    if (!(value instanceof AV2.Relation)) {
                      throw new Error("Called relation() on non-relation field " + attr);
                    }
                    value._ensureParentAndKey(this, attr);
                    return value;
                  } else {
                    return new AV2.Relation(this, attr);
                  }
                },
                /**
                 * Gets the HTML-escaped value of an attribute.
                 */
                escape: function escape2(attr) {
                  var html = this._escapedAttributes[attr];
                  if (html) {
                    return html;
                  }
                  var val = this.attributes[attr];
                  var escaped;
                  if (isNullOrUndefined(val)) {
                    escaped = "";
                  } else {
                    escaped = _.escape(val.toString());
                  }
                  this._escapedAttributes[attr] = escaped;
                  return escaped;
                },
                /**
                 * Returns <code>true</code> if the attribute contains a value that is not
                 * null or undefined.
                 * @param {String} attr The string name of the attribute.
                 * @return {Boolean}
                 */
                has: function has(attr) {
                  return !isNullOrUndefined(this.attributes[attr]);
                },
                /**
                 * Pulls "special" fields like objectId, createdAt, etc. out of attrs
                 * and puts them on "this" directly.  Removes them from attrs.
                 * @param attrs - A dictionary with the data for this AV.Object.
                 * @private
                 */
                _mergeMagicFields: function _mergeMagicFields(attrs) {
                  var model = this;
                  var specialFields = ["objectId", "createdAt", "updatedAt"];
                  AV2._arrayEach(specialFields, function(attr) {
                    if (attrs[attr]) {
                      if (attr === "objectId") {
                        model.id = attrs[attr];
                      } else if ((attr === "createdAt" || attr === "updatedAt") && !_.isDate(attrs[attr])) {
                        model[attr] = AV2._parseDate(attrs[attr]);
                      } else {
                        model[attr] = attrs[attr];
                      }
                      delete attrs[attr];
                    }
                  });
                  return attrs;
                },
                /**
                 * Returns the json to be sent to the server.
                 * @private
                 */
                _startSave: function _startSave() {
                  this._opSetQueue.push({});
                },
                /**
                 * Called when a save fails because of an error. Any changes that were part
                 * of the save need to be merged with changes made after the save. This
                 * might throw an exception is you do conflicting operations. For example,
                 * if you do:
                 *   object.set("foo", "bar");
                 *   object.set("invalid field name", "baz");
                 *   object.save();
                 *   object.increment("foo");
                 * then this will throw when the save fails and the client tries to merge
                 * "bar" with the +1.
                 * @private
                 */
                _cancelSave: function _cancelSave() {
                  var failedChanges = _.first(this._opSetQueue);
                  this._opSetQueue = _.rest(this._opSetQueue);
                  var nextChanges = _.first(this._opSetQueue);
                  AV2._objectEach(failedChanges, function(op, key) {
                    var op1 = failedChanges[key];
                    var op2 = nextChanges[key];
                    if (op1 && op2) {
                      nextChanges[key] = op2._mergeWithPrevious(op1);
                    } else if (op1) {
                      nextChanges[key] = op1;
                    }
                  });
                  this._saving = this._saving - 1;
                },
                /**
                 * Called when a save completes successfully. This merges the changes that
                 * were saved into the known server data, and overrides it with any data
                 * sent directly from the server.
                 * @private
                 */
                _finishSave: function _finishSave(serverData) {
                  var fetchedObjects = {};
                  AV2._traverse(this.attributes, function(object) {
                    if (object instanceof AV2.Object && object.id && object._hasData) {
                      fetchedObjects[object.id] = object;
                    }
                  });
                  var savedChanges = _.first(this._opSetQueue);
                  this._opSetQueue = _.rest(this._opSetQueue);
                  this._applyOpSet(savedChanges, this._serverData);
                  this._mergeMagicFields(serverData);
                  var self2 = this;
                  AV2._objectEach(serverData, function(value, key) {
                    self2._serverData[key] = AV2._decode(value, key);
                    var fetched = AV2._traverse(self2._serverData[key], function(object) {
                      if (object instanceof AV2.Object && fetchedObjects[object.id]) {
                        return fetchedObjects[object.id];
                      }
                    });
                    if (fetched) {
                      self2._serverData[key] = fetched;
                    }
                  });
                  this._rebuildAllEstimatedData();
                  var opSetQueue = this._opSetQueue.map(_.clone);
                  this._refreshCache();
                  this._opSetQueue = opSetQueue;
                  this._saving = this._saving - 1;
                },
                /**
                 * Called when a fetch or login is complete to set the known server data to
                 * the given object.
                 * @private
                 */
                _finishFetch: function _finishFetch(serverData, hasData) {
                  this._opSetQueue = [{}];
                  this._mergeMagicFields(serverData);
                  var self2 = this;
                  AV2._objectEach(serverData, function(value, key) {
                    self2._serverData[key] = AV2._decode(value, key);
                  });
                  this._rebuildAllEstimatedData();
                  this._refreshCache();
                  this._opSetQueue = [{}];
                  this._hasData = hasData;
                },
                /**
                 * Applies the set of AV.Op in opSet to the object target.
                 * @private
                 */
                _applyOpSet: function _applyOpSet(opSet, target) {
                  var self2 = this;
                  AV2._objectEach(opSet, function(change, key) {
                    var _findValue = findValue(target, key), _findValue2 = (0, _slicedToArray3.default)(_findValue, 3), value = _findValue2[0], actualTarget = _findValue2[1], actualKey = _findValue2[2];
                    setValue(target, key, change._estimate(value, self2, key));
                    if (actualTarget && actualTarget[actualKey] === AV2.Op._UNSET) {
                      delete actualTarget[actualKey];
                    }
                  });
                },
                /**
                 * Replaces the cached value for key with the current value.
                 * Returns true if the new value is different than the old value.
                 * @private
                 */
                _resetCacheForKey: function _resetCacheForKey(key) {
                  var value = this.attributes[key];
                  if (_.isObject(value) && !(value instanceof AV2.Object) && !(value instanceof AV2.File)) {
                    var json = (0, _stringify2.default)(recursiveToPointer(value));
                    if (this._hashedJSON[key] !== json) {
                      var wasSet = !!this._hashedJSON[key];
                      this._hashedJSON[key] = json;
                      return wasSet;
                    }
                  }
                  return false;
                },
                /**
                 * Populates attributes[key] by starting with the last known data from the
                 * server, and applying all of the local changes that have been made to that
                 * key since then.
                 * @private
                 */
                _rebuildEstimatedDataForKey: function _rebuildEstimatedDataForKey(key) {
                  var self2 = this;
                  delete this.attributes[key];
                  if (this._serverData[key]) {
                    this.attributes[key] = this._serverData[key];
                  }
                  AV2._arrayEach(this._opSetQueue, function(opSet) {
                    var op = opSet[key];
                    if (op) {
                      var _findValue3 = findValue(self2.attributes, key), _findValue4 = (0, _slicedToArray3.default)(_findValue3, 4), value = _findValue4[0], actualTarget = _findValue4[1], actualKey = _findValue4[2], firstKey = _findValue4[3];
                      setValue(self2.attributes, key, op._estimate(value, self2, key));
                      if (actualTarget && actualTarget[actualKey] === AV2.Op._UNSET) {
                        delete actualTarget[actualKey];
                      }
                      self2._resetCacheForKey(firstKey);
                    }
                  });
                },
                /**
                 * Populates attributes by starting with the last known data from the
                 * server, and applying all of the local changes that have been made since
                 * then.
                 * @private
                 */
                _rebuildAllEstimatedData: function _rebuildAllEstimatedData() {
                  var self2 = this;
                  var previousAttributes = _.clone(this.attributes);
                  this.attributes = _.clone(this._serverData);
                  AV2._arrayEach(this._opSetQueue, function(opSet) {
                    self2._applyOpSet(opSet, self2.attributes);
                    AV2._objectEach(opSet, function(op, key) {
                      self2._resetCacheForKey(key);
                    });
                  });
                  AV2._objectEach(previousAttributes, function(oldValue, key) {
                    if (self2.attributes[key] !== oldValue) {
                      self2.trigger("change:" + key, self2, self2.attributes[key], {});
                    }
                  });
                  AV2._objectEach(this.attributes, function(newValue, key) {
                    if (!_.has(previousAttributes, key)) {
                      self2.trigger("change:" + key, self2, newValue, {});
                    }
                  });
                },
                /**
                 * Sets a hash of model attributes on the object, firing
                 * <code>"change"</code> unless you choose to silence it.
                 *
                 * <p>You can call it with an object containing keys and values, or with one
                 * key and value.  For example:</p>
                 *
                 * @example
                 * gameTurn.set({
                 *   player: player1,
                 *   diceRoll: 2
                 * });
                 *
                 * game.set("currentPlayer", player2);
                 *
                 * game.set("finished", true);
                 *
                 * @param {String} key The key to set.
                 * @param {Any} value The value to give it.
                 * @param {Object} [options]
                 * @param {Boolean} [options.silent]
                 * @return {AV.Object} self if succeeded, throws if the value is not valid.
                 * @see AV.Object#validate
                 */
                set: function set(key, value, options) {
                  var attrs;
                  if (_.isObject(key) || isNullOrUndefined(key)) {
                    attrs = _.mapObject(key, function(v, k) {
                      checkReservedKey(k);
                      return AV2._decode(v, k);
                    });
                    options = value;
                  } else {
                    attrs = {};
                    checkReservedKey(key);
                    attrs[key] = AV2._decode(value, key);
                  }
                  options = options || {};
                  if (!attrs) {
                    return this;
                  }
                  if (attrs instanceof AV2.Object) {
                    attrs = attrs.attributes;
                  }
                  if (options.unset) {
                    AV2._objectEach(attrs, function(unused_value, key2) {
                      attrs[key2] = new AV2.Op.Unset();
                    });
                  }
                  var dataToValidate = _.clone(attrs);
                  var self2 = this;
                  AV2._objectEach(dataToValidate, function(value2, key2) {
                    if (value2 instanceof AV2.Op) {
                      dataToValidate[key2] = value2._estimate(self2.attributes[key2], self2, key2);
                      if (dataToValidate[key2] === AV2.Op._UNSET) {
                        delete dataToValidate[key2];
                      }
                    }
                  });
                  this._validate(attrs, options);
                  options.changes = {};
                  var escaped = this._escapedAttributes;
                  AV2._arrayEach(_.keys(attrs), function(attr) {
                    var val = attrs[attr];
                    if (val instanceof AV2.Relation) {
                      val.parent = self2;
                    }
                    if (!(val instanceof AV2.Op)) {
                      val = new AV2.Op.Set(val);
                    }
                    var isRealChange = true;
                    if (val instanceof AV2.Op.Set && _.isEqual(self2.attributes[attr], val.value)) {
                      isRealChange = false;
                    }
                    if (isRealChange) {
                      delete escaped[attr];
                      if (options.silent) {
                        self2._silent[attr] = true;
                      } else {
                        options.changes[attr] = true;
                      }
                    }
                    var currentChanges = _.last(self2._opSetQueue);
                    currentChanges[attr] = val._mergeWithPrevious(currentChanges[attr]);
                    self2._rebuildEstimatedDataForKey(attr);
                    if (isRealChange) {
                      self2.changed[attr] = self2.attributes[attr];
                      if (!options.silent) {
                        self2._pending[attr] = true;
                      }
                    } else {
                      delete self2.changed[attr];
                      delete self2._pending[attr];
                    }
                  });
                  if (!options.silent) {
                    this.change(options);
                  }
                  return this;
                },
                /**
                 * Remove an attribute from the model, firing <code>"change"</code> unless
                 * you choose to silence it. This is a noop if the attribute doesn't
                 * exist.
                 * @param key {String} The key.
                 */
                unset: function unset(attr, options) {
                  options = options || {};
                  options.unset = true;
                  return this.set(attr, null, options);
                },
                /**
                 * Atomically increments the value of the given attribute the next time the
                 * object is saved. If no amount is specified, 1 is used by default.
                 *
                 * @param key {String} The key.
                 * @param amount {Number} The amount to increment by.
                 */
                increment: function increment(attr, amount) {
                  if (_.isUndefined(amount) || _.isNull(amount)) {
                    amount = 1;
                  }
                  return this.set(attr, new AV2.Op.Increment(amount));
                },
                /**
                 * Atomically add an object to the end of the array associated with a given
                 * key.
                 * @param key {String} The key.
                 * @param item {} The item to add.
                 */
                add: function add(attr, item) {
                  return this.set(attr, new AV2.Op.Add(ensureArray(item)));
                },
                /**
                 * Atomically add an object to the array associated with a given key, only
                 * if it is not already present in the array. The position of the insert is
                 * not guaranteed.
                 *
                 * @param key {String} The key.
                 * @param item {} The object to add.
                 */
                addUnique: function addUnique(attr, item) {
                  return this.set(attr, new AV2.Op.AddUnique(ensureArray(item)));
                },
                /**
                 * Atomically remove all instances of an object from the array associated
                 * with a given key.
                 *
                 * @param key {String} The key.
                 * @param item {} The object to remove.
                 */
                remove: function remove(attr, item) {
                  return this.set(attr, new AV2.Op.Remove(ensureArray(item)));
                },
                /**
                 * Atomically apply a "bit and" operation on the value associated with a
                 * given key.
                 *
                 * @param key {String} The key.
                 * @param value {Number} The value to apply.
                 */
                bitAnd: function bitAnd(attr, value) {
                  return this.set(attr, new AV2.Op.BitAnd(value));
                },
                /**
                 * Atomically apply a "bit or" operation on the value associated with a
                 * given key.
                 *
                 * @param key {String} The key.
                 * @param value {Number} The value to apply.
                 */
                bitOr: function bitOr(attr, value) {
                  return this.set(attr, new AV2.Op.BitOr(value));
                },
                /**
                 * Atomically apply a "bit xor" operation on the value associated with a
                 * given key.
                 *
                 * @param key {String} The key.
                 * @param value {Number} The value to apply.
                 */
                bitXor: function bitXor(attr, value) {
                  return this.set(attr, new AV2.Op.BitXor(value));
                },
                /**
                 * Returns an instance of a subclass of AV.Op describing what kind of
                 * modification has been performed on this field since the last time it was
                 * saved. For example, after calling object.increment("x"), calling
                 * object.op("x") would return an instance of AV.Op.Increment.
                 *
                 * @param key {String} The key.
                 * @returns {AV.Op} The operation, or undefined if none.
                 */
                op: function op(attr) {
                  return _.last(this._opSetQueue)[attr];
                },
                /**
                 * Clear all attributes on the model, firing <code>"change"</code> unless
                 * you choose to silence it.
                 */
                clear: function clear(options) {
                  options = options || {};
                  options.unset = true;
                  var keysToClear = _.extend(this.attributes, this._operations);
                  return this.set(keysToClear, options);
                },
                /**
                 * Clears any (or specific) changes to the model made since the last save.
                 * @param {string|string[]} [keys] specify keys to revert.
                 */
                revert: function revert(keys) {
                  var lastOp = _.last(this._opSetQueue);
                  var _keys = ensureArray(keys || _.keys(lastOp));
                  _keys.forEach(function(key) {
                    delete lastOp[key];
                  });
                  this._rebuildAllEstimatedData();
                  return this;
                },
                /**
                 * Returns a JSON-encoded set of operations to be sent with the next save
                 * request.
                 * @private
                 */
                _getSaveJSON: function _getSaveJSON() {
                  var json = _.clone(_.first(this._opSetQueue));
                  AV2._objectEach(json, function(op, key) {
                    json[key] = op.toJSON();
                  });
                  return json;
                },
                /**
                 * Returns true if this object can be serialized for saving.
                 * @private
                 */
                _canBeSerialized: function _canBeSerialized() {
                  return AV2.Object._canBeSerializedAsValue(this.attributes);
                },
                /**
                 * Fetch the model from the server. If the server's representation of the
                 * model differs from its current attributes, they will be overriden,
                 * triggering a <code>"change"</code> event.
                 * @param {Object} fetchOptions Optional options to set 'keys',
                 *      'include' and 'includeACL' option.
                 * @param {AuthOptions} options
                 * @return {Promise} A promise that is fulfilled when the fetch
                 *     completes.
                 */
                fetch: function fetch() {
                  var fetchOptions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                  var options = arguments[1];
                  if (!this.id) {
                    throw new Error("Cannot fetch unsaved object");
                  }
                  var self2 = this;
                  var request = _request("classes", this.className, this.id, "GET", transformFetchOptions(fetchOptions), options);
                  return request.then(function(response) {
                    var fetchedAttrs = self2.parse(response);
                    self2._cleanupUnsetKeys(fetchedAttrs, fetchOptions.keys ? ensureArray(fetchOptions.keys).join(",").split(",") : void 0);
                    self2._finishFetch(fetchedAttrs, true);
                    return self2;
                  });
                },
                _cleanupUnsetKeys: function _cleanupUnsetKeys(fetchedAttrs) {
                  var _this2 = this;
                  var fetchedKeys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _.keys(this._serverData);
                  _.forEach(fetchedKeys, function(key) {
                    if (fetchedAttrs[key] === void 0)
                      delete _this2._serverData[key];
                  });
                },
                /**
                 * Set a hash of model attributes, and save the model to the server.
                 * updatedAt will be updated when the request returns.
                 * You can either call it as:<pre>
                 *   object.save();</pre>
                 * or<pre>
                 *   object.save(null, options);</pre>
                 * or<pre>
                 *   object.save(attrs, options);</pre>
                 * or<pre>
                 *   object.save(key, value, options);</pre>
                 *
                 * @example
                 * gameTurn.save({
                 *   player: "Jake Cutter",
                 *   diceRoll: 2
                 * }).then(function(gameTurnAgain) {
                 *   // The save was successful.
                 * }, function(error) {
                 *   // The save failed.  Error is an instance of AVError.
                 * });
                 *
                 * @param {AuthOptions} options AuthOptions plus:
                 * @param {Boolean} options.fetchWhenSave fetch and update object after save succeeded
                 * @param {AV.Query} options.query Save object only when it matches the query
                 * @return {Promise} A promise that is fulfilled when the save
                 *     completes.
                 * @see AVError
                 */
                save: function save(arg1, arg2, arg3) {
                  var attrs, current, options;
                  if (_.isObject(arg1) || isNullOrUndefined(arg1)) {
                    attrs = arg1;
                    options = arg2;
                  } else {
                    attrs = {};
                    attrs[arg1] = arg2;
                    options = arg3;
                  }
                  options = _.clone(options) || {};
                  if (options.wait) {
                    current = _.clone(this.attributes);
                  }
                  var setOptions2 = _.clone(options) || {};
                  if (setOptions2.wait) {
                    setOptions2.silent = true;
                  }
                  if (attrs) {
                    this.set(attrs, setOptions2);
                  }
                  var model = this;
                  var unsavedChildren = [];
                  var unsavedFiles = [];
                  AV2.Object._findUnsavedChildren(model, unsavedChildren, unsavedFiles);
                  if (unsavedChildren.length + unsavedFiles.length > 1) {
                    return AV2.Object._deepSaveAsync(this, model, options);
                  }
                  this._startSave();
                  this._saving = (this._saving || 0) + 1;
                  this._allPreviousSaves = this._allPreviousSaves || _promise2.default.resolve();
                  this._allPreviousSaves = this._allPreviousSaves.catch(function(e2) {
                  }).then(function() {
                    var method = model.id ? "PUT" : "POST";
                    var json = model._getSaveJSON();
                    var query = {};
                    if (model._fetchWhenSave || options.fetchWhenSave) {
                      query["new"] = "true";
                    }
                    if (options._failOnNotExist) {
                      query.failOnNotExist = "true";
                    }
                    if (options.query) {
                      var queryParams;
                      if (typeof options.query._getParams === "function") {
                        queryParams = options.query._getParams();
                        if (queryParams) {
                          query.where = queryParams.where;
                        }
                      }
                      if (!query.where) {
                        var error = new Error("options.query is not an AV.Query");
                        throw error;
                      }
                    }
                    _.extend(json, model._flags);
                    var route = "classes";
                    var className = model.className;
                    if (model.className === "_User" && !model.id) {
                      route = "users";
                      className = null;
                    }
                    var makeRequest = options._makeRequest || _request;
                    var requestPromise = makeRequest(route, className, model.id, method, json, options, query);
                    requestPromise = requestPromise.then(function(resp) {
                      var serverAttrs = model.parse(resp);
                      if (options.wait) {
                        serverAttrs = _.extend(attrs || {}, serverAttrs);
                      }
                      model._finishSave(serverAttrs);
                      if (options.wait) {
                        model.set(current, setOptions2);
                      }
                      return model;
                    }, function(error2) {
                      model._cancelSave();
                      throw error2;
                    });
                    return requestPromise;
                  });
                  return this._allPreviousSaves;
                },
                /**
                 * Destroy this model on the server if it was already persisted.
                 * Optimistically removes the model from its collection, if it has one.
                 * @param {AuthOptions} options AuthOptions plus:
                 * @param {Boolean} [options.wait] wait for the server to respond
                 * before removal.
                 *
                 * @return {Promise} A promise that is fulfilled when the destroy
                 *     completes.
                 */
                destroy: function destroy(options) {
                  options = options || {};
                  var model = this;
                  var triggerDestroy = function triggerDestroy2() {
                    model.trigger("destroy", model, model.collection, options);
                  };
                  if (!this.id) {
                    return triggerDestroy();
                  }
                  if (!options.wait) {
                    triggerDestroy();
                  }
                  var request = _request("classes", this.className, this.id, "DELETE", this._flags, options);
                  return request.then(function() {
                    if (options.wait) {
                      triggerDestroy();
                    }
                    return model;
                  });
                },
                /**
                 * Converts a response into the hash of attributes to be set on the model.
                 * @ignore
                 */
                parse: function parse(resp) {
                  var output = _.clone(resp);
                  ["createdAt", "updatedAt"].forEach(function(key) {
                    if (output[key]) {
                      output[key] = AV2._parseDate(output[key]);
                    }
                  });
                  if (output.createdAt && !output.updatedAt) {
                    output.updatedAt = output.createdAt;
                  }
                  return output;
                },
                /**
                 * Creates a new model with identical attributes to this one.
                 * @return {AV.Object}
                 */
                clone: function clone() {
                  return new this.constructor(this.attributes);
                },
                /**
                 * Returns true if this object has never been saved to AV.
                 * @return {Boolean}
                 */
                isNew: function isNew() {
                  return !this.id;
                },
                /**
                 * Call this method to manually fire a `"change"` event for this model and
                 * a `"change:attribute"` event for each changed attribute.
                 * Calling this will cause all objects observing the model to update.
                 */
                change: function change(options) {
                  options = options || {};
                  var changing = this._changing;
                  this._changing = true;
                  var self2 = this;
                  AV2._objectEach(this._silent, function(attr) {
                    self2._pending[attr] = true;
                  });
                  var changes = _.extend({}, options.changes, this._silent);
                  this._silent = {};
                  AV2._objectEach(changes, function(unused_value, attr) {
                    self2.trigger("change:" + attr, self2, self2.get(attr), options);
                  });
                  if (changing) {
                    return this;
                  }
                  var deleteChanged = function deleteChanged2(value, attr) {
                    if (!self2._pending[attr] && !self2._silent[attr]) {
                      delete self2.changed[attr];
                    }
                  };
                  while (!_.isEmpty(this._pending)) {
                    this._pending = {};
                    this.trigger("change", this, options);
                    AV2._objectEach(this.changed, deleteChanged);
                    self2._previousAttributes = _.clone(this.attributes);
                  }
                  this._changing = false;
                  return this;
                },
                /**
                 * Gets the previous value of an attribute, recorded at the time the last
                 * <code>"change"</code> event was fired.
                 * @param {String} attr Name of the attribute to get.
                 */
                previous: function previous(attr) {
                  if (!arguments.length || !this._previousAttributes) {
                    return null;
                  }
                  return this._previousAttributes[attr];
                },
                /**
                 * Gets all of the attributes of the model at the time of the previous
                 * <code>"change"</code> event.
                 * @return {Object}
                 */
                previousAttributes: function previousAttributes() {
                  return _.clone(this._previousAttributes);
                },
                /**
                 * Checks if the model is currently in a valid state. It's only possible to
                 * get into an *invalid* state if you're using silent changes.
                 * @return {Boolean}
                 */
                isValid: function isValid() {
                  try {
                    this.validate(this.attributes);
                  } catch (error) {
                    return false;
                  }
                  return true;
                },
                /**
                 * You should not call this function directly unless you subclass
                 * <code>AV.Object</code>, in which case you can override this method
                 * to provide additional validation on <code>set</code> and
                 * <code>save</code>.  Your implementation should throw an Error if
                 * the attrs is invalid
                 *
                 * @param {Object} attrs The current data to validate.
                 * @see AV.Object#set
                 */
                validate: function validate(attrs) {
                  if (_.has(attrs, "ACL") && !(attrs.ACL instanceof AV2.ACL)) {
                    throw new AVError(AVError.OTHER_CAUSE, "ACL must be a AV.ACL.");
                  }
                },
                /**
                 * Run validation against a set of incoming attributes, returning `true`
                 * if all is well. If a specific `error` callback has been passed,
                 * call that instead of firing the general `"error"` event.
                 * @private
                 */
                _validate: function _validate(attrs, options) {
                  if (options.silent || !this.validate) {
                    return;
                  }
                  attrs = _.extend({}, this.attributes, attrs);
                  this.validate(attrs);
                },
                /**
                 * Returns the ACL for this object.
                 * @returns {AV.ACL} An instance of AV.ACL.
                 * @see AV.Object#get
                 */
                getACL: function getACL() {
                  return this.get("ACL");
                },
                /**
                 * Sets the ACL to be used for this object.
                 * @param {AV.ACL} acl An instance of AV.ACL.
                 * @param {Object} options Optional Backbone-like options object to be
                 *     passed in to set.
                 * @return {AV.Object} self
                 * @see AV.Object#set
                 */
                setACL: function setACL(acl, options) {
                  return this.set("ACL", acl, options);
                },
                disableBeforeHook: function disableBeforeHook() {
                  this.ignoreHook("beforeSave");
                  this.ignoreHook("beforeUpdate");
                  this.ignoreHook("beforeDelete");
                },
                disableAfterHook: function disableAfterHook() {
                  this.ignoreHook("afterSave");
                  this.ignoreHook("afterUpdate");
                  this.ignoreHook("afterDelete");
                },
                ignoreHook: function ignoreHook(hookName) {
                  if (!_.contains(["beforeSave", "afterSave", "beforeUpdate", "afterUpdate", "beforeDelete", "afterDelete"], hookName)) {
                    throw new Error("Unsupported hookName: " + hookName);
                  }
                  if (!AV2.hookKey) {
                    throw new Error("ignoreHook required hookKey");
                  }
                  if (!this._flags.__ignore_hooks) {
                    this._flags.__ignore_hooks = [];
                  }
                  this._flags.__ignore_hooks.push(hookName);
                }
              }
            );
            AV2.Object.createWithoutData = function(klass, id, hasData) {
              var _klass = void 0;
              if (_.isString(klass)) {
                _klass = AV2.Object._getSubclass(klass);
              } else if (klass.prototype && klass.prototype instanceof AV2.Object) {
                _klass = klass;
              } else {
                throw new Error("class must be a string or a subclass of AV.Object.");
              }
              if (!id) {
                throw new TypeError("The objectId must be provided");
              }
              var object = new _klass();
              object.id = id;
              object._hasData = hasData;
              return object;
            };
            AV2.Object.destroyAll = function(objects) {
              var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              if (!objects || objects.length === 0) {
                return _promise2.default.resolve();
              }
              var objectsByClassNameAndFlags = _.groupBy(objects, function(object) {
                return (0, _stringify2.default)({
                  className: object.className,
                  flags: object._flags
                });
              });
              var body = {
                requests: _.map(objectsByClassNameAndFlags, function(objects2) {
                  var ids = _.map(objects2, "id").join(",");
                  return {
                    method: "DELETE",
                    path: "/1.1/classes/" + objects2[0].className + "/" + ids,
                    body: objects2[0]._flags
                  };
                })
              };
              return _request("batch", null, null, "POST", body, options).then(function(response) {
                var firstError = _.find(response, function(result) {
                  return !result.success;
                });
                if (firstError)
                  throw new AVError(firstError.error.code, firstError.error.error);
                return void 0;
              });
            };
            AV2.Object._getSubclass = function(className) {
              if (!_.isString(className)) {
                throw new Error("AV.Object._getSubclass requires a string argument.");
              }
              var ObjectClass = AV2.Object._classMap[className];
              if (!ObjectClass) {
                ObjectClass = AV2.Object.extend(className);
                AV2.Object._classMap[className] = ObjectClass;
              }
              return ObjectClass;
            };
            AV2.Object._create = function(className, attributes, options) {
              var ObjectClass = AV2.Object._getSubclass(className);
              return new ObjectClass(attributes, options);
            };
            AV2.Object._classMap = {};
            AV2.Object._extend = AV2._extend;
            AV2.Object["new"] = function(attributes, options) {
              return new AV2.Object(attributes, options);
            };
            AV2.Object.extend = function(className, protoProps, classProps) {
              if (!_.isString(className)) {
                if (className && _.has(className, "className")) {
                  return AV2.Object.extend(className.className, className, protoProps);
                } else {
                  throw new Error("AV.Object.extend's first argument should be the className.");
                }
              }
              if (className === "User") {
                className = "_User";
              }
              var NewClassObject = null;
              if (_.has(AV2.Object._classMap, className)) {
                var OldClassObject = AV2.Object._classMap[className];
                if (protoProps || classProps) {
                  NewClassObject = OldClassObject._extend(protoProps, classProps);
                } else {
                  return OldClassObject;
                }
              } else {
                protoProps = protoProps || {};
                protoProps._className = className;
                NewClassObject = this._extend(protoProps, classProps);
              }
              NewClassObject.extend = function(arg0) {
                if (_.isString(arg0) || arg0 && _.has(arg0, "className")) {
                  return AV2.Object.extend.apply(NewClassObject, arguments);
                }
                var newArguments = [className].concat(_.toArray(arguments));
                return AV2.Object.extend.apply(NewClassObject, newArguments);
              };
              Object.defineProperty(NewClassObject, "query", (0, _getOwnPropertyDescriptor2.default)(AV2.Object, "query"));
              NewClassObject["new"] = function(attributes, options) {
                return new NewClassObject(attributes, options);
              };
              AV2.Object._classMap[className] = NewClassObject;
              return NewClassObject;
            };
            Object.defineProperty(AV2.Object.prototype, "className", {
              get: function get() {
                var className = this._className || this.constructor._LCClassName || this.constructor.name;
                if (className === "User") {
                  return "_User";
                }
                return className;
              }
            });
            AV2.Object.register = function(klass, name2) {
              if (!(klass.prototype instanceof AV2.Object)) {
                throw new Error("registered class is not a subclass of AV.Object");
              }
              var className = name2 || klass.name;
              if (!className.length) {
                throw new Error("registered class must be named");
              }
              if (name2) {
                klass._LCClassName = name2;
              }
              AV2.Object._classMap[className] = klass;
            };
            Object.defineProperty(AV2.Object, "query", {
              get: function get() {
                return new AV2.Query(this.prototype.className);
              }
            });
            AV2.Object._findUnsavedChildren = function(objects, children, files) {
              AV2._traverse(objects, function(object) {
                if (object instanceof AV2.Object) {
                  if (object.dirty()) {
                    children.push(object);
                  }
                  return;
                }
                if (object instanceof AV2.File) {
                  if (!object.id) {
                    files.push(object);
                  }
                  return;
                }
              });
            };
            AV2.Object._canBeSerializedAsValue = function(object) {
              var canBeSerializedAsValue = true;
              if (object instanceof AV2.Object || object instanceof AV2.File) {
                canBeSerializedAsValue = !!object.id;
              } else if (_.isArray(object)) {
                AV2._arrayEach(object, function(child) {
                  if (!AV2.Object._canBeSerializedAsValue(child)) {
                    canBeSerializedAsValue = false;
                  }
                });
              } else if (_.isObject(object)) {
                AV2._objectEach(object, function(child) {
                  if (!AV2.Object._canBeSerializedAsValue(child)) {
                    canBeSerializedAsValue = false;
                  }
                });
              }
              return canBeSerializedAsValue;
            };
            AV2.Object._deepSaveAsync = function(object, model, options) {
              var unsavedChildren = [];
              var unsavedFiles = [];
              AV2.Object._findUnsavedChildren(object, unsavedChildren, unsavedFiles);
              unsavedFiles = _.uniq(unsavedFiles);
              var promise = _promise2.default.resolve();
              _.each(unsavedFiles, function(file) {
                promise = promise.then(function() {
                  return file.save();
                });
              });
              var objects = _.uniq(unsavedChildren);
              var remaining = _.uniq(objects);
              return promise.then(function() {
                return continueWhile(function() {
                  return remaining.length > 0;
                }, function() {
                  var batch = [];
                  var newRemaining = [];
                  AV2._arrayEach(remaining, function(object2) {
                    if (object2._canBeSerialized()) {
                      batch.push(object2);
                    } else {
                      newRemaining.push(object2);
                    }
                  });
                  remaining = newRemaining;
                  if (batch.length === 0) {
                    return _promise2.default.reject(new AVError(AVError.OTHER_CAUSE, "Tried to save a batch with a cycle."));
                  }
                  var readyToStart = _promise2.default.resolve(_.map(batch, function(object2) {
                    return object2._allPreviousSaves || _promise2.default.resolve();
                  }));
                  var bathSavePromise = readyToStart.then(function() {
                    return _request("batch", null, null, "POST", {
                      requests: _.map(batch, function(object2) {
                        var method = object2.id ? "PUT" : "POST";
                        var json = object2._getSaveJSON();
                        _.extend(json, object2._flags);
                        var route = "classes";
                        var className = object2.className;
                        var path = "/" + route + "/" + className;
                        if (object2.className === "_User" && !object2.id) {
                          path = "/users";
                        }
                        var path = "/1.1" + path;
                        if (object2.id) {
                          path = path + "/" + object2.id;
                        }
                        object2._startSave();
                        return {
                          method,
                          path,
                          body: json,
                          params: options && options.fetchWhenSave ? { fetchWhenSave: true } : void 0
                        };
                      })
                    }, options).then(function(response) {
                      var results = _.map(batch, function(object2, i2) {
                        if (response[i2].success) {
                          object2._finishSave(object2.parse(response[i2].success));
                          return object2;
                        }
                        object2._cancelSave();
                        return new AVError(response[i2].error.code, response[i2].error.error);
                      });
                      return handleBatchResults(results);
                    });
                  });
                  AV2._arrayEach(batch, function(object2) {
                    object2._allPreviousSaves = bathSavePromise;
                  });
                  return bathSavePromise;
                });
              }).then(function() {
                return object;
              });
            };
          };
        },
        /* 317 */
        /***/
        function(module2, exports2, __webpack_require__) {
          module2.exports = { "default": __webpack_require__(318), __esModule: true };
        },
        /* 318 */
        /***/
        function(module2, exports2, __webpack_require__) {
          __webpack_require__(319);
          var $Object = __webpack_require__(2).Object;
          module2.exports = function getOwnPropertyDescriptor(it, key) {
            return $Object.getOwnPropertyDescriptor(it, key);
          };
        },
        /* 319 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var toIObject = __webpack_require__(25);
          var $getOwnPropertyDescriptor = __webpack_require__(94).f;
          __webpack_require__(89)("getOwnPropertyDescriptor", function() {
            return function getOwnPropertyDescriptor(it, key) {
              return $getOwnPropertyDescriptor(toIObject(it), key);
            };
          });
        },
        /* 320 */
        /***/
        function(module2, exports2, __webpack_require__) {
          exports2.__esModule = true;
          var _isIterable2 = __webpack_require__(169);
          var _isIterable3 = _interopRequireDefault(_isIterable2);
          var _getIterator2 = __webpack_require__(167);
          var _getIterator3 = _interopRequireDefault(_getIterator2);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          exports2.default = function() {
            function sliceIterator(arr, i2) {
              var _arr = [];
              var _n = true;
              var _d = false;
              var _e = void 0;
              try {
                for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
                  _arr.push(_s.value);
                  if (i2 && _arr.length === i2)
                    break;
                }
              } catch (err) {
                _d = true;
                _e = err;
              } finally {
                try {
                  if (!_n && _i["return"])
                    _i["return"]();
                } finally {
                  if (_d)
                    throw _e;
                }
              }
              return _arr;
            }
            return function(arr, i2) {
              if (Array.isArray(arr)) {
                return arr;
              } else if ((0, _isIterable3.default)(Object(arr))) {
                return sliceIterator(arr, i2);
              } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }
            };
          }();
        },
        /* 321 */
        /***/
        function(module2, exports2, __webpack_require__) {
          __webpack_require__(56);
          __webpack_require__(39);
          module2.exports = __webpack_require__(322);
        },
        /* 322 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var classof = __webpack_require__(71);
          var ITERATOR = __webpack_require__(7)("iterator");
          var Iterators = __webpack_require__(32);
          module2.exports = __webpack_require__(2).isIterable = function(it) {
            var O = Object(it);
            return O[ITERATOR] !== void 0 || "@@iterator" in O || Iterators.hasOwnProperty(classof(O));
          };
        },
        /* 323 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _ = __webpack_require__(0);
          var AVError = __webpack_require__(29);
          module2.exports = function(AV2) {
            AV2.Role = AV2.Object.extend(
              "_Role",
              /** @lends AV.Role.prototype */
              {
                // Instance Methods
                /**
                 * Represents a Role on the AV server. Roles represent groupings of
                 * Users for the purposes of granting permissions (e.g. specifying an ACL
                 * for an Object). Roles are specified by their sets of child users and
                 * child roles, all of which are granted any permissions that the parent
                 * role has.
                 *
                 * <p>Roles must have a name (which cannot be changed after creation of the
                 * role), and must specify an ACL.</p>
                 * An AV.Role is a local representation of a role persisted to the AV
                 * cloud.
                 * @class AV.Role
                 * @param {String} name The name of the Role to create.
                 * @param {AV.ACL} acl The ACL for this role.
                 */
                constructor: function constructor(name2, acl) {
                  if (_.isString(name2)) {
                    AV2.Object.prototype.constructor.call(this, null, null);
                    this.setName(name2);
                  } else {
                    AV2.Object.prototype.constructor.call(this, name2, acl);
                  }
                  if (acl) {
                    if (!(acl instanceof AV2.ACL)) {
                      throw new TypeError("acl must be an instance of AV.ACL");
                    } else {
                      this.setACL(acl);
                    }
                  }
                },
                /**
                 * Gets the name of the role.  You can alternatively call role.get("name")
                 *
                 * @return {String} the name of the role.
                 */
                getName: function getName() {
                  return this.get("name");
                },
                /**
                 * Sets the name for a role. This value must be set before the role has
                 * been saved to the server, and cannot be set once the role has been
                 * saved.
                 *
                 * <p>
                 *   A role's name can only contain alphanumeric characters, _, -, and
                 *   spaces.
                 * </p>
                 *
                 * <p>This is equivalent to calling role.set("name", name)</p>
                 *
                 * @param {String} name The name of the role.
                 */
                setName: function setName(name2, options) {
                  return this.set("name", name2, options);
                },
                /**
                 * Gets the AV.Relation for the AV.Users that are direct
                 * children of this role. These users are granted any privileges that this
                 * role has been granted (e.g. read or write access through ACLs). You can
                 * add or remove users from the role through this relation.
                 *
                 * <p>This is equivalent to calling role.relation("users")</p>
                 *
                 * @return {AV.Relation} the relation for the users belonging to this
                 *     role.
                 */
                getUsers: function getUsers() {
                  return this.relation("users");
                },
                /**
                 * Gets the AV.Relation for the AV.Roles that are direct
                 * children of this role. These roles' users are granted any privileges that
                 * this role has been granted (e.g. read or write access through ACLs). You
                 * can add or remove child roles from this role through this relation.
                 *
                 * <p>This is equivalent to calling role.relation("roles")</p>
                 *
                 * @return {AV.Relation} the relation for the roles belonging to this
                 *     role.
                 */
                getRoles: function getRoles() {
                  return this.relation("roles");
                },
                /**
                 * @ignore
                 */
                validate: function validate(attrs, options) {
                  if ("name" in attrs && attrs.name !== this.getName()) {
                    var newName = attrs.name;
                    if (this.id && this.id !== attrs.objectId) {
                      return new AVError(AVError.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
                    }
                    if (!_.isString(newName)) {
                      return new AVError(AVError.OTHER_CAUSE, "A role's name must be a String.");
                    }
                    if (!/^[0-9a-zA-Z\-_ ]+$/.test(newName)) {
                      return new AVError(AVError.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _, -, and spaces.");
                    }
                  }
                  if (AV2.Object.prototype.validate) {
                    return AV2.Object.prototype.validate.call(this, attrs, options);
                  }
                  return false;
                }
              }
            );
          };
        },
        /* 324 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _stringify = __webpack_require__(19);
          var _stringify2 = _interopRequireDefault(_stringify);
          var _defineProperty2 = __webpack_require__(325);
          var _defineProperty3 = _interopRequireDefault(_defineProperty2);
          var _promise = __webpack_require__(3);
          var _promise2 = _interopRequireDefault(_promise);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var _ = __webpack_require__(0);
          var uuid = __webpack_require__(159);
          var AVError = __webpack_require__(29);
          var _require = __webpack_require__(12), AVRequest = _require._request, request = _require.request;
          var _require2 = __webpack_require__(38), getAdapter = _require2.getAdapter;
          var PLATFORM_ANONYMOUS = "anonymous";
          var PLATFORM_QQAPP = "lc_qqapp";
          var mergeUnionDataIntoAuthData = function mergeUnionDataIntoAuthData2() {
            var defaultUnionIdPlatform = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "weixin";
            return function(authData, unionId) {
              var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref$unionIdPlatform = _ref.unionIdPlatform, unionIdPlatform = _ref$unionIdPlatform === void 0 ? defaultUnionIdPlatform : _ref$unionIdPlatform, _ref$asMainAccount = _ref.asMainAccount, asMainAccount = _ref$asMainAccount === void 0 ? false : _ref$asMainAccount;
              if (typeof unionId !== "string")
                throw new AVError(AVError.OTHER_CAUSE, "unionId is not a string");
              if (typeof unionIdPlatform !== "string")
                throw new AVError(AVError.OTHER_CAUSE, "unionIdPlatform is not a string");
              return _.extend({}, authData, {
                platform: unionIdPlatform,
                unionid: unionId,
                main_account: Boolean(asMainAccount)
              });
            };
          };
          module2.exports = function(AV2) {
            AV2.User = AV2.Object.extend(
              "_User",
              /** @lends AV.User.prototype */
              {
                // Instance Variables
                _isCurrentUser: false,
                // Instance Methods
                /**
                 * Internal method to handle special fields in a _User response.
                 * @private
                 */
                _mergeMagicFields: function _mergeMagicFields(attrs) {
                  if (attrs.sessionToken) {
                    this._sessionToken = attrs.sessionToken;
                    delete attrs.sessionToken;
                  }
                  return AV2.User.__super__._mergeMagicFields.call(this, attrs);
                },
                /**
                 * Removes null values from authData (which exist temporarily for
                 * unlinking)
                 * @private
                 */
                _cleanupAuthData: function _cleanupAuthData() {
                  if (!this.isCurrent()) {
                    return;
                  }
                  var authData = this.get("authData");
                  if (!authData) {
                    return;
                  }
                  AV2._objectEach(this.get("authData"), function(value, key) {
                    if (!authData[key]) {
                      delete authData[key];
                    }
                  });
                },
                /**
                 * Synchronizes authData for all providers.
                 * @private
                 */
                _synchronizeAllAuthData: function _synchronizeAllAuthData() {
                  var authData = this.get("authData");
                  if (!authData) {
                    return;
                  }
                  var self2 = this;
                  AV2._objectEach(this.get("authData"), function(value, key) {
                    self2._synchronizeAuthData(key);
                  });
                },
                /**
                 * Synchronizes auth data for a provider (e.g. puts the access token in the
                 * right place to be used by the Facebook SDK).
                 * @private
                 */
                _synchronizeAuthData: function _synchronizeAuthData(provider) {
                  if (!this.isCurrent()) {
                    return;
                  }
                  var authType;
                  if (_.isString(provider)) {
                    authType = provider;
                    provider = AV2.User._authProviders[authType];
                  } else {
                    authType = provider.getAuthType();
                  }
                  var authData = this.get("authData");
                  if (!authData || !provider) {
                    return;
                  }
                  var success = provider.restoreAuthentication(authData[authType]);
                  if (!success) {
                    this.dissociateAuthData(provider);
                  }
                },
                _handleSaveResult: function _handleSaveResult(makeCurrent) {
                  if (makeCurrent && !AV2._config.disableCurrentUser) {
                    this._isCurrentUser = true;
                  }
                  this._cleanupAuthData();
                  this._synchronizeAllAuthData();
                  delete this._serverData.password;
                  this._rebuildEstimatedDataForKey("password");
                  this._refreshCache();
                  if ((makeCurrent || this.isCurrent()) && !AV2._config.disableCurrentUser) {
                    return _promise2.default.resolve(AV2.User._saveCurrentUser(this));
                  } else {
                    return _promise2.default.resolve();
                  }
                },
                /**
                 * Unlike in the Android/iOS SDKs, logInWith is unnecessary, since you can
                 * call linkWith on the user (even if it doesn't exist yet on the server).
                 * @private
                 */
                _linkWith: function _linkWith(provider, data2) {
                  var _this = this;
                  var _ref2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref2$failOnNotExist = _ref2.failOnNotExist, failOnNotExist = _ref2$failOnNotExist === void 0 ? false : _ref2$failOnNotExist;
                  var authType;
                  if (_.isString(provider)) {
                    authType = provider;
                    provider = AV2.User._authProviders[provider];
                  } else {
                    authType = provider.getAuthType();
                  }
                  if (data2) {
                    return this.save({ authData: (0, _defineProperty3.default)({}, authType, data2) }, {
                      fetchWhenSave: !!this.get("authData"),
                      _failOnNotExist: failOnNotExist
                    }).then(function(model) {
                      return model._handleSaveResult(true).then(function() {
                        return model;
                      });
                    });
                  } else {
                    return provider.authenticate().then(function(result) {
                      return _this._linkWith(provider, result);
                    });
                  }
                },
                /**
                 * Associate the user with a third party authData.
                 * @since 3.3.0
                 * @param {Object} authData The response json data returned from third party token, maybe like { openid: 'abc123', access_token: '123abc', expires_in: 1382686496 }
                 * @param {string} platform Available platform for sign up.
                 * @return {Promise<AV.User>} A promise that is fulfilled with the user when completed.
                 * @example user.associateWithAuthData({
                 *   openid: 'abc123',
                 *   access_token: '123abc',
                 *   expires_in: 1382686496
                 * }, 'weixin').then(function(user) {
                 *   //Access user here
                 * }).catch(function(error) {
                 *   //console.error("error: ", error);
                 * });
                 */
                associateWithAuthData: function associateWithAuthData(authData, platform) {
                  return this._linkWith(platform, authData);
                },
                /**
                 * Associate the user with a third party authData and unionId.
                 * @since 3.5.0
                 * @param {Object} authData The response json data returned from third party token, maybe like { openid: 'abc123', access_token: '123abc', expires_in: 1382686496 }
                 * @param {string} platform Available platform for sign up.
                 * @param {string} unionId
                 * @param {Object} [unionLoginOptions]
                 * @param {string} [unionLoginOptions.unionIdPlatform = 'weixin'] unionId platform
                 * @param {boolean} [unionLoginOptions.asMainAccount = false] If true, the unionId will be associated with the user.
                 * @return {Promise<AV.User>} A promise that is fulfilled with the user when completed.
                 * @example user.associateWithAuthDataAndUnionId({
                 *   openid: 'abc123',
                 *   access_token: '123abc',
                 *   expires_in: 1382686496
                 * }, 'weixin', 'union123', {
                 *   unionIdPlatform: 'weixin',
                 *   asMainAccount: true,
                 * }).then(function(user) {
                 *   //Access user here
                 * }).catch(function(error) {
                 *   //console.error("error: ", error);
                 * });
                 */
                associateWithAuthDataAndUnionId: function associateWithAuthDataAndUnionId(authData, platform, unionId, unionOptions) {
                  return this._linkWith(platform, mergeUnionDataIntoAuthData()(authData, unionId, unionOptions));
                },
                /**
                 * Associate the user with the identity of the current mini-app.
                 * @since 4.6.0
                 * @param {Object} [authInfo]
                 * @param {Object} [option]
                 * @param {Boolean} [option.failOnNotExist] If true, the login request will fail when no user matches this authInfo.authData exists.
                 * @return {Promise<AV.User>}
                 */
                associateWithMiniApp: function associateWithMiniApp(authInfo, option) {
                  var _this2 = this;
                  if (authInfo === void 0) {
                    var getAuthInfo = getAdapter("getAuthInfo");
                    return getAuthInfo().then(function(authInfo2) {
                      return _this2._linkWith(authInfo2.provider, authInfo2.authData, option);
                    });
                  }
                  return this._linkWith(authInfo.provider, authInfo.authData, option);
                },
                /**
                 * 将用户与 QQ 小程序用户进行关联。适用于为已经在用户系统中存在的用户关联当前使用 QQ 小程序的微信帐号。
                 * 仅在 QQ 小程序中可用。
                 *
                 * @deprecated Please use {@link AV.User#associateWithMiniApp}
                 * @since 4.2.0
                 * @param {Object} [options]
                 * @param {boolean} [options.preferUnionId = false] 如果服务端在登录时获取到了用户的 UnionId，是否将 UnionId 保存在用户账号中。
                 * @param {string} [options.unionIdPlatform = 'qq'] (only take effect when preferUnionId) unionId platform
                 * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
                 * @return {Promise<AV.User>}
                 */
                associateWithQQApp: function associateWithQQApp() {
                  var _this3 = this;
                  var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref3$preferUnionId = _ref3.preferUnionId, preferUnionId = _ref3$preferUnionId === void 0 ? false : _ref3$preferUnionId, _ref3$unionIdPlatform = _ref3.unionIdPlatform, unionIdPlatform = _ref3$unionIdPlatform === void 0 ? "qq" : _ref3$unionIdPlatform, _ref3$asMainAccount = _ref3.asMainAccount, asMainAccount = _ref3$asMainAccount === void 0 ? true : _ref3$asMainAccount;
                  var getAuthInfo = getAdapter("getAuthInfo");
                  return getAuthInfo({
                    preferUnionId,
                    asMainAccount,
                    platform: unionIdPlatform
                  }).then(function(authInfo) {
                    authInfo.provider = PLATFORM_QQAPP;
                    return _this3.associateWithMiniApp(authInfo);
                  });
                },
                /**
                 * 将用户与微信小程序用户进行关联。适用于为已经在用户系统中存在的用户关联当前使用微信小程序的微信帐号。
                 * 仅在微信小程序中可用。
                 *
                 * @deprecated Please use {@link AV.User#associateWithMiniApp}
                 * @since 3.13.0
                 * @param {Object} [options]
                 * @param {boolean} [options.preferUnionId = false] 当用户满足 {@link https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html 获取 UnionId 的条件} 时，是否将 UnionId 保存在用户账号中。
                 * @param {string} [options.unionIdPlatform = 'weixin'] (only take effect when preferUnionId) unionId platform
                 * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
                 * @return {Promise<AV.User>}
                 */
                associateWithWeapp: function associateWithWeapp() {
                  var _this4 = this;
                  var _ref4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref4$preferUnionId = _ref4.preferUnionId, preferUnionId = _ref4$preferUnionId === void 0 ? false : _ref4$preferUnionId, _ref4$unionIdPlatform = _ref4.unionIdPlatform, unionIdPlatform = _ref4$unionIdPlatform === void 0 ? "weixin" : _ref4$unionIdPlatform, _ref4$asMainAccount = _ref4.asMainAccount, asMainAccount = _ref4$asMainAccount === void 0 ? true : _ref4$asMainAccount;
                  var getAuthInfo = getAdapter("getAuthInfo");
                  return getAuthInfo({
                    preferUnionId,
                    asMainAccount,
                    platform: unionIdPlatform
                  }).then(function(authInfo) {
                    return _this4.associateWithMiniApp(authInfo);
                  });
                },
                /**
                 * @deprecated renamed to {@link AV.User#associateWithWeapp}
                 * @return {Promise<AV.User>}
                 */
                linkWithWeapp: function linkWithWeapp(options) {
                  console.warn("DEPRECATED: User#linkWithWeapp 已废弃，请使用 User#associateWithWeapp 代替");
                  return this.associateWithWeapp(options);
                },
                /**
                 * 将用户与 QQ 小程序用户进行关联。适用于为已经在用户系统中存在的用户关联当前使用 QQ 小程序的 QQ 帐号。
                 * 仅在 QQ 小程序中可用。
                 *
                 * @deprecated Please use {@link AV.User#associateWithMiniApp}
                 * @since 4.2.0
                 * @param {string} unionId
                 * @param {Object} [unionOptions]
                 * @param {string} [unionOptions.unionIdPlatform = 'qq'] unionId platform
                 * @param {boolean} [unionOptions.asMainAccount = false] If true, the unionId will be associated with the user.
                 * @return {Promise<AV.User>}
                 */
                associateWithQQAppWithUnionId: function associateWithQQAppWithUnionId(unionId) {
                  var _this5 = this;
                  var _ref5 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref5$unionIdPlatform = _ref5.unionIdPlatform, unionIdPlatform = _ref5$unionIdPlatform === void 0 ? "qq" : _ref5$unionIdPlatform, _ref5$asMainAccount = _ref5.asMainAccount, asMainAccount = _ref5$asMainAccount === void 0 ? false : _ref5$asMainAccount;
                  var getAuthInfo = getAdapter("getAuthInfo");
                  return getAuthInfo({ platform: unionIdPlatform }).then(function(authInfo) {
                    authInfo = AV2.User.mergeUnionId(authInfo, unionId, { asMainAccount });
                    authInfo.provider = PLATFORM_QQAPP;
                    return _this5.associateWithMiniApp(authInfo);
                  });
                },
                /**
                 * 将用户与微信小程序用户进行关联。适用于为已经在用户系统中存在的用户关联当前使用微信小程序的微信帐号。
                 * 仅在微信小程序中可用。
                 *
                 * @deprecated Please use {@link AV.User#associateWithMiniApp}
                 * @since 3.13.0
                 * @param {string} unionId
                 * @param {Object} [unionOptions]
                 * @param {string} [unionOptions.unionIdPlatform = 'weixin'] unionId platform
                 * @param {boolean} [unionOptions.asMainAccount = false] If true, the unionId will be associated with the user.
                 * @return {Promise<AV.User>}
                 */
                associateWithWeappWithUnionId: function associateWithWeappWithUnionId(unionId) {
                  var _this6 = this;
                  var _ref6 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref6$unionIdPlatform = _ref6.unionIdPlatform, unionIdPlatform = _ref6$unionIdPlatform === void 0 ? "weixin" : _ref6$unionIdPlatform, _ref6$asMainAccount = _ref6.asMainAccount, asMainAccount = _ref6$asMainAccount === void 0 ? false : _ref6$asMainAccount;
                  var getAuthInfo = getAdapter("getAuthInfo");
                  return getAuthInfo({ platform: unionIdPlatform }).then(function(authInfo) {
                    authInfo = AV2.User.mergeUnionId(authInfo, unionId, { asMainAccount });
                    return _this6.associateWithMiniApp(authInfo);
                  });
                },
                /**
                 * Unlinks a user from a service.
                 * @param {string} platform
                 * @return {Promise<AV.User>}
                 * @since 3.3.0
                 */
                dissociateAuthData: function dissociateAuthData(provider) {
                  this.unset("authData." + provider);
                  return this.save().then(function(model) {
                    return model._handleSaveResult(true).then(function() {
                      return model;
                    });
                  });
                },
                /**
                 * @private
                 * @deprecated
                 */
                _unlinkFrom: function _unlinkFrom(provider) {
                  console.warn("DEPRECATED: User#_unlinkFrom 已废弃，请使用 User#dissociateAuthData 代替");
                  return this.dissociateAuthData(provider);
                },
                /**
                 * Checks whether a user is linked to a service.
                 * @private
                 */
                _isLinked: function _isLinked(provider) {
                  var authType;
                  if (_.isString(provider)) {
                    authType = provider;
                  } else {
                    authType = provider.getAuthType();
                  }
                  var authData = this.get("authData") || {};
                  return !!authData[authType];
                },
                /**
                 * Checks whether a user is anonymous.
                 * @since 3.9.0
                 * @return {boolean}
                 */
                isAnonymous: function isAnonymous() {
                  return this._isLinked(PLATFORM_ANONYMOUS);
                },
                logOut: function logOut() {
                  this._logOutWithAll();
                  this._isCurrentUser = false;
                },
                /**
                 * Deauthenticates all providers.
                 * @private
                 */
                _logOutWithAll: function _logOutWithAll() {
                  var authData = this.get("authData");
                  if (!authData) {
                    return;
                  }
                  var self2 = this;
                  AV2._objectEach(this.get("authData"), function(value, key) {
                    self2._logOutWith(key);
                  });
                },
                /**
                 * Deauthenticates a single provider (e.g. removing access tokens from the
                 * Facebook SDK).
                 * @private
                 */
                _logOutWith: function _logOutWith(provider) {
                  if (!this.isCurrent()) {
                    return;
                  }
                  if (_.isString(provider)) {
                    provider = AV2.User._authProviders[provider];
                  }
                  if (provider && provider.deauthenticate) {
                    provider.deauthenticate();
                  }
                },
                /**
                 * Signs up a new user. You should call this instead of save for
                 * new AV.Users. This will create a new AV.User on the server, and
                 * also persist the session on disk so that you can access the user using
                 * <code>current</code>.
                 *
                 * <p>A username and password must be set before calling signUp.</p>
                 *
                 * @param {Object} attrs Extra fields to set on the new user, or null.
                 * @param {AuthOptions} options
                 * @return {Promise} A promise that is fulfilled when the signup
                 *     finishes.
                 * @see AV.User.signUp
                 */
                signUp: function signUp(attrs, options) {
                  var error;
                  var username = attrs && attrs.username || this.get("username");
                  if (!username || username === "") {
                    error = new AVError(AVError.OTHER_CAUSE, "Cannot sign up user with an empty name.");
                    throw error;
                  }
                  var password = attrs && attrs.password || this.get("password");
                  if (!password || password === "") {
                    error = new AVError(AVError.OTHER_CAUSE, "Cannot sign up user with an empty password.");
                    throw error;
                  }
                  return this.save(attrs, options).then(function(model) {
                    if (model.isAnonymous()) {
                      model.unset("authData." + PLATFORM_ANONYMOUS);
                      model._opSetQueue = [{}];
                    }
                    return model._handleSaveResult(true).then(function() {
                      return model;
                    });
                  });
                },
                /**
                 * Signs up a new user with mobile phone and sms code.
                 * You should call this instead of save for
                 * new AV.Users. This will create a new AV.User on the server, and
                 * also persist the session on disk so that you can access the user using
                 * <code>current</code>.
                 *
                 * <p>A username and password must be set before calling signUp.</p>
                 *
                 * @param {Object} attrs Extra fields to set on the new user, or null.
                 * @param {AuthOptions} options
                 * @return {Promise} A promise that is fulfilled when the signup
                 *     finishes.
                 * @see AV.User.signUpOrlogInWithMobilePhone
                 * @see AV.Cloud.requestSmsCode
                 */
                signUpOrlogInWithMobilePhone: function signUpOrlogInWithMobilePhone(attrs) {
                  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                  var error;
                  var mobilePhoneNumber = attrs && attrs.mobilePhoneNumber || this.get("mobilePhoneNumber");
                  if (!mobilePhoneNumber || mobilePhoneNumber === "") {
                    error = new AVError(AVError.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber with an empty mobilePhoneNumber.");
                    throw error;
                  }
                  var smsCode = attrs && attrs.smsCode || this.get("smsCode");
                  if (!smsCode || smsCode === "") {
                    error = new AVError(AVError.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber  with an empty smsCode.");
                    throw error;
                  }
                  options._makeRequest = function(route, className, id, method, json) {
                    return AVRequest("usersByMobilePhone", null, null, "POST", json);
                  };
                  return this.save(attrs, options).then(function(model) {
                    delete model.attributes.smsCode;
                    delete model._serverData.smsCode;
                    return model._handleSaveResult(true).then(function() {
                      return model;
                    });
                  });
                },
                /**
                 * The same with {@link AV.User.loginWithAuthData}, except that you can set attributes before login.
                 * @since 3.7.0
                 */
                loginWithAuthData: function loginWithAuthData(authData, platform, options) {
                  return this._linkWith(platform, authData, options);
                },
                /**
                 * The same with {@link AV.User.loginWithAuthDataAndUnionId}, except that you can set attributes before login.
                 * @since 3.7.0
                 */
                loginWithAuthDataAndUnionId: function loginWithAuthDataAndUnionId(authData, platform, unionId, unionLoginOptions) {
                  return this.loginWithAuthData(mergeUnionDataIntoAuthData()(authData, unionId, unionLoginOptions), platform, unionLoginOptions);
                },
                /**
                 * The same with {@link AV.User.loginWithWeapp}, except that you can set attributes before login.
                 * @deprecated please use {@link AV.User#loginWithMiniApp}
                 * @since 3.7.0
                 * @param {Object} [options]
                 * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
                 * @param {boolean} [options.preferUnionId] 当用户满足 {@link https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html 获取 UnionId 的条件} 时，是否使用 UnionId 登录。（since 3.13.0）
                 * @param {string} [options.unionIdPlatform = 'weixin'] (only take effect when preferUnionId) unionId platform
                 * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
                 * @return {Promise<AV.User>}
                 */
                loginWithWeapp: function loginWithWeapp() {
                  var _this7 = this;
                  var _ref7 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref7$preferUnionId = _ref7.preferUnionId, preferUnionId = _ref7$preferUnionId === void 0 ? false : _ref7$preferUnionId, _ref7$unionIdPlatform = _ref7.unionIdPlatform, unionIdPlatform = _ref7$unionIdPlatform === void 0 ? "weixin" : _ref7$unionIdPlatform, _ref7$asMainAccount = _ref7.asMainAccount, asMainAccount = _ref7$asMainAccount === void 0 ? true : _ref7$asMainAccount, _ref7$failOnNotExist = _ref7.failOnNotExist, failOnNotExist = _ref7$failOnNotExist === void 0 ? false : _ref7$failOnNotExist;
                  var getAuthInfo = getAdapter("getAuthInfo");
                  return getAuthInfo({
                    preferUnionId,
                    asMainAccount,
                    platform: unionIdPlatform
                  }).then(function(authInfo) {
                    return _this7.loginWithMiniApp(authInfo, { failOnNotExist });
                  });
                },
                /**
                 * The same with {@link AV.User.loginWithWeappWithUnionId}, except that you can set attributes before login.
                 * @deprecated please use {@link AV.User#loginWithMiniApp}
                 * @since 3.13.0
                 */
                loginWithWeappWithUnionId: function loginWithWeappWithUnionId(unionId) {
                  var _this8 = this;
                  var _ref8 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref8$unionIdPlatform = _ref8.unionIdPlatform, unionIdPlatform = _ref8$unionIdPlatform === void 0 ? "weixin" : _ref8$unionIdPlatform, _ref8$asMainAccount = _ref8.asMainAccount, asMainAccount = _ref8$asMainAccount === void 0 ? false : _ref8$asMainAccount, _ref8$failOnNotExist = _ref8.failOnNotExist, failOnNotExist = _ref8$failOnNotExist === void 0 ? false : _ref8$failOnNotExist;
                  var getAuthInfo = getAdapter("getAuthInfo");
                  return getAuthInfo({ platform: unionIdPlatform }).then(function(authInfo) {
                    authInfo = AV2.User.mergeUnionId(authInfo, unionId, { asMainAccount });
                    return _this8.loginWithMiniApp(authInfo, { failOnNotExist });
                  });
                },
                /**
                 * The same with {@link AV.User.loginWithQQApp}, except that you can set attributes before login.
                 * @deprecated please use {@link AV.User#loginWithMiniApp}
                 * @since 4.2.0
                 * @param {Object} [options]
                 * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
                 * @param {boolean} [options.preferUnionId] 如果服务端在登录时获取到了用户的 UnionId，是否将 UnionId 保存在用户账号中。
                 * @param {string} [options.unionIdPlatform = 'qq'] (only take effect when preferUnionId) unionId platform
                 * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
                 */
                loginWithQQApp: function loginWithQQApp() {
                  var _this9 = this;
                  var _ref9 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref9$preferUnionId = _ref9.preferUnionId, preferUnionId = _ref9$preferUnionId === void 0 ? false : _ref9$preferUnionId, _ref9$unionIdPlatform = _ref9.unionIdPlatform, unionIdPlatform = _ref9$unionIdPlatform === void 0 ? "qq" : _ref9$unionIdPlatform, _ref9$asMainAccount = _ref9.asMainAccount, asMainAccount = _ref9$asMainAccount === void 0 ? true : _ref9$asMainAccount, _ref9$failOnNotExist = _ref9.failOnNotExist, failOnNotExist = _ref9$failOnNotExist === void 0 ? false : _ref9$failOnNotExist;
                  var getAuthInfo = getAdapter("getAuthInfo");
                  return getAuthInfo({
                    preferUnionId,
                    asMainAccount,
                    platform: unionIdPlatform
                  }).then(function(authInfo) {
                    authInfo.provider = PLATFORM_QQAPP;
                    return _this9.loginWithMiniApp(authInfo, { failOnNotExist });
                  });
                },
                /**
                 * The same with {@link AV.User.loginWithQQAppWithUnionId}, except that you can set attributes before login.
                 * @deprecated please use {@link AV.User#loginWithMiniApp}
                 * @since 4.2.0
                 */
                loginWithQQAppWithUnionId: function loginWithQQAppWithUnionId(unionId) {
                  var _this10 = this;
                  var _ref10 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref10$unionIdPlatfor = _ref10.unionIdPlatform, unionIdPlatform = _ref10$unionIdPlatfor === void 0 ? "qq" : _ref10$unionIdPlatfor, _ref10$asMainAccount = _ref10.asMainAccount, asMainAccount = _ref10$asMainAccount === void 0 ? false : _ref10$asMainAccount, _ref10$failOnNotExist = _ref10.failOnNotExist, failOnNotExist = _ref10$failOnNotExist === void 0 ? false : _ref10$failOnNotExist;
                  var getAuthInfo = getAdapter("getAuthInfo");
                  return getAuthInfo({ platform: unionIdPlatform }).then(function(authInfo) {
                    authInfo = AV2.User.mergeUnionId(authInfo, unionId, { asMainAccount });
                    authInfo.provider = PLATFORM_QQAPP;
                    return _this10.loginWithMiniApp(authInfo, { failOnNotExist });
                  });
                },
                /**
                 * The same with {@link AV.User.loginWithMiniApp}, except that you can set attributes before login.
                 * @since 4.6.0
                 */
                loginWithMiniApp: function loginWithMiniApp(authInfo, option) {
                  var _this11 = this;
                  if (authInfo === void 0) {
                    var getAuthInfo = getAdapter("getAuthInfo");
                    return getAuthInfo().then(function(authInfo2) {
                      return _this11.loginWithAuthData(authInfo2.authData, authInfo2.provider, option);
                    });
                  }
                  return this.loginWithAuthData(authInfo.authData, authInfo.provider, option);
                },
                /**
                 * Logs in a AV.User. On success, this saves the session to localStorage,
                 * so you can retrieve the currently logged in user using
                 * <code>current</code>.
                 *
                 * <p>A username and password must be set before calling logIn.</p>
                 *
                 * @see AV.User.logIn
                 * @return {Promise} A promise that is fulfilled with the user when
                 *     the login is complete.
                 */
                logIn: function logIn() {
                  var model = this;
                  var request2 = AVRequest("login", null, null, "POST", this.toJSON());
                  return request2.then(function(resp) {
                    var serverAttrs = model.parse(resp);
                    model._finishFetch(serverAttrs);
                    return model._handleSaveResult(true).then(function() {
                      if (!serverAttrs.smsCode)
                        delete model.attributes["smsCode"];
                      return model;
                    });
                  });
                },
                /**
                 * @see AV.Object#save
                 */
                save: function save(arg1, arg2, arg3) {
                  var attrs, options;
                  if (_.isObject(arg1) || _.isNull(arg1) || _.isUndefined(arg1)) {
                    attrs = arg1;
                    options = arg2;
                  } else {
                    attrs = {};
                    attrs[arg1] = arg2;
                    options = arg3;
                  }
                  options = options || {};
                  return AV2.Object.prototype.save.call(this, attrs, options).then(function(model) {
                    return model._handleSaveResult(false).then(function() {
                      return model;
                    });
                  });
                },
                /**
                 * Follow a user
                 * @since 0.3.0
                 * @param {Object | AV.User | String} options if an AV.User or string is given, it will be used as the target user.
                 * @param {AV.User | String} options.user The target user or user's objectId to follow.
                 * @param {Object} [options.attributes] key-value attributes dictionary to be used as
                 *  conditions of followerQuery/followeeQuery.
                 * @param {AuthOptions} [authOptions]
                 */
                follow: function follow(options, authOptions) {
                  if (!this.id) {
                    throw new Error("Please signin.");
                  }
                  var user = void 0;
                  var attributes = void 0;
                  if (options.user) {
                    user = options.user;
                    attributes = options.attributes;
                  } else {
                    user = options;
                  }
                  var userObjectId = _.isString(user) ? user : user.id;
                  if (!userObjectId) {
                    throw new Error("Invalid target user.");
                  }
                  var route = "users/" + this.id + "/friendship/" + userObjectId;
                  var request2 = AVRequest(route, null, null, "POST", AV2._encode(attributes), authOptions);
                  return request2;
                },
                /**
                 * Unfollow a user.
                 * @since 0.3.0
                 * @param {Object | AV.User | String} options if an AV.User or string is given, it will be used as the target user.
                 * @param {AV.User | String} options.user The target user or user's objectId to unfollow.
                 * @param {AuthOptions} [authOptions]
                 */
                unfollow: function unfollow(options, authOptions) {
                  if (!this.id) {
                    throw new Error("Please signin.");
                  }
                  var user = void 0;
                  if (options.user) {
                    user = options.user;
                  } else {
                    user = options;
                  }
                  var userObjectId = _.isString(user) ? user : user.id;
                  if (!userObjectId) {
                    throw new Error("Invalid target user.");
                  }
                  var route = "users/" + this.id + "/friendship/" + userObjectId;
                  var request2 = AVRequest(route, null, null, "DELETE", null, authOptions);
                  return request2;
                },
                /**
                 * Get the user's followers and followees.
                 * @since 4.8.0
                 * @param {Object} [options]
                 * @param {Number} [options.skip]
                 * @param {Number} [options.limit]
                 * @param {AuthOptions} [authOptions]
                 */
                getFollowersAndFollowees: function getFollowersAndFollowees(options, authOptions) {
                  if (!this.id) {
                    throw new Error("Please signin.");
                  }
                  return request({
                    method: "GET",
                    path: "/users/" + this.id + "/followersAndFollowees",
                    query: {
                      skip: options && options.skip,
                      limit: options && options.limit,
                      include: "follower,followee",
                      keys: "follower,followee"
                    },
                    authOptions
                  }).then(function(_ref11) {
                    var followers = _ref11.followers, followees = _ref11.followees;
                    return {
                      followers: followers.map(function(_ref12) {
                        var follower = _ref12.follower;
                        return AV2._decode(follower);
                      }),
                      followees: followees.map(function(_ref13) {
                        var followee = _ref13.followee;
                        return AV2._decode(followee);
                      })
                    };
                  });
                },
                /**
                 *Create a follower query to query the user's followers.
                 * @since 0.3.0
                 * @see AV.User#followerQuery
                 */
                followerQuery: function followerQuery() {
                  return AV2.User.followerQuery(this.id);
                },
                /**
                 *Create a followee query to query the user's followees.
                 * @since 0.3.0
                 * @see AV.User#followeeQuery
                 */
                followeeQuery: function followeeQuery() {
                  return AV2.User.followeeQuery(this.id);
                },
                /**
                 * @see AV.Object#fetch
                 */
                fetch: function fetch(fetchOptions, options) {
                  return AV2.Object.prototype.fetch.call(this, fetchOptions, options).then(function(model) {
                    return model._handleSaveResult(false).then(function() {
                      return model;
                    });
                  });
                },
                /**
                 * Update user's new password safely based on old password.
                 * @param {String} oldPassword the old password.
                 * @param {String} newPassword the new password.
                 * @param {AuthOptions} options
                 */
                updatePassword: function updatePassword(oldPassword, newPassword, options) {
                  var _this12 = this;
                  var route = "users/" + this.id + "/updatePassword";
                  var params = {
                    old_password: oldPassword,
                    new_password: newPassword
                  };
                  var request2 = AVRequest(route, null, null, "PUT", params, options);
                  return request2.then(function(resp) {
                    _this12._finishFetch(_this12.parse(resp));
                    return _this12._handleSaveResult(true).then(function() {
                      return resp;
                    });
                  });
                },
                /**
                 * Returns true if <code>current</code> would return this user.
                 * @see AV.User#current
                 */
                isCurrent: function isCurrent() {
                  return this._isCurrentUser;
                },
                /**
                 * Returns get("username").
                 * @return {String}
                 * @see AV.Object#get
                 */
                getUsername: function getUsername() {
                  return this.get("username");
                },
                /**
                 * Returns get("mobilePhoneNumber").
                 * @return {String}
                 * @see AV.Object#get
                 */
                getMobilePhoneNumber: function getMobilePhoneNumber() {
                  return this.get("mobilePhoneNumber");
                },
                /**
                 * Calls set("mobilePhoneNumber", phoneNumber, options) and returns the result.
                 * @param {String} mobilePhoneNumber
                 * @return {Boolean}
                 * @see AV.Object#set
                 */
                setMobilePhoneNumber: function setMobilePhoneNumber(phone, options) {
                  return this.set("mobilePhoneNumber", phone, options);
                },
                /**
                 * Calls set("username", username, options) and returns the result.
                 * @param {String} username
                 * @return {Boolean}
                 * @see AV.Object#set
                 */
                setUsername: function setUsername(username, options) {
                  return this.set("username", username, options);
                },
                /**
                 * Calls set("password", password, options) and returns the result.
                 * @param {String} password
                 * @return {Boolean}
                 * @see AV.Object#set
                 */
                setPassword: function setPassword(password, options) {
                  return this.set("password", password, options);
                },
                /**
                 * Returns get("email").
                 * @return {String}
                 * @see AV.Object#get
                 */
                getEmail: function getEmail() {
                  return this.get("email");
                },
                /**
                 * Calls set("email", email, options) and returns the result.
                 * @param {String} email
                 * @param {AuthOptions} options
                 * @return {Boolean}
                 * @see AV.Object#set
                 */
                setEmail: function setEmail(email, options) {
                  return this.set("email", email, options);
                },
                /**
                 * Checks whether this user is the current user and has been authenticated.
                 * @deprecated 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，
                 * 如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id
                 * @return (Boolean) whether this user is the current user and is logged in.
                 */
                authenticated: function authenticated() {
                  console.warn("DEPRECATED: 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id。");
                  return !!this._sessionToken && !AV2._config.disableCurrentUser && AV2.User.current() && AV2.User.current().id === this.id;
                },
                /**
                 * Detects if current sessionToken is valid.
                 *
                 * @since 2.0.0
                 * @return Promise.<Boolean>
                 */
                isAuthenticated: function isAuthenticated() {
                  var _this13 = this;
                  return _promise2.default.resolve().then(function() {
                    return !!_this13._sessionToken && AV2.User._fetchUserBySessionToken(_this13._sessionToken).then(function() {
                      return true;
                    }, function(error) {
                      if (error.code === 211) {
                        return false;
                      }
                      throw error;
                    });
                  });
                },
                /**
                 * Get sessionToken of current user.
                 * @return {String} sessionToken
                 */
                getSessionToken: function getSessionToken() {
                  return this._sessionToken;
                },
                /**
                 * Refresh sessionToken of current user.
                 * @since 2.1.0
                 * @param {AuthOptions} [options]
                 * @return {Promise.<AV.User>} user with refreshed sessionToken
                 */
                refreshSessionToken: function refreshSessionToken(options) {
                  var _this14 = this;
                  return AVRequest("users/" + this.id + "/refreshSessionToken", null, null, "PUT", null, options).then(function(response) {
                    _this14._finishFetch(response);
                    return _this14._handleSaveResult(true).then(function() {
                      return _this14;
                    });
                  });
                },
                /**
                 * Get this user's Roles.
                 * @param {AuthOptions} [options]
                 * @return {Promise.<AV.Role[]>} A promise that is fulfilled with the roles when
                 *     the query is complete.
                 */
                getRoles: function getRoles(options) {
                  return AV2.Relation.reverseQuery("_Role", "users", this).find(options);
                }
              },
              /** @lends AV.User */
              {
                // Class Variables
                // The currently logged-in user.
                _currentUser: null,
                // Whether currentUser is known to match the serialized version on disk.
                // This is useful for saving a localstorage check if you try to load
                // _currentUser frequently while there is none stored.
                _currentUserMatchesDisk: false,
                // The localStorage key suffix that the current user is stored under.
                _CURRENT_USER_KEY: "currentUser",
                // The mapping of auth provider names to actual providers
                _authProviders: {},
                // Class Methods
                /**
                 * Signs up a new user with a username (or email) and password.
                 * This will create a new AV.User on the server, and also persist the
                 * session in localStorage so that you can access the user using
                 * {@link #current}.
                 *
                 * @param {String} username The username (or email) to sign up with.
                 * @param {String} password The password to sign up with.
                 * @param {Object} [attrs] Extra fields to set on the new user.
                 * @param {AuthOptions} [options]
                 * @return {Promise} A promise that is fulfilled with the user when
                 *     the signup completes.
                 * @see AV.User#signUp
                 */
                signUp: function signUp(username, password, attrs, options) {
                  attrs = attrs || {};
                  attrs.username = username;
                  attrs.password = password;
                  var user = AV2.Object._create("_User");
                  return user.signUp(attrs, options);
                },
                /**
                 * Logs in a user with a username (or email) and password. On success, this
                 * saves the session to disk, so you can retrieve the currently logged in
                 * user using <code>current</code>.
                 *
                 * @param {String} username The username (or email) to log in with.
                 * @param {String} password The password to log in with.
                 * @return {Promise} A promise that is fulfilled with the user when
                 *     the login completes.
                 * @see AV.User#logIn
                 */
                logIn: function logIn(username, password) {
                  var user = AV2.Object._create("_User");
                  user._finishFetch({ username, password });
                  return user.logIn();
                },
                /**
                 * Logs in a user with a session token. On success, this saves the session
                 * to disk, so you can retrieve the currently logged in user using
                 * <code>current</code>.
                 *
                 * @param {String} sessionToken The sessionToken to log in with.
                 * @return {Promise} A promise that is fulfilled with the user when
                 *     the login completes.
                 */
                become: function become(sessionToken) {
                  return this._fetchUserBySessionToken(sessionToken).then(function(user) {
                    return user._handleSaveResult(true).then(function() {
                      return user;
                    });
                  });
                },
                _fetchUserBySessionToken: function _fetchUserBySessionToken(sessionToken) {
                  if (sessionToken === void 0) {
                    return _promise2.default.reject(new Error("The sessionToken cannot be undefined"));
                  }
                  var user = AV2.Object._create("_User");
                  return request({
                    method: "GET",
                    path: "/users/me",
                    authOptions: {
                      sessionToken
                    }
                  }).then(function(resp) {
                    var serverAttrs = user.parse(resp);
                    user._finishFetch(serverAttrs);
                    return user;
                  });
                },
                /**
                 * Logs in a user with a mobile phone number and sms code sent by
                 * AV.User.requestLoginSmsCode.On success, this
                 * saves the session to disk, so you can retrieve the currently logged in
                 * user using <code>current</code>.
                 *
                 * @param {String} mobilePhone The user's mobilePhoneNumber
                 * @param {String} smsCode The sms code sent by AV.User.requestLoginSmsCode
                 * @return {Promise} A promise that is fulfilled with the user when
                 *     the login completes.
                 * @see AV.User#logIn
                 */
                logInWithMobilePhoneSmsCode: function logInWithMobilePhoneSmsCode(mobilePhone, smsCode) {
                  var user = AV2.Object._create("_User");
                  user._finishFetch({ mobilePhoneNumber: mobilePhone, smsCode });
                  return user.logIn();
                },
                /**
                 * Signs up or logs in a user with a mobilePhoneNumber and smsCode.
                 * On success, this saves the session to disk, so you can retrieve the currently
                 * logged in user using <code>current</code>.
                 *
                 * @param {String} mobilePhoneNumber The user's mobilePhoneNumber.
                 * @param {String} smsCode The sms code sent by AV.Cloud.requestSmsCode
                 * @param {Object} attributes  The user's other attributes such as username etc.
                 * @param {AuthOptions} options
                 * @return {Promise} A promise that is fulfilled with the user when
                 *     the login completes.
                 * @see AV.User#signUpOrlogInWithMobilePhone
                 * @see AV.Cloud.requestSmsCode
                 */
                signUpOrlogInWithMobilePhone: function signUpOrlogInWithMobilePhone(mobilePhoneNumber, smsCode, attrs, options) {
                  attrs = attrs || {};
                  attrs.mobilePhoneNumber = mobilePhoneNumber;
                  attrs.smsCode = smsCode;
                  var user = AV2.Object._create("_User");
                  return user.signUpOrlogInWithMobilePhone(attrs, options);
                },
                /**
                 * Logs in a user with a mobile phone number and password. On success, this
                 * saves the session to disk, so you can retrieve the currently logged in
                 * user using <code>current</code>.
                 *
                 * @param {String} mobilePhone The user's mobilePhoneNumber
                 * @param {String} password The password to log in with.
                 * @return {Promise} A promise that is fulfilled with the user when
                 *     the login completes.
                 * @see AV.User#logIn
                 */
                logInWithMobilePhone: function logInWithMobilePhone(mobilePhone, password) {
                  var user = AV2.Object._create("_User");
                  user._finishFetch({
                    mobilePhoneNumber: mobilePhone,
                    password
                  });
                  return user.logIn();
                },
                /**
                 * Logs in a user with email and password.
                 *
                 * @since 3.13.0
                 * @param {String} email The user's email.
                 * @param {String} password The password to log in with.
                 * @return {Promise} A promise that is fulfilled with the user when
                 *     the login completes.
                 */
                loginWithEmail: function loginWithEmail(email, password) {
                  var user = AV2.Object._create("_User");
                  user._finishFetch({
                    email,
                    password
                  });
                  return user.logIn();
                },
                /**
                 * Signs up or logs in a user with a third party auth data(AccessToken).
                 * On success, this saves the session to disk, so you can retrieve the currently
                 * logged in user using <code>current</code>.
                 *
                 * @since 3.7.0
                 * @param {Object} authData The response json data returned from third party token, maybe like { openid: 'abc123', access_token: '123abc', expires_in: 1382686496 }
                 * @param {string} platform Available platform for sign up.
                 * @param {Object} [options]
                 * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
                 * @return {Promise} A promise that is fulfilled with the user when
                 *     the login completes.
                 * @example AV.User.loginWithAuthData({
                 *   openid: 'abc123',
                 *   access_token: '123abc',
                 *   expires_in: 1382686496
                 * }, 'weixin').then(function(user) {
                 *   //Access user here
                 * }).catch(function(error) {
                 *   //console.error("error: ", error);
                 * });
                 * @see {@link https://leancloud.cn/docs/js_guide.html#绑定第三方平台账户}
                 */
                loginWithAuthData: function loginWithAuthData(authData, platform, options) {
                  return AV2.User._logInWith(platform, authData, options);
                },
                /**
                 * @deprecated renamed to {@link AV.User.loginWithAuthData}
                 */
                signUpOrlogInWithAuthData: function signUpOrlogInWithAuthData() {
                  console.warn("DEPRECATED: User.signUpOrlogInWithAuthData 已废弃，请使用 User#loginWithAuthData 代替");
                  return this.loginWithAuthData.apply(this, arguments);
                },
                /**
                 * Signs up or logs in a user with a third party authData and unionId.
                 * @since 3.7.0
                 * @param {Object} authData The response json data returned from third party token, maybe like { openid: 'abc123', access_token: '123abc', expires_in: 1382686496 }
                 * @param {string} platform Available platform for sign up.
                 * @param {string} unionId
                 * @param {Object} [unionLoginOptions]
                 * @param {string} [unionLoginOptions.unionIdPlatform = 'weixin'] unionId platform
                 * @param {boolean} [unionLoginOptions.asMainAccount = false] If true, the unionId will be associated with the user.
                 * @param {boolean} [unionLoginOptions.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
                 * @return {Promise<AV.User>} A promise that is fulfilled with the user when completed.
                 * @example AV.User.loginWithAuthDataAndUnionId({
                 *   openid: 'abc123',
                 *   access_token: '123abc',
                 *   expires_in: 1382686496
                 * }, 'weixin', 'union123', {
                 *   unionIdPlatform: 'weixin',
                 *   asMainAccount: true,
                 * }).then(function(user) {
                 *   //Access user here
                 * }).catch(function(error) {
                 *   //console.error("error: ", error);
                 * });
                 */
                loginWithAuthDataAndUnionId: function loginWithAuthDataAndUnionId(authData, platform, unionId, unionLoginOptions) {
                  return this.loginWithAuthData(mergeUnionDataIntoAuthData()(authData, unionId, unionLoginOptions), platform, unionLoginOptions);
                },
                /**
                 * @deprecated renamed to {@link AV.User.loginWithAuthDataAndUnionId}
                 * @since 3.5.0
                 */
                signUpOrlogInWithAuthDataAndUnionId: function signUpOrlogInWithAuthDataAndUnionId() {
                  console.warn("DEPRECATED: User.signUpOrlogInWithAuthDataAndUnionId 已废弃，请使用 User#loginWithAuthDataAndUnionId 代替");
                  return this.loginWithAuthDataAndUnionId.apply(this, arguments);
                },
                /**
                 * Merge unionId into authInfo.
                 * @since 4.6.0
                 * @param {Object} authInfo
                 * @param {String} unionId
                 * @param {Object} [unionIdOption]
                 * @param {Boolean} [unionIdOption.asMainAccount] If true, the unionId will be associated with the user.
                 */
                mergeUnionId: function mergeUnionId(authInfo, unionId) {
                  var _ref14 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref14$asMainAccount = _ref14.asMainAccount, asMainAccount = _ref14$asMainAccount === void 0 ? false : _ref14$asMainAccount;
                  authInfo = JSON.parse((0, _stringify2.default)(authInfo));
                  var _authInfo = authInfo, authData = _authInfo.authData, platform = _authInfo.platform;
                  authData.platform = platform;
                  authData.main_account = asMainAccount;
                  authData.unionid = unionId;
                  return authInfo;
                },
                /**
                 * 使用当前使用微信小程序的微信用户身份注册或登录，成功后用户的 session 会在设备上持久化保存，之后可以使用 AV.User.current() 获取当前登录用户。
                 * 仅在微信小程序中可用。
                 *
                 * @deprecated please use {@link AV.User.loginWithMiniApp}
                 * @since 2.0.0
                 * @param {Object} [options]
                 * @param {boolean} [options.preferUnionId] 当用户满足 {@link https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html 获取 UnionId 的条件} 时，是否使用 UnionId 登录。（since 3.13.0）
                 * @param {string} [options.unionIdPlatform = 'weixin'] (only take effect when preferUnionId) unionId platform
                 * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
                 * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists. (since v3.7.0)
                 * @return {Promise.<AV.User>}
                 */
                loginWithWeapp: function loginWithWeapp() {
                  var _this15 = this;
                  var _ref15 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref15$preferUnionId = _ref15.preferUnionId, preferUnionId = _ref15$preferUnionId === void 0 ? false : _ref15$preferUnionId, _ref15$unionIdPlatfor = _ref15.unionIdPlatform, unionIdPlatform = _ref15$unionIdPlatfor === void 0 ? "weixin" : _ref15$unionIdPlatfor, _ref15$asMainAccount = _ref15.asMainAccount, asMainAccount = _ref15$asMainAccount === void 0 ? true : _ref15$asMainAccount, _ref15$failOnNotExist = _ref15.failOnNotExist, failOnNotExist = _ref15$failOnNotExist === void 0 ? false : _ref15$failOnNotExist;
                  var getAuthInfo = getAdapter("getAuthInfo");
                  return getAuthInfo({
                    preferUnionId,
                    asMainAccount,
                    platform: unionIdPlatform
                  }).then(function(authInfo) {
                    return _this15.loginWithMiniApp(authInfo, { failOnNotExist });
                  });
                },
                /**
                 * 使用当前使用微信小程序的微信用户身份注册或登录，
                 * 仅在微信小程序中可用。
                 *
                 * @deprecated please use {@link AV.User.loginWithMiniApp}
                 * @since 3.13.0
                 * @param {Object} [unionLoginOptions]
                 * @param {string} [unionLoginOptions.unionIdPlatform = 'weixin'] unionId platform
                 * @param {boolean} [unionLoginOptions.asMainAccount = false] If true, the unionId will be associated with the user.
                 * @param {boolean} [unionLoginOptions.failOnNotExist] If true, the login request will fail when no user matches this authData exists.       * @return {Promise.<AV.User>}
                 */
                loginWithWeappWithUnionId: function loginWithWeappWithUnionId(unionId) {
                  var _this16 = this;
                  var _ref16 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref16$unionIdPlatfor = _ref16.unionIdPlatform, unionIdPlatform = _ref16$unionIdPlatfor === void 0 ? "weixin" : _ref16$unionIdPlatfor, _ref16$asMainAccount = _ref16.asMainAccount, asMainAccount = _ref16$asMainAccount === void 0 ? false : _ref16$asMainAccount, _ref16$failOnNotExist = _ref16.failOnNotExist, failOnNotExist = _ref16$failOnNotExist === void 0 ? false : _ref16$failOnNotExist;
                  var getAuthInfo = getAdapter("getAuthInfo");
                  return getAuthInfo({ platform: unionIdPlatform }).then(function(authInfo) {
                    authInfo = AV2.User.mergeUnionId(authInfo, unionId, { asMainAccount });
                    return _this16.loginWithMiniApp(authInfo, { failOnNotExist });
                  });
                },
                /**
                 * 使用当前使用 QQ 小程序的 QQ 用户身份注册或登录，成功后用户的 session 会在设备上持久化保存，之后可以使用 AV.User.current() 获取当前登录用户。
                 * 仅在 QQ 小程序中可用。
                 *
                 * @deprecated please use {@link AV.User.loginWithMiniApp}
                 * @since 4.2.0
                 * @param {Object} [options]
                 * @param {boolean} [options.preferUnionId] 如果服务端在登录时获取到了用户的 UnionId，是否将 UnionId 保存在用户账号中。
                 * @param {string} [options.unionIdPlatform = 'qq'] (only take effect when preferUnionId) unionId platform
                 * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
                 * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists. (since v3.7.0)
                 * @return {Promise.<AV.User>}
                 */
                loginWithQQApp: function loginWithQQApp() {
                  var _this17 = this;
                  var _ref17 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref17$preferUnionId = _ref17.preferUnionId, preferUnionId = _ref17$preferUnionId === void 0 ? false : _ref17$preferUnionId, _ref17$unionIdPlatfor = _ref17.unionIdPlatform, unionIdPlatform = _ref17$unionIdPlatfor === void 0 ? "qq" : _ref17$unionIdPlatfor, _ref17$asMainAccount = _ref17.asMainAccount, asMainAccount = _ref17$asMainAccount === void 0 ? true : _ref17$asMainAccount, _ref17$failOnNotExist = _ref17.failOnNotExist, failOnNotExist = _ref17$failOnNotExist === void 0 ? false : _ref17$failOnNotExist;
                  var getAuthInfo = getAdapter("getAuthInfo");
                  return getAuthInfo({
                    preferUnionId,
                    asMainAccount,
                    platform: unionIdPlatform
                  }).then(function(authInfo) {
                    authInfo.provider = PLATFORM_QQAPP;
                    return _this17.loginWithMiniApp(authInfo, { failOnNotExist });
                  });
                },
                /**
                 * 使用当前使用 QQ 小程序的 QQ 用户身份注册或登录，
                 * 仅在 QQ 小程序中可用。
                 *
                 * @deprecated please use {@link AV.User.loginWithMiniApp}
                 * @since 4.2.0
                 * @param {Object} [unionLoginOptions]
                 * @param {string} [unionLoginOptions.unionIdPlatform = 'qq'] unionId platform
                 * @param {boolean} [unionLoginOptions.asMainAccount = false] If true, the unionId will be associated with the user.
                 * @param {boolean} [unionLoginOptions.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
                 * @return {Promise.<AV.User>}
                 */
                loginWithQQAppWithUnionId: function loginWithQQAppWithUnionId(unionId) {
                  var _this18 = this;
                  var _ref18 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref18$unionIdPlatfor = _ref18.unionIdPlatform, unionIdPlatform = _ref18$unionIdPlatfor === void 0 ? "qq" : _ref18$unionIdPlatfor, _ref18$asMainAccount = _ref18.asMainAccount, asMainAccount = _ref18$asMainAccount === void 0 ? false : _ref18$asMainAccount, _ref18$failOnNotExist = _ref18.failOnNotExist, failOnNotExist = _ref18$failOnNotExist === void 0 ? false : _ref18$failOnNotExist;
                  var getAuthInfo = getAdapter("getAuthInfo");
                  return getAuthInfo({ platform: unionIdPlatform }).then(function(authInfo) {
                    authInfo = AV2.User.mergeUnionId(authInfo, unionId, { asMainAccount });
                    authInfo.provider = PLATFORM_QQAPP;
                    return _this18.loginWithMiniApp(authInfo, { failOnNotExist });
                  });
                },
                /**
                 * Register or login using the identity of the current mini-app.
                 * @param {Object} authInfo
                 * @param {Object} [option]
                 * @param {Boolean} [option.failOnNotExist] If true, the login request will fail when no user matches this authInfo.authData exists.
                 */
                loginWithMiniApp: function loginWithMiniApp(authInfo, option) {
                  var _this19 = this;
                  if (authInfo === void 0) {
                    var getAuthInfo = getAdapter("getAuthInfo");
                    return getAuthInfo().then(function(authInfo2) {
                      return _this19.loginWithAuthData(authInfo2.authData, authInfo2.provider, option);
                    });
                  }
                  return this.loginWithAuthData(authInfo.authData, authInfo.provider, option);
                },
                /**
                 * Only use for DI in tests to produce deterministic IDs.
                 */
                _genId: function _genId() {
                  return uuid();
                },
                /**
                 * Creates an anonymous user.
                 *
                 * @since 3.9.0
                 * @return {Promise.<AV.User>}
                 */
                loginAnonymously: function loginAnonymously() {
                  return this.loginWithAuthData({
                    id: AV2.User._genId()
                  }, "anonymous");
                },
                associateWithAuthData: function associateWithAuthData(userObj, platform, authData) {
                  console.warn("DEPRECATED: User.associateWithAuthData 已废弃，请使用 User#associateWithAuthData 代替");
                  return userObj._linkWith(platform, authData);
                },
                /**
                 * Logs out the currently logged in user session. This will remove the
                 * session from disk, log out of linked services, and future calls to
                 * <code>current</code> will return <code>null</code>.
                 * @return {Promise}
                 */
                logOut: function logOut() {
                  if (AV2._config.disableCurrentUser) {
                    console.warn("AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html");
                    return _promise2.default.resolve(null);
                  }
                  if (AV2.User._currentUser !== null) {
                    AV2.User._currentUser._logOutWithAll();
                    AV2.User._currentUser._isCurrentUser = false;
                  }
                  AV2.User._currentUserMatchesDisk = true;
                  AV2.User._currentUser = null;
                  return AV2.localStorage.removeItemAsync(AV2._getAVPath(AV2.User._CURRENT_USER_KEY)).then(function() {
                    return AV2._refreshSubscriptionId();
                  });
                },
                /**
                 *Create a follower query for special user to query the user's followers.
                 * @param {String} userObjectId The user object id.
                 * @return {AV.FriendShipQuery}
                 * @since 0.3.0
                 */
                followerQuery: function followerQuery(userObjectId) {
                  if (!userObjectId || !_.isString(userObjectId)) {
                    throw new Error("Invalid user object id.");
                  }
                  var query = new AV2.FriendShipQuery("_Follower");
                  query._friendshipTag = "follower";
                  query.equalTo("user", AV2.Object.createWithoutData("_User", userObjectId));
                  return query;
                },
                /**
                 *Create a followee query for special user to query the user's followees.
                 * @param {String} userObjectId The user object id.
                 * @return {AV.FriendShipQuery}
                 * @since 0.3.0
                 */
                followeeQuery: function followeeQuery(userObjectId) {
                  if (!userObjectId || !_.isString(userObjectId)) {
                    throw new Error("Invalid user object id.");
                  }
                  var query = new AV2.FriendShipQuery("_Followee");
                  query._friendshipTag = "followee";
                  query.equalTo("user", AV2.Object.createWithoutData("_User", userObjectId));
                  return query;
                },
                /**
                 * Requests a password reset email to be sent to the specified email address
                 * associated with the user account. This email allows the user to securely
                 * reset their password on the AV site.
                 *
                 * @param {String} email The email address associated with the user that
                 *     forgot their password.
                 * @return {Promise}
                 */
                requestPasswordReset: function requestPasswordReset(email) {
                  var json = { email };
                  var request2 = AVRequest("requestPasswordReset", null, null, "POST", json);
                  return request2;
                },
                /**
                 * Requests a verify email to be sent to the specified email address
                 * associated with the user account. This email allows the user to securely
                 * verify their email address on the AV site.
                 *
                 * @param {String} email The email address associated with the user that
                 *     doesn't verify their email address.
                 * @return {Promise}
                 */
                requestEmailVerify: function requestEmailVerify(email) {
                  var json = { email };
                  var request2 = AVRequest("requestEmailVerify", null, null, "POST", json);
                  return request2;
                },
                /**
                 * Requests a verify sms code to be sent to the specified mobile phone
                 * number associated with the user account. This sms code allows the user to
                 * verify their mobile phone number by calling AV.User.verifyMobilePhone
                 *
                 * @param {String} mobilePhoneNumber The mobile phone number associated with the
                 *                  user that doesn't verify their mobile phone number.
                 * @param {SMSAuthOptions} [options]
                 * @return {Promise}
                 */
                requestMobilePhoneVerify: function requestMobilePhoneVerify(mobilePhoneNumber) {
                  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                  var data2 = {
                    mobilePhoneNumber
                  };
                  if (options.validateToken) {
                    data2.validate_token = options.validateToken;
                  }
                  var request2 = AVRequest("requestMobilePhoneVerify", null, null, "POST", data2, options);
                  return request2;
                },
                /**
                 * Requests a reset password sms code to be sent to the specified mobile phone
                 * number associated with the user account. This sms code allows the user to
                 * reset their account's password by calling AV.User.resetPasswordBySmsCode
                 *
                 * @param {String} mobilePhoneNumber The mobile phone number  associated with the
                 *                  user that doesn't verify their mobile phone number.
                 * @param {SMSAuthOptions} [options]
                 * @return {Promise}
                 */
                requestPasswordResetBySmsCode: function requestPasswordResetBySmsCode(mobilePhoneNumber) {
                  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                  var data2 = {
                    mobilePhoneNumber
                  };
                  if (options.validateToken) {
                    data2.validate_token = options.validateToken;
                  }
                  var request2 = AVRequest("requestPasswordResetBySmsCode", null, null, "POST", data2, options);
                  return request2;
                },
                /**
                 * Requests a change mobile phone number sms code to be sent to the mobilePhoneNumber.
                 * This sms code allows current user to reset it's mobilePhoneNumber by
                 * calling {@link AV.User.changePhoneNumber}
                 * @since 4.7.0
                 * @param {String} mobilePhoneNumber
                 * @param {Number} [ttl] ttl of sms code (default is 6 minutes)
                 * @param {SMSAuthOptions} [options]
                 * @return {Promise}
                 */
                requestChangePhoneNumber: function requestChangePhoneNumber(mobilePhoneNumber, ttl, options) {
                  var data2 = { mobilePhoneNumber };
                  if (ttl) {
                    data2.ttl = options.ttl;
                  }
                  if (options && options.validateToken) {
                    data2.validate_token = options.validateToken;
                  }
                  return AVRequest("requestChangePhoneNumber", null, null, "POST", data2, options);
                },
                /**
                 * Makes a call to reset user's account mobilePhoneNumber by sms code.
                 * The sms code is sent by {@link AV.User.requestChangePhoneNumber}
                 * @since 4.7.0
                 * @param {String} mobilePhoneNumber
                 * @param {String} code The sms code.
                 * @return {Promise}
                 */
                changePhoneNumber: function changePhoneNumber(mobilePhoneNumber, code) {
                  var data2 = { mobilePhoneNumber, code };
                  return AVRequest("changePhoneNumber", null, null, "POST", data2);
                },
                /**
                 * Makes a call to reset user's account password by sms code and new password.
                 * The sms code is sent by AV.User.requestPasswordResetBySmsCode.
                 * @param {String} code The sms code sent by AV.User.Cloud.requestSmsCode
                 * @param {String} password The new password.
                 * @return {Promise} A promise that will be resolved with the result
                 * of the function.
                 */
                resetPasswordBySmsCode: function resetPasswordBySmsCode(code, password) {
                  var json = { password };
                  var request2 = AVRequest("resetPasswordBySmsCode", null, code, "PUT", json);
                  return request2;
                },
                /**
                 * Makes a call to verify sms code that sent by AV.User.Cloud.requestSmsCode
                 * If verify successfully,the user mobilePhoneVerified attribute will be true.
                 * @param {String} code The sms code sent by AV.User.Cloud.requestSmsCode
                 * @return {Promise} A promise that will be resolved with the result
                 * of the function.
                 */
                verifyMobilePhone: function verifyMobilePhone(code) {
                  var request2 = AVRequest("verifyMobilePhone", null, code, "POST", null);
                  return request2;
                },
                /**
                 * Requests a logIn sms code to be sent to the specified mobile phone
                 * number associated with the user account. This sms code allows the user to
                 * login by AV.User.logInWithMobilePhoneSmsCode function.
                 *
                 * @param {String} mobilePhoneNumber The mobile phone number  associated with the
                 *           user that want to login by AV.User.logInWithMobilePhoneSmsCode
                 * @param {SMSAuthOptions} [options]
                 * @return {Promise}
                 */
                requestLoginSmsCode: function requestLoginSmsCode(mobilePhoneNumber) {
                  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                  var data2 = {
                    mobilePhoneNumber
                  };
                  if (options.validateToken) {
                    data2.validate_token = options.validateToken;
                  }
                  var request2 = AVRequest("requestLoginSmsCode", null, null, "POST", data2, options);
                  return request2;
                },
                /**
                 * Retrieves the currently logged in AVUser with a valid session,
                 * either from memory or localStorage, if necessary.
                 * @return {Promise.<AV.User>} resolved with the currently logged in AV.User.
                 */
                currentAsync: function currentAsync() {
                  if (AV2._config.disableCurrentUser) {
                    console.warn("AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html");
                    return _promise2.default.resolve(null);
                  }
                  if (AV2.User._currentUser) {
                    return _promise2.default.resolve(AV2.User._currentUser);
                  }
                  if (AV2.User._currentUserMatchesDisk) {
                    return _promise2.default.resolve(AV2.User._currentUser);
                  }
                  return AV2.localStorage.getItemAsync(AV2._getAVPath(AV2.User._CURRENT_USER_KEY)).then(function(userData) {
                    if (!userData) {
                      return null;
                    }
                    AV2.User._currentUserMatchesDisk = true;
                    AV2.User._currentUser = AV2.Object._create("_User");
                    AV2.User._currentUser._isCurrentUser = true;
                    var json = JSON.parse(userData);
                    AV2.User._currentUser.id = json._id;
                    delete json._id;
                    AV2.User._currentUser._sessionToken = json._sessionToken;
                    delete json._sessionToken;
                    AV2.User._currentUser._finishFetch(json);
                    AV2.User._currentUser._synchronizeAllAuthData();
                    AV2.User._currentUser._refreshCache();
                    AV2.User._currentUser._opSetQueue = [{}];
                    return AV2.User._currentUser;
                  });
                },
                /**
                 * Retrieves the currently logged in AVUser with a valid session,
                 * either from memory or localStorage, if necessary.
                 * @return {AV.User} The currently logged in AV.User.
                 */
                current: function current() {
                  if (AV2._config.disableCurrentUser) {
                    console.warn("AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html");
                    return null;
                  }
                  if (AV2.localStorage.async) {
                    var error = new Error("Synchronous API User.current() is not available in this runtime. Use User.currentAsync() instead.");
                    error.code = "SYNC_API_NOT_AVAILABLE";
                    throw error;
                  }
                  if (AV2.User._currentUser) {
                    return AV2.User._currentUser;
                  }
                  if (AV2.User._currentUserMatchesDisk) {
                    return AV2.User._currentUser;
                  }
                  AV2.User._currentUserMatchesDisk = true;
                  var userData = AV2.localStorage.getItem(AV2._getAVPath(AV2.User._CURRENT_USER_KEY));
                  if (!userData) {
                    return null;
                  }
                  AV2.User._currentUser = AV2.Object._create("_User");
                  AV2.User._currentUser._isCurrentUser = true;
                  var json = JSON.parse(userData);
                  AV2.User._currentUser.id = json._id;
                  delete json._id;
                  AV2.User._currentUser._sessionToken = json._sessionToken;
                  delete json._sessionToken;
                  AV2.User._currentUser._finishFetch(json);
                  AV2.User._currentUser._synchronizeAllAuthData();
                  AV2.User._currentUser._refreshCache();
                  AV2.User._currentUser._opSetQueue = [{}];
                  return AV2.User._currentUser;
                },
                /**
                 * Persists a user as currentUser to localStorage, and into the singleton.
                 * @private
                 */
                _saveCurrentUser: function _saveCurrentUser(user) {
                  var promise;
                  if (AV2.User._currentUser !== user) {
                    promise = AV2.User.logOut();
                  } else {
                    promise = _promise2.default.resolve();
                  }
                  return promise.then(function() {
                    user._isCurrentUser = true;
                    AV2.User._currentUser = user;
                    var json = user._toFullJSON();
                    json._id = user.id;
                    json._sessionToken = user._sessionToken;
                    return AV2.localStorage.setItemAsync(AV2._getAVPath(AV2.User._CURRENT_USER_KEY), (0, _stringify2.default)(json)).then(function() {
                      AV2.User._currentUserMatchesDisk = true;
                      return AV2._refreshSubscriptionId();
                    });
                  });
                },
                _registerAuthenticationProvider: function _registerAuthenticationProvider(provider) {
                  AV2.User._authProviders[provider.getAuthType()] = provider;
                  if (!AV2._config.disableCurrentUser && AV2.User.current()) {
                    AV2.User.current()._synchronizeAuthData(provider.getAuthType());
                  }
                },
                _logInWith: function _logInWith(provider, authData, options) {
                  var user = AV2.Object._create("_User");
                  return user._linkWith(provider, authData, options);
                }
              }
            );
          };
        },
        /* 325 */
        /***/
        function(module2, exports2, __webpack_require__) {
          exports2.__esModule = true;
          var _defineProperty = __webpack_require__(90);
          var _defineProperty2 = _interopRequireDefault(_defineProperty);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          exports2.default = function(obj, key, value) {
            if (key in obj) {
              (0, _defineProperty2.default)(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              obj[key] = value;
            }
            return obj;
          };
        },
        /* 326 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _stringify = __webpack_require__(19);
          var _stringify2 = _interopRequireDefault(_stringify);
          var _promise = __webpack_require__(3);
          var _promise2 = _interopRequireDefault(_promise);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var _ = __webpack_require__(0);
          var debug = __webpack_require__(37)("leancloud:query");
          var AVError = __webpack_require__(29);
          var _require = __webpack_require__(12), _request = _require._request, request = _require.request;
          var _require2 = __webpack_require__(15), ensureArray = _require2.ensureArray, transformFetchOptions = _require2.transformFetchOptions, continueWhile = _require2.continueWhile;
          var requires = function requires2(value, message) {
            if (value === void 0) {
              throw new Error(message);
            }
          };
          module2.exports = function(AV2) {
            AV2.Query = function(objectClass) {
              if (_.isString(objectClass)) {
                objectClass = AV2.Object._getSubclass(objectClass);
              }
              this.objectClass = objectClass;
              this.className = objectClass.prototype.className;
              this._where = {};
              this._include = [];
              this._select = [];
              this._limit = -1;
              this._skip = 0;
              this._defaultParams = {};
            };
            AV2.Query.or = function() {
              var queries = _.toArray(arguments);
              var className = null;
              AV2._arrayEach(queries, function(q) {
                if (_.isNull(className)) {
                  className = q.className;
                }
                if (className !== q.className) {
                  throw new Error("All queries must be for the same class");
                }
              });
              var query = new AV2.Query(className);
              query._orQuery(queries);
              return query;
            };
            AV2.Query.and = function() {
              var queries = _.toArray(arguments);
              var className = null;
              AV2._arrayEach(queries, function(q) {
                if (_.isNull(className)) {
                  className = q.className;
                }
                if (className !== q.className) {
                  throw new Error("All queries must be for the same class");
                }
              });
              var query = new AV2.Query(className);
              query._andQuery(queries);
              return query;
            };
            AV2.Query.doCloudQuery = function(cql, pvalues, options) {
              var params = { cql };
              if (_.isArray(pvalues)) {
                params.pvalues = pvalues;
              } else {
                options = pvalues;
              }
              var request2 = _request("cloudQuery", null, null, "GET", params, options);
              return request2.then(function(response) {
                var query = new AV2.Query(response.className);
                var results = _.map(response.results, function(json) {
                  var obj = query._newObject(response);
                  if (obj._finishFetch) {
                    obj._finishFetch(query._processResult(json), true);
                  }
                  return obj;
                });
                return {
                  results,
                  count: response.count,
                  className: response.className
                };
              });
            };
            AV2.Query.fromJSON = function(_ref) {
              var className = _ref.className, where = _ref.where, include = _ref.include, select = _ref.select, includeACL = _ref.includeACL, limit = _ref.limit, skip = _ref.skip, order = _ref.order;
              if (typeof className !== "string") {
                throw new TypeError("Invalid Query JSON, className must be a String.");
              }
              var query = new AV2.Query(className);
              _.extend(query, {
                _where: where,
                _include: include,
                _select: select,
                _includeACL: includeACL,
                _limit: limit,
                _skip: skip,
                _order: order
              });
              return query;
            };
            AV2.Query._extend = AV2._extend;
            _.extend(
              AV2.Query.prototype,
              /** @lends AV.Query.prototype */
              {
                //hook to iterate result. Added by dennis<xzhuang@avoscloud.com>.
                _processResult: function _processResult(obj) {
                  return obj;
                },
                /**
                 * Constructs an AV.Object whose id is already known by fetching data from
                 * the server.
                 *
                 * @param {String} objectId The id of the object to be fetched.
                 * @param {AuthOptions} options
                 * @return {Promise.<AV.Object>}
                 */
                get: function get(objectId, options) {
                  if (!_.isString(objectId)) {
                    throw new Error("objectId must be a string");
                  }
                  if (objectId === "") {
                    return _promise2.default.reject(new AVError(AVError.OBJECT_NOT_FOUND, "Object not found."));
                  }
                  var obj = this._newObject();
                  obj.id = objectId;
                  var queryJSON = this._getParams();
                  var fetchOptions = {};
                  if (queryJSON.keys)
                    fetchOptions.keys = queryJSON.keys;
                  if (queryJSON.include)
                    fetchOptions.include = queryJSON.include;
                  if (queryJSON.includeACL)
                    fetchOptions.includeACL = queryJSON.includeACL;
                  return _request("classes", this.className, objectId, "GET", transformFetchOptions(fetchOptions), options).then(function(response) {
                    if (_.isEmpty(response))
                      throw new AVError(AVError.OBJECT_NOT_FOUND, "Object not found.");
                    obj._finishFetch(obj.parse(response), true);
                    return obj;
                  });
                },
                /**
                 * Returns a JSON representation of this query.
                 * @return {Object}
                 */
                toJSON: function toJSON() {
                  var className = this.className, where = this._where, include = this._include, select = this._select, includeACL = this._includeACL, limit = this._limit, skip = this._skip, order = this._order;
                  return {
                    className,
                    where,
                    include,
                    select,
                    includeACL,
                    limit,
                    skip,
                    order
                  };
                },
                _getParams: function _getParams() {
                  var params = _.extend({}, this._defaultParams, {
                    where: this._where
                  });
                  if (this._include.length > 0) {
                    params.include = this._include.join(",");
                  }
                  if (this._select.length > 0) {
                    params.keys = this._select.join(",");
                  }
                  if (this._includeACL !== void 0) {
                    params.returnACL = this._includeACL;
                  }
                  if (this._limit >= 0) {
                    params.limit = this._limit;
                  }
                  if (this._skip > 0) {
                    params.skip = this._skip;
                  }
                  if (this._order !== void 0) {
                    params.order = this._order;
                  }
                  return params;
                },
                _newObject: function _newObject(response) {
                  var obj;
                  if (response && response.className) {
                    obj = new AV2.Object(response.className);
                  } else {
                    obj = new this.objectClass();
                  }
                  return obj;
                },
                _createRequest: function _createRequest() {
                  var params = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this._getParams();
                  var options = arguments[1];
                  var path = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "/classes/" + this.className;
                  if (encodeURIComponent((0, _stringify2.default)(params)).length > 2e3) {
                    var body = {
                      requests: [{
                        method: "GET",
                        path: "/1.1" + path,
                        params
                      }]
                    };
                    return request({
                      path: "/batch",
                      method: "POST",
                      data: body,
                      authOptions: options
                    }).then(function(response) {
                      var result = response[0];
                      if (result.success) {
                        return result.success;
                      }
                      var error = new Error(result.error.error || "Unknown batch error");
                      error.code = result.error.code;
                      throw error;
                    });
                  }
                  return request({
                    method: "GET",
                    path,
                    query: params,
                    authOptions: options
                  });
                },
                _parseResponse: function _parseResponse(response) {
                  var _this = this;
                  return _.map(response.results, function(json) {
                    var obj = _this._newObject(response);
                    if (obj._finishFetch) {
                      obj._finishFetch(_this._processResult(json), true);
                    }
                    return obj;
                  });
                },
                /**
                 * Retrieves a list of AVObjects that satisfy this query.
                 *
                 * @param {AuthOptions} options
                 * @return {Promise} A promise that is resolved with the results when
                 * the query completes.
                 */
                find: function find(options) {
                  var request2 = this._createRequest(void 0, options);
                  return request2.then(this._parseResponse.bind(this));
                },
                /**
                 * Retrieves both AVObjects and total count.
                 *
                 * @since 4.12.0
                 * @param {AuthOptions} options
                 * @return {Promise} A tuple contains results and count.
                 */
                findAndCount: function findAndCount(options) {
                  var _this2 = this;
                  var params = this._getParams();
                  params.count = 1;
                  var request2 = this._createRequest(params, options);
                  return request2.then(function(response) {
                    return [_this2._parseResponse(response), response.count];
                  });
                },
                /**
                 * scan a Query. masterKey required.
                 *
                 * @since 2.1.0
                 * @param {object} [options]
                 * @param {string} [options.orderedBy] specify the key to sort
                 * @param {number} [options.batchSize] specify the batch size for each request
                 * @param {AuthOptions} [authOptions]
                 * @return {AsyncIterator.<AV.Object>}
                 * @example const testIterator = {
                 *   [Symbol.asyncIterator]() {
                 *     return new Query('Test').scan(undefined, { useMasterKey: true });
                 *   },
                 * };
                 * for await (const test of testIterator) {
                 *   console.log(test.id);
                 * }
                 */
                scan: function scan() {
                  var _this3 = this;
                  var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, orderedBy = _ref2.orderedBy, batchSize = _ref2.batchSize;
                  var authOptions = arguments[1];
                  var condition = this._getParams();
                  debug("scan %O", condition);
                  if (condition.order) {
                    console.warn("The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan.");
                    delete condition.order;
                  }
                  if (condition.skip) {
                    console.warn("The skip option of the query is ignored for Query#scan.");
                    delete condition.skip;
                  }
                  if (condition.limit) {
                    console.warn("The limit option of the query is ignored for Query#scan.");
                    delete condition.limit;
                  }
                  if (orderedBy)
                    condition.scan_key = orderedBy;
                  if (batchSize)
                    condition.limit = batchSize;
                  var promise = _promise2.default.resolve([]);
                  var cursor = void 0;
                  var endReached = false;
                  return {
                    next: function next() {
                      promise = promise.then(function(remainResults) {
                        if (endReached)
                          return [];
                        if (remainResults.length > 1)
                          return remainResults;
                        if (!cursor && remainResults.length !== 0) {
                          endReached = true;
                          return remainResults;
                        }
                        return _request("scan/classes", _this3.className, null, "GET", cursor ? _.extend({}, condition, { cursor }) : condition, authOptions).then(function(response) {
                          cursor = response.cursor;
                          return _this3._parseResponse(response);
                        }).then(function(results) {
                          if (!results.length)
                            endReached = true;
                          return remainResults.concat(results);
                        });
                      });
                      return promise.then(function(remainResults) {
                        return remainResults.shift();
                      }).then(function(result) {
                        return {
                          value: result,
                          done: result === void 0
                        };
                      });
                    }
                  };
                },
                /**
                 * Delete objects retrieved by this query.
                 * @param {AuthOptions} options
                 * @return {Promise} A promise that is fulfilled when the save
                 *     completes.
                 */
                destroyAll: function destroyAll(options) {
                  var self2 = this;
                  return self2.find(options).then(function(objects) {
                    return AV2.Object.destroyAll(objects, options);
                  });
                },
                /**
                 * Counts the number of objects that match this query.
                 *
                 * @param {AuthOptions} options
                 * @return {Promise} A promise that is resolved with the count when
                 * the query completes.
                 */
                count: function count(options) {
                  var params = this._getParams();
                  params.limit = 0;
                  params.count = 1;
                  var request2 = this._createRequest(params, options);
                  return request2.then(function(response) {
                    return response.count;
                  });
                },
                /**
                 * Retrieves at most one AV.Object that satisfies this query.
                 *
                 * @param {AuthOptions} options
                 * @return {Promise} A promise that is resolved with the object when
                 * the query completes.
                 */
                first: function first(options) {
                  var self2 = this;
                  var params = this._getParams();
                  params.limit = 1;
                  var request2 = this._createRequest(params, options);
                  return request2.then(function(response) {
                    return _.map(response.results, function(json) {
                      var obj = self2._newObject();
                      if (obj._finishFetch) {
                        obj._finishFetch(self2._processResult(json), true);
                      }
                      return obj;
                    })[0];
                  });
                },
                /**
                 * Sets the number of results to skip before returning any results.
                 * This is useful for pagination.
                 * Default is to skip zero results.
                 * @param {Number} n the number of results to skip.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                skip: function skip(n2) {
                  requires(n2, "undefined is not a valid skip value");
                  this._skip = n2;
                  return this;
                },
                /**
                 * Sets the limit of the number of results to return. The default limit is
                 * 100, with a maximum of 1000 results being returned at a time.
                 * @param {Number} n the number of results to limit to.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                limit: function limit(n2) {
                  requires(n2, "undefined is not a valid limit value");
                  this._limit = n2;
                  return this;
                },
                /**
                 * Add a constraint to the query that requires a particular key's value to
                 * be equal to the provided value.
                 * @param {String} key The key to check.
                 * @param value The value that the AV.Object must contain.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                equalTo: function equalTo(key, value) {
                  requires(key, "undefined is not a valid key");
                  requires(value, "undefined is not a valid value");
                  this._where[key] = AV2._encode(value);
                  return this;
                },
                /**
                 * Helper for condition queries
                 * @private
                 */
                _addCondition: function _addCondition(key, condition, value) {
                  requires(key, "undefined is not a valid condition key");
                  requires(condition, "undefined is not a valid condition");
                  requires(value, "undefined is not a valid condition value");
                  if (!this._where[key]) {
                    this._where[key] = {};
                  }
                  this._where[key][condition] = AV2._encode(value);
                  return this;
                },
                /**
                 * Add a constraint to the query that requires a particular
                 * <strong>array</strong> key's length to be equal to the provided value.
                 * @param {String} key The array key to check.
                 * @param value The length value.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                sizeEqualTo: function sizeEqualTo(key, value) {
                  this._addCondition(key, "$size", value);
                  return this;
                },
                /**
                 * Add a constraint to the query that requires a particular key's value to
                 * be not equal to the provided value.
                 * @param {String} key The key to check.
                 * @param value The value that must not be equalled.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                notEqualTo: function notEqualTo(key, value) {
                  this._addCondition(key, "$ne", value);
                  return this;
                },
                /**
                 * Add a constraint to the query that requires a particular key's value to
                 * be less than the provided value.
                 * @param {String} key The key to check.
                 * @param value The value that provides an upper bound.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                lessThan: function lessThan(key, value) {
                  this._addCondition(key, "$lt", value);
                  return this;
                },
                /**
                 * Add a constraint to the query that requires a particular key's value to
                 * be greater than the provided value.
                 * @param {String} key The key to check.
                 * @param value The value that provides an lower bound.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                greaterThan: function greaterThan(key, value) {
                  this._addCondition(key, "$gt", value);
                  return this;
                },
                /**
                 * Add a constraint to the query that requires a particular key's value to
                 * be less than or equal to the provided value.
                 * @param {String} key The key to check.
                 * @param value The value that provides an upper bound.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                lessThanOrEqualTo: function lessThanOrEqualTo(key, value) {
                  this._addCondition(key, "$lte", value);
                  return this;
                },
                /**
                 * Add a constraint to the query that requires a particular key's value to
                 * be greater than or equal to the provided value.
                 * @param {String} key The key to check.
                 * @param value The value that provides an lower bound.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                greaterThanOrEqualTo: function greaterThanOrEqualTo(key, value) {
                  this._addCondition(key, "$gte", value);
                  return this;
                },
                /**
                 * Add a constraint to the query that requires a particular key's value to
                 * be contained in the provided list of values.
                 * @param {String} key The key to check.
                 * @param {Array} values The values that will match.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                containedIn: function containedIn(key, values) {
                  this._addCondition(key, "$in", values);
                  return this;
                },
                /**
                 * Add a constraint to the query that requires a particular key's value to
                 * not be contained in the provided list of values.
                 * @param {String} key The key to check.
                 * @param {Array} values The values that will not match.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                notContainedIn: function notContainedIn(key, values) {
                  this._addCondition(key, "$nin", values);
                  return this;
                },
                /**
                 * Add a constraint to the query that requires a particular key's value to
                 * contain each one of the provided list of values.
                 * @param {String} key The key to check.  This key's value must be an array.
                 * @param {Array} values The values that will match.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                containsAll: function containsAll(key, values) {
                  this._addCondition(key, "$all", values);
                  return this;
                },
                /**
                 * Add a constraint for finding objects that contain the given key.
                 * @param {String} key The key that should exist.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                exists: function exists(key) {
                  this._addCondition(key, "$exists", true);
                  return this;
                },
                /**
                 * Add a constraint for finding objects that do not contain a given key.
                 * @param {String} key The key that should not exist
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                doesNotExist: function doesNotExist(key) {
                  this._addCondition(key, "$exists", false);
                  return this;
                },
                /**
                 * Add a regular expression constraint for finding string values that match
                 * the provided regular expression.
                 * This may be slow for large datasets.
                 * @param {String} key The key that the string to match is stored in.
                 * @param {RegExp} regex The regular expression pattern to match.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                matches: function matches(key, regex, modifiers) {
                  this._addCondition(key, "$regex", regex);
                  if (!modifiers) {
                    modifiers = "";
                  }
                  if (regex.ignoreCase) {
                    modifiers += "i";
                  }
                  if (regex.multiline) {
                    modifiers += "m";
                  }
                  if (modifiers && modifiers.length) {
                    this._addCondition(key, "$options", modifiers);
                  }
                  return this;
                },
                /**
                 * Add a constraint that requires that a key's value matches a AV.Query
                 * constraint.
                 * @param {String} key The key that the contains the object to match the
                 *                     query.
                 * @param {AV.Query} query The query that should match.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                matchesQuery: function matchesQuery(key, query) {
                  var queryJSON = query._getParams();
                  queryJSON.className = query.className;
                  this._addCondition(key, "$inQuery", queryJSON);
                  return this;
                },
                /**
                 * Add a constraint that requires that a key's value not matches a
                 * AV.Query constraint.
                 * @param {String} key The key that the contains the object to match the
                 *                     query.
                 * @param {AV.Query} query The query that should not match.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                doesNotMatchQuery: function doesNotMatchQuery(key, query) {
                  var queryJSON = query._getParams();
                  queryJSON.className = query.className;
                  this._addCondition(key, "$notInQuery", queryJSON);
                  return this;
                },
                /**
                 * Add a constraint that requires that a key's value matches a value in
                 * an object returned by a different AV.Query.
                 * @param {String} key The key that contains the value that is being
                 *                     matched.
                 * @param {String} queryKey The key in the objects returned by the query to
                 *                          match against.
                 * @param {AV.Query} query The query to run.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                matchesKeyInQuery: function matchesKeyInQuery(key, queryKey, query) {
                  var queryJSON = query._getParams();
                  queryJSON.className = query.className;
                  this._addCondition(key, "$select", { key: queryKey, query: queryJSON });
                  return this;
                },
                /**
                 * Add a constraint that requires that a key's value not match a value in
                 * an object returned by a different AV.Query.
                 * @param {String} key The key that contains the value that is being
                 *                     excluded.
                 * @param {String} queryKey The key in the objects returned by the query to
                 *                          match against.
                 * @param {AV.Query} query The query to run.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                doesNotMatchKeyInQuery: function doesNotMatchKeyInQuery(key, queryKey, query) {
                  var queryJSON = query._getParams();
                  queryJSON.className = query.className;
                  this._addCondition(key, "$dontSelect", {
                    key: queryKey,
                    query: queryJSON
                  });
                  return this;
                },
                /**
                 * Add constraint that at least one of the passed in queries matches.
                 * @param {Array} queries
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 * @private
                 */
                _orQuery: function _orQuery(queries) {
                  var queryJSON = _.map(queries, function(q) {
                    return q._getParams().where;
                  });
                  this._where.$or = queryJSON;
                  return this;
                },
                /**
                 * Add constraint that both of the passed in queries matches.
                 * @param {Array} queries
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 * @private
                 */
                _andQuery: function _andQuery(queries) {
                  var queryJSON = _.map(queries, function(q) {
                    return q._getParams().where;
                  });
                  this._where.$and = queryJSON;
                  return this;
                },
                /**
                 * Converts a string into a regex that matches it.
                 * Surrounding with \Q .. \E does this, we just need to escape \E's in
                 * the text separately.
                 * @private
                 */
                _quote: function _quote(s) {
                  return "\\Q" + s.replace("\\E", "\\E\\\\E\\Q") + "\\E";
                },
                /**
                 * Add a constraint for finding string values that contain a provided
                 * string.  This may be slow for large datasets.
                 * @param {String} key The key that the string to match is stored in.
                 * @param {String} substring The substring that the value must contain.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                contains: function contains(key, value) {
                  this._addCondition(key, "$regex", this._quote(value));
                  return this;
                },
                /**
                 * Add a constraint for finding string values that start with a provided
                 * string.  This query will use the backend index, so it will be fast even
                 * for large datasets.
                 * @param {String} key The key that the string to match is stored in.
                 * @param {String} prefix The substring that the value must start with.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                startsWith: function startsWith(key, value) {
                  this._addCondition(key, "$regex", "^" + this._quote(value));
                  return this;
                },
                /**
                 * Add a constraint for finding string values that end with a provided
                 * string.  This will be slow for large datasets.
                 * @param {String} key The key that the string to match is stored in.
                 * @param {String} suffix The substring that the value must end with.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                endsWith: function endsWith(key, value) {
                  this._addCondition(key, "$regex", this._quote(value) + "$");
                  return this;
                },
                /**
                 * Sorts the results in ascending order by the given key.
                 *
                 * @param {String} key The key to order by.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                ascending: function ascending(key) {
                  requires(key, "undefined is not a valid key");
                  this._order = key;
                  return this;
                },
                /**
                 * Also sorts the results in ascending order by the given key. The previous sort keys have
                 * precedence over this key.
                 *
                 * @param {String} key The key to order by
                 * @return {AV.Query} Returns the query so you can chain this call.
                 */
                addAscending: function addAscending(key) {
                  requires(key, "undefined is not a valid key");
                  if (this._order)
                    this._order += "," + key;
                  else
                    this._order = key;
                  return this;
                },
                /**
                 * Sorts the results in descending order by the given key.
                 *
                 * @param {String} key The key to order by.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                descending: function descending(key) {
                  requires(key, "undefined is not a valid key");
                  this._order = "-" + key;
                  return this;
                },
                /**
                 * Also sorts the results in descending order by the given key. The previous sort keys have
                 * precedence over this key.
                 *
                 * @param {String} key The key to order by
                 * @return {AV.Query} Returns the query so you can chain this call.
                 */
                addDescending: function addDescending(key) {
                  requires(key, "undefined is not a valid key");
                  if (this._order)
                    this._order += ",-" + key;
                  else
                    this._order = "-" + key;
                  return this;
                },
                /**
                 * Add a proximity based constraint for finding objects with key point
                 * values near the point given.
                 * @param {String} key The key that the AV.GeoPoint is stored in.
                 * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                near: function near(key, point) {
                  if (!(point instanceof AV2.GeoPoint)) {
                    point = new AV2.GeoPoint(point);
                  }
                  this._addCondition(key, "$nearSphere", point);
                  return this;
                },
                /**
                 * Add a proximity based constraint for finding objects with key point
                 * values near the point given and within the maximum distance given.
                 * @param {String} key The key that the AV.GeoPoint is stored in.
                 * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
                 * @param maxDistance Maximum distance (in radians) of results to return.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                withinRadians: function withinRadians(key, point, distance) {
                  this.near(key, point);
                  this._addCondition(key, "$maxDistance", distance);
                  return this;
                },
                /**
                 * Add a proximity based constraint for finding objects with key point
                 * values near the point given and within the maximum distance given.
                 * Radius of earth used is 3958.8 miles.
                 * @param {String} key The key that the AV.GeoPoint is stored in.
                 * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
                 * @param {Number} maxDistance Maximum distance (in miles) of results to
                 *     return.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                withinMiles: function withinMiles(key, point, distance) {
                  return this.withinRadians(key, point, distance / 3958.8);
                },
                /**
                 * Add a proximity based constraint for finding objects with key point
                 * values near the point given and within the maximum distance given.
                 * Radius of earth used is 6371.0 kilometers.
                 * @param {String} key The key that the AV.GeoPoint is stored in.
                 * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
                 * @param {Number} maxDistance Maximum distance (in kilometers) of results
                 *     to return.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                withinKilometers: function withinKilometers(key, point, distance) {
                  return this.withinRadians(key, point, distance / 6371);
                },
                /**
                 * Add a constraint to the query that requires a particular key's
                 * coordinates be contained within a given rectangular geographic bounding
                 * box.
                 * @param {String} key The key to be constrained.
                 * @param {AV.GeoPoint} southwest
                 *     The lower-left inclusive corner of the box.
                 * @param {AV.GeoPoint} northeast
                 *     The upper-right inclusive corner of the box.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                withinGeoBox: function withinGeoBox(key, southwest, northeast) {
                  if (!(southwest instanceof AV2.GeoPoint)) {
                    southwest = new AV2.GeoPoint(southwest);
                  }
                  if (!(northeast instanceof AV2.GeoPoint)) {
                    northeast = new AV2.GeoPoint(northeast);
                  }
                  this._addCondition(key, "$within", { $box: [southwest, northeast] });
                  return this;
                },
                /**
                 * Include nested AV.Objects for the provided key.  You can use dot
                 * notation to specify which fields in the included object are also fetch.
                 * @param {String[]} keys The name of the key to include.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                include: function include(keys) {
                  var _this4 = this;
                  requires(keys, "undefined is not a valid key");
                  _.forEach(arguments, function(keys2) {
                    _this4._include = _this4._include.concat(ensureArray(keys2));
                  });
                  return this;
                },
                /**
                 * Include the ACL.
                 * @param {Boolean} [value=true] Whether to include the ACL
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                includeACL: function includeACL() {
                  var value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                  this._includeACL = value;
                  return this;
                },
                /**
                 * Restrict the fields of the returned AV.Objects to include only the
                 * provided keys.  If this is called multiple times, then all of the keys
                 * specified in each of the calls will be included.
                 * @param {String[]} keys The names of the keys to include.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                select: function select(keys) {
                  var _this5 = this;
                  requires(keys, "undefined is not a valid key");
                  _.forEach(arguments, function(keys2) {
                    _this5._select = _this5._select.concat(ensureArray(keys2));
                  });
                  return this;
                },
                /**
                 * Iterates over each result of a query, calling a callback for each one. If
                 * the callback returns a promise, the iteration will not continue until
                 * that promise has been fulfilled. If the callback returns a rejected
                 * promise, then iteration will stop with that error. The items are
                 * processed in an unspecified order. The query may not have any sort order,
                 * and may not use limit or skip.
                 * @param callback {Function} Callback that will be called with each result
                 *     of the query.
                 * @return {Promise} A promise that will be fulfilled once the
                 *     iteration has completed.
                 */
                each: function each(callback) {
                  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                  if (this._order || this._skip || this._limit >= 0) {
                    var error = new Error("Cannot iterate on a query with sort, skip, or limit.");
                    return _promise2.default.reject(error);
                  }
                  var query = new AV2.Query(this.objectClass);
                  query._limit = options.batchSize || 100;
                  query._where = _.clone(this._where);
                  query._include = _.clone(this._include);
                  query.ascending("objectId");
                  var finished = false;
                  return continueWhile(function() {
                    return !finished;
                  }, function() {
                    return query.find(options).then(function(results) {
                      var callbacksDone = _promise2.default.resolve();
                      _.each(results, function(result) {
                        callbacksDone = callbacksDone.then(function() {
                          return callback(result);
                        });
                      });
                      return callbacksDone.then(function() {
                        if (results.length >= query._limit) {
                          query.greaterThan("objectId", results[results.length - 1].id);
                        } else {
                          finished = true;
                        }
                      });
                    });
                  });
                },
                /**
                 * Subscribe the changes of this query.
                 *
                 * LiveQuery is not included in the default bundle: {@link https://url.leanapp.cn/enable-live-query}.
                 *
                 * @since 3.0.0
                 * @return {AV.LiveQuery} An eventemitter which can be used to get LiveQuery updates;
                 */
                subscribe: function subscribe(options) {
                  return AV2.LiveQuery.init(this, options);
                }
              }
            );
            AV2.FriendShipQuery = AV2.Query._extend({
              _newObject: function _newObject() {
                var UserClass = AV2.Object._getSubclass("_User");
                return new UserClass();
              },
              _processResult: function _processResult(json) {
                if (json && json[this._friendshipTag]) {
                  var user = json[this._friendshipTag];
                  if (user.__type === "Pointer" && user.className === "_User") {
                    delete user.__type;
                    delete user.className;
                  }
                  return user;
                } else {
                  return null;
                }
              }
            });
          };
        },
        /* 327 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _promise = __webpack_require__(3);
          var _promise2 = _interopRequireDefault(_promise);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var _ = __webpack_require__(0);
          var EventEmitter = __webpack_require__(162);
          var _require = __webpack_require__(15), inherits = _require.inherits;
          var _require2 = __webpack_require__(12), request = _require2.request;
          var subscribe = function subscribe2(queryJSON, subscriptionId) {
            return request({
              method: "POST",
              path: "/LiveQuery/subscribe",
              data: {
                query: queryJSON,
                id: subscriptionId
              }
            });
          };
          module2.exports = function(AV2) {
            var requireRealtime = function requireRealtime2() {
              if (!AV2._config.realtime) {
                throw new Error("LiveQuery not supported. Please use the LiveQuery bundle. https://url.leanapp.cn/enable-live-query");
              }
            };
            AV2.LiveQuery = inherits(
              EventEmitter,
              /** @lends AV.LiveQuery.prototype */
              {
                constructor: function constructor(id, client, queryJSON, subscriptionId) {
                  var _this = this;
                  EventEmitter.apply(this);
                  this.id = id;
                  this._client = client;
                  this._client.register(this);
                  this._queryJSON = queryJSON;
                  this._subscriptionId = subscriptionId;
                  this._onMessage = this._dispatch.bind(this);
                  this._onReconnect = function() {
                    subscribe(_this._queryJSON, _this._subscriptionId).catch(function(error) {
                      return console.error("LiveQuery resubscribe error: " + error.message);
                    });
                  };
                  client.on("message", this._onMessage);
                  client.on("reconnect", this._onReconnect);
                },
                _dispatch: function _dispatch(message) {
                  var _this2 = this;
                  message.forEach(function(_ref) {
                    var op = _ref.op, object = _ref.object, queryId = _ref.query_id, updatedKeys = _ref.updatedKeys;
                    if (queryId !== _this2.id)
                      return;
                    var target = AV2.parseJSON(_.extend({
                      __type: object.className === "_File" ? "File" : "Object"
                    }, object));
                    if (updatedKeys) {
                      _this2.emit(op, target, updatedKeys);
                    } else {
                      _this2.emit(op, target);
                    }
                  });
                },
                /**
                 * unsubscribe the query
                 *
                 * @return {Promise}
                 */
                unsubscribe: function unsubscribe() {
                  var client = this._client;
                  client.off("message", this._onMessage);
                  client.off("reconnect", this._onReconnect);
                  client.deregister(this);
                  return request({
                    method: "POST",
                    path: "/LiveQuery/unsubscribe",
                    data: {
                      id: client.id,
                      query_id: this.id
                    }
                  });
                }
              },
              /** @lends AV.LiveQuery */
              {
                init: function init(query) {
                  var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref2$subscriptionId = _ref2.subscriptionId, userDefinedSubscriptionId = _ref2$subscriptionId === void 0 ? AV2._getSubscriptionId() : _ref2$subscriptionId;
                  requireRealtime();
                  if (!(query instanceof AV2.Query))
                    throw new TypeError("LiveQuery must be inited with a Query");
                  return _promise2.default.resolve(userDefinedSubscriptionId).then(function(subscriptionId) {
                    return AV2._config.realtime.createLiveQueryClient(subscriptionId).then(function(liveQueryClient) {
                      var _query$_getParams = query._getParams(), where = _query$_getParams.where, keys = _query$_getParams.keys, returnACL = _query$_getParams.returnACL;
                      var queryJSON = {
                        where,
                        keys,
                        returnACL,
                        className: query.className
                      };
                      var promise = subscribe(queryJSON, subscriptionId).then(function(_ref3) {
                        var queryId = _ref3.query_id;
                        return new AV2.LiveQuery(queryId, liveQueryClient, queryJSON, subscriptionId);
                      }).finally(function() {
                        liveQueryClient.deregister(promise);
                      });
                      liveQueryClient.register(promise);
                      return promise;
                    });
                  });
                },
                /**
                 * Pause the LiveQuery connection. This is useful to deactivate the SDK when the app is swtiched to background.
                 * @static
                 * @return void
                 */
                pause: function pause() {
                  requireRealtime();
                  return AV2._config.realtime.pause();
                },
                /**
                 * Resume the LiveQuery connection. All subscriptions will be restored after reconnection.
                 * @static
                 * @return void
                 */
                resume: function resume() {
                  requireRealtime();
                  return AV2._config.realtime.resume();
                }
              }
            );
          };
        },
        /* 328 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _ = __webpack_require__(0);
          var _require = __webpack_require__(15), tap = _require.tap;
          module2.exports = function(AV2) {
            AV2.Captcha = function Captcha(options, authOptions) {
              this._options = options;
              this._authOptions = authOptions;
              this.url = void 0;
              this.captchaToken = void 0;
              this.validateToken = void 0;
            };
            AV2.Captcha.prototype.refresh = function refresh() {
              var _this = this;
              return AV2.Cloud._requestCaptcha(this._options, this._authOptions).then(function(_ref) {
                var captchaToken = _ref.captchaToken, url = _ref.url;
                _.extend(_this, { captchaToken, url });
                return url;
              });
            };
            AV2.Captcha.prototype.verify = function verify(code) {
              var _this2 = this;
              return AV2.Cloud.verifyCaptcha(code, this.captchaToken).then(tap(function(validateToken) {
                return _this2.validateToken = validateToken;
              }));
            };
            {
              AV2.Captcha.prototype.bind = function bind(_ref2, _ref3) {
                var _this3 = this;
                var textInput = _ref2.textInput, image = _ref2.image, verifyButton = _ref2.verifyButton;
                var success = _ref3.success, error = _ref3.error;
                if (typeof textInput === "string") {
                  textInput = document.getElementById(textInput);
                  if (!textInput)
                    throw new Error("textInput with id " + textInput + " not found");
                }
                if (typeof image === "string") {
                  image = document.getElementById(image);
                  if (!image)
                    throw new Error("image with id " + image + " not found");
                }
                if (typeof verifyButton === "string") {
                  verifyButton = document.getElementById(verifyButton);
                  if (!verifyButton)
                    throw new Error("verifyButton with id " + verifyButton + " not found");
                }
                this.__refresh = function() {
                  return _this3.refresh().then(function(url) {
                    image.src = url;
                    if (textInput) {
                      textInput.value = "";
                      textInput.focus();
                    }
                  }).catch(function(err) {
                    return console.warn("refresh captcha fail: " + err.message);
                  });
                };
                if (image) {
                  this.__image = image;
                  image.src = this.url;
                  image.addEventListener("click", this.__refresh);
                }
                this.__verify = function() {
                  var code = textInput.value;
                  _this3.verify(code).catch(function(err) {
                    _this3.__refresh();
                    throw err;
                  }).then(success, error).catch(function(err) {
                    return console.warn("verify captcha fail: " + err.message);
                  });
                };
                if (textInput && verifyButton) {
                  this.__verifyButton = verifyButton;
                  verifyButton.addEventListener("click", this.__verify);
                }
              };
              AV2.Captcha.prototype.unbind = function unbind() {
                if (this.__image)
                  this.__image.removeEventListener("click", this.__refresh);
                if (this.__verifyButton)
                  this.__verifyButton.removeEventListener("click", this.__verify);
              };
            }
            AV2.Captcha.request = function(options, authOptions) {
              var captcha = new AV2.Captcha(options, authOptions);
              return captcha.refresh().then(function() {
                return captcha;
              });
            };
          };
        },
        /* 329 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _promise = __webpack_require__(3);
          var _promise2 = _interopRequireDefault(_promise);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var _ = __webpack_require__(0);
          var _require = __webpack_require__(12), _request = _require._request, request = _require.request;
          module2.exports = function(AV2) {
            AV2.Cloud = AV2.Cloud || {};
            _.extend(
              AV2.Cloud,
              /** @lends AV.Cloud */
              {
                /**
                 * Makes a call to a cloud function.
                 * @param {String} name The function name.
                 * @param {Object} [data] The parameters to send to the cloud function.
                 * @param {AuthOptions} [options]
                 * @return {Promise} A promise that will be resolved with the result
                 * of the function.
                 */
                run: function run(name2, data2, options) {
                  return request({
                    service: "engine",
                    method: "POST",
                    path: "/functions/" + name2,
                    data: AV2._encode(data2, null, true),
                    authOptions: options
                  }).then(function(resp) {
                    return AV2._decode(resp).result;
                  });
                },
                /**
                 * Makes a call to a cloud function, you can send {AV.Object} as param or a field of param; the response
                 * from server will also be parsed as an {AV.Object}, array of {AV.Object}, or object includes {AV.Object}
                 * @param {String} name The function name.
                 * @param {Object} [data] The parameters to send to the cloud function.
                 * @param {AuthOptions} [options]
                 * @return {Promise} A promise that will be resolved with the result of the function.
                 */
                rpc: function rpc(name2, data2, options) {
                  if (_.isArray(data2)) {
                    return _promise2.default.reject(new Error("Can't pass Array as the param of rpc function in JavaScript SDK."));
                  }
                  return request({
                    service: "engine",
                    method: "POST",
                    path: "/call/" + name2,
                    data: AV2._encodeObjectOrArray(data2),
                    authOptions: options
                  }).then(function(resp) {
                    return AV2._decode(resp).result;
                  });
                },
                /**
                 * Make a call to request server date time.
                 * @return {Promise.<Date>} A promise that will be resolved with the result
                 * of the function.
                 * @since 0.5.9
                 */
                getServerDate: function getServerDate() {
                  return _request("date", null, null, "GET").then(function(resp) {
                    return AV2._decode(resp);
                  });
                },
                /**
                 * Makes a call to request an sms code for operation verification.
                 * @param {String|Object} data The mobile phone number string or a JSON
                 *    object that contains mobilePhoneNumber,template,sign,op,ttl,name etc.
                 * @param {String} data.mobilePhoneNumber
                 * @param {String} [data.template] sms template name
                 * @param {String} [data.sign] sms signature name
                 * @param {String} [data.smsType] sending code by `sms` (default) or `voice` call
                 * @param {SMSAuthOptions} [options]
                 * @return {Promise} A promise that will be resolved if the request succeed
                 */
                requestSmsCode: function requestSmsCode(data2) {
                  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                  if (_.isString(data2)) {
                    data2 = { mobilePhoneNumber: data2 };
                  }
                  if (!data2.mobilePhoneNumber) {
                    throw new Error("Missing mobilePhoneNumber.");
                  }
                  if (options.validateToken) {
                    data2 = _.extend({}, data2, {
                      validate_token: options.validateToken
                    });
                  }
                  return _request("requestSmsCode", null, null, "POST", data2, options);
                },
                /**
                 * Makes a call to verify sms code that sent by AV.Cloud.requestSmsCode
                 * @param {String} code The sms code sent by AV.Cloud.requestSmsCode
                 * @param {phone} phone The mobile phoner number.
                 * @return {Promise} A promise that will be resolved with the result
                 * of the function.
                 */
                verifySmsCode: function verifySmsCode(code, phone) {
                  if (!code)
                    throw new Error("Missing sms code.");
                  var params = {};
                  if (_.isString(phone)) {
                    params["mobilePhoneNumber"] = phone;
                  }
                  return _request("verifySmsCode", code, null, "POST", params);
                },
                _requestCaptcha: function _requestCaptcha(options, authOptions) {
                  return _request("requestCaptcha", null, null, "GET", options, authOptions).then(function(_ref) {
                    var url = _ref.captcha_url, captchaToken = _ref.captcha_token;
                    return {
                      captchaToken,
                      url
                    };
                  });
                },
                /**
                 * Request a captcha.
                 */
                requestCaptcha: AV2.Captcha.request,
                /**
                 * Verify captcha code. This is the low-level API for captcha.
                 * Checkout {@link AV.Captcha} for high abstract APIs.
                 * @param {String} code the code from user input
                 * @param {String} captchaToken captchaToken returned by {@link AV.Cloud.requestCaptcha}
                 * @return {Promise.<String>} validateToken if the code is valid
                 */
                verifyCaptcha: function verifyCaptcha(code, captchaToken) {
                  return _request("verifyCaptcha", null, null, "POST", {
                    captcha_code: code,
                    captcha_token: captchaToken
                  }).then(function(_ref2) {
                    var validateToken = _ref2.validate_token;
                    return validateToken;
                  });
                }
              }
            );
          };
        },
        /* 330 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var request = __webpack_require__(12).request;
          module2.exports = function(AV2) {
            AV2.Installation = AV2.Object.extend("_Installation");
            AV2.Push = AV2.Push || {};
            AV2.Push.send = function(data2, options) {
              if (data2.where) {
                data2.where = data2.where._getParams().where;
              }
              if (data2.where && data2.cql) {
                throw new Error("Both where and cql can't be set");
              }
              if (data2.push_time) {
                data2.push_time = data2.push_time.toJSON();
              }
              if (data2.expiration_time) {
                data2.expiration_time = data2.expiration_time.toJSON();
              }
              if (data2.expiration_time && data2.expiration_interval) {
                throw new Error("Both expiration_time and expiration_interval can't be set");
              }
              return request({
                service: "push",
                method: "POST",
                path: "/push",
                data: data2,
                authOptions: options
              });
            };
          };
        },
        /* 331 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _promise = __webpack_require__(3);
          var _promise2 = _interopRequireDefault(_promise);
          var _typeof2 = __webpack_require__(30);
          var _typeof3 = _interopRequireDefault(_typeof2);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var _ = __webpack_require__(0);
          var AVRequest = __webpack_require__(12)._request;
          var _require = __webpack_require__(15), getSessionToken = _require.getSessionToken;
          module2.exports = function(AV2) {
            var getUser = function getUser2() {
              var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              var sessionToken = getSessionToken(options);
              if (sessionToken) {
                return AV2.User._fetchUserBySessionToken(getSessionToken(options));
              }
              return AV2.User.currentAsync();
            };
            var getUserPointer = function getUserPointer2(options) {
              return getUser(options).then(function(currUser) {
                return AV2.Object.createWithoutData("_User", currUser.id)._toPointer();
              });
            };
            AV2.Status = function(imageUrl, message) {
              this.data = {};
              this.inboxType = "default";
              this.query = null;
              if (imageUrl && (typeof imageUrl === "undefined" ? "undefined" : (0, _typeof3.default)(imageUrl)) === "object") {
                this.data = imageUrl;
              } else {
                if (imageUrl) {
                  this.data.image = imageUrl;
                }
                if (message) {
                  this.data.message = message;
                }
              }
              return this;
            };
            _.extend(
              AV2.Status.prototype,
              /** @lends AV.Status.prototype */
              {
                /**
                 * Gets the value of an attribute in status data.
                 * @param {String} attr The string name of an attribute.
                 */
                get: function get(attr) {
                  return this.data[attr];
                },
                /**
                 * Sets a hash of model attributes on the status data.
                 * @param {String} key The key to set.
                 * @param {} value The value to give it.
                 */
                set: function set(key, value) {
                  this.data[key] = value;
                  return this;
                },
                /**
                 * Destroy this status,then it will not be avaiable in other user's inboxes.
                 * @param {AuthOptions} options
                 * @return {Promise} A promise that is fulfilled when the destroy
                 *     completes.
                 */
                destroy: function destroy(options) {
                  if (!this.id)
                    return _promise2.default.reject(new Error("The status id is not exists."));
                  var request = AVRequest("statuses", null, this.id, "DELETE", options);
                  return request;
                },
                /**
                 * Cast the AV.Status object to an AV.Object pointer.
                 * @return {AV.Object} A AV.Object pointer.
                 */
                toObject: function toObject() {
                  if (!this.id)
                    return null;
                  return AV2.Object.createWithoutData("_Status", this.id);
                },
                _getDataJSON: function _getDataJSON() {
                  var json = _.clone(this.data);
                  return AV2._encode(json);
                },
                /**
                 * Send a status by a AV.Query object.
                 * @since 0.3.0
                 * @param {AuthOptions} options
                 * @return {Promise} A promise that is fulfilled when the send
                 *     completes.
                 * @example
                 *     // send a status to male users
                 *     var status = new AVStatus('image url', 'a message');
                 *     status.query = new AV.Query('_User');
                 *     status.query.equalTo('gender', 'male');
                 *     status.send().then(function(){
                 *              //send status successfully.
                 *      }, function(err){
                 *             //an error threw.
                 *             console.dir(err);
                 *      });
                 */
                send: function send() {
                  var _this = this;
                  var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                  if (!getSessionToken(options) && !AV2.User.current()) {
                    throw new Error("Please signin an user.");
                  }
                  if (!this.query) {
                    return AV2.Status.sendStatusToFollowers(this, options);
                  }
                  return getUserPointer(options).then(function(currUser) {
                    var query = _this.query._getParams();
                    query.className = _this.query.className;
                    var data2 = {};
                    data2.query = query;
                    _this.data = _this.data || {};
                    _this.data.source = _this.data.source || currUser;
                    data2.data = _this._getDataJSON();
                    data2.inboxType = _this.inboxType || "default";
                    return AVRequest("statuses", null, null, "POST", data2, options);
                  }).then(function(response) {
                    _this.id = response.objectId;
                    _this.createdAt = AV2._parseDate(response.createdAt);
                    return _this;
                  });
                },
                _finishFetch: function _finishFetch(serverData) {
                  this.id = serverData.objectId;
                  this.createdAt = AV2._parseDate(serverData.createdAt);
                  this.updatedAt = AV2._parseDate(serverData.updatedAt);
                  this.messageId = serverData.messageId;
                  delete serverData.messageId;
                  delete serverData.objectId;
                  delete serverData.createdAt;
                  delete serverData.updatedAt;
                  this.data = AV2._decode(serverData);
                }
              }
            );
            AV2.Status.sendStatusToFollowers = function(status) {
              var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              if (!getSessionToken(options) && !AV2.User.current()) {
                throw new Error("Please signin an user.");
              }
              return getUserPointer(options).then(function(currUser) {
                var query = {};
                query.className = "_Follower";
                query.keys = "follower";
                query.where = { user: currUser };
                var data2 = {};
                data2.query = query;
                status.data = status.data || {};
                status.data.source = status.data.source || currUser;
                data2.data = status._getDataJSON();
                data2.inboxType = status.inboxType || "default";
                var request = AVRequest("statuses", null, null, "POST", data2, options);
                return request.then(function(response) {
                  status.id = response.objectId;
                  status.createdAt = AV2._parseDate(response.createdAt);
                  return status;
                });
              });
            };
            AV2.Status.sendPrivateStatus = function(status, target) {
              var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              if (!getSessionToken(options) && !AV2.User.current()) {
                throw new Error("Please signin an user.");
              }
              if (!target) {
                throw new Error("Invalid target user.");
              }
              var userObjectId = _.isString(target) ? target : target.id;
              if (!userObjectId) {
                throw new Error("Invalid target user.");
              }
              return getUserPointer(options).then(function(currUser) {
                var query = {};
                query.className = "_User";
                query.where = { objectId: userObjectId };
                var data2 = {};
                data2.query = query;
                status.data = status.data || {};
                status.data.source = status.data.source || currUser;
                data2.data = status._getDataJSON();
                data2.inboxType = "private";
                status.inboxType = "private";
                var request = AVRequest("statuses", null, null, "POST", data2, options);
                return request.then(function(response) {
                  status.id = response.objectId;
                  status.createdAt = AV2._parseDate(response.createdAt);
                  return status;
                });
              });
            };
            AV2.Status.countUnreadStatuses = function(owner) {
              var inboxType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
              var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              if (!_.isString(inboxType))
                options = inboxType;
              if (!getSessionToken(options) && owner == null && !AV2.User.current()) {
                throw new Error("Please signin an user or pass the owner objectId.");
              }
              return _promise2.default.resolve(owner || getUser(options)).then(function(owner2) {
                var params = {};
                params.inboxType = AV2._encode(inboxType);
                params.owner = AV2._encode(owner2);
                return AVRequest("subscribe/statuses/count", null, null, "GET", params, options);
              });
            };
            AV2.Status.resetUnreadCount = function(owner) {
              var inboxType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "default";
              var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
              if (!_.isString(inboxType))
                options = inboxType;
              if (!getSessionToken(options) && owner == null && !AV2.User.current()) {
                throw new Error("Please signin an user or pass the owner objectId.");
              }
              return _promise2.default.resolve(owner || getUser(options)).then(function(owner2) {
                var params = {};
                params.inboxType = AV2._encode(inboxType);
                params.owner = AV2._encode(owner2);
                return AVRequest("subscribe/statuses/resetUnreadCount", null, null, "POST", params, options);
              });
            };
            AV2.Status.statusQuery = function(source) {
              var query = new AV2.Query("_Status");
              if (source) {
                query.equalTo("source", source);
              }
              return query;
            };
            AV2.InboxQuery = AV2.Query._extend(
              /** @lends AV.InboxQuery.prototype */
              {
                _objectClass: AV2.Status,
                _sinceId: 0,
                _maxId: 0,
                _inboxType: "default",
                _owner: null,
                _newObject: function _newObject() {
                  return new AV2.Status();
                },
                _createRequest: function _createRequest(params, options) {
                  return AV2.InboxQuery.__super__._createRequest.call(this, params, options, "/subscribe/statuses");
                },
                /**
                 * Sets the messageId of results to skip before returning any results.
                 * This is useful for pagination.
                 * Default is zero.
                 * @param {Number} n the mesage id.
                 * @return {AV.InboxQuery} Returns the query, so you can chain this call.
                 */
                sinceId: function sinceId(id) {
                  this._sinceId = id;
                  return this;
                },
                /**
                 * Sets the maximal messageId of results。
                 * This is useful for pagination.
                 * Default is zero that is no limition.
                 * @param {Number} n the mesage id.
                 * @return {AV.InboxQuery} Returns the query, so you can chain this call.
                 */
                maxId: function maxId(id) {
                  this._maxId = id;
                  return this;
                },
                /**
                 * Sets the owner of the querying inbox.
                 * @param {AV.User} owner The inbox owner.
                 * @return {AV.InboxQuery} Returns the query, so you can chain this call.
                 */
                owner: function owner(_owner) {
                  this._owner = _owner;
                  return this;
                },
                /**
                 * Sets the querying inbox type.default is 'default'.
                 * @param {Object} type The inbox type.
                 * @return {AV.InboxQuery} Returns the query, so you can chain this call.
                 */
                inboxType: function inboxType(type) {
                  this._inboxType = type;
                  return this;
                },
                _getParams: function _getParams() {
                  var params = AV2.InboxQuery.__super__._getParams.call(this);
                  params.owner = AV2._encode(this._owner);
                  params.inboxType = AV2._encode(this._inboxType);
                  params.sinceId = AV2._encode(this._sinceId);
                  params.maxId = AV2._encode(this._maxId);
                  return params;
                }
              }
            );
            AV2.Status.inboxQuery = function(owner, inboxType) {
              var query = new AV2.InboxQuery(AV2.Status);
              if (owner) {
                query._owner = owner;
              }
              if (inboxType) {
                query._inboxType = inboxType;
              }
              return query;
            };
          };
        },
        /* 332 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _stringify = __webpack_require__(19);
          var _stringify2 = _interopRequireDefault(_stringify);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var _ = __webpack_require__(0);
          var AVRequest = __webpack_require__(12)._request;
          module2.exports = function(AV2) {
            AV2.SearchSortBuilder = function() {
              this._sortFields = [];
            };
            _.extend(
              AV2.SearchSortBuilder.prototype,
              /** @lends AV.SearchSortBuilder.prototype */
              {
                _addField: function _addField(key, order, mode, missing) {
                  var field = {};
                  field[key] = {
                    order: order || "asc",
                    mode: mode || "avg",
                    missing: "_" + (missing || "last")
                  };
                  this._sortFields.push(field);
                  return this;
                },
                /**
                 * Sorts the results in ascending order by the given key and options.
                 *
                 * @param {String} key The key to order by.
                 * @param {String} mode The sort mode, default is 'avg', you can choose
                 *                  'max' or 'min' too.
                 * @param {String} missing The missing key behaviour, default is 'last',
                 *                  you can choose 'first' too.
                 * @return {AV.SearchSortBuilder} Returns the builder, so you can chain this call.
                 */
                ascending: function ascending(key, mode, missing) {
                  return this._addField(key, "asc", mode, missing);
                },
                /**
                 * Sorts the results in descending order by the given key and options.
                 *
                 * @param {String} key The key to order by.
                 * @param {String} mode The sort mode, default is 'avg', you can choose
                 *                  'max' or 'min' too.
                 * @param {String} missing The missing key behaviour, default is 'last',
                 *                  you can choose 'first' too.
                 * @return {AV.SearchSortBuilder} Returns the builder, so you can chain this call.
                 */
                descending: function descending(key, mode, missing) {
                  return this._addField(key, "desc", mode, missing);
                },
                /**
                 * Add a proximity based constraint for finding objects with key point
                 * values near the point given.
                 * @param {String} key The key that the AV.GeoPoint is stored in.
                 * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
                 * @param {Object} options The other options such as mode,order, unit etc.
                 * @return {AV.SearchSortBuilder} Returns the builder, so you can chain this call.
                 */
                whereNear: function whereNear(key, point, options) {
                  options = options || {};
                  var field = {};
                  var geo = {
                    lat: point.latitude,
                    lon: point.longitude
                  };
                  var m = {
                    order: options.order || "asc",
                    mode: options.mode || "avg",
                    unit: options.unit || "km"
                  };
                  m[key] = geo;
                  field["_geo_distance"] = m;
                  this._sortFields.push(field);
                  return this;
                },
                /**
                 * Build a sort string by configuration.
                 * @return {String} the sort string.
                 */
                build: function build() {
                  return (0, _stringify2.default)(AV2._encode(this._sortFields));
                }
              }
            );
            AV2.SearchQuery = AV2.Query._extend(
              /** @lends AV.SearchQuery.prototype */
              {
                _sid: null,
                _hits: 0,
                _queryString: null,
                _highlights: null,
                _sortBuilder: null,
                _clazz: null,
                constructor: function constructor(className) {
                  if (className) {
                    this._clazz = className;
                  } else {
                    className = "__INVALID_CLASS";
                  }
                  AV2.Query.call(this, className);
                },
                _createRequest: function _createRequest(params, options) {
                  return AVRequest("search/select", null, null, "GET", params || this._getParams(), options);
                },
                /**
                 * Sets the sid of app searching query.Default is null.
                 * @param {String} sid  Scroll id for searching.
                 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
                 */
                sid: function sid(_sid) {
                  this._sid = _sid;
                  return this;
                },
                /**
                 * Sets the query string of app searching.
                 * @param {String} q  The query string.
                 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
                 */
                queryString: function queryString(q) {
                  this._queryString = q;
                  return this;
                },
                /**
                 * Sets the highlight fields. Such as
                 * <pre><code>
                 *   query.highlights('title');
                 *   //or pass an array.
                 *   query.highlights(['title', 'content'])
                 * </code></pre>
                 * @param {String|String[]} highlights a list of fields.
                 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
                 */
                highlights: function highlights(_highlights) {
                  var objects;
                  if (_highlights && _.isString(_highlights)) {
                    objects = _.toArray(arguments);
                  } else {
                    objects = _highlights;
                  }
                  this._highlights = objects;
                  return this;
                },
                /**
                 * Sets the sort builder for this query.
                 * @see AV.SearchSortBuilder
                 * @param { AV.SearchSortBuilder} builder The sort builder.
                 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
                 *
                 */
                sortBy: function sortBy(builder) {
                  this._sortBuilder = builder;
                  return this;
                },
                /**
                 * Returns the number of objects that match this query.
                 * @return {Number}
                 */
                hits: function hits() {
                  if (!this._hits) {
                    this._hits = 0;
                  }
                  return this._hits;
                },
                _processResult: function _processResult(json) {
                  delete json["className"];
                  delete json["_app_url"];
                  delete json["_deeplink"];
                  return json;
                },
                /**
                 * Returns true when there are more documents can be retrieved by this
                 * query instance, you can call find function to get more results.
                 * @see AV.SearchQuery#find
                 * @return {Boolean}
                 */
                hasMore: function hasMore() {
                  return !this._hitEnd;
                },
                /**
                 * Reset current query instance state(such as sid, hits etc) except params
                 * for a new searching. After resetting, hasMore() will return true.
                 */
                reset: function reset() {
                  this._hitEnd = false;
                  this._sid = null;
                  this._hits = 0;
                },
                /**
                 * Retrieves a list of AVObjects that satisfy this query.
                 * Either options.success or options.error is called when the find
                 * completes.
                 *
                 * @see AV.Query#find
                 * @param {AuthOptions} options
                 * @return {Promise} A promise that is resolved with the results when
                 * the query completes.
                 */
                find: function find(options) {
                  var self2 = this;
                  var request = this._createRequest(void 0, options);
                  return request.then(function(response) {
                    if (response.sid) {
                      self2._oldSid = self2._sid;
                      self2._sid = response.sid;
                    } else {
                      self2._sid = null;
                      self2._hitEnd = true;
                    }
                    self2._hits = response.hits || 0;
                    return _.map(response.results, function(json) {
                      if (json.className) {
                        response.className = json.className;
                      }
                      var obj = self2._newObject(response);
                      obj.appURL = json["_app_url"];
                      obj._finishFetch(self2._processResult(json), true);
                      return obj;
                    });
                  });
                },
                _getParams: function _getParams() {
                  var params = AV2.SearchQuery.__super__._getParams.call(this);
                  delete params.where;
                  if (this._clazz) {
                    params.clazz = this.className;
                  }
                  if (this._sid) {
                    params.sid = this._sid;
                  }
                  if (!this._queryString) {
                    throw new Error("Please set query string.");
                  } else {
                    params.q = this._queryString;
                  }
                  if (this._highlights) {
                    params.highlights = this._highlights.join(",");
                  }
                  if (this._sortBuilder && params.order) {
                    throw new Error("sort and order can not be set at same time.");
                  }
                  if (this._sortBuilder) {
                    params.sort = this._sortBuilder.build();
                  }
                  return params;
                }
              }
            );
          };
        },
        /* 333 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _promise = __webpack_require__(3);
          var _promise2 = _interopRequireDefault(_promise);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var _ = __webpack_require__(0);
          var AVError = __webpack_require__(29);
          var _require = __webpack_require__(12), request = _require.request;
          module2.exports = function(AV2) {
            AV2.Insight = AV2.Insight || {};
            _.extend(
              AV2.Insight,
              /** @lends AV.Insight */
              {
                /**
                 * 开始一个 Insight 任务。结果里将返回 Job id，你可以拿得到的 id 使用
                 * AV.Insight.JobQuery 查询任务状态和结果。
                 * @param {Object} jobConfig 任务配置的 JSON 对象，例如：<code><pre>
                 *                   { "sql" : "select count(*) as c,gender from _User group by gender",
                 *                     "saveAs": {
                 *                         "className" : "UserGender",
                 *                         "limit": 1
                 *                      }
                 *                   }
                 *                  </pre></code>
                 *               sql 指定任务执行的 SQL 语句， saveAs（可选） 指定将结果保存在哪张表里，limit 最大 1000。
                 * @param {AuthOptions} [options]
                 * @return {Promise} A promise that will be resolved with the result
                 * of the function.
                 */
                startJob: function startJob(jobConfig, options) {
                  if (!jobConfig || !jobConfig.sql) {
                    throw new Error("Please provide the sql to run the job.");
                  }
                  var data2 = {
                    jobConfig,
                    appId: AV2.applicationId
                  };
                  return request({
                    path: "/bigquery/jobs",
                    method: "POST",
                    data: AV2._encode(data2, null, true),
                    authOptions: options,
                    signKey: false
                  }).then(function(resp) {
                    return AV2._decode(resp).id;
                  });
                },
                /**
                 * 监听 Insight 任务事件（未来推出独立部署的离线分析服务后开放）
                 *  <p><strong><em>
                 *     仅在云引擎运行环境下有效。
                 *  </em></strong></p>
                 * @param {String} event 监听的事件，目前尚不支持。
                 * @param {Function} 监听回调函数，接收 (err, id) 两个参数，err 表示错误信息，
                 *                   id 表示任务 id。接下来你可以拿这个 id 使用AV.Insight.JobQuery 查询任务状态和结果。
                 *
                 */
                on: function on(event2, cb) {
                }
              }
            );
            AV2.Insight.JobQuery = function(id, className) {
              if (!id) {
                throw new Error("Please provide the job id.");
              }
              this.id = id;
              this.className = className;
              this._skip = 0;
              this._limit = 100;
            };
            _.extend(
              AV2.Insight.JobQuery.prototype,
              /** @lends AV.Insight.JobQuery.prototype */
              {
                /**
                 * Sets the number of results to skip before returning any results.
                 * This is useful for pagination.
                 * Default is to skip zero results.
                 * @param {Number} n the number of results to skip.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                skip: function skip(n2) {
                  this._skip = n2;
                  return this;
                },
                /**
                 * Sets the limit of the number of results to return. The default limit is
                 * 100, with a maximum of 1000 results being returned at a time.
                 * @param {Number} n the number of results to limit to.
                 * @return {AV.Query} Returns the query, so you can chain this call.
                 */
                limit: function limit(n2) {
                  this._limit = n2;
                  return this;
                },
                /**
                 * 查询任务状态和结果，任务结果为一个 JSON 对象，包括 status 表示任务状态， totalCount 表示总数，
                 * results 数组表示任务结果数组，previewCount 表示可以返回的结果总数，任务的开始和截止时间
                 * startTime、endTime 等信息。
                 *
                 * @param {AuthOptions} [options]
                 * @return {Promise} A promise that will be resolved with the result
                 * of the function.
                 *
                 */
                find: function find(options) {
                  var params = {
                    skip: this._skip,
                    limit: this._limit
                  };
                  return request({
                    path: "/bigquery/jobs/" + this.id,
                    method: "GET",
                    query: params,
                    authOptions: options,
                    signKey: false
                  }).then(function(response) {
                    if (response.error) {
                      return _promise2.default.reject(new AVError(response.code, response.error));
                    }
                    return _promise2.default.resolve(response);
                  });
                }
              }
            );
          };
        },
        /* 334 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _ = __webpack_require__(0);
          var _require = __webpack_require__(12), LCRequest = _require.request;
          var _require2 = __webpack_require__(15), getSessionToken = _require2.getSessionToken;
          module2.exports = function(AV2) {
            AV2.Friendship = {
              /**
               * Request friendship.
               * @since 4.8.0
               * @param {String | AV.User | Object} options if an AV.User or string is given, it will be used as the friend.
               * @param {AV.User | string} options.friend The friend (or friend's objectId) to follow.
               * @param {Object} [options.attributes] key-value attributes dictionary to be used as conditions of followeeQuery.
               * @param {*} [authOptions]
               * @return {Promise<void>}
               */
              request: function request(options, authOptions) {
                if (!AV2.User.current()) {
                  throw new Error("Please signin an user.");
                }
                var friend = void 0;
                var attributes = void 0;
                if (options.friend) {
                  friend = options.friend;
                  attributes = options.attributes;
                } else {
                  friend = options;
                }
                var friendObject = _.isString(friend) ? AV2.Object.createWithoutData("_User", friend) : friend;
                return LCRequest({
                  method: "POST",
                  path: "/users/friendshipRequests",
                  data: AV2._encode({
                    user: AV2.User.current(),
                    friend: friendObject,
                    friendship: attributes
                  }),
                  authOptions
                });
              },
              /**
               * Accept a friendship request.
               * @since 4.8.0
               * @param {AV.Object | string | Object} options if an AV.Object or string is given, it will be used as the request in _FriendshipRequest.
               * @param {AV.Object} options.request The request (or it's objectId) to be accepted.
               * @param {Object} [options.attributes] key-value attributes dictionary to be used as conditions of {@link AV#followeeQuery}.
               * @param {AuthOptions} [authOptions]
               * @return {Promise<void>}
               */
              acceptRequest: function acceptRequest(options) {
                var authOptions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (!getSessionToken(authOptions) && !AV2.User.current()) {
                  throw new Error("Please signin an user.");
                }
                var request = void 0;
                var attributes = void 0;
                if (options.request) {
                  request = options.request;
                  attributes = options.attributes;
                } else {
                  request = options;
                }
                var requestId = _.isString(request) ? request : request.id;
                return LCRequest({
                  method: "PUT",
                  path: "/users/friendshipRequests/" + requestId + "/accept",
                  data: {
                    friendship: AV2._encode(attributes)
                  },
                  authOptions
                });
              },
              /**
               * Decline a friendship request.
               * @param {AV.Object | string} request The request (or it's objectId) to be declined.
               * @param {AuthOptions} [authOptions]
               * @return {Promise<void>}
               */
              declineRequest: function declineRequest(request) {
                var authOptions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (!getSessionToken(authOptions) && !AV2.User.current()) {
                  throw new Error("Please signin an user.");
                }
                var requestId = _.isString(request) ? request : request.id;
                return LCRequest({
                  method: "PUT",
                  path: "/users/friendshipRequests/" + requestId + "/decline",
                  authOptions
                });
              }
            };
          };
        },
        /* 335 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _stringify = __webpack_require__(19);
          var _stringify2 = _interopRequireDefault(_stringify);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var _ = __webpack_require__(0);
          var _require = __webpack_require__(12), _request = _require._request;
          var AV2 = __webpack_require__(36);
          var serializeMessage = function serializeMessage2(message) {
            if (typeof message === "string") {
              return message;
            }
            if (typeof message.getPayload === "function") {
              return (0, _stringify2.default)(message.getPayload());
            }
            return (0, _stringify2.default)(message);
          };
          module2.exports = AV2.Object.extend(
            "_Conversation",
            /** @lends AV.Conversation.prototype */
            {
              constructor: function constructor(name2) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                AV2.Object.prototype.constructor.call(this, null, null);
                this.set("name", name2);
                if (options.isSystem !== void 0) {
                  this.set("sys", options.isSystem ? true : false);
                }
                if (options.isTransient !== void 0) {
                  this.set("tr", options.isTransient ? true : false);
                }
              },
              /**
               * Get current conversation's creator.
               *
               * @return {String}
               */
              getCreator: function getCreator() {
                return this.get("c");
              },
              /**
               * Get the last message's time.
               *
               * @return {Date}
               */
              getLastMessageAt: function getLastMessageAt() {
                return this.get("lm");
              },
              /**
               * Get this conversation's members
               *
               * @return {String[]}
               */
              getMembers: function getMembers() {
                return this.get("m");
              },
              /**
               * Add a member to this conversation
               *
               * @param {String} member
               */
              addMember: function addMember(member) {
                return this.add("m", member);
              },
              /**
               * Get this conversation's members who set this conversation as muted.
               *
               * @return {String[]}
               */
              getMutedMembers: function getMutedMembers() {
                return this.get("mu");
              },
              /**
               * Get this conversation's name field.
               *
               * @return String
               */
              getName: function getName() {
                return this.get("name");
              },
              /**
               * Returns true if this conversation is transient conversation.
               *
               * @return {Boolean}
               */
              isTransient: function isTransient() {
                return this.get("tr");
              },
              /**
               * Returns true if this conversation is system conversation.
               *
               * @return {Boolean}
               */
              isSystem: function isSystem() {
                return this.get("sys");
              },
              /**
               * Send realtime message to this conversation, using HTTP request.
               *
               * @param {String} fromClient Sender's client id.
               * @param {String|Object} message The message which will send to conversation.
               *     It could be a raw string, or an object with a `toJSON` method, like a
               *     realtime SDK's Message object. See more: {@link https://leancloud.cn/docs/realtime_guide-js.html#消息}
               * @param {Object} [options]
               * @param {Boolean} [options.transient] Whether send this message as transient message or not.
               * @param {String[]} [options.toClients] Ids of clients to send to. This option can be used only in system conversation.
               * @param {Object} [options.pushData] Push data to this message. See more: {@link https://url.leanapp.cn/pushData 推送消息内容}
               * @param {AuthOptions} [authOptions]
               * @return {Promise}
               */
              send: function send(fromClient, message) {
                var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                var authOptions = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
                var data2 = {
                  from_peer: fromClient,
                  conv_id: this.id,
                  transient: false,
                  message: serializeMessage(message)
                };
                if (options.toClients !== void 0) {
                  data2.to_peers = options.toClients;
                }
                if (options.transient !== void 0) {
                  data2.transient = options.transient ? true : false;
                }
                if (options.pushData !== void 0) {
                  data2.push_data = options.pushData;
                }
                return _request("rtm", "messages", null, "POST", data2, authOptions);
              },
              /**
               * Send realtime broadcast message to all clients, via this conversation, using HTTP request.
               *
               * @param {String} fromClient Sender's client id.
               * @param {String|Object} message The message which will send to conversation.
               *     It could be a raw string, or an object with a `toJSON` method, like a
               *     realtime SDK's Message object. See more: {@link https://leancloud.cn/docs/realtime_guide-js.html#消息}.
               * @param {Object} [options]
               * @param {Object} [options.pushData] Push data to this message. See more: {@link https://url.leanapp.cn/pushData 推送消息内容}.
               * @param {Object} [options.validTill] The message will valid till this time.
               * @param {AuthOptions} [authOptions]
               * @return {Promise}
               */
              broadcast: function broadcast(fromClient, message) {
                var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                var authOptions = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
                var data2 = {
                  from_peer: fromClient,
                  conv_id: this.id,
                  message: serializeMessage(message)
                };
                if (options.pushData !== void 0) {
                  data2.push = options.pushData;
                }
                if (options.validTill !== void 0) {
                  var ts = options.validTill;
                  if (_.isDate(ts)) {
                    ts = ts.getTime();
                  }
                  options.valid_till = ts;
                }
                return _request("rtm", "broadcast", null, "POST", data2, authOptions);
              }
            }
          );
        },
        /* 336 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _promise = __webpack_require__(3);
          var _promise2 = _interopRequireDefault(_promise);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          var _ = __webpack_require__(0);
          var _require = __webpack_require__(12), request = _require.request;
          var _require2 = __webpack_require__(15), ensureArray = _require2.ensureArray, parseDate = _require2.parseDate;
          var AV2 = __webpack_require__(36);
          AV2.LeaderboardVersionChangeInterval = {
            NEVER: "never",
            DAY: "day",
            WEEK: "week",
            MONTH: "month"
          };
          AV2.LeaderboardOrder = {
            ASCENDING: "ascending",
            DESCENDING: "descending"
          };
          AV2.LeaderboardUpdateStrategy = {
            /** Only keep the best statistic. If the leaderboard is in descending order, the best statistic is the highest one. */
            BETTER: "better",
            /** Keep the last updated statistic */
            LAST: "last",
            /** Keep the sum of all updated statistics */
            SUM: "sum"
          };
          function Statistic(_ref) {
            var name2 = _ref.name, value = _ref.value, version2 = _ref.version;
            this.name = name2;
            this.value = value;
            this.version = version2;
          }
          var parseStatisticData = function parseStatisticData2(statisticData) {
            var _AV$_decode = AV2._decode(statisticData), name2 = _AV$_decode.statisticName, value = _AV$_decode.statisticValue, version2 = _AV$_decode.version;
            return new Statistic({ name: name2, value, version: version2 });
          };
          AV2.Leaderboard = function Leaderboard2(statisticName) {
            this.statisticName = statisticName;
            this.order = void 0;
            this.updateStrategy = void 0;
            this.versionChangeInterval = void 0;
            this.version = void 0;
            this.nextResetAt = void 0;
            this.createdAt = void 0;
          };
          var Leaderboard = AV2.Leaderboard;
          AV2.Leaderboard.createWithoutData = function(statisticName) {
            return new Leaderboard(statisticName);
          };
          AV2.Leaderboard.createLeaderboard = function(_ref2, authOptions) {
            var statisticName = _ref2.statisticName, order = _ref2.order, versionChangeInterval = _ref2.versionChangeInterval, updateStrategy = _ref2.updateStrategy;
            return request({
              method: "POST",
              path: "/leaderboard/leaderboards",
              data: {
                statisticName,
                order,
                versionChangeInterval,
                updateStrategy
              },
              authOptions
            }).then(function(data2) {
              var leaderboard = new Leaderboard(statisticName);
              return leaderboard._finishFetch(data2);
            });
          };
          AV2.Leaderboard.getLeaderboard = function(statisticName, authOptions) {
            return Leaderboard.createWithoutData(statisticName).fetch(authOptions);
          };
          AV2.Leaderboard.getStatistics = function(user) {
            var _ref3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, statisticNames = _ref3.statisticNames;
            var authOptions = arguments[2];
            return _promise2.default.resolve().then(function() {
              if (!(user && user.id))
                throw new Error("user must be an AV.User");
              return request({
                method: "GET",
                path: "/leaderboard/users/" + user.id + "/statistics",
                query: {
                  statistics: statisticNames ? ensureArray(statisticNames).join(",") : void 0
                },
                authOptions
              }).then(function(_ref4) {
                var results = _ref4.results;
                return results.map(parseStatisticData);
              });
            });
          };
          AV2.Leaderboard.updateStatistics = function(user, statistics) {
            var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return _promise2.default.resolve().then(function() {
              if (!(user && user.id))
                throw new Error("user must be an AV.User");
              var data2 = _.map(statistics, function(value, key) {
                return {
                  statisticName: key,
                  statisticValue: value
                };
              });
              var overwrite = options.overwrite;
              return request({
                method: "POST",
                path: "/leaderboard/users/" + user.id + "/statistics",
                query: {
                  overwrite: overwrite ? 1 : void 0
                },
                data: data2,
                authOptions: options
              }).then(function(_ref5) {
                var results = _ref5.results;
                return results.map(parseStatisticData);
              });
            });
          };
          AV2.Leaderboard.deleteStatistics = function(user, statisticNames, authOptions) {
            return _promise2.default.resolve().then(function() {
              if (!(user && user.id))
                throw new Error("user must be an AV.User");
              return request({
                method: "DELETE",
                path: "/leaderboard/users/" + user.id + "/statistics",
                query: {
                  statistics: ensureArray(statisticNames).join(",")
                },
                authOptions
              }).then(function() {
                return void 0;
              });
            });
          };
          _.extend(
            Leaderboard.prototype,
            /** @lends AV.Leaderboard.prototype */
            {
              _finishFetch: function _finishFetch(data2) {
                var _this = this;
                _.forEach(data2, function(value, key) {
                  if (key === "updatedAt" || key === "objectId")
                    return;
                  if (key === "expiredAt") {
                    key = "nextResetAt";
                  }
                  if (key === "createdAt") {
                    value = parseDate(value);
                  }
                  if (value && value.__type === "Date") {
                    value = parseDate(value.iso);
                  }
                  _this[key] = value;
                });
                return this;
              },
              /**
               * Fetch data from the srever.
               * @param {AuthOptions} [authOptions]
               * @return {Promise<AV.Leaderboard>}
               */
              fetch: function fetch(authOptions) {
                var _this2 = this;
                return request({
                  method: "GET",
                  path: "/leaderboard/leaderboards/" + this.statisticName,
                  authOptions
                }).then(function(data2) {
                  return _this2._finishFetch(data2);
                });
              },
              /**
               * Counts the number of users participated in this leaderboard
               * @param {Object} [options]
               * @param {number} [options.version] Specify the version of the leaderboard
               * @param {AuthOptions} [authOptions]
               * @return {Promise<number>}
               */
              count: function count() {
                var _ref6 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, version2 = _ref6.version;
                var authOptions = arguments[1];
                return request({
                  method: "GET",
                  path: "/leaderboard/leaderboards/" + this.statisticName + "/ranks",
                  query: {
                    count: 1,
                    limit: 0,
                    version: version2
                  },
                  authOptions
                }).then(function(_ref7) {
                  var count2 = _ref7.count;
                  return count2;
                });
              },
              _getResults: function _getResults(_ref8, authOptions, userId) {
                var skip = _ref8.skip, limit = _ref8.limit, selectUserKeys = _ref8.selectUserKeys, includeUserKeys = _ref8.includeUserKeys, includeStatistics = _ref8.includeStatistics, version2 = _ref8.version;
                return request({
                  method: "GET",
                  path: "/leaderboard/leaderboards/" + this.statisticName + "/ranks" + (userId ? "/" + userId : ""),
                  query: {
                    skip,
                    limit,
                    selectUserKeys: _.union(ensureArray(selectUserKeys), ensureArray(includeUserKeys)).join(",") || void 0,
                    includeUser: includeUserKeys ? ensureArray(includeUserKeys).join(",") : void 0,
                    includeStatistics: includeStatistics ? ensureArray(includeStatistics).join(",") : void 0,
                    version: version2
                  },
                  authOptions
                }).then(function(_ref9) {
                  var rankings = _ref9.results;
                  return rankings.map(function(rankingData) {
                    var _AV$_decode2 = AV2._decode(rankingData), user = _AV$_decode2.user, value = _AV$_decode2.statisticValue, rank = _AV$_decode2.rank, _AV$_decode2$statisti = _AV$_decode2.statistics, statistics = _AV$_decode2$statisti === void 0 ? [] : _AV$_decode2$statisti;
                    return {
                      user,
                      value,
                      rank,
                      includedStatistics: statistics.map(parseStatisticData)
                    };
                  });
                });
              },
              /**
               * Retrieve a list of ranked users for this Leaderboard.
               * @param {Object} [options]
               * @param {number} [options.skip] The number of results to skip. This is useful for pagination.
               * @param {number} [options.limit] The limit of the number of results.
               * @param {string[]} [options.selectUserKeys] Specify keys of the users to include in the Rankings
               * @param {string[]} [options.includeUserKeys] If the value of a selected user keys is a Pointer, use this options to include its value.
               * @param {string[]} [options.includeStatistics] Specify other statistics to include in the Rankings
               * @param {number} [options.version] Specify the version of the leaderboard
               * @param {AuthOptions} [authOptions]
               * @return {Promise<Ranking[]>}
               */
              getResults: function getResults() {
                var _ref10 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, skip = _ref10.skip, limit = _ref10.limit, selectUserKeys = _ref10.selectUserKeys, includeUserKeys = _ref10.includeUserKeys, includeStatistics = _ref10.includeStatistics, version2 = _ref10.version;
                var authOptions = arguments[1];
                return this._getResults({
                  skip,
                  limit,
                  selectUserKeys,
                  includeUserKeys,
                  includeStatistics,
                  version: version2
                }, authOptions);
              },
              /**
               * Retrieve a list of ranked users for this Leaderboard, centered on the specified user.
               * @param {AV.User} user The specified AV.User pointer.
               * @param {Object} [options]
               * @param {number} [options.limit] The limit of the number of results.
               * @param {string[]} [options.selectUserKeys] Specify keys of the users to include in the Rankings
               * @param {string[]} [options.includeUserKeys] If the value of a selected user keys is a Pointer, use this options to include its value.
               * @param {string[]} [options.includeStatistics] Specify other statistics to include in the Rankings
               * @param {number} [options.version] Specify the version of the leaderboard
               * @param {AuthOptions} [authOptions]
               * @return {Promise<Ranking[]>}
               */
              getResultsAroundUser: function getResultsAroundUser(user) {
                var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var authOptions = arguments[2];
                if (user && typeof user.id !== "string") {
                  return this.getResultsAroundUser(void 0, user, options);
                }
                var limit = options.limit, selectUserKeys = options.selectUserKeys, includeUserKeys = options.includeUserKeys, includeStatistics = options.includeStatistics, version2 = options.version;
                return this._getResults({ limit, selectUserKeys, includeUserKeys, includeStatistics, version: version2 }, authOptions, user ? user.id : "self");
              },
              _update: function _update(data2, authOptions) {
                var _this3 = this;
                return request({
                  method: "PUT",
                  path: "/leaderboard/leaderboards/" + this.statisticName,
                  data: data2,
                  authOptions
                }).then(function(result) {
                  return _this3._finishFetch(result);
                });
              },
              /**
               * (masterKey required) Update the version change interval of the Leaderboard.
               * @param {AV.LeaderboardVersionChangeInterval} versionChangeInterval
               * @param {AuthOptions} [authOptions]
               * @return {Promise<AV.Leaderboard>}
               */
              updateVersionChangeInterval: function updateVersionChangeInterval(versionChangeInterval, authOptions) {
                return this._update({ versionChangeInterval }, authOptions);
              },
              /**
               * (masterKey required) Update the version change interval of the Leaderboard.
               * @param {AV.LeaderboardUpdateStrategy} updateStrategy
               * @param {AuthOptions} [authOptions]
               * @return {Promise<AV.Leaderboard>}
               */
              updateUpdateStrategy: function updateUpdateStrategy(updateStrategy, authOptions) {
                return this._update({ updateStrategy }, authOptions);
              },
              /**
               * (masterKey required) Reset the Leaderboard. The version of the Leaderboard will be incremented by 1.
               * @param {AuthOptions} [authOptions]
               * @return {Promise<AV.Leaderboard>}
               */
              reset: function reset(authOptions) {
                var _this4 = this;
                return request({
                  method: "PUT",
                  path: "/leaderboard/leaderboards/" + this.statisticName + "/incrementVersion",
                  authOptions
                }).then(function(data2) {
                  return _this4._finishFetch(data2);
                });
              },
              /**
               * (masterKey required) Delete the Leaderboard and its all archived versions.
               * @param {AuthOptions} [authOptions]
               * @return {void}
               */
              destroy: function destroy(authOptions) {
                return AV2.request({
                  method: "DELETE",
                  path: "/leaderboard/leaderboards/" + this.statisticName,
                  authOptions
                }).then(function() {
                  return void 0;
                });
              },
              /**
               * (masterKey required) Get archived versions.
               * @param {Object} [options]
               * @param {number} [options.skip] The number of results to skip. This is useful for pagination.
               * @param {number} [options.limit] The limit of the number of results.
               * @param {AuthOptions} [authOptions]
               * @return {Promise<LeaderboardArchive[]>}
               */
              getArchives: function getArchives() {
                var _this5 = this;
                var _ref11 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, skip = _ref11.skip, limit = _ref11.limit;
                var authOptions = arguments[1];
                return request({
                  method: "GET",
                  path: "/leaderboard/leaderboards/" + this.statisticName + "/archives",
                  query: {
                    skip,
                    limit
                  },
                  authOptions
                }).then(function(_ref12) {
                  var results = _ref12.results;
                  return results.map(function(_ref13) {
                    var version2 = _ref13.version, status = _ref13.status, url = _ref13.url, activatedAt = _ref13.activatedAt, deactivatedAt = _ref13.deactivatedAt;
                    return {
                      statisticName: _this5.statisticName,
                      version: version2,
                      status,
                      url,
                      activatedAt: parseDate(activatedAt.iso),
                      deactivatedAt: parseDate(deactivatedAt.iso)
                    };
                  });
                });
              }
            }
          );
        },
        /* 337 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var adapters = __webpack_require__(338);
          module2.exports = function(AV2) {
            AV2.setAdapters(adapters);
            return AV2;
          };
        },
        /* 338 */
        /***/
        function(module2, exports2, __webpack_require__) {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _adaptersSuperagent = __webpack_require__(339);
          Object.defineProperty(exports2, "request", {
            enumerable: true,
            get: function get() {
              return _adaptersSuperagent.request;
            }
          });
          Object.defineProperty(exports2, "upload", {
            enumerable: true,
            get: function get() {
              return _adaptersSuperagent.upload;
            }
          });
          var storage = window.localStorage;
          var WebSocket = window.WebSocket;
          var platformInfo = {
            name: "Browser"
          };
          exports2.WebSocket = WebSocket;
          exports2.platformInfo = platformInfo;
          exports2.storage = storage;
        },
        /* 339 */
        /***/
        function(module2, exports2, __webpack_require__) {
          Object.defineProperty(exports2, "__esModule", { value: true });
          exports2.upload = exports2.request = void 0;
          var adapter_utils_1 = __webpack_require__(340);
          var superagent = __webpack_require__(341);
          function convertResponse(res) {
            return {
              ok: res.ok,
              status: res.status,
              headers: res.header,
              data: res.body
            };
          }
          exports2.request = function(url, options) {
            if (options === void 0) {
              options = {};
            }
            var _a = options.method, method = _a === void 0 ? "GET" : _a, data2 = options.data, headers = options.headers, onprogress = options.onprogress, signal = options.signal;
            if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
              return Promise.reject(new adapter_utils_1.AbortError("Request aborted"));
            }
            var req = superagent(method, url);
            if (headers) {
              req.set(headers);
            }
            if (onprogress) {
              req.on("progress", onprogress);
            }
            return new Promise(function(resolve, reject) {
              var abortListener = function() {
                reject(new adapter_utils_1.AbortError("Request aborted"));
                req.abort();
              };
              signal === null || signal === void 0 ? void 0 : signal.addEventListener("abort", abortListener);
              req.send(data2).then(function(res) {
                return resolve(convertResponse(res));
              }).catch(function(err) {
                if (err.response) {
                  resolve(convertResponse(err.response));
                } else {
                  reject(err);
                }
              }).finally(function() {
                return signal === null || signal === void 0 ? void 0 : signal.removeEventListener("abort", abortListener);
              });
            });
          };
          exports2.upload = function(url, file, options) {
            if (options === void 0) {
              options = {};
            }
            var _a = options.method, method = _a === void 0 ? "POST" : _a, data2 = options.data, headers = options.headers, onprogress = options.onprogress, signal = options.signal;
            if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
              return Promise.reject(new adapter_utils_1.AbortError("Request aborted"));
            }
            var req = superagent(method, url).attach(file.field, file.data, file.name);
            if (data2) {
              req.field(data2);
            }
            if (headers) {
              req.set(headers);
            }
            if (onprogress) {
              req.on("progress", onprogress);
            }
            return new Promise(function(resolve, reject) {
              var abortListener = function() {
                reject(new adapter_utils_1.AbortError("Request aborted"));
                req.abort();
              };
              signal === null || signal === void 0 ? void 0 : signal.addEventListener("abort", abortListener);
              req.then(function(res) {
                return resolve(convertResponse(res));
              }).catch(function(err) {
                if (err.response) {
                  resolve(convertResponse(err.response));
                } else {
                  reject(err);
                }
              }).finally(function() {
                return signal === null || signal === void 0 ? void 0 : signal.removeEventListener("abort", abortListener);
              });
            });
          };
        },
        /* 340 */
        /***/
        function(module2, __webpack_exports__, __webpack_require__) {
          Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
          __webpack_require__.d(__webpack_exports__, "AbortError", function() {
            return AbortError;
          });
          /*! *****************************************************************************
          Copyright (c) Microsoft Corporation.
          
          Permission to use, copy, modify, and/or distribute this software for any
          purpose with or without fee is hereby granted.
          
          THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
          REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
          AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
          INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
          LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
          OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
          PERFORMANCE OF THIS SOFTWARE.
          ***************************************************************************** */
          var extendStatics = function(d2, b) {
            extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
              d3.__proto__ = b2;
            } || function(d3, b2) {
              for (var p in b2)
                if (Object.prototype.hasOwnProperty.call(b2, p))
                  d3[p] = b2[p];
            };
            return extendStatics(d2, b);
          };
          function __extends(d2, b) {
            extendStatics(d2, b);
            function __() {
              this.constructor = d2;
            }
            d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
          }
          var AbortError = (
            /** @class */
            function(_super) {
              __extends(AbortError2, _super);
              function AbortError2() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.name = "AbortError";
                return _this;
              }
              return AbortError2;
            }(Error)
          );
        },
        /* 341 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _iterator = __webpack_require__(61);
          var _iterator2 = _interopRequireDefault(_iterator);
          var _typeof3 = __webpack_require__(30);
          var _typeof4 = _interopRequireDefault(_typeof3);
          var _symbol = __webpack_require__(51);
          var _symbol2 = _interopRequireDefault(_symbol);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _typeof(obj) {
            "@babel/helpers - typeof";
            if (typeof _symbol2.default === "function" && (0, _typeof4.default)(_iterator2.default) === "symbol") {
              _typeof = function _typeof2(obj2) {
                return typeof obj2 === "undefined" ? "undefined" : (0, _typeof4.default)(obj2);
              };
            } else {
              _typeof = function _typeof2(obj2) {
                return obj2 && typeof _symbol2.default === "function" && obj2.constructor === _symbol2.default && obj2 !== _symbol2.default.prototype ? "symbol" : typeof obj2 === "undefined" ? "undefined" : (0, _typeof4.default)(obj2);
              };
            }
            return _typeof(obj);
          }
          var root;
          if (typeof window !== "undefined") {
            root = window;
          } else if (typeof self === "undefined") {
            console.warn("Using browser-only version of superagent in non-browser environment");
            root = void 0;
          } else {
            root = self;
          }
          var Emitter = __webpack_require__(342);
          var safeStringify = __webpack_require__(343);
          var RequestBase = __webpack_require__(344);
          var isObject = __webpack_require__(170);
          var ResponseBase = __webpack_require__(345);
          var Agent = __webpack_require__(347);
          function noop() {
          }
          module2.exports = function(method, url) {
            if (typeof url === "function") {
              return new exports2.Request("GET", method).end(url);
            }
            if (arguments.length === 1) {
              return new exports2.Request("GET", method);
            }
            return new exports2.Request(method, url);
          };
          exports2 = module2.exports;
          var request = exports2;
          exports2.Request = Request;
          request.getXHR = function() {
            if (root.XMLHttpRequest && (!root.location || root.location.protocol !== "file:" || !root.ActiveXObject)) {
              return new XMLHttpRequest();
            }
            try {
              return new ActiveXObject("Microsoft.XMLHTTP");
            } catch (_unused) {
            }
            try {
              return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            } catch (_unused2) {
            }
            try {
              return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            } catch (_unused3) {
            }
            try {
              return new ActiveXObject("Msxml2.XMLHTTP");
            } catch (_unused4) {
            }
            throw new Error("Browser-only version of superagent could not find XHR");
          };
          var trim = "".trim ? function(s) {
            return s.trim();
          } : function(s) {
            return s.replace(/(^\s*|\s*$)/g, "");
          };
          function serialize(obj) {
            if (!isObject(obj))
              return obj;
            var pairs = [];
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                pushEncodedKeyValuePair(pairs, key, obj[key]);
            }
            return pairs.join("&");
          }
          function pushEncodedKeyValuePair(pairs, key, val) {
            if (val === void 0)
              return;
            if (val === null) {
              pairs.push(encodeURI(key));
              return;
            }
            if (Array.isArray(val)) {
              val.forEach(function(v) {
                pushEncodedKeyValuePair(pairs, key, v);
              });
            } else if (isObject(val)) {
              for (var subkey in val) {
                if (Object.prototype.hasOwnProperty.call(val, subkey))
                  pushEncodedKeyValuePair(pairs, "".concat(key, "[").concat(subkey, "]"), val[subkey]);
              }
            } else {
              pairs.push(encodeURI(key) + "=" + encodeURIComponent(val));
            }
          }
          request.serializeObject = serialize;
          function parseString(str) {
            var obj = {};
            var pairs = str.split("&");
            var pair;
            var pos;
            for (var i2 = 0, len = pairs.length; i2 < len; ++i2) {
              pair = pairs[i2];
              pos = pair.indexOf("=");
              if (pos === -1) {
                obj[decodeURIComponent(pair)] = "";
              } else {
                obj[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
              }
            }
            return obj;
          }
          request.parseString = parseString;
          request.types = {
            html: "text/html",
            json: "application/json",
            xml: "text/xml",
            urlencoded: "application/x-www-form-urlencoded",
            form: "application/x-www-form-urlencoded",
            "form-data": "application/x-www-form-urlencoded"
          };
          request.serialize = {
            "application/x-www-form-urlencoded": serialize,
            "application/json": safeStringify
          };
          request.parse = {
            "application/x-www-form-urlencoded": parseString,
            "application/json": JSON.parse
          };
          function parseHeader(str) {
            var lines = str.split(/\r?\n/);
            var fields = {};
            var index;
            var line;
            var field;
            var val;
            for (var i2 = 0, len = lines.length; i2 < len; ++i2) {
              line = lines[i2];
              index = line.indexOf(":");
              if (index === -1) {
                continue;
              }
              field = line.slice(0, index).toLowerCase();
              val = trim(line.slice(index + 1));
              fields[field] = val;
            }
            return fields;
          }
          function isJSON(mime) {
            return /[/+]json($|[^-\w])/.test(mime);
          }
          function Response(req) {
            this.req = req;
            this.xhr = this.req.xhr;
            this.text = this.req.method !== "HEAD" && (this.xhr.responseType === "" || this.xhr.responseType === "text") || typeof this.xhr.responseType === "undefined" ? this.xhr.responseText : null;
            this.statusText = this.req.xhr.statusText;
            var status = this.xhr.status;
            if (status === 1223) {
              status = 204;
            }
            this._setStatusProperties(status);
            this.headers = parseHeader(this.xhr.getAllResponseHeaders());
            this.header = this.headers;
            this.header["content-type"] = this.xhr.getResponseHeader("content-type");
            this._setHeaderProperties(this.header);
            if (this.text === null && req._responseType) {
              this.body = this.xhr.response;
            } else {
              this.body = this.req.method === "HEAD" ? null : this._parseBody(this.text ? this.text : this.xhr.response);
            }
          }
          ResponseBase(Response.prototype);
          Response.prototype._parseBody = function(str) {
            var parse = request.parse[this.type];
            if (this.req._parser) {
              return this.req._parser(this, str);
            }
            if (!parse && isJSON(this.type)) {
              parse = request.parse["application/json"];
            }
            return parse && str && (str.length > 0 || str instanceof Object) ? parse(str) : null;
          };
          Response.prototype.toError = function() {
            var req = this.req;
            var method = req.method;
            var url = req.url;
            var msg = "cannot ".concat(method, " ").concat(url, " (").concat(this.status, ")");
            var err = new Error(msg);
            err.status = this.status;
            err.method = method;
            err.url = url;
            return err;
          };
          request.Response = Response;
          function Request(method, url) {
            var self2 = this;
            this._query = this._query || [];
            this.method = method;
            this.url = url;
            this.header = {};
            this._header = {};
            this.on("end", function() {
              var err = null;
              var res = null;
              try {
                res = new Response(self2);
              } catch (err_) {
                err = new Error("Parser is unable to parse the response");
                err.parse = true;
                err.original = err_;
                if (self2.xhr) {
                  err.rawResponse = typeof self2.xhr.responseType === "undefined" ? self2.xhr.responseText : self2.xhr.response;
                  err.status = self2.xhr.status ? self2.xhr.status : null;
                  err.statusCode = err.status;
                } else {
                  err.rawResponse = null;
                  err.status = null;
                }
                return self2.callback(err);
              }
              self2.emit("response", res);
              var new_err;
              try {
                if (!self2._isResponseOK(res)) {
                  new_err = new Error(res.statusText || res.text || "Unsuccessful HTTP response");
                }
              } catch (err_) {
                new_err = err_;
              }
              if (new_err) {
                new_err.original = err;
                new_err.response = res;
                new_err.status = res.status;
                self2.callback(new_err, res);
              } else {
                self2.callback(null, res);
              }
            });
          }
          Emitter(Request.prototype);
          RequestBase(Request.prototype);
          Request.prototype.type = function(type) {
            this.set("Content-Type", request.types[type] || type);
            return this;
          };
          Request.prototype.accept = function(type) {
            this.set("Accept", request.types[type] || type);
            return this;
          };
          Request.prototype.auth = function(user, pass, options) {
            if (arguments.length === 1)
              pass = "";
            if (_typeof(pass) === "object" && pass !== null) {
              options = pass;
              pass = "";
            }
            if (!options) {
              options = {
                type: typeof btoa === "function" ? "basic" : "auto"
              };
            }
            var encoder = function encoder2(string) {
              if (typeof btoa === "function") {
                return btoa(string);
              }
              throw new Error("Cannot use basic auth, btoa is not a function");
            };
            return this._auth(user, pass, options, encoder);
          };
          Request.prototype.query = function(val) {
            if (typeof val !== "string")
              val = serialize(val);
            if (val)
              this._query.push(val);
            return this;
          };
          Request.prototype.attach = function(field, file, options) {
            if (file) {
              if (this._data) {
                throw new Error("superagent can't mix .send() and .attach()");
              }
              this._getFormData().append(field, file, options || file.name);
            }
            return this;
          };
          Request.prototype._getFormData = function() {
            if (!this._formData) {
              this._formData = new root.FormData();
            }
            return this._formData;
          };
          Request.prototype.callback = function(err, res) {
            if (this._shouldRetry(err, res)) {
              return this._retry();
            }
            var fn = this._callback;
            this.clearTimeout();
            if (err) {
              if (this._maxRetries)
                err.retries = this._retries - 1;
              this.emit("error", err);
            }
            fn(err, res);
          };
          Request.prototype.crossDomainError = function() {
            var err = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
            err.crossDomain = true;
            err.status = this.status;
            err.method = this.method;
            err.url = this.url;
            this.callback(err);
          };
          Request.prototype.agent = function() {
            console.warn("This is not supported in browser version of superagent");
            return this;
          };
          Request.prototype.ca = Request.prototype.agent;
          Request.prototype.buffer = Request.prototype.ca;
          Request.prototype.write = function() {
            throw new Error("Streaming is not supported in browser version of superagent");
          };
          Request.prototype.pipe = Request.prototype.write;
          Request.prototype._isHost = function(obj) {
            return obj && _typeof(obj) === "object" && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== "[object Object]";
          };
          Request.prototype.end = function(fn) {
            if (this._endCalled) {
              console.warn("Warning: .end() was called twice. This is not supported in superagent");
            }
            this._endCalled = true;
            this._callback = fn || noop;
            this._finalizeQueryString();
            this._end();
          };
          Request.prototype._setUploadTimeout = function() {
            var self2 = this;
            if (this._uploadTimeout && !this._uploadTimeoutTimer) {
              this._uploadTimeoutTimer = setTimeout(function() {
                self2._timeoutError("Upload timeout of ", self2._uploadTimeout, "ETIMEDOUT");
              }, this._uploadTimeout);
            }
          };
          Request.prototype._end = function() {
            if (this._aborted)
              return this.callback(new Error("The request has been aborted even before .end() was called"));
            var self2 = this;
            this.xhr = request.getXHR();
            var xhr = this.xhr;
            var data2 = this._formData || this._data;
            this._setTimeouts();
            xhr.onreadystatechange = function() {
              var readyState = xhr.readyState;
              if (readyState >= 2 && self2._responseTimeoutTimer) {
                clearTimeout(self2._responseTimeoutTimer);
              }
              if (readyState !== 4) {
                return;
              }
              var status;
              try {
                status = xhr.status;
              } catch (_unused5) {
                status = 0;
              }
              if (!status) {
                if (self2.timedout || self2._aborted)
                  return;
                return self2.crossDomainError();
              }
              self2.emit("end");
            };
            var handleProgress = function handleProgress2(direction, e2) {
              if (e2.total > 0) {
                e2.percent = e2.loaded / e2.total * 100;
                if (e2.percent === 100) {
                  clearTimeout(self2._uploadTimeoutTimer);
                }
              }
              e2.direction = direction;
              self2.emit("progress", e2);
            };
            if (this.hasListeners("progress")) {
              try {
                xhr.addEventListener("progress", handleProgress.bind(null, "download"));
                if (xhr.upload) {
                  xhr.upload.addEventListener("progress", handleProgress.bind(null, "upload"));
                }
              } catch (_unused6) {
              }
            }
            if (xhr.upload) {
              this._setUploadTimeout();
            }
            try {
              if (this.username && this.password) {
                xhr.open(this.method, this.url, true, this.username, this.password);
              } else {
                xhr.open(this.method, this.url, true);
              }
            } catch (err) {
              return this.callback(err);
            }
            if (this._withCredentials)
              xhr.withCredentials = true;
            if (!this._formData && this.method !== "GET" && this.method !== "HEAD" && typeof data2 !== "string" && !this._isHost(data2)) {
              var contentType = this._header["content-type"];
              var _serialize = this._serializer || request.serialize[contentType ? contentType.split(";")[0] : ""];
              if (!_serialize && isJSON(contentType)) {
                _serialize = request.serialize["application/json"];
              }
              if (_serialize)
                data2 = _serialize(data2);
            }
            for (var field in this.header) {
              if (this.header[field] === null)
                continue;
              if (Object.prototype.hasOwnProperty.call(this.header, field))
                xhr.setRequestHeader(field, this.header[field]);
            }
            if (this._responseType) {
              xhr.responseType = this._responseType;
            }
            this.emit("request", this);
            xhr.send(typeof data2 === "undefined" ? null : data2);
          };
          request.agent = function() {
            return new Agent();
          };
          ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(method) {
            Agent.prototype[method.toLowerCase()] = function(url, fn) {
              var req = new request.Request(method, url);
              this._setDefaults(req);
              if (fn) {
                req.end(fn);
              }
              return req;
            };
          });
          Agent.prototype.del = Agent.prototype.delete;
          request.get = function(url, data2, fn) {
            var req = request("GET", url);
            if (typeof data2 === "function") {
              fn = data2;
              data2 = null;
            }
            if (data2)
              req.query(data2);
            if (fn)
              req.end(fn);
            return req;
          };
          request.head = function(url, data2, fn) {
            var req = request("HEAD", url);
            if (typeof data2 === "function") {
              fn = data2;
              data2 = null;
            }
            if (data2)
              req.query(data2);
            if (fn)
              req.end(fn);
            return req;
          };
          request.options = function(url, data2, fn) {
            var req = request("OPTIONS", url);
            if (typeof data2 === "function") {
              fn = data2;
              data2 = null;
            }
            if (data2)
              req.send(data2);
            if (fn)
              req.end(fn);
            return req;
          };
          function del(url, data2, fn) {
            var req = request("DELETE", url);
            if (typeof data2 === "function") {
              fn = data2;
              data2 = null;
            }
            if (data2)
              req.send(data2);
            if (fn)
              req.end(fn);
            return req;
          }
          request.del = del;
          request.delete = del;
          request.patch = function(url, data2, fn) {
            var req = request("PATCH", url);
            if (typeof data2 === "function") {
              fn = data2;
              data2 = null;
            }
            if (data2)
              req.send(data2);
            if (fn)
              req.end(fn);
            return req;
          };
          request.post = function(url, data2, fn) {
            var req = request("POST", url);
            if (typeof data2 === "function") {
              fn = data2;
              data2 = null;
            }
            if (data2)
              req.send(data2);
            if (fn)
              req.end(fn);
            return req;
          };
          request.put = function(url, data2, fn) {
            var req = request("PUT", url);
            if (typeof data2 === "function") {
              fn = data2;
              data2 = null;
            }
            if (data2)
              req.send(data2);
            if (fn)
              req.end(fn);
            return req;
          };
        },
        /* 342 */
        /***/
        function(module2, exports2, __webpack_require__) {
          {
            module2.exports = Emitter;
          }
          function Emitter(obj) {
            if (obj)
              return mixin(obj);
          }
          function mixin(obj) {
            for (var key in Emitter.prototype) {
              obj[key] = Emitter.prototype[key];
            }
            return obj;
          }
          Emitter.prototype.on = Emitter.prototype.addEventListener = function(event2, fn) {
            this._callbacks = this._callbacks || {};
            (this._callbacks["$" + event2] = this._callbacks["$" + event2] || []).push(fn);
            return this;
          };
          Emitter.prototype.once = function(event2, fn) {
            function on() {
              this.off(event2, on);
              fn.apply(this, arguments);
            }
            on.fn = fn;
            this.on(event2, on);
            return this;
          };
          Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event2, fn) {
            this._callbacks = this._callbacks || {};
            if (0 == arguments.length) {
              this._callbacks = {};
              return this;
            }
            var callbacks = this._callbacks["$" + event2];
            if (!callbacks)
              return this;
            if (1 == arguments.length) {
              delete this._callbacks["$" + event2];
              return this;
            }
            var cb;
            for (var i2 = 0; i2 < callbacks.length; i2++) {
              cb = callbacks[i2];
              if (cb === fn || cb.fn === fn) {
                callbacks.splice(i2, 1);
                break;
              }
            }
            if (callbacks.length === 0) {
              delete this._callbacks["$" + event2];
            }
            return this;
          };
          Emitter.prototype.emit = function(event2) {
            this._callbacks = this._callbacks || {};
            var args = new Array(arguments.length - 1), callbacks = this._callbacks["$" + event2];
            for (var i2 = 1; i2 < arguments.length; i2++) {
              args[i2 - 1] = arguments[i2];
            }
            if (callbacks) {
              callbacks = callbacks.slice(0);
              for (var i2 = 0, len = callbacks.length; i2 < len; ++i2) {
                callbacks[i2].apply(this, args);
              }
            }
            return this;
          };
          Emitter.prototype.listeners = function(event2) {
            this._callbacks = this._callbacks || {};
            return this._callbacks["$" + event2] || [];
          };
          Emitter.prototype.hasListeners = function(event2) {
            return !!this.listeners(event2).length;
          };
        },
        /* 343 */
        /***/
        function(module2, exports2) {
          module2.exports = stringify;
          stringify.default = stringify;
          stringify.stable = deterministicStringify;
          stringify.stableStringify = deterministicStringify;
          var arr = [];
          var replacerStack = [];
          function stringify(obj, replacer, spacer) {
            decirc(obj, "", [], void 0);
            var res;
            if (replacerStack.length === 0) {
              res = JSON.stringify(obj, replacer, spacer);
            } else {
              res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
            }
            while (arr.length !== 0) {
              var part = arr.pop();
              if (part.length === 4) {
                Object.defineProperty(part[0], part[1], part[3]);
              } else {
                part[0][part[1]] = part[2];
              }
            }
            return res;
          }
          function decirc(val, k, stack, parent) {
            var i2;
            if (typeof val === "object" && val !== null) {
              for (i2 = 0; i2 < stack.length; i2++) {
                if (stack[i2] === val) {
                  var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);
                  if (propertyDescriptor.get !== void 0) {
                    if (propertyDescriptor.configurable) {
                      Object.defineProperty(parent, k, { value: "[Circular]" });
                      arr.push([parent, k, val, propertyDescriptor]);
                    } else {
                      replacerStack.push([val, k]);
                    }
                  } else {
                    parent[k] = "[Circular]";
                    arr.push([parent, k, val]);
                  }
                  return;
                }
              }
              stack.push(val);
              if (Array.isArray(val)) {
                for (i2 = 0; i2 < val.length; i2++) {
                  decirc(val[i2], i2, stack, val);
                }
              } else {
                var keys = Object.keys(val);
                for (i2 = 0; i2 < keys.length; i2++) {
                  var key = keys[i2];
                  decirc(val[key], key, stack, val);
                }
              }
              stack.pop();
            }
          }
          function compareFunction(a, b) {
            if (a < b) {
              return -1;
            }
            if (a > b) {
              return 1;
            }
            return 0;
          }
          function deterministicStringify(obj, replacer, spacer) {
            var tmp = deterministicDecirc(obj, "", [], void 0) || obj;
            var res;
            if (replacerStack.length === 0) {
              res = JSON.stringify(tmp, replacer, spacer);
            } else {
              res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
            }
            while (arr.length !== 0) {
              var part = arr.pop();
              if (part.length === 4) {
                Object.defineProperty(part[0], part[1], part[3]);
              } else {
                part[0][part[1]] = part[2];
              }
            }
            return res;
          }
          function deterministicDecirc(val, k, stack, parent) {
            var i2;
            if (typeof val === "object" && val !== null) {
              for (i2 = 0; i2 < stack.length; i2++) {
                if (stack[i2] === val) {
                  var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);
                  if (propertyDescriptor.get !== void 0) {
                    if (propertyDescriptor.configurable) {
                      Object.defineProperty(parent, k, { value: "[Circular]" });
                      arr.push([parent, k, val, propertyDescriptor]);
                    } else {
                      replacerStack.push([val, k]);
                    }
                  } else {
                    parent[k] = "[Circular]";
                    arr.push([parent, k, val]);
                  }
                  return;
                }
              }
              if (typeof val.toJSON === "function") {
                return;
              }
              stack.push(val);
              if (Array.isArray(val)) {
                for (i2 = 0; i2 < val.length; i2++) {
                  deterministicDecirc(val[i2], i2, stack, val);
                }
              } else {
                var tmp = {};
                var keys = Object.keys(val).sort(compareFunction);
                for (i2 = 0; i2 < keys.length; i2++) {
                  var key = keys[i2];
                  deterministicDecirc(val[key], key, stack, val);
                  tmp[key] = val[key];
                }
                if (parent !== void 0) {
                  arr.push([parent, k, val]);
                  parent[k] = tmp;
                } else {
                  return tmp;
                }
              }
              stack.pop();
            }
          }
          function replaceGetterValues(replacer) {
            replacer = replacer !== void 0 ? replacer : function(k, v) {
              return v;
            };
            return function(key, val) {
              if (replacerStack.length > 0) {
                for (var i2 = 0; i2 < replacerStack.length; i2++) {
                  var part = replacerStack[i2];
                  if (part[1] === key && part[0] === val) {
                    val = "[Circular]";
                    replacerStack.splice(i2, 1);
                    break;
                  }
                }
              }
              return replacer.call(this, key, val);
            };
          }
        },
        /* 344 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _promise = __webpack_require__(3);
          var _promise2 = _interopRequireDefault(_promise);
          var _iterator = __webpack_require__(61);
          var _iterator2 = _interopRequireDefault(_iterator);
          var _typeof3 = __webpack_require__(30);
          var _typeof4 = _interopRequireDefault(_typeof3);
          var _symbol = __webpack_require__(51);
          var _symbol2 = _interopRequireDefault(_symbol);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _typeof(obj) {
            "@babel/helpers - typeof";
            if (typeof _symbol2.default === "function" && (0, _typeof4.default)(_iterator2.default) === "symbol") {
              _typeof = function _typeof2(obj2) {
                return typeof obj2 === "undefined" ? "undefined" : (0, _typeof4.default)(obj2);
              };
            } else {
              _typeof = function _typeof2(obj2) {
                return obj2 && typeof _symbol2.default === "function" && obj2.constructor === _symbol2.default && obj2 !== _symbol2.default.prototype ? "symbol" : typeof obj2 === "undefined" ? "undefined" : (0, _typeof4.default)(obj2);
              };
            }
            return _typeof(obj);
          }
          var isObject = __webpack_require__(170);
          module2.exports = RequestBase;
          function RequestBase(obj) {
            if (obj)
              return mixin(obj);
          }
          function mixin(obj) {
            for (var key in RequestBase.prototype) {
              if (Object.prototype.hasOwnProperty.call(RequestBase.prototype, key))
                obj[key] = RequestBase.prototype[key];
            }
            return obj;
          }
          RequestBase.prototype.clearTimeout = function() {
            clearTimeout(this._timer);
            clearTimeout(this._responseTimeoutTimer);
            clearTimeout(this._uploadTimeoutTimer);
            delete this._timer;
            delete this._responseTimeoutTimer;
            delete this._uploadTimeoutTimer;
            return this;
          };
          RequestBase.prototype.parse = function(fn) {
            this._parser = fn;
            return this;
          };
          RequestBase.prototype.responseType = function(val) {
            this._responseType = val;
            return this;
          };
          RequestBase.prototype.serialize = function(fn) {
            this._serializer = fn;
            return this;
          };
          RequestBase.prototype.timeout = function(options) {
            if (!options || _typeof(options) !== "object") {
              this._timeout = options;
              this._responseTimeout = 0;
              this._uploadTimeout = 0;
              return this;
            }
            for (var option in options) {
              if (Object.prototype.hasOwnProperty.call(options, option)) {
                switch (option) {
                  case "deadline":
                    this._timeout = options.deadline;
                    break;
                  case "response":
                    this._responseTimeout = options.response;
                    break;
                  case "upload":
                    this._uploadTimeout = options.upload;
                    break;
                  default:
                    console.warn("Unknown timeout option", option);
                }
              }
            }
            return this;
          };
          RequestBase.prototype.retry = function(count, fn) {
            if (arguments.length === 0 || count === true)
              count = 1;
            if (count <= 0)
              count = 0;
            this._maxRetries = count;
            this._retries = 0;
            this._retryCallback = fn;
            return this;
          };
          var ERROR_CODES = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
          RequestBase.prototype._shouldRetry = function(err, res) {
            if (!this._maxRetries || this._retries++ >= this._maxRetries) {
              return false;
            }
            if (this._retryCallback) {
              try {
                var override = this._retryCallback(err, res);
                if (override === true)
                  return true;
                if (override === false)
                  return false;
              } catch (err_) {
                console.error(err_);
              }
            }
            if (res && res.status && res.status >= 500 && res.status !== 501)
              return true;
            if (err) {
              if (err.code && ERROR_CODES.includes(err.code))
                return true;
              if (err.timeout && err.code === "ECONNABORTED")
                return true;
              if (err.crossDomain)
                return true;
            }
            return false;
          };
          RequestBase.prototype._retry = function() {
            this.clearTimeout();
            if (this.req) {
              this.req = null;
              this.req = this.request();
            }
            this._aborted = false;
            this.timedout = false;
            this.timedoutError = null;
            return this._end();
          };
          RequestBase.prototype.then = function(resolve, reject) {
            var _this = this;
            if (!this._fullfilledPromise) {
              var self2 = this;
              if (this._endCalled) {
                console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
              }
              this._fullfilledPromise = new _promise2.default(function(resolve2, reject2) {
                self2.on("abort", function() {
                  if (_this._maxRetries && _this._maxRetries > _this._retries) {
                    return;
                  }
                  if (_this.timedout && _this.timedoutError) {
                    reject2(_this.timedoutError);
                    return;
                  }
                  var err = new Error("Aborted");
                  err.code = "ABORTED";
                  err.status = _this.status;
                  err.method = _this.method;
                  err.url = _this.url;
                  reject2(err);
                });
                self2.end(function(err, res) {
                  if (err)
                    reject2(err);
                  else
                    resolve2(res);
                });
              });
            }
            return this._fullfilledPromise.then(resolve, reject);
          };
          RequestBase.prototype.catch = function(cb) {
            return this.then(void 0, cb);
          };
          RequestBase.prototype.use = function(fn) {
            fn(this);
            return this;
          };
          RequestBase.prototype.ok = function(cb) {
            if (typeof cb !== "function")
              throw new Error("Callback required");
            this._okCallback = cb;
            return this;
          };
          RequestBase.prototype._isResponseOK = function(res) {
            if (!res) {
              return false;
            }
            if (this._okCallback) {
              return this._okCallback(res);
            }
            return res.status >= 200 && res.status < 300;
          };
          RequestBase.prototype.get = function(field) {
            return this._header[field.toLowerCase()];
          };
          RequestBase.prototype.getHeader = RequestBase.prototype.get;
          RequestBase.prototype.set = function(field, val) {
            if (isObject(field)) {
              for (var key in field) {
                if (Object.prototype.hasOwnProperty.call(field, key))
                  this.set(key, field[key]);
              }
              return this;
            }
            this._header[field.toLowerCase()] = val;
            this.header[field] = val;
            return this;
          };
          RequestBase.prototype.unset = function(field) {
            delete this._header[field.toLowerCase()];
            delete this.header[field];
            return this;
          };
          RequestBase.prototype.field = function(name2, val) {
            if (name2 === null || void 0 === name2) {
              throw new Error(".field(name, val) name can not be empty");
            }
            if (this._data) {
              throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
            }
            if (isObject(name2)) {
              for (var key in name2) {
                if (Object.prototype.hasOwnProperty.call(name2, key))
                  this.field(key, name2[key]);
              }
              return this;
            }
            if (Array.isArray(val)) {
              for (var i2 in val) {
                if (Object.prototype.hasOwnProperty.call(val, i2))
                  this.field(name2, val[i2]);
              }
              return this;
            }
            if (val === null || void 0 === val) {
              throw new Error(".field(name, val) val can not be empty");
            }
            if (typeof val === "boolean") {
              val = String(val);
            }
            this._getFormData().append(name2, val);
            return this;
          };
          RequestBase.prototype.abort = function() {
            if (this._aborted) {
              return this;
            }
            this._aborted = true;
            if (this.xhr)
              this.xhr.abort();
            if (this.req)
              this.req.abort();
            this.clearTimeout();
            this.emit("abort");
            return this;
          };
          RequestBase.prototype._auth = function(user, pass, options, base64Encoder) {
            switch (options.type) {
              case "basic":
                this.set("Authorization", "Basic ".concat(base64Encoder("".concat(user, ":").concat(pass))));
                break;
              case "auto":
                this.username = user;
                this.password = pass;
                break;
              case "bearer":
                this.set("Authorization", "Bearer ".concat(user));
                break;
            }
            return this;
          };
          RequestBase.prototype.withCredentials = function(on) {
            if (on === void 0)
              on = true;
            this._withCredentials = on;
            return this;
          };
          RequestBase.prototype.redirects = function(n2) {
            this._maxRedirects = n2;
            return this;
          };
          RequestBase.prototype.maxResponseSize = function(n2) {
            if (typeof n2 !== "number") {
              throw new TypeError("Invalid argument");
            }
            this._maxResponseSize = n2;
            return this;
          };
          RequestBase.prototype.toJSON = function() {
            return {
              method: this.method,
              url: this.url,
              data: this._data,
              headers: this._header
            };
          };
          RequestBase.prototype.send = function(data2) {
            var isObj = isObject(data2);
            var type = this._header["content-type"];
            if (this._formData) {
              throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
            }
            if (isObj && !this._data) {
              if (Array.isArray(data2)) {
                this._data = [];
              } else if (!this._isHost(data2)) {
                this._data = {};
              }
            } else if (data2 && this._data && this._isHost(this._data)) {
              throw new Error("Can't merge these send calls");
            }
            if (isObj && isObject(this._data)) {
              for (var key in data2) {
                if (Object.prototype.hasOwnProperty.call(data2, key))
                  this._data[key] = data2[key];
              }
            } else if (typeof data2 === "string") {
              if (!type)
                this.type("form");
              type = this._header["content-type"];
              if (type === "application/x-www-form-urlencoded") {
                this._data = this._data ? "".concat(this._data, "&").concat(data2) : data2;
              } else {
                this._data = (this._data || "") + data2;
              }
            } else {
              this._data = data2;
            }
            if (!isObj || this._isHost(data2)) {
              return this;
            }
            if (!type)
              this.type("json");
            return this;
          };
          RequestBase.prototype.sortQuery = function(sort) {
            this._sort = typeof sort === "undefined" ? true : sort;
            return this;
          };
          RequestBase.prototype._finalizeQueryString = function() {
            var query = this._query.join("&");
            if (query) {
              this.url += (this.url.includes("?") ? "&" : "?") + query;
            }
            this._query.length = 0;
            if (this._sort) {
              var index = this.url.indexOf("?");
              if (index >= 0) {
                var queryArr = this.url.slice(index + 1).split("&");
                if (typeof this._sort === "function") {
                  queryArr.sort(this._sort);
                } else {
                  queryArr.sort();
                }
                this.url = this.url.slice(0, index) + "?" + queryArr.join("&");
              }
            }
          };
          RequestBase.prototype._appendQueryString = function() {
            console.warn("Unsupported");
          };
          RequestBase.prototype._timeoutError = function(reason, timeout, errno) {
            if (this._aborted) {
              return;
            }
            var err = new Error("".concat(reason + timeout, "ms exceeded"));
            err.timeout = timeout;
            err.code = "ECONNABORTED";
            err.errno = errno;
            this.timedout = true;
            this.timedoutError = err;
            this.abort();
            this.callback(err);
          };
          RequestBase.prototype._setTimeouts = function() {
            var self2 = this;
            if (this._timeout && !this._timer) {
              this._timer = setTimeout(function() {
                self2._timeoutError("Timeout of ", self2._timeout, "ETIME");
              }, this._timeout);
            }
            if (this._responseTimeout && !this._responseTimeoutTimer) {
              this._responseTimeoutTimer = setTimeout(function() {
                self2._timeoutError("Response timeout of ", self2._responseTimeout, "ETIMEDOUT");
              }, this._responseTimeout);
            }
          };
        },
        /* 345 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var utils = __webpack_require__(346);
          module2.exports = ResponseBase;
          function ResponseBase(obj) {
            if (obj)
              return mixin(obj);
          }
          function mixin(obj) {
            for (var key in ResponseBase.prototype) {
              if (Object.prototype.hasOwnProperty.call(ResponseBase.prototype, key))
                obj[key] = ResponseBase.prototype[key];
            }
            return obj;
          }
          ResponseBase.prototype.get = function(field) {
            return this.header[field.toLowerCase()];
          };
          ResponseBase.prototype._setHeaderProperties = function(header) {
            var ct = header["content-type"] || "";
            this.type = utils.type(ct);
            var params = utils.params(ct);
            for (var key in params) {
              if (Object.prototype.hasOwnProperty.call(params, key))
                this[key] = params[key];
            }
            this.links = {};
            try {
              if (header.link) {
                this.links = utils.parseLinks(header.link);
              }
            } catch (_unused) {
            }
          };
          ResponseBase.prototype._setStatusProperties = function(status) {
            var type = status / 100 | 0;
            this.statusCode = status;
            this.status = this.statusCode;
            this.statusType = type;
            this.info = type === 1;
            this.ok = type === 2;
            this.redirect = type === 3;
            this.clientError = type === 4;
            this.serverError = type === 5;
            this.error = type === 4 || type === 5 ? this.toError() : false;
            this.created = status === 201;
            this.accepted = status === 202;
            this.noContent = status === 204;
            this.badRequest = status === 400;
            this.unauthorized = status === 401;
            this.notAcceptable = status === 406;
            this.forbidden = status === 403;
            this.notFound = status === 404;
            this.unprocessableEntity = status === 422;
          };
        },
        /* 346 */
        /***/
        function(module2, exports2, __webpack_require__) {
          exports2.type = function(str) {
            return str.split(/ *; */).shift();
          };
          exports2.params = function(str) {
            return str.split(/ *; */).reduce(function(obj, str2) {
              var parts = str2.split(/ *= */);
              var key = parts.shift();
              var val = parts.shift();
              if (key && val)
                obj[key] = val;
              return obj;
            }, {});
          };
          exports2.parseLinks = function(str) {
            return str.split(/ *, */).reduce(function(obj, str2) {
              var parts = str2.split(/ *; */);
              var url = parts[0].slice(1, -1);
              var rel = parts[1].split(/ *= */)[1].slice(1, -1);
              obj[rel] = url;
              return obj;
            }, {});
          };
          exports2.cleanHeader = function(header, changesOrigin) {
            delete header["content-type"];
            delete header["content-length"];
            delete header["transfer-encoding"];
            delete header.host;
            if (changesOrigin) {
              delete header.authorization;
              delete header.cookie;
            }
            return header;
          };
        },
        /* 347 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var _isIterable2 = __webpack_require__(169);
          var _isIterable3 = _interopRequireDefault(_isIterable2);
          var _symbol = __webpack_require__(51);
          var _symbol2 = _interopRequireDefault(_symbol);
          var _from = __webpack_require__(348);
          var _from2 = _interopRequireDefault(_from);
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _toConsumableArray(arr) {
            return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
          }
          function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          function _unsupportedIterableToArray(o2, minLen) {
            if (!o2)
              return;
            if (typeof o2 === "string")
              return _arrayLikeToArray(o2, minLen);
            var n2 = Object.prototype.toString.call(o2).slice(8, -1);
            if (n2 === "Object" && o2.constructor)
              n2 = o2.constructor.name;
            if (n2 === "Map" || n2 === "Set")
              return (0, _from2.default)(o2);
            if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
              return _arrayLikeToArray(o2, minLen);
          }
          function _iterableToArray(iter) {
            if (typeof _symbol2.default !== "undefined" && (0, _isIterable3.default)(Object(iter)))
              return (0, _from2.default)(iter);
          }
          function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr))
              return _arrayLikeToArray(arr);
          }
          function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length)
              len = arr.length;
            for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
              arr2[i2] = arr[i2];
            }
            return arr2;
          }
          function Agent() {
            this._defaults = [];
          }
          ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert", "disableTLSCerts"].forEach(function(fn) {
            Agent.prototype[fn] = function() {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              this._defaults.push({
                fn,
                args
              });
              return this;
            };
          });
          Agent.prototype._setDefaults = function(req) {
            this._defaults.forEach(function(def) {
              req[def.fn].apply(req, _toConsumableArray(def.args));
            });
          };
          module2.exports = Agent;
        },
        /* 348 */
        /***/
        function(module2, exports2, __webpack_require__) {
          module2.exports = { "default": __webpack_require__(349), __esModule: true };
        },
        /* 349 */
        /***/
        function(module2, exports2, __webpack_require__) {
          __webpack_require__(39);
          __webpack_require__(350);
          module2.exports = __webpack_require__(2).Array.from;
        },
        /* 350 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var ctx = __webpack_require__(31);
          var $export = __webpack_require__(16);
          var toObject = __webpack_require__(44);
          var call = __webpack_require__(102);
          var isArrayIter = __webpack_require__(103);
          var toLength = __webpack_require__(67);
          var createProperty = __webpack_require__(351);
          var getIterFn = __webpack_require__(72);
          $export($export.S + $export.F * !__webpack_require__(108)(function(iter) {
            Array.from(iter);
          }), "Array", {
            // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
            from: function from(arrayLike) {
              var O = toObject(arrayLike);
              var C = typeof this == "function" ? this : Array;
              var aLen = arguments.length;
              var mapfn = aLen > 1 ? arguments[1] : void 0;
              var mapping = mapfn !== void 0;
              var index = 0;
              var iterFn = getIterFn(O);
              var length, result, step, iterator;
              if (mapping)
                mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : void 0, 2);
              if (iterFn != void 0 && !(C == Array && isArrayIter(iterFn))) {
                for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
                  createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
                }
              } else {
                length = toLength(O.length);
                for (result = new C(length); length > index; index++) {
                  createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
                }
              }
              result.length = index;
              return result;
            }
          });
        },
        /* 351 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var $defineProperty = __webpack_require__(18);
          var createDesc = __webpack_require__(42);
          module2.exports = function(object, index, value) {
            if (index in object)
              $defineProperty.f(object, index, createDesc(0, value));
            else
              object[index] = value;
          };
        }
        /******/
      ])
    );
  });
})(av);
var AV = /* @__PURE__ */ getDefaultExportFromCjs(av.exports);
const defaultComment = {
  comment: "",
  nick: "Anonymous",
  mail: "",
  link: "",
  ua: navigator.userAgent,
  url: ""
};
const locales = {
  "zh-cn": {
    head: {
      nick: "昵称",
      mail: "邮箱",
      link: "网址(http://)"
    },
    tips: {
      comments: "评论",
      sofa: "快来做第一个评论的人吧~",
      busy: "还在提交中，请稍候...",
      again: "这么简单也能错，也是没谁了."
    },
    ctrl: {
      reply: "回复",
      ok: "好的",
      sure: "确认",
      cancel: "取消",
      confirm: "确认",
      continue: "继续",
      more: "查看更多...",
      try: "再试试?",
      preview: "预览",
      emoji: "表情"
    },
    error: {
      99: "初始化失败，请检查init中的`el`元素.",
      100: "初始化失败，请检查你的AppId和AppKey.",
      401: "未经授权的操作，请检查你的AppId和AppKey.",
      403: "访问被api域名白名单拒绝，请检查你的安全域名设置."
    },
    timeago: {
      seconds: "秒前",
      minutes: "分钟前",
      hours: "小时前",
      days: "天前",
      now: "刚刚"
    }
  },
  en: {
    head: {
      nick: "NickName",
      mail: "E-Mail",
      link: "Website(http://)"
    },
    tips: {
      comments: "Comments",
      sofa: "No comments yet.",
      busy: "Submit is busy, please wait...",
      again: "Sorry, this is a wrong calculation."
    },
    ctrl: {
      reply: "Reply",
      ok: "Ok",
      sure: "Sure",
      cancel: "Cancel",
      confirm: "Confirm",
      continue: "Continue",
      more: "Load More...",
      try: "Once More?",
      preview: "Preview",
      emoji: "Emoji"
    },
    error: {
      99: "Initialization failed, Please check the `el` element in the init method.",
      100: "Initialization failed, Please check your appId and appKey.",
      401: "Unauthorized operation, Please check your appId and appKey.",
      403: "Access denied by api domain white list, Please check your security domain."
    },
    timeago: {
      seconds: "seconds ago",
      minutes: "minutes ago",
      hours: "hours ago",
      days: "days ago",
      now: "just now"
    }
  }
};
let _avatarSetting = {
  cdn: "https://gravatar.loli.net/avatar/",
  ds: ["mp", "identicon", "monsterid", "wavatar", "robohash", "retro", ""],
  params: "",
  hide: false
}, META = ["nick", "mail", "link"], _store = Storage && localStorage && localStorage instanceof Storage && localStorage;
function ValineFactory(option) {
  let root = this;
  root.init(option);
  return root;
}
ValineFactory.prototype.init = function(option) {
  let root = this;
  root["config"] = option;
  if (typeof document === "undefined") {
    console && console.warn("Sorry, Valine does not support Server-side rendering.");
    return;
  }
  !!option && root._init();
  return root;
};
ValineFactory.prototype._init = function() {
  let root = this;
  try {
    let {
      lang,
      langMode,
      avatar,
      avatarForce,
      avatar_cdn,
      notify,
      verify,
      visitor,
      path = location.pathname,
      pageSize,
      recordIP,
      clazzName = "Comment"
    } = root.config;
    root["config"]["path"] = (path || "").replace(/index\.html?$/, "");
    root["config"]["clazzName"] = clazzName;
    let ds = _avatarSetting["ds"];
    let force = avatarForce ? "&q=" + Math.random().toString(32).substring(2) : "";
    lang && langMode && root.installLocale(lang, langMode);
    root.locale = root.locale || locales[lang || "zh-cn"];
    root.notify = notify || false;
    root.verify = verify || false;
    _avatarSetting["params"] = `?d=${ds.indexOf(avatar) > -1 ? avatar : "mp"}&v=${pkg.version}${force}`;
    _avatarSetting["hide"] = avatar === "hide" ? true : false;
    _avatarSetting["cdn"] = /^https?\:\/\//.test(avatar_cdn) ? avatar_cdn : _avatarSetting["cdn"];
    let size = Number(pageSize || 10);
    root.config.pageSize = !isNaN(size) ? size < 1 ? 10 : size : 10;
    setOptions({
      renderer: new Renderer(),
      highlight: root.config.highlight === false ? null : hanabi,
      gfm: true,
      tables: true,
      breaks: true,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: true
    });
    if (recordIP) {
      let ipScript = Utils.create("script", "src", "//api.ip.sb/jsonip?callback=getIP");
      let s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(ipScript, s);
      window.getIP = function(json) {
        defaultComment["ip"] = json.ip;
      };
    }
    let id = root.config.app_id || root.config.appId;
    let key = root.config.app_key || root.config.appKey;
    if (!id || !key)
      throw 99;
    let prefix = "https://";
    let serverURLs = "";
    if (!root.config["serverURLs"]) {
      switch (id.slice(-9)) {
        case "-9Nh9j0Va":
          prefix += "tab.";
          break;
        case "-MdYXbMMI":
          prefix += "us.";
          break;
        default:
          break;
      }
    }
    serverURLs = root.config["serverURLs"] || prefix + "avoscloud.com";
    try {
      AV.init({
        appId: id,
        appKey: key,
        serverURLs
      });
    } catch (ex) {
    }
    let els = Utils.findAll(document, ".valine-comment-count");
    Utils.each(els, (idx, el2) => {
      if (el2) {
        let k = Utils.attr(el2, "data-xid");
        if (k) {
          root.Q(k).count().then((n2) => {
            el2.innerText = n2;
          }).catch((ex) => {
            el2.innerText = 0;
          });
        }
      }
    });
    visitor && CounterFactory.add(AV.Object.extend("Counter"), root.config.path);
    let el = root.config.el || null;
    let _el = Utils.findAll(document, el);
    el = el instanceof HTMLElement ? el : _el[_el.length - 1] || null;
    if (!el)
      return;
    root.el = el;
    try {
      root.el.classList.add("v");
    } catch (ex) {
      root.el.setAttribute("class", root.el.getAttribute("class") + " v");
    }
    _avatarSetting["hide"] && root.el.classList.add("hide-avatar");
    root.config.meta = (root.config.guest_info || root.config.meta || META).filter((item) => META.indexOf(item) > -1);
    let inputEl = (root.config.meta.length == 0 ? META : root.config.meta).map((item) => {
      let _t = item == "mail" ? "email" : "text";
      return META.indexOf(item) > -1 ? `<input name="${item}" placeholder="${root.locale["head"][item]}" class="v${item} vinput" type="${_t}">` : "";
    });
    root.placeholder = root.config.placeholder || "Just Go Go";
    root.el.innerHTML = `<div class="vwrap"><div class="${`vheader item${inputEl.length}`}">${inputEl.join("")}</div><div class="vedit"><textarea id="veditor" class="veditor vinput" placeholder="${root.placeholder}"></textarea><div class="vctrl"><span class="vemoji-btn">${root.locale["ctrl"]["emoji"]}</span> | <span class="vpreview-btn">${root.locale["ctrl"]["preview"]}</span></div><div class="vemojis" style="display:none;"></div><div class="vinput vpreview" style="display:none;"></div></div><div class="vcontrol"><div class="col col-20" title="Markdown is supported"><a href="https://segmentfault.com/markdown" target="_blank"><svg class="markdown" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg></a></div><div class="col col-80 text-right"><button type="button" title="Cmd|Ctrl+Enter" class="vsubmit vbtn">${root.locale["ctrl"]["reply"]}</button></div></div><div style="display:none;" class="vmark"></div></div><div class="vinfo" style="display:none;"><div class="vcount col"></div></div><div class="vlist"></div><div class="vempty" style="display:none;"></div><div class="vpage txt-center"></div><div class="info"><div class="power txt-right">Powered By <a href="https://valine.js.org" target="_blank">Valine</a><br>v${pkg.version}</div></div>`;
    let vempty = Utils.find(root.el, ".vempty");
    root.nodata = {
      show(txt) {
        vempty.innerHTML = txt || root.locale["tips"]["sofa"];
        Utils.attr(vempty, "style", "display:block;");
        return root;
      },
      hide() {
        Utils.attr(vempty, "style", "display:none;");
        return root;
      }
    };
    let _spinner = Utils.create("div", "class", "vloading");
    let _vlist = Utils.find(root.el, ".vlist");
    root.loading = {
      show(mt) {
        let _vlis = Utils.findAll(_vlist, ".vcard");
        if (mt)
          _vlist.insertBefore(_spinner, _vlis[0]);
        else
          _vlist.appendChild(_spinner);
        root.nodata.hide();
        return root;
      },
      hide() {
        let _loading = Utils.find(_vlist, ".vloading");
        if (_loading)
          Utils.remove(_loading);
        Utils.findAll(_vlist, ".vcard").length === 0 && root.nodata.show();
        return root;
      }
    };
    let _mark = Utils.find(root.el, ".vmark");
    root.alert = {
      /**
       * {
       *  type:0/1,
       *  text:'',
       *  ctxt:'',
       *  otxt:'',
       *  cb:fn
       * }
       *
       * @param {Object} o
       */
      show(o2) {
        _mark.innerHTML = `<div class="valert txt-center"><div class="vtext">${o2 && o2.text || 1}</div><div class="vbtns"></div></div>`;
        let _vbtns = Utils.find(_mark, ".vbtns");
        let _cBtn = `<button class="vcancel vbtn">${o2 && o2.ctxt || root.locale["ctrl"]["cancel"]}</button>`;
        let _oBtn = `<button class="vsure vbtn">${o2 && o2.otxt || root.locale["ctrl"]["sure"]}</button>`;
        _vbtns.innerHTML = `${_cBtn}${o2 && o2.type && _oBtn}`;
        Utils.on("click", Utils.find(_mark, ".vcancel"), (e2) => {
          root.alert.hide();
        });
        Utils.attr(_mark, "style", "display:block;");
        if (o2 && o2.type) {
          let _ok = Utils.find(_mark, ".vsure");
          Utils.on("click", _ok, (e2) => {
            root.alert.hide();
            o2.cb && o2.cb();
          });
        }
        return root;
      },
      hide() {
        Utils.attr(_mark, "style", "display:none;");
        return root;
      }
    };
    root.bind();
  } catch (ex) {
    root.ErrorHandler(ex, "init");
  }
};
let createCounter = function(Counter, o2) {
  let newCounter = new Counter();
  let acl = new AV.ACL();
  acl.setPublicReadAccess(true);
  acl.setPublicWriteAccess(true);
  newCounter.setACL(acl);
  newCounter.set("url", o2.url);
  newCounter.set("xid", o2.xid);
  newCounter.set("title", o2.title);
  newCounter.set("time", 1);
  newCounter.save().then((ret) => {
    Utils.find(o2.el, ".leancloud-visitors-count").innerText = 1;
  }).catch((ex) => {
    console.log(ex);
  });
};
let CounterFactory = {
  add(Counter, currPath) {
    let lvs = Utils.findAll(document, ".leancloud_visitors,.leancloud-visitors");
    if (lvs.length) {
      let lv = lvs[0];
      let url = Utils.attr(lv, "id");
      let title = Utils.attr(lv, "data-flag-title");
      let xid = encodeURI(url);
      let o2 = {
        el: lv,
        url,
        xid,
        title
      };
      if (decodeURI(url) === decodeURI(currPath)) {
        let query = new AV.Query(Counter);
        query.equalTo("url", url);
        query.find().then((ret) => {
          if (ret.length > 0) {
            let v = ret[0];
            v.increment("time");
            v.save().then((rt) => {
              Utils.find(lv, ".leancloud-visitors-count").innerText = rt.get("time");
            }).catch((ex) => {
              console.log(ex);
            });
          } else {
            createCounter(Counter, o2);
          }
        }).catch((ex) => {
          ex.code == 101 && createCounter(Counter, o2);
        });
      } else
        CounterFactory.show(Counter, lvs);
    }
  },
  show(Counter, lvs) {
    let COUNT_CONTAINER_REF = ".leancloud-visitors-count";
    Utils.each(lvs, (idx, el) => {
      let cel = Utils.find(el, COUNT_CONTAINER_REF);
      if (cel)
        cel.innerText = 0;
    });
    let urls = [];
    for (let i2 in lvs) {
      if (lvs.hasOwnProperty(i2))
        urls.push(Utils.attr(lvs[i2], "id"));
    }
    if (urls.length) {
      let query = new AV.Query(Counter);
      query.containedIn("url", urls);
      query.find().then((ret) => {
        if (ret.length > 0) {
          Utils.each(ret, (idx, item) => {
            let url = item.get("url");
            let time = item.get("time");
            let els = Utils.findAll(document, `.leancloud_visitors[id="${url}"],.leancloud-visitors[id="${url}"]`);
            Utils.each(els, (idx2, el) => {
              let cel = Utils.find(el, COUNT_CONTAINER_REF);
              if (cel)
                cel.innerText = time;
            });
          });
        }
      }).catch((ex) => {
        console.error(ex);
      });
    }
  }
};
ValineFactory.prototype.Q = function(k) {
  let root = this;
  let len = arguments.length;
  if (len == 1) {
    let notExist = new AV.Query(root["config"]["clazzName"]);
    notExist.doesNotExist("rid");
    let isEmpty = new AV.Query(root["config"]["clazzName"]);
    isEmpty.equalTo("rid", "");
    let q = AV.Query.or(notExist, isEmpty);
    if (k === "*")
      q.exists("url");
    else
      q.equalTo("url", decodeURI(k));
    q.addDescending("createdAt");
    q.addDescending("insertedAt");
    return q;
  } else {
    let ids = JSON.stringify(arguments[1]).replace(/(\[|\])/g, "");
    let cql = `select * from ${root["config"]["clazzName"]} where rid in (${ids}) order by -createdAt,-createdAt`;
    return AV.Query.doCloudQuery(cql);
  }
};
ValineFactory.prototype.ErrorHandler = function(ex, origin) {
  console.log(origin);
  console.error(ex);
  console.error(ex.code, ex.message);
  let root = this;
  root.el && root.loading.hide().nodata.hide();
  if ({}.toString.call(ex) === "[object Error]") {
    let code = ex.code || "", t2 = root.locale["error"][code], msg = t2 || ex.message || ex.error || "";
    if (code == 101)
      root.nodata.show();
    else
      root.el && root.nodata.show(`<pre style="text-align:left;">Code ${code}: ${msg}</pre>`) || console && console.error(`Code ${code}: ${msg}`);
  } else {
    root.el && root.nodata.show(`<pre style="text-align:left;">${JSON.stringify(ex)}</pre>`) || console && console.error(JSON.stringify(ex));
  }
  return;
};
ValineFactory.prototype.installLocale = function(locale, mode) {
  let root = this;
  mode = mode || {};
  if (locale) {
    locales[locale] = mode;
    root.locale = locales[locale] || locales["zh-cn"];
  }
  return root;
};
ValineFactory.prototype.setPath = function(path = "") {
  this.config.path = path;
  return this;
};
ValineFactory.prototype.bind = function(option) {
  let root = this;
  let _vemojis = Utils.find(root.el, ".vemojis");
  let _vpreview = Utils.find(root.el, ".vpreview");
  let _emojiCtrl = Utils.find(root.el, ".vemoji-btn");
  let _vpreviewCtrl = Utils.find(root.el, `.vpreview-btn`);
  let _veditor = Utils.find(root.el, ".veditor");
  let emojiData = Emoji.data;
  for (let key in emojiData) {
    if (emojiData.hasOwnProperty(key)) {
      (function(name2, val) {
        let _i = Utils.create("i", {
          "name": name2,
          "title": name2
        });
        _i.innerHTML = val;
        _vemojis.appendChild(_i);
        Utils.on("click", _i, (e2) => {
          _insertAtCaret(_veditor, val);
          syncContentEvt(_veditor);
        });
      })(key, emojiData[key]);
    }
  }
  root.emoji = {
    show() {
      root.preview.hide();
      Utils.attr(_emojiCtrl, "v", 1);
      Utils.removeAttr(_vpreviewCtrl, "v");
      Utils.attr(_vemojis, "style", "display:block");
      return root.emoji;
    },
    hide() {
      Utils.removeAttr(_emojiCtrl, "v");
      Utils.attr(_vemojis, "style", "display:hide");
      return root.emoji;
    }
  };
  root.preview = {
    show() {
      if (defaultComment["comment"]) {
        root.emoji.hide();
        Utils.attr(_vpreviewCtrl, "v", 1);
        Utils.removeAttr(_emojiCtrl, "v");
        _vpreview.innerHTML = defaultComment["comment"];
        Utils.attr(_vpreview, "style", "display:block");
        _activeOtherFn();
      }
      return root.preview;
    },
    hide() {
      Utils.removeAttr(_vpreviewCtrl, "v");
      Utils.attr(_vpreview, "style", "display:none");
      return root.preview;
    },
    empty() {
      _vpreview.innerHtml = "";
      return root.preview;
    }
  };
  let xssFilter = (content) => {
    let vNode = Utils.create("div");
    vNode.insertAdjacentHTML("afterbegin", content);
    let ns = Utils.findAll(vNode, "*");
    let rejectNodes = ["INPUT", "STYLE", "SCRIPT", "IFRAME", "FRAME", "AUDIO", "VIDEO", "EMBED", "META", "TITLE", "LINK"];
    let __replaceVal = (node, attr) => {
      let val = Utils.attr(node, attr);
      val && Utils.attr(node, attr, val.replace(/(javascript|eval)/ig, ""));
    };
    Utils.each(ns, (idx, n2) => {
      if (n2.nodeType !== 1)
        return;
      if (rejectNodes.indexOf(n2.nodeName) > -1) {
        if (n2.nodeName === "INPUT" && Utils.attr(n2, "type") === "checkbox")
          Utils.attr(n2, "disabled", "disabled");
        else
          Utils.remove(n2);
      }
      if (n2.nodeName === "A")
        __replaceVal(n2, "href");
      Utils.clearAttr(n2);
    });
    return vNode.innerHTML;
  };
  let syncContentEvt = (_el) => {
    let _v = "comment";
    let _val = _el.value || "";
    _val = Emoji.parse(_val);
    _el.value = _val;
    let ret = xssFilter(marked(_val));
    defaultComment[_v] = ret;
    _vpreview.innerHTML = ret;
    if (_val)
      d(_el);
    else
      d.destroy(_el);
  };
  Utils.on("click", _emojiCtrl, (e2) => {
    let _vi = Utils.attr(_emojiCtrl, "v");
    if (_vi)
      root.emoji.hide();
    else
      root.emoji.show();
  });
  Utils.on("click", _vpreviewCtrl, function(e2) {
    let _vi = Utils.attr(_vpreviewCtrl, "v");
    if (_vi)
      root.preview.hide();
    else
      root.preview.show();
  });
  let meta = root.config.meta;
  let inputs = {};
  let mapping = {
    veditor: "comment"
  };
  for (let i2 = 0, len = meta.length; i2 < len; i2++) {
    mapping[`v${meta[i2]}`] = meta[i2];
  }
  for (let i2 in mapping) {
    if (mapping.hasOwnProperty(i2)) {
      let _v = mapping[i2];
      let _el = Utils.find(root.el, `.${i2}`);
      inputs[_v] = _el;
      _el && Utils.on("input change blur", _el, (e2) => {
        if (_v === "comment")
          syncContentEvt(_el);
        else
          defaultComment[_v] = Utils.escape(_el.value.replace(/(^\s*)|(\s*$)/g, "")).substring(0, 20);
      });
    }
  }
  let _insertAtCaret = (field, val) => {
    if (document.selection) {
      field.focus();
      let sel = document.selection.createRange();
      sel.text = val;
      field.focus();
    } else if (field.selectionStart || field.selectionStart == "0") {
      let startPos = field.selectionStart;
      let endPos = field.selectionEnd;
      let scrollTop = field.scrollTop;
      field.value = field.value.substring(0, startPos) + val + field.value.substring(endPos, field.value.length);
      field.focus();
      field.selectionStart = startPos + val.length;
      field.selectionEnd = startPos + val.length;
      field.scrollTop = scrollTop;
    } else {
      field.focus();
      field.value += val;
    }
  };
  let createVquote = (id) => {
    let vcontent = Utils.find(root.el, ".vh[rootid='" + id + "']");
    let vquote = Utils.find(vcontent, ".vquote");
    if (!vquote) {
      vquote = Utils.create("div", "class", "vquote");
      vcontent.appendChild(vquote);
    }
    return vquote;
  };
  let query = (no = 1) => {
    let size = root.config.pageSize;
    let count = Number(Utils.find(root.el, ".vnum").innerText);
    root.loading.show();
    let cq = root.Q(root.config.path);
    cq.limit(size);
    cq.skip((no - 1) * size);
    cq.find().then((rets) => {
      let len = rets.length;
      let rids = [];
      for (let i2 = 0; i2 < len; i2++) {
        let ret = rets[i2];
        rids.push(ret.id);
        insertDom(ret, Utils.find(root.el, ".vlist"), true);
      }
      root.Q(root.config.path, rids).then((ret) => {
        let childs = ret && ret.results || [];
        for (let k = 0; k < childs.length; k++) {
          let child = childs[k];
          insertDom(child, createVquote(child.get("rid")));
        }
      });
      let _vpage = Utils.find(root.el, ".vpage");
      _vpage.innerHTML = size * no < count ? `<button type="button" class="vmore vbtn">${root.locale["ctrl"]["more"]}</button>` : "";
      let _vmore = Utils.find(_vpage, ".vmore");
      if (_vmore) {
        Utils.on("click", _vmore, (e2) => {
          _vpage.innerHTML = "";
          query(++no);
        });
      }
      root.loading.hide();
    }).catch((ex) => {
      root.loading.hide().ErrorHandler(ex, "query");
    });
  };
  root.Q(root.config.path).count().then((num) => {
    if (num > 0) {
      Utils.attr(Utils.find(root.el, ".vinfo"), "style", "display:block;");
      Utils.find(root.el, ".vcount").innerHTML = `<span class="vnum">${num}</span> ${root.locale["tips"]["comments"]}`;
      query();
    } else {
      root.loading.hide();
    }
  }).catch((ex) => {
    root.ErrorHandler(ex, "count");
  });
  let insertDom = (rt, node, mt) => {
    let _vcard = Utils.create("div", {
      "class": "vcard",
      "id": rt.id
    });
    let _img = _avatarSetting["hide"] ? "" : `<img class="vimg" src="${_avatarSetting["cdn"] + md5(rt.get("mail")) + _avatarSetting["params"]}">`;
    let ua = rt.get("ua") || "";
    let uaMeta = "";
    if (ua) {
      ua = detect(ua);
      let browser = `<span class="vsys">${ua.browser} ${ua.version}</span>`;
      let os = `<span class="vsys">${ua.os} ${ua.osVersion}</span>`;
      uaMeta = `${browser} ${os}`;
    }
    if (root.config.path === "*")
      uaMeta = `<a href="${rt.get("url")}" class="vsys">${rt.get("url")}</a>`;
    let _nick = "";
    let _t = rt.get("link") ? /^https?\:\/\//.test(rt.get("link")) ? rt.get("link") : "http://" + rt.get("link") : "";
    _nick = _t ? `<a class="vnick" rel="nofollow" href="${_t}" target="_blank" >${rt.get("nick")}</a>` : `<span class="vnick">${rt.get("nick")}</span>`;
    _vcard.innerHTML = `${_img}
            <div class="vh" rootid=${rt.get("rid") || rt.id}>
                <div class="vhead">${_nick} ${uaMeta}</div>
                <div class="vmeta">
                    <span class="vtime">${timeAgo(rt.get("insertedAt") || rt.createdAt, root.locale)}</span>
                    <span class="vat">${root.locale["ctrl"]["reply"]}</span>
                </div>
                <div class="vcontent">
                    ${xssFilter(rt.get("comment"))}
                </div>
            </div>`;
    let _vat = Utils.find(_vcard, ".vat");
    let _as = Utils.findAll(_vcard, "a");
    for (let i2 = 0, len = _as.length; i2 < len; i2++) {
      let _a = _as[i2];
      if (_a && (Utils.attr(_a, "class") || "").indexOf("at") == -1) {
        Utils.attr(_a, {
          "target": "_blank",
          "rel": "nofollow"
        });
      }
    }
    let _vlis = Utils.findAll(node, ".vcard");
    if (mt)
      node.appendChild(_vcard);
    else
      node.insertBefore(_vcard, _vlis[0]);
    let _vcontent = Utils.find(_vcard, ".vcontent");
    if (_vcontent)
      expandEvt(_vcontent);
    if (_vat)
      bindAtEvt(_vat, rt);
    _activeOtherFn();
  };
  let _activeOtherFn = () => {
    setTimeout(function() {
      try {
        typeof MathJax !== "undefined" && MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        if (typeof hljs !== "undefined") {
          Utils.each(Utils.findAll("pre code"), function(i2, block2) {
            hljs.highlightBlock(block2);
          });
          Utils.each(Utils.findAll("code.hljs"), function(i2, block2) {
            hljs.lineNumbersBlock(block2);
          });
        }
      } catch (ex) {
      }
    }, 200);
  };
  let expandEvt = (el) => {
    setTimeout(function() {
      if (el.offsetHeight > 180) {
        el.classList.add("expand");
        Utils.on("click", el, (e2) => {
          Utils.attr(el, "class", "vcontent");
        });
      }
    });
  };
  let atData = {};
  let bindAtEvt = (el, rt) => {
    Utils.on("click", el, (e2) => {
      let at = `@${Utils.escape(rt.get("nick"))}`;
      atData = {
        "at": Utils.escape(at) + " ",
        "rid": rt.get("rid") || rt.id,
        "pid": rt.id,
        "rmail": rt.get("mail")
      };
      Utils.attr(inputs["comment"], "placeholder", at);
      inputs["comment"].focus();
    });
  };
  let getCache = () => {
    let s = _store && _store.ValineCache;
    if (s) {
      s = JSON.parse(s);
      let m = meta;
      for (let i2 in m) {
        let k = m[i2];
        Utils.find(root.el, `.v${k}`).value = Utils.unescape(s[k]);
        defaultComment[k] = s[k];
      }
    }
  };
  getCache();
  let reset = () => {
    defaultComment["comment"] = "";
    inputs["comment"].value = "";
    syncContentEvt(inputs["comment"]);
    Utils.attr(inputs["comment"], "placeholder", root.placeholder);
    atData = {};
    root.preview.empty().hide();
  };
  let submitBtn = Utils.find(root.el, ".vsubmit");
  let submitEvt = (e2) => {
    if (Utils.attr(submitBtn, "disabled")) {
      root.alert.show({
        type: 0,
        text: `${root.locale["tips"]["busy"]}ヾ(๑╹◡╹)ﾉ"`,
        ctxt: root.locale["ctrl"]["ok"]
      });
      return;
    }
    if (defaultComment["nick"].length < 3) {
      inputs["nick"].focus();
      return;
    }
    if (defaultComment["mail"].length < 6 || defaultComment["mail"].indexOf("@") < 1 || defaultComment["mail"].indexOf(".") < 3) {
      inputs["mail"].focus();
      return;
    }
    if (defaultComment["comment"] == "") {
      inputs["comment"].focus();
      return;
    }
    defaultComment["nick"] = defaultComment["nick"] || "Anonymous";
    if (root.notify || root.verify) {
      verifyEvt(commitEvt);
    } else {
      commitEvt();
    }
  };
  let getAcl = () => {
    let acl = new AV.ACL();
    acl.setPublicReadAccess(true);
    acl.setPublicWriteAccess(false);
    return acl;
  };
  let commitEvt = () => {
    Utils.attr(submitBtn, "disabled", true);
    root.loading.show(true);
    let Ct = AV.Object.extend(root.config.clazzName || "Comment");
    let comment = new Ct();
    defaultComment["url"] = decodeURI(root.config.path);
    defaultComment["insertedAt"] = /* @__PURE__ */ new Date();
    if (atData["rid"]) {
      let pid = atData["pid"] || atData["rid"];
      comment.set("rid", atData["rid"]);
      comment.set("pid", pid);
      defaultComment["comment"] = defaultComment["comment"].replace("<p>", `<p><a class="at" href="#${pid}">${atData["at"]}</a> , `);
    }
    for (let i2 in defaultComment) {
      if (defaultComment.hasOwnProperty(i2)) {
        let _v = defaultComment[i2];
        comment.set(i2, _v);
      }
    }
    comment.setACL(getAcl());
    comment.save().then((ret) => {
      defaultComment["nick"] != "Anonymous" && _store && _store.setItem("ValineCache", JSON.stringify({
        nick: defaultComment["nick"],
        link: defaultComment["link"],
        mail: defaultComment["mail"]
      }));
      let _count = Utils.find(root.el, ".vnum");
      let num = 1;
      try {
        if (atData["rid"]) {
          let vquote = Utils.find(root.el, '.vquote[rid="' + atData["rid"] + '"]') || createVquote(atData["rid"]);
          insertDom(ret, vquote, true);
        } else {
          if (_count) {
            num = Number(_count.innerText) + 1;
            _count.innerText = num;
          } else {
            Utils.find(root.el, ".vcount").innerHTML = '<span class="num">1</span> ' + root.locale["tips"]["comments"];
          }
          insertDom(ret, Utils.find(root.el, ".vlist"));
          root.config.pageSize++;
        }
        defaultComment["mail"] && signUp({
          username: defaultComment["nick"],
          mail: defaultComment["mail"]
        });
        atData["at"] && atData["rmail"] && root.notify && mailEvt({
          username: atData["at"].replace("@", ""),
          mail: atData["rmail"]
        });
        Utils.removeAttr(submitBtn, "disabled");
        root.loading.hide();
        reset();
      } catch (ex) {
        root.ErrorHandler(ex, "save");
      }
    }).catch((ex) => {
      root.ErrorHandler(ex, "commitEvt");
    });
  };
  let verifyEvt = (fn) => {
    let x = Math.floor(Math.random() * 10 + 1);
    let y = Math.floor(Math.random() * 10 + 1);
    let z = Math.floor(Math.random() * 10 + 1);
    let opt = ["+", "-", "x"];
    let o1 = opt[Math.floor(Math.random() * 3)];
    let o2 = opt[Math.floor(Math.random() * 3)];
    let expre = `${x}${o1}${y}${o2}${z}`;
    let subject = `${expre} = <input class='vcode vinput' >`;
    root.alert.show({
      type: 1,
      text: subject,
      ctxt: root.locale["ctrl"]["cancel"],
      otxt: root.locale["ctrl"]["ok"],
      cb() {
        let code = +Utils.find(root.el, ".vcode").value;
        let ret = new Function(`return ${expre.replace(/x/g, "*")}`)();
        if (ret === code) {
          fn && fn();
        } else {
          root.alert.show({
            type: 1,
            text: `(T＿T)${root.locale["tips"]["again"]}`,
            ctxt: root.locale["ctrl"]["cancel"],
            otxt: root.locale["ctrl"]["try"],
            cb() {
              verifyEvt(fn);
              return;
            }
          });
        }
      }
    });
  };
  let signUp = (o2) => {
    let u = new AV.User();
    u.setUsername(o2.username);
    u.setPassword(o2.mail);
    u.setEmail(o2.mail);
    u.setACL(getAcl());
    return u.signUp();
  };
  let mailEvt = (o2) => {
    AV.User.requestPasswordReset(o2.mail).then((ret) => {
    }).catch((e2) => {
      if (e2.code == 1) {
        root.alert.show({
          type: 0,
          text: `ヾ(ｏ･ω･)ﾉ At太频繁啦，提醒功能暂时宕机。<br>${e2.error}`,
          ctxt: root.locale["ctrl"]["ok"]
        });
      } else {
        signUp(o2).then((ret) => {
          mailEvt(o2);
        }).catch((x) => {
        });
      }
    });
  };
  Utils.on("click", submitBtn, submitEvt);
  Utils.on("keydown", document, function(e2) {
    e2 = event || e2;
    let keyCode = e2.keyCode || e2.which || e2.charCode;
    let ctrlKey = e2.ctrlKey || e2.metaKey;
    ctrlKey && keyCode === 13 && submitEvt();
    if (keyCode === 9) {
      let focus = document.activeElement.id || "";
      if (focus == "veditor") {
        e2.preventDefault();
        _insertAtCaret(_veditor, "    ");
      }
    }
  });
  Utils.on("paste", document, (e2) => {
    let clipboardData = "clipboardData" in e2 ? e2.clipboardData : e2.originalEvent && e2.originalEvent.clipboardData || window.clipboardData;
    let items = clipboardData && clipboardData.items;
    let files = [];
    if (items && items.length > 0) {
      for (let i2 = 0; i2 < items.length; i2++) {
        if (items[i2].type.indexOf("image") !== -1) {
          files.push(items[i2].getAsFile());
          break;
        }
      }
      if (files.length) {
        for (let idx in files) {
          let file = files[idx], uploadText = `![Uploading ${file["name"]}]()`;
          _insertAtCaret(_veditor, uploadText);
          file && uploadImage(file, function(err, ret) {
            if (!err && ret)
              _veditor.value = _veditor.value.replace(uploadText, `\r
![${file["name"]}](${ret["data"]})`);
          });
        }
      }
    }
  });
  let uploadImage = (file, callback) => {
    let formData = new FormData();
    formData.append("file", file);
    let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        try {
          let json = JSON.parse(xhr.responseText);
          callback && callback(null, json);
        } catch (err) {
          callback && callback(err);
        }
      } else {
        callback && callback(xhr.status);
      }
    };
    xhr.onerror = function(e2) {
      console.log(e2);
    };
    xhr.open("POST", "https://imgkr.com/api/files/upload", true);
    xhr.send(formData);
  };
};
function Valine(options) {
  return new ValineFactory(options);
}
export {
  Valine,
  Valine as default
};
