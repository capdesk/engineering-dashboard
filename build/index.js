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
var tailwind_default = "/build/_assets/tailwind-V665327B.css";

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
  }), " ", title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), /* @__PURE__ */ React.createElement(import_remix4.LiveReload, null)));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYWZlcmxhbmQvZGV2L2VuZ2luZWVyaW5nL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9BcnJvdy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvQ2lyY2xlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9OYXZiYXIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0J1dHRvbi50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYWZlcmxhbmQvZGV2L2VuZ2luZWVyaW5nL2FwcC9yb3V0ZXMvcmVzb3VyY2VzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9sYXlvdXQvSGVyby50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvbGF5b3V0L1NlY3Rpb24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1RvZGF5RGF0ZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvdHlwb2dyYXBoeS9QYXJhZ3JhcGgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvbWFmZXJsYW5kL2Rldi9lbmdpbmVlcmluZy9hcHAvcm91dGVzL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9ob21lL0NvbnRyaWJ1dGlvbnMudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0NhbGVuZGFyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Ub29sdGlwLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy90eXBvZ3JhcGh5L0gzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9ob21lL0RlcGxveW1lbnRzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9ob21lL0xhbmd1YWdlcy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUHJvZ3Jlc3NDaXJjbGUudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2hvbWUvVGVhbS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvaG9tZS9NYXAudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2hvbWUvVG9vbHMudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2xheW91dC9Ib21lU2VjdGlvbi50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9tYWZlcmxhbmQvZGV2L2VuZ2luZWVyaW5nL2FwcC9yb3V0ZXMvdGVhbS50c3giLCAiLi4vYXBwL2Fzc2V0cy90ZWFtL2luZGV4LnRzIiwgIm1keDovVXNlcnMvbWFmZXJsYW5kL2Rldi9lbmdpbmVlcmluZy9hcHAvYXNzZXRzL3RlYW0vYWRhbV9rb3ZhY3MubWR4IiwgIm1keDovVXNlcnMvbWFmZXJsYW5kL2Rldi9lbmdpbmVlcmluZy9hcHAvYXNzZXRzL3RlYW0vYWxleGFuZGVyX3dvcm1fb2xzZW4ubWR4IiwgIm1keDovVXNlcnMvbWFmZXJsYW5kL2Rldi9lbmdpbmVlcmluZy9hcHAvYXNzZXRzL3RlYW0vYW5kcmVpX21paGFpX25pY29sYWUubWR4IiwgIm1keDovVXNlcnMvbWFmZXJsYW5kL2Rldi9lbmdpbmVlcmluZy9hcHAvYXNzZXRzL3RlYW0vZXJheV90YXJoYW4ubWR4IiwgIm1keDovVXNlcnMvbWFmZXJsYW5kL2Rldi9lbmdpbmVlcmluZy9hcHAvYXNzZXRzL3RlYW0va2V2aW5fcmVlY2UubWR4IiwgIm1keDovVXNlcnMvbWFmZXJsYW5kL2Rldi9lbmdpbmVlcmluZy9hcHAvYXNzZXRzL3RlYW0va3J5c3RvZl9zcGlsbGVyLm1keCIsICJtZHg6L1VzZXJzL21hZmVybGFuZC9kZXYvZW5naW5lZXJpbmcvYXBwL2Fzc2V0cy90ZWFtL21hcmMtYW50b2luZV9mZXJsYW5kLm1keCIsICJtZHg6L1VzZXJzL21hZmVybGFuZC9kZXYvZW5naW5lZXJpbmcvYXBwL2Fzc2V0cy90ZWFtL21hcmlhX211aGFuZGVzLm1keCIsICJtZHg6L1VzZXJzL21hZmVybGFuZC9kZXYvZW5naW5lZXJpbmcvYXBwL2Fzc2V0cy90ZWFtL21pa2tlbF9ib2plLm1keCIsICJtZHg6L1VzZXJzL21hZmVybGFuZC9kZXYvZW5naW5lZXJpbmcvYXBwL2Fzc2V0cy90ZWFtL25ldmFfc3R1bWJlcmdlci5tZHgiLCAibWR4Oi9Vc2Vycy9tYWZlcmxhbmQvZGV2L2VuZ2luZWVyaW5nL2FwcC9hc3NldHMvdGVhbS9wYXdlbF93YXdyZXN6dWsubWR4IiwgIm1keDovVXNlcnMvbWFmZXJsYW5kL2Rldi9lbmdpbmVlcmluZy9hcHAvYXNzZXRzL3RlYW0vcGV0ZV9yYWRjbGlmZmUubWR4IiwgIm1keDovVXNlcnMvbWFmZXJsYW5kL2Rldi9lbmdpbmVlcmluZy9hcHAvYXNzZXRzL3RlYW0vcmFmYWVsX2Nhc2Vpcm9fbGVtb3MubWR4IiwgIm1keDovVXNlcnMvbWFmZXJsYW5kL2Rldi9lbmdpbmVlcmluZy9hcHAvYXNzZXRzL3RlYW0vcmljYXJkb192ZW50dXJhLm1keCIsICJtZHg6L1VzZXJzL21hZmVybGFuZC9kZXYvZW5naW5lZXJpbmcvYXBwL2Fzc2V0cy90ZWFtL3Jvc2FsYmFfZ2l1ZmZyaWRhLm1keCIsICJtZHg6L1VzZXJzL21hZmVybGFuZC9kZXYvZW5naW5lZXJpbmcvYXBwL2Fzc2V0cy90ZWFtL3Nhcm9sdGFfc2Viby5tZHgiLCAibWR4Oi9Vc2Vycy9tYWZlcmxhbmQvZGV2L2VuZ2luZWVyaW5nL2FwcC9hc3NldHMvdGVhbS92aW5jZW50X3NlZ3Vpbi5tZHgiLCAibWR4Oi9Vc2Vycy9tYWZlcmxhbmQvZGV2L2VuZ2luZWVyaW5nL2FwcC9hc3NldHMvdGVhbS9tYXJjX3J1YWl4Lm1keCIsICJtZHg6L1VzZXJzL21hZmVybGFuZC9kZXYvZW5naW5lZXJpbmcvYXBwL2Fzc2V0cy90ZWFtL2VkbmV5X3BpdHRhLm1keCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL21hZmVybGFuZC9kZXYvZW5naW5lZXJpbmcvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL21hZmVybGFuZC9kZXYvZW5naW5lZXJpbmcvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9tYWZlcmxhbmQvZGV2L2VuZ2luZWVyaW5nL2FwcC9yb3V0ZXMvcmVzb3VyY2VzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvbWFmZXJsYW5kL2Rldi9lbmdpbmVlcmluZy9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvbWFmZXJsYW5kL2Rldi9lbmdpbmVlcmluZy9hcHAvcm91dGVzL3RlYW0udHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9yZXNvdXJjZXNcIjoge1xuICAgIGlkOiBcInJvdXRlcy9yZXNvdXJjZXNcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJyZXNvdXJjZXNcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfSxcbiAgXCJyb3V0ZXMvdGVhbVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3RlYW1cIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJ0ZWFtXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJ1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSAncmVtaXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz4pXG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpXG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZSgnPCFET0NUWVBFIGh0bWw+JyArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSlcbn1cbiIsICJpbXBvcnQgcHJvZ3Jlc3MgZnJvbSAncmVhY3QtY2lyY3VsYXItcHJvZ3Jlc3NiYXIvZGlzdC9zdHlsZXMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IExpbmtzLCBMaXZlUmVsb2FkLCBNZXRhLCBPdXRsZXQsIFNjcmlwdHMsIFNjcm9sbFJlc3RvcmF0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgRm9vdGVyIGZyb20gJ34vY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyJ1xuaW1wb3J0IE5hdmJhciBmcm9tICd+L2NvbXBvbmVudHMvTmF2YmFyJ1xuaW1wb3J0IGZvbnRzIGZyb20gJ34vc3R5bGVzL2ZvbnRzLmNzcydcbmltcG9ydCByZXNldCBmcm9tICd+L3N0eWxlcy9yZXNldC5jc3MnXG5pbXBvcnQgdGFpbHdpbmQgZnJvbSAnLi90YWlsd2luZC5jc3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiByZXNldCB9LFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHRhaWx3aW5kIH0sXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogZm9udHMgfSxcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBwcm9ncmVzcyB9LFxuICAgIHsgcmVsOiAnaWNvbicsIHR5cGU6ICdpbWFnZS9wbmcnLCBocmVmOiAnL2Zhdmljb24uc3ZnJyB9LFxuICBdXG59XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdDYXBkZXNrIEVuZ2luZWVyaW5nIERhc2hib2FyZCcsXG4gICAgZGVzY3JpcHRpb246IFwiT3VyIGxpdmUgRW5naW5lZXJpbmcgRGFzaGJvYXJkIG9mZmVycyBhIHF1aWNrIHNuZWFrIHBlZWsgaW50byBDYXBkZXNrJ3MgZW5naW5lZXJpbmcgd29ybGQuXCIsXG4gIH1cbn1cblxuZnVuY3Rpb24gRG9jdW1lbnQoeyBjaGlsZHJlbiwgdGl0bGUgfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlOyB0aXRsZT86IHN0cmluZyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPiB7dGl0bGUgPyA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+IDogbnVsbH1cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx7fT4pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgZW5naW5lZXJpbmdTbWFsbCBmcm9tICd+L2Fzc2V0cy9pbWFnZXMvZW5naW5lZXJpbmctc21hbGwuc3ZnJ1xuaW1wb3J0IGdpdGh1YiBmcm9tICd+L2Fzc2V0cy9pbWFnZXMvZ2l0aHViLnN2ZydcbmltcG9ydCBBcnJvdyBmcm9tICd+L2NvbXBvbmVudHMvQXJyb3cnXG5pbXBvcnQgQ2lyY2xlIGZyb20gJ34vY29tcG9uZW50cy9DaXJjbGUnXG5cbmNvbnN0IGNvcHlyaWdodCA9IGBcdTAwQTkke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gQ2FwZGVzay4gQWxsIHJpZ2h0cyByZXNlcnZlZGBcblxuY29uc3QgRm9vdGVyOiBSZWFjdC5GQzx7fT4gPSAoKSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCBpc0hvbWUgPSBsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy8nXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweC03IG1kOnB4LTE0IHB0LTEyIHBiLTggYmctZGFyay0zMDAgZmxleCBmbGV4LWNvbCBnYXAtMTZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBzbTp3LVsxMzlweF0gbGc6dy1bMjUwcHhdXCI+XG4gICAgICAgICAgICB7aXNIb21lID8gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxDaXJjbGUgY2xhc3NOYW1lPVwiYmctZGFyay0zMDAgaGlkZGVuIHNtOmJsb2NrXCIgaWQ9XCJmb290ZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxBcnJvdyBzdGFydD1cInRvb2xzXCIgZW5kPVwiZm9vdGVyXCIgZW5kQW5jaG9yPVwidG9wXCIgLz5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCI4NFwiIHNyYz17ZW5naW5lZXJpbmdTbWFsbH0gLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gdGV4dC1yaWdodCBmb250LWludGVyXCI+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCIgdG89XCIvXCI+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiIHRvPVwiL3RlYW1cIj5cbiAgICAgICAgICAgIFRlYW1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiaG92ZXI6dW5kZXJsaW5lXCIgdG89XCIvcmVzb3VyY2VzXCI+XG4gICAgICAgICAgICBSZXNvdXJjZXNcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbC1yZXZlcnNlIGdhcC0yIHNtOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXNtIGZvbnQtaW50ZXJcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57Y29weXJpZ2h0fTwvcD5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIHNtOmp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlciBnYXAtMiBzbTpnYXAtMiB1bmRlcmxpbmVcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY2FwZGVzay9lbmdpbmVlcmluZy1kYXNoYm9hcmRcIlxuICAgICAgICA+XG4gICAgICAgICAgPGltZyBzcmM9e2dpdGh1Yn0gLz4gVmlldyBkYXNoYm9hcmQgY29kZVxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgWGFycm93LCB7IHhhcnJvd1Byb3BzVHlwZSB9IGZyb20gJ3JlYWN0LXhhcnJvd3MnXG5cbmNvbnN0IEFycm93OiBSZWFjdC5GQzx4YXJyb3dQcm9wc1R5cGU+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzaG93Q2hpbGQsIHNldFNob3dDaGlsZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAvLyBXYWl0IHVudGlsIGFmdGVyIGNsaWVudC1zaWRlIGh5ZHJhdGlvbiB0byBzaG93XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2hvd0NoaWxkKHRydWUpXG4gICAgcmV0dXJuICgpID0+IHNldFNob3dDaGlsZChmYWxzZSlcbiAgfSwgW10pXG5cbiAgaWYgKCFzaG93Q2hpbGQpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6aW5saW5lXCI+XG4gICAgICA8WGFycm93IHsuLi5wcm9wc30gbGluZUNvbG9yPVwiI2EyOWJiNlwiIHNob3dIZWFkPXtmYWxzZX0gc2hvd1hhcnJvdz17c2hvd0NoaWxkfSAvPlxuICAgIDwvc3Bhbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJvd1xuIiwgImNvbnN0IENpcmNsZTogUmVhY3QuRkM8eyBpZD86IHN0cmluZzsgY2xhc3NOYW1lPzogc3RyaW5nIH0+ID0gKHsgaWQsIGNsYXNzTmFtZSB9KSA9PiAoXG4gIDxkaXYgaWQ9e2lkfSBjbGFzc05hbWU9e2BibG9jayBweS0yICR7Y2xhc3NOYW1lfSB6LTEwYH0+XG4gICAgPGRpdiBjbGFzc05hbWU9e2B3LTQgaC00IGJvcmRlci0yIGJvcmRlci1oaWdobGlnaHQtb24gcm91bmRlZC1mdWxsICR7Y2xhc3NOYW1lfWB9IC8+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBDaXJjbGVcbiIsICJpbXBvcnQgeyB1c2VMb2NhdGlvbiwgdXNlTWF0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgeyBMaW5rLCBMaW5rUHJvcHMsIHVzZVJlc29sdmVkUGF0aCB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IGNhcGRlc2sgZnJvbSAnfi9hc3NldHMvaW1hZ2VzL2NhcGRlc2suc3ZnJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnfi9jb21wb25lbnRzL0J1dHRvbidcblxuY29uc3QgdXNlQWN0aXZlID0gKHRvOiBUbykgPT4ge1xuICBjb25zdCByZXNvbHZlZCA9IHVzZVJlc29sdmVkUGF0aCh0bylcbiAgY29uc3QgbWF0Y2ggPSB1c2VNYXRjaCh7IHBhdGg6IHJlc29sdmVkLnBhdGhuYW1lLCBlbmQ6IHRydWUgfSlcbiAgcmV0dXJuIEJvb2xlYW4obWF0Y2gpXG59XG5cbmNvbnN0IE5hdkxpbms6IFJlYWN0LkZDPExpbmtQcm9wcz4gPSAoeyB0bywgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgaXNBY3RpdmUgPSB1c2VBY3RpdmUodG8pXG5cbiAgcmV0dXJuIChcbiAgICA8TGluayB0bz17dG99IHsuLi5wcm9wc30+XG4gICAgICA8QnV0dG9uIGFjdGl2ZT17aXNBY3RpdmV9PntjaGlsZHJlbn08L0J1dHRvbj5cbiAgICA8L0xpbms+XG4gIClcbn1cblxuY29uc3QgTmF2YmFyOiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtMiBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB5LTggcHgtNyBsZzpweC0xNiBiZy1kYXJrLTMwMFwiPlxuICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgPGltZyBoZWlnaHQ9XCIzN1wiIHNyYz17Y2FwZGVza30gLz5cbiAgICA8L0xpbms+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgZ2FwLTQganVzdGlmeS1lbmQgaXRlbXMtZW5kXCI+XG4gICAgICA8TmF2TGluayB0bz1cIi9yZXNvdXJjZXNcIj5SRVNPVVJDRVM8L05hdkxpbms+XG4gICAgICA8TmF2TGluayB0bz1cIi90ZWFtXCI+VEVBTTwvTmF2TGluaz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxuIiwgImNvbnN0IEJ1dHRvbjogUmVhY3QuRkM8eyBhY3RpdmU/OiBib29sZWFuIH0+ID0gKHsgY2hpbGRyZW4sIGFjdGl2ZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BidXR0b24gZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy0zMiAke2FjdGl2ZSA/ICdhY3RpdmUnIDogJyd9YH0+e2NoaWxkcmVufTwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7IEJ1dHRvbiB9XG4iLCAiaW1wb3J0IEhlcm8gZnJvbSAnfi9jb21wb25lbnRzL2xheW91dC9IZXJvJ1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnfi9jb21wb25lbnRzL2xheW91dC9TZWN0aW9uJ1xuaW1wb3J0IFRvZGF5RGF0ZSBmcm9tICd+L2NvbXBvbmVudHMvVG9kYXlEYXRlJ1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICd+L2NvbXBvbmVudHMvdHlwb2dyYXBoeS9QYXJhZ3JhcGgnXG5cbmNvbnN0IHZpZGVvcyA9IFtcbiAge1xuICAgIHRpdGxlOiAnVmlkZW8nLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0ZpbmQgb3V0IGFib3V0IGxpZmUgYXMgYW4gRW5naW5lZXIgYXQgQ2FwZGVzayB3aXRoIFZpbmNlbnQgU2VndWluLCBIZWFkIG9mIEVuZ2luZWVyaW5nLiBcdTIwMUNJdFx1MjAxOXMgbm90IGEgZmVhdHVyZSBmYWN0b3J5LCB5b3UgZ2V0IHRvIHJlYWxseSBkbyB3aGF0IHlvdSBsb3ZlIVx1MjAxRCcsXG4gICAgbGFiZWw6ICd3YXRjaCcsXG4gICAgaW1hZ2U6ICd2aW5jZW50LnBuZycsXG4gICAgdXJsOiAnaHR0cHM6Ly9ybWNkZW84cC52aWRlb21hcmtldGluZ3BsYXRmb3JtLmNvL3NlY3JldC83MzQyMjA3OC8xZTlhMzkwNDg2MjdhYWNkMmNiZjRkNzkwY2VmYTA2ZCcsXG4gIH0sXG5cbiAge1xuICAgIHRpdGxlOiAnUG9kY2FzdCcsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnQmVzdCBwcmFjdGljZSBpbiBzb2Z0d2FyZSBkZXZlbG9wbWVudCBcdTIwMTQgY2FuIHN0YXJ0dXBzIGRvIGl0PyBcdTIwMTQgd2l0aCBNYXJjLUFudG9pbmUgZnJvbSBDYXBkZXNrIGFuZCBNdXN0YWZhIFNocmVldCBmcm9tIHRoZSBTaWxpY29uIFJvdW5kYWJvdXQgUG9kY2FzdC4nLFxuICAgIGxhYmVsOiAnbGlzdGVuJyxcbiAgICBpbWFnZTogJ3BvZGNhc3QucG5nJyxcbiAgICB1cmw6ICdodHRwczovL29wZW4uc3BvdGlmeS5jb20vZXBpc29kZS82dGpnZ0g1TUZ4QThzSElqM1Z1VXZLP3NpPTMwNDA3NGFlM2E3ODQ4YzUnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdQcm9kdWN0IERlbW8nLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0Rpc2NvdmVyIHRoZSBrZXkgZmVhdHVyZXMgb2YgQ2FwZGVzayB3aXRoIGEgY29tcHJlaGVuc2l2ZSB3YWxrLXRocm91Z2ggb2YgdGhlIHByb2R1Y3QsIHdpdGggSmFtZXMgQmFyZHdlbGwsIEVudGVycHJpc2UgU0RSLicsXG4gICAgbGFiZWw6ICd3YXRjaCcsXG4gICAgaW1hZ2U6ICdwcm9kdWN0X2RlbW8ucG5nJyxcbiAgICB1cmw6ICdodHRwczovL3JtY2RlbzhwLnZpZGVvbWFya2V0aW5ncGxhdGZvcm0uY28vdi5paHRtbC9wbGF5ZXIuaHRtbD90b2tlbj0wNjRlMDQ5NTdmY2JiNzQ1MmRkMjljZGE5ZDM5YTE5OSZzb3VyY2U9ZW1iZWQmcGhvdG8lNWZpZD03MjMxNjIxNicsXG4gIH0sXG5dXG5cbmNvbnN0IGFydGljbGVzID0gW1xuICB7XG4gICAgdGl0bGU6ICdEZXNpZ24gU3lzdGVtJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdDaGVjayBvdXQgb3VyIGNvbXByZWhlbnNpdmUgZGVzaWduIHN5c3RlbSBmb3IgdGhlIENhcGRlc2sgcHJvZHVjdC4gQSBzaW5nbGUgc291cmNlIG9mIHRydXRoIHRoYXQgZ3JvdXBzIGFsbCB0aGUgZGVzaWduIGVsZW1lbnRzIHRvZ2V0aGVyIGluIG9uZSBwbGFjZS4nLFxuICAgIGxhYmVsOiAndmlldycsXG4gICAgaW1hZ2U6ICdkZXNpZ25fc3lzdGVtLmpwZWcnLFxuICAgIHVybDogJ2h0dHBzOi8vY2Ftby5jYXBkZXNrLmNvbScsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0FydGljbGUnLFxuICAgIGRlc2NyaXB0aW9uOiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTJcIj5cbiAgICAgICAgPHA+V2hhdCBpdFx1MjAxOXMgbGlrZSB0byBiZSBhIHN0dWRlbnQgZGV2ZWxvcGVyIGF0IENhcGRlc2s8L3A+XG4gICAgICAgIDxwPmJ5IEtyeXN0b2YgU3BpbGxlciwgSnVseSAyMDIxPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKSxcbiAgICBsYWJlbDogJ3JlYWQnLFxuICAgIGltYWdlOiAnY2FwZGVza19zcGFjZXNoaXAuanBlZycsXG4gICAgdXJsOiAnaHR0cHM6Ly9ibG9nLmNhcGRlc2suY29tL2xpZmUtYXMtYS1zdHVkZW50LWRldmVsb3BlcicsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0FydGljbGUnLFxuICAgIGRlc2NyaXB0aW9uOiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTJcIj5cbiAgICAgICAgPHA+Rml2ZSBsZWFybmluZ3MgaW4gZml2ZSB5ZWFycyBhdCBDYXBkZXNrPC9wPlxuICAgICAgICA8cD5ieSBBbGV4YW5kZXIgT2xzZW4sIE1heSAyMDIxPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKSxcbiAgICBsYWJlbDogJ3JlYWQnLFxuICAgIGltYWdlOiAnY2FwZGVza19yZW1vdGUuanBlZycsXG4gICAgdXJsOiAnaHR0cHM6Ly9ibG9nLmNhcGRlc2suY29tL2ZpdmUteWVhcnMtZml2ZS1sZWFybmluZ3MnLFxuICB9LFxuXVxuXG50eXBlIFJlc291cmNlQXR0cmlidXRlcyA9IHR5cGVvZiBhcnRpY2xlc1tudW1iZXJdXG5cbmNvbnN0IFJlc291cmNlOiBSZWFjdC5GQzxSZXNvdXJjZUF0dHJpYnV0ZXMgJiB7IHBsYXlhYmxlOiBib29sZWFuIH0+ID0gKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBsYWJlbCxcbiAgaW1hZ2UsXG4gIHVybCxcbiAgcGxheWFibGUsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1bMzkwcHhdIG14LWF1dG9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmVcIj5cbiAgICAgICAgPGEgaHJlZj17dXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm0tYXV0byBtZDptLTBcIiB3aWR0aD1cIjM5MFwiIHNyYz17YC9pbWcvcmVzb3VyY2VzLyR7aW1hZ2V9YH0gLz5cbiAgICAgICAgICB7cGxheWFibGUgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyZXktNDAwIG9wYWNpdHktNTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0zMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXRcIiAvPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB6LTEwXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2AvaW1nL3Jlc291cmNlcy9wbGF5LnBuZ2B9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTggcHQtOCBwYi00IGZvbnQtbGlnaHRcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbW9ub1wiPnt0aXRsZX08L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtaW50ZXIgdGV4dC14bFwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgPGEgaHJlZj17dXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZWlzaCB0ZXh0LWxnIGZvbnQtbW9ubyBob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IFJlc291cmNlc1NlY3Rpb246IFJlYWN0LkZDPHsgdGl0bGU6IHN0cmluZzsgcGxheWFibGU/OiBib29sZWFuOyByZXNvdXJjZXM6IFJlc291cmNlQXR0cmlidXRlc1tdIH0+ID0gKHtcbiAgdGl0bGUsXG4gIHJlc291cmNlcyxcbiAgcGxheWFibGUgPSBmYWxzZSxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbiB0aXRsZT17dGl0bGV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGp1c3RpZnktYmV0d2VlbiBnYXAtMTZcIj5cbiAgICAgICAge3Jlc291cmNlcy5tYXAoKHJlc291cmNlKSA9PiAoXG4gICAgICAgICAgPFJlc291cmNlIGtleT17cmVzb3VyY2UudGl0bGV9IHsuLi5yZXNvdXJjZX0gcGxheWFibGU9e3BsYXlhYmxlfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvU2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXNvdXJjZXMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZXJvIHRpdGxlPVwiUmVzb3VyY2VzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBnYXAtMiBsZzpnYXAtMCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8UGFyYWdyYXBoIGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvMlwiPlxuICAgICAgICAgICAgRGl2ZSBpbiBhbmQgZGlzY292ZXIgdGhlIGxhdGVzdCBmcm9tIG91ciBFbmdpbmVlcmluZyBUZWFtLiBXZVx1MjAxOXZlIGdvdCB2aWRlb3MsIHBvZGNhc3RzIGFuZCBhcnRpY2xlcyB0byBrZWVwXG4gICAgICAgICAgICB5b3UgZW50ZXJ0YWluZWQuIFBsdXMsIGNoZWNrIG91dCBvdXIgZGV0YWlsZWQgZGVzaWduIHN5c3RlbS4gRW5qb3khXG4gICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgPFRvZGF5RGF0ZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvSGVybz5cbiAgICAgIDxSZXNvdXJjZXNTZWN0aW9uIHRpdGxlPVwiVmlkZW9zXCIgcmVzb3VyY2VzPXt2aWRlb3N9IHBsYXlhYmxlIC8+XG4gICAgICA8UmVzb3VyY2VzU2VjdGlvbiB0aXRsZT1cIkFydGljbGVzIGFuZCBhc3NldHNcIiByZXNvdXJjZXM9e2FydGljbGVzfSAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0IExvdHRpZSBmcm9tICdsb3R0aWUtcmVhY3QnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IGVuZ2luZWVyaW5nIGZyb20gJ34vYXNzZXRzL2FuaW1hdGlvbnMvZW5naW5lZXJpbmcuanNvbidcbmltcG9ydCBDaXJjbGUgZnJvbSAnfi9jb21wb25lbnRzL0NpcmNsZSdcblxuY29uc3QgSGVybzogUmVhY3QuRkM8eyB0aXRsZTogc3RyaW5nOyBoaWRlTGluZT86IGJvb2xlYW47IGV4dHJhPzogUmVhY3QuUmVhY3ROb2RlIH0+ID0gKHsgY2hpbGRyZW4sIHRpdGxlLCBleHRyYSB9KSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCBpc0hvbWUgPSBsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy8nXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweC03IGxnOnB4LTE0IHB0LTggcGItOCBtZDpwYi0wXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC01IHBiLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2sgbWF4LXctWzIwMHB4XSBsZzptYXgtdy1bMjUwcHhdXCI+XG4gICAgICAgICAgPExvdHRpZSBhbmltYXRpb25EYXRhPXtlbmdpbmVlcmluZ30gbG9vcCBhdXRvcGxheSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBwdC04XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtbW9ubyB0ZXh0LWhpZ2hsaWdodC1vbiBmb250LWxpZ2h0XCI+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWluSGVpZ2h0OiAnM3B4JyB9fSBjbGFzc05hbWU9XCJteS01IGJnLWdyZXktMjAwIGZsZXgtMVwiIC8+XG4gICAgICAgICAgICA8Q2lyY2xlIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00IGZvbnQtaW50ZXJcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXgganVzdGlmeS1lbmQgcGwtWzk1cHhdIGxnOnBsLVsxMjRweF0gJHtpc0hvbWUgPyAncHQtNiBoLTEyJyA6ICdoLTEyIG9wYWNpdHktMCd9YH0+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWluV2lkdGg6ICczcHgnIH19IGNsYXNzTmFtZT17YGgtZnVsbCAke2lzSG9tZSA/ICdiZy1ncmV5LTIwMCBoLTEyJyA6ICcnfWB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ZXh0cmF9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZXJvXG4iLCAiY29uc3QgU2VjdGlvbjogUmVhY3QuRkM8eyBsaWdodD86IGJvb2xlYW47IHRpdGxlOiBzdHJpbmc7IGNpcmNsZUlkPzogc3RyaW5nIH0+ID0gKHsgbGlnaHQsIHRpdGxlLCBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGJnID0gbGlnaHQgPyAnYmctZGFyay0yMDAnIDogJ2JnLWRhcmstMzAwJ1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgcHktMTIgcHgtMTQgJHtiZ31gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMTZcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtbW9ubyB0ZXh0LWdyYWRpZW50IGZvbnQtbGlnaHRcIj57dGl0bGV9PC9oMj5cbiAgICAgICAgPGRpdj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uXG4iLCAiY29uc3QgZGF0ZSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1HQicsIHtcbiAgZGF5OiAnMi1kaWdpdCcsXG4gIG1vbnRoOiAnMi1kaWdpdCcsXG4gIHllYXI6ICdudW1lcmljJyxcbn0pXG4gIC5mb3JtYXRUb1BhcnRzKG5ldyBEYXRlKCkpXG4gIC5maWx0ZXIoKHBhcnQpID0+IHBhcnQudHlwZSAhPT0gJ2xpdGVyYWwnKVxuICAubWFwKChwYXJ0KSA9PiBwYXJ0LnZhbHVlKVxuICAuam9pbignLicpXG5cbmZ1bmN0aW9uIFRvZGF5RGF0ZSgpIHtcbiAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbGlnaHQgdGV4dC13aGl0ZSBmb250LW1vbm8gcHItNiBzZWxmLWVuZCBsZzpzZWxmLXN0YXJ0XCI+e2RhdGV9PC9zcGFuPlxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RheURhdGVcbiIsICJjb25zdCBQYXJhZ3JhcGg6IFJlYWN0LkZDPHsgY2xhc3NOYW1lPzogc3RyaW5nIH0+ID0gKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxwIGNsYXNzTmFtZT17YHRleHQteGwgbGVhZGluZy02IGZvbnQtbGlnaHQgJHtjbGFzc05hbWV9YH0gey4uLnByb3BzfSAvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBQYXJhZ3JhcGhcbiIsICJpbXBvcnQgeyBqc29uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgVG9kYXlEYXRlIGZyb20gJ34vY29tcG9uZW50cy9Ub2RheURhdGUnXG5pbXBvcnQgeyBDb250cmlidXRpb25zIH0gZnJvbSAnfi9jb21wb25lbnRzL2hvbWUvQ29udHJpYnV0aW9ucydcbmltcG9ydCBEZXBsb3ltZW50cyBmcm9tICd+L2NvbXBvbmVudHMvaG9tZS9EZXBsb3ltZW50cydcbmltcG9ydCBMYW5ndWFnZXMgZnJvbSAnfi9jb21wb25lbnRzL2hvbWUvTGFuZ3VhZ2VzJ1xuaW1wb3J0IFRlYW0gZnJvbSAnfi9jb21wb25lbnRzL2hvbWUvVGVhbSdcbmltcG9ydCBUb29scyBmcm9tICd+L2NvbXBvbmVudHMvaG9tZS9Ub29scydcbmltcG9ydCBIZXJvIGZyb20gJ34vY29tcG9uZW50cy9sYXlvdXQvSGVybydcbmltcG9ydCBIb21lU2VjdGlvbiwgeyBTZWN0aW9uQ29sb3IgfSBmcm9tICd+L2NvbXBvbmVudHMvbGF5b3V0L0hvbWVTZWN0aW9uJ1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICd+L2NvbXBvbmVudHMvdHlwb2dyYXBoeS9QYXJhZ3JhcGgnXG5cbnR5cGUgTGFuZ3VhZ2VEYXRhID0geyBwZXJjZW50YWdlOiBudW1iZXIgfVxuLy8gNy10dXBsZVxudHlwZSBXZWVrID0gW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl1cblxudHlwZSBBcGlEYXRhID0ge1xuICBjb21taXRzOiBudW1iZXJcbiAgY29udHJpYnV0aW9uczogUmVjb3JkPHN0cmluZywgV2Vlaz5cbiAgY292ZXJhZ2U6IG51bWJlclxuICBsYW5ndWFnZXM6IFJlY29yZDxzdHJpbmcsIExhbmd1YWdlRGF0YT5cbiAgcHVsbF9yZXF1ZXN0czogbnVtYmVyXG4gIHJlbGVhc2VzOiBzdHJpbmdbXVxuICB3b3JrZmxvd19ydW5zOiBudW1iZXJcbn1cbnR5cGUgUGFyc2VkRGF5ID0ge1xuICBkYXRlOiBzdHJpbmdcbiAgdmFsdWU6IG51bWJlclxufVxudHlwZSBQYXJzZWRXZWVrID0ge1xuICBkYXRlOiBzdHJpbmdcbiAgbW9udGg6IHN0cmluZ1xuICB3ZWVrOiBQYXJzZWREYXlbXVxufVxuXG50eXBlIFBhcnNlZENvbnRyaWJ1dGlvbnMgPSBBcnJheTx7XG4gIG1vbnRoOiBzdHJpbmdcbiAgd2Vla3M6IEFycmF5PFBhcnNlZFdlZWs+XG59PlxuXG50eXBlIERhdGEgPSBPbWl0PEFwaURhdGEsICdjb250cmlidXRpb25zJz4gJiB7IGNvbnRyaWJ1dGlvbnM6IFBhcnNlZENvbnRyaWJ1dGlvbnMgfVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZGVyKCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vY2FwZGVzay1lbmctZGFzaGJvYXJkLnMzLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tL2RhdGEuanNvbicpLnRoZW4oKHJlcykgPT5cbiAgICByZXMuanNvbigpXG4gIClcbiAgY29uc3QgeyBjb250cmlidXRpb25zLCAuLi5yZXN0IH0gPSBkYXRhIGFzIHVua25vd24gYXMgQXBpRGF0YVxuXG4gIGNvbnN0IGZvcm1hdE1vbnRoID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLUdCJywgeyBtb250aDogJ3Nob3J0JyB9KS5mb3JtYXRcbiAgY29uc3QgZm9ybWF0RGF0ZSA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1HQicsIHtcbiAgICBkYXk6ICdudW1lcmljJyxcbiAgICBtb250aDogJ3Nob3J0JyxcbiAgICB5ZWFyOiAnbnVtZXJpYycsXG4gIH0pLmZvcm1hdFxuXG4gIGNvbnN0IE1JTExJU19JTl9EQVkgPSA4NjQwMDAwMFxuXG4gIGNvbnN0IHBhcnNlV2VlayA9IChkYXRlSW5TZWNvbmRzOiBzdHJpbmcsIHdlZWs6IFdlZWspOiBQYXJzZWRXZWVrID0+IHtcbiAgICBjb25zdCBkYXRlSW5NaWxsaXMgPSBOdW1iZXIoZGF0ZUluU2Vjb25kcykgKiAxMDAwXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVJbk1pbGxpcylcbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZTogZGF0ZS50b0lTT1N0cmluZygpLFxuICAgICAgbW9udGg6IGZvcm1hdE1vbnRoKGRhdGUpLFxuICAgICAgd2Vlazogd2Vlay5tYXAoKGRheSwgaW5kZXgpID0+ICh7XG4gICAgICAgIGRhdGU6IGZvcm1hdERhdGUobmV3IERhdGUoZGF0ZUluTWlsbGlzICsgTUlMTElTX0lOX0RBWSAqIGluZGV4KSksXG4gICAgICAgIHZhbHVlOiBkYXksXG4gICAgICB9KSksXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgd2Vla3MgPSBPYmplY3QuZW50cmllcyhjb250cmlidXRpb25zKS5tYXAoKFtkYXRlSW5TZWNvbmRzLCB3ZWVrXSkgPT4gcGFyc2VXZWVrKGRhdGVJblNlY29uZHMsIHdlZWspKVxuXG4gIGNvbnN0IHdlZWtzQnlNb250aCA9IHdlZWtzLnJlZHVjZTxSZWNvcmQ8c3RyaW5nLCBBcnJheTxQYXJzZWRXZWVrPj4+KChhY2MsIGN1cnIpID0+IHtcbiAgICBhY2NbY3Vyci5tb250aF0gPSBhY2NbY3Vyci5tb250aF0gfHwgW11cbiAgICBhY2NbY3Vyci5tb250aF0ucHVzaChjdXJyKVxuICAgIHJldHVybiBhY2NcbiAgfSwge30pXG5cbiAgY29uc3QgcGFyc2VkQ29udHJpYnV0aW9uczogUGFyc2VkQ29udHJpYnV0aW9ucyA9IE9iamVjdC5lbnRyaWVzKHdlZWtzQnlNb250aCkubWFwKChbbW9udGgsIHdlZWtzXSkgPT4gKHtcbiAgICBtb250aCxcbiAgICB3ZWVrcyxcbiAgfSkpXG5cbiAgcmV0dXJuIGpzb24oeyAuLi5yZXN0LCBjb250cmlidXRpb25zOiBwYXJzZWRDb250cmlidXRpb25zIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IGxhbmd1YWdlcywgcmVsZWFzZXMsIGNvdmVyYWdlLCBjb250cmlidXRpb25zLCBwdWxsX3JlcXVlc3RzLCBjb21taXRzLCB3b3JrZmxvd19ydW5zIH0gPVxuICAgIHVzZUxvYWRlckRhdGE8QXBpRGF0YT4oKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZXJvIHRpdGxlPVwiRGFzaGJvYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBnYXAtNCBzbTpnYXAtMiBsZzpnYXAtMCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8UGFyYWdyYXBoIGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvMlwiPlxuICAgICAgICAgICAgV2VsY29tZSB0byB0aGUgaG9tZSBvZiBhbGwgdGhpbmdzIEVuZ2luZWVyaW5nIGF0IENhcGRlc2suIEdldCBhIHJlYWwtdGltZSBvdmVydmlldyBvZiBrZXkgbWV0cmljcyBpbiBvdXJcbiAgICAgICAgICAgIHByb2R1Y3QgZW52aXJvbm1lbnQsIHBsdXMgZmluZCBvdXQgbW9yZSBhYm91dCBvdXIgdG9wIHRlYW0sIGFuZCBkaXZlIGRlZXAgaW50byBvdXIgbGF0ZXN0IEVuZ2luZWVyaW5nXG4gICAgICAgICAgICByZXNvdXJjZXMuXG4gICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgPFRvZGF5RGF0ZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvSGVybz5cblxuICAgICAgPEhvbWVTZWN0aW9uIHRpdGxlPVwiTGFuZ3VhZ2UgZGlzdHJpYnV0aW9uXCI+XG4gICAgICAgIDxMYW5ndWFnZXMgbGFuZ3VhZ2VzPXtsYW5ndWFnZXN9IC8+XG4gICAgICA8L0hvbWVTZWN0aW9uPlxuXG4gICAgICA8SG9tZVNlY3Rpb24gdGl0bGU9XCJEZXBsb3ltZW50c1wiIGNvbG9yPXtTZWN0aW9uQ29sb3IuTElHSFR9PlxuICAgICAgICA8RGVwbG95bWVudHMgcmVsZWFzZXM9e3JlbGVhc2VzfSAvPlxuICAgICAgPC9Ib21lU2VjdGlvbj5cblxuICAgICAgPEhvbWVTZWN0aW9uIHRpdGxlPVwiQ29udHJpYnV0aW9uc1wiPlxuICAgICAgICA8Q29udHJpYnV0aW9uc1xuICAgICAgICAgIGNvbnRyaWJ1dGlvbnM9e2NvbnRyaWJ1dGlvbnN9XG4gICAgICAgICAgY292ZXJhZ2U9e2NvdmVyYWdlfVxuICAgICAgICAgIHB1bGxfcmVxdWVzdHM9e3B1bGxfcmVxdWVzdHN9XG4gICAgICAgICAgY29tbWl0cz17Y29tbWl0c31cbiAgICAgICAgICB3b3JrZmxvd19ydW5zPXt3b3JrZmxvd19ydW5zfVxuICAgICAgICAvPlxuICAgICAgPC9Ib21lU2VjdGlvbj5cblxuICAgICAgPEhvbWVTZWN0aW9uIHRpdGxlPVwiVGhlIFRlYW1cIiBjaXJjbGVJZD1cImhpcmluZy1hcnJvd1wiIGNvbG9yPXtTZWN0aW9uQ29sb3IuTElHSFR9PlxuICAgICAgICA8VGVhbSAvPlxuICAgICAgPC9Ib21lU2VjdGlvbj5cblxuICAgICAgPEhvbWVTZWN0aW9uIHRpdGxlPVwiVGhlIHRvb2xzIHdlIHVzZVwiIGNpcmNsZUlkPVwidG9vbHNcIiBjb2xvcj17U2VjdGlvbkNvbG9yLlRPT0xTfSBzbWFsbFRpdGxlPlxuICAgICAgICA8VG9vbHMgLz5cbiAgICAgIDwvSG9tZVNlY3Rpb24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IHR5cGUgeyBEYXRhLCBQYXJzZWRDb250cmlidXRpb25zIH1cbiIsICJpbXBvcnQgeyBDYWxlbmRhciB9IGZyb20gJ34vY29tcG9uZW50cy9DYWxlbmRhcidcbmltcG9ydCBIMyBmcm9tICd+L2NvbXBvbmVudHMvdHlwb2dyYXBoeS9IMydcbmltcG9ydCB7IERhdGEgfSBmcm9tICd+L3JvdXRlcydcblxudHlwZSBQaWNrZWRQcm9wcyA9ICdjb250cmlidXRpb25zJyB8ICdjb3ZlcmFnZScgfCAncHVsbF9yZXF1ZXN0cycgfCAnY29tbWl0cycgfCAnd29ya2Zsb3dfcnVucydcblxuY29uc3QgdG9GaXhlZCA9ICh2YWx1ZTogbnVtYmVyKSA9PiB2YWx1ZS50b0ZpeGVkKDApXG5cbmNvbnN0IG5hbWVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBwdWxsX3JlcXVlc3RzOiAnTWVyZ2VkIHB1bGwgcmVxdWVzdHMnLFxuICBjb21taXRzOiAnQ29tbWl0cycsXG4gIHdvcmtmbG93X3J1bnM6ICdHaXRoSHViIEFjdGlvbnMgcmFuJyxcbiAgY292ZXJhZ2U6ICdDb2RlIGNvdmVyYWdlJyxcbn1cblxuY29uc3QgQ29udHJpYnV0aW9ucyA9ICh7IGNvbnRyaWJ1dGlvbnMsIGNvdmVyYWdlLCBjb21taXRzLCB3b3JrZmxvd19ydW5zLCBwdWxsX3JlcXVlc3RzIH06IFBpY2s8RGF0YSwgUGlja2VkUHJvcHM+KSA9PiB7XG4gIGNvbnN0IHZhbHVlcyA9IHsgY292ZXJhZ2U6IGAke3RvRml4ZWQoY292ZXJhZ2UgKiAxMDApfSVgLCBjb21taXRzLCB3b3JrZmxvd19ydW5zLCBwdWxsX3JlcXVlc3RzIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB4bDpwLTE2IHhsOnBiLTggcGItMCBnYXAtMTYgeGw6Z2FwLTMyIHB0LTE2IHhsOnB0LTMyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLThcIj5cbiAgICAgICAgPEgzPntjb21taXRzfSBjb250cmlidXRpb25zIGluIHRoZSBsYXN0IHllYXI8L0gzPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxDYWxlbmRhciBjb250cmlidXRpb25zPXtjb250cmlidXRpb25zfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEgzPktleSBtZXRyaWNzIGluIHRoZSBsYXN0IHllYXI8L0gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgeGw6Z3JpZC1jb2xzLTQgZ2FwLThcIj5cbiAgICAgICAgICB7T2JqZWN0LmVudHJpZXModmFsdWVzKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZGFyay0yMDAgcm91bmRlZC1zbSBmbGV4IGZsZXgtY29sIHB4LTE2IHB5LTEwIGdhcC04IGl0ZW1zLWNlbnRlciB3LWZ1bGwgbS1hdXRvXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcyNTBweCcgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tb25vIHRleHQtaGlnaGxpZ2h0LW9uIHRleHQtNXhsXCI+e3ZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWxpZ2h0IHdoaXRlc3BhY2Utbm93cmFwXCI+e25hbWVzW2tleV19PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IHsgQ29udHJpYnV0aW9ucyB9XG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQYXJzZWRDb250cmlidXRpb25zIH0gZnJvbSAnfi9yb3V0ZXMvaW5kZXgnXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnfi9jb21wb25lbnRzL1Rvb2x0aXAnXG5cbmVudW0gRGF5Q29sb3Ige1xuICBFTVBUWSA9ICdiZy1jYWwtZW1wdHknLFxuICBTTUFMTCA9ICdiZy1jYWwtcycsXG4gIE1FRElVTSA9ICdiZy1jYWwtbScsXG4gIExBUkdFID0gJ2JnLWNhbC1sJyxcbiAgWExBUkdFID0gJ2JnLWNhbC14bCcsXG59XG5cbmVudW0gRGF5VGhyZXNob2xkIHtcbiAgU01BTEwgPSAxLFxuICBNRURJVU0gPSAxMixcbiAgTEFSR0UgPSAyNCxcbiAgWExBUkdFID0gNDAsXG59XG5cbmNvbnN0IERheTogUmVhY3QuRkM8eyB2YWx1ZTogbnVtYmVyOyBkYXRlPzogc3RyaW5nOyBlbmFibGVUb29sdGlwPzogYm9vbGVhbiB9PiA9ICh7XG4gIGRhdGUsXG4gIHZhbHVlLFxuICBlbmFibGVUb29sdGlwID0gZmFsc2UsXG59KSA9PiB7XG4gIGNvbnN0IFtpc0hvdmVyZWQsIHNldElzSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgLy8gVE9ETyB0aGVzZSB0aHJlc2hvbGRzIGFyZSBhcmJpdHJhcnkuIENvdWxkIGNhbGN1bGF0ZSB0aGVtIGR5bmFtaWNhbGx5IHNvbWVob3dcbiAgbGV0IGNvbG9yID0gRGF5Q29sb3IuRU1QVFlcbiAgaWYgKHZhbHVlID49IERheVRocmVzaG9sZC5YTEFSR0UpIHtcbiAgICBjb2xvciA9IERheUNvbG9yLlhMQVJHRVxuICB9IGVsc2UgaWYgKHZhbHVlID49IERheVRocmVzaG9sZC5MQVJHRSkge1xuICAgIGNvbG9yID0gRGF5Q29sb3IuTEFSR0VcbiAgfSBlbHNlIGlmICh2YWx1ZSA+PSBEYXlUaHJlc2hvbGQuTUVESVVNKSB7XG4gICAgY29sb3IgPSBEYXlDb2xvci5NRURJVU1cbiAgfSBlbHNlIGlmICh2YWx1ZSA+PSBEYXlUaHJlc2hvbGQuU01BTEwpIHtcbiAgICBjb2xvciA9IERheUNvbG9yLlNNQUxMXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldElzSG92ZXJlZCh0cnVlKX1cbiAgICAgICAgb25Nb3VzZU91dD17KCkgPT4gc2V0SXNIb3ZlcmVkKGZhbHNlKX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjb2xvcn0gdy01IGgtNSBtLTEgcm91bmRlZC1zbWB9XG4gICAgICAvPlxuICAgICAge2lzSG92ZXJlZCAmJiBlbmFibGVUb29sdGlwICYmIChcbiAgICAgICAgPFRvb2x0aXA+XG4gICAgICAgICAge3ZhbHVlfSBjb250cmlidXRpb257dmFsdWUgIT09IDEgJiYgJ3MnfSBvbiB7ZGF0ZX1cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBDYWxlbmRhcjogUmVhY3QuRkM8eyBjb250cmlidXRpb25zOiBQYXJzZWRDb250cmlidXRpb25zIH0+ID0gKHsgY29udHJpYnV0aW9ucyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB3LWZ1bGwganVzdGlmeS1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1maXRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmbGV4LXdyYXBcIj5cbiAgICAgICAge2NvbnRyaWJ1dGlvbnMubWFwKChwYXJzZWRDb250cmlidXRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj57cGFyc2VkQ29udHJpYnV0aW9uLm1vbnRofTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgIHtwYXJzZWRDb250cmlidXRpb24ud2Vla3MubWFwKCh3ZWVrLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAge3dlZWsud2Vlay5tYXAoKGRheSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPERheSBrZXk9e2luZGV4fSBkYXRlPXtkYXkuZGF0ZX0gdmFsdWU9e2RheS52YWx1ZX0gZW5hYmxlVG9vbHRpcCAvPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmRcIj5cbiAgICAgICAgPGRpdj5MZXNzPC9kaXY+XG4gICAgICAgIDxEYXkgdmFsdWU9e0RheVRocmVzaG9sZC5TTUFMTH0gLz5cbiAgICAgICAgPERheSB2YWx1ZT17RGF5VGhyZXNob2xkLk1FRElVTX0gLz5cbiAgICAgICAgPERheSB2YWx1ZT17RGF5VGhyZXNob2xkLkxBUkdFfSAvPlxuICAgICAgICA8RGF5IHZhbHVlPXtEYXlUaHJlc2hvbGQuWExBUkdFfSAvPlxuICAgICAgICA8ZGl2Pk1vcmU8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IHsgQ2FsZW5kYXIgfVxuIiwgImltcG9ydCB7IFByb3BzV2l0aENoaWxkcmVuLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgVG9vbHRpcDogUmVhY3QuRkM8UHJvcHNXaXRoQ2hpbGRyZW48e30+PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuICBjb25zdCBbc3R5bGUsIHNldFN0eWxlXSA9IHVzZVN0YXRlPHsgbGVmdD86IHN0cmluZyB9Pih7fSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgaW5uZXJXaWR0aDogd2lkdGggfSA9IHdpbmRvd1xuICAgIGNvbnN0IHsgcmlnaHQgPSAwIH0gPSByZWY/LmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpID8/IHt9XG4gICAgY29uc3QgcmlnaHREaWZmID0gcmlnaHQgLSB3aWR0aFxuICAgIGNvbnN0IG5ld1N0eWxlID0geyAuLi5zdHlsZSB9XG4gICAgaWYgKHJpZ2h0RGlmZiA+IDApIHtcbiAgICAgIC8vIHByZXZlbnQgdGhlIHRvb2x0aXAgZnJvbSBnb2luZyBvZmYgdGhlIHNjcmVlbiB0byB0aGUgcmlnaHRcbiAgICAgIG5ld1N0eWxlLmxlZnQgPSBgLSR7cmlnaHREaWZmfXB4YFxuICAgIH1cbiAgICBzZXRTdHlsZShuZXdTdHlsZSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByZWY9e3JlZn1cbiAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIHctbWF4IHotMTAgYmctZGFyay0xMDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBweC00IHB5LTIgcm91bmRlZC1tZGB9XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7IFRvb2x0aXAgfVxuIiwgImNvbnN0IEgzOiBSZWFjdC5GQzx7IGNsYXNzTmFtZT86IHN0cmluZyB9PiA9ICh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8aDMgY2xhc3NOYW1lPXtgZm9udC1tb25vIHRleHQtMnhsIGZvbnQtbGlnaHQgdGV4dC1tb25vICR7Y2xhc3NOYW1lfWB9IHsuLi5wcm9wc30gLz5cbilcblxuZXhwb3J0IGRlZmF1bHQgSDNcbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICdyZWFjdC11c2UnXG5pbXBvcnQgeyBBcmVhLCBBcmVhQ2hhcnQsIFJlc3BvbnNpdmVDb250YWluZXIsIFRvb2x0aXAsIFhBeGlzLCBZQXhpcyB9IGZyb20gJ3JlY2hhcnRzJ1xuaW1wb3J0IEgzIGZyb20gJ34vY29tcG9uZW50cy90eXBvZ3JhcGh5L0gzJ1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICd+L2NvbXBvbmVudHMvdHlwb2dyYXBoeS9QYXJhZ3JhcGgnXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnfi9yb3V0ZXMnXG5cbmNvbnN0IGN1cnJlbnRNb250aCA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKVxuXG5jb25zdCBmb3JtYXRNb250aCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbi1HQicsIHsgbW9udGg6ICdzaG9ydCcgfSkuZm9ybWF0XG5cbnR5cGUgTW9udGhseVJlbGVhc2UgPSB7IG5hbWU6IHN0cmluZzsgbW9udGg6IG51bWJlcjsgcmVsZWFzZXM6IG51bWJlciB9XG5cbmNvbnN0IHVzZVZpc2libGUgPSAocmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTEVsZW1lbnQ+KSA9PiB7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuICBjb25zdCBpbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb24ocmVmLCB7XG4gICAgcm9vdDogbnVsbCxcbiAgICByb290TWFyZ2luOiAnMHB4JyxcbiAgICB0aHJlc2hvbGQ6IDAuMixcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKGludGVyc2VjdGlvbiAmJiBpbnRlcnNlY3Rpb24uaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICBzZXRWaXNpYmxlKHRydWUpXG4gICAgfVxuICB9LCBbaW50ZXJzZWN0aW9uXSlcbiAgcmV0dXJuIHZpc2libGVcbn1cblxuY29uc3QgRGVwbG95bWVudHMgPSAoeyByZWxlYXNlcyB9OiBQaWNrPERhdGEsICdyZWxlYXNlcyc+KSA9PiB7XG4gIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZihudWxsKVxuICBjb25zdCB2aXNpYmxlID0gdXNlVmlzaWJsZShyZWYpXG5cbiAgY29uc3QgbW9udGhseURlcGxveW1lbnQgPSByZWxlYXNlcy5yZWR1Y2U8UmVjb3JkPG51bWJlciwgTW9udGhseVJlbGVhc2U+PigoYWNjLCBjdXJyKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGN1cnIpXG4gICAgY29uc3QgbW9udGggPSBuZXcgRGF0ZShkYXRlKS5nZXRNb250aCgpXG4gICAgaWYgKCFhY2NbbW9udGhdKSB7XG4gICAgICBhY2NbbW9udGhdID0geyBtb250aCwgbmFtZTogZm9ybWF0TW9udGgoZGF0ZSksIHJlbGVhc2VzOiAwIH1cbiAgICB9XG4gICAgYWNjW21vbnRoXS5yZWxlYXNlcysrXG4gICAgcmV0dXJuIGFjY1xuICB9LCB7fSlcblxuICBjb25zdCBkYXRhID0gT2JqZWN0LmVudHJpZXMobW9udGhseURlcGxveW1lbnQpXG4gICAgLnJlZHVjZTxBcnJheTxNb250aGx5UmVsZWFzZT4+KChhY2MsIFttb250aCwgcmVsZWFzZV0pID0+IHtcbiAgICAgIGFjYy5wdXNoKHJlbGVhc2UpXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSwgW10pXG4gICAgLnNvcnQoKGEsIGIpID0+IGEubW9udGggLSBiLm1vbnRoKVxuXG4gIGNvbnN0IGZ1dHVyZU1vbnRocyA9IGRhdGEuc2xpY2UoY3VycmVudE1vbnRoICsgMSlcbiAgY29uc3QgcGFzdE1vbnRocyA9IGRhdGEuc2xpY2UoMCwgY3VycmVudE1vbnRoICsgMSlcbiAgY29uc3Qgc29ydGVkRGF0YSA9IFtmdXR1cmVNb250aHMsIHBhc3RNb250aHNdLmZsYXQoKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHhsOnAtMjQgeGw6cGItOCBwYi0wIGdhcC0xNiB4bDpnYXAtMzIgcHQtMTYgeGw6cHQtMzJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtODBcIiByZWY9e3JlZn0+XG4gICAgICAgIHt2aXNpYmxlICYmIChcbiAgICAgICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lciB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+XG4gICAgICAgICAgICA8QXJlYUNoYXJ0XG4gICAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICAgIGhlaWdodD17NDAwfVxuICAgICAgICAgICAgICBkYXRhPXtzb3J0ZWREYXRhfVxuICAgICAgICAgICAgICBtYXJnaW49e3tcbiAgICAgICAgICAgICAgICB0b3A6IDEwLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPVwiY29sb3JSZWxlYXNlXCIgeDE9ezB9IHkxPXswfSB4Mj17MH0geTI9ezF9PlxuICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiNSVcIiBzdG9wQ29sb3I9XCIjMUNGRkMwXCIgc3RvcE9wYWNpdHk9ezAuOX0gLz5cbiAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjk1JVwiIHN0b3BDb2xvcj1cInJnYmEoMTk2LCAxOTYsIDE5NiwgMFwiIC8+XG4gICAgICAgICAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cbiAgICAgICAgICAgICAgPC9kZWZzPlxuXG4gICAgICAgICAgICAgIDxYQXhpcyBkYXRhS2V5PVwibmFtZVwiIHN0cm9rZT1cInJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NylcIiBzdHJva2VXaWR0aD17MH0gZHk9ezEwfSAvPlxuICAgICAgICAgICAgICA8WUF4aXMgc3Ryb2tlPVwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3KVwiIHN0cm9rZVdpZHRoPXswfSBkeD17LTEwfSAvPlxuICAgICAgICAgICAgICA8QXJlYVxuICAgICAgICAgICAgICAgIHR5cGU9XCJtb25vdG9uZVwiXG4gICAgICAgICAgICAgICAgZGF0YUtleT1cInJlbGVhc2VzXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCIjMUNGRkMwXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17NH1cbiAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eT17MX1cbiAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNjb2xvclJlbGVhc2UpXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQXJlYUNoYXJ0PlxuICAgICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLThcIj5cbiAgICAgICAgPEgzPkFuIG92ZXJ2aWV3IG9mIG91ciBtb250aGx5IGRlcGxveW1lbnRzPC9IMz5cbiAgICAgICAgPFBhcmFncmFwaCBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0yLzMgeGw6dy0xLzIgZm9udC1pbnRlclwiPlxuICAgICAgICAgIEF0IENhcGRlc2ssIHdlIHByYWN0aWNlIENvbnRpbnVvdXMgSW50ZWdyYXRpb24gYW5kIENvbnRpbnVvdXMgRGVwbG95bWVudHMsIHdoaWNoIGFsbG93cyBvdXIgZW5naW5lZXJzIHRvXG4gICAgICAgICAgY29udGludW91c2x5IGJyaW5nIHZhbHVlIHRvIHByb2R1Y3Rpb24uIFlvdSBjYW4gc2VlIGhlcmUgdGhhdCB3ZSBvZnRlbiBkZXBsb3kgZmVhdHVyZXMgb3IgYnVnIGZpeGVzIG11bHRpcGxlXG4gICAgICAgICAgdGltZXMgYSBkYXkhXG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVwbG95bWVudHNcbiIsICJpbXBvcnQgUHJvZ3Jlc3NDaXJjbGUgZnJvbSAnfi9jb21wb25lbnRzL1Byb2dyZXNzQ2lyY2xlJ1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICd+L2NvbXBvbmVudHMvdHlwb2dyYXBoeS9QYXJhZ3JhcGgnXG5pbXBvcnQgSDMgZnJvbSAnfi9jb21wb25lbnRzL3R5cG9ncmFwaHkvSDMnXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnfi9yb3V0ZXMnXG5cbmNvbnN0IFBlcmNlbnRhZ2UgPSAoeyBpbmRleCwgbmFtZSwgcGVyY2VudGFnZSB9OiB7IGluZGV4OiBudW1iZXI7IG5hbWU6IHN0cmluZzsgcGVyY2VudGFnZTogbnVtYmVyIH0pID0+IHtcbiAgY29uc3QgZml4ZWRQZXJjZW50YWdlID0gTnVtYmVyKChwZXJjZW50YWdlICogMTAwKS50b0ZpeGVkKDApKVxuICBjb25zdCBjb2xvciA9IGluZGV4ID09PSAwID8gJyMxY2ZmYzAgJyA6ICcjZmZmJ1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgIDxQcm9ncmVzc0NpcmNsZSBrZXk9e25hbWV9IGNvbG9yPXtjb2xvcn0gcGVyY2VudGFnZT17Zml4ZWRQZXJjZW50YWdlfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dC01eGwgdGV4dC1tb25vYH0gc3R5bGU9e3sgY29sb3IgfX0+XG4gICAgICAgICAge2ZpeGVkUGVyY2VudGFnZX0lXG4gICAgICAgIDwvcD5cbiAgICAgIDwvUHJvZ3Jlc3NDaXJjbGU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LW1vbm8gdy1mdWxsIHRleHQtY2VudGVyXCI+e25hbWV9PC9wPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IExhbmd1YWdlcyA9ICh7IGxhbmd1YWdlcyB9OiBQaWNrPERhdGEsICdsYW5ndWFnZXMnPikgPT4ge1xuICBjb25zdCBzb3J0ZWRMYW5ndWFnZXMgPSBPYmplY3QuZW50cmllcyhsYW5ndWFnZXMpXG4gICAgLnNvcnQoKFssIHZhbHVlQV0sIFssIHZhbHVlQl0pID0+IHZhbHVlQi5wZXJjZW50YWdlIC0gdmFsdWVBLnBlcmNlbnRhZ2UpXG4gICAgLnNsaWNlKDAsIDUpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgeGw6cC0yNCB4bDpwYi04IHBiLTAgZ2FwLTE2IHhsOmdhcC0zMiBwdC0xNiB4bDpwdC0zMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIHhsOmdyaWQtY29scy01IGdhcC00XCI+XG4gICAgICAgIHtzb3J0ZWRMYW5ndWFnZXMubWFwKChbbmFtZSwgeyBwZXJjZW50YWdlIH1dLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxQZXJjZW50YWdlIGtleT17bmFtZX0gaW5kZXg9e2luZGV4fSBuYW1lPXtuYW1lfSBwZXJjZW50YWdlPXtwZXJjZW50YWdlfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLThcIj5cbiAgICAgICAgPEgzPkhvdyBkbyB3ZSBkaXN0cmlidXRlIGNvZGUgYWNyb3NzIGxhbmd1YWdlcz88L0gzPlxuICAgICAgICA8UGFyYWdyYXBoIGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTIvMyB4bDp3LTEvMiBmb250LWludGVyXCI+XG4gICAgICAgICAgV2UgdXNlIHF1aXRlIGEgbGFyZ2UgdmFyaWV0eSBvZiBmcmFtZXdvcmtzIGFuZCBsYW5ndWFnZXMgYXQgQ2FwZGVzay4gWW91IGNhbiBzZWUgb3VyIGZhdm91cml0ZSBvbmVzIGhlcmUuXG4gICAgICAgICAgVGhlc2UgYWxsb3cgdXMgdG8gaXRlcmF0ZSBmYXN0LCB3aGlsc3QgbWFpbnRhaW5pbmcgYSBoaWdoIGxldmVsIG9mIGNvZGUgcXVhbGl0eS5cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZXNcbiIsICJpbXBvcnQgc3R5bGUgZnJvbSAncmVhY3QtY2lyY3VsYXItcHJvZ3Jlc3NiYXIvZGlzdC9zdHlsZXMuY3NzJ1xuaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzc2JhcldpdGhDaGlsZHJlbiwgYnVpbGRTdHlsZXMgfSBmcm9tICdyZWFjdC1jaXJjdWxhci1wcm9ncmVzc2JhcidcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICByZXR1cm4gW3sgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlIH1dXG59XG5cbmNvbnN0IFByb2dyZXNzQ2lyY2xlOiBSZWFjdC5GQzx7IGNvbG9yOiBzdHJpbmc7IHBlcmNlbnRhZ2U6IG51bWJlciB9PiA9ICh7IGNvbG9yLCBwZXJjZW50YWdlLCBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LVsxNTBweF0gaC1bMTUwcHhdXCI+XG4gICAgICA8Q2lyY3VsYXJQcm9ncmVzc2JhcldpdGhDaGlsZHJlblxuICAgICAgICB2YWx1ZT17cGVyY2VudGFnZX1cbiAgICAgICAgc3Ryb2tlV2lkdGg9ezR9XG4gICAgICAgIHN0eWxlcz17YnVpbGRTdHlsZXMoe1xuICAgICAgICAgIHN0cm9rZUxpbmVjYXA6ICdidXR0JyxcbiAgICAgICAgICBwYXRoVHJhbnNpdGlvbkR1cmF0aW9uOiAwLjUsXG4gICAgICAgICAgdHJhaWxDb2xvcjogJyMzRjNGM0YnLFxuICAgICAgICAgIHBhdGhDb2xvcjogY29sb3IsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0NpcmN1bGFyUHJvZ3Jlc3NiYXJXaXRoQ2hpbGRyZW4+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NDaXJjbGVcbiIsICJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBcnJvdyBmcm9tICd+L2NvbXBvbmVudHMvQXJyb3cnXG5pbXBvcnQgQ2lyY2xlIGZyb20gJ34vY29tcG9uZW50cy9DaXJjbGUnXG5pbXBvcnQgSDMgZnJvbSAnfi9jb21wb25lbnRzL3R5cG9ncmFwaHkvSDMnXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJ34vY29tcG9uZW50cy90eXBvZ3JhcGh5L1BhcmFncmFwaCdcbmltcG9ydCB7IE1hcCB9IGZyb20gJy4vTWFwJ1xuXG5jb25zdCBNZXRyaWMgPSAoeyB0aXRsZSwgdmFsdWUgfTogeyB0aXRsZTogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBrZXk9XCJrZXlcIlxuICAgICAgY2xhc3NOYW1lPVwiYmctZGFyay0zMDAgcm91bmRlZC1zbSBmbGV4IGZsZXgtY29sIHB4LTE2IHB5LTEwIGdhcC04IGl0ZW1zLWNlbnRlciB3LWZ1bGwgbS1hdXRvIHotMTBcIlxuICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcyNTBweCcgfX1cbiAgICA+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW1vbm8gdGV4dC1oaWdobGlnaHQtb24gdGV4dC01eGxcIj57dmFsdWV9PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWxpZ2h0IHdoaXRlc3BhY2Utbm93cmFwXCI+e3RpdGxlfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBUZWFtID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB4bDpwLTE2IHhsOnBiLTggcGItMCBnYXAtOCB4bDpnYXAtMjAgcHQtMTYgeGw6cHQtMzJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgIDxNYXAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgeGw6Z3JpZC1jb2xzLTQgZ2FwLThcIj5cbiAgICAgICAgPE1ldHJpYyB0aXRsZT1cIkNvdW50cmllc1wiIHZhbHVlPXs5fSAvPlxuICAgICAgICA8TWV0cmljIHRpdGxlPVwiTGFuZ3VhZ2VzXCIgdmFsdWU9ezd9IC8+XG4gICAgICAgIDxNZXRyaWMgdGl0bGU9XCJNZW1iZXJzXCIgdmFsdWU9ezE5fSAvPlxuICAgICAgICA8TWV0cmljIHRpdGxlPVwiU3F1YWRzXCIgdmFsdWU9ezN9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGdhcC04IHctMi8zIG0tYXV0b1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxDaXJjbGUgaWQ9XCJoaXJpbmctY2lyY2xlXCIgY2xhc3NOYW1lPVwibWwtM1wiIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtOCBmb250LWxpZ2h0XCI+XG4gICAgICAgICAgPEgzPkludGVyZXN0ZWQgaW4gam9pbmluZyB0aGUgdGVhbT88L0gzPlxuICAgICAgICAgIDxQYXJhZ3JhcGggY2xhc3NOYW1lPVwiZm9udC1pbnRlclwiPlxuICAgICAgICAgICAgSW50ZXJlc3RlZCBpbiBqb2luaW5nIHRoZSB0ZWFtPyBEbyB5b3UgbGlrZSB3aGF0IHlvdSBzZWUgYXQgQ2FwZGVzaz8gQXJlIHlvdSBsb29raW5nIHRvIGpvaW4gYSBwcm9kdWN0IHRlYW1cbiAgICAgICAgICAgIHdpdGggc29saWQgcHJvY2Vzc2VzIGFuZCByb29tIGZvciBncm93dGg/IENoZWNrIG91dCBvdXIgbGF0ZXN0IHBvc2l0aW9ucyBvciBkcm9wIHVzIGFuIGVtYWlsIGF0XG4gICAgICAgICAgICBjYXJlZXJzQGNhcGRlc2suY29tIGZpbmQgb3V0IG1vcmVcbiAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9jYXJlZXJzLmNhcGRlc2suY29tL1wiIGNsYXNzTmFtZT1cInRleHQtaGlnaGxpZ2h0LW9uIHRleHQteGwgaG92ZXI6dW5kZXJsaW5lXCI+XG4gICAgICAgICAgICBGaW5kIG91dCBtb3JlXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8QXJyb3dcbiAgICAgICAgICBzdGFydD1cImhpcmluZy1hcnJvd1wiXG4gICAgICAgICAgZW5kPVwiaGlyaW5nLWNpcmNsZVwiXG4gICAgICAgICAgbGluZUNvbG9yPVwiI2RkZGRkZFwiXG4gICAgICAgICAgc2hvd0hlYWQ9e2ZhbHNlfVxuICAgICAgICAgIGVuZEFuY2hvcj1cImxlZnRcIlxuICAgICAgICAgIGN1cnZlbmVzcz17MX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlYW1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgbWFwIGZyb20gJ34vYXNzZXRzL2ltYWdlcy9tYXAuc3ZnJ1xuXG5jb25zdCBjb3VudHJpZXMgPSBbXG4gIHsgY291bnRyeTogJ0Rlbm1hcmsnLCBmbGFnOiAnXHVEODNDXHVEREU5XHVEODNDXHVEREYwJywgc2l6ZTogOCwgeDogJzUwJScsIHk6ICczNSUnIH0sXG4gIHsgY291bnRyeTogJ0NhbmFkYScsIGZsYWc6ICdcdUQ4M0NcdURERThcdUQ4M0NcdURERTYnLCBzaXplOiAyLCB4OiAnMjYlJywgeTogJzQ1JScgfSxcbiAgeyBjb3VudHJ5OiAnSXRhbHknLCBmbGFnOiAnXHVEODNDXHVEREVFXHVEODNDXHVEREY5Jywgc2l6ZTogMSwgeDogJzUzJScsIHk6ICc1MiUnIH0sXG4gIHsgY291bnRyeTogJ1BvcnR1Z2FsJywgZmxhZzogJ1x1RDgzQ1x1RERGNVx1RDgzQ1x1RERGOScsIHNpemU6IDIsIHg6ICc0NC41JScsIHk6ICc1MiUnIH0sXG4gIHsgY291bnRyeTogJ1NwYWluJywgZmxhZzogJ1x1RDgzQ1x1RERFQVx1RDgzQ1x1RERGOCcsIHNpemU6IDEsIHg6ICc0NiUnLCB5OiAnNTIlJyB9LFxuICB7IGNvdW50cnk6ICdVbml0ZWQgS2luZ2RvbScsIGZsYWc6ICdcdUQ4M0NcdURERUNcdUQ4M0NcdURERTcnLCBzaXplOiAyLCB4OiAnNDYlJywgeTogJzQ0JScgfSxcbiAgeyBjb3VudHJ5OiAnR2VybWFueScsIGZsYWc6ICdcdUQ4M0NcdURERTlcdUQ4M0NcdURERUEnLCBzaXplOiAxLCB4OiAnNTQlJywgeTogJzQ0JScgfSxcbiAgeyBjb3VudHJ5OiAnUm9tYW5pYScsIGZsYWc6ICdcdUQ4M0NcdURERjdcdUQ4M0NcdURERjQnLCBzaXplOiAxLCB4OiAnNTQlJywgeTogJzUwJScgfSxcbiAgeyBjb3VudHJ5OiAnVHVya2V5JywgZmxhZzogJ1x1RDgzQ1x1RERGOVx1RDgzQ1x1RERGNycsIHNpemU6IDEsIHg6ICc1NyUnLCB5OiAnNTEuNSUnIH0sXG5dXG5cbmNvbnN0IHNpemVzOiBSZWNvcmQ8bnVtYmVyLCBudW1iZXI+ID0ge1xuICAxOiAxLFxuICAyOiAxLjUsXG4gIDg6IDMsXG59XG5cbmNvbnN0IENvdW50cnkgPSAoeyBmbGFnLCBjb3VudHJ5LCBzaXplLCB4LCB5IH06IHR5cGVvZiBjb3VudHJpZXNbbnVtYmVyXSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGdyb3VwIGFzcGVjdC1zcXVhcmUgYWJzb2x1dGUgcm91bmRlZC1mdWxsIGJnLWhpZ2hsaWdodC1vbiBob3ZlcjpiZy13aGl0ZSBob3ZlcjpzY2FsZS0xMjUgYW5pbWF0aW9uIGVhc2UtaW4tYWxsIGR1cmF0aW9uLTIwMCBmbGV4IGp1c3RpZnktY2VudGVyIGFsaWduLWl0ZW1zIGhvdmVyOnotNTAgZm9udC1saWdodCB0ZXh0LXhsYH1cbiAgICAgIHN0eWxlPXt7IGxlZnQ6IHgsIHRvcDogeSwgd2lkdGg6IGAke3NpemVzW3NpemVdfSVgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gZ3JvdXAtaG92ZXI6ZmxleCBmbGV4LWNvbCB3aGl0ZXNwYWNlLW5vd3JhcCBhYnNvbHV0ZSAtdG9wLWZ1bGwgcC0yIGdhcC0yIHJvdW5kZWQtc20gYmctZGFyay0zMDAgdGV4dC1zbSB6LTEwXCI+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIHtjb3VudHJ5fSB7ZmxhZ31cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICB7c2l6ZX0gQ2FwZGVza2Vye3NpemUgPiAxID8gJ3MnIDogJyd9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPExpbmsgdG89XCIvdGVhbVwiIGNsYXNzTmFtZT1cInRleHQtaGlnaGxpZ2h0LW9uIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgIE1lZXQgdGhlIHRlYW1cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWFwID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJlbGF0aXZlXCI+XG4gICAgICB7Y291bnRyaWVzLm1hcCgocHJvcHMpID0+IChcbiAgICAgICAgPENvdW50cnkga2V5PXtwcm9wcy5jb3VudHJ5fSB7Li4ucHJvcHN9IC8+XG4gICAgICApKX1cbiAgICAgIDxpbWcgc3JjPXttYXB9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IHsgTWFwIH1cbiIsICJpbXBvcnQgZGF0YWRvZyBmcm9tICd+L2Fzc2V0cy9pbWFnZXMvZGF0YWRvZy5wbmcnXG5pbXBvcnQgZ2l0aHViIGZyb20gJ34vYXNzZXRzL2ltYWdlcy9naXRodWIucG5nJ1xuaW1wb3J0IGhlcm9rdSBmcm9tICd+L2Fzc2V0cy9pbWFnZXMvaGVyb2t1LnBuZydcbmltcG9ydCBsYXVuY2hkYXJrbHkgZnJvbSAnfi9hc3NldHMvaW1hZ2VzL2xhdW5jaGRhcmtseS5wbmcnXG5cbmNvbnN0IFRvb2xzOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgdG9vbHMgPSB7XG4gICAgZ2l0aHViLFxuICAgIGhlcm9rdSxcbiAgICBkYXRhZG9nLFxuICAgIGxhdW5jaGRhcmtseSxcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNCB3LWZ1bGxcIj5cbiAgICAgIHtPYmplY3QuZW50cmllcyh0b29scykubWFwKChba2V5LCB2YWx1ZV0pID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtLWF1dG9cIiBhbHQ9e3ZhbHVlfSBzcmM9e3ZhbHVlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2xzXG4iLCAiaW1wb3J0IENpcmNsZSBmcm9tICd+L2NvbXBvbmVudHMvQ2lyY2xlJ1xuXG5lbnVtIFNlY3Rpb25Db2xvciB7XG4gIExJR0hUID0gJ2JnLWRhcmstMjAwJyxcbiAgREFSSyA9ICdiZy1kYXJrLTMwMCcsXG4gIFRPT0xTID0gJ2JnLWRhcmstNDAwJyxcbn1cblxuY29uc3QgSG9tZVNlY3Rpb246IFJlYWN0LkZDPHsgY29sb3I/OiBTZWN0aW9uQ29sb3I7IHRpdGxlOiBzdHJpbmc7IGNpcmNsZUlkPzogc3RyaW5nOyBzbWFsbFRpdGxlPzogYm9vbGVhbiB9PiA9ICh7XG4gIGNvbG9yID0gU2VjdGlvbkNvbG9yLkRBUkssXG4gIHRpdGxlLFxuICBjaGlsZHJlbixcbiAgY2lyY2xlSWQsXG4gIHNtYWxsVGl0bGUsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BweC03IGxnOnB4LTE0ICR7Y29sb3J9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBqdXN0aWZ5LWVuZCBwbC1bOTVweF0gbGc6cGwtWzEyNHB4XVwiPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1pbldpZHRoOiAnM3B4JyB9fSBjbGFzc05hbWU9XCJoLWZ1bGwgYmctZ3JleS0yMDAgYm9yZGVyLWdyZXktMjAwXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLXN0YXJ0IGdhcC03IHB5LTEyIHNtOnB5LTE2IG1kOi1tbC0yLjVcIj5cbiAgICAgICAgICAgIDxDaXJjbGUgaWQ9e2NpcmNsZUlkfSBjbGFzc05hbWU9e2Ake2NvbG9yfSBoaWRkZW4gbWQ6YmxvY2tgfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17YCR7c21hbGxUaXRsZSA/ICd0ZXh0LTN4bCcgOiAndGV4dC00eGwnfSBmb250LW1vbm8gZm9udC1saWdodGB9Pnt0aXRsZX08L2gyPlxuICAgICAgICAgICAgICA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVTZWN0aW9uXG5leHBvcnQgeyBTZWN0aW9uQ29sb3IgfVxuIiwgImltcG9ydCBIZXJvIGZyb20gJ34vY29tcG9uZW50cy9sYXlvdXQvSGVybydcbmltcG9ydCBTZWN0aW9uIGZyb20gJ34vY29tcG9uZW50cy9sYXlvdXQvU2VjdGlvbidcbmltcG9ydCBtZW1iZXJzIGZyb20gJ34vYXNzZXRzL3RlYW0nXG5pbXBvcnQgeyBqc29uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgVG9kYXlEYXRlIGZyb20gJ34vY29tcG9uZW50cy9Ub2RheURhdGUnXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJ34vY29tcG9uZW50cy90eXBvZ3JhcGh5L1BhcmFncmFwaCdcblxuY29uc3QgQmxvY2s6IFJlYWN0LkZDPHsgdGl0bGU6IHN0cmluZyB9PiA9ICh7IHRpdGxlLCBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtaGlnaGxpZ2h0LW9uIGZvbnQtbW9ub1wiPnt0aXRsZX08L3A+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWludGVyXCI+e2NoaWxkcmVufTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNZW1iZXI6IFJlYWN0LkZDPE1lbWJlcj4gPSAoeyBpbWFnZSwgbmFtZSwgbG9jYXRpb24sIGZ1bl9mYWN0czogeyB3b3JrLCBvdGhlciB9IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LVszOTBweF0gbXgtYXV0b1wiPlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJtLWF1dG8gbWQ6bS0wXCIgd2lkdGg9XCIzOTBcIiBzcmM9e2AvaW1nL3RlYW0vJHtpbWFnZX1gfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yIHB0LTYgdGV4dC14bCBsZWFkaW5nLTcgZm9udC1saWdodFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LW1vbm9cIj57bmFtZX08L3A+XG5cbiAgICAgICAgPEJsb2NrIHRpdGxlPVwiTG9jYXRpb25cIj57bG9jYXRpb259PC9CbG9jaz5cbiAgICAgICAgPEJsb2NrIHRpdGxlPVwiQWJvdXQgbWVcIj57d29ya308L0Jsb2NrPlxuICAgICAgICA8QmxvY2sgdGl0bGU9XCJGdW4gZmFjdFwiPntvdGhlcn08L0Jsb2NrPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgU3F1YWQgPSAoeyBtZW1iZXJzIH06IHsgbWVtYmVyczogTWVtYmVyW10gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMganVzdGlmeS1iZXR3ZWVuIGdhcC0xNlwiPlxuICAgIHttZW1iZXJzLm1hcCgobWVtYmVyKSA9PiAoXG4gICAgICA8TWVtYmVyIGtleT17bWVtYmVyLm5hbWV9IHsuLi5tZW1iZXJ9IC8+XG4gICAgKSl9XG4gIDwvZGl2PlxuKVxuXG50eXBlIFRlYW0gPSAndHgnIHwgJ2hhcmRjb3JlJyB8ICdjb3Jlcm9zJyB8ICdoZWFkX29mJ1xuXG50eXBlIE1lbWJlckF0dHJpYnV0ZXMgPSB7XG4gIG5hbWU6IHN0cmluZ1xuICBsb2NhdGlvbjogc3RyaW5nXG4gIHRlYW06IFRlYW1cbiAgZnVuX2ZhY3RzOiB7XG4gICAgd29yazogc3RyaW5nXG4gICAgb3RoZXI6IHN0cmluZ1xuICB9XG59XG5cbnR5cGUgTWVtYmVyID0geyBpbWFnZTogc3RyaW5nIH0gJiBNZW1iZXJBdHRyaWJ1dGVzXG5cbmZ1bmN0aW9uIG1lbWJlckZyb21Nb2R1bGUoe1xuICBmaWxlbmFtZSxcbiAgYXR0cmlidXRlczogeyBuYW1lLCBsb2NhdGlvbiwgdGVhbSwgZnVuX2ZhY3RzIH0sXG59OiB7XG4gIGZpbGVuYW1lOiBzdHJpbmdcbiAgYXR0cmlidXRlczogTWVtYmVyQXR0cmlidXRlc1xufSk6IE1lbWJlciB7XG4gIHJldHVybiB7XG4gICAgaW1hZ2U6IGZpbGVuYW1lLnJlcGxhY2UoL1xcLm1keD8kLywgJy5qcGcnKSxcbiAgICBuYW1lLFxuICAgIGxvY2F0aW9uLFxuICAgIHRlYW0sXG4gICAgZnVuX2ZhY3RzLFxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkZXIoKSB7XG4gIC8vIFJldHVybiBtZXRhZGF0YSBhYm91dCBlYWNoIG9mIHRoZSBwb3N0cyBmb3IgZGlzcGxheSBvbiB0aGUgaW5kZXggcGFnZS5cbiAgLy8gUmVmZXJlbmNpbmcgdGhlIHBvc3RzIGhlcmUgaW5zdGVhZCBvZiBpbiB0aGUgSW5kZXggY29tcG9uZW50IGRvd24gYmVsb3dcbiAgLy8gbGV0cyB1cyBhdm9pZCBidW5kbGluZyB0aGUgYWN0dWFsIHBvc3RzIHRoZW1zZWx2ZXMgaW4gdGhlIGJ1bmRsZSBmb3IgdGhlXG4gIC8vIGluZGV4IHBhZ2UuXG4gIHJldHVybiBqc29uKG1lbWJlcnMubWFwKG1lbWJlckZyb21Nb2R1bGUpKVxufVxuXG50eXBlIFNxdWFkcyA9IFJlY29yZDxUZWFtLCBNZW1iZXJbXT5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVhbSgpIHtcbiAgY29uc3QgbWVtYmVycyA9IHVzZUxvYWRlckRhdGE8TWVtYmVyW10+KClcblxuICBjb25zdCBzcXVhZHMgPSBtZW1iZXJzLnJlZHVjZTxTcXVhZHM+KFxuICAgIChhY2MsIGN1cnIpID0+IHtcbiAgICAgIGNvbnN0IHsgdGVhbSB9ID0gY3VyclxuICAgICAgaWYgKCFhY2NbdGVhbV0pIHtcbiAgICAgICAgYWNjW3RlYW1dID0gW11cbiAgICAgIH1cbiAgICAgIGFjY1t0ZWFtXS5wdXNoKGN1cnIpXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSxcbiAgICB7IGhlYWRfb2Y6IFtdLCBoYXJkY29yZTogW10sIGNvcmVyb3M6IFtdLCB0eDogW10gfVxuICApXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZXJvIHRpdGxlPVwiVGVhbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTIgbGc6Z2FwLTAganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPFBhcmFncmFwaCBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0xLzJcIj5cbiAgICAgICAgICAgIFNheSBoZWxsbyB0byBvdXIgZHJlYW0gdGVhbSBvZiBlbmdpbmVlcnMsIHByb2R1Y3QgbWFuYWdlcnMsIHByb2R1Y3QgZGVzaWduZXJzIGFuZCBtb3JlLiBUaGVzZSBndXlzIG1ha2VcbiAgICAgICAgICAgIENhcGRlc2sgcnVuIGxpa2UgY2xvY2t3b3JrLCB3aGlsc3QgYWRkaW5nIGluIG5ldyBmZWF0dXJlcyBhbmQgY29uc3RhbnRseSBpdGVyYXRpbmcuIFBsdXMsIGhhdmluZyBzb21lIGZ1blxuICAgICAgICAgICAgYWxvbmcgdGhlIHdheS4uLlxuICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgIDxUb2RheURhdGUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0hlcm8+XG4gICAgICA8U2VjdGlvbiB0aXRsZT1cIkhlYWRzXCI+XG4gICAgICAgIDxTcXVhZCBtZW1iZXJzPXtzcXVhZHMuaGVhZF9vZn0gLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uIHRpdGxlPVwiSGFyZENvcmVcIiBsaWdodD5cbiAgICAgICAgPFNxdWFkIG1lbWJlcnM9e3NxdWFkcy5oYXJkY29yZX0gLz5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDxTZWN0aW9uIHRpdGxlPVwiTG9zIENvcmVyb3NcIj5cbiAgICAgICAgPFNxdWFkIG1lbWJlcnM9e3NxdWFkcy5jb3Jlcm9zfSAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPFNlY3Rpb24gdGl0bGU9XCJTZWNvbmRhcmllc1wiIGxpZ2h0PlxuICAgICAgICA8U3F1YWQgbWVtYmVycz17c3F1YWRzLnR4fSAvPlxuICAgICAgPC9TZWN0aW9uPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCAiaW1wb3J0ICogYXMgYWRhbV9rb3ZhY3MgZnJvbSAnLi9hZGFtX2tvdmFjcy5tZHgnXG5pbXBvcnQgKiBhcyBhbGV4YW5kZXJfd29ybV9vbHNlbiBmcm9tICcuL2FsZXhhbmRlcl93b3JtX29sc2VuLm1keCdcbmltcG9ydCAqIGFzIGFuZHJlaV9taWhhaV9uaWNvbGFlIGZyb20gJy4vYW5kcmVpX21paGFpX25pY29sYWUubWR4J1xuaW1wb3J0ICogYXMgZXJheV90YXJoYW4gZnJvbSAnLi9lcmF5X3Rhcmhhbi5tZHgnXG5pbXBvcnQgKiBhcyBrZXZpbl9yZWVjZSBmcm9tICcuL2tldmluX3JlZWNlLm1keCdcbmltcG9ydCAqIGFzIGtyeXN0b2Zfc3BpbGxlciBmcm9tICcuL2tyeXN0b2Zfc3BpbGxlci5tZHgnXG5pbXBvcnQgKiBhcyBtYXJjX2FudG9pbmVfZmVybGFuZCBmcm9tICcuL21hcmMtYW50b2luZV9mZXJsYW5kLm1keCdcbmltcG9ydCAqIGFzIG1hcmlhX211aGFuZGVzIGZyb20gJy4vbWFyaWFfbXVoYW5kZXMubWR4J1xuaW1wb3J0ICogYXMgbWlra2VsX2JvamUgZnJvbSAnLi9taWtrZWxfYm9qZS5tZHgnXG5pbXBvcnQgKiBhcyBuZXZhX3N0dW1iZXJnZXIgZnJvbSAnLi9uZXZhX3N0dW1iZXJnZXIubWR4J1xuaW1wb3J0ICogYXMgcGF3ZWxfd2F3cmVzenVrIGZyb20gJy4vcGF3ZWxfd2F3cmVzenVrLm1keCdcbmltcG9ydCAqIGFzIHBldGVfcmFkY2xpZmZlIGZyb20gJy4vcGV0ZV9yYWRjbGlmZmUubWR4J1xuaW1wb3J0ICogYXMgcmFmYWVsX2Nhc2Vpcm9fbGVtb3MgZnJvbSAnLi9yYWZhZWxfY2FzZWlyb19sZW1vcy5tZHgnXG5pbXBvcnQgKiBhcyByaWNhcmRvX3ZlbnR1cmEgZnJvbSAnLi9yaWNhcmRvX3ZlbnR1cmEubWR4J1xuaW1wb3J0ICogYXMgcm9zYWxiYV9naXVmZnJpZGEgZnJvbSAnLi9yb3NhbGJhX2dpdWZmcmlkYS5tZHgnXG5pbXBvcnQgKiBhcyBzYXJvbHRhX3NlYm8gZnJvbSAnLi9zYXJvbHRhX3NlYm8ubWR4J1xuaW1wb3J0ICogYXMgdmluY2VudF9zZWd1aW4gZnJvbSAnLi92aW5jZW50X3NlZ3Vpbi5tZHgnXG5pbXBvcnQgKiBhcyBtYXJjX3J1YWl4IGZyb20gJy4vbWFyY19ydWFpeC5tZHgnXG5pbXBvcnQgKiBhcyBlZG5leV9waXR0YSBmcm9tICcuL2VkbmV5X3BpdHRhLm1keCdcblxuZXhwb3J0IGRlZmF1bHQgW1xuICBrZXZpbl9yZWVjZSxcbiAgYWRhbV9rb3ZhY3MsXG4gIGFuZHJlaV9taWhhaV9uaWNvbGFlLFxuICByb3NhbGJhX2dpdWZmcmlkYSxcbiAgbWlra2VsX2JvamUsXG4gIHNhcm9sdGFfc2VibyxcbiAgcmljYXJkb192ZW50dXJhLFxuICBhbGV4YW5kZXJfd29ybV9vbHNlbixcbiAgbmV2YV9zdHVtYmVyZ2VyLFxuICBrcnlzdG9mX3NwaWxsZXIsXG4gIG1hcmNfYW50b2luZV9mZXJsYW5kLFxuICBtYXJpYV9tdWhhbmRlcyxcbiAgcGV0ZV9yYWRjbGlmZmUsXG4gIHZpbmNlbnRfc2VndWluLFxuICBwYXdlbF93YXdyZXN6dWssXG4gIGVyYXlfdGFyaGFuLFxuICByYWZhZWxfY2FzZWlyb19sZW1vcyxcbiAgbWFyY19ydWFpeCxcbiAgZWRuZXlfcGl0dGEsXG5dXG4iLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm5hbWVcIjogXCJcdTAwQzFkXHUwMEUxbSBLb3ZcdTAwRTFjc1wiLFxuICBcImxvY2F0aW9uXCI6IFwiQ29wZW5oYWdlblwiLFxuICBcInRlYW1cIjogXCJjb3Jlcm9zXCIsXG4gIFwiZnVuX2ZhY3RzXCI6IHtcbiAgICBcIndvcmtcIjogXCJJIGNyZWF0ZWQgd2l0aCB0aGUgaGVscCBvZiAyIGZlbGxvdyBzdHVkZW50cyBhIHNhaWxib2F0IG1vbml0b3Jpbmcgc3lzdGVtIGZyb20gc2NyYXRjaCwgSFcrU1csIGN1cnJlbnRseSBpbnN0YWxsZWQgaW4gMiBib2F0cyBhdCB0aGUgQWRyaWF0aWMuXCIsXG4gICAgXCJvdGhlclwiOiBcIkhhbGYgb2YgbXkgdGhvdWdodHMgYXJlIHVzdWFsbHkgb3V0IGF0IHRoZSBzZWEgY2FzdWFsbHkgc2FpbGluZyBhcm91bmQgXHUyNkY1XHVGRTBGIEFsc28gSSByZWNlbnRseSBmb3VuZCBhbiBhbHRlcm5hdGl2ZSBwYXNzaW9uLWNhbmRpZGF0ZSBpbiB0aGUgTGlzYm9uIHdhdmVzIFx1RDgzQ1x1REZDNFx1RDgzQ1x1REZGRFx1MjAwRFx1MjY0Mlx1RkUwRi5cIlxuICB9XG59O1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcImFkYW1fa292YWNzLm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm5hbWVcIjogXCJBbGV4YW5kZXIgV29ybSBPbHNlblwiLFxuICBcImxvY2F0aW9uXCI6IFwiQ29wZW5oYWdlblwiLFxuICBcInRlYW1cIjogXCJoYXJkY29yZVwiLFxuICBcImZ1bl9mYWN0c1wiOiB7XG4gICAgXCJ3b3JrXCI6IFwiQmVpbmcgYXQgQ2FwZGVzayBmb3IgNisgeWVhcnMgbXkgam9iIGRlc2NyaXB0aW9uIGlzIHByb2JhYmx5IGNsb3NlIHRvIFx1MjAxOEdvb2dsZSBmb3IgQ2FwZGVza1x1MjAxOSBhdCB0aGlzIHBvaW50LlwiLFxuICAgIFwib3RoZXJcIjogXCJCb2FyZCBnYW1lcyBhbmQgYWxjb2hvbGljIGJldmVyYWdlcyBzdW1zIG1lIHVwLiBJIGFtIGFuIGF2aWQgaG9tZWJyZXdlciBteXNlbGYsIGN1cnJlbnRseSBzaXR0aW5nIG9uIGEgc29saWQgMSBpbiA0IGdvb2QgYnJld3MgKHRpcHMgYXJlIHdlbGNvbWUgXHVEODNEXHVERTA1KVwiXG4gIH1cbn07XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwiYWxleGFuZGVyX3dvcm1fb2xzZW4ubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibmFtZVwiOiBcIkFuZHJlaS1NaWhhaSBOaWNvbGFlXCIsXG4gIFwibG9jYXRpb25cIjogXCJCdWNoYXJlc3QsIFJvbWFuaWFcIixcbiAgXCJ0ZWFtXCI6IFwiY29yZXJvc1wiLFxuICBcImZ1bl9mYWN0c1wiOiB7XG4gICAgXCJ3b3JrXCI6IFwiTGlzcCBsaXZlcyEgQnV0IHR1cm5lZCB0byBSdWJ5IHRvIGdldCB0aGUgYmVzdCBlcXVpdHkgbWFuYWdlbWVudCBwbGF0Zm9ybSBvdXQgdGhlcmUgdG8gZXZlcnlvbmUgXHVEODNEXHVERTAxXHUwMEEwT25jZSBhIHdoaWxlIGFnbywgSSB3b3JrZWQgb24gdGhlIGZpcnN0IGV1cm9wZWFuIGh1bWFub2lkIHRoYXQgd2VudCB0byBJU1NcIixcbiAgICBcIm90aGVyXCI6IFwiRXZlcnl0aGluZyBtdXNpYyByZWxhdGVkLCBwaWFubyBhbmQga2V5Ym9hcmQgcGxheWVyLCBiYWR1ayBhdmlkIHBsYXllciwgcGFydC10aW1lIGNoZWYgYXQgaG9tZSwgdGVubmlzIGFuZCBmb290YmFsbCBwbGF5ZXJcIlxuICB9XG59O1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcImFuZHJlaV9taWhhaV9uaWNvbGFlLm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm5hbWVcIjogXCJFcmF5IFRhcmhhblwiLFxuICBcImxvY2F0aW9uXCI6IFwiSXptaXIsIFR1cmtleVwiLFxuICBcInRlYW1cIjogXCJjb3Jlcm9zXCIsXG4gIFwiZnVuX2ZhY3RzXCI6IHtcbiAgICBcIndvcmtcIjogXCJJXHUyMDE5bSBhIGZ1bGwtc3RhY2sgZGV2ZWxvcGVyLCBub3dhZGF5cyB1bmRlcmNvdmVyIGFzIGEgZnJvbnRlbmQgZGV2ZWxvcGVyIChkb25cdTIwMTl0IHRlbGwgYW55b25lIG15IHNlY3JldCkuIEkgbGlrZSBhbGwgdGhpbmdzIGphdmFzY3JpcHQvdHlwZXNjcmlwdC5cIixcbiAgICBcIm90aGVyXCI6IFwiRGFyZSBtZSB0byBlYXQgc3BpY3kgZm9vZCB0byB3YXRjaCBtZSBzZWxmLWRlc3RydWN0IFx1RDgzQ1x1REYzNlx1RkUwRlwiXG4gIH1cbn07XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwiZXJheV90YXJoYW4ubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibmFtZVwiOiBcIktldmluIFJlZWNlXCIsXG4gIFwibG9jYXRpb25cIjogXCJCZXJsaW5cIixcbiAgXCJ0ZWFtXCI6IFwiY29yZXJvc1wiLFxuICBcImZ1bl9mYWN0c1wiOiB7XG4gICAgXCJ3b3JrXCI6IFwiSSBub3cgaGF2ZSBhIGNvbXBvc2VyIHN0YW5kIGFzIGEgc3RhbmR1cCBkZXNrLCBhbmQgYXMgYSByZXN1bHQgSSB3YW50IHRvIGxlYXJuIHRvIGNvZGUgZW50aXJlbHkgdXNpbmcgYWlyIGdlc3R1cmUgc2hvcnRjdXRzLCB0byBjb21wbGV0ZSB0aGUgY29tcG9zZXIgZWZmZWN0IFx1RDgzQ1x1REZCQy4gSG93ZXZlciBpbnN0ZWFkIElcdTIwMTltIHNpbXVsdGFuZW91c2x5IGxlYXJuaW5nIHRvIHVzZSBtYWMsIGFuZCB0byB1c2UgYSBnZXJtYW4ga2V5Ym9hcmQsIHNvIHNwZW5kIG1vc3Qgb2YgbXkgdGltZSBhd2t3YXJkbHkgdHJ5aW5nIHVuZmFtaWxpYXIga2V5Ym9hcmQgc2hvcnRjdXRzIFx1RDgzQ1x1RERFOVx1RDgzQ1x1RERFQVx1RDgzQ1x1REY0Ri5cIixcbiAgICBcIm90aGVyXCI6IFwiSSBnbyBib3VsZGVyaW5nIGFzIGEgaG9iYnksIGFuZCBub3cgdGhhdCBsb2NrZG93bnMgYXJlIGVhc2luZywgSVx1MjAxOW0gdHJ5aW5nIHRvIGdldCBiYWNrIGluIHRvIGl0IFx1RDgzRVx1RERENy4gSSBhbHNvIHRha2UgbXkgZG9nIGFsb25nLCBidXQgaGVcdTIwMTlzIGEgdGVycmlibGUgY2xpbWJlciBcdUQ4M0RcdURDMTVcdUQ4M0VcdUREMzcuXCJcbiAgfVxufTtcbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJrZXZpbl9yZWVjZS5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJuYW1lXCI6IFwiS3J5c3RvZiBTcGlsbGVyXCIsXG4gIFwibG9jYXRpb25cIjogXCJDb3BlbmhhZ2VuXCIsXG4gIFwidGVhbVwiOiBcImhhcmRjb3JlXCIsXG4gIFwiZnVuX2ZhY3RzXCI6IHtcbiAgICBcIndvcmtcIjogXCJUaGUgbjAwYiB0aGF0IHlvdSBjYW4gYmxhbWUgd2hlbiB5b3VyIHN0dWZmIGlzblx1MjAxOXQgd29ya2luZyBcdUQ4M0VcdUREMjAgSVx1MjAxOWxsIGFsc28gYmUgdGhlIGZpcnN0IG9uZSB0byB0ZWxsIHlvdSB3aGVuIHlvdXIgU2xhY2sgPC0+IEdpdEh1YiBpbnRlZ3JhdGlvbiBpc25cdTIwMTl0IHdvcmtpbmdcIixcbiAgICBcIm90aGVyXCI6IFwiT3RoZXJ3aXNlIGtub3duIGZvciBnb2luZyBoYXJkIG9uIG91ciBzb2NpYWwgYWZ0ZXItcGFydGllcyBcdUQ4M0RcdUREN0FcIlxuICB9XG59O1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcImtyeXN0b2Zfc3BpbGxlci5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJuYW1lXCI6IFwiTWFyYy1BbnRvaW5lIEZlcmxhbmRcIixcbiAgXCJsb2NhdGlvblwiOiBcIlF1XHUwMEU5YmVjLCBDYW5hZGFcIixcbiAgXCJ0ZWFtXCI6IFwiaGFyZGNvcmVcIixcbiAgXCJmdW5fZmFjdHNcIjoge1xuICAgIFwid29ya1wiOiBcIkRvblx1MjAxOXQgZ2V0IG1lIHN0YXJ0ZWQgb24gd2h5IHlvdXIgcHJvamVjdCBzaG91bGQgdXNlIHR5cGVzY3JpcHQuLi4gZXZlbiBpZiBJIGhhdmUgYSBsb3ZlLWhhdGUgcmVsYXRpb25zaGlwIHdpdGggaXQgXHVEODNEXHVERTA1XCIsXG4gICAgXCJvdGhlclwiOiBcIk9uIG15IHRpbWUgb2ZmIHlvdSBjYW4gZmluZCBtZSBydW5uaW5nIG9yIGJha2luZy4gQXNrIG1lIGZvciBteSBzb3VyZG91Z2ggcmVjaXBlIFx1RDgzRFx1REUxQlwiXG4gIH1cbn07XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwibWFyYy1hbnRvaW5lX2ZlcmxhbmQubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibmFtZVwiOiBcIk1hcmlhIE11aGFuZGVzXCIsXG4gIFwibG9jYXRpb25cIjogXCJXb25kZXJmdWwgQ29wZW5oYWdlblwiLFxuICBcInRlYW1cIjogXCJjb3Jlcm9zXCIsXG4gIFwiZnVuX2ZhY3RzXCI6IHtcbiAgICBcIndvcmtcIjogXCJJIGFtIHRoZSBmb3J0dW5hdGUgb25lIHRvIGJlIHBhcnQgb2YgTG9zIENvcmVyb3MsIGFzIHRoZSByZXNpZGVudCBQTS4gS25vd24gYXMgUm9zYWxiYVx1MjAxOXMgZXZpbCB0d2luIFx1RDgzRFx1REUwOFwiLFxuICAgIFwib3RoZXJcIjogXCJJIHVzZWQgdG8gd29yayBhcyBhIGJhcnRlbmRlciBhbmQgaG9zdCBwYXJ0aWVzIGluIHRoZSBtZWF0cGFja2luZyBkaXN0cmljdCBpbiBDUEgsIHdoaWNoIG1lYW50IHRoYXQgaW4gdGhlIHdlZWtlbmRzIG15IGJlZCB0aW1lIHN0YXJ0ZWQgYXQgNy4zMCBhbS4gRmFzdCBmb3J3YXJkIHRvIHRvZGF5LCBub3cgb24gd2Vla2VuZHMgaSBnbyB0byBiZWQgYXQgMTEgcG0uIEdvb2RieWUgeW91dGggYW5kIGhhbGxvIGRhcmtuZXNzIG15IG9sZCBmcmllbmQgXHVEODNDXHVERjg5XCJcbiAgfVxufTtcbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJtYXJpYV9tdWhhbmRlcy5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJuYW1lXCI6IFwiTWlra2VsIEJvamVcIixcbiAgXCJsb2NhdGlvblwiOiBcIkNvcGVuaGFnZW4sIERlbm1hcmtcIixcbiAgXCJ0ZWFtXCI6IFwiaGVhZF9vZlwiLFxuICBcImZ1bl9mYWN0c1wiOiB7XG4gICAgXCJ3b3JrXCI6IFwiSSBsb3ZlIGV2ZXJ5dGhpbmctcHJvZHVjdCBmcm9tIGJ1c2luZXNzIG1vZGVscywgdXNlciBuZWVkcywgYW5kIGVuZ2luZWVyaW5nIGZyYW1ld29ya3MgdG8gY3Jpc3AgdXNlciBpbnRlcmZhY2VzLiBJIHJlZ2FyZCBteSBjb2xsZWFndWVzIGFzIHRoZSBtb3N0IG1vdGl2YXRpbmcgcGFydCBvZiBteSBqb2IuXCIsXG4gICAgXCJvdGhlclwiOiBcIkkgbG92ZSBhbG1vc3QgYWxsIHR5cGVzIG9mIHNwb3J0cyBhbmQgZG8gc29tZSBvbmNlIGluIGEgd2hpbGUuIFRoaXMgY29tZXMgaW4gaGFuZHkgZm9yIHRoZSBjYWxvcmllcyBiYWxhbmNlIGFzIEkgYWxzbyBsaWtlIHRvIGVhdCAobm90IGNvb2spIG5pY2UgZm9vZC4gSSBnZXQgaW5zcGlyZWQgYnkgbWVldGluZyBuZXcgcGVvcGxlIHdpdGggZGlmZmVyZW50IGJhY2tncm91bmRzLlwiXG4gIH1cbn07XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwibWlra2VsX2JvamUubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibmFtZVwiOiBcIk5ldmEgU3R1bWJlcmdlclwiLFxuICBcImxvY2F0aW9uXCI6IFwiQ29wZW5oYWdlblwiLFxuICBcInRlYW1cIjogXCJoYXJkY29yZVwiLFxuICBcImZ1bl9mYWN0c1wiOiB7XG4gICAgXCJ3b3JrXCI6IFwiTXkgZ3JlYXRlc3Qgc291cmNlIG9mIG1vdGl2YXRpb24gYXQgd29yazogYmlnIHZpc2lvbiwgZW1wb3dlcm1lbnQgYW5kIHNlZWluZyBvdGhlciBwZW9wbGUgZ3Jvdy5cIixcbiAgICBcIm90aGVyXCI6IFwiSSBsaWtlIHRvIHdha2UgdXAgc3VwZXIgZWFybHkgaW4gdGhlIG1vcm5pbmcuIE5vIGFsYXJtIGNsb2NrIGV2ZXIuIFllcCwgZXZlbiBvbiB0aGUgd2Vla2VuZHMuIFx1RDgzRVx1REQzN1x1MjAwRFx1MjY0MFx1RkUwRlwiXG4gIH1cbn07XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwibmV2YV9zdHVtYmVyZ2VyLm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm5hbWVcIjogXCJQYXdlbCBXYXdyZXN6dWtcIixcbiAgXCJsb2NhdGlvblwiOiBcIlZhbGVuY2lhLCBTcGFpblwiLFxuICBcInRlYW1cIjogXCJ0eFwiLFxuICBcImZ1bl9mYWN0c1wiOiB7XG4gICAgXCJ3b3JrXCI6IFwiSSB1c2UgbnZpbSBhbmQgdG11eCB0byBkbyA5OSUgb2YgbXkgcHJvZ3JhbW1pbmcgd29yay4gQmVmb3JlIENhcGRlc2sgSSBoYXZlIG5ldmVyIHVzZWQgUnVieSBhbmQvb3IgUmFpbHMgYXQgd29yay5cIixcbiAgICBcIm90aGVyXCI6IFwiSVx1MjAxOXZlIGFjY3VtdWxhdGVkIDguMWsgXHUyMDFDbWluZGZ1bCBtaW51dGVzXHUyMDFEIGluIHRoZSBbV2FraW5nIFVwXShodHRwczovL2FwcC53YWtpbmd1cC5jb20vKSBtZWRpdGF0aW9uIGFwcC4gSSBidWlsZCBteSBvd24ga2V5Ym9hcmRzLlwiXG4gIH1cbn07XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwicGF3ZWxfd2F3cmVzenVrLm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm5hbWVcIjogXCJQZXRlIFJhZGNsaWZmZVwiLFxuICBcImxvY2F0aW9uXCI6IFwiTG9uZG9uLCBVS1wiLFxuICBcInRlYW1cIjogXCJjb3Jlcm9zXCIsXG4gIFwiZnVuX2ZhY3RzXCI6IHtcbiAgICBcIndvcmtcIjogXCJJIHVzZWQgdG8gZG8gY2xvdWQgYmFja2VuZCBzdHVmZiBpbiBteSBwcmV2aW91cyBqb2IgYnV0IElcdTIwMTltIHNoYXJwZW5pbmcgbXkgZnJvbnRlbmQgc2tpbGxzIG5vdyEgXHVEODNEXHVEQ0FBXCIsXG4gICAgXCJvdGhlclwiOiBcIlx1RDgzQ1x1REZCOFx1MDBBMCBJIGxpa2UgdG8gcGxheSBndWl0YXIsIFx1RDgzQ1x1REZBNFx1MDBBMHNpbmcgYW5kIFx1RDgzQ1x1REZCNVx1MDBBMHdyaXRlIHNvbmdzIGFuZCBJIHBsYXkgaW4gYSBwb3N0IGhhcmRjb3JlIGJhbmRcIlxuICB9XG59O1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcInBldGVfcmFkY2xpZmZlLm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm5hbWVcIjogXCJSYWZhZWwgQ2FzZWlybyBMZW1vc1wiLFxuICBcImxvY2F0aW9uXCI6IFwiQ29wZW5oYWdlbiwgRGVubWFya1wiLFxuICBcInRlYW1cIjogXCJ0eFwiLFxuICBcImZ1bl9mYWN0c1wiOiB7XG4gICAgXCJ3b3JrXCI6IFwiTXkgZmlyc3Qgam9iIGludm9sdmVkIGRldmVsb3BpbmcgYSBwbGF0Zm9ybSBmcm9tIHNjcmF0Y2ggZm9yIGEgZ292ZXJubWVudCBjb21wYW55LiBXaGlsZSBzdHVkeWluZy4gQW5kIHdpdGggb25seSBvbmUgdGVhbW1hdGUuXCIsXG4gICAgXCJvdGhlclwiOiBcIkkgZnVsZmlsIG15IGNoaWxkaG9vZCBkcmVhbSBvZiBiZWluZyBhIHJhY2luZyBkcml2ZXIgYnkgcGxheWluZyB3aXRoIGEgdG95IHN0ZWVyaW5nIHdoZWVsIGF0IGhvbWUuXCJcbiAgfVxufTtcbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJyYWZhZWxfY2FzZWlyb19sZW1vcy5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJuYW1lXCI6IFwiUmljYXJkbyBWZW50dXJhXCIsXG4gIFwibG9jYXRpb25cIjogXCJQb3J0dWdhbFwiLFxuICBcInRlYW1cIjogXCJoYXJkY29yZVwiLFxuICBcImZ1bl9mYWN0c1wiOiB7XG4gICAgXCJ3b3JrXCI6IFwiSSBhbHdheXMgaGF2ZSBhbiBlbnRyZXByZW5ldXJpYWwvYnVzaW5lc3MgZm9jdXMgb24gYW55IHByb2plY3QgSVx1MjAxOW0gd29ya2luZyBvbiBcdUQ4M0RcdURFNDJcIixcbiAgICBcIm90aGVyXCI6IFwiSSBoYXZlIGEgZGVlcCBpbnRlcmVzdCBvbiBKYXBhbmVzZSBjdWx0dXJlIGFuZCBhbSBzdGlsbCBsZWFybmluZyBKYXBhbmVzZSBcdUQ4M0NcdURGOEMuXCJcbiAgfVxufTtcbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJyaWNhcmRvX3ZlbnR1cmEubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibmFtZVwiOiBcIlJvc2FsYmEgR2l1ZmZyaWRhXCIsXG4gIFwibG9jYXRpb25cIjogXCJVZGluZSwgSXRhbHkgKG1vc3Qgb2YgdGhlIHRpbWUpICYgQ29wZW5oYWdlbiwgRGVubWFyayAoc29tZXRpbWVzKVwiLFxuICBcInRlYW1cIjogXCJoZWFkX29mXCIsXG4gIFwiZnVuX2ZhY3RzXCI6IHtcbiAgICBcIndvcmtcIjogXCJJXHUyMDE5bSBhIG5lcmQgb2YgUHJvZHVjdCBNYW5hZ2VtZW50LiBJIGxvdmUgdGFsa2luZyBhYm91dCBhbnl0aGluZyByZWxhdGVkIHRvIGl0LCB3YXRjaCBvdXQgd2hlbiBJIGdldCBzdGFydGVkIFx1RDgzRFx1REUwN1wiLFxuICAgIFwib3RoZXJcIjogXCJJIGxvdmUgdGhlYXRlciBhbmQgaW1wcm92ICh0aGF0IGhhdmUgYSBodWdlICBvdmVybGFwcGluZyB3aXRoIHByb2R1Y3QgbWFuYWdlbWVudCBmcm9tIG15IFBPVikuIFZlcnkgcHJvdWQgb2YgbXkgdHdvIGtpZHMgYW5kIG9mIG15IHRpcmFtaXN1IFx1RDgzRFx1REM3Nlx1MDBBMFx1RDgzRFx1REUwQlx1MDBBMFx1RDgzQ1x1RERFRVx1RDgzQ1x1RERGOVwiXG4gIH1cbn07XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwicm9zYWxiYV9naXVmZnJpZGEubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibmFtZVwiOiBcIlNhcm9sdGEgU2Vib1wiLFxuICBcImxvY2F0aW9uXCI6IFwiVmVqbGUsIERlbm1hcmtcIixcbiAgXCJ0ZWFtXCI6IFwiY29yZXJvc1wiLFxuICBcImZ1bl9mYWN0c1wiOiB7XG4gICAgXCJ3b3JrXCI6IFwiSSBsb3ZlIGEgZ29vZCB3b3Jrc2hvcCB3aXRoIG15IHRlYW0hIEVzcGVjaWFsbHkgdGhlIHBsYW5uaW5nIHBhcnQsIHdoZXJlIEkgaGF2ZSB0byBkZWNpZGUgd2hpY2ggbWV0aG9kIG9yIHN0cmF0ZWd5IHdvdWxkIGhlbHAgdXMgcHJvZ3Jlc3MgYmVzdCBpbiBvdXIgZGlzY292ZXJ5LlwiLFxuICAgIFwib3RoZXJcIjogXCJJbiAyMDE5IEkgYWRvcHRlZCBhIHBvZGVuY28gZnJvbSBTcGFpbi4gSGUgaXMgdGhlIHN3ZWV0ZXN0IGNyZWF0dXJlIG9uIEVhcnRoIGFuZCBsb29rcyBhIGJpdCBsaWtlIERvYmJ5IGZyb20gSFAhXCJcbiAgfVxufTtcbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJzYXJvbHRhX3NlYm8ubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibmFtZVwiOiBcIlZpbmNlbnQgU2VndWluXCIsXG4gIFwibG9jYXRpb25cIjogXCJRdVx1MDBFOWJlYywgQ2FuYWRhXCIsXG4gIFwidGVhbVwiOiBcImhlYWRfb2ZcIixcbiAgXCJmdW5fZmFjdHNcIjoge1xuICAgIFwid29ya1wiOiBcIkkgYW0gdmVyeSBsdWNreSB0byBoZWFkIG91ciB0ZWFtIG9mIGFtYXppbmcgZW5naW5lZXJzIGF0IENhcGRlc2shIE15IG1haW4gb2NjdXBhdGlvbiBpcyB0byBiZSBsYXRlIGF0IG1lZXRpbmdzLlwiLFxuICAgIFwib3RoZXJcIjogXCJJIGNhbiBzbGVlcCBvbiBkZW1hbmQgQU5EIEkgb3duIGNsb3NlIHRvIDMwMDAgc21hbGwgY2Fycy4gSSBkb25cdTIwMTl0IGhhdmUgYW55IG90aGVyIG1ham9yIGlzc3Vlcy5cIlxuICB9XG59O1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcInZpbmNlbnRfc2VndWluLm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm5hbWVcIjogXCJNYXJjIFJ1YWl4XCIsXG4gIFwibG9jYXRpb25cIjogXCJMb25kb25cIixcbiAgXCJ0ZWFtXCI6IFwiaGVhZF9vZlwiLFxuICBcImZ1bl9mYWN0c1wiOiB7XG4gICAgXCJ3b3JrXCI6IFwiSVx1MjAxOW0gYWx3YXlzIHRha2luZyBub3RlcyBhYm91dCBuZXcgaW5pdGlhdGl2ZXMuIEkgZG8gbm90IGV2ZXIgdHJ1c3QgdGhhdCBteSBmdXR1cmUgbWUgd2lsbCBtYW5hZ2UgdG8gY29tZSB1cCB3aXRoIHN1Y2ggZ3JlYXRuZXNzIGFnYWluLlwiLFxuICAgIFwib3RoZXJcIjogXCJJIGhhdmUgYW4gdW5yZXF1aXRlZCBsb3ZlIGZvciB0aGUgYWJzdXJkLiBJIGNhblx1MjAxOXQgYmUgcmF0aW9uYWwgYXQgd29yayB3aXRob3V0IGJlaW5nIGlycmF0aW9uYWwgb3V0c2lkZSBpdC4gQnV0IHdlcmUgYXJlIGF0IHdvcmssIHNvIHlvdVx1MjAxOWxsIG5ldmVyIGZpbmQgb3V0IVwiXG4gIH1cbn07XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwibWFyY19ydWFpeC5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJuYW1lXCI6IFwiRWRuZXkgUGl0dGFcIixcbiAgXCJsb2NhdGlvblwiOiBcIlBvcnR1YWxcIixcbiAgXCJ0ZWFtXCI6IFwidHhcIixcbiAgXCJmdW5fZmFjdHNcIjoge1xuICAgIFwid29ya1wiOiBcIkluIG15IHZlcnkgZmlyc3QgaW50ZXJuc2hpcCwgSSBzdGFydGVkIGFzIGEgZnJvbnQtZW5kIGRldmVsb3BlciBkb2luZyBqUXVlcnkgYnV0IHRoZW4gbW92ZWQgb24gdG8gYmFjay1lbmQgZGV2ZWxvcG1lbnQgYWZ0ZXIgNiBtb250aHMsIHRoaW5raW5nIElcdTIwMTlkIG5ldmVyIGdvIGJhY2sgdG8gSlMgbWFkbmVzcyBhZ2Fpbi4gMTAgeWVhcnMgaGF2ZSBwYXNzZWQuIElcdTIwMTltIGEgZnJvbnQtZW5kIGRldmVsb3BlciBcdUQ4M0NcdURGMUFcIixcbiAgICBcIm90aGVyXCI6IFwiSSBoYXZlIHNvbWUgaW50ZW5zZSBhbmFseXNpcyBwYXJhbHlzaXMgd2hlbiBidXlpbmcgdGhpbmdzIC0gaXQgdG9vayBtZSBhIHllYXIgdG8gcmVzZWFyY2ggYW5kIGJ1eSB0aGUgcGVyZmVjdCBlbGVjdHJpYyBjb2ZmZWUgZ3JpbmRlci4gVGhlIHZlcnkgbmV4dCBkYXkgSSB3YXMgYWxyZWFkeSBsb29raW5nIGZvciBhbm90aGVyIG9uZS5cIlxuICB9XG59O1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcImVkbmV5X3BpdHRhLm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUIsSUFBTSxPQUFpRixDQUFDLEVBQUUsVUFBVSxPQUFPLFlBQVk7QUFDckgsUUFBTSxXQUFXO0FBQ2pCLFFBQU0sU0FBUyxTQUFTLGFBQWE7QUFDckMsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxX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
