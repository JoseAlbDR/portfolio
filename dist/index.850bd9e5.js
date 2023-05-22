// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gS8LH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "af599da5850bd9e5";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1GgH0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _effectViewJs = require("./views/effectView.js");
var _effectViewJsDefault = parcelHelpers.interopDefault(_effectViewJs);
var _modelJs = require("./model.js");
var _projectViewJs = require("./views/projectView.js");
var _projectViewJsDefault = parcelHelpers.interopDefault(_projectViewJs);
var _menuViewJs = require("./views/menuView.js");
var _menuViewJsDefault = parcelHelpers.interopDefault(_menuViewJs);
var _techsViewJs = require("./views/techsView.js");
var _techsViewJsDefault = parcelHelpers.interopDefault(_techsViewJs);
var _aboutViewJs = require("./views/aboutView.js");
var _aboutViewJsDefault = parcelHelpers.interopDefault(_aboutViewJs);
var _footerViewJs = require("./views/footerView.js");
var _footerViewJsDefault = parcelHelpers.interopDefault(_footerViewJs);
var _formationViewJs = require("./views/formationView.js");
var _formationViewJsDefault = parcelHelpers.interopDefault(_formationViewJs);
var _formViewJs = require("./views/formView.js");
var _formViewJsDefault = parcelHelpers.interopDefault(_formViewJs);
const init = function() {
    const view = new (0, _effectViewJsDefault.default)();
    // view.showRdmLettersOnLoad();
    // view.showRdmLettersMouseOver();
    view.showBlur();
    view.showDataType();
    view.showStickyNav();
    view.showActiveMenu();
    view.showActiveMenuScroll();
};
(0, _projectViewJsDefault.default).render((0, _modelJs.projectItems));
(0, _menuViewJsDefault.default).render((0, _modelJs.menuItems));
(0, _techsViewJsDefault.default).render((0, _modelJs.techItems));
(0, _aboutViewJsDefault.default).render((0, _modelJs.aboutItems));
(0, _footerViewJsDefault.default).render((0, _modelJs.footerItems));
(0, _formationViewJsDefault.default).render((0, _modelJs.formationItems));
const controlSubmitForm = function(formData) {
    const data = (0, _modelJs.submitForm)(formData);
    (0, _formViewJsDefault.default).clearForm();
    (0, _formViewJsDefault.default).successMsg();
};
(0, _formViewJsDefault.default).addHandlerSubmit(controlSubmitForm);
init();

},{"./views/effectView.js":"joqUW","./model.js":"Py0LO","./views/projectView.js":"5NjnT","./views/menuView.js":"i6XNo","./views/techsView.js":"h9VsQ","./views/aboutView.js":"cuI8l","./views/footerView.js":"eLGzg","./views/formationView.js":"3mxP1","./views/formView.js":"cU6RJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"joqUW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class EffectView {
    _nav = document.querySelector(".navbar");
    _randomEffect() {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let iterations = 0;
        const event1 = document.querySelector(".hack");
        const interval = setInterval(()=>{
            event1.textContent = event1.textContent.split("").map((_, index)=>{
                if (index < iterations) return event1.dataset.value[index];
                return letters[Math.floor(Math.random() * 26)];
            }).join("");
            if (iterations >= event1.dataset.value.length) clearInterval(interval);
            iterations += 1 / 3;
        }, 50);
    }
    _obsHero() {
        const bezier = document.querySelectorAll(".hero-text");
        const intersectionHero = function(entries) {
            const [entry] = entries;
            if (entry.isIntersecting) {
                entry.target.classList.add("bezier");
                entry.target.classList.remove("opacity-0");
            }
        };
        // Blur effect in Hero Section
        const obsHero = new IntersectionObserver(intersectionHero, {
            root: null,
            threshold: 0.5
        });
        bezier.forEach((element)=>obsHero.observe(element));
    }
    _headerObserver(stickyNav) {
        const navHeight = this._nav.getBoundingClientRect().height;
        return new IntersectionObserver(stickyNav.bind(this), {
            root: null,
            threshold: 1,
            rootMargin: `+${navHeight}px`
        });
    }
    _stickyNav(entries) {
        const [entry] = entries;
        if (!entry.isIntersecting) this._nav.classList.add("sticky");
        else this._nav.classList.remove("sticky");
    }
    _addActive(element) {
        element.classList.add("active");
        element.classList.add("underline");
    }
    _removeActive(element) {
        element.classList.remove("active");
        element.classList.remove("underline");
    }
    _activeMenuItem() {
        this._addActive(event.target);
        const siblings = document.querySelectorAll(".nav-link");
        siblings.forEach((sib)=>{
            if (event.target === sib) return;
            this._removeActive(event.target);
        });
    }
    _sectionObserver(revealSection) {
        return new IntersectionObserver(revealSection.bind(this), {
            root: null,
            threshold: 0.15
        });
    }
    _revealSection(entries) {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("section-hidden");
        const siblings = document.querySelectorAll(".nav-link");
        siblings.forEach((sib)=>{
            const navHref = sib.getAttribute("href").slice(1);
            if (entry.target.id === navHref) this._addActive(sib);
            else this._removeActive(sib);
        });
    }
    showBlur() {
        this._obsHero();
    }
    // Random letters on load
    showRdmLettersOnLoad() {
        window.addEventListener("load", ()=>this._randomEffect());
    }
    // Random letters on mouseover
    showRdmLettersMouseOver() {
        document.querySelector(".hack").onmouseover = ()=>this._randomEffect();
    }
    showActiveMenu() {
        this._nav.addEventListener("click", this._activeMenuItem.bind(this));
    }
    showActiveMenuScroll() {
        const allSections = document.querySelectorAll(".section");
        const sectionObserver = this._sectionObserver(this._revealSection);
        allSections.forEach(function(section) {
            sectionObserver.observe(section);
        });
    }
    showStickyNav() {
        const observer = this._headerObserver(this._stickyNav);
        observer.observe(hero);
    }
    showDataType() {
        class TxtType {
            constructor(el, toRotate, period){
                this.toRotate = toRotate;
                this.el = el;
                this.loopNum = 0;
                this.period = parseInt(period, 10) || 2000;
                this.txt = "";
                this.tick();
                this.isDeleting = false;
            }
            tick() {
                const i = this.loopNum % this.toRotate.length;
                const fullTxt = this.toRotate[i];
                if (this.isDeleting) this.txt = fullTxt.substring(0, this.txt.length - 1);
                else this.txt = fullTxt.substring(0, this.txt.length + 1);
                this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
                const that = this;
                let delta = 200 - Math.random() * 100;
                if (this.isDeleting) delta /= 2;
                if (!this.isDeleting && this.txt === fullTxt) {
                    delta = this.period;
                    this.isDeleting = true;
                } else if (this.isDeleting && this.txt === "") {
                    this.isDeleting = false;
                    this.loopNum++;
                    delta = 500;
                }
                setTimeout(function() {
                    that.tick();
                }, delta);
            }
        }
        window.onload = function() {
            const elements = document.getElementsByClassName("typewrite");
            for(let i = 0; i < elements.length; i++){
                const toRotate = elements[i].getAttribute("data-type");
                const period = elements[i].getAttribute("data-period");
                if (toRotate) new TxtType(elements[i], JSON.parse(toRotate), period);
            }
            // INJECT CSS
            const css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            document.body.appendChild(css);
        };
    }
}
exports.default = EffectView;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"Py0LO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "projectItems", ()=>projectItems);
parcelHelpers.export(exports, "menuItems", ()=>menuItems);
parcelHelpers.export(exports, "techItems", ()=>techItems);
parcelHelpers.export(exports, "aboutItems", ()=>aboutItems);
parcelHelpers.export(exports, "footerItems", ()=>footerItems);
parcelHelpers.export(exports, "formationItems", ()=>formationItems);
parcelHelpers.export(exports, "submitForm", ()=>submitForm);
const projectItems = [
    {
        name: "Forkify",
        text: "Web APP en la que puedes buscar recetas y guardar tus favoritas. Las recetas se obtienen llamando a una API externa.",
        gitHubUrl: "https://github.com/JoseAlbDR/forkify",
        netlifyUrl: "https://forkify-jadr.netlify.app",
        thumbnail: "./assets/thumbnail/forkify.png"
    },
    {
        name: "Bankist",
        text: "Pagina que muestra algunos efectos que se pueden obtener con javascript usando addEventListener e intersectionObserver.",
        gitHubUrl: "https://github.com/JoseAlbDR/completeJavascriptCourse/tree/master/13-Advanced-DOM-Bankist",
        netlifyUrl: "https://bankist-jadr.netlify.app",
        thumbnail: "./assets/thumbnail/bankist.png"
    },
    {
        name: "Mapty",
        text: "Web APP en la que podemos a\xf1adir marcadores de ejercicio a un mapa. El mapa semuestra consumiendo una API externa.",
        gitHubUrl: "https://github.com/JoseAlbDR/completeJavascriptCourse/tree/master/15-Mapty",
        netlifyUrl: "https://mapty-jadr.netlify.app",
        thumbnail: "./assets/thumbnail/mapty.png"
    }
];
const menuItems = [
    {
        href: "#hero",
        name: "Inicio"
    },
    {
        href: "#about",
        name: "Sobre M\xed"
    },
    {
        href: "#formacion",
        name: "Formaci\xf3n"
    },
    {
        href: "#portfolio",
        name: "Portfolio"
    },
    {
        href: "#contacto",
        name: "Contacto"
    }
];
const techItems = [
    {
        src: "./assets/logos/HTML5_logo_and_wordmark.svg",
        alt: "html5"
    },
    {
        src: "./assets/logos/css-3-logo-svgrepo-com.svg",
        alt: "css3"
    },
    {
        src: "assets/logos/Unofficial_JavaScript_logo_2.svg",
        alt: "javascript"
    },
    {
        src: "assets/logos/Typescript_logo_2020.svg",
        alt: "typescript"
    },
    {
        src: "assets/logos/React-icon.svg",
        alt: "react"
    },
    {
        src: "assets/logos/Node.js_logo.svg",
        alt: "nodejs"
    }
];
const aboutItems = [
    {
        imageSrc: "../assets/img/about-img.jpg",
        title: "Nunca es tarde para descubrir tu pasion.",
        text: "\xa1Hola! Soy J. Alberto Delgado, un estudiante principiante de desarrollo web. Mi pasi\xf3n es resolver problemas a trav\xe9s de la programaci\xf3n. Actualmente, me encuentro en un bootcamp de desarrollo web full stack, ampliando mis habilidades en front-end y back-end. Mi meta es crecer como profesional en el desarrollo web y aportar mi conocimiento a proyectos futuros."
    }
];
const footerItems = [
    {
        social: [
            {
                href: "https://github.com/JoseAlbDR/",
                src: "assets/logos/github.svg"
            },
            {
                href: "https://www.linkedin.com/in/jalbertodelgado/",
                src: "assets/logos/linkedin.svg"
            }
        ],
        menu: [
            {
                href: "#",
                name: "Inicio"
            },
            {
                href: "#about",
                name: "Sobre M\xed"
            },
            {
                href: "#formacion",
                name: "Formaci\xf3n"
            },
            {
                href: "#portfolio",
                name: "Portfolio"
            },
            {
                href: "#contacto",
                name: "Contacto"
            }
        ],
        copyright: "\xa9 2023 J.Alberto Delgado"
    }
];
const formationItems = [
    {
        resumen: {
            title: "El saber no ocupa lugar",
            text: "A pesar de no contar con experiencia laboral previa, me encuentro en constante proceso de formaci\xf3n para adquirir habilidades valiosas. Mi pasi\xf3n por aprender y adaptarme demuestra la relevancia de la capacitaci\xf3n para enfrentar proyectos desafiantes con confianza y creatividad."
        },
        education: {
            name: "Estudios",
            titulation: [
                {
                    title: "Administraci\xf3n de Sistemas Inform\xe1ticos en Red",
                    date: "2010 - 2012",
                    institution: "I.E.S Antonio de Nebrija",
                    note: "8.08",
                    text: "El ciclo formativo de grado superior ASIR (Administraci\xf3n de Sistemas Inform\xe1ticos en Red) brinda conocimientos y habilidades en la gesti\xf3n de sistemas, redes y seguridad inform\xe1tica, preparando a los estudiantes para desempe\xf1arse en roles t\xe9cnicos especializados."
                }
            ]
        },
        formation: {
            name: "Certificaci\xf3n",
            titulation: [
                {
                    title: "Bootcap Desarrollo Web Full Stack KeepCoding",
                    date: "Mayo 2023 - Actualidad",
                    certificate: null,
                    institution: "<a href='https://keepcoding.io/nuestros-bootcamps/full-stack-web-bootcamp/' target='_blank'>KeepCoding</a>",
                    text: "Programa de inmersi\xf3n intensiva que ofrece una formaci\xf3n completa en desarrollo web, abarcando tanto el frontend como el backend. Con un enfoque pr\xe1ctico y basado en tecnolog\xedas de vanguardia, prepara a los estudiantes para convertirse en desarrolladores web altamente competentes y listos para enfrentar desaf\xedos del mundo real."
                },
                {
                    title: "The Complete JavaScript Course: From Zero to Expert!",
                    date: "Mayo 2023",
                    certificate: "<a href='https://www.udemy.com/certificate/UC-bdb8b3a0-a5c1-4fb6-bece-d0149264fcaa/' target='_blank'>Certificado</a>",
                    institution: "<a href='https://www.udemy.com/course/the-complete-javascript-course/' target='_blank'>Udemy</a>",
                    text: "Curso exhaustivo que lleva a los estudiantes desde el nivel b\xe1sico hasta el nivel experto en JavaScript, proporcionando conocimientos completos sobre el lenguaje, incluyendo conceptos fundamentales, manipulaci\xf3n del DOM, manipulaci\xf3n de datos, programaci\xf3n orientada a objetos y m\xe1s."
                },
                {
                    title: "Curso de Git, Github &amp; SourceTree",
                    date: "Abril 2023",
                    certificate: "<a href='https://1drv.ms/b/s!AqmllO1SZcxzhLBm0bPw5H_8w7vQNw?e=CsTq4h' target='_blank'>Certificado</a>",
                    institution: "<a href='https://plataforma.keepcoding.io/p/curso-git-github-sourcetree' target='_blank'>KeepCoding</a>",
                    text: "El curso Git, GitHub & Sourcetree de KeepCoding es una formaci\xf3n completa que ense\xf1a a los estudiantes c\xf3mo utilizar Git y GitHub de manera eficiente para el control de versiones y la colaboraci\xf3n en proyectos de desarrollo de software. Adem\xe1s, el curso abarca el uso de Sourcetree como una herramienta visual para facilitar el flujo de trabajo con Git."
                }
            ]
        }
    }
];
const submitForm = function(formData) {
    return formData;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5NjnT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class ProjectView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".projects-container");
    _generateElementMarkup(element) {
        return `
    <div class="portfolio col">
      <p class="element-title">${element.name}</p>
      <div class="card shadow-sm">
        <div class="card-img">
          <img
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            src="${element.thumbnail}"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
        </div>
        <title>${element.name}</title>
        <rect width="100%" height="100%" fill="#55595c"></rect>

        <div class="card-body">
          <p class="card-text">
            ${element.text}
          </p>
          <div
            class="d-flex justify-content-between align-items-center"
          >
            <div class="btn-group">
              <!-- Linkedin -->
              <a
                href="${element.gitHubUrl}"
                target="_blank"
                ><button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  <img
                    src="assets/logos/github.svg"
                    class="img-fluid"
                    alt=""
                  />
                  GitHub
                </button>
              </a>
              <a href="${element.netlifyUrl}" target="_blank"
                ><button
                  type="button"
                  class="btn btn-sm btn-outline-secondary ms-2"
                >
                  <img
                    src="assets/logos/browser-chrome.svg"
                    class="img-fluid"
                    alt=""
                  />
                  Web
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  `;
    }
}
exports.default = new ProjectView();

},{"./View.js":"iS7pi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iS7pi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    _data;
    render(data) {
        this._data = data;
        const markup = this._generateMarkup();
        this._clearParent();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    _clearParent() {
        this._parentElement.innerHTML = "";
    }
    _generateSpanMarkup(item) {
        return `
    <span>${item}</span>
    `;
    }
    _generateMarkup() {
        return !this._data.length ? this._clearParent() : this._data.map((element)=>this._generateElementMarkup(element)).join("");
    }
    renderSpinner() {
        const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
        // Clear parent
        this._clear();
        // Render markup
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6XNo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class MenuView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".navbar-nav");
    _generateElementMarkup(element) {
        return `
    <li class="nav-item">
      <a
        class="nav-link active underline hover-underline-animation"
        aria-current="page"
        href="${element.href}"
        >${element.name}</a
      >
    </li>
  
  `;
    }
}
exports.default = new MenuView();

},{"./View.js":"iS7pi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h9VsQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class TechsView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".techs-items");
    _generateElementMarkup(element) {
        return `
    <div
      class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"
    >
      <img
        src="${element.src}"
        class="img-fluid"
        alt="${element.alt}"
      />
    </div>
  
  `;
    }
}
exports.default = new TechsView();

},{"./View.js":"iS7pi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cuI8l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class AboutView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".about-items");
    _generateElementMarkup(element) {
        return `
      <div class="col-10 col-sm-8 col-lg-6">
        <img
          src="${element.imageSrc}"
          class="d-block mx-lg-auto img-fluid"
          alt="Bootstrap Themes"
          width="700"
          height="500"
          loading="lazy"
        />
      </div>
      <div class="col-lg-6">
        <h1 class="asdf hero-text display-5 fw-bold lh-1 mb-3 lh-base opacity-0">
        ${element.title.split(" ").map((item)=>this._generateSpanMarkup(item)).join("")}
        </h1>

        <p class="lead">
          ${element.text}
        </p>
      </div>
  
  `;
    }
}
exports.default = new AboutView();

},{"./View.js":"iS7pi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eLGzg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class FooterView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".footer");
    _generateSocialMarkup(item) {
        return `
      <li class="ms-3">
        <a
          class="text-body-secondary"
          href="${item.href}"
          target="_blank"
          ><img
            src="${item.src}"
            height="30px"
            width="30px"
            class="img-fluid"
            alt=""
        /></a>
      </li>
    `;
    }
    _generateMenuMarkup(item) {
        return `
    <li class="nav-item">
        <a
          href="${item.href}"
          class="nav-link footer-text fs-5 px-2 hover-underline-animation"
          >${item.name}</a
        >
    `;
    }
    _generateMarkup() {
        return `
    <div class="d-flex border-bottom justify-content-around">
      <ul class="nav col-md-4 list-unstyled d-flex mt-2">
        ${this._data[0].social.map((element)=>this._generateSocialMarkup(element)).join("")}
      </ul>

      <ul
        class="nav d-flex justify-content-evenly pb-3 mb-3 align-items-center"
      >
        ${this._data[0].menu.map((element)=>this._generateMenuMarkup(element)).join("")}
      </ul>
    </div>
  <p class="text-center fs-4">${this._data[0].copyright}</p>
  
  `;
    }
}
exports.default = new FooterView();

},{"./View.js":"iS7pi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3mxP1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class FormationView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".formation");
    _generateSection(item) {
        return `
    ${item.titulation.map((element)=>{
            return `
    <div class="col-lg-6">
      <h3 class="resume-title">${item.name}</h3>
      <div class="resume-item">
      
        <h4>${element.title}</h4>
        <h5>${element.date}</h5>
        <p><em>${element.institution}${element.certificate ? element.certificate : ""}</em></p>
        
        <p>
          ${element.text}
        </p>
      </div>
    </div>
          `;
        }).join("")}
    `;
    }
    _generateMarkup() {
        return `
      <div class="bg-white">
        <div class="container py-5 px-4">
          <div class="section-title mt-5">
            <h1 class="hero-text display-5 fw-bold lh-1 mb-3 lh-base">
              ${this._data[0].resumen.title.split(" ").map((element)=>this._generateSpanMarkup(element)).join("")}
            </h1>
            <p class="lead">
              ${this._data[0].resumen.text}
            </p>
          </div>
        </div>
      </div>
      <div class="container py-5 px-4">
        <div class="row">
          ${this._generateSection(this._data[0].education)}
          ${this._generateSection(this._data[0].formation)}

        </div>

  
  `;
    }
}
exports.default = new FormationView();

},{"./View.js":"iS7pi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cU6RJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class FormView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".upload");
    clearForm() {
        const fields = document.querySelectorAll(".form-field");
        fields.forEach((field)=>field.value = "");
    }
    addHandlerSubmit(handler) {
        console.log(this._parentElement);
        this._parentElement.addEventListener("submit", function(event) {
            event.preventDefault();
            const dataArr = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataArr);
            handler(data);
        });
    }
    successMsg() {
        const btn = document.querySelector(".send");
        btn.insertAdjacentHTML("afterend", "<p>Gracias por enviar tu mensaje.</p>");
    }
}
exports.default = new FormView();

},{"./View.js":"iS7pi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gS8LH","1GgH0"], "1GgH0", "parcelRequire2041")

//# sourceMappingURL=index.850bd9e5.js.map
