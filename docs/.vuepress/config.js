module.exports = {
  title: "开发者中心",
  description: "生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。",
  base: '/', // 项目根路径
  dest: './dist/', // 打包后的文件夹路径，为了方便，我把 dist 文件夹放到了根目录上
  // head 标签中的额外内容
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }] // 这个是标签页 logo
  ],
  // 语言配置
  // locales: {
  //   // 键名是该语言所属的子路径
  //   // 作为特例，默认语言可以使用 '/' 作为其路径。
  //   '/': {
  //     lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
  //   }
  // },
  themeConfig: {
    // 顶部导航
    nav: [
      { text: '官网', link: 'http://3ttech.cn' },
      { text: '控制台', link: 'http://dashboard2.3ttech.cn'},
      { text: '工单', link: '/workorder/' },
      { text: 'FAQ', link: '/faq/' },
    ],
    sidebar: {
      '/audio-rtc/': [{
        title: '产品简介',
        collapsable: true,
        children: [
          ['introduction/advantage', '产品优势'],
          ['introduction/feature', '功能特性'],
          ['introduction/scene', '应用场景'],
          ['introduction/annotation', '名词解释'],
          ['introduction/limit', '使用限制'],
        ]
      }, {
        title: '快速入门',
        collapsable: true,
        children: [
          ['start/overview', '入门概述'],
          {
            title: '快速集成',
            collapsable: true,
            children: [
              ['start/integration/ios', 'iOS'],
              ['start/integration/android', 'Android'],
              {
                title: 'Windows',
                collapsable: true,
                children: [
                  ['start/integration/windows/overview', '概览'],
                  ['start/integration/windows/trtccloud', 'TRTCCloud'],
                ]
              },
              ['start/integration/web', 'Web'],
              ['start/integration/mac', 'Mac'],
              ['start/integration/miniprograme', '小程序'],
            ]
          },
          ['start/limit', '鉴权认证'],
        ]
      }],
      '/video-rtc/': [{
        title: '产品简介',
        collapsable: true,
        children: [
          ['advantage', '产品优势'],
          ['feature', '功能特性'],
          ['scene', '应用场景'],
          ['annotation', '名词解释'],
          ['limit', '使用限制'],
        ]
      }],
    },
    sidebarDepth: 2, // 默认 1 提取到 h2，0 为禁用，2 为 h2，h3
    displayAllHeaders: false, // 默认值：false 侧边栏只会显示由当前活动页面的标题组成的链接
    activeHeaderLinks: true, // 默认值：true 滚动时通过 hash 高亮侧边栏标题

    // Git 仓库和编辑链接
    repo: 'https://github.com/icslearn/vuepress-developer-center.git', // 你的仓库
    repoLabel: 'GitHub', // 导航栏上的文本

    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '编辑此页面'

  }
}