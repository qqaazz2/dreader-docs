import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "快速开始",
    icon: "material-symbols:play-circle",
    prefix: "/start/",
    children: [
      {
        text: "客户端安装",
        icon: "material-symbols:lab-profile",
        link: "client"
      },
      {
        text: "服务端部署",
        icon: "material-symbols:dns",
        link: "server"
      },
    ]
  },
  {
    text: "食用指南",
    icon: "material-symbols:lightbulb-2",
    prefix: "/guide",
    children: [
      {
        text: "简单介绍",
        icon: "material-symbols:description",
        link: "introduce"
      },
      {
        text: "文件扫描",
        icon: "material-symbols:document-scanner",
        link: "scanning"
      },
      {
        text: "功能介绍",
        icon: "material-symbols:extension",
        link: "system"
      },
      {
        text: "系列列表页",
        icon: "material-symbols:bookmark-stacks",
        link: "series"
      },
      {
        text: "阅读页面",
        icon: "material-symbols:book",
        link: "reader"
      },
      {
        text: "作者列表页",
        icon: "material-symbols:person",
        link: "author"
      },
    ]
  },
]);
