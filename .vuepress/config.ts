import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "Awesome CasaOS",
  description: "Third-Party App Stores",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    colorMode: 'dark',
    primaryColor: '#43A7FF',
    logo: "/logo.png",
    author: "CasaOS",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/IceWhaleTech/Awesome-CasaOS",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/content/3rd-party-app-stores/": [
        {
          text: "Third-Party App Stores",
          children: ["list"],
        },
      ],
    },
    navbar: [
      { text: 'CasaOS', link: 'https://casaos.io/'},
      { text: 'Blog', link: 'https://blog.casaos.io/'},
    ],
    
    // commentConfig: {
    //   type: 'valie',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  debug: true,
});
