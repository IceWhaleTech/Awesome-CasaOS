import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-0efdbbde.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h1",
  {
    id: "create-your-first-custom-appstore-for-casaos",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#create-your-first-custom-appstore-for-casaos",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Create your first custom AppStore for CasaOS")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "The quickest way to create your own AppStore, is simply forking an existing AppStore and trim all the apps and unneccessary files before adding your own.",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2><p>You should be comfortable about repository forking and pushing commits on GitHub before proceeding to the steps.</p><h2 id="steps" tabindex="-1"><a class="header-anchor" href="#steps" aria-hidden="true">#</a> Steps</h2><h3 id="step-1-fork-an-appstore" tabindex="-1"><a class="header-anchor" href="#step-1-fork-an-appstore" aria-hidden="true">#</a> Step 1 - Fork an AppStore</h3><p>In the steps below, we will start by forking the official CasaOS AppStore.</p>', 5);
const _hoisted_8 = {
  href: "https://github.com/iceWhaleTech/CasaOS-AppStore",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "Fork",
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  [
    /* @__PURE__ */ createTextVNode("If everything looks good, click on "),
    /* @__PURE__ */ createBaseVNode("code", null, "Create Fork"),
    /* @__PURE__ */ createTextVNode(" button.")
  ],
  -1
  /* HOISTED */
);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode(
  "li",
  null,
  "Wait until the forked repository is ready",
  -1
  /* HOISTED */
);
const _hoisted_12 = /* @__PURE__ */ createStaticVNode('<h3 id="step-2-cleanup-the-forked-repository" tabindex="-1"><a class="header-anchor" href="#step-2-cleanup-the-forked-repository" aria-hidden="true">#</a> Step 2 - Cleanup the forked repository</h3><ol><li><p>Hit the <code>[.]</code> key to open the repository in an online IDE.</p></li><li><p>Remove all folders, but keep the <code>Apps</code> folder</p></li><li><p>Remove all subfolders in the <code>Apps</code> folder, but you can keep one subfolder as a template.</p></li><li><p>Remove all files, but the following files are optional to keep:</p><ul><li><code>category-list.json</code> (category list along with description)</li><li><code>recommend-list.json</code> (featured apps as seen in the CasaOS AppStore UI)</li><li><code>CONTRIBUTING.md</code> (guidelines for creating an app)</li></ul></li></ol><h3 id="step-3-add-the-first-app" tabindex="-1"><a class="header-anchor" href="#step-3-add-the-first-app" aria-hidden="true">#</a> Step 3 - Add the first app</h3><ol><li><p>Follow the <code>CONTRIBUTING.md</code> to add your first app to the <code>Apps</code> folder.</p><blockquote><p>You can use the existing app in the <code>Apps</code> folder as a template.</p></blockquote></li><li><p>Once you are done, push the changes.</p></li></ol><h3 id="step-4-test-the-appstore" tabindex="-1"><a class="header-anchor" href="#step-4-test-the-appstore" aria-hidden="true">#</a> Step 4 - Test the AppStore</h3><ol><li>Go back to the GitHub repository page at step 3 above.</li><li>Click on the <code>&lt;&gt; Code</code> dropdown menu</li><li>Copy the URL of <code>Download ZIP</code></li><li>Go to AppStore UI in CasaOS, and click on <code>+ Add Source</code></li><li>Paste the URL then click on <code>Add +</code></li><li>Wait until the app from your AppStore shows up</li></ol>', 6);
const _hoisted_18 = {
  href: "https://github.com/IceWhaleTech/Awesome-CasaOS",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("p", null, [
      createTextVNode("There are few AppStores listed at "),
      createVNode(_component_RouterLink, { to: "/content/3rd-party-app-stores/list.html" }, {
        default: withCtx(() => [
          createTextVNode("Store list")
        ]),
        _: 1
        /* STABLE */
      }),
      createTextVNode(", you can choose one of them to fork.")
    ]),
    _hoisted_3,
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createTextVNode("Go to "),
        createBaseVNode("a", _hoisted_8, [
          createTextVNode("https://github.com/iceWhaleTech/CasaOS-AppStore"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" and click the "),
        _hoisted_9,
        createTextVNode(" button on the top right corner.")
      ]),
      _hoisted_10,
      _hoisted_11
    ]),
    _hoisted_12,
    createBaseVNode("blockquote", null, [
      createBaseVNode("p", null, [
        createTextVNode("If you think your custom AppStore adds value to the CasaOS community and are committed to its ongoing maintenance, we'd be delighted to feature it on awesome.casaos.io. Please submit a PR at "),
        createBaseVNode("a", _hoisted_18, [
          createTextVNode("https://github.com/IceWhaleTech/Awesome-CasaOS"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" for consideration.")
      ])
    ])
  ]);
}
const createYourFirstCustomAppstore_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "create-your-first-custom-appstore.html.vue"]]);
export {
  createYourFirstCustomAppstore_html as default
};
