var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/maferland/dev/engineering/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();

// node_modules/react-circular-progressbar/dist/styles.css
var styles_default = "/build/_assets/styles-WSYSZ5GR.css";

// route-module:/Users/maferland/dev/engineering/app/root.tsx
var import_remix4 = __toModule(require_remix());

// app/components/layout/Footer.tsx
init_react();
var import_remix2 = __toModule(require_remix());

// app/assets/images/engineering-small.svg
var engineering_small_default = "/build/_assets/engineering-small-HGHSRN7T.svg";

// app/assets/images/github.svg
var github_default = "/build/_assets/github-EQBJALLU.svg";

// app/components/Arrow.tsx
init_react();
var import_react = __toModule(require("react"));
var import_react_xarrows = __toModule(require("react-xarrows"));
var Arrow = (props) => {
  const [showChild, setShowChild] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setShowChild(true);
    return () => setShowChild(false);
  }, []);
  if (!showChild) {
    return null;
  }
  return /* @__PURE__ */ React.createElement("span", {
    className: "hidden md:inline"
  }, /* @__PURE__ */ React.createElement(import_react_xarrows.default, __spreadProps(__spreadValues({}, props), {
    lineColor: "#a29bb6",
    showHead: false,
    showXarrow: showChild
  })));
};
var Arrow_default = Arrow;

// app/components/Circle.tsx
init_react();
var Circle = ({ id, className }) => /* @__PURE__ */ React.createElement("div", {
  id,
  className: `block py-2 ${className} z-10`
}, /* @__PURE__ */ React.createElement("div", {
  className: `w-4 h-4 border-2 border-highlight-on rounded-full ${className}`
}));
var Circle_default = Circle;

// app/components/layout/Footer.tsx
var copyright = `\xA9${new Date().getFullYear()} Capdesk. All rights reserved`;
var Footer = () => {
  const location = (0, import_remix2.useLocation)();
  const isHome = location.pathname === "/";
  return /* @__PURE__ */ React.createElement("div", {
    className: "px-7 md:px-14 pt-12 pb-8 bg-dark-300 flex flex-col gap-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center sm:w-[139px] lg:w-[250px]"
  }, isHome ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Circle_default, {
    className: "bg-dark-300 hidden sm:block",
    id: "footer"
  }), /* @__PURE__ */ React.createElement(Arrow_default, {
    start: "tools",
    end: "footer",
    endAnchor: "top"
  })) : void 0, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    width: "84",
    src: engineering_small_default
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-between text-right font-inter"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    className: "hover:underline",
    to: "/"
  }, "Home"), /* @__PURE__ */ React.createElement(import_remix2.Link, {
    className: "hover:underline",
    to: "/team"
  }, "Team"), /* @__PURE__ */ React.createElement(import_remix2.Link, {
    className: "hover:underline",
    to: "/resources"
  }, "Resources"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col-reverse gap-2 sm:flex-row justify-between text-sm font-inter"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-center"
  }, copyright), /* @__PURE__ */ React.createElement("a", {
    className: "flex flex-row justify-center sm:justify-end items-center gap-2 sm:gap-2 underline",
    href: "https://github.com/capdesk/engineering-dashboard"
  }, /* @__PURE__ */ React.createElement("img", {
    src: github_default
  }), " View dashboard code")));
};
var Footer_default = Footer;

// app/components/Navbar.tsx
init_react();
var import_react_router = __toModule(require("react-router"));
var import_remix3 = __toModule(require_remix());

// app/assets/images/capdesk.svg
var capdesk_default = "/build/_assets/capdesk-LZFQKSF7.svg";

// app/components/Button.tsx
init_react();
var Button = ({ children, active }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: `button flex flex-row items-center justify-center w-32 ${active ? "active" : ""}`
  }, children);
};

// app/components/Navbar.tsx
var useActive = (to) => {
  const resolved = (0, import_remix3.useResolvedPath)(to);
  const match = (0, import_react_router.useMatch)({ path: resolved.pathname, end: true });
  return Boolean(match);
};
var NavLink = (_a) => {
  var _b = _a, { to, children } = _b, props = __objRest(_b, ["to", "children"]);
  const isActive = useActive(to);
  return /* @__PURE__ */ React.createElement(import_remix3.Link, __spreadValues({
    to
  }, props), /* @__PURE__ */ React.createElement(Button, {
    active: isActive
  }, children));
};
var Navbar = () => /* @__PURE__ */ React.createElement("div", {
  className: "w-full grid grid-cols-2 justify-between items-center py-8 px-7 lg:px-16 bg-dark-300"
}, /* @__PURE__ */ React.createElement(import_remix3.Link, {
  to: "/"
}, /* @__PURE__ */ React.createElement("img", {
  height: "37",
  src: capdesk_default
})), /* @__PURE__ */ React.createElement("div", {
  className: "flex flex-col md:flex-row gap-4 justify-end items-end"
}, /* @__PURE__ */ React.createElement(NavLink, {
  to: "/resources"
}, "RESOURCES"), /* @__PURE__ */ React.createElement(NavLink, {
  to: "/team"
}, "TEAM")));
var Navbar_default = Navbar;

// app/styles/fonts.css
var fonts_default = "/build/_assets/fonts-GKR35AFF.css";

// app/styles/reset.css
var reset_default = "/build/_assets/reset-7WZYJPER.css";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-IZPE3N5O.css";

// route-module:/Users/maferland/dev/engineering/app/root.tsx
function links() {
  return [
    { rel: "stylesheet", href: reset_default },
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: fonts_default },
    { rel: "stylesheet", href: styles_default },
    { rel: "icon", type: "image/png", href: "/favicon.svg" }
  ];
}
var meta = () => {
  return {
    title: "Capdesk Engineering Dashboard",
    description: "Our live Engineering Dashboard offers a quick sneak peek into Capdesk's engineering world."
  };
};
function Document({ children, title }) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), " ", title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), false));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement("main", null, children), /* @__PURE__ */ React.createElement(Footer_default, null));
}
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null)));
}

// route-module:/Users/maferland/dev/engineering/app/routes/resources.tsx
var resources_exports = {};
__export(resources_exports, {
  default: () => Resources
});
init_react();

// app/components/layout/Hero.tsx
init_react();
var import_lottie_react = __toModule(require("lottie-react"));
var import_remix5 = __toModule(require_remix());

// app/assets/animations/engineering.json
var v = "4.8.0";
var meta2 = { g: "LottieFiles AE ", a: "", k: "", d: "", tc: "" };
var fr = 25;
var ip = 0;
var op = 595;
var w = 639;
var h = 644;
var nm = "Logo sting";
var ddd = 1;
var assets = [
  {
    id: "image_0",
    w: 1,
    h: 1,
    u: "",
    p: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAADElEQVQImWNgoBwAAABEAAGC/mVLAAAAAElFTkSuQmCC",
    e: 1
  },
  {
    id: "comp_0",
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Shape Layer 2",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [1032, 618, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [541.621, 541.621], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "tm",
                s: {
                  a: 1,
                  k: [
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 71, s: [0] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 72, s: [2] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 73, s: [4] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 74, s: [9] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 75, s: [15] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 76, s: [21] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 77, s: [28] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 78, s: [35] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 79, s: [40] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 80, s: [47] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 81, s: [52] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 82, s: [58] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 83, s: [63] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 84, s: [67] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 85, s: [71] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 86, s: [76] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 87, s: [80] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 88, s: [82] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 89, s: [84] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [88] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 91, s: [91] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 92, s: [91] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 93, s: [94] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 94, s: [96] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 95, s: [97] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 96, s: [98] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 97, s: [99] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 98, s: [99] },
                    { t: 99, s: [100] }
                  ],
                  ix: 1
                },
                e: {
                  a: 1,
                  k: [
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 12, s: [0] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 14, s: [4] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 15, s: [13] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 16, s: [19] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 17, s: [21] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 20, s: [25] },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 25,
                      s: [25.125]
                    },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 27,
                      s: [27.375]
                    },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 28, s: [30] },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 29,
                      s: [36.5]
                    },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 30, s: [41] },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 31,
                      s: [44.733]
                    },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 33,
                      s: [46.2]
                    },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 35, s: [48] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 40, s: [49] },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 42,
                      s: [49.4]
                    },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 43,
                      s: [51.933]
                    },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 44,
                      s: [54.967]
                    },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 45, s: [60] },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 46,
                      s: [64.6]
                    },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 48,
                      s: [70.8]
                    },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 50, s: [73] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 52, s: [75] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 55, s: [75] },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 57,
                      s: [75.467]
                    },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 58,
                      s: [80.2]
                    },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 60, s: [87] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 61, s: [91] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 62, s: [93] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 63, s: [94] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 64, s: [96] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 65, s: [98] },
                    { t: 67, s: [100] }
                  ],
                  ix: 2
                },
                o: { a: 0, k: 0, ix: 3 },
                m: 1,
                ix: 2,
                nm: "Trim Paths 1",
                mn: "ADBE Vector Filter - Trim",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109802246094, 1, 0.7529296875, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 3, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-75.189, -77.189], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 4,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 0,
        op: 125,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "Shape Layer 1",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: {
            a: 1,
            k: [
              { i: { x: [0], y: [1] }, o: { x: [0.564], y: [0] }, t: 11, s: [0] },
              { i: { x: [1e-3], y: [1] }, o: { x: [0.564], y: [0] }, t: 23, s: [90] },
              { i: { x: [0.048], y: [1] }, o: { x: [0.398], y: [0] }, t: 41, s: [180] },
              { i: { x: [0.189], y: [1] }, o: { x: [0.167], y: [0] }, t: 56, s: [270] },
              { i: { x: [0.349], y: [1] }, o: { x: [0.167], y: [0] }, t: 71, s: [360] },
              { t: 101, s: [720] }
            ],
            ix: 10
          },
          p: { a: 0, k: [960, 540, 0], ix: 2 },
          a: { a: 0, k: [-544, -85, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.833, 0.833], y: [1, 1] },
                      o: { x: [0.333, 0.333], y: [0, 0] },
                      t: 0,
                      s: [0, 0]
                    },
                    {
                      i: { x: [0.833, 0.833], y: [1, 1] },
                      o: { x: [0.167, 0.167], y: [0, 0] },
                      t: 16,
                      s: [38.046, 38.046]
                    },
                    {
                      i: { x: [0.833, 0.833], y: [1, 1] },
                      o: { x: [0.167, 0.167], y: [0, 0] },
                      t: 94,
                      s: [38.046, 38.046]
                    },
                    { t: 102, s: [0, 0] }
                  ],
                  ix: 2
                },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.235294117647, 1, 0.98431372549, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 0, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.109803921569, 1, 0.752941176471, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-544.977, -360.977], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 0,
        op: 121,
        st: -4,
        bm: 0
      },
      {
        ddd: 1,
        ind: 3,
        ty: 4,
        nm: "RING Outlines",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          rx: {
            a: 1,
            k: [
              { i: { x: [0.147], y: [1] }, o: { x: [0.333], y: [0] }, t: 31, s: [0] },
              { t: 66, s: [180] }
            ],
            ix: 8
          },
          ry: {
            a: 1,
            k: [
              { i: { x: [0.078], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [0] },
              { t: 38, s: [180] }
            ],
            ix: 9
          },
          rz: { a: 0, k: 0, ix: 10 },
          or: { a: 0, k: [0, 0, 0], ix: 7 },
          p: { a: 0, k: [957.753, 540.007, 0], ix: 2 },
          a: { a: 0, k: [53.838, 53.838, 0], ix: 1 },
          s: { a: 0, k: [521, 521, 521], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [27.962, 0],
                      [0, 27.961],
                      [-27.962, 0],
                      [0, -27.962]
                    ],
                    o: [
                      [-27.962, 0],
                      [0, -27.962],
                      [27.962, 0],
                      [0, 27.961]
                    ],
                    v: [
                      [0, 50.629],
                      [-50.629, 0],
                      [0, -50.63],
                      [50.629, 0]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              {
                ind: 1,
                ty: "sh",
                ix: 2,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [29.596, 0],
                      [0, -29.596],
                      [-29.596, 0],
                      [0, 29.595]
                    ],
                    o: [
                      [-29.596, 0],
                      [0, 29.595],
                      [29.596, 0],
                      [0, -29.596]
                    ],
                    v: [
                      [0, -53.588],
                      [-53.588, 0],
                      [0, 53.588],
                      [53.588, 0]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 2",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              { ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: false },
              {
                ty: "fl",
                c: { a: 0, k: [0.372549019608, 0.376470618154, 0.407843167174, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [53.838, 53.838], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 4,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 0,
        op: 125,
        st: 0,
        bm: 0
      },
      {
        ddd: 1,
        ind: 4,
        ty: 4,
        nm: "RING Outlines 2",
        td: 1,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          rx: {
            a: 1,
            k: [
              { i: { x: [0.147], y: [1] }, o: { x: [0.333], y: [0] }, t: 31, s: [0] },
              { t: 66, s: [180] }
            ],
            ix: 8
          },
          ry: {
            a: 1,
            k: [
              { i: { x: [0.078], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [0] },
              { t: 38, s: [180] }
            ],
            ix: 9
          },
          rz: { a: 0, k: 0, ix: 10 },
          or: { a: 0, k: [0, 0, 0], ix: 7 },
          p: { a: 0, k: [957.753, 540.007, 0], ix: 2 },
          a: { a: 0, k: [53.838, 53.838, 0], ix: 1 },
          s: { a: 0, k: [521, 521, 521], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 1,
                ty: "sh",
                ix: 2,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [29.596, 0],
                      [0, -29.596],
                      [-29.596, 0],
                      [0, 29.595]
                    ],
                    o: [
                      [-29.596, 0],
                      [0, 29.595],
                      [29.596, 0],
                      [0, -29.596]
                    ],
                    v: [
                      [0, -53.588],
                      [-53.588, 0],
                      [0, 53.588],
                      [53.588, 0]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 2",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              { ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: false },
              {
                ty: "fl",
                c: { a: 0, k: [0.372549019608, 0.376470618154, 0.407843167174, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [53.838, 53.838], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 4,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 0,
        op: 125,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 5,
        ty: 0,
        nm: "E LOGO",
        tt: 1,
        refId: "comp_1",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [960, 540, 0], ix: 2 },
          a: { a: 0, k: [960, 540, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        w: 1920,
        h: 1080,
        ip: 0,
        op: 125,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 6,
        ty: 2,
        nm: "Layer 1",
        parent: 8,
        refId: "image_0",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [-139.621, 436.897, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        ip: 0,
        op: 125,
        st: 0,
        bm: 0
      },
      {
        ddd: 1,
        ind: 8,
        ty: 3,
        nm: "RING",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          rx: {
            a: 1,
            k: [
              { i: { x: [0.147], y: [1] }, o: { x: [0.333], y: [0] }, t: 31, s: [0] },
              { t: 66, s: [180] }
            ],
            ix: 8
          },
          ry: {
            a: 1,
            k: [
              { i: { x: [0.078], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [0] },
              { t: 38, s: [180] }
            ],
            ix: 9
          },
          rz: { a: 0, k: 0, ix: 10 },
          or: { a: 0, k: [0, 0, 0], ix: 7 },
          p: { a: 0, k: [957.753, 540.007, 0], ix: 2 },
          a: { a: 0, k: [53.838, 53.838, 0], ix: 1 },
          s: { a: 0, k: [521, 521, 521], ix: 6 }
        },
        ao: 0,
        ip: 0,
        op: 125,
        st: 0,
        bm: 0
      }
    ]
  },
  {
    id: "comp_1",
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Layer 3 Outlines",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 720, ix: 10 },
          p: { a: 0, k: [957.801, 520.791, 0], ix: 2 },
          a: { a: 0, k: [14.578, 20.268, 0], ix: 1 },
          s: { a: 0, k: [521, 521, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    o: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    v: [
                      [-14.328, 20.018],
                      [-14.328, -20.018],
                      [5.29, -20.018],
                      [5.29, -10.004],
                      [-1.165, -10.004],
                      [-1.165, -5.062],
                      [14.328, -5.062],
                      [14.328, 4.552],
                      [-1.165, 4.552],
                      [-1.165, 10.051],
                      [14.328, 10.051],
                      [14.328, 20.018]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.878431432387, 0.89019613827, 0.960784373564, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [14.578, 20.268], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 0,
        op: 125,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "GEAR Outlines",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: {
            a: 1,
            k: [
              { i: { x: [0], y: [1] }, o: { x: [0.564], y: [0] }, t: 11, s: [0] },
              { i: { x: [1e-3], y: [1] }, o: { x: [0.564], y: [0] }, t: 23, s: [90] },
              { i: { x: [0.048], y: [1] }, o: { x: [0.398], y: [0] }, t: 41, s: [180] },
              { i: { x: [0.189], y: [1] }, o: { x: [0.167], y: [0] }, t: 56, s: [270] },
              { t: 71, s: [360] }
            ],
            ix: 10
          },
          p: { a: 0, k: [1045.183, 425.89, 0], ix: 2 },
          a: { a: 0, k: [8.731, 8.731, 0], ix: 1 },
          s: { a: 0, k: [521, 521, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0, 0],
                      [0.417, 0.28],
                      [0.192, 0.466],
                      [-0.099, 0.493],
                      [-0.357, 0.355],
                      [-0.493, 0.097],
                      [-0.465, -0.193],
                      [-0.279, -0.419],
                      [0, -0.503],
                      [0.478, -0.468],
                      [0.669, 2e-3]
                    ],
                    o: [
                      [-0.503, -2e-3],
                      [-0.418, -0.281],
                      [-0.191, -0.465],
                      [0.099, -0.493],
                      [0.356, -0.355],
                      [0.494, -0.098],
                      [0.464, 0.193],
                      [0.279, 0.418],
                      [-0.013, 0.668],
                      [-0.478, 0.467],
                      [0, 0]
                    ],
                    v: [
                      [0.027, 2.545],
                      [-1.384, 2.112],
                      [-2.318, 0.967],
                      [-2.459, -0.502],
                      [-1.76, -1.803],
                      [-0.457, -2.497],
                      [1.013, -2.351],
                      [2.153, -1.413],
                      [2.582, 0],
                      [1.816, 1.773],
                      [0.027, 2.499]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              {
                ind: 1,
                ty: "sh",
                ix: 2,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0.013, 0],
                      [0, 0],
                      [0.283, 0.496],
                      [0, 0],
                      [0.01, 0.024],
                      [0, 0.011],
                      [4e-3, 0.01],
                      [0, 0],
                      [0.028, 0],
                      [0.02, -0.018],
                      [0, 0],
                      [0.554, 0.148],
                      [0, 0],
                      [0.02, 0.019],
                      [0.027, 0],
                      [0, 0],
                      [0.02, -0.019],
                      [0, -0.027],
                      [0, 0],
                      [0.495, -0.29],
                      [0, 0],
                      [0.026, 0],
                      [0.019, -0.018],
                      [0, 0],
                      [7e-3, -0.012],
                      [0, -0.013],
                      [-6e-3, -0.012],
                      [-0.012, -8e-3],
                      [0, 0],
                      [0.151, -0.553],
                      [0, 0],
                      [0.019, -0.02],
                      [0, -0.027],
                      [0, 0],
                      [-0.019, -0.019],
                      [-0.027, 0],
                      [0, 0],
                      [-0.287, -0.496],
                      [0, 0],
                      [7e-3, -0.012],
                      [0, -0.014],
                      [-6e-3, -0.012],
                      [-0.012, -8e-3],
                      [0, 0],
                      [-0.026, 0],
                      [-0.018, 0.017],
                      [0, 0],
                      [-0.553, -0.148],
                      [0, 0],
                      [-0.019, -0.019],
                      [-0.027, 0],
                      [0, 0],
                      [-0.018, 0.019],
                      [0, 0.028],
                      [0, 0],
                      [-0.494, 0.288],
                      [0, 0],
                      [-0.027, 0],
                      [-0.021, 0.018],
                      [0, 0],
                      [0, 0.026],
                      [0.018, 0.019],
                      [0, 0],
                      [-0.148, 0.552],
                      [0, 0],
                      [-0.012, 5e-3],
                      [-8e-3, 9e-3],
                      [-4e-3, 0.013],
                      [1e-3, 0.013],
                      [0, 0],
                      [4e-3, 0.013],
                      [9e-3, 0.01],
                      [0.012, 6e-3]
                    ],
                    o: [
                      [0, 0],
                      [-0.148, -0.552],
                      [0, 0],
                      [0.01, -0.024],
                      [4e-3, -0.011],
                      [0, -0.011],
                      [0, 0],
                      [-0.021, -0.018],
                      [-0.027, 0],
                      [0, 0],
                      [-0.494, -0.29],
                      [0, 0],
                      [0, -0.027],
                      [-0.018, -0.019],
                      [0, 0],
                      [-0.027, 0],
                      [-0.019, 0.019],
                      [0, 0],
                      [-0.553, 0.148],
                      [0, 0],
                      [-0.018, -0.018],
                      [-0.026, 0],
                      [0, 0],
                      [-0.012, 7e-3],
                      [-6e-3, 0.012],
                      [0, 0.014],
                      [7e-3, 0.012],
                      [0, 0],
                      [-0.287, 0.495],
                      [0, 0],
                      [-0.027, 0],
                      [-0.019, 0.019],
                      [0, 0],
                      [0, 0.027],
                      [0.019, 0.019],
                      [0, 0],
                      [0.151, 0.552],
                      [0, 0],
                      [-0.012, 7e-3],
                      [-6e-3, 0.012],
                      [0, 0.014],
                      [7e-3, 0.012],
                      [0, 0],
                      [0.019, 0.017],
                      [0.026, 0],
                      [0, 0],
                      [0.495, 0.29],
                      [0, 0],
                      [0, 0.028],
                      [0.02, 0.019],
                      [0, 0],
                      [0.027, 0],
                      [0.02, -0.019],
                      [0, 0],
                      [0.553, -0.149],
                      [0, 0],
                      [0.02, 0.018],
                      [0.028, 0],
                      [0, 0],
                      [0.018, -0.019],
                      [0, -0.026],
                      [0, 0],
                      [0.283, -0.496],
                      [0, 0],
                      [0.013, 0],
                      [0.012, -5e-3],
                      [9e-3, -0.01],
                      [4e-3, -0.012],
                      [0, 0],
                      [1e-3, -0.013],
                      [-4e-3, -0.012],
                      [-8e-3, -0.01],
                      [-0.012, -5e-3]
                    ],
                    v: [
                      [8.387, -1.709],
                      [6.353, -1.709],
                      [5.703, -3.288],
                      [7.133, -4.719],
                      [7.133, -4.793],
                      [7.14, -4.826],
                      [7.133, -4.858],
                      [4.867, -7.134],
                      [4.792, -7.162],
                      [4.718, -7.134],
                      [3.287, -5.694],
                      [1.708, -6.354],
                      [1.708, -8.379],
                      [1.678, -8.451],
                      [1.606, -8.481],
                      [-1.599, -8.481],
                      [-1.671, -8.451],
                      [-1.701, -8.379],
                      [-1.701, -6.354],
                      [-3.28, -5.694],
                      [-4.72, -7.134],
                      [-4.789, -7.161],
                      [-4.859, -7.134],
                      [-7.125, -4.858],
                      [-7.153, -4.828],
                      [-7.163, -4.789],
                      [-7.153, -4.749],
                      [-7.125, -4.719],
                      [-5.695, -3.288],
                      [-6.354, -1.709],
                      [-8.379, -1.709],
                      [-8.452, -1.679],
                      [-8.481, -1.607],
                      [-8.481, 1.607],
                      [-8.452, 1.679],
                      [-8.379, 1.709],
                      [-6.354, 1.709],
                      [-5.695, 3.288],
                      [-7.125, 4.719],
                      [-7.153, 4.749],
                      [-7.163, 4.788],
                      [-7.153, 4.828],
                      [-7.125, 4.858],
                      [-4.859, 7.134],
                      [-4.789, 7.161],
                      [-4.72, 7.134],
                      [-3.28, 5.694],
                      [-1.701, 6.353],
                      [-1.701, 8.378],
                      [-1.671, 8.451],
                      [-1.599, 8.481],
                      [1.606, 8.481],
                      [1.678, 8.451],
                      [1.708, 8.378],
                      [1.708, 6.353],
                      [3.287, 5.694],
                      [4.718, 7.134],
                      [4.792, 7.162],
                      [4.867, 7.134],
                      [7.133, 4.858],
                      [7.161, 4.788],
                      [7.133, 4.719],
                      [5.703, 3.288],
                      [6.353, 1.709],
                      [8.387, 1.709],
                      [8.425, 1.701],
                      [8.456, 1.679],
                      [8.476, 1.645],
                      [8.48, 1.607],
                      [8.48, -1.607],
                      [8.476, -1.646],
                      [8.456, -1.679],
                      [8.425, -1.702]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 2",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              { ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: false },
              {
                ty: "fl",
                c: { a: 0, k: [0.878431432387, 0.89019613827, 0.960784373564, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [8.731, 8.731], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 4,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: -3,
        op: 136,
        st: 11,
        bm: 0
      },
      {
        ddd: 0,
        ind: 5,
        ty: 4,
        nm: "Layer 2 Outlines",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [957.752, 678.948, 0], ix: 2 },
          a: { a: 0, k: [14.578, 4.012, 0], ix: 1 },
          s: { a: 0, k: [521, 521, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    o: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    v: [
                      [-14.328, 3.762],
                      [14.328, 3.762],
                      [14.328, -3.762],
                      [-14.328, -3.762]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.878431432387, 0.89019613827, 0.960784373564, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [14.578, 4.012], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 0,
        op: 125,
        st: 0,
        bm: 0
      }
    ]
  },
  {
    id: "comp_2",
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 3,
        nm: "Null 4",
        sr: 1,
        ks: {
          o: { a: 0, k: 0, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [960, 540, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: {
            a: 1,
            k: [
              {
                i: { x: [0.022, 0.022, 0.667], y: [1, 1, 1] },
                o: { x: [0.679, 0.679, 0.333], y: [0, 0, 0] },
                t: 14,
                s: [100, 100, 100]
              },
              {
                i: { x: [0.123, 0.123, 0.667], y: [1, 1, 1] },
                o: { x: [0.667, 0.667, 0.167], y: [0, 0, 0] },
                t: 18,
                s: [121, 121, 100]
              },
              { t: 25, s: [100, 100, 100] }
            ],
            ix: 6
          }
        },
        ao: 0,
        ip: 0,
        op: 125,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 2,
        ty: 0,
        nm: "GREEN]",
        refId: "comp_3",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [960, 540, 0], ix: 2 },
          a: { a: 0, k: [960, 540, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        tm: {
          a: 1,
          k: [
            { i: { x: [0.667], y: [1] }, o: { x: [0.167], y: [0.167] }, t: 0, s: [0] },
            { i: { x: [0.339], y: [1] }, o: { x: [0.333], y: [0] }, t: 29, s: [1.16] },
            { t: 74, s: [3.4] }
          ],
          ix: 2
        },
        w: 1920,
        h: 1080,
        ip: 29,
        op: 85,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "Shape Layer 4",
        parent: 1,
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 84, s: [0] },
              { t: 100, s: [100] }
            ],
            ix: 11
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [72, 78, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [541.621, 541.621], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.37255859375, 0.37646484375, 0.407836914063, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 13, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-75.189, -77.189], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 84,
        op: 106,
        st: 84,
        bm: 0
      },
      {
        ddd: 0,
        ind: 4,
        ty: 4,
        nm: "Shape Layer 2",
        parent: 1,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [72, 78, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [541.621, 541.621], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.372549019608, 0.376470588235, 0.407843137255, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 13, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                d: [
                  { n: "d", nm: "dash", v: { a: 0, k: 88, ix: 1 } },
                  { n: "g", nm: "gap", v: { a: 0, k: 18, ix: 2 } },
                  { n: "o", nm: "offset", v: { a: 0, k: 0, ix: 7 } }
                ],
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-75.189, -77.189], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 16,
        op: 125,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 5,
        ty: 4,
        nm: "Shape Layer 3",
        parent: 1,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [72, 78, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [541.621, 541.621], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.37255859375, 0.37646484375, 0.407836914063, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 13, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-75.189, -77.189], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 0,
        op: 16,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 6,
        ty: 4,
        nm: "Layer 3 Outlines",
        parent: 14,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 720, ix: 10 },
          p: { a: 0, k: [53.847, 50.15, 0], ix: 2 },
          a: { a: 0, k: [14.578, 20.268, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    o: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    v: [
                      [-14.328, 20.018],
                      [-14.328, -20.018],
                      [5.29, -20.018],
                      [5.29, -10.004],
                      [-1.165, -10.004],
                      [-1.165, -5.062],
                      [14.328, -5.062],
                      [14.328, 4.552],
                      [-1.165, 4.552],
                      [-1.165, 10.051],
                      [14.328, 10.051],
                      [14.328, 20.018]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.878431432387, 0.89019613827, 0.960784373564, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [14.578, 20.268], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 0,
        op: 125,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 8,
        ty: 4,
        nm: "GEAR Outlines",
        parent: 14,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: {
            a: 1,
            k: [
              { i: { x: [0.138], y: [1] }, o: { x: [0.333], y: [0] }, t: 14, s: [0] },
              { i: { x: [0.833], y: [1] }, o: { x: [0.333], y: [0] }, t: 25, s: [180] },
              { i: { x: [0.134], y: [1] }, o: { x: [0.314], y: [0] }, t: 29, s: [180] },
              { t: 75, s: [540] }
            ],
            ix: 10
          },
          p: { a: 0, k: [70.619, 31.934, 0], ix: 2 },
          a: { a: 0, k: [8.731, 8.731, 0], ix: 1 },
          s: {
            a: 1,
            k: [
              {
                i: { x: [0.139, 0.139, 0.667], y: [1, 1, 1] },
                o: { x: [0.801, 0.801, 0.333], y: [0, 0, 0] },
                t: 15,
                s: [100, 100, 100]
              },
              {
                i: { x: [0.243, 0.243, 0.667], y: [1, 1, 1] },
                o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] },
                t: 19,
                s: [125, 125, 100]
              },
              { t: 29, s: [100, 100, 100] }
            ],
            ix: 6
          }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0, 0],
                      [0.417, 0.28],
                      [0.192, 0.466],
                      [-0.099, 0.493],
                      [-0.357, 0.355],
                      [-0.493, 0.097],
                      [-0.465, -0.193],
                      [-0.279, -0.419],
                      [0, -0.503],
                      [0.478, -0.468],
                      [0.669, 2e-3]
                    ],
                    o: [
                      [-0.503, -2e-3],
                      [-0.418, -0.281],
                      [-0.191, -0.465],
                      [0.099, -0.493],
                      [0.356, -0.355],
                      [0.494, -0.098],
                      [0.464, 0.193],
                      [0.279, 0.418],
                      [-0.013, 0.668],
                      [-0.478, 0.467],
                      [0, 0]
                    ],
                    v: [
                      [0.027, 2.545],
                      [-1.384, 2.112],
                      [-2.318, 0.967],
                      [-2.459, -0.502],
                      [-1.76, -1.803],
                      [-0.457, -2.497],
                      [1.013, -2.351],
                      [2.153, -1.413],
                      [2.582, 0],
                      [1.816, 1.773],
                      [0.027, 2.499]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              {
                ind: 1,
                ty: "sh",
                ix: 2,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0.013, 0],
                      [0, 0],
                      [0.283, 0.496],
                      [0, 0],
                      [0.01, 0.024],
                      [0, 0.011],
                      [4e-3, 0.01],
                      [0, 0],
                      [0.028, 0],
                      [0.02, -0.018],
                      [0, 0],
                      [0.554, 0.148],
                      [0, 0],
                      [0.02, 0.019],
                      [0.027, 0],
                      [0, 0],
                      [0.02, -0.019],
                      [0, -0.027],
                      [0, 0],
                      [0.495, -0.29],
                      [0, 0],
                      [0.026, 0],
                      [0.019, -0.018],
                      [0, 0],
                      [7e-3, -0.012],
                      [0, -0.013],
                      [-6e-3, -0.012],
                      [-0.012, -8e-3],
                      [0, 0],
                      [0.151, -0.553],
                      [0, 0],
                      [0.019, -0.02],
                      [0, -0.027],
                      [0, 0],
                      [-0.019, -0.019],
                      [-0.027, 0],
                      [0, 0],
                      [-0.287, -0.496],
                      [0, 0],
                      [7e-3, -0.012],
                      [0, -0.014],
                      [-6e-3, -0.012],
                      [-0.012, -8e-3],
                      [0, 0],
                      [-0.026, 0],
                      [-0.018, 0.017],
                      [0, 0],
                      [-0.553, -0.148],
                      [0, 0],
                      [-0.019, -0.019],
                      [-0.027, 0],
                      [0, 0],
                      [-0.018, 0.019],
                      [0, 0.028],
                      [0, 0],
                      [-0.494, 0.288],
                      [0, 0],
                      [-0.027, 0],
                      [-0.021, 0.018],
                      [0, 0],
                      [0, 0.026],
                      [0.018, 0.019],
                      [0, 0],
                      [-0.148, 0.552],
                      [0, 0],
                      [-0.012, 5e-3],
                      [-8e-3, 9e-3],
                      [-4e-3, 0.013],
                      [1e-3, 0.013],
                      [0, 0],
                      [4e-3, 0.013],
                      [9e-3, 0.01],
                      [0.012, 6e-3]
                    ],
                    o: [
                      [0, 0],
                      [-0.148, -0.552],
                      [0, 0],
                      [0.01, -0.024],
                      [4e-3, -0.011],
                      [0, -0.011],
                      [0, 0],
                      [-0.021, -0.018],
                      [-0.027, 0],
                      [0, 0],
                      [-0.494, -0.29],
                      [0, 0],
                      [0, -0.027],
                      [-0.018, -0.019],
                      [0, 0],
                      [-0.027, 0],
                      [-0.019, 0.019],
                      [0, 0],
                      [-0.553, 0.148],
                      [0, 0],
                      [-0.018, -0.018],
                      [-0.026, 0],
                      [0, 0],
                      [-0.012, 7e-3],
                      [-6e-3, 0.012],
                      [0, 0.014],
                      [7e-3, 0.012],
                      [0, 0],
                      [-0.287, 0.495],
                      [0, 0],
                      [-0.027, 0],
                      [-0.019, 0.019],
                      [0, 0],
                      [0, 0.027],
                      [0.019, 0.019],
                      [0, 0],
                      [0.151, 0.552],
                      [0, 0],
                      [-0.012, 7e-3],
                      [-6e-3, 0.012],
                      [0, 0.014],
                      [7e-3, 0.012],
                      [0, 0],
                      [0.019, 0.017],
                      [0.026, 0],
                      [0, 0],
                      [0.495, 0.29],
                      [0, 0],
                      [0, 0.028],
                      [0.02, 0.019],
                      [0, 0],
                      [0.027, 0],
                      [0.02, -0.019],
                      [0, 0],
                      [0.553, -0.149],
                      [0, 0],
                      [0.02, 0.018],
                      [0.028, 0],
                      [0, 0],
                      [0.018, -0.019],
                      [0, -0.026],
                      [0, 0],
                      [0.283, -0.496],
                      [0, 0],
                      [0.013, 0],
                      [0.012, -5e-3],
                      [9e-3, -0.01],
                      [4e-3, -0.012],
                      [0, 0],
                      [1e-3, -0.013],
                      [-4e-3, -0.012],
                      [-8e-3, -0.01],
                      [-0.012, -5e-3]
                    ],
                    v: [
                      [8.387, -1.709],
                      [6.353, -1.709],
                      [5.703, -3.288],
                      [7.133, -4.719],
                      [7.133, -4.793],
                      [7.14, -4.826],
                      [7.133, -4.858],
                      [4.867, -7.134],
                      [4.792, -7.162],
                      [4.718, -7.134],
                      [3.287, -5.694],
                      [1.708, -6.354],
                      [1.708, -8.379],
                      [1.678, -8.451],
                      [1.606, -8.481],
                      [-1.599, -8.481],
                      [-1.671, -8.451],
                      [-1.701, -8.379],
                      [-1.701, -6.354],
                      [-3.28, -5.694],
                      [-4.72, -7.134],
                      [-4.789, -7.161],
                      [-4.859, -7.134],
                      [-7.125, -4.858],
                      [-7.153, -4.828],
                      [-7.163, -4.789],
                      [-7.153, -4.749],
                      [-7.125, -4.719],
                      [-5.695, -3.288],
                      [-6.354, -1.709],
                      [-8.379, -1.709],
                      [-8.452, -1.679],
                      [-8.481, -1.607],
                      [-8.481, 1.607],
                      [-8.452, 1.679],
                      [-8.379, 1.709],
                      [-6.354, 1.709],
                      [-5.695, 3.288],
                      [-7.125, 4.719],
                      [-7.153, 4.749],
                      [-7.163, 4.788],
                      [-7.153, 4.828],
                      [-7.125, 4.858],
                      [-4.859, 7.134],
                      [-4.789, 7.161],
                      [-4.72, 7.134],
                      [-3.28, 5.694],
                      [-1.701, 6.353],
                      [-1.701, 8.378],
                      [-1.671, 8.451],
                      [-1.599, 8.481],
                      [1.606, 8.481],
                      [1.678, 8.451],
                      [1.708, 8.378],
                      [1.708, 6.353],
                      [3.287, 5.694],
                      [4.718, 7.134],
                      [4.792, 7.162],
                      [4.867, 7.134],
                      [7.133, 4.858],
                      [7.161, 4.788],
                      [7.133, 4.719],
                      [5.703, 3.288],
                      [6.353, 1.709],
                      [8.387, 1.709],
                      [8.425, 1.701],
                      [8.456, 1.679],
                      [8.476, 1.645],
                      [8.48, 1.607],
                      [8.48, -1.607],
                      [8.476, -1.646],
                      [8.456, -1.679],
                      [8.425, -1.702]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 2",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              { ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: false },
              {
                ty: "fl",
                c: { a: 0, k: [0.878431432387, 0.89019613827, 0.960784373564, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [8.731, 8.731], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 4,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: -3,
        op: 136,
        st: 11,
        bm: 0
      },
      {
        ddd: 0,
        ind: 10,
        ty: 4,
        nm: "Layer 2 Outlines",
        parent: 14,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [53.838, 80.506, 0], ix: 2 },
          a: { a: 0, k: [14.578, 4.012, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    o: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    v: [
                      [-14.328, 3.762],
                      [14.328, 3.762],
                      [14.328, -3.762],
                      [-14.328, -3.762]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.878431432387, 0.89019613827, 0.960784373564, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [14.578, 4.012], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 0,
        op: 125,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 12,
        ty: 2,
        nm: "Layer 1",
        parent: 14,
        refId: "image_0",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [-139.621, 436.897, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        ip: 0,
        op: 125,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 14,
        ty: 3,
        nm: "RING",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [957.753, 540.007, 0], ix: 2 },
          a: { a: 0, k: [53.838, 53.838, 0], ix: 1 },
          s: { a: 0, k: [521, 521, 100], ix: 6 }
        },
        ao: 0,
        ip: 0,
        op: 125,
        st: 0,
        bm: 0
      }
    ]
  },
  {
    id: "comp_3",
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Shape Layer 20",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [1] }, o: { x: [0.333], y: [0] }, t: 29, s: [0] },
              { i: { x: [0.833], y: [1] }, o: { x: [0.167], y: [0] }, t: 34, s: [100] },
              { t: 39, s: [0] }
            ],
            ix: 11
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [1032, 618, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        hasMask: true,
        masksProperties: [
          {
            inv: false,
            mode: "a",
            pt: {
              a: 0,
              k: {
                i: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                o: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                v: [
                  [-90, -374],
                  [-88, -325],
                  [13, -307],
                  [25, -352]
                ],
                c: true
              },
              ix: 1
            },
            o: { a: 0, k: 100, ix: 3 },
            x: { a: 0, k: 0, ix: 4 },
            nm: "Mask 1"
          }
        ],
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [541.621, 541.621], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109803921569, 1, 0.752941176471, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 13, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                d: [
                  { n: "d", nm: "dash", v: { a: 0, k: 88, ix: 1 } },
                  { n: "g", nm: "gap", v: { a: 0, k: 18, ix: 2 } },
                  { n: "o", nm: "offset", v: { a: 0, k: 0, ix: 7 } }
                ],
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-75.189, -77.189], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 29,
        op: 40,
        st: -3,
        bm: 0
      },
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "Shape Layer 19",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [1] }, o: { x: [0.333], y: [0] }, t: 32, s: [0] },
              { i: { x: [0.833], y: [1] }, o: { x: [0.167], y: [0] }, t: 37, s: [100] },
              { t: 42, s: [0] }
            ],
            ix: 11
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [1032, 618, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        hasMask: true,
        masksProperties: [
          {
            inv: false,
            mode: "a",
            pt: {
              a: 0,
              k: {
                i: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                o: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                v: [
                  [28, -352],
                  [10, -308],
                  [83, -257],
                  [120, -290]
                ],
                c: true
              },
              ix: 1
            },
            o: { a: 0, k: 100, ix: 3 },
            x: { a: 0, k: 0, ix: 4 },
            nm: "Mask 1"
          }
        ],
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [541.621, 541.621], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109803921569, 1, 0.752941176471, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 13, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                d: [
                  { n: "d", nm: "dash", v: { a: 0, k: 88, ix: 1 } },
                  { n: "g", nm: "gap", v: { a: 0, k: 18, ix: 2 } },
                  { n: "o", nm: "offset", v: { a: 0, k: 0, ix: 7 } }
                ],
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-75.189, -77.189], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 32,
        op: 43,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "Shape Layer 18",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [1] }, o: { x: [0.333], y: [0] }, t: 35, s: [0] },
              { i: { x: [0.833], y: [1] }, o: { x: [0.167], y: [0] }, t: 40, s: [100] },
              { t: 45, s: [0] }
            ],
            ix: 11
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [1032, 618, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        hasMask: true,
        masksProperties: [
          {
            inv: false,
            mode: "a",
            pt: {
              a: 0,
              k: {
                i: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                o: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                v: [
                  [126, -290],
                  [96, -259],
                  [155, -183],
                  [190, -200]
                ],
                c: true
              },
              ix: 1
            },
            o: { a: 0, k: 100, ix: 3 },
            x: { a: 0, k: 0, ix: 4 },
            nm: "Mask 1"
          }
        ],
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [541.621, 541.621], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109803921569, 1, 0.752941176471, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 13, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                d: [
                  { n: "d", nm: "dash", v: { a: 0, k: 88, ix: 1 } },
                  { n: "g", nm: "gap", v: { a: 0, k: 18, ix: 2 } },
                  { n: "o", nm: "offset", v: { a: 0, k: 0, ix: 7 } }
                ],
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-75.189, -77.189], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 35,
        op: 46,
        st: 3,
        bm: 0
      },
      {
        ddd: 0,
        ind: 4,
        ty: 4,
        nm: "Shape Layer 17",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [1] }, o: { x: [0.333], y: [0] }, t: 38, s: [0] },
              { i: { x: [0.833], y: [1] }, o: { x: [0.167], y: [0] }, t: 43, s: [100] },
              { t: 48, s: [0] }
            ],
            ix: 11
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [1032, 618, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        hasMask: true,
        masksProperties: [
          {
            inv: false,
            mode: "a",
            pt: {
              a: 0,
              k: {
                i: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                o: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                v: [
                  [199, -202],
                  [150, -180],
                  [173, -87],
                  [217, -88]
                ],
                c: true
              },
              ix: 1
            },
            o: { a: 0, k: 100, ix: 3 },
            x: { a: 0, k: 0, ix: 4 },
            nm: "Mask 1"
          }
        ],
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [541.621, 541.621], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109803921569, 1, 0.752941176471, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 13, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                d: [
                  { n: "d", nm: "dash", v: { a: 0, k: 88, ix: 1 } },
                  { n: "g", nm: "gap", v: { a: 0, k: 18, ix: 2 } },
                  { n: "o", nm: "offset", v: { a: 0, k: 0, ix: 7 } }
                ],
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-75.189, -77.189], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 38,
        op: 49,
        st: 6,
        bm: 0
      },
      {
        ddd: 0,
        ind: 5,
        ty: 4,
        nm: "Shape Layer 16",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [1] }, o: { x: [0.333], y: [0] }, t: 41, s: [0] },
              { i: { x: [0.833], y: [1] }, o: { x: [0.167], y: [0] }, t: 46, s: [100] },
              { t: 51, s: [0] }
            ],
            ix: 11
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [1032, 618, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        hasMask: true,
        masksProperties: [
          {
            inv: false,
            mode: "a",
            pt: {
              a: 0,
              k: {
                i: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                o: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                v: [
                  [178, -88],
                  [158, 9],
                  [205, 26],
                  [221, -81]
                ],
                c: true
              },
              ix: 1
            },
            o: { a: 0, k: 100, ix: 3 },
            x: { a: 0, k: 0, ix: 4 },
            nm: "Mask 1"
          }
        ],
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [541.621, 541.621], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109803921569, 1, 0.752941176471, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 13, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                d: [
                  { n: "d", nm: "dash", v: { a: 0, k: 88, ix: 1 } },
                  { n: "g", nm: "gap", v: { a: 0, k: 18, ix: 2 } },
                  { n: "o", nm: "offset", v: { a: 0, k: 0, ix: 7 } }
                ],
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-75.189, -77.189], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 41,
        op: 52,
        st: 9,
        bm: 0
      },
      {
        ddd: 0,
        ind: 6,
        ty: 4,
        nm: "Shape Layer 15",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [1] }, o: { x: [0.333], y: [0] }, t: 44, s: [0] },
              { i: { x: [0.833], y: [1] }, o: { x: [0.167], y: [0] }, t: 49, s: [100] },
              { t: 54, s: [0] }
            ],
            ix: 11
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [1032, 618, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        hasMask: true,
        masksProperties: [
          {
            inv: false,
            mode: "a",
            pt: {
              a: 0,
              k: {
                i: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                o: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                v: [
                  [154, 0],
                  [108, 93],
                  [140, 117],
                  [201, 31]
                ],
                c: true
              },
              ix: 1
            },
            o: { a: 0, k: 100, ix: 3 },
            x: { a: 0, k: 0, ix: 4 },
            nm: "Mask 1"
          }
        ],
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [541.621, 541.621], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109803921569, 1, 0.752941176471, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 13, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                d: [
                  { n: "d", nm: "dash", v: { a: 0, k: 88, ix: 1 } },
                  { n: "g", nm: "gap", v: { a: 0, k: 18, ix: 2 } },
                  { n: "o", nm: "offset", v: { a: 0, k: 0, ix: 7 } }
                ],
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-75.189, -77.189], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 44,
        op: 55,
        st: 12,
        bm: 0
      },
      {
        ddd: 0,
        ind: 7,
        ty: 4,
        nm: "Shape Layer 14",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [1] }, o: { x: [0.333], y: [0] }, t: 47, s: [0] },
              { i: { x: [0.833], y: [1] }, o: { x: [0.167], y: [0] }, t: 52, s: [100] },
              { t: 57, s: [0] }
            ],
            ix: 11
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [1032, 618, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        hasMask: true,
        masksProperties: [
          {
            inv: false,
            mode: "a",
            pt: {
              a: 0,
              k: {
                i: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                o: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                v: [
                  [95, 82],
                  [29, 146],
                  [48, 188],
                  [146, 132]
                ],
                c: true
              },
              ix: 1
            },
            o: { a: 0, k: 100, ix: 3 },
            x: { a: 0, k: 0, ix: 4 },
            nm: "Mask 1"
          }
        ],
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [541.621, 541.621], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109803921569, 1, 0.752941176471, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 13, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                d: [
                  { n: "d", nm: "dash", v: { a: 0, k: 88, ix: 1 } },
                  { n: "g", nm: "gap", v: { a: 0, k: 18, ix: 2 } },
                  { n: "o", nm: "offset", v: { a: 0, k: 0, ix: 7 } }
                ],
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-75.189, -77.189], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 47,
        op: 58,
        st: 15,
        bm: 0
      },
      {
        ddd: 0,
        ind: 8,
        ty: 4,
        nm: "Shape Layer 13",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [1] }, o: { x: [0.333], y: [0] }, t: 50, s: [0] },
              { i: { x: [0.833], y: [1] }, o: { x: [0.167], y: [0] }, t: 55, s: [100] },
              { t: 60, s: [0] }
            ],
            ix: 11
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [1032, 618, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        hasMask: true,
        masksProperties: [
          {
            inv: false,
            mode: "a",
            pt: {
              a: 0,
              k: {
                i: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                o: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                v: [
                  [26, 133],
                  [-65, 174],
                  [-64, 213],
                  [52, 192]
                ],
                c: true
              },
              ix: 1
            },
            o: { a: 0, k: 100, ix: 3 },
            x: { a: 0, k: 0, ix: 4 },
            nm: "Mask 1"
          }
        ],
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [541.621, 541.621], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109803921569, 1, 0.752941176471, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 13, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                d: [
                  { n: "d", nm: "dash", v: { a: 0, k: 88, ix: 1 } },
                  { n: "g", nm: "gap", v: { a: 0, k: 18, ix: 2 } },
                  { n: "o", nm: "offset", v: { a: 0, k: 0, ix: 7 } }
                ],
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-75.189, -77.189], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 50,
        op: 61,
        st: 18,
        bm: 0
      },
      {
        ddd: 0,
        ind: 9,
        ty: 4,
        nm: "Shape Layer 12",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [1] }, o: { x: [0.333], y: [0] }, t: 53, s: [0] },
              { i: { x: [0.833], y: [1] }, o: { x: [0.167], y: [0] }, t: 58, s: [100] },
              { t: 63, s: [0] }
            ],
            ix: 11
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [1032, 618, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        hasMask: true,
        masksProperties: [
          {
            inv: false,
            mode: "a",
            pt: {
              a: 0,
              k: {
                i: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                o: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                v: [
                  [-63, 156],
                  [-166, 158],
                  [-167, 213],
                  [-64, 214]
                ],
                c: true
              },
              ix: 1
            },
            o: { a: 0, k: 100, ix: 3 },
            x: { a: 0, k: 0, ix: 4 },
            nm: "Mask 1"
          }
        ],
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [541.621, 541.621], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109803921569, 1, 0.752941176471, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 13, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                d: [
                  { n: "d", nm: "dash", v: { a: 0, k: 88, ix: 1 } },
                  { n: "g", nm: "gap", v: { a: 0, k: 18, ix: 2 } },
                  { n: "o", nm: "offset", v: { a: 0, k: 0, ix: 7 } }
                ],
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-75.189, -77.189], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 53,
        op: 64,
        st: 21,
        bm: 0
      },
      {
        ddd: 0,
        ind: 10,
        ty: 4,
        nm: "Shape Layer 11",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [1] }, o: { x: [0.333], y: [0] }, t: 56, s: [0] },
              { i: { x: [0.833], y: [1] }, o: { x: [0.167], y: [0] }, t: 61, s: [100] },
              { t: 66, s: [0] }
            ],
            ix: 11
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [1032, 618, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        hasMask: true,
        masksProperties: [
          {
            inv: false,
            mode: "a",
            pt: {
              a: 0,
              k: {
                i: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                o: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                v: [
                  [-240, 107],
                  [-275, 134],
                  [-178, 204],
                  [-162, 153]
                ],
                c: true
              },
              ix: 1
            },
            o: { a: 0, k: 100, ix: 3 },
            x: { a: 0, k: 0, ix: 4 },
            nm: "Mask 1"
          }
        ],
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [541.621, 541.621], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109803921569, 1, 0.752941176471, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 13, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                d: [
                  { n: "d", nm: "dash", v: { a: 0, k: 88, ix: 1 } },
                  { n: "g", nm: "gap", v: { a: 0, k: 18, ix: 2 } },
                  { n: "o", nm: "offset", v: { a: 0, k: 0, ix: 7 } }
                ],
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-75.189, -77.189], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 56,
        op: 67,
        st: 24,
        bm: 0
      },
      {
        ddd: 0,
        ind: 11,
        ty: 4,
        nm: "Shape Layer 10",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [1] }, o: { x: [0.333], y: [0] }, t: 59, s: [0] },
              { i: { x: [0.833], y: [1] }, o: { x: [0.167], y: [0] }, t: 64, s: [100] },
              { t: 69, s: [0] }
            ],
            ix: 11
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [1032, 618, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        hasMask: true,
        masksProperties: [
          {
            inv: false,
            mode: "a",
            pt: {
              a: 0,
              k: {
                i: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                o: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                v: [
                  [-303, 31],
                  [-347, 47],
                  [-281, 147],
                  [-235, 98]
                ],
                c: true
              },
              ix: 1
            },
            o: { a: 0, k: 100, ix: 3 },
            x: { a: 0, k: 0, ix: 4 },
            nm: "Mask 1"
          }
        ],
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [541.621, 541.621], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109803921569, 1, 0.752941176471, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 13, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                d: [
                  { n: "d", nm: "dash", v: { a: 0, k: 88, ix: 1 } },
                  { n: "g", nm: "gap", v: { a: 0, k: 18, ix: 2 } },
                  { n: "o", nm: "offset", v: { a: 0, k: 0, ix: 7 } }
                ],
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-75.189, -77.189], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 59,
        op: 70,
        st: 27,
        bm: 0
      },
      {
        ddd: 0,
        ind: 12,
        ty: 4,
        nm: "Shape Layer 9",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [1] }, o: { x: [0.333], y: [0] }, t: 62, s: [0] },
              { i: { x: [0.833], y: [1] }, o: { x: [0.167], y: [0] }, t: 67, s: [100] },
              { t: 72, s: [0] }
            ],
            ix: 11
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [1032, 618, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        hasMask: true,
        masksProperties: [
          {
            inv: false,
            mode: "a",
            pt: {
              a: 0,
              k: {
                i: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                o: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                v: [
                  [-325, -63],
                  [-367, -63],
                  [-353, 52],
                  [-303, 33]
                ],
                c: true
              },
              ix: 1
            },
            o: { a: 0, k: 100, ix: 3 },
            x: { a: 0, k: 0, ix: 4 },
            nm: "Mask 1"
          }
        ],
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [541.621, 541.621], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109803921569, 1, 0.752941176471, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 13, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                d: [
                  { n: "d", nm: "dash", v: { a: 0, k: 88, ix: 1 } },
                  { n: "g", nm: "gap", v: { a: 0, k: 18, ix: 2 } },
                  { n: "o", nm: "offset", v: { a: 0, k: 0, ix: 7 } }
                ],
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-75.189, -77.189], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 62,
        op: 73,
        st: 30,
        bm: 0
      },
      {
        ddd: 0,
        ind: 13,
        ty: 4,
        nm: "Shape Layer 8",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [1] }, o: { x: [0.333], y: [0] }, t: 65, s: [0] },
              { i: { x: [0.833], y: [1] }, o: { x: [0.167], y: [0] }, t: 70, s: [100] },
              { t: 75, s: [0] }
            ],
            ix: 11
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [1032, 618, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        hasMask: true,
        masksProperties: [
          {
            inv: false,
            mode: "a",
            pt: {
              a: 0,
              k: {
                i: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                o: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                v: [
                  [-353, -175],
                  [-380, -61],
                  [-320, -64],
                  [-308, -154]
                ],
                c: true
              },
              ix: 1
            },
            o: { a: 0, k: 100, ix: 3 },
            x: { a: 0, k: 0, ix: 4 },
            nm: "Mask 1"
          }
        ],
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [541.621, 541.621], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109803921569, 1, 0.752941176471, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 13, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                d: [
                  { n: "d", nm: "dash", v: { a: 0, k: 88, ix: 1 } },
                  { n: "g", nm: "gap", v: { a: 0, k: 18, ix: 2 } },
                  { n: "o", nm: "offset", v: { a: 0, k: 0, ix: 7 } }
                ],
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-75.189, -77.189], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 65,
        op: 76,
        st: 33,
        bm: 0
      },
      {
        ddd: 0,
        ind: 14,
        ty: 4,
        nm: "Shape Layer 7",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [1] }, o: { x: [0.333], y: [0] }, t: 68, s: [0] },
              { i: { x: [0.833], y: [1] }, o: { x: [0.167], y: [0] }, t: 73, s: [100] },
              { t: 78, s: [0] }
            ],
            ix: 11
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [1032, 618, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        hasMask: true,
        masksProperties: [
          {
            inv: false,
            mode: "a",
            pt: {
              a: 0,
              k: {
                i: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                o: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                v: [
                  [-291, -271],
                  [-364, -184],
                  [-311, -156],
                  [-244, -223]
                ],
                c: true
              },
              ix: 1
            },
            o: { a: 0, k: 100, ix: 3 },
            x: { a: 0, k: 0, ix: 4 },
            nm: "Mask 1"
          }
        ],
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [541.621, 541.621], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109803921569, 1, 0.752941176471, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 13, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                d: [
                  { n: "d", nm: "dash", v: { a: 0, k: 88, ix: 1 } },
                  { n: "g", nm: "gap", v: { a: 0, k: 18, ix: 2 } },
                  { n: "o", nm: "offset", v: { a: 0, k: 0, ix: 7 } }
                ],
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-75.189, -77.189], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 68,
        op: 79,
        st: 36,
        bm: 0
      },
      {
        ddd: 0,
        ind: 15,
        ty: 4,
        nm: "Shape Layer 6",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [1] }, o: { x: [0.333], y: [0] }, t: 71, s: [0] },
              { i: { x: [0.833], y: [1] }, o: { x: [0.167], y: [0] }, t: 76, s: [100] },
              { t: 81, s: [0] }
            ],
            ix: 11
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [1032, 618, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        hasMask: true,
        masksProperties: [
          {
            inv: false,
            mode: "a",
            pt: {
              a: 0,
              k: {
                i: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                o: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                v: [
                  [-205, -339],
                  [-294, -285],
                  [-256, -239],
                  [-184, -300]
                ],
                c: true
              },
              ix: 1
            },
            o: { a: 0, k: 100, ix: 3 },
            x: { a: 0, k: 0, ix: 4 },
            nm: "Mask 1"
          }
        ],
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [541.621, 541.621], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109803921569, 1, 0.752941176471, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 13, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                d: [
                  { n: "d", nm: "dash", v: { a: 0, k: 88, ix: 1 } },
                  { n: "g", nm: "gap", v: { a: 0, k: 18, ix: 2 } },
                  { n: "o", nm: "offset", v: { a: 0, k: 0, ix: 7 } }
                ],
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-75.189, -77.189], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 71,
        op: 82,
        st: 39,
        bm: 0
      },
      {
        ddd: 0,
        ind: 16,
        ty: 4,
        nm: "Shape Layer 5",
        sr: 1,
        ks: {
          o: {
            a: 1,
            k: [
              { i: { x: [0.833], y: [1] }, o: { x: [0.333], y: [0] }, t: 74, s: [0] },
              { i: { x: [0.833], y: [1] }, o: { x: [0.167], y: [0] }, t: 79, s: [100] },
              { t: 84, s: [0] }
            ],
            ix: 11
          },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [1032, 618, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        hasMask: true,
        masksProperties: [
          {
            inv: false,
            mode: "a",
            pt: {
              a: 0,
              k: {
                i: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                o: [
                  [0, 0],
                  [0, 0],
                  [0, 0],
                  [0, 0]
                ],
                v: [
                  [-93, -369],
                  [-203, -351],
                  [-186, -303],
                  [-91, -324]
                ],
                c: true
              },
              ix: 1
            },
            o: { a: 0, k: 100, ix: 3 },
            x: { a: 0, k: 0, ix: 4 },
            nm: "Mask 1"
          }
        ],
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [541.621, 541.621], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109803921569, 1, 0.752941176471, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 13, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                d: [
                  { n: "d", nm: "dash", v: { a: 0, k: 88, ix: 1 } },
                  { n: "g", nm: "gap", v: { a: 0, k: 18, ix: 2 } },
                  { n: "o", nm: "offset", v: { a: 0, k: 0, ix: 7 } }
                ],
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-75.189, -77.189], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 74,
        op: 85,
        st: 42,
        bm: 0
      }
    ]
  },
  {
    id: "comp_4",
    layers: [
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "E1",
        parent: 19,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 720, ix: 10 },
          p: { a: 0, k: [53.847, 50.15, 0], ix: 2 },
          a: { a: 0, k: [14.578, 20.268, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    o: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    v: [
                      [-14.328, 20.018],
                      [-14.328, -20.018],
                      [-1.14, -20.004],
                      [-1.14, -9.99],
                      [-1.165, -10.004],
                      [-1.165, -5.062],
                      [-1.165, 4.552],
                      [-1.165, 10.051],
                      [-1.123, 10.063],
                      [-1.123, 20.03]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.878431432387, 0.89019613827, 0.960784373564, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [14.578, 20.268], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 27,
        op: 168,
        st: -78,
        bm: 0
      },
      {
        ddd: 0,
        ind: 4,
        ty: 4,
        nm: "E2",
        parent: 19,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 720, ix: 10 },
          p: {
            a: 1,
            k: [
              {
                i: { x: 0.151, y: 1 },
                o: { x: 0.333, y: 0 },
                t: -78,
                s: [53.847, 50.15, 0],
                to: [-1.28, 0, 0],
                ti: [0, 0, 0]
              },
              {
                i: { x: 0.227, y: 1 },
                o: { x: 0.333, y: 0 },
                t: -62,
                s: [46.17, 50.15, 0],
                to: [0, 0, 0],
                ti: [-1.28, 0, 0]
              },
              {
                i: { x: 0.227, y: 0.227 },
                o: { x: 0.167, y: 0.167 },
                t: -42,
                s: [53.847, 50.15, 0],
                to: [0, 0, 0],
                ti: [0, 0, 0]
              },
              {
                i: { x: 0.227, y: 1 },
                o: { x: 0.167, y: 0 },
                t: 66,
                s: [53.847, 50.15, 0],
                to: [-1.28, 0, 0],
                ti: [1.28, 0, 0]
              },
              {
                i: { x: 0.227, y: 0.227 },
                o: { x: 0.167, y: 0.167 },
                t: 79,
                s: [46.17, 50.15, 0],
                to: [0, 0, 0],
                ti: [0, 0, 0]
              },
              {
                i: { x: 0.227, y: 1 },
                o: { x: 0.167, y: 0 },
                t: 83,
                s: [46.17, 50.15, 0],
                to: [1.28, 0, 0],
                ti: [-1.28, 0, 0]
              },
              {
                i: { x: 0.227, y: 0.227 },
                o: { x: 0.167, y: 0.167 },
                t: 99,
                s: [53.847, 50.15, 0],
                to: [0, 0, 0],
                ti: [0, 0, 0]
              },
              { t: 108, s: [53.847, 50.15, 0] }
            ],
            ix: 2
          },
          a: { a: 0, k: [14.578, 20.268, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    o: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    v: [
                      [-14.289, -10.116],
                      [-14.328, -20.018],
                      [5.29, -20.018],
                      [5.29, -10.004],
                      [-1.165, -10.004]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.878431432387, 0.89019613827, 0.960784373564, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [14.578, 20.268], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 27,
        op: 171,
        st: -78,
        bm: 0
      },
      {
        ddd: 0,
        ind: 5,
        ty: 4,
        nm: "ALPHA 2",
        td: 1,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [972, 540, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [214.468, 345.975], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                r: { a: 0, k: 0, ix: 4 },
                nm: "Rectangle Path 1",
                mn: "ADBE Vector Shape - Rect",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109802246094, 1, 0.7529296875, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 0, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "fl",
                c: { a: 0, k: [1, 0, 0, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-186.766, -16.013], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Rectangle 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 27,
        op: 158,
        st: -78,
        bm: 0
      },
      {
        ddd: 0,
        ind: 6,
        ty: 4,
        nm: "E 3",
        parent: 19,
        tt: 2,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 720, ix: 10 },
          p: {
            a: 1,
            k: [
              {
                i: { x: 0.105, y: 1 },
                o: { x: 0.333, y: 0 },
                t: -39,
                s: [36.573, 50.15, 0],
                to: [2.879, 0, 0],
                ti: [-2.879, 0, 0]
              },
              {
                i: { x: 0.125, y: 0.125 },
                o: { x: 0.333, y: 0.333 },
                t: -17,
                s: [53.847, 50.15, 0],
                to: [0, 0, 0],
                ti: [0, 0, 0]
              },
              {
                i: { x: 0.089, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 51,
                s: [53.847, 50.15, 0],
                to: [-2.879, 0, 0],
                ti: [2.879, 0, 0]
              },
              {
                i: { x: 0.089, y: 0.089 },
                o: { x: 0.167, y: 0.167 },
                t: 67,
                s: [36.573, 50.15, 0],
                to: [0, 0, 0],
                ti: [0, 0, 0]
              },
              {
                i: { x: 0.125, y: 1 },
                o: { x: 0.167, y: 0 },
                t: 109,
                s: [36.573, 50.15, 0],
                to: [2.879, 0, 0],
                ti: [-2.879, 0, 0]
              },
              { t: 122, s: [53.847, 50.15, 0] }
            ],
            ix: 2
          },
          a: { a: 0, k: [14.578, 20.268, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    o: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    v: [
                      [-14.308, 4.519],
                      [-14.289, -4.855],
                      [-1.165, -5.062],
                      [14.328, -5.062],
                      [14.328, 4.552],
                      [-1.159, 4.648],
                      [-1.207, 4.629]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.878431432387, 0.89019613827, 0.960784373564, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [14.578, 20.268], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 27,
        op: 159,
        st: -78,
        bm: 0
      },
      {
        ddd: 0,
        ind: 7,
        ty: 4,
        nm: "Shape Layer 5",
        td: 1,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [1010, 648, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [340.769, 468.465], ix: 2 },
                p: { a: 0, k: [15, 0], ix: 3 },
                r: { a: 0, k: 0, ix: 4 },
                nm: "Rectangle Path 1",
                mn: "ADBE Vector Shape - Rect",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109802246094, 1, 0.7529296875, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 0, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "fl",
                c: { a: 0, k: [1, 0, 0, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-298.616, -89.767], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Rectangle 2",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          },
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [201, 262.833], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                r: { a: 0, k: 0, ix: 4 },
                nm: "Rectangle Path 1",
                mn: "ADBE Vector Shape - Rect",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109802246094, 1, 0.7529296875, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 0, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "fl",
                c: { a: 0, k: [1, 0, 0, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [173.5, 36.417], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Rectangle 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 2,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 129,
        op: 160,
        st: -78,
        bm: 0
      },
      {
        ddd: 0,
        ind: 8,
        ty: 4,
        nm: "E8",
        tt: 2,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 720, ix: 10 },
          p: {
            a: 1,
            k: [
              {
                i: { x: 0.129, y: 1 },
                o: { x: 0.333, y: 0 },
                t: -17,
                s: [1168.101, 520.791, 0],
                to: [-35.05, 0, 0],
                ti: [35.05, 0, 0]
              },
              {
                i: { x: 0.129, y: 0.129 },
                o: { x: 0.333, y: 0.333 },
                t: 0,
                s: [957.801, 520.791, 0],
                to: [0, 0, 0],
                ti: [0, 0, 0]
              },
              {
                i: { x: 0, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 35,
                s: [957.801, 520.791, 0],
                to: [-14, 0, 0],
                ti: [-33.667, 0, 0]
              },
              {
                i: { x: 0, y: 1 },
                o: { x: 0.167, y: 0 },
                t: 49,
                s: [873.801, 520.791, 0],
                to: [33.667, 0, 0],
                ti: [-14, 0, 0]
              },
              {
                i: { x: 0.129, y: 1 },
                o: { x: 0.167, y: 0 },
                t: 129,
                s: [1159.801, 520.791, 0],
                to: [14, 0, 0],
                ti: [33.667, 0, 0]
              },
              { t: 140, s: [957.801, 520.791, 0] }
            ],
            ix: 2
          },
          a: { a: 0, k: [14.578, 20.268, 0], ix: 1 },
          s: { a: 0, k: [521, 521, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    o: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    v: [
                      [-14.328, 20.018],
                      [-14.289, 10.116],
                      [-1.207, 10.054],
                      [-1.165, 10.051],
                      [14.328, 10.051],
                      [14.328, 20.018]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.878431432387, 0.89019613827, 0.960784373564, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [14.578, 20.268], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 129,
        op: 159,
        st: -78,
        bm: 0
      },
      {
        ddd: 0,
        ind: 9,
        ty: 4,
        nm: "Shape Layer 3",
        td: 1,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [1010, 648, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [340.769, 468.465], ix: 2 },
                p: { a: 0, k: [15, 0], ix: 3 },
                r: { a: 0, k: 0, ix: 4 },
                nm: "Rectangle Path 1",
                mn: "ADBE Vector Shape - Rect",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109802246094, 1, 0.7529296875, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 0, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "fl",
                c: { a: 0, k: [1, 0, 0, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-298.616, -89.767], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Rectangle 2",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          },
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [201, 262.833], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                r: { a: 0, k: 0, ix: 4 },
                nm: "Rectangle Path 1",
                mn: "ADBE Vector Shape - Rect",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109802246094, 1, 0.7529296875, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 0, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "fl",
                c: { a: 0, k: [1, 0, 0, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [173.5, 36.417], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Rectangle 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 2,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 27,
        op: 129,
        st: -78,
        bm: 0
      },
      {
        ddd: 0,
        ind: 10,
        ty: 4,
        nm: "E4",
        tt: 2,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 720, ix: 10 },
          p: {
            a: 1,
            k: [
              {
                i: { x: 0.129, y: 1 },
                o: { x: 0.333, y: 0 },
                t: -17,
                s: [1168.101, 520.791, 0],
                to: [-35.05, 0, 0],
                ti: [35.05, 0, 0]
              },
              {
                i: { x: 0.129, y: 0.129 },
                o: { x: 0.333, y: 0.333 },
                t: 0,
                s: [957.801, 520.791, 0],
                to: [0, 0, 0],
                ti: [0, 0, 0]
              },
              {
                i: { x: 0, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 35,
                s: [957.801, 520.791, 0],
                to: [-14, 0, 0],
                ti: [14, 0, 0]
              },
              {
                i: { x: 0, y: 0 },
                o: { x: 0.167, y: 0.167 },
                t: 49,
                s: [873.801, 520.791, 0],
                to: [0, 0, 0],
                ti: [0, 0, 0]
              },
              {
                i: { x: 0.129, y: 1 },
                o: { x: 0.167, y: 0 },
                t: 129,
                s: [873.801, 520.791, 0],
                to: [14, 0, 0],
                ti: [-14, 0, 0]
              },
              { t: 140, s: [957.801, 520.791, 0] }
            ],
            ix: 2
          },
          a: { a: 0, k: [14.578, 20.268, 0], ix: 1 },
          s: { a: 0, k: [521, 521, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    o: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    v: [
                      [-14.328, 20.018],
                      [-14.289, 10.116],
                      [-1.207, 10.054],
                      [-1.165, 10.051],
                      [14.328, 10.051],
                      [14.328, 20.018]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.878431432387, 0.89019613827, 0.960784373564, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [14.578, 20.268], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 27,
        op: 129,
        st: -78,
        bm: 0
      },
      {
        ddd: 0,
        ind: 11,
        ty: 4,
        nm: "GEAR Outlines",
        parent: 19,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: {
            a: 1,
            k: [
              { i: { x: [0.151], y: [1] }, o: { x: [0.333], y: [0] }, t: -78, s: [0] },
              { i: { x: [0.227], y: [1] }, o: { x: [0.333], y: [0] }, t: -62, s: [-90] },
              { i: { x: [0.667], y: [1] }, o: { x: [0.167], y: [0] }, t: -42, s: [0] },
              { i: { x: [0.105], y: [1] }, o: { x: [0.333], y: [0] }, t: -39, s: [0] },
              { i: { x: [0.296], y: [1] }, o: { x: [0.333], y: [0] }, t: -17, s: [180] },
              { i: { x: [0.833], y: [1] }, o: { x: [0.167], y: [0] }, t: 0, s: [0] },
              { i: { x: [0.095], y: [1] }, o: { x: [0.167], y: [0] }, t: 35, s: [0] },
              { i: { x: [0], y: [1] }, o: { x: [0.167], y: [0] }, t: 49, s: [-90] },
              { i: { x: [0.065], y: [1] }, o: { x: [0.167], y: [0] }, t: 66, s: [-180] },
              { i: { x: [0.065], y: [1] }, o: { x: [0.167], y: [0] }, t: 79, s: [-250] },
              { i: { x: [0], y: [1] }, o: { x: [0.167], y: [0] }, t: 83, s: [-250] },
              { i: { x: [0.833], y: [1] }, o: { x: [0.167], y: [0] }, t: 99, s: [-180] },
              { i: { x: [0.095], y: [1] }, o: { x: [0.167], y: [0] }, t: 109, s: [-180] },
              { i: { x: [0.833], y: [1] }, o: { x: [0.167], y: [0] }, t: 122, s: [-90] },
              { i: { x: [0.833], y: [1] }, o: { x: [0.167], y: [0] }, t: 129, s: [-90] },
              { t: 140, s: [0] }
            ],
            ix: 10
          },
          p: {
            a: 1,
            k: [
              {
                i: { x: 0.151, y: 1 },
                o: { x: 0.333, y: 0 },
                t: -78,
                s: [70.619, 31.934, 0],
                to: [-1.28, 0, 0],
                ti: [0, 0, 0]
              },
              {
                i: { x: 0.227, y: 1 },
                o: { x: 0.333, y: 0 },
                t: -62,
                s: [62.942, 31.934, 0],
                to: [0, 0, 0],
                ti: [-1.28, 0, 0]
              },
              {
                i: { x: 0.227, y: 0.227 },
                o: { x: 0.167, y: 0.167 },
                t: -42,
                s: [70.619, 31.934, 0],
                to: [0, 0, 0],
                ti: [0, 0, 0]
              },
              {
                i: { x: 0.227, y: 1 },
                o: { x: 0.167, y: 0 },
                t: 66,
                s: [70.619, 31.934, 0],
                to: [-1.28, 0, 0],
                ti: [1.28, 0, 0]
              },
              {
                i: { x: 0.227, y: 0.227 },
                o: { x: 0.167, y: 0.167 },
                t: 79,
                s: [62.942, 31.934, 0],
                to: [0, 0, 0],
                ti: [0, 0, 0]
              },
              {
                i: { x: 0.227, y: 1 },
                o: { x: 0.167, y: 0 },
                t: 83,
                s: [62.942, 31.934, 0],
                to: [1.28, 0, 0],
                ti: [-1.28, 0, 0]
              },
              {
                i: { x: 0.227, y: 0.227 },
                o: { x: 0.167, y: 0.167 },
                t: 99,
                s: [70.619, 31.934, 0],
                to: [0, 0, 0],
                ti: [0, 0, 0]
              },
              { t: 109, s: [70.619, 31.934, 0] }
            ],
            ix: 2
          },
          a: { a: 0, k: [8.731, 8.731, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0, 0],
                      [0.417, 0.28],
                      [0.192, 0.466],
                      [-0.099, 0.493],
                      [-0.357, 0.355],
                      [-0.493, 0.097],
                      [-0.465, -0.193],
                      [-0.279, -0.419],
                      [0, -0.503],
                      [0.478, -0.468],
                      [0.669, 2e-3]
                    ],
                    o: [
                      [-0.503, -2e-3],
                      [-0.418, -0.281],
                      [-0.191, -0.465],
                      [0.099, -0.493],
                      [0.356, -0.355],
                      [0.494, -0.098],
                      [0.464, 0.193],
                      [0.279, 0.418],
                      [-0.013, 0.668],
                      [-0.478, 0.467],
                      [0, 0]
                    ],
                    v: [
                      [0.027, 2.545],
                      [-1.384, 2.112],
                      [-2.318, 0.967],
                      [-2.459, -0.502],
                      [-1.76, -1.803],
                      [-0.457, -2.497],
                      [1.013, -2.351],
                      [2.153, -1.413],
                      [2.582, 0],
                      [1.816, 1.773],
                      [0.027, 2.499]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              {
                ind: 1,
                ty: "sh",
                ix: 2,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0.013, 0],
                      [0, 0],
                      [0.283, 0.496],
                      [0, 0],
                      [0.01, 0.024],
                      [0, 0.011],
                      [4e-3, 0.01],
                      [0, 0],
                      [0.028, 0],
                      [0.02, -0.018],
                      [0, 0],
                      [0.554, 0.148],
                      [0, 0],
                      [0.02, 0.019],
                      [0.027, 0],
                      [0, 0],
                      [0.02, -0.019],
                      [0, -0.027],
                      [0, 0],
                      [0.495, -0.29],
                      [0, 0],
                      [0.026, 0],
                      [0.019, -0.018],
                      [0, 0],
                      [7e-3, -0.012],
                      [0, -0.013],
                      [-6e-3, -0.012],
                      [-0.012, -8e-3],
                      [0, 0],
                      [0.151, -0.553],
                      [0, 0],
                      [0.019, -0.02],
                      [0, -0.027],
                      [0, 0],
                      [-0.019, -0.019],
                      [-0.027, 0],
                      [0, 0],
                      [-0.287, -0.496],
                      [0, 0],
                      [7e-3, -0.012],
                      [0, -0.014],
                      [-6e-3, -0.012],
                      [-0.012, -8e-3],
                      [0, 0],
                      [-0.026, 0],
                      [-0.018, 0.017],
                      [0, 0],
                      [-0.553, -0.148],
                      [0, 0],
                      [-0.019, -0.019],
                      [-0.027, 0],
                      [0, 0],
                      [-0.018, 0.019],
                      [0, 0.028],
                      [0, 0],
                      [-0.494, 0.288],
                      [0, 0],
                      [-0.027, 0],
                      [-0.021, 0.018],
                      [0, 0],
                      [0, 0.026],
                      [0.018, 0.019],
                      [0, 0],
                      [-0.148, 0.552],
                      [0, 0],
                      [-0.012, 5e-3],
                      [-8e-3, 9e-3],
                      [-4e-3, 0.013],
                      [1e-3, 0.013],
                      [0, 0],
                      [4e-3, 0.013],
                      [9e-3, 0.01],
                      [0.012, 6e-3]
                    ],
                    o: [
                      [0, 0],
                      [-0.148, -0.552],
                      [0, 0],
                      [0.01, -0.024],
                      [4e-3, -0.011],
                      [0, -0.011],
                      [0, 0],
                      [-0.021, -0.018],
                      [-0.027, 0],
                      [0, 0],
                      [-0.494, -0.29],
                      [0, 0],
                      [0, -0.027],
                      [-0.018, -0.019],
                      [0, 0],
                      [-0.027, 0],
                      [-0.019, 0.019],
                      [0, 0],
                      [-0.553, 0.148],
                      [0, 0],
                      [-0.018, -0.018],
                      [-0.026, 0],
                      [0, 0],
                      [-0.012, 7e-3],
                      [-6e-3, 0.012],
                      [0, 0.014],
                      [7e-3, 0.012],
                      [0, 0],
                      [-0.287, 0.495],
                      [0, 0],
                      [-0.027, 0],
                      [-0.019, 0.019],
                      [0, 0],
                      [0, 0.027],
                      [0.019, 0.019],
                      [0, 0],
                      [0.151, 0.552],
                      [0, 0],
                      [-0.012, 7e-3],
                      [-6e-3, 0.012],
                      [0, 0.014],
                      [7e-3, 0.012],
                      [0, 0],
                      [0.019, 0.017],
                      [0.026, 0],
                      [0, 0],
                      [0.495, 0.29],
                      [0, 0],
                      [0, 0.028],
                      [0.02, 0.019],
                      [0, 0],
                      [0.027, 0],
                      [0.02, -0.019],
                      [0, 0],
                      [0.553, -0.149],
                      [0, 0],
                      [0.02, 0.018],
                      [0.028, 0],
                      [0, 0],
                      [0.018, -0.019],
                      [0, -0.026],
                      [0, 0],
                      [0.283, -0.496],
                      [0, 0],
                      [0.013, 0],
                      [0.012, -5e-3],
                      [9e-3, -0.01],
                      [4e-3, -0.012],
                      [0, 0],
                      [1e-3, -0.013],
                      [-4e-3, -0.012],
                      [-8e-3, -0.01],
                      [-0.012, -5e-3]
                    ],
                    v: [
                      [8.387, -1.709],
                      [6.353, -1.709],
                      [5.703, -3.288],
                      [7.133, -4.719],
                      [7.133, -4.793],
                      [7.14, -4.826],
                      [7.133, -4.858],
                      [4.867, -7.134],
                      [4.792, -7.162],
                      [4.718, -7.134],
                      [3.287, -5.694],
                      [1.708, -6.354],
                      [1.708, -8.379],
                      [1.678, -8.451],
                      [1.606, -8.481],
                      [-1.599, -8.481],
                      [-1.671, -8.451],
                      [-1.701, -8.379],
                      [-1.701, -6.354],
                      [-3.28, -5.694],
                      [-4.72, -7.134],
                      [-4.789, -7.161],
                      [-4.859, -7.134],
                      [-7.125, -4.858],
                      [-7.153, -4.828],
                      [-7.163, -4.789],
                      [-7.153, -4.749],
                      [-7.125, -4.719],
                      [-5.695, -3.288],
                      [-6.354, -1.709],
                      [-8.379, -1.709],
                      [-8.452, -1.679],
                      [-8.481, -1.607],
                      [-8.481, 1.607],
                      [-8.452, 1.679],
                      [-8.379, 1.709],
                      [-6.354, 1.709],
                      [-5.695, 3.288],
                      [-7.125, 4.719],
                      [-7.153, 4.749],
                      [-7.163, 4.788],
                      [-7.153, 4.828],
                      [-7.125, 4.858],
                      [-4.859, 7.134],
                      [-4.789, 7.161],
                      [-4.72, 7.134],
                      [-3.28, 5.694],
                      [-1.701, 6.353],
                      [-1.701, 8.378],
                      [-1.671, 8.451],
                      [-1.599, 8.481],
                      [1.606, 8.481],
                      [1.678, 8.451],
                      [1.708, 8.378],
                      [1.708, 6.353],
                      [3.287, 5.694],
                      [4.718, 7.134],
                      [4.792, 7.162],
                      [4.867, 7.134],
                      [7.133, 4.858],
                      [7.161, 4.788],
                      [7.133, 4.719],
                      [5.703, 3.288],
                      [6.353, 1.709],
                      [8.387, 1.709],
                      [8.425, 1.701],
                      [8.456, 1.679],
                      [8.476, 1.645],
                      [8.48, 1.607],
                      [8.48, -1.607],
                      [8.476, -1.646],
                      [8.456, -1.679],
                      [8.425, -1.702]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 2",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              { ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: false },
              {
                ty: "fl",
                c: { a: 0, k: [0.878431432387, 0.89019613827, 0.960784373564, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [8.731, 8.731], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 4,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 27,
        op: 160,
        st: -67,
        bm: 0
      },
      {
        ddd: 0,
        ind: 13,
        ty: 4,
        nm: "ALPHA MATTE",
        td: 1,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [960, 540, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [205, 465.184], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                r: { a: 0, k: 0, ix: 4 },
                nm: "Rectangle Path 1",
                mn: "ADBE Vector Shape - Rect",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109802246094, 1, 0.7529296875, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 0, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "fl",
                c: { a: 0, k: [1, 0, 0, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [175.5, 15.592], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Rectangle 2",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          },
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [258, 430.762], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                r: { a: 0, k: 0, ix: 4 },
                nm: "Rectangle Path 1",
                mn: "ADBE Vector Shape - Rect",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109802246094, 1, 0.7529296875, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 0, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "fl",
                c: { a: 0, k: [1, 0, 0, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-206, -8.619], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Rectangle 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 2,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 27,
        op: 200,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 14,
        ty: 4,
        nm: "UNDERLINE Outlines",
        parent: 19,
        tt: 2,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: {
            a: 1,
            k: [
              {
                i: { x: 0.132, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 35,
                s: [53.838, 80.506, 0],
                to: [-1.599, 0, 0],
                ti: [3.199, 0, 0]
              },
              {
                i: { x: 0.199, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 49,
                s: [44.241, 80.506, 0],
                to: [-3.199, 0, 0],
                ti: [3.699, 0, 0]
              },
              {
                i: { x: 0.199, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 66,
                s: [34.644, 80.506, 0],
                to: [-3.699, 0, 0],
                ti: [0, 0, 0]
              },
              {
                i: { x: 0.292, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 79,
                s: [22.047, 80.506, 0],
                to: [0, 0, 0],
                ti: [-2.099, 0, 0]
              },
              {
                i: { x: 0, y: 0 },
                o: { x: 0.333, y: 0.333 },
                t: 108,
                s: [34.644, 80.506, 0],
                to: [0, 0, 0],
                ti: [0, 0, 0]
              },
              {
                i: { x: 0.142, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 112,
                s: [34.644, 80.506, 0],
                to: [1.599, 0, 0],
                ti: [-1.599, 0, 0]
              },
              {
                i: { x: 0.142, y: 0.142 },
                o: { x: 0.333, y: 0.333 },
                t: 122,
                s: [44.241, 80.506, 0],
                to: [0, 0, 0],
                ti: [0, 0, 0]
              },
              {
                i: { x: 0, y: 1 },
                o: { x: 0.333, y: 0 },
                t: 129,
                s: [44.241, 80.506, 0],
                to: [1.599, 0, 0],
                ti: [-1.599, 0, 0]
              },
              { t: 140, s: [53.838, 80.506, 0] }
            ],
            ix: 2
          },
          a: { a: 0, k: [14.578, 4.012, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    o: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    v: [
                      [-14.328, 3.762],
                      [14.328, 3.762],
                      [14.328, -3.762],
                      [-14.328, -3.762]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.878431432387, 0.89019613827, 0.960784373564, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [14.578, 4.012], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 27,
        op: 206,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 16,
        ty: 2,
        nm: "Layer 1",
        parent: 19,
        refId: "image_0",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [-139.621, 436.897, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        ip: 27,
        op: 206,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 18,
        ty: 4,
        nm: "RING Outlines",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [957.753, 540.007, 0], ix: 2 },
          a: { a: 0, k: [53.838, 53.838, 0], ix: 1 },
          s: { a: 0, k: [521, 521, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [27.962, 0],
                      [0, 27.961],
                      [-27.962, 0],
                      [0, -27.962]
                    ],
                    o: [
                      [-27.962, 0],
                      [0, -27.962],
                      [27.962, 0],
                      [0, 27.961]
                    ],
                    v: [
                      [0, 50.629],
                      [-50.629, 0],
                      [0, -50.63],
                      [50.629, 0]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              {
                ind: 1,
                ty: "sh",
                ix: 2,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [29.596, 0],
                      [0, -29.596],
                      [-29.596, 0],
                      [0, 29.595]
                    ],
                    o: [
                      [-29.596, 0],
                      [0, 29.595],
                      [29.596, 0],
                      [0, -29.596]
                    ],
                    v: [
                      [0, -53.588],
                      [-53.588, 0],
                      [0, 53.588],
                      [53.588, 0]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 2",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              { ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: false },
              {
                ty: "fl",
                c: { a: 0, k: [0.372549019608, 0.376470618154, 0.407843167174, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [53.838, 53.838], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 4,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 27,
        op: 206,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 19,
        ty: 3,
        nm: "RING",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [957.753, 540.007, 0], ix: 2 },
          a: { a: 0, k: [53.838, 53.838, 0], ix: 1 },
          s: { a: 0, k: [521, 521, 100], ix: 6 }
        },
        ao: 0,
        ip: 27,
        op: 206,
        st: 0,
        bm: 0
      }
    ]
  },
  {
    id: "comp_5",
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Shape Layer 2",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [1032, 618, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: { a: 0, k: [541.621, 541.621], ix: 2 },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "tm",
                s: {
                  a: 1,
                  k: [
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 71, s: [0] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 72, s: [2] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 73, s: [4] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 74, s: [9] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 75, s: [15] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 76, s: [21] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 77, s: [28] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 78, s: [35] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 79, s: [40] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 80, s: [47] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 81, s: [52] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 82, s: [58] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 83, s: [63] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 84, s: [67] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 85, s: [71] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 86, s: [76] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 87, s: [80] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 88, s: [82] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 89, s: [84] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 90, s: [88] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 91, s: [91] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 92, s: [91] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 93, s: [94] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 94, s: [96] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 95, s: [97] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 96, s: [98] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 97, s: [99] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 98, s: [99] },
                    { t: 99, s: [100] }
                  ],
                  ix: 1
                },
                e: {
                  a: 1,
                  k: [
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 12, s: [0] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 14, s: [4] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 15, s: [13] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 16, s: [19] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 17, s: [21] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 20, s: [25] },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 25,
                      s: [25.125]
                    },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 27,
                      s: [27.375]
                    },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 28, s: [30] },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 29,
                      s: [36.5]
                    },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 30, s: [41] },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 31,
                      s: [44.733]
                    },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 33,
                      s: [46.2]
                    },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 35, s: [48] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 40, s: [49] },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 42,
                      s: [49.4]
                    },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 43,
                      s: [51.933]
                    },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 44,
                      s: [54.967]
                    },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 45, s: [60] },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 46,
                      s: [64.6]
                    },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 48,
                      s: [70.8]
                    },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 50, s: [73] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 52, s: [75] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 55, s: [75] },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 57,
                      s: [75.467]
                    },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 58,
                      s: [80.2]
                    },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 60, s: [87] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 61, s: [91] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 62, s: [93] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 63, s: [94] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 64, s: [96] },
                    { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 65, s: [98] },
                    { t: 67, s: [100] }
                  ],
                  ix: 2
                },
                o: { a: 0, k: 0, ix: 3 },
                m: 1,
                ix: 2,
                nm: "Trim Paths 1",
                mn: "ADBE Vector Filter - Trim",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.109802246094, 1, 0.7529296875, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 3, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-75.189, -77.189], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 4,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 0,
        op: 125,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "Shape Layer 1",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: {
            a: 1,
            k: [
              { i: { x: [0], y: [1] }, o: { x: [0.564], y: [0] }, t: 11, s: [0] },
              { i: { x: [1e-3], y: [1] }, o: { x: [0.564], y: [0] }, t: 23, s: [90] },
              { i: { x: [0.048], y: [1] }, o: { x: [0.398], y: [0] }, t: 41, s: [180] },
              { i: { x: [0.189], y: [1] }, o: { x: [0.167], y: [0] }, t: 56, s: [270] },
              { i: { x: [0.349], y: [1] }, o: { x: [0.167], y: [0] }, t: 71, s: [360] },
              { t: 101, s: [720] }
            ],
            ix: 10
          },
          p: { a: 0, k: [960, 540, 0], ix: 2 },
          a: { a: 0, k: [-544, -85, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                d: 1,
                ty: "el",
                s: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.833, 0.833], y: [1, 1] },
                      o: { x: [0.333, 0.333], y: [0, 0] },
                      t: 0,
                      s: [0, 0]
                    },
                    {
                      i: { x: [0.833, 0.833], y: [1, 1] },
                      o: { x: [0.167, 0.167], y: [0, 0] },
                      t: 16,
                      s: [38.046, 38.046]
                    },
                    {
                      i: { x: [0.833, 0.833], y: [1, 1] },
                      o: { x: [0.167, 0.167], y: [0, 0] },
                      t: 94,
                      s: [38.046, 38.046]
                    },
                    { t: 102, s: [0, 0] }
                  ],
                  ix: 2
                },
                p: { a: 0, k: [0, 0], ix: 3 },
                nm: "Ellipse Path 1",
                mn: "ADBE Vector Shape - Ellipse",
                hd: false
              },
              {
                ty: "st",
                c: { a: 0, k: [0.235294117647, 1, 0.98431372549, 1], ix: 3 },
                o: { a: 0, k: 100, ix: 4 },
                w: { a: 0, k: 0, ix: 5 },
                lc: 1,
                lj: 1,
                ml: 4,
                bm: 0,
                nm: "Stroke 1",
                mn: "ADBE Vector Graphic - Stroke",
                hd: false
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.109803921569, 1, 0.752941176471, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [-544.977, -360.977], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 0,
        op: 121,
        st: -4,
        bm: 0
      },
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "Layer 3 Outlines",
        parent: 12,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 720, ix: 10 },
          p: { a: 0, k: [53.847, 50.15, 0], ix: 2 },
          a: { a: 0, k: [14.578, 20.268, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    o: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    v: [
                      [-14.328, 20.018],
                      [-14.328, -20.018],
                      [5.29, -20.018],
                      [5.29, -10.004],
                      [-1.165, -10.004],
                      [-1.165, -5.062],
                      [14.328, -5.062],
                      [14.328, 4.552],
                      [-1.165, 4.552],
                      [-1.165, 10.051],
                      [14.328, 10.051],
                      [14.328, 20.018]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.878431432387, 0.89019613827, 0.960784373564, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [14.578, 20.268], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 0,
        op: 125,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 5,
        ty: 4,
        nm: "GEAR Outlines",
        parent: 12,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: {
            a: 1,
            k: [
              { i: { x: [0], y: [1] }, o: { x: [0.564], y: [0] }, t: 11, s: [0] },
              { i: { x: [1e-3], y: [1] }, o: { x: [0.564], y: [0] }, t: 23, s: [90] },
              { i: { x: [0.048], y: [1] }, o: { x: [0.398], y: [0] }, t: 41, s: [180] },
              { i: { x: [0.189], y: [1] }, o: { x: [0.167], y: [0] }, t: 56, s: [270] },
              { i: { x: [0.349], y: [1] }, o: { x: [0.167], y: [0] }, t: 71, s: [360] },
              { t: 101, s: [720] }
            ],
            ix: 10
          },
          p: { a: 0, k: [70.619, 31.934, 0], ix: 2 },
          a: { a: 0, k: [8.731, 8.731, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0, 0],
                      [0.417, 0.28],
                      [0.192, 0.466],
                      [-0.099, 0.493],
                      [-0.357, 0.355],
                      [-0.493, 0.097],
                      [-0.465, -0.193],
                      [-0.279, -0.419],
                      [0, -0.503],
                      [0.478, -0.468],
                      [0.669, 2e-3]
                    ],
                    o: [
                      [-0.503, -2e-3],
                      [-0.418, -0.281],
                      [-0.191, -0.465],
                      [0.099, -0.493],
                      [0.356, -0.355],
                      [0.494, -0.098],
                      [0.464, 0.193],
                      [0.279, 0.418],
                      [-0.013, 0.668],
                      [-0.478, 0.467],
                      [0, 0]
                    ],
                    v: [
                      [0.027, 2.545],
                      [-1.384, 2.112],
                      [-2.318, 0.967],
                      [-2.459, -0.502],
                      [-1.76, -1.803],
                      [-0.457, -2.497],
                      [1.013, -2.351],
                      [2.153, -1.413],
                      [2.582, 0],
                      [1.816, 1.773],
                      [0.027, 2.499]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              {
                ind: 1,
                ty: "sh",
                ix: 2,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0.013, 0],
                      [0, 0],
                      [0.283, 0.496],
                      [0, 0],
                      [0.01, 0.024],
                      [0, 0.011],
                      [4e-3, 0.01],
                      [0, 0],
                      [0.028, 0],
                      [0.02, -0.018],
                      [0, 0],
                      [0.554, 0.148],
                      [0, 0],
                      [0.02, 0.019],
                      [0.027, 0],
                      [0, 0],
                      [0.02, -0.019],
                      [0, -0.027],
                      [0, 0],
                      [0.495, -0.29],
                      [0, 0],
                      [0.026, 0],
                      [0.019, -0.018],
                      [0, 0],
                      [7e-3, -0.012],
                      [0, -0.013],
                      [-6e-3, -0.012],
                      [-0.012, -8e-3],
                      [0, 0],
                      [0.151, -0.553],
                      [0, 0],
                      [0.019, -0.02],
                      [0, -0.027],
                      [0, 0],
                      [-0.019, -0.019],
                      [-0.027, 0],
                      [0, 0],
                      [-0.287, -0.496],
                      [0, 0],
                      [7e-3, -0.012],
                      [0, -0.014],
                      [-6e-3, -0.012],
                      [-0.012, -8e-3],
                      [0, 0],
                      [-0.026, 0],
                      [-0.018, 0.017],
                      [0, 0],
                      [-0.553, -0.148],
                      [0, 0],
                      [-0.019, -0.019],
                      [-0.027, 0],
                      [0, 0],
                      [-0.018, 0.019],
                      [0, 0.028],
                      [0, 0],
                      [-0.494, 0.288],
                      [0, 0],
                      [-0.027, 0],
                      [-0.021, 0.018],
                      [0, 0],
                      [0, 0.026],
                      [0.018, 0.019],
                      [0, 0],
                      [-0.148, 0.552],
                      [0, 0],
                      [-0.012, 5e-3],
                      [-8e-3, 9e-3],
                      [-4e-3, 0.013],
                      [1e-3, 0.013],
                      [0, 0],
                      [4e-3, 0.013],
                      [9e-3, 0.01],
                      [0.012, 6e-3]
                    ],
                    o: [
                      [0, 0],
                      [-0.148, -0.552],
                      [0, 0],
                      [0.01, -0.024],
                      [4e-3, -0.011],
                      [0, -0.011],
                      [0, 0],
                      [-0.021, -0.018],
                      [-0.027, 0],
                      [0, 0],
                      [-0.494, -0.29],
                      [0, 0],
                      [0, -0.027],
                      [-0.018, -0.019],
                      [0, 0],
                      [-0.027, 0],
                      [-0.019, 0.019],
                      [0, 0],
                      [-0.553, 0.148],
                      [0, 0],
                      [-0.018, -0.018],
                      [-0.026, 0],
                      [0, 0],
                      [-0.012, 7e-3],
                      [-6e-3, 0.012],
                      [0, 0.014],
                      [7e-3, 0.012],
                      [0, 0],
                      [-0.287, 0.495],
                      [0, 0],
                      [-0.027, 0],
                      [-0.019, 0.019],
                      [0, 0],
                      [0, 0.027],
                      [0.019, 0.019],
                      [0, 0],
                      [0.151, 0.552],
                      [0, 0],
                      [-0.012, 7e-3],
                      [-6e-3, 0.012],
                      [0, 0.014],
                      [7e-3, 0.012],
                      [0, 0],
                      [0.019, 0.017],
                      [0.026, 0],
                      [0, 0],
                      [0.495, 0.29],
                      [0, 0],
                      [0, 0.028],
                      [0.02, 0.019],
                      [0, 0],
                      [0.027, 0],
                      [0.02, -0.019],
                      [0, 0],
                      [0.553, -0.149],
                      [0, 0],
                      [0.02, 0.018],
                      [0.028, 0],
                      [0, 0],
                      [0.018, -0.019],
                      [0, -0.026],
                      [0, 0],
                      [0.283, -0.496],
                      [0, 0],
                      [0.013, 0],
                      [0.012, -5e-3],
                      [9e-3, -0.01],
                      [4e-3, -0.012],
                      [0, 0],
                      [1e-3, -0.013],
                      [-4e-3, -0.012],
                      [-8e-3, -0.01],
                      [-0.012, -5e-3]
                    ],
                    v: [
                      [8.387, -1.709],
                      [6.353, -1.709],
                      [5.703, -3.288],
                      [7.133, -4.719],
                      [7.133, -4.793],
                      [7.14, -4.826],
                      [7.133, -4.858],
                      [4.867, -7.134],
                      [4.792, -7.162],
                      [4.718, -7.134],
                      [3.287, -5.694],
                      [1.708, -6.354],
                      [1.708, -8.379],
                      [1.678, -8.451],
                      [1.606, -8.481],
                      [-1.599, -8.481],
                      [-1.671, -8.451],
                      [-1.701, -8.379],
                      [-1.701, -6.354],
                      [-3.28, -5.694],
                      [-4.72, -7.134],
                      [-4.789, -7.161],
                      [-4.859, -7.134],
                      [-7.125, -4.858],
                      [-7.153, -4.828],
                      [-7.163, -4.789],
                      [-7.153, -4.749],
                      [-7.125, -4.719],
                      [-5.695, -3.288],
                      [-6.354, -1.709],
                      [-8.379, -1.709],
                      [-8.452, -1.679],
                      [-8.481, -1.607],
                      [-8.481, 1.607],
                      [-8.452, 1.679],
                      [-8.379, 1.709],
                      [-6.354, 1.709],
                      [-5.695, 3.288],
                      [-7.125, 4.719],
                      [-7.153, 4.749],
                      [-7.163, 4.788],
                      [-7.153, 4.828],
                      [-7.125, 4.858],
                      [-4.859, 7.134],
                      [-4.789, 7.161],
                      [-4.72, 7.134],
                      [-3.28, 5.694],
                      [-1.701, 6.353],
                      [-1.701, 8.378],
                      [-1.671, 8.451],
                      [-1.599, 8.481],
                      [1.606, 8.481],
                      [1.678, 8.451],
                      [1.708, 8.378],
                      [1.708, 6.353],
                      [3.287, 5.694],
                      [4.718, 7.134],
                      [4.792, 7.162],
                      [4.867, 7.134],
                      [7.133, 4.858],
                      [7.161, 4.788],
                      [7.133, 4.719],
                      [5.703, 3.288],
                      [6.353, 1.709],
                      [8.387, 1.709],
                      [8.425, 1.701],
                      [8.456, 1.679],
                      [8.476, 1.645],
                      [8.48, 1.607],
                      [8.48, -1.607],
                      [8.476, -1.646],
                      [8.456, -1.679],
                      [8.425, -1.702]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 2",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              { ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: false },
              {
                ty: "fl",
                c: { a: 0, k: [0.878431432387, 0.89019613827, 0.960784373564, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [8.731, 8.731], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 4,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: -3,
        op: 136,
        st: 11,
        bm: 0
      },
      {
        ddd: 0,
        ind: 7,
        ty: 4,
        nm: "Layer 2 Outlines",
        parent: 12,
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [53.838, 80.506, 0], ix: 2 },
          a: { a: 0, k: [14.578, 4.012, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    o: [
                      [0, 0],
                      [0, 0],
                      [0, 0],
                      [0, 0]
                    ],
                    v: [
                      [-14.328, 3.762],
                      [14.328, 3.762],
                      [14.328, -3.762],
                      [-14.328, -3.762]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.878431432387, 0.89019613827, 0.960784373564, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [14.578, 4.012], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 2,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 0,
        op: 125,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 9,
        ty: 2,
        nm: "Layer 1",
        parent: 12,
        refId: "image_0",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [-139.621, 436.897, 0], ix: 2 },
          a: { a: 0, k: [0, 0, 0], ix: 1 },
          s: { a: 0, k: [100, 100, 100], ix: 6 }
        },
        ao: 0,
        ip: 0,
        op: 125,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 11,
        ty: 4,
        nm: "RING Outlines",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [957.753, 540.007, 0], ix: 2 },
          a: { a: 0, k: [53.838, 53.838, 0], ix: 1 },
          s: { a: 0, k: [521, 521, 100], ix: 6 }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [27.962, 0],
                      [0, 27.961],
                      [-27.962, 0],
                      [0, -27.962]
                    ],
                    o: [
                      [-27.962, 0],
                      [0, -27.962],
                      [27.962, 0],
                      [0, 27.961]
                    ],
                    v: [
                      [0, 50.629],
                      [-50.629, 0],
                      [0, -50.63],
                      [50.629, 0]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 1",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              {
                ind: 1,
                ty: "sh",
                ix: 2,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [29.596, 0],
                      [0, -29.596],
                      [-29.596, 0],
                      [0, 29.595]
                    ],
                    o: [
                      [-29.596, 0],
                      [0, 29.595],
                      [29.596, 0],
                      [0, -29.596]
                    ],
                    v: [
                      [0, -53.588],
                      [-53.588, 0],
                      [0, 53.588],
                      [53.588, 0]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 2",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              { ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: false },
              {
                ty: "fl",
                c: { a: 0, k: [0.372549019608, 0.376470618154, 0.407843167174, 1], ix: 4 },
                o: { a: 0, k: 100, ix: 5 },
                r: 1,
                bm: 0,
                nm: "Fill 1",
                mn: "ADBE Vector Graphic - Fill",
                hd: false
              },
              {
                ty: "tr",
                p: { a: 0, k: [53.838, 53.838], ix: 2 },
                a: { a: 0, k: [0, 0], ix: 1 },
                s: { a: 0, k: [100, 100], ix: 3 },
                r: { a: 0, k: 0, ix: 6 },
                o: { a: 0, k: 100, ix: 7 },
                sk: { a: 0, k: 0, ix: 4 },
                sa: { a: 0, k: 0, ix: 5 },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 4,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }
        ],
        ip: 0,
        op: 125,
        st: 0,
        bm: 0
      },
      {
        ddd: 0,
        ind: 12,
        ty: 3,
        nm: "RING",
        sr: 1,
        ks: {
          o: { a: 0, k: 100, ix: 11 },
          r: { a: 0, k: 0, ix: 10 },
          p: { a: 0, k: [957.753, 540.007, 0], ix: 2 },
          a: { a: 0, k: [53.838, 53.838, 0], ix: 1 },
          s: { a: 0, k: [521, 521, 100], ix: 6 }
        },
        ao: 0,
        ip: 0,
        op: 125,
        st: 0,
        bm: 0
      }
    ]
  }
];
var layers = [
  {
    ddd: 0,
    ind: 1,
    ty: 0,
    nm: "ENGINEER LOGO 5",
    refId: "comp_0",
    sr: 1,
    ks: {
      o: { a: 0, k: 100, ix: 11 },
      r: { a: 0, k: 0, ix: 10 },
      p: { a: 0, k: [325, 318, 0], ix: 2 },
      a: { a: 0, k: [960, 540, 0], ix: 1 },
      s: { a: 0, k: [100, 100, 100], ix: 6 }
    },
    ao: 0,
    w: 1920,
    h: 1080,
    ip: 501,
    op: 626,
    st: 501,
    bm: 0
  },
  {
    ddd: 0,
    ind: 2,
    ty: 0,
    nm: "ENGINEER LOGO 3",
    refId: "comp_2",
    sr: 1,
    ks: {
      o: { a: 0, k: 100, ix: 11 },
      r: { a: 0, k: 0, ix: 10 },
      p: { a: 0, k: [325, 318, 0], ix: 2 },
      a: { a: 0, k: [960, 540, 0], ix: 1 },
      s: { a: 0, k: [100, 100, 100], ix: 6 }
    },
    ao: 0,
    w: 1920,
    h: 1080,
    ip: 481,
    op: 501,
    st: 402,
    bm: 0
  },
  {
    ddd: 0,
    ind: 3,
    ty: 0,
    nm: "ENGINEER LOGO 3",
    refId: "comp_2",
    sr: 1,
    ks: {
      o: { a: 0, k: 100, ix: 11 },
      r: { a: 0, k: 0, ix: 10 },
      p: { a: 0, k: [325, 318, 0], ix: 2 },
      a: { a: 0, k: [960, 540, 0], ix: 1 },
      s: { a: 0, k: [100, 100, 100], ix: 6 }
    },
    ao: 0,
    w: 1920,
    h: 1080,
    ip: 433,
    op: 481,
    st: 402,
    bm: 0
  },
  {
    ddd: 0,
    ind: 4,
    ty: 0,
    nm: "ENGINEER LOGO 3",
    refId: "comp_2",
    sr: 1,
    ks: {
      o: { a: 0, k: 100, ix: 11 },
      r: { a: 0, k: 0, ix: 10 },
      p: { a: 0, k: [325, 318, 0], ix: 2 },
      a: { a: 0, k: [960, 540, 0], ix: 1 },
      s: { a: 0, k: [100, 100, 100], ix: 6 }
    },
    ao: 0,
    w: 1920,
    h: 1080,
    ip: 385,
    op: 433,
    st: 354,
    bm: 0
  },
  {
    ddd: 0,
    ind: 5,
    ty: 0,
    nm: "ENGINEER LOGO 3",
    refId: "comp_2",
    sr: 1,
    ks: {
      o: { a: 0, k: 100, ix: 11 },
      r: { a: 0, k: 0, ix: 10 },
      p: { a: 0, k: [325, 318, 0], ix: 2 },
      a: { a: 0, k: [960, 540, 0], ix: 1 },
      s: { a: 0, k: [100, 100, 100], ix: 6 }
    },
    ao: 0,
    w: 1920,
    h: 1080,
    ip: 337,
    op: 385,
    st: 306,
    bm: 0
  },
  {
    ddd: 0,
    ind: 6,
    ty: 0,
    nm: "ENGINEER LOGO 2",
    refId: "comp_4",
    sr: 1,
    ks: {
      o: { a: 0, k: 100, ix: 11 },
      r: { a: 0, k: 0, ix: 10 },
      p: { a: 0, k: [325, 318, 0], ix: 2 },
      a: { a: 0, k: [960, 540, 0], ix: 1 },
      s: { a: 0, k: [100, 100, 100], ix: 6 }
    },
    ao: 0,
    tm: {
      a: 1,
      k: [
        { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 154, s: [1.08] },
        { t: 270, s: [5.72] }
      ],
      ix: 2
    },
    w: 1920,
    h: 1080,
    ip: 125,
    op: 337,
    st: 127,
    bm: 0
  },
  {
    ddd: 0,
    ind: 7,
    ty: 0,
    nm: "ENGINEER LOGO 1",
    refId: "comp_5",
    sr: 1,
    ks: {
      o: { a: 0, k: 100, ix: 11 },
      r: { a: 0, k: 0, ix: 10 },
      p: { a: 0, k: [325, 318, 0], ix: 2 },
      a: { a: 0, k: [960, 540, 0], ix: 1 },
      s: { a: 0, k: [100, 100, 100], ix: 6 }
    },
    ao: 0,
    w: 1920,
    h: 1080,
    ip: 0,
    op: 125,
    st: 0,
    bm: 0
  }
];
var markers = [
  { tm: 131.798828125, cm: "", dr: 0 },
  { tm: 385, cm: "", dr: 0 },
  { tm: 500, cm: "", dr: 0 }
];
var engineering_default = {
  v,
  meta: meta2,
  fr,
  ip,
  op,
  w,
  h,
  nm,
  ddd,
  assets,
  layers,
  markers
};

// app/components/layout/Hero.tsx
var Hero = ({ children, title, extra }) => {
  const location = (0, import_remix5.useLocation)();
  const isHome = location.pathname === "/";
  return /* @__PURE__ */ React.createElement("div", {
    className: "px-7 lg:px-14 pt-8 pb-8 md:pb-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row items-center gap-5 pb-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "hidden md:block max-w-[200px] lg:max-w-[250px]"
  }, /* @__PURE__ */ React.createElement(import_lottie_react.default, {
    animationData: engineering_default,
    loop: true,
    autoplay: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col w-full pt-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl font-mono text-highlight-on font-light"
  }, title), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row items-center gap-2"
  }, /* @__PURE__ */ React.createElement("span", {
    style: { minHeight: "3px" },
    className: "my-5 bg-grey-200 flex-1"
  }), /* @__PURE__ */ React.createElement(Circle_default, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-4 font-inter"
  }, children))), /* @__PURE__ */ React.createElement("div", {
    className: "hidden md:flex flex-row justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: `flex justify-end pl-[95px] lg:pl-[124px] ${isHome ? "pt-6 h-12" : "h-12 opacity-0"}`
  }, /* @__PURE__ */ React.createElement("span", {
    style: { minWidth: "3px" },
    className: `h-full ${isHome ? "bg-grey-200 h-12" : ""}`
  })), extra));
};
var Hero_default = Hero;

// app/components/layout/Section.tsx
init_react();
var Section = ({ light, title, children }) => {
  const bg = light ? "bg-dark-200" : "bg-dark-300";
  return /* @__PURE__ */ React.createElement("div", {
    className: `py-12 px-14 ${bg}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-16"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-4xl font-mono text-gradient font-light"
  }, title), /* @__PURE__ */ React.createElement("div", null, children)));
};
var Section_default = Section;

// app/components/TodayDate.tsx
init_react();
var date = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric"
}).formatToParts(new Date()).filter((part) => part.type !== "literal").map((part) => part.value).join(".");
function TodayDate() {
  return /* @__PURE__ */ React.createElement("span", {
    className: "text-2xl font-light text-white font-mono pr-6 self-end lg:self-start"
  }, date);
}
var TodayDate_default = TodayDate;

// app/components/typography/Paragraph.tsx
init_react();
var Paragraph = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React.createElement("p", __spreadValues({
    className: `text-xl leading-6 font-light ${className}`
  }, props));
};
var Paragraph_default = Paragraph;

// route-module:/Users/maferland/dev/engineering/app/routes/resources.tsx
var videos = [
  {
    title: "Video",
    description: "Find out about life as an Engineer at Capdesk with Vincent Seguin, Head of Engineering. \u201CIt\u2019s not a feature factory, you get to really do what you love!\u201D",
    label: "watch",
    image: "vincent.png",
    url: "https://rmcdeo8p.videomarketingplatform.co/secret/73422078/1e9a39048627aacd2cbf4d790cefa06d"
  },
  {
    title: "Podcast",
    description: "Best practice in software development \u2014 can startups do it? \u2014 with Marc-Antoine from Capdesk and Mustafa Shreet from the Silicon Roundabout Podcast.",
    label: "listen",
    image: "podcast.png",
    url: "https://open.spotify.com/episode/6tjggH5MFxA8sHIj3VuUvK?si=304074ae3a7848c5"
  },
  {
    title: "Product Demo",
    description: "Discover the key features of Capdesk with a comprehensive walk-through of the product, with James Bardwell, Enterprise SDR.",
    label: "watch",
    image: "product_demo.png",
    url: "https://rmcdeo8p.videomarketingplatform.co/v.ihtml/player.html?token=064e04957fcbb7452dd29cda9d39a199&source=embed&photo%5fid=72316216"
  }
];
var articles = [
  {
    title: "Design System",
    description: "Check out our comprehensive design system for the Capdesk product. A single source of truth that groups all the design elements together in one place.",
    label: "view",
    image: "design_system.jpeg",
    url: "https://camo.capdesk.com"
  },
  {
    title: "Article",
    description: /* @__PURE__ */ React.createElement("div", {
      className: "flex flex-col gap-2"
    }, /* @__PURE__ */ React.createElement("p", null, "What it\u2019s like to be a student developer at Capdesk"), /* @__PURE__ */ React.createElement("p", null, "by Krystof Spiller, July 2021")),
    label: "read",
    image: "capdesk_spaceship.jpeg",
    url: "https://blog.capdesk.com/life-as-a-student-developer"
  },
  {
    title: "Article",
    description: /* @__PURE__ */ React.createElement("div", {
      className: "flex flex-col gap-2"
    }, /* @__PURE__ */ React.createElement("p", null, "Five learnings in five years at Capdesk"), /* @__PURE__ */ React.createElement("p", null, "by Alexander Olsen, May 2021")),
    label: "read",
    image: "capdesk_remote.jpeg",
    url: "https://blog.capdesk.com/five-years-five-learnings"
  }
];
var Resource = ({
  title,
  description,
  label,
  image,
  url,
  playable
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "max-w-[390px] mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "group relative"
  }, /* @__PURE__ */ React.createElement("a", {
    href: url,
    target: "_blank"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "m-auto md:m-0",
    width: "390",
    src: `/img/resources/${image}`
  }), playable && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-0 bg-grey-400 opacity-50 group-hover:opacity-30 transition-all duration-200 ease-in-out"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-0 flex items-center justify-center z-10"
  }, /* @__PURE__ */ React.createElement("img", {
    src: `/img/resources/play.png`
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-8 pt-8 pb-4 font-light"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-2xl font-mono"
  }, title), /* @__PURE__ */ React.createElement("div", {
    className: "font-inter text-xl"
  }, description), /* @__PURE__ */ React.createElement("a", {
    href: url,
    target: "_blank",
    className: "text-orangeish text-lg font-mono hover:underline"
  }, label)));
};
var ResourcesSection = ({
  title,
  resources,
  playable = false
}) => {
  return /* @__PURE__ */ React.createElement(Section_default, {
    title
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-16"
  }, resources.map((resource) => /* @__PURE__ */ React.createElement(Resource, __spreadProps(__spreadValues({
    key: resource.title
  }, resource), {
    playable
  })))));
};
function Resources() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Hero_default, {
    title: "Resources"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between"
  }, /* @__PURE__ */ React.createElement(Paragraph_default, {
    className: "w-full lg:w-1/2"
  }, "Dive in and discover the latest from our Engineering Team. We\u2019ve got videos, podcasts and articles to keep you entertained. Plus, check out our detailed design system. Enjoy!"), /* @__PURE__ */ React.createElement(TodayDate_default, null))), /* @__PURE__ */ React.createElement(ResourcesSection, {
    title: "Videos",
    resources: videos,
    playable: true
  }), /* @__PURE__ */ React.createElement(ResourcesSection, {
    title: "Articles and assets",
    resources: articles
  }));
}

// route-module:/Users/maferland/dev/engineering/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader
});
init_react();
var import_remix7 = __toModule(require_remix());

// app/components/home/Contributions.tsx
init_react();

// app/components/Calendar.tsx
init_react();
var import_react3 = __toModule(require("react"));

// app/components/Tooltip.tsx
init_react();
var import_react2 = __toModule(require("react"));
var Tooltip = ({ children }) => {
  const ref = (0, import_react2.useRef)(null);
  const [style, setStyle] = (0, import_react2.useState)({});
  (0, import_react2.useEffect)(() => {
    var _a;
    const { innerWidth: width } = window;
    const { right = 0 } = ((_a = ref == null ? void 0 : ref.current) == null ? void 0 : _a.getBoundingClientRect()) ?? {};
    const rightDiff = right - width;
    const newStyle = __spreadValues({}, style);
    if (rightDiff > 0) {
      newStyle.left = `-${rightDiff}px`;
    }
    setStyle(newStyle);
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    ref,
    className: `absolute w-max z-10 bg-dark-100 border border-gray-300 px-4 py-2 rounded-md`,
    style
  }, children);
};

// app/components/Calendar.tsx
var DayColor;
(function(DayColor2) {
  DayColor2["EMPTY"] = "bg-cal-empty";
  DayColor2["SMALL"] = "bg-cal-s";
  DayColor2["MEDIUM"] = "bg-cal-m";
  DayColor2["LARGE"] = "bg-cal-l";
  DayColor2["XLARGE"] = "bg-cal-xl";
})(DayColor || (DayColor = {}));
var DayThreshold;
(function(DayThreshold2) {
  DayThreshold2[DayThreshold2["SMALL"] = 1] = "SMALL";
  DayThreshold2[DayThreshold2["MEDIUM"] = 12] = "MEDIUM";
  DayThreshold2[DayThreshold2["LARGE"] = 24] = "LARGE";
  DayThreshold2[DayThreshold2["XLARGE"] = 40] = "XLARGE";
})(DayThreshold || (DayThreshold = {}));
var Day = ({
  date: date2,
  value,
  enableTooltip = false
}) => {
  const [isHovered, setIsHovered] = (0, import_react3.useState)(false);
  let color = DayColor.EMPTY;
  if (value >= 40) {
    color = DayColor.XLARGE;
  } else if (value >= 24) {
    color = DayColor.LARGE;
  } else if (value >= 12) {
    color = DayColor.MEDIUM;
  } else if (value >= 1) {
    color = DayColor.SMALL;
  }
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ import_react3.default.createElement("div", {
    onMouseOver: () => setIsHovered(true),
    onMouseOut: () => setIsHovered(false),
    className: `${color} w-5 h-5 m-1 rounded-sm`
  }), isHovered && enableTooltip && /* @__PURE__ */ import_react3.default.createElement(Tooltip, null, value, " contribution", value !== 1 && "s", " on ", date2));
};
var Calendar = ({ contributions }) => /* @__PURE__ */ import_react3.default.createElement("div", {
  className: "flex flex-row w-full justify-center"
}, /* @__PURE__ */ import_react3.default.createElement("div", {
  className: "flex flex-col w-fit"
}, /* @__PURE__ */ import_react3.default.createElement("div", {
  className: "flex flex-row flex-wrap"
}, contributions.map((parsedContribution, index) => /* @__PURE__ */ import_react3.default.createElement("div", {
  key: index,
  className: "flex flex-col"
}, /* @__PURE__ */ import_react3.default.createElement("div", {
  className: "mt-4"
}, parsedContribution.month), /* @__PURE__ */ import_react3.default.createElement("div", {
  className: "flex flex-row"
}, parsedContribution.weeks.map((week, index2) => /* @__PURE__ */ import_react3.default.createElement("div", {
  key: index2,
  className: "flex flex-col"
}, week.week.map((day, index3) => /* @__PURE__ */ import_react3.default.createElement(Day, {
  key: index3,
  date: day.date,
  value: day.value,
  enableTooltip: true
})))))))), /* @__PURE__ */ import_react3.default.createElement("div", {
  className: "mt-4 flex flex-row items-center justify-end"
}, /* @__PURE__ */ import_react3.default.createElement("div", null, "Less"), /* @__PURE__ */ import_react3.default.createElement(Day, {
  value: 1
}), /* @__PURE__ */ import_react3.default.createElement(Day, {
  value: 12
}), /* @__PURE__ */ import_react3.default.createElement(Day, {
  value: 24
}), /* @__PURE__ */ import_react3.default.createElement(Day, {
  value: 40
}), /* @__PURE__ */ import_react3.default.createElement("div", null, "More"))));

// app/components/typography/H3.tsx
init_react();
var H3 = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React.createElement("h3", __spreadValues({
    className: `font-mono text-2xl font-light text-mono ${className}`
  }, props));
};
var H3_default = H3;

// app/components/home/Contributions.tsx
var toFixed = (value) => value.toFixed(0);
var names = {
  pull_requests: "Merged pull requests",
  commits: "Commits",
  workflow_runs: "GithHub Actions ran",
  coverage: "Code coverage"
};
var Contributions = ({ contributions, coverage, commits, workflow_runs, pull_requests }) => {
  const values = { coverage: `${toFixed(coverage * 100)}%`, commits, workflow_runs, pull_requests };
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col xl:p-16 xl:pb-8 pb-0 gap-16 xl:gap-32 pt-16 xl:pt-32"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-8"
  }, /* @__PURE__ */ React.createElement(H3_default, null, commits, " contributions in the last year"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Calendar, {
    contributions
  })), /* @__PURE__ */ React.createElement(H3_default, null, "Key metrics in the last year"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
  }, Object.entries(values).map(([key, value]) => /* @__PURE__ */ React.createElement("div", {
    key,
    className: "bg-dark-200 rounded-sm flex flex-col px-16 py-10 gap-8 items-center w-full m-auto",
    style: { maxWidth: "250px" }
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-mono text-highlight-on text-5xl"
  }, value), /* @__PURE__ */ React.createElement("span", {
    className: "text-xl font-light whitespace-nowrap"
  }, names[key]))))));
};

// app/components/home/Deployments.tsx
init_react();
var import_react4 = __toModule(require("react"));
var import_react_use = __toModule(require("react-use"));
var import_recharts = __toModule(require("recharts"));
var currentMonth = new Date().getMonth();
var formatMonth = new Intl.DateTimeFormat("en-GB", { month: "short" }).format;
var useVisible = (ref) => {
  const [visible, setVisible] = import_react4.default.useState(false);
  const intersection = (0, import_react_use.useIntersection)(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  });
  (0, import_react4.useEffect)(() => {
    if (visible) {
      return;
    }
    if (intersection && intersection.intersectionRatio > 0) {
      setVisible(true);
    }
  }, [intersection]);
  return visible;
};
var Deployments = ({ releases }) => {
  const ref = import_react4.default.useRef(null);
  const visible = useVisible(ref);
  const monthlyDeployment = releases.reduce((acc, curr) => {
    const date2 = new Date(curr);
    const month = new Date(date2).getMonth();
    if (!acc[month]) {
      acc[month] = { month, name: formatMonth(date2), releases: 0 };
    }
    acc[month].releases++;
    return acc;
  }, {});
  const data = Object.entries(monthlyDeployment).reduce((acc, [month, release]) => {
    acc.push(release);
    return acc;
  }, []).sort((a, b) => a.month - b.month);
  const futureMonths = data.slice(currentMonth + 1);
  const pastMonths = data.slice(0, currentMonth + 1);
  const sortedData = [futureMonths, pastMonths].flat();
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex flex-col xl:p-24 xl:pb-8 pb-0 gap-16 xl:gap-32 pt-16 xl:pt-32"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "w-full h-80",
    ref
  }, visible && /* @__PURE__ */ import_react4.default.createElement(import_recharts.ResponsiveContainer, {
    width: "100%",
    height: "100%"
  }, /* @__PURE__ */ import_react4.default.createElement(import_recharts.AreaChart, {
    width: 500,
    height: 400,
    data: sortedData,
    margin: {
      top: 10,
      right: 30,
      left: 0,
      bottom: 0
    }
  }, /* @__PURE__ */ import_react4.default.createElement("defs", null, /* @__PURE__ */ import_react4.default.createElement("linearGradient", {
    id: "colorRelease",
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 1
  }, /* @__PURE__ */ import_react4.default.createElement("stop", {
    offset: "5%",
    stopColor: "#1CFFC0",
    stopOpacity: 0.9
  }), /* @__PURE__ */ import_react4.default.createElement("stop", {
    offset: "95%",
    stopColor: "rgba(196, 196, 196, 0"
  }))), /* @__PURE__ */ import_react4.default.createElement(import_recharts.XAxis, {
    dataKey: "name",
    stroke: "rgba(255, 255, 255, 0.87)",
    strokeWidth: 0,
    dy: 10
  }), /* @__PURE__ */ import_react4.default.createElement(import_recharts.YAxis, {
    stroke: "rgba(255, 255, 255, 0.87)",
    strokeWidth: 0,
    dx: -10
  }), /* @__PURE__ */ import_react4.default.createElement(import_recharts.Area, {
    type: "monotone",
    dataKey: "releases",
    stroke: "#1CFFC0",
    strokeWidth: 4,
    fillOpacity: 1,
    fill: "url(#colorRelease)"
  })))), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex flex-col gap-8"
  }, /* @__PURE__ */ import_react4.default.createElement(H3_default, null, "An overview of our monthly deployments"), /* @__PURE__ */ import_react4.default.createElement(Paragraph_default, {
    className: "w-full lg:w-2/3 xl:w-1/2 font-inter"
  }, "At Capdesk, we practice Continuous Integration and Continuous Deployments, which allows our engineers to continuously bring value to production. You can see here that we often deploy features or bug fixes multiple times a day!")));
};
var Deployments_default = Deployments;

// app/components/home/Languages.tsx
init_react();

// app/components/ProgressCircle.tsx
init_react();
var import_react_circular_progressbar = __toModule(require("react-circular-progressbar"));
var ProgressCircle = ({ color, percentage, children }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-[150px] h-[150px]"
  }, /* @__PURE__ */ React.createElement(import_react_circular_progressbar.CircularProgressbarWithChildren, {
    value: percentage,
    strokeWidth: 4,
    styles: (0, import_react_circular_progressbar.buildStyles)({
      strokeLinecap: "butt",
      pathTransitionDuration: 0.5,
      trailColor: "#3F3F3F",
      pathColor: color
    })
  }, children));
};
var ProgressCircle_default = ProgressCircle;

// app/components/home/Languages.tsx
var Percentage = ({ index, name, percentage }) => {
  const fixedPercentage = Number((percentage * 100).toFixed(0));
  const color = index === 0 ? "#1cffc0 " : "#fff";
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center gap-4"
  }, /* @__PURE__ */ React.createElement(ProgressCircle_default, {
    key: name,
    color,
    percentage: fixedPercentage
  }, /* @__PURE__ */ React.createElement("p", {
    className: `text-5xl text-mono`,
    style: { color }
  }, fixedPercentage, "%")), /* @__PURE__ */ React.createElement("p", {
    className: "text-2xl text-mono w-full text-center"
  }, name));
};
var Languages = ({ languages }) => {
  const sortedLanguages = Object.entries(languages).sort(([, valueA], [, valueB]) => valueB.percentage - valueA.percentage).slice(0, 5);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col xl:p-24 xl:pb-8 pb-0 gap-16 xl:gap-32 pt-16 xl:pt-32"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
  }, sortedLanguages.map(([name, { percentage }], index) => /* @__PURE__ */ React.createElement(Percentage, {
    key: name,
    index,
    name,
    percentage
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-8"
  }, /* @__PURE__ */ React.createElement(H3_default, null, "How do we distribute code across languages?"), /* @__PURE__ */ React.createElement(Paragraph_default, {
    className: "w-full lg:w-2/3 xl:w-1/2 font-inter"
  }, "We use quite a large variety of frameworks and languages at Capdesk. You can see our favourite ones here. These allow us to iterate fast, whilst maintaining a high level of code quality.")));
};
var Languages_default = Languages;

// app/components/home/Team.tsx
init_react();

// app/components/home/Map.tsx
init_react();
var import_remix6 = __toModule(require_remix());

// app/assets/images/map.svg
var map_default = "/build/_assets/map-Z3UHS3W2.svg";

// app/components/home/Map.tsx
var countries = [
  { country: "Denmark", flag: "\u{1F1E9}\u{1F1F0}", size: 8, x: "50%", y: "35%" },
  { country: "Canada", flag: "\u{1F1E8}\u{1F1E6}", size: 2, x: "26%", y: "45%" },
  { country: "Italy", flag: "\u{1F1EE}\u{1F1F9}", size: 1, x: "53%", y: "52%" },
  { country: "Portugal", flag: "\u{1F1F5}\u{1F1F9}", size: 2, x: "44.5%", y: "52%" },
  { country: "Spain", flag: "\u{1F1EA}\u{1F1F8}", size: 1, x: "46%", y: "52%" },
  { country: "United Kingdom", flag: "\u{1F1EC}\u{1F1E7}", size: 2, x: "46%", y: "44%" },
  { country: "Germany", flag: "\u{1F1E9}\u{1F1EA}", size: 1, x: "54%", y: "44%" },
  { country: "Romania", flag: "\u{1F1F7}\u{1F1F4}", size: 1, x: "54%", y: "50%" },
  { country: "Turkey", flag: "\u{1F1F9}\u{1F1F7}", size: 1, x: "57%", y: "51.5%" }
];
var sizes = {
  1: 1,
  2: 1.5,
  8: 3
};
var Country = ({ flag, country, size, x, y }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: `group aspect-square absolute rounded-full bg-highlight-on hover:bg-white hover:scale-125 animation ease-in-all duration-200 flex justify-center align-items hover:z-50 font-light text-xl`,
    style: { left: x, top: y, width: `${sizes[size]}%` }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "hidden group-hover:flex flex-col whitespace-nowrap absolute -top-full p-2 gap-2 rounded-sm bg-dark-300 text-sm z-10"
  }, /* @__PURE__ */ React.createElement("span", null, country, " ", flag), /* @__PURE__ */ React.createElement("span", null, size, " Capdesker", size > 1 ? "s" : ""), /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "/team",
    className: "text-highlight-on hover:underline"
  }, "Meet the team")));
};
var Map = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full relative"
  }, countries.map((props) => /* @__PURE__ */ React.createElement(Country, __spreadValues({
    key: props.country
  }, props))), /* @__PURE__ */ React.createElement("img", {
    src: map_default
  }));
};

// app/components/home/Team.tsx
var Metric = ({ title, value }) => {
  return /* @__PURE__ */ React.createElement("div", {
    key: "key",
    className: "bg-dark-300 rounded-sm flex flex-col px-16 py-10 gap-8 items-center w-full m-auto z-10",
    style: { maxWidth: "250px" }
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-mono text-highlight-on text-5xl"
  }, value), /* @__PURE__ */ React.createElement("span", {
    className: "text-xl font-light whitespace-nowrap"
  }, title));
};
var Team = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col xl:p-16 xl:pb-8 pb-0 gap-8 xl:gap-20 pt-16 xl:pt-32"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(Map, null)), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
  }, /* @__PURE__ */ React.createElement(Metric, {
    title: "Countries",
    value: 9
  }), /* @__PURE__ */ React.createElement(Metric, {
    title: "Languages",
    value: 7
  }), /* @__PURE__ */ React.createElement(Metric, {
    title: "Members",
    value: 19
  }), /* @__PURE__ */ React.createElement(Metric, {
    title: "Squads",
    value: 3
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row gap-8 w-2/3 m-auto"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Circle_default, {
    id: "hiring-circle",
    className: "ml-3"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-8 font-light"
  }, /* @__PURE__ */ React.createElement(H3_default, null, "Interested in joining the team?"), /* @__PURE__ */ React.createElement(Paragraph_default, {
    className: "font-inter"
  }, "Interested in joining the team? Do you like what you see at Capdesk? Are you looking to join a product team with solid processes and room for growth? Check out our latest positions or drop us an email at careers@capdesk.com find out more"), /* @__PURE__ */ React.createElement("a", {
    href: "https://careers.capdesk.com/",
    className: "text-highlight-on text-xl hover:underline"
  }, "Find out more")), /* @__PURE__ */ React.createElement(Arrow_default, {
    start: "hiring-arrow",
    end: "hiring-circle",
    lineColor: "#dddddd",
    showHead: false,
    endAnchor: "left",
    curveness: 1
  })));
};
var Team_default = Team;

// app/components/home/Tools.tsx
init_react();

// app/assets/images/datadog.png
var datadog_default = "/build/_assets/datadog-ATOR6HLJ.png";

// app/assets/images/github.png
var github_default2 = "/build/_assets/github-FSWDWFLK.png";

// app/assets/images/heroku.png
var heroku_default = "/build/_assets/heroku-EQYDDSAV.png";

// app/assets/images/launchdarkly.png
var launchdarkly_default = "/build/_assets/launchdarkly-RAI3VESX.png";

// app/components/home/Tools.tsx
var Tools = () => {
  const tools = {
    github: github_default2,
    heroku: heroku_default,
    datadog: datadog_default,
    launchdarkly: launchdarkly_default
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
  }, Object.entries(tools).map(([key, value]) => /* @__PURE__ */ React.createElement("div", {
    key,
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "m-auto",
    alt: value,
    src: value
  }))));
};
var Tools_default = Tools;

// app/components/layout/HomeSection.tsx
init_react();
var SectionColor;
(function(SectionColor2) {
  SectionColor2["LIGHT"] = "bg-dark-200";
  SectionColor2["DARK"] = "bg-dark-300";
  SectionColor2["TOOLS"] = "bg-dark-400";
})(SectionColor || (SectionColor = {}));
var HomeSection = ({
  color = SectionColor.DARK,
  title,
  children,
  circleId,
  smallTitle
}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: `px-7 lg:px-14 ${color}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "hidden md:flex justify-end pl-[95px] lg:pl-[124px]"
  }, /* @__PURE__ */ React.createElement("span", {
    style: { minWidth: "3px" },
    className: "h-full bg-grey-200 border-grey-200"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row items-start gap-7 py-12 sm:py-16 md:-ml-2.5"
  }, /* @__PURE__ */ React.createElement(Circle_default, {
    id: circleId,
    className: `${color} hidden md:block`
  }), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: `${smallTitle ? "text-3xl" : "text-4xl"} font-mono font-light`
  }, title), /* @__PURE__ */ React.createElement("div", null, children))))));
};
var HomeSection_default = HomeSection;

// route-module:/Users/maferland/dev/engineering/app/routes/index.tsx
async function loader() {
  const data = await fetch("https://capdesk-eng-dashboard.s3.eu-west-1.amazonaws.com/data.json").then((res) => res.json());
  const _a = data, { contributions } = _a, rest = __objRest(_a, ["contributions"]);
  const formatMonth2 = new Intl.DateTimeFormat("en-GB", { month: "short" }).format;
  const formatDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format;
  const MILLIS_IN_DAY = 864e5;
  const parseWeek = (dateInSeconds, week) => {
    const dateInMillis = Number(dateInSeconds) * 1e3;
    const date2 = new Date(dateInMillis);
    return {
      date: date2.toISOString(),
      month: formatMonth2(date2),
      week: week.map((day, index) => ({
        date: formatDate(new Date(dateInMillis + MILLIS_IN_DAY * index)),
        value: day
      }))
    };
  };
  const weeks = Object.entries(contributions).map(([dateInSeconds, week]) => parseWeek(dateInSeconds, week));
  const weeksByMonth = weeks.reduce((acc, curr) => {
    acc[curr.month] = acc[curr.month] || [];
    acc[curr.month].push(curr);
    return acc;
  }, {});
  const parsedContributions = Object.entries(weeksByMonth).map(([month, weeks2]) => ({
    month,
    weeks: weeks2
  }));
  return (0, import_remix7.json)(__spreadProps(__spreadValues({}, rest), { contributions: parsedContributions }));
}
function Index() {
  const { languages, releases, coverage, contributions, pull_requests, commits, workflow_runs } = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Hero_default, {
    title: "Dashboard"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col lg:flex-row gap-4 sm:gap-2 lg:gap-0 justify-between"
  }, /* @__PURE__ */ React.createElement(Paragraph_default, {
    className: "w-full lg:w-1/2"
  }, "Welcome to the home of all things Engineering at Capdesk. Get a real-time overview of key metrics in our product environment, plus find out more about our top team, and dive deep into our latest Engineering resources."), /* @__PURE__ */ React.createElement(TodayDate_default, null))), /* @__PURE__ */ React.createElement(HomeSection_default, {
    title: "Language distribution"
  }, /* @__PURE__ */ React.createElement(Languages_default, {
    languages
  })), /* @__PURE__ */ React.createElement(HomeSection_default, {
    title: "Deployments",
    color: SectionColor.LIGHT
  }, /* @__PURE__ */ React.createElement(Deployments_default, {
    releases
  })), /* @__PURE__ */ React.createElement(HomeSection_default, {
    title: "Contributions"
  }, /* @__PURE__ */ React.createElement(Contributions, {
    contributions,
    coverage,
    pull_requests,
    commits,
    workflow_runs
  })), /* @__PURE__ */ React.createElement(HomeSection_default, {
    title: "The Team",
    circleId: "hiring-arrow",
    color: SectionColor.LIGHT
  }, /* @__PURE__ */ React.createElement(Team_default, null)), /* @__PURE__ */ React.createElement(HomeSection_default, {
    title: "The tools we use",
    circleId: "tools",
    color: SectionColor.TOOLS,
    smallTitle: true
  }, /* @__PURE__ */ React.createElement(Tools_default, null)));
}

// route-module:/Users/maferland/dev/engineering/app/routes/team.tsx
var team_exports = {};
__export(team_exports, {
  default: () => Team2,
  loader: () => loader2
});
init_react();

// app/assets/team/index.ts
init_react();

// mdx:/Users/maferland/dev/engineering/app/assets/team/adam_kovacs.mdx
var adam_kovacs_exports = {};
__export(adam_kovacs_exports, {
  attributes: () => attributes,
  default: () => adam_kovacs_default,
  filename: () => filename,
  headers: () => headers,
  links: () => links2,
  meta: () => meta3
});
init_react();
var import_react5 = __toModule(require("react"));
var attributes = {
  "name": "\xC1d\xE1m Kov\xE1cs",
  "location": "Copenhagen",
  "team": "coreros",
  "fun_facts": {
    "work": "I created with the help of 2 fellow students a sailboat monitoring system from scratch, HW+SW, currently installed in 2 boats at the Adriatic.",
    "other": "Half of my thoughts are usually out at the sea casually sailing around \u26F5\uFE0F Also I recently found an alternative passion-candidate in the Lisbon waves \u{1F3C4}\u{1F3FD}\u200D\u2642\uFE0F."
  }
};
function MDXContent(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react5.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var adam_kovacs_default = MDXContent;
var filename = "adam_kovacs.mdx";
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta3 = typeof attributes !== "undefined" && attributes.meta;
var links2 = void 0;

// mdx:/Users/maferland/dev/engineering/app/assets/team/alexander_worm_olsen.mdx
var alexander_worm_olsen_exports = {};
__export(alexander_worm_olsen_exports, {
  attributes: () => attributes2,
  default: () => alexander_worm_olsen_default,
  filename: () => filename2,
  headers: () => headers2,
  links: () => links3,
  meta: () => meta4
});
init_react();
var import_react6 = __toModule(require("react"));
var attributes2 = {
  "name": "Alexander Worm Olsen",
  "location": "Copenhagen",
  "team": "hardcore",
  "fun_facts": {
    "work": "Being at Capdesk for 6+ years my job description is probably close to \u2018Google for Capdesk\u2019 at this point.",
    "other": "Board games and alcoholic beverages sums me up. I am an avid homebrewer myself, currently sitting on a solid 1 in 4 good brews (tips are welcome \u{1F605})"
  }
};
function MDXContent2(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react6.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var alexander_worm_olsen_default = MDXContent2;
var filename2 = "alexander_worm_olsen.mdx";
var headers2 = typeof attributes2 !== "undefined" && attributes2.headers;
var meta4 = typeof attributes2 !== "undefined" && attributes2.meta;
var links3 = void 0;

// mdx:/Users/maferland/dev/engineering/app/assets/team/andrei_mihai_nicolae.mdx
var andrei_mihai_nicolae_exports = {};
__export(andrei_mihai_nicolae_exports, {
  attributes: () => attributes3,
  default: () => andrei_mihai_nicolae_default,
  filename: () => filename3,
  headers: () => headers3,
  links: () => links4,
  meta: () => meta5
});
init_react();
var import_react7 = __toModule(require("react"));
var attributes3 = {
  "name": "Andrei-Mihai Nicolae",
  "location": "Bucharest, Romania",
  "team": "coreros",
  "fun_facts": {
    "work": "Lisp lives! But turned to Ruby to get the best equity management platform out there to everyone \u{1F601}\xA0Once a while ago, I worked on the first european humanoid that went to ISS",
    "other": "Everything music related, piano and keyboard player, baduk avid player, part-time chef at home, tennis and football player"
  }
};
function MDXContent3(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react7.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var andrei_mihai_nicolae_default = MDXContent3;
var filename3 = "andrei_mihai_nicolae.mdx";
var headers3 = typeof attributes3 !== "undefined" && attributes3.headers;
var meta5 = typeof attributes3 !== "undefined" && attributes3.meta;
var links4 = void 0;

// mdx:/Users/maferland/dev/engineering/app/assets/team/eray_tarhan.mdx
var eray_tarhan_exports = {};
__export(eray_tarhan_exports, {
  attributes: () => attributes4,
  default: () => eray_tarhan_default,
  filename: () => filename4,
  headers: () => headers4,
  links: () => links5,
  meta: () => meta6
});
init_react();
var import_react8 = __toModule(require("react"));
var attributes4 = {
  "name": "Eray Tarhan",
  "location": "Izmir, Turkey",
  "team": "coreros",
  "fun_facts": {
    "work": "I\u2019m a full-stack developer, nowadays undercover as a frontend developer (don\u2019t tell anyone my secret). I like all things javascript/typescript.",
    "other": "Dare me to eat spicy food to watch me self-destruct \u{1F336}\uFE0F"
  }
};
function MDXContent4(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react8.default.createElement(import_react8.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react8.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var eray_tarhan_default = MDXContent4;
var filename4 = "eray_tarhan.mdx";
var headers4 = typeof attributes4 !== "undefined" && attributes4.headers;
var meta6 = typeof attributes4 !== "undefined" && attributes4.meta;
var links5 = void 0;

// mdx:/Users/maferland/dev/engineering/app/assets/team/kevin_reece.mdx
var kevin_reece_exports = {};
__export(kevin_reece_exports, {
  attributes: () => attributes5,
  default: () => kevin_reece_default,
  filename: () => filename5,
  headers: () => headers5,
  links: () => links6,
  meta: () => meta7
});
init_react();
var import_react9 = __toModule(require("react"));
var attributes5 = {
  "name": "Kevin Reece",
  "location": "Berlin",
  "team": "coreros",
  "fun_facts": {
    "work": "I now have a composer stand as a standup desk, and as a result I want to learn to code entirely using air gesture shortcuts, to complete the composer effect \u{1F3BC}. However instead I\u2019m simultaneously learning to use mac, and to use a german keyboard, so spend most of my time awkwardly trying unfamiliar keyboard shortcuts \u{1F1E9}\u{1F1EA}\u{1F34F}.",
    "other": "I go bouldering as a hobby, and now that lockdowns are easing, I\u2019m trying to get back in to it \u{1F9D7}. I also take my dog along, but he\u2019s a terrible climber \u{1F415}\u{1F937}."
  }
};
function MDXContent5(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react9.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var kevin_reece_default = MDXContent5;
var filename5 = "kevin_reece.mdx";
var headers5 = typeof attributes5 !== "undefined" && attributes5.headers;
var meta7 = typeof attributes5 !== "undefined" && attributes5.meta;
var links6 = void 0;

// mdx:/Users/maferland/dev/engineering/app/assets/team/krystof_spiller.mdx
var krystof_spiller_exports = {};
__export(krystof_spiller_exports, {
  attributes: () => attributes6,
  default: () => krystof_spiller_default,
  filename: () => filename6,
  headers: () => headers6,
  links: () => links7,
  meta: () => meta8
});
init_react();
var import_react10 = __toModule(require("react"));
var attributes6 = {
  "name": "Krystof Spiller",
  "location": "Copenhagen",
  "team": "hardcore",
  "fun_facts": {
    "work": "The n00b that you can blame when your stuff isn\u2019t working \u{1F920} I\u2019ll also be the first one to tell you when your Slack <-> GitHub integration isn\u2019t working",
    "other": "Otherwise known for going hard on our social after-parties \u{1F57A}"
  }
};
function MDXContent6(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react10.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var krystof_spiller_default = MDXContent6;
var filename6 = "krystof_spiller.mdx";
var headers6 = typeof attributes6 !== "undefined" && attributes6.headers;
var meta8 = typeof attributes6 !== "undefined" && attributes6.meta;
var links7 = void 0;

// mdx:/Users/maferland/dev/engineering/app/assets/team/marc-antoine_ferland.mdx
var marc_antoine_ferland_exports = {};
__export(marc_antoine_ferland_exports, {
  attributes: () => attributes7,
  default: () => marc_antoine_ferland_default,
  filename: () => filename7,
  headers: () => headers7,
  links: () => links8,
  meta: () => meta9
});
init_react();
var import_react11 = __toModule(require("react"));
var attributes7 = {
  "name": "Marc-Antoine Ferland",
  "location": "Qu\xE9bec, Canada",
  "team": "hardcore",
  "fun_facts": {
    "work": "Don\u2019t get me started on why your project should use typescript... even if I have a love-hate relationship with it \u{1F605}",
    "other": "On my time off you can find me running or baking. Ask me for my sourdough recipe \u{1F61B}"
  }
};
function MDXContent7(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react11.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var marc_antoine_ferland_default = MDXContent7;
var filename7 = "marc-antoine_ferland.mdx";
var headers7 = typeof attributes7 !== "undefined" && attributes7.headers;
var meta9 = typeof attributes7 !== "undefined" && attributes7.meta;
var links8 = void 0;

// mdx:/Users/maferland/dev/engineering/app/assets/team/maria_muhandes.mdx
var maria_muhandes_exports = {};
__export(maria_muhandes_exports, {
  attributes: () => attributes8,
  default: () => maria_muhandes_default,
  filename: () => filename8,
  headers: () => headers8,
  links: () => links9,
  meta: () => meta10
});
init_react();
var import_react12 = __toModule(require("react"));
var attributes8 = {
  "name": "Maria Muhandes",
  "location": "Wonderful Copenhagen",
  "team": "coreros",
  "fun_facts": {
    "work": "I am the fortunate one to be part of Los Coreros, as the resident PM. Known as Rosalba\u2019s evil twin \u{1F608}",
    "other": "I used to work as a bartender and host parties in the meatpacking district in CPH, which meant that in the weekends my bed time started at 7.30 am. Fast forward to today, now on weekends i go to bed at 11 pm. Goodbye youth and hallo darkness my old friend \u{1F389}"
  }
};
function MDXContent8(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react12.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var maria_muhandes_default = MDXContent8;
var filename8 = "maria_muhandes.mdx";
var headers8 = typeof attributes8 !== "undefined" && attributes8.headers;
var meta10 = typeof attributes8 !== "undefined" && attributes8.meta;
var links9 = void 0;

// mdx:/Users/maferland/dev/engineering/app/assets/team/mikkel_boje.mdx
var mikkel_boje_exports = {};
__export(mikkel_boje_exports, {
  attributes: () => attributes9,
  default: () => mikkel_boje_default,
  filename: () => filename9,
  headers: () => headers9,
  links: () => links10,
  meta: () => meta11
});
init_react();
var import_react13 = __toModule(require("react"));
var attributes9 = {
  "name": "Mikkel Boje",
  "location": "Copenhagen, Denmark",
  "team": "head_of",
  "fun_facts": {
    "work": "I love everything-product from business models, user needs, and engineering frameworks to crisp user interfaces. I regard my colleagues as the most motivating part of my job.",
    "other": "I love almost all types of sports and do some once in a while. This comes in handy for the calories balance as I also like to eat (not cook) nice food. I get inspired by meeting new people with different backgrounds."
  }
};
function MDXContent9(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react13.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var mikkel_boje_default = MDXContent9;
var filename9 = "mikkel_boje.mdx";
var headers9 = typeof attributes9 !== "undefined" && attributes9.headers;
var meta11 = typeof attributes9 !== "undefined" && attributes9.meta;
var links10 = void 0;

// mdx:/Users/maferland/dev/engineering/app/assets/team/neva_stumberger.mdx
var neva_stumberger_exports = {};
__export(neva_stumberger_exports, {
  attributes: () => attributes10,
  default: () => neva_stumberger_default,
  filename: () => filename10,
  headers: () => headers10,
  links: () => links11,
  meta: () => meta12
});
init_react();
var import_react14 = __toModule(require("react"));
var attributes10 = {
  "name": "Neva Stumberger",
  "location": "Copenhagen",
  "team": "hardcore",
  "fun_facts": {
    "work": "My greatest source of motivation at work: big vision, empowerment and seeing other people grow.",
    "other": "I like to wake up super early in the morning. No alarm clock ever. Yep, even on the weekends. \u{1F937}\u200D\u2640\uFE0F"
  }
};
function MDXContent10(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react14.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var neva_stumberger_default = MDXContent10;
var filename10 = "neva_stumberger.mdx";
var headers10 = typeof attributes10 !== "undefined" && attributes10.headers;
var meta12 = typeof attributes10 !== "undefined" && attributes10.meta;
var links11 = void 0;

// mdx:/Users/maferland/dev/engineering/app/assets/team/pawel_wawreszuk.mdx
var pawel_wawreszuk_exports = {};
__export(pawel_wawreszuk_exports, {
  attributes: () => attributes11,
  default: () => pawel_wawreszuk_default,
  filename: () => filename11,
  headers: () => headers11,
  links: () => links12,
  meta: () => meta13
});
init_react();
var import_react15 = __toModule(require("react"));
var attributes11 = {
  "name": "Pawel Wawreszuk",
  "location": "Valencia, Spain",
  "team": "tx",
  "fun_facts": {
    "work": "I use nvim and tmux to do 99% of my programming work. Before Capdesk I have never used Ruby and/or Rails at work.",
    "other": "I\u2019ve accumulated 8.1k \u201Cmindful minutes\u201D in the [Waking Up](https://app.wakingup.com/) meditation app. I build my own keyboards."
  }
};
function MDXContent11(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react15.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var pawel_wawreszuk_default = MDXContent11;
var filename11 = "pawel_wawreszuk.mdx";
var headers11 = typeof attributes11 !== "undefined" && attributes11.headers;
var meta13 = typeof attributes11 !== "undefined" && attributes11.meta;
var links12 = void 0;

// mdx:/Users/maferland/dev/engineering/app/assets/team/pete_radcliffe.mdx
var pete_radcliffe_exports = {};
__export(pete_radcliffe_exports, {
  attributes: () => attributes12,
  default: () => pete_radcliffe_default,
  filename: () => filename12,
  headers: () => headers12,
  links: () => links13,
  meta: () => meta14
});
init_react();
var import_react16 = __toModule(require("react"));
var attributes12 = {
  "name": "Pete Radcliffe",
  "location": "London, UK",
  "team": "coreros",
  "fun_facts": {
    "work": "I used to do cloud backend stuff in my previous job but I\u2019m sharpening my frontend skills now! \u{1F4AA}",
    "other": "\u{1F3B8}\xA0 I like to play guitar, \u{1F3A4}\xA0sing and \u{1F3B5}\xA0write songs and I play in a post hardcore band"
  }
};
function MDXContent12(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react16.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var pete_radcliffe_default = MDXContent12;
var filename12 = "pete_radcliffe.mdx";
var headers12 = typeof attributes12 !== "undefined" && attributes12.headers;
var meta14 = typeof attributes12 !== "undefined" && attributes12.meta;
var links13 = void 0;

// mdx:/Users/maferland/dev/engineering/app/assets/team/rafael_caseiro_lemos.mdx
var rafael_caseiro_lemos_exports = {};
__export(rafael_caseiro_lemos_exports, {
  attributes: () => attributes13,
  default: () => rafael_caseiro_lemos_default,
  filename: () => filename13,
  headers: () => headers13,
  links: () => links14,
  meta: () => meta15
});
init_react();
var import_react17 = __toModule(require("react"));
var attributes13 = {
  "name": "Rafael Caseiro Lemos",
  "location": "Copenhagen, Denmark",
  "team": "tx",
  "fun_facts": {
    "work": "My first job involved developing a platform from scratch for a government company. While studying. And with only one teammate.",
    "other": "I fulfil my childhood dream of being a racing driver by playing with a toy steering wheel at home."
  }
};
function MDXContent13(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react17.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var rafael_caseiro_lemos_default = MDXContent13;
var filename13 = "rafael_caseiro_lemos.mdx";
var headers13 = typeof attributes13 !== "undefined" && attributes13.headers;
var meta15 = typeof attributes13 !== "undefined" && attributes13.meta;
var links14 = void 0;

// mdx:/Users/maferland/dev/engineering/app/assets/team/ricardo_ventura.mdx
var ricardo_ventura_exports = {};
__export(ricardo_ventura_exports, {
  attributes: () => attributes14,
  default: () => ricardo_ventura_default,
  filename: () => filename14,
  headers: () => headers14,
  links: () => links15,
  meta: () => meta16
});
init_react();
var import_react18 = __toModule(require("react"));
var attributes14 = {
  "name": "Ricardo Ventura",
  "location": "Portugal",
  "team": "hardcore",
  "fun_facts": {
    "work": "I always have an entrepreneurial/business focus on any project I\u2019m working on \u{1F642}",
    "other": "I have a deep interest on Japanese culture and am still learning Japanese \u{1F38C}."
  }
};
function MDXContent14(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react18.default.createElement(import_react18.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react18.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var ricardo_ventura_default = MDXContent14;
var filename14 = "ricardo_ventura.mdx";
var headers14 = typeof attributes14 !== "undefined" && attributes14.headers;
var meta16 = typeof attributes14 !== "undefined" && attributes14.meta;
var links15 = void 0;

// mdx:/Users/maferland/dev/engineering/app/assets/team/rosalba_giuffrida.mdx
var rosalba_giuffrida_exports = {};
__export(rosalba_giuffrida_exports, {
  attributes: () => attributes15,
  default: () => rosalba_giuffrida_default,
  filename: () => filename15,
  headers: () => headers15,
  links: () => links16,
  meta: () => meta17
});
init_react();
var import_react19 = __toModule(require("react"));
var attributes15 = {
  "name": "Rosalba Giuffrida",
  "location": "Udine, Italy (most of the time) & Copenhagen, Denmark (sometimes)",
  "team": "head_of",
  "fun_facts": {
    "work": "I\u2019m a nerd of Product Management. I love talking about anything related to it, watch out when I get started \u{1F607}",
    "other": "I love theater and improv (that have a huge  overlapping with product management from my POV). Very proud of my two kids and of my tiramisu \u{1F476}\xA0\u{1F60B}\xA0\u{1F1EE}\u{1F1F9}"
  }
};
function MDXContent15(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react19.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var rosalba_giuffrida_default = MDXContent15;
var filename15 = "rosalba_giuffrida.mdx";
var headers15 = typeof attributes15 !== "undefined" && attributes15.headers;
var meta17 = typeof attributes15 !== "undefined" && attributes15.meta;
var links16 = void 0;

// mdx:/Users/maferland/dev/engineering/app/assets/team/sarolta_sebo.mdx
var sarolta_sebo_exports = {};
__export(sarolta_sebo_exports, {
  attributes: () => attributes16,
  default: () => sarolta_sebo_default,
  filename: () => filename16,
  headers: () => headers16,
  links: () => links17,
  meta: () => meta18
});
init_react();
var import_react20 = __toModule(require("react"));
var attributes16 = {
  "name": "Sarolta Sebo",
  "location": "Vejle, Denmark",
  "team": "coreros",
  "fun_facts": {
    "work": "I love a good workshop with my team! Especially the planning part, where I have to decide which method or strategy would help us progress best in our discovery.",
    "other": "In 2019 I adopted a podenco from Spain. He is the sweetest creature on Earth and looks a bit like Dobby from HP!"
  }
};
function MDXContent16(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react20.default.createElement(import_react20.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react20.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var sarolta_sebo_default = MDXContent16;
var filename16 = "sarolta_sebo.mdx";
var headers16 = typeof attributes16 !== "undefined" && attributes16.headers;
var meta18 = typeof attributes16 !== "undefined" && attributes16.meta;
var links17 = void 0;

// mdx:/Users/maferland/dev/engineering/app/assets/team/vincent_seguin.mdx
var vincent_seguin_exports = {};
__export(vincent_seguin_exports, {
  attributes: () => attributes17,
  default: () => vincent_seguin_default,
  filename: () => filename17,
  headers: () => headers17,
  links: () => links18,
  meta: () => meta19
});
init_react();
var import_react21 = __toModule(require("react"));
var attributes17 = {
  "name": "Vincent Seguin",
  "location": "Qu\xE9bec, Canada",
  "team": "head_of",
  "fun_facts": {
    "work": "I am very lucky to head our team of amazing engineers at Capdesk! My main occupation is to be late at meetings.",
    "other": "I can sleep on demand AND I own close to 3000 small cars. I don\u2019t have any other major issues."
  }
};
function MDXContent17(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react21.default.createElement(import_react21.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react21.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var vincent_seguin_default = MDXContent17;
var filename17 = "vincent_seguin.mdx";
var headers17 = typeof attributes17 !== "undefined" && attributes17.headers;
var meta19 = typeof attributes17 !== "undefined" && attributes17.meta;
var links18 = void 0;

// mdx:/Users/maferland/dev/engineering/app/assets/team/marc_ruaix.mdx
var marc_ruaix_exports = {};
__export(marc_ruaix_exports, {
  attributes: () => attributes18,
  default: () => marc_ruaix_default,
  filename: () => filename18,
  headers: () => headers18,
  links: () => links19,
  meta: () => meta20
});
init_react();
var import_react22 = __toModule(require("react"));
var attributes18 = {
  "name": "Marc Ruaix",
  "location": "London",
  "team": "head_of",
  "fun_facts": {
    "work": "I\u2019m always taking notes about new initiatives. I do not ever trust that my future me will manage to come up with such greatness again.",
    "other": "I have an unrequited love for the absurd. I can\u2019t be rational at work without being irrational outside it. But were are at work, so you\u2019ll never find out!"
  }
};
function MDXContent18(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react22.default.createElement(import_react22.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react22.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var marc_ruaix_default = MDXContent18;
var filename18 = "marc_ruaix.mdx";
var headers18 = typeof attributes18 !== "undefined" && attributes18.headers;
var meta20 = typeof attributes18 !== "undefined" && attributes18.meta;
var links19 = void 0;

// mdx:/Users/maferland/dev/engineering/app/assets/team/edney_pitta.mdx
var edney_pitta_exports = {};
__export(edney_pitta_exports, {
  attributes: () => attributes19,
  default: () => edney_pitta_default,
  filename: () => filename19,
  headers: () => headers19,
  links: () => links20,
  meta: () => meta21
});
init_react();
var import_react23 = __toModule(require("react"));
var attributes19 = {
  "name": "Edney Pitta",
  "location": "Portual",
  "team": "tx",
  "fun_facts": {
    "work": "In my very first internship, I started as a front-end developer doing jQuery but then moved on to back-end development after 6 months, thinking I\u2019d never go back to JS madness again. 10 years have passed. I\u2019m a front-end developer \u{1F31A}",
    "other": "I have some intense analysis paralysis when buying things - it took me a year to research and buy the perfect electric coffee grinder. The very next day I was already looking for another one."
  }
};
function MDXContent19(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react23.default.createElement(import_react23.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react23.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var edney_pitta_default = MDXContent19;
var filename19 = "edney_pitta.mdx";
var headers19 = typeof attributes19 !== "undefined" && attributes19.headers;
var meta21 = typeof attributes19 !== "undefined" && attributes19.meta;
var links20 = void 0;

// app/assets/team/index.ts
var team_default = [
  kevin_reece_exports,
  adam_kovacs_exports,
  andrei_mihai_nicolae_exports,
  rosalba_giuffrida_exports,
  mikkel_boje_exports,
  sarolta_sebo_exports,
  ricardo_ventura_exports,
  alexander_worm_olsen_exports,
  neva_stumberger_exports,
  krystof_spiller_exports,
  marc_antoine_ferland_exports,
  maria_muhandes_exports,
  pete_radcliffe_exports,
  vincent_seguin_exports,
  pawel_wawreszuk_exports,
  eray_tarhan_exports,
  rafael_caseiro_lemos_exports,
  marc_ruaix_exports,
  edney_pitta_exports
];

// route-module:/Users/maferland/dev/engineering/app/routes/team.tsx
var import_remix8 = __toModule(require_remix());
var Block = ({ title, children }) => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "text-highlight-on font-mono"
  }, title), /* @__PURE__ */ React.createElement("span", {
    className: "font-inter"
  }, children));
};
var Member = ({ image, name, location, fun_facts: { work, other } }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "max-w-[390px] mx-auto"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "m-auto md:m-0",
    width: "390",
    src: `/img/team/${image}`
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-2 pt-6 text-xl leading-7 font-light"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-2xl font-mono"
  }, name), /* @__PURE__ */ React.createElement(Block, {
    title: "Location"
  }, location), /* @__PURE__ */ React.createElement(Block, {
    title: "About me"
  }, work), /* @__PURE__ */ React.createElement(Block, {
    title: "Fun fact"
  }, other)));
};
var Squad = ({ members }) => /* @__PURE__ */ React.createElement("div", {
  className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-16"
}, members.map((member) => /* @__PURE__ */ React.createElement(Member, __spreadValues({
  key: member.name
}, member))));
function memberFromModule({
  filename: filename20,
  attributes: { name, location, team, fun_facts }
}) {
  return {
    image: filename20.replace(/\.mdx?$/, ".jpg"),
    name,
    location,
    team,
    fun_facts
  };
}
async function loader2() {
  return (0, import_remix8.json)(team_default.map(memberFromModule));
}
function Team2() {
  const members = (0, import_remix8.useLoaderData)();
  const squads = members.reduce((acc, curr) => {
    const { team } = curr;
    if (!acc[team]) {
      acc[team] = [];
    }
    acc[team].push(curr);
    return acc;
  }, { head_of: [], hardcore: [], coreros: [], tx: [] });
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Hero_default, {
    title: "Team"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col lg:flex-row gap-2 lg:gap-0 justify-between"
  }, /* @__PURE__ */ React.createElement(Paragraph_default, {
    className: "w-full lg:w-1/2"
  }, "Say hello to our dream team of engineers, product managers, product designers and more. These guys make Capdesk run like clockwork, whilst adding in new features and constantly iterating. Plus, having some fun along the way..."), /* @__PURE__ */ React.createElement(TodayDate_default, null))), /* @__PURE__ */ React.createElement(Section_default, {
    title: "Heads"
  }, /* @__PURE__ */ React.createElement(Squad, {
    members: squads.head_of
  })), /* @__PURE__ */ React.createElement(Section_default, {
    title: "HardCore",
    light: true
  }, /* @__PURE__ */ React.createElement(Squad, {
    members: squads.hardcore
  })), /* @__PURE__ */ React.createElement(Section_default, {
    title: "Los Coreros"
  }, /* @__PURE__ */ React.createElement(Squad, {
    members: squads.coreros
  })), /* @__PURE__ */ React.createElement(Section_default, {
    title: "Secondaries",
    light: true
  }, /* @__PURE__ */ React.createElement(Squad, {
    members: squads.tx
  })));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/resources": {
    id: "routes/resources",
    parentId: "root",
    path: "resources",
    index: void 0,
    caseSensitive: void 0,
    module: resources_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/team": {
    id: "routes/team",
    parentId: "root",
    path: "team",
    index: void 0,
    caseSensitive: void 0,
    module: team_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
