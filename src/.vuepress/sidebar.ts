import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "快速开始",
      icon: "material-symbols:play-circle",
      prefix: "start/",
      children: "structure",
    },
    {
      text: "食用指南",
      icon: "material-symbols:lightbulb-2",
      prefix: "guide/",
      children: "structure",
    },
  ],
});
