"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[409],{7496:function(r){r.exports=JSON.parse('{"blogPosts":[{"id":"storybook-usage2","metadata":{"permalink":"/metaTrip/build/blog/storybook-usage2","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-01-09-storybook2.mdx","source":"@site/blog/2022-01-09-storybook2.mdx","title":"How to use Storybook 2","description":"- \u8fd9\u7bc7blog\u662fstorybook\u7684\u5165\u95e8\u6559\u7a0b\u5e76\u4e14\u5305\u542b\u4e86\u6211\u4f7f\u7528storybook 3\u5e74\u591a\u7684\u4e00\u4e9b\u4f53\u9a8c","date":"2022-01-09T00:00:00.000Z","formattedDate":"January 9, 2022","tags":[{"label":"storybook","permalink":"/metaTrip/build/blog/tags/storybook"},{"label":"react","permalink":"/metaTrip/build/blog/tags/react"}],"readingTime":5.885,"truncated":false,"authors":[{"name":"Sheldon Y Sun","title":"Jser @ Open Source Community","url":"https://github.com/777sunny777","imageURL":"https://github.com/777sunny777.png","key":"sheldon"}],"nextItem":{"title":"\u57fa\u91d1\u57fa\u7840(\u4e00)","permalink":"/metaTrip/build/blog/funding-basic1"}},"content":"import react from \'react\';\\r\\n\\r\\n:::tip\\r\\n- \u8fd9\u7bc7blog\u662fstorybook\u7684\u5165\u95e8\u6559\u7a0b\u5e76\u4e14\u5305\u542b\u4e86\u6211\u4f7f\u7528storybook 3\u5e74\u591a\u7684\u4e00\u4e9b\u4f53\u9a8c \\r\\n- \u53ea\u9488\u5bf9React\u9879\u76ee\\r\\n- \u8fdb\u4e00\u6b65\u5b66\u4e60\uff0c\u8bf7\u8bbf\u95ee[Storybook\u5b98\u7f51](https://storybook.js.org/)\\r\\n:::\\r\\n\\r\\n[Storybook](https://storybook.js.org/) is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.\\r\\n\\r\\n\u4eceStorybook\u7684\u5b98\u65b9\u63cf\u8ff0\u6765\u770b\uff0c\u4ed6\u662f\u7528\u4e8e\u5feb\u901f\u6784\u5efaUI demo\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u5e2e\u7528\u6237\u5feb\u901f\u6784\u5efa\u9875\u9762\uff1b\u5e76\u4e14\u6709\u5f88\u597d\u7684\u8bed\u6cd5\u529f\u80fd\uff0c\u8f7b\u677e\u4e66\u5199demo\uff1b\u8fd8\u6709\u5f88\u597d\u7684\u8f85\u52a9\u63d2\u4ef6\uff0c\\r\\n\u6bd4\u5982demo\u7684\u6587\u6863\u8f85\u52a9\uff0c\u53c2\u6570\u8f85\u52a9\uff0c\u8fd8\u6709accessibility\u8f85\u52a9\u6d4b\u8bd5\u7b49\u7b49\u3002\u8fd9\u4e00\u5207\u51e0\u4e4e\u4fc3\u4f7f\u5b83\u6210\u4e3a\u4e86\u9879\u76eedemo\u7684\u6700\u597d\u9009\u62e9\u3002\u56e0\u4e3a\u6211\u7684\u9879\u76ee\u6d89\u53ca\u5230\u7ec4\u4ef6\u5e93\u7684\u5f00\u53d1\uff0c\\r\\n\u6240\u4ee5storybook\u5c31\u66f4\u663e\u5f97\u5408\u9002\u548c\u91cd\u8981\u3002\\r\\n\\r\\n:::note\\r\\n- version: v6.4.9(Currently) and [Latest](https://github.com/storybookjs/storybook/releases)\\r\\n:::\\r\\n\\r\\nStorybook \u4ee3\u7801\u5e93\u66f4\u65b0\u5f88\u6d3b\u8dc3\uff0c\u51e0\u4e4e\u4e00\u5e74\u4e00\u6b21major\u7248\u672c\u7684\u66f4\u65b0\uff0c\u603b\u4f1a\u5e26\u6765\u4e9b\u65b0\u7684\u529f\u80fd\uff0c\u8fd9\u7bc7blog\u6211\u4eec\u90a3\u76ee\u524d\u6700\u65b0\u7248\u672cv6.4.9 \u4e3a\u4f8b\u8fdb\u884c\u8bf4\u660e\\r\\n\\r\\n\\r\\n## 4. Configure\\r\\n\\r\\nStorybook is configured via a folder called .storybook, which contains various configuration files.\\r\\n\\r\\nStorybook\u914d\u7f6e\u6587\u4ef6\u4e00\u822c\u662f\u653e\u5728.storybook\u7684\u6587\u4ef6\u5939\u4e0b\u9762\uff0c\u901a\u8fc7-c\u4e5f\u53ef\u4ee5\u8fdb\u884c\u8def\u5f84\u914d\u7f6e\u3002\u4e3b\u8981\u5305\u542b\u5982\u4e0b\u4e09\u4e2a\u6587\u4ef6\uff1amain.js preview.js and manager.js\\r\\n[Detials](https://storybook.js.org/docs/react/configure/overview)\\r\\n\\r\\n### 4-1. main.js\\r\\n\\r\\nThe main configuration file is main.js.\\r\\n\\r\\n:::note\\r\\n- This file controls the Storybook server\'s behavior, so you must restart Storybook\u2019s process when you change it.\\r\\n:::\\r\\n\\r\\nThe main.js configuration file is a preset and, as such, has a powerful interface, but the key fields within it are:\\r\\n\\r\\n- stories: \u4e3b\u8981\u662f\u914d\u7f6estorie cases\u7684\u8def\u5f84\uff0c\u9ed8\u8ba4\u662f\u6587\u4ef6\u540d\u4e2d\u5e26\u6709 stories \u7684\u6587\u4ef6\uff0c\u6587\u4ef6\u8def\u5f84\uff0c\u6587\u4ef6\u540d\u89c4\u5219\uff0c\u6587\u4ef6\u540e\u7f00\u90fd\u662f\u53ef\u914d\u7f6e\u7684\u3002\\r\\n- addons - \u914d\u7f6e\u4e00\u4e0b\u9875\u9762\u4e2d\u9700\u8981\u7528\u5230\u7684addons.\\r\\n- webpackFinal - \u81ea\u5b9a\u4e49\u7684 webpack configuration.\\r\\n- babel - \u81ea\u5b9a\u4e49\u7684 babel configuration.\\r\\n\\r\\n```jsx\\r\\n// .storybook/main.js\\r\\n\\r\\nmodule.exports = {\\r\\n  stories: [\'../packages/MyStories\'],\\r\\n  addons: [\'@storybook/addon-essentials\'],\\r\\n  webpackFinal: async (config, { configType }) => {\\r\\n    config.module.rules.push({\\r\\n      test: /\\\\.scss$/,\\r\\n      use: [\'style-loader\', \'css-loader\', \'sass-loader\'],\\r\\n      include: path.resolve(__dirname, \'../\'),\\r\\n    });\\r\\n\\r\\n    return config;\\r\\n  },\\r\\n    babel: async (options) => ({\\r\\n    ...options,\\r\\n    // any extra options you want to set\\r\\n  })\\r\\n};\\r\\n\\r\\n```\\r\\n\\r\\n#### On-demand story loading\uff1a\\r\\n\\r\\n\u6309\u9700\u52a0\u8f7dstories\uff0c\u8fdb\u884c\u6027\u80fd\u63d0\u5347\uff0c**Starting with Storybook 6.4**, you can optimize your story loading by enabling the storyStoreV7 feature flag in your configuration as follows:\\r\\n\\r\\n```jsx\\r\\n// .storybook/main.js\\r\\n\\r\\nmodule.exports = {\\r\\n  stories: [],\\r\\n  addons: [\'@storybook/addon-essentials\'],\\r\\n  features: {\\r\\n    storyStoreV7: true,\\r\\n  },\\r\\n};\\r\\n\\r\\n```\\r\\n\\r\\n### 4-2. preview.js\\r\\n\\r\\nTo control the way stories are rendered and add global decorators and parameters\\r\\n\\r\\n- This is loaded in the Canvas tab\\r\\n- Use preview.js for global code that applies to all stories.\\r\\n\\r\\nThe preview.js file can be an ES module and export the following keys:\\r\\n\\r\\n- decorators\uff1a\u5305\u542b\u9875\u9762\u7ed3\u6784\u548c\u5168\u5c40\u6837\u5f0f\uff0c\u90fd\u53ef\u4ee5\u5728decorators\u4e2d\u5b9a\u4e49\\r\\n- parameters\uff1a\u4e00\u822c\u53ef\u4ee5\u914d\u7f6e\u5168\u5c40\u7684docs\u548caction\uff0cbackground\\r\\n- globalTypes: \\r\\n\\r\\n```jsx\\r\\n// .storybook/preview.js\\r\\n\\r\\n// createGlobalStyle from styled-component\\r\\nimport GlobalStyles from \'./GlobalStyles\';\\r\\n\\r\\nexport const decorators = [\\r\\n  (Story) => (\\r\\n    <GlobalStyles />\\r\\n    <div style={{ margin: \'3em\' }}>\\r\\n      <Story />\\r\\n    </div>\\r\\n  ),\\r\\n];\\r\\n\\r\\nexport const parameters = {\\r\\n  backgrounds: {\\r\\n    values: [\\r\\n      { name: \'red\', value: \'#f00\' },\\r\\n      { name: \'green\', value: \'#0f0\' },\\r\\n    ],\\r\\n  },\\r\\n};\\r\\n\\r\\nexport const globalTypes = {\\r\\n  theme: {\\r\\n    name: \'Theme\',\\r\\n    description: \'Global theme for components\',\\r\\n    defaultValue: \'light\',\\r\\n    toolbar: {\\r\\n      icon: \'circlehollow\',\\r\\n      // Array of plain string values or MenuItem shape (see below)\\r\\n      items: [\'light\', \'dark\'],\\r\\n      // Property that specifies if the name of the item will be displayed\\r\\n      showName: true,\\r\\n    },\\r\\n  },\\r\\n};\\r\\n\\r\\n```\\r\\n\\r\\n### 4-3. manager.js\\r\\n\\r\\nTo control the layout of Storybook\u2019s UI you can use addons.setConfig in your .storybook/manager.js:\\r\\n\\r\\n```jsx\\r\\n// .storybook/manager.js\\r\\n\\r\\nimport { addons } from \'@storybook/addons\';\\r\\n\\r\\naddons.setConfig({\\r\\n  isFullscreen: false,\\r\\n  showNav: true,\\r\\n  showPanel: true,\\r\\n  panelPosition: \'bottom\',\\r\\n  enableShortcuts: true,\\r\\n  isToolshown: true,\\r\\n  theme: undefined,\\r\\n  selectedPanel: undefined,\\r\\n  initialActive: \'sidebar\',\\r\\n  sidebar: {\\r\\n    showRoots: false,\\r\\n    collapsedRoots: [\'other\'],\\r\\n  },\\r\\n  toolbar: {\\r\\n    title: { hidden: false, },\\r\\n    zoom: { hidden: false, },\\r\\n    eject: { hidden: false, },\\r\\n    copy: { hidden: false, },\\r\\n    fullscreen: { hidden: false, },\\r\\n  },\\r\\n});\\r\\n\\r\\n```\\r\\n\\r\\n## 5. Essential addons and Addons\\r\\n\\r\\nStorybook\u5728\u53d1\u5c55\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f1a\u5438\u6536\u4e00\u4e9b\u5e38\u7528\u7684addon\uff0c\u4f5c\u4e3a\u6846\u67b6\u9884\u5236\u7684addon\uff0c\u8fd9\u4e2a\u5c31\u662fEssential addons and Addons\u7684\u533a\u522b\u3002 \\r\\n\u4f4e\u7248\u672c\u7684control \u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a@storybook/addon-knobs\uff0c\u5728V6\u7248\u672c\u53ef\u4ee5\u5185\u7f6e\u751f\u6210\u4e86\u3002\u4f46\u662f\u8fd9\u4e2a\u63d2\u4ef6\u672c\u8eab\u76ee\u524d\u662f\u5411\u4e0b\u517c\u5bb9\u7684\\r\\n\\r\\n### 5-1. Essential addons\\r\\n\\r\\nIf you\'re upgrading from a previous Storybook version, you\'ll need to run the following command in your terminal:\\r\\n\\r\\n```jsx\\r\\n#With npm\\r\\nnpm install -D @storybook/addon-essentials\\r\\n\\r\\n#With yarn\\r\\nyarn add -D @storybook/addon-essentials\\r\\n\\r\\n// .storybook/main.js\\r\\n\\r\\nmodule.exports = {\\r\\n  addons: [\'@storybook/addon-essentials\'],\\r\\n};\\r\\n\\r\\n```\\r\\n\\r\\nThere are many third-party addons as well as \u201cofficial\u201d addons developed by the Storybook core team.\u3001\\r\\n[Detials](https://storybook.js.org/docs/react/essentials/introduction)\\r\\n\\r\\n- Docs\\r\\n- Controls\\r\\n- Actions\\r\\n- Viewport\\r\\n- Backgrounds\\r\\n- Toolbars & globals\\r\\n- Measure\\r\\n- Outline\\r\\n\\r\\n\\r\\n### 5-2. Install 3rd party addons\\r\\n\\r\\nStorybook has [hundreds of reusable addons](https://storybook.js.org/addons) that are packaged as NPM modules.\\r\\n\\r\\n#### Using addons\\r\\n[Detials](https://storybook.js.org/docs/react/addons/install-addons#using-addons)\\r\\n\\r\\n```jsx\\r\\n\\r\\nyarn add -D @storybook/addon-a11y\\r\\n\\r\\n// .storybook/main.js\\r\\n\\r\\nmodule.exports = {\\r\\n  stories: [],\\r\\n  addons: [\\r\\n    // Other Storybook addons\\r\\n    \'@storybook/addon-a11y\', //\ud83d\udc48 The addon registered here\\r\\n  ],\\r\\n};\\r\\n\\r\\n```\\r\\n\\r\\n<img src=\\"https://storybook.js.org/5c457fbc275d0c3e2a37aae388a6019f/storybook-addon-installed-registered.png\\" alt=\\"Storybook addon\\" style={{width: \'100%\'}}/>\\r\\n\\r\\n\\r\\n### 5-3. \u81ea\u5b9a\u4e49addons\\r\\n\\r\\nNow let\u2019s add a panel to Storybook. Inside the src directory, create a new file called register.js and add the following:\\r\\n[Detials](https://storybook.js.org/docs/react/addons/writing-addons#add-a-panel)\\r\\n\\r\\n```jsx\\r\\n// /my-addon/src/register.js\\r\\n\\r\\nimport React from \'react\';\\r\\n\\r\\nimport { addons, types } from \'@storybook/addons\';\\r\\n\\r\\nimport { AddonPanel } from \'@storybook/components\';\\r\\n\\r\\nconst ADDON_ID = \'myaddon\';\\r\\nconst PANEL_ID = `${ADDON_ID}/panel`;\\r\\n\\r\\n// give a unique name for the panel\\r\\nconst MyPanel = () => <div>MyAddon</div>;\\r\\n\\r\\naddons.register(ADDON_ID, (api) => {\\r\\n  addons.add(PANEL_ID, {\\r\\n    type: types.PANEL,\\r\\n    title: \'My Addon\',\\r\\n    render: ({ active, key }) => (\\r\\n      <AddonPanel active={active} key={key}>\\r\\n        <MyPanel />\\r\\n      </AddonPanel>\\r\\n    ),\\r\\n  });\\r\\n});\\r\\n```\\r\\n\\r\\n:::note\\r\\n- register \u9700\u8981\u5728main.js\u8fdb\u884c\u6ce8\u518c\uff08When you register a Storybook addon, it will look for either register.js or preset.js as the entry points.\uff09\\r\\n:::\\r\\n\\r\\n<img src=\\"https://storybook.js.org/8a84ad965e96ef91ab0feb62f03b48b9/addon-initial-state.png\\" alt=\\"Storybook addon\\" style={{width: \'100%\'}}/>\\r\\n\\r\\n\\r\\n## 6. CLI options\\r\\n\\r\\nStorybook comes with two CLI utilities: start-storybook and build-storybook.\\r\\n[Detials](https://storybook.js.org/docs/react/api/cli-options)"},{"id":"funding-basic1","metadata":{"permalink":"/metaTrip/build/blog/funding-basic1","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-01-06-f1.mdx","source":"@site/blog/2022-01-06-f1.mdx","title":"\u57fa\u91d1\u57fa\u7840(\u4e00)","description":"- From \u300a\u6307\u6570\u57fa\u91d1\u6295\u8d44\u6307\u5357\u300b\u7ae0\u82821\uff0c2","date":"2022-01-06T00:00:00.000Z","formattedDate":"January 6, 2022","tags":[{"label":"funding","permalink":"/metaTrip/build/blog/tags/funding"}],"readingTime":2.72,"truncated":false,"authors":[{"name":"Sheldon Y Sun","title":"Jser @ Open Source Community","url":"https://github.com/777sunny777","imageURL":"https://github.com/777sunny777.png","key":"sheldon"}],"prevItem":{"title":"How to use Storybook 2","permalink":"/metaTrip/build/blog/storybook-usage2"},"nextItem":{"title":"How to use Storybook 1","permalink":"/metaTrip/build/blog/storybook-usage1"}},"content":":::tip\\r\\n- From \u300a\u6307\u6570\u57fa\u91d1\u6295\u8d44\u6307\u5357\u300b\u7ae0\u82821\uff0c2\\r\\n- \u5c0f\u767d\u5b66\u4e60\uff0c\u5207\u52ff\u76f2\u76ee\u8ddf\u4ece\\r\\n:::\\r\\n\\r\\n## \u8d44\u4ea7\\r\\n\\r\\n- \u80fd\u591f\u4e3a\u6211\u4eec\u201d\u751f\u94b1\u201c\u7684\u5c31\u662f\u8d44\u4ea7\uff0c**\u73b0\u91d1**\u4e0d\u662f\u8d44\u4ea7\\r\\n- \u8d44\u4ea7\u5206\u4e3a\u80fd\u591f\u4ea7\u751f\u73b0\u91d1\u6d41\u7684\u8d44\u4ea7\u548c\u4e0d\u80fd\u4ea7\u751f\u73b0\u91d1\u6d41\u7684\u8d44\u4ea7\\r\\n\\r\\n> \u6bd4\u5982\u94f6\u884c\u7406\u8d22\u4e00\u4e2a5%\uff0c\u4e00\u4e2a3%\uff0c\u53e6\u4e00\u4e2a\u662f\u519c\u6751\u5408\u4f5c\u793e\u76845%\uff0c \u8fd9\u4e9b\u90fd\u662f\u53ef\u4ee5\u4ea7\u751f\u73b0\u91d1\u6d41\u7684\u8d44\u4ea7\uff0c\u4ed6\u7684\u4ef7\u683c\u53d6\u51b3\u4e8e\u73b0\u91d1\u6d41\u7684\u5927\u5c0f\u548c\u7a33\u5b9a\u6027\u3002\\r\\n\u94f6\u884c\u7684\u7a33\u5b9a\u6027\u9ad8\u4e8e\u519c\u6751\u5408\u4f5c\u793e\uff0c5%\u9ad8\u4e8e3%\uff0c\u4f60\u5c31\u5f88\u5bb9\u6613\u77e5\u9053\u54ea\u4e2a\u8d44\u4ea7\u66f4\u4f18\u8d28\\r\\n\\r\\n> \u4e0d\u80fd\u4ea7\u751f\u73b0\u91d1\u6d41\u7684\u8d44\u4ea7\uff0c\u4ed6\u7684\u4ef7\u683c\u4e3b\u8981\u53d6\u51b3\u4e8e\u4f9b\u6c42\u5173\u7cfb\uff0c\u6bd4\u5982\u4e71\u4e16\u9ec4\u91d1\uff0c\u7279\u6b8a\u65f6\u671f\u4e0b\u4f9b\u9700\u5173\u7cfb\u53d1\u751f\u6539\u53d8\uff0c\u624d\u4f1a\u66f4\u503c\u94b1\u3002\\r\\n\\r\\n> \u80fd\u4ea7\u751f\u73b0\u91d1\u6d41\u7684\u8d44\u4ea7\u901a\u5e38\u6bd4\u4e0d\u80fd\u4ea7\u751f\u73b0\u91d1\u6d41\u7684\u8d44\u4ea7\uff0c**\u957f\u671f\u6536\u76ca\u7387\u66f4\u9ad8**\u3002\u9ec4\u91d1\u7684\u957f\u671f\u6536\u76ca\u7387\u751a\u81f3\u4f4e\u4e8e\u56fd\u503a\u3002\\r\\n\\r\\n\\r\\n## \u6307\u6570\\r\\n\\r\\n- \u6307\u6570\u662f\u4e00\u4e2a\u9009\u80a1\u89c4\u5219\uff0c\u4ed6\u7684\u76ee\u7684\u662f\u6309\u7167\u67d0\u4e2a\u89c4\u5219\u6311\u9009\u51fa\u4e00\u7bee\u5b50\u80a1\u7968\uff0c\u5e76\u53cd\u5e94\u8fd9\u4e00\u7bee\u5b50\u80a1\u7968\u7684**\u5e73\u5747\u4ef7\u683c\u8d70\u52bf**\u3002\\r\\n\\r\\n> \u4f8b\u5982\u6caa\u6df1300\u6307\u6570\uff0c\u662f\u7531\u4e0a\u6d77\u548c\u6df1\u5733\u8bc1\u5238\u5e02\u573a\u4e2d\u9009\u53d6300\u53eaA\u80a1\u4f5c\u4e3a\u6837\u672c\u7f16\u5236\u800c\u6210\u7684\u6210\u5206\u80a1\u6307\u6570\uff0c\u6211\u4eec\u53ea\u9700\u8981\u770b\u4e0b\u6caa\u6df1300\u6307\u6570\uff0c\\r\\n\u5c31\u53ef\u4ee5\u77e5\u9053\u56fd\u5185\u6700\u5927\u7684300\u53ea\u80a1\u7968\uff0c\u4eca\u5929\u662f\u6574\u4f53\u6da8\u4e86\u8fd8\u662f\u8dcc\u4e86\u3002\\r\\n\\r\\n- \u6307\u6570\u70b9\u6570\uff0c\u662f\u6307\u6570\u80cc\u540e\u516c\u53f8\u7684\u5e73\u5747\u80a1\u4ef7\uff0c\u8fd9\u4e2a\u70b9\u6570\u4e0b\u8dcc\u6216\u4e0a\u6da8\uff0c\u4ee3\u8868\u6307\u6570\u80cc\u540e\u516c\u53f8\u80a1\u4ef7\u7684\u4e0b\u8dcc\u6216\u4e0a\u6da8\uff0c\u957f\u671f\u6765\u770b\uff0c\u6307\u6570\u70b9\u6570\u662f**\u4e0d\u65ad\u4e0a\u6da8\u7684**\\r\\n\\r\\n- \u6307\u6570\u57fa\u91d1\u5c31\u662f\u57fa\u91d1\u516c\u53f8\u5f00\u53d1\u4e00\u4e2a\u57fa\u91d1\u4ea7\u54c1\u3002\u4e5f\u662f\u5b8c\u5168\u6309\u7167\u6307\u6570\u7684\u89c4\u5219\u53bb\u9009\u80a1\uff0c\u56e0\u4e3a\u6307\u6570\u57fa\u91d1\u6301\u6709\u7684\u80a1\u7968\u79cd\u7c7b\uff0c\u6570\u91cf\uff0c\u6bd4\u4f8b\u90fd\u548c\u6307\u6570\u975e\u5e38\u63a5\u8fd1\uff0c\\r\\n\u6240\u4ee5\u6307\u6570\u57fa\u91d1\u7684\u8868\u73b0\u4e5f\u548c\u6307\u6570\u4e5f\u975e\u5e38\u63a5\u8fd1\uff0c\u4e5f\u5c31\u662f\u8bf4\u6307\u6570\u57fa\u91d1\u628a\u6307\u6570\u7684\u62bd\u8c61\u6982\u5ff5\u53d8\u6210\u4e86\u5b9e\u9645\u7684\u4ea7\u54c1\u3002\\r\\n\\r\\n> \u6307\u6570\u57fa\u91d1\u7684\u4e09\u4e2a\u7279\u70b9\uff1a\u957f\u751f\u4e0d\u8001\uff0c\u4ea7\u671f\u4e0a\u6da8\uff0c\u6210\u672c\u4f4e\u3002"},{"id":"storybook-usage1","metadata":{"permalink":"/metaTrip/build/blog/storybook-usage1","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-01-01-storybook1.mdx","source":"@site/blog/2022-01-01-storybook1.mdx","title":"How to use Storybook 1","description":"- \u8fd9\u7bc7blog\u662fstorybook\u7684\u5165\u95e8\u6559\u7a0b\u5e76\u4e14\u5305\u542b\u4e86\u6211\u4f7f\u7528storybook 3\u5e74\u591a\u7684\u4e00\u4e9b\u4f53\u9a8c","date":"2022-01-01T00:00:00.000Z","formattedDate":"January 1, 2022","tags":[{"label":"storybook","permalink":"/metaTrip/build/blog/tags/storybook"},{"label":"react","permalink":"/metaTrip/build/blog/tags/react"}],"readingTime":9.305,"truncated":false,"authors":[{"name":"Sheldon Y Sun","title":"Jser @ Open Source Community","url":"https://github.com/777sunny777","imageURL":"https://github.com/777sunny777.png","key":"sheldon"}],"prevItem":{"title":"\u57fa\u91d1\u57fa\u7840(\u4e00)","permalink":"/metaTrip/build/blog/funding-basic1"}},"content":"import react from \'react\';\\r\\n\\r\\n:::tip\\r\\n- \u8fd9\u7bc7blog\u662fstorybook\u7684\u5165\u95e8\u6559\u7a0b\u5e76\u4e14\u5305\u542b\u4e86\u6211\u4f7f\u7528storybook 3\u5e74\u591a\u7684\u4e00\u4e9b\u4f53\u9a8c \\r\\n- \u53ea\u9488\u5bf9React\u9879\u76ee\\r\\n- \u8fdb\u4e00\u6b65\u5b66\u4e60\uff0c\u8bf7\u8bbf\u95ee[Storybook\u5b98\u7f51](https://storybook.js.org/)\\r\\n:::\\r\\n\\r\\n[Storybook](https://storybook.js.org/) is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.\\r\\n\\r\\n\u4eceStorybook\u7684\u5b98\u65b9\u63cf\u8ff0\u6765\u770b\uff0c\u4ed6\u662f\u7528\u4e8e\u5feb\u901f\u6784\u5efaUI demo\u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u5e2e\u7528\u6237\u5feb\u901f\u6784\u5efa\u9875\u9762\uff1b\u5e76\u4e14\u6709\u5f88\u597d\u7684\u8bed\u6cd5\u529f\u80fd\uff0c\u8f7b\u677e\u4e66\u5199demo\uff1b\u8fd8\u6709\u5f88\u597d\u7684\u8f85\u52a9\u63d2\u4ef6\uff0c\\r\\n\u6bd4\u5982demo\u7684\u6587\u6863\u8f85\u52a9\uff0c\u53c2\u6570\u8f85\u52a9\uff0c\u8fd8\u6709accessibility\u8f85\u52a9\u6d4b\u8bd5\u7b49\u7b49\u3002\u8fd9\u4e00\u5207\u51e0\u4e4e\u4fc3\u4f7f\u5b83\u6210\u4e3a\u4e86\u9879\u76eedemo\u7684\u6700\u597d\u9009\u62e9\u3002\u56e0\u4e3a\u6211\u7684\u9879\u76ee\u6d89\u53ca\u5230\u7ec4\u4ef6\u5e93\u7684\u5f00\u53d1\uff0c\\r\\n\u6240\u4ee5storybook\u5c31\u66f4\u663e\u5f97\u5408\u9002\u548c\u91cd\u8981\u3002\\r\\n\\r\\n:::note\\r\\n- version: v6.4.9(Currently) and [Latest](https://github.com/storybookjs/storybook/releases)\\r\\n:::\\r\\n\\r\\nStorybook \u4ee3\u7801\u5e93\u66f4\u65b0\u5f88\u6d3b\u8dc3\uff0c\u51e0\u4e4e\u4e00\u5e74\u4e00\u6b21major\u7248\u672c\u7684\u66f4\u65b0\uff0c\u603b\u4f1a\u5e26\u6765\u4e9b\u65b0\u7684\u529f\u80fd\uff0c\u8fd9\u7bc7blog\u6211\u4eec\u90a3\u76ee\u524d\u6700\u65b0\u7248\u672cv6.4.9 \u4e3a\u4f8b\u8fdb\u884c\u8bf4\u660e\\r\\n\\r\\n\\r\\n\\r\\n## 0. Storybook\u9875\u9762\u5e03\u5c40\\r\\n\\r\\n### Sidebar and Canvas\\r\\n\\r\\n<video controls=\\"controls\\" autoPlay=\\"autoplay\\" loop=\\"loop\\" style={{width: \'100%\'}}>\\r\\n    <source src=\\"https://storybook.js.org/f818682edbbcdf2c04093f633aa36761/example-browse-all-stories-optimized.mp4\\" type=\\"video/mp4\\"/>\\r\\n</video>\\r\\n\\r\\n### Shortcuts\\r\\n\\r\\n<video controls=\\"controls\\" autoPlay=\\"autoplay\\" loop=\\"loop\\" style={{width: \'100%\'}}>\\r\\n    <source src=\\"https://storybook.js.org/b398f68ed8889feed0a52f077510efcf/storybook-keyboard-shortcuts-optimized.mp4\\" type=\\"video/mp4\\"/>\\r\\n</video>\\r\\n\\r\\n### Toolbar\\r\\n\\r\\n<video controls=\\"controls\\" autoPlay=\\"autoplay\\" loop=\\"loop\\" style={{width: \'100%\'}}>\\r\\n    <source src=\\"https://storybook.js.org/8b083907d74e7f2b9a298e5f324cc751/toolbar-walkthrough-optimized.mp4\\" type=\\"video/mp4\\"/>\\r\\n</video>\\r\\n\\r\\n### Docs\\r\\n\\r\\n<video controls=\\"controls\\" autoPlay=\\"autoplay\\" loop=\\"loop\\" style={{width: \'100%\'}}>\\r\\n    <source src=\\"https://storybook.js.org/07234fedf00ba418879c443de0764c1c/toolbar-docs-tab-optimized.mp4\\" type=\\"video/mp4\\"/>\\r\\n</video>\\r\\n\\r\\n### Addons\\r\\n\\r\\n<video controls=\\"controls\\" autoPlay=\\"autoplay\\" loop=\\"loop\\" style={{width: \'100%\'}}>\\r\\n    <source src=\\"https://storybook.js.org/946b2f4bdb006e8475d21202d68b9eec/addons-walkthrough-optimized.mp4\\" type=\\"video/mp4\\"/>\\r\\n</video>\\r\\n\\r\\n\\r\\n## 1. \u5b89\u88c5\\r\\n\\r\\nStorybook \u7684[\u5b89\u88c5](https://storybook.js.org/docs/react/get-started/install)\u5f88\u667a\u80fd\uff0cnpx sb init \u5c31\u53ef\u4ee5\u76f4\u63a5\u8fdb\u884c\u5b89\u88c5\uff0c\u4f46\u662f\u8981\u6ce8\u610f\u7684\u662f\u5b89\u88c5\u4e4b\u524d\u4f60\u5fc5\u987b\u5df2\u7ecf\u6709\u9879\u76ee\u6846\u67b6\u7684\u4f9d\u8d56\u3002\\r\\n\\r\\n:::note\\r\\n- Storybook will look into your project\'s dependencies during its install process and provide you with the best configuration available.\\r\\n- Storybook\u53ea\u662f\u9700\u8981\u9879\u76ee\u6846\u67b6\u4f9d\u8d56\uff0c\u6bd4\u5982react\u5c31\u76f8\u5f53\u4e8e\u4e00\u4e2a\u6807\u8bc6\uff0c\u4f60\u4e0d\u9700\u8981\u5199\u4efb\u4f55\u6846\u67b6\u4ee3\u7801\u5728\u9879\u76ee\u4e2d\\r\\n:::\\r\\n\\r\\n\\r\\n## 2. Write stories\\r\\n\\r\\nStory\u5c31\u662f\u4e00\u4e2ademo case\uff0cstories file\u5c31\u662f\u5b58\u653e\u4e00\u7c7bdemo cases\u7684\u96c6\u5408\uff0c\u8fd9\u4e9bcases\u6839\u636etitle\u5206\u6210\u4e0d\u540c\u7684\u7c7b\u578b\\r\\n\\r\\n```jsx\\r\\n// \u8fd9\u4e2a\u4e00\u4e2a\u5c55\u793abutton\u7684stories file\\r\\n// Button.stories.js|jsx\\r\\n\\r\\nimport React from \'react\';\\r\\n\\r\\nimport { Button } from \'./Button\';\\r\\n\\r\\nexport default {\\r\\n  \\r\\n  // title\u662f\u8fd9\u4e2a\u96c6\u5408\u7684\u540d\u79f0\uff0c\u540c\u65f6\u4e5f\u7528\u4e8estorybook \u5bfc\u822a\u680f\u7684\u7ed3\u6784\\r\\n  // \u6bd4\u5982\u53ef\u4ee5\u6709\u5c42\u7ea7\u5173\u7cfb\uff0c\'Button/Responsive\'\\r\\n\\r\\n  title: \'Button\',\\r\\n  \\r\\n  // component \u5c5e\u6027\u53ef\u4ee5\u4e0d\u5199, \u540e\u9762\u89e3\u91ca\u6587\u6863\u7684\u65f6\u5019\u518d\u8be6\u7ec6\u8bf4\\r\\n  // Storybook uses the component key in the story file\u2019s default export to extract the component\'s description and props.\\r\\n  \\r\\n  component: Button,\\r\\n};\\r\\n\\r\\n// \u8fd9\u91cc\u901a\u8fc7export\u5bfc\u51fa\u5c31\u751f\u6210\u4e86\u4e00\u4e2ademo case page\\r\\n// \u8def\u5f84\u5c31\u662f\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d Button\u4e0b\u9762\u7684Primary\\r\\n\\r\\nexport const Primary = () => <Button primary>Button</Button>;\\r\\n\\r\\n// \u8fd9\u91cc\u53ef\u4ee5\u6539\u53d8case\u7684\u547d\u540d\uff0c\u9ed8\u8ba4\u662ffunction name\\r\\nPrimary.storyName = \'I am the primary\';\\r\\n\\r\\nexport const Secondary = () => <Button backgroundColor=\\"#ff0\\" label=\\"\ud83d\ude04\ud83d\udc4d\ud83d\ude0d\ud83d\udcaf\\" />;\\r\\nexport const Tertiary = () => <Button backgroundColor=\\"#ff0\\" label=\\"\ud83d\udcda\ud83d\udcd5\ud83d\udcc8\ud83e\udd13\\" />;\\r\\n\\r\\n```\\r\\n\\r\\n### 2-1 Using args\\r\\n\\r\\n\u4f7f\u7528args\u662f\u6700\u65b0\u7248\u672c\u4e2dstorybook \u6bd4\u8f83\u5efa\u8bae\u7684\u5199\u6cd5\uff0c\u4e3b\u8981\u7684\u4f18\u70b9\u662f\u51cf\u5c11\u91cd\u590d\u4ee3\u7801\uff0c\u7528\u6cd5\u4e0a\u4e5f\u6bd4\u8f83\u6709\u7ae0\u53ef\u5faa\uff0c\u4fbf\u4e8e\u7ba1\u7406\u3002\\r\\n\u4e0d\u8fc7\u6839\u636e\u6211\u7684\u7ecf\u9a8c\u8fd8\u662f\u8981\u770b\u4f60\u7528storybook\u7684target\u662f\u4ec0\u4e48\uff0c\u5982\u679c\u53ea\u662ffor show UI demo\uff0c\u4f7f\u7528args \u7684\u65b9\u5f0f\u662f\u53ef\u884c\u7684\u3002\\r\\n\u4f46\u662f\u6bd4\u5982\u505a\u7ec4\u4ef6\u5e93\uff0cshow UI demo\u53ea\u662f\u4e00\u4e2a\u65b9\u9762\uff0cshow demo code for users \u4e5f\u662f\u5f88\u91cd\u8981\u7684\u4e00\u70b9\uff0c\u6211\u4eec\u5e0c\u671b\u901a\u8fc7storybook\u7684cases\u53ef\u4ee5\u8ba9\u7528\u6237\\r\\n\u76f4\u89c2\u7684\u660e\u767ddemo \u8981\u600e\u4e48\u5199\uff0c\u751a\u81f3\u53ea\u9700\u8981\u4ed6copy/paste\u5c31\u53ef\u4ee5\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5c31\u9700\u8981\u5c3d\u91cf\u5c11\u7684\u4f7f\u7528storybook\u63d0\u4f9b\u7684\u4e00\u4e9b\u63a5\u53e3\u65b9\u6cd5\uff0c\u51cf\u5c11storybook\\r\\n\u5bf9\u4f60\u7684demo case code \u7684\u5e72\u6270\u3002\\r\\n\\r\\n\u4efb\u4f55\u65f6\u5019\uff0c\u6211\u4eec\u90fd\u8981\u660e\u767d\u7528\u6237\u5173\u5fc3\u7684\u662f\u4ec0\u4e48\uff1f\u800c\u4e0d\u662f\u76f2\u76ee\u7684\u6c42\u65b0\u6c42\u53d8\u3002\\r\\n\\r\\n```jsx\\r\\nimport React from \'react\';\\r\\nimport { Button } from \'./Button\';\\r\\n\\r\\nexport default {\\r\\n  title: \'Button\',\\r\\n  component: Button,\\r\\n};\\r\\n\\r\\n//\ud83d\udc47 We create a \u201ctemplate\u201d of how args map to rendering\\r\\nconst Template = (args) => <Button {...args} />;\\r\\n\\r\\n// \ud83d\udc47 Each story then reuses that template\\r\\nexport const Primary = Template.bind({});\\r\\nPrimary.args = { background: \'#ff0\', label: \'Button\' };\\r\\n\\r\\nexport const Secondary = Template.bind({});\\r\\nSecondary.args = { ...Primary.args, label: \'\ud83d\ude04\ud83d\udc4d\ud83d\ude0d\ud83d\udcaf\' };\\r\\n\\r\\nexport const Tertiary = Template.bind({});\\r\\nTertiary.args = { ...Primary.args, label: \'\ud83d\udcda\ud83d\udcd5\ud83d\udcc8\ud83e\udd13\' };\\r\\n```\\r\\n\\r\\n### 2-2 Remix two stories\\r\\n\\r\\nStory\u662f\u53ef\u4ee5\u76f8\u4e92\u5f15\u7528\u7684\uff0c\u4e3b\u8981\u4e5f\u662f\u4e3a\u4e86\u51cf\u5c11\u91cd\u590d\u4ee3\u7801\uff0c\u4fdd\u6301\u4e00\u81f4\u6027\u3002\\r\\n\\r\\n```jsx\\r\\nimport React from \'react\';\\r\\nimport { Button } from \'./Button\';\\r\\nimport * as TextInputStories from \'./TextInput.stories\';\\r\\n\\r\\nexport default {\\r\\n  title: \'Button\',\\r\\n  component: Button,\\r\\n};\\r\\n\\r\\nexport const TestRemix = () => <>\\r\\n  <TextInputStories.Default />\\r\\n  <Button primary>Button</Button>\\r\\n<>\\r\\n\\r\\n```\\r\\n\\r\\n\\r\\n### 2-3 Controls\\r\\n\\r\\n\u9996\u5148Control\u662f\u5f88\u597d\u7684\u529f\u80fd\uff0c\u5bf9\u4e8eshow UI demo \u662f\u5f88\u65b9\u4fbf\u76f4\u89c2\u7684\u5c55\u793a\uff0c\u5bf9\u4e8eV6\u7248\u672c\uff0cControl \u662f\u5185\u7f6e\u63d2\u4ef6\uff0c\u53ea\u9700\u8981\u901a\u8fc7Template\u548cargs\u914d\u5408\u5c31\u53ef\u4ee5\u81ea\u52a8\u751f\u6210\\r\\n\\r\\n[\u8be6\u7ec6\u5199\u6cd5](https://storybook.js.org/docs/react/essentials/controls)\\r\\n\\r\\n\u5728\u4f4e\u7248\u672c\u4e2d(V6\u4ecd\u7136\u652f\u6301addons\u5199\u6cd5)\uff0c\u662f\u901a\u8fc7\u5b89\u88c5addon-knobs\u63d2\u4ef6\u6765\u5b9e\u73b0\u7684\u3002 \\r\\n\\r\\n<video controls=\\"controls\\" autoPlay=\\"autoplay\\" loop=\\"loop\\" style={{width: \'100%\'}}>\\r\\n    <source src=\\"https://storybook.js.org/9d2e1f29cfb010e3aae6cd76547c4bab/addon-controls-optimized.mp4\\" type=\\"video/mp4\\"/>\\r\\n</video>\\r\\n\\r\\n\u6839\u636e\u6211\u7684\u7ecf\u9a8c\uff0c\u548cusing args \u4e00\u6837\uff0c\u4f7f\u7528\u8fd8\u662f\u4e0d\u4f7f\u7528\u9700\u8981\u6839\u636e\u9879\u76ee\u9700\u6c42\uff0c\u6216\u8005\u5bfb\u627e\u6298\u4e2d\u7684\u65b9\u6cd5\u800c\u4e24\u8005\u517c\u987e\u3002\\r\\n\\r\\n\\r\\n### 2-4 Action\\r\\n\\r\\n\u6211\u76ee\u524d\u8fd8\u6ca1\u6709\u627e\u5230Action\u7684\u5408\u9002\u573a\u666f\u3002\u5b83\u548cControl\u4e00\u6837\u7684\uff0c\u5728V6\u7248\u672c\u4e2d\u662f\u5185\u7f6e\u63d2\u4ef6\uff0c\u9700\u8981argTypes\u6765\u5b9a\u4e49\uff0c\u65b0\u7248\u672cV6\u4e2d\u9700\u8981\u5199\u6210template\u5f62\u5f0f\u624d\u80fd\u89e6\u53d1\u3002\\r\\n\\r\\n<video controls=\\"controls\\" autoPlay=\\"autoplay\\" loop=\\"loop\\" style={{width: \'100%\'}}>\\r\\n    <source src=\\"https://storybook.js.org/b0366940cf7195b6d5b646c6105c217c/addon-actions-optimized.mp4\\" type=\\"video/mp4\\"/>\\r\\n</video>\\r\\n\\r\\n```jsx\\r\\nimport { Button } from \'./Button\';\\r\\n\\r\\nexport default {\\r\\n  title: \'Button\',\\r\\n  component: Button,\\r\\n  argTypes: { onClick: { action: \'clicked\' } },\\r\\n};\\r\\n\\r\\n```\\r\\n\\r\\n```jsx\\r\\n// .storybook/preview.js\\r\\n\\r\\nexport const parameters = {\\r\\n  actions: { argTypesRegex: \'^on.*\' }\\r\\n}\\r\\n\\r\\n```\\r\\n\\r\\n### 2-5 Using parameters\\r\\n\\r\\nParameters are Storybook\u2019s method of defining static metadata for stories. \\r\\nA story\u2019s parameters can be used to provide configuration to various addons at the level of a story or group of stories.\\r\\n\\r\\nParameters\u4e3b\u8981\u662f\u4e3astories\u505a\u4e00\u4e9b\u9875\u9762\u914d\u7f6e, \u4e5f\u53ef\u4ee5\u5728preview\u4e2d\u8fdb\u884cglobal\u7684\u914d\u7f6e\\r\\n\\r\\n```jsx\\r\\n  parameters: {\\r\\n    docs: { page: null },\\r\\n    actions: { argTypesRegex: \'^on.*\' },\\r\\n    centered: { disable: true },\\r\\n    backgrounds: {\\r\\n      values: [\\r\\n        { name: \'red\', value: \'#f00\' },\\r\\n        { name: \'green\', value: \'#0f0\' },\\r\\n        { name: \'blue\', value: \'#00f\' },\\r\\n      ],\\r\\n    },\\r\\n  },\\r\\n```\\r\\n\\r\\n### 2-6 Using decorators\\r\\n\\r\\nDecorators are a mechanism to wrap a component in arbitrary markup when rendering a story. \\r\\nComponents are often created with assumptions about \u2018where\u2019 they render. \\r\\nYour styles might expect a theme or layout wrapper, or your UI might expect specific context or data providers.\\r\\n\\r\\ndecorators\u5c31\u662f\u9875\u9762\u88c5\u9970\uff0c\u53ef\u4ee5\u6709\u673a\u4f1a\u7ed9\u9875\u9762\u505a\u4e00\u4e9bdom\u7ed3\u6784\u6216\u8005\u6837\u5f0f\u7684\u8c03\u6574\\r\\n\\r\\n```jsx\\r\\nimport React from \'react\';\\r\\nimport { Button } from \'./Button\';\\r\\n\\r\\nexport default {\\r\\n  title: \'Button\',\\r\\n  component: Button,\\r\\n  decorators: [\\r\\n    (Story) => (\\r\\n      <div style={{ margin: \'3em\' }}>\\r\\n        <Story />\\r\\n      </div>\\r\\n    ),\\r\\n  ],\\r\\n};\\r\\n```\\r\\n\\r\\n## 3. Write Docs\\r\\n\\r\\nStorybook \u76ee\u524d\u4e3b\u8981\u63d0\u4f9b\u4e86\u4e09\u79cd\u65b9\u5f0f\u7528\u4e8e\u6587\u6863\u7684\u4e66\u5199\\r\\n\\r\\n\\r\\n### 3-1 \u5229\u7528component parameters\\r\\n#### \u4f18\u70b9\uff1a\\r\\n- \u53ef\u4ee5\u81ea\u52a8\u89e3\u6790\u7ec4\u4ef6\u4e2d\u7684props\\r\\n#### \u7f3a\u70b9\uff1a\\r\\n- interface\u7684format\u8981\u4e25\u683c\\r\\n- docs\u4e2d\u4e0d\u80fd\u81ea\u5b9a\u4e49\uff0c\u662f\u81ea\u52a8\u751f\u6210\u7684\\r\\n\\r\\n\\r\\n```jsx\\r\\n// ButtonGroup.stories.js|jsx\\r\\nimport React from \'react\';\\r\\nimport { Button, ButtonGroup } from \'./ButtonGroup\';\\r\\n\\r\\nexport default {\\r\\n  title: \'ButtonGroup\',\\r\\n  // storybook use the component/subcomponents to extract the component\'s description and props\\r\\n  // override the docs.page parameters with null to remove its content\\r\\n  component: ButtonGroup,\\r\\n  subcomponents: { Button },\\r\\n};\\r\\n```\\r\\n\\r\\n### 3-2 mdx\\r\\n\\r\\n:::note\\r\\n- Currently there\'s an issue when using MDX stories with IE11. This issue does not apply to Docs page\\r\\n:::\\r\\n\\r\\nMDX \u662f\u975e\u5e38\u597d\u7684\u4e66\u5199docs\u7684\u65b9\u5f0f\uff0c\u5982\u679c\u4f60\u7684\u9879\u76ee\u4e0d\u9700\u8981\u517c\u5bb9IE11\uff0c\u6211\u5f3a\u70c8\u5efa\u8bae\u4f60\u7528mdx\u7684\u65b9\u5f0f\u6765\u5199case\u7684\u6587\u6863\u3002\\r\\n#### \u4f18\u70b9\uff1a\\r\\n- \u53ef\u4ee5\u5c06md\u548cJSX\u6df7\u5408\u4e66\u5199\uff0c\u975e\u5e38\u7075\u6d3b\\r\\n#### \u7f3a\u70b9\uff1a\\r\\n- \u4e0d\u652f\u6301IE11\\r\\n\\r\\n[\u8be6\u7ec6](https://storybook.js.org/docs/react/writing-docs/mdx)\\r\\n\\r\\nMDX is a standard file format that combines Markdown with JSX. \\r\\nIt means you can use Markdown\u2019s terse syntax (such as # heading) for your documentation, \\r\\nwrite stories that compile to our component story format, and freely embed JSX component blocks at any point in the file. All at once.\\r\\n\\r\\n\\r\\n### 3-3 \u5229\u7528docs parameters\\r\\n\\r\\n\u56e0\u4e3aIE11\u800c\u7528\u4e0d\u4e86mdx\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u7528jsx\u7ec4\u4ef6\u914d\u7f6e\u5230docs.page\u7684\u65b9\u5f0f\u8fdb\u884cdocs\u7684\u4e66\u5199\u3002\u4e2a\u4eba\u8ba4\u4e3a\uff0c\u5982\u679c\u4f60\u7684\u9879\u76ee\u652f\u6301IE11\uff0c\u800c\u4e14\u4f60\u8fd8\u5e0c\u671b\u81ea\u5b9a\u4e49docs\u5185\u5bb9\uff0c\\r\\n\u7528\u8fd9\u79cd\u65b9\u5f0f\u662f\u6700\u597d\u9009\u62e9\\r\\n\\r\\n#### \u4f18\u70b9\uff1a\\r\\n- \u53ef\u4ee5\u5199JSX\uff0c\u81ea\u5b9a\u4e49docs\u9875\u9762\u5e03\u5c40\u6837\u5f0f\\r\\n- \u652f\u6301IE11\\r\\n#### \u7f3a\u70b9\uff1a\\r\\n- \u4e0d\u80fd\u7528md\\r\\n\\r\\n```jsx\\r\\n// ButtonGroup.stories.js|jsx\\r\\nimport React from \'react\';\\r\\nimport { Button, ButtonGroup } from \'./ButtonGroup\';\\r\\nimport { customDocumentComponemt } from \'./customDocumentComponemt\'; //jsx file\\r\\n\\r\\nexport default {\\r\\n  title: \'ButtonGroup\',\\r\\n  component: ButtonGroup,\\r\\n  parameters: {\\r\\n    docs: {\\r\\n      page: customDocumentComponemt\\r\\n    }\\r\\n  }\\r\\n};\\r\\n```"}]}')}}]);