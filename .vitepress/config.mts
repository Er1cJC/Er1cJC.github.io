import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "EricJC的空间", // 替换成你想要的名字
  description: "Tech, AI Audio & System Engineering",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'AI与音频', link: '/audio-ai/' },
      { text: '软件工程', link: '/engineering/' },
      { text: '关于我', link: '/about' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: {
      '/engineering/': [
        {
          text: '系统工程实践',
          items: [
            { text: '高并发网络锁控系统架构', link: '/engineering/smart-lock' },
            { text: '多端环境与底层系统调优', link: '/engineering/system-tuning' }
          ]
        }
      ],
      '/audio-ai/': [
        {
          text: '算法与体验',
          items: [
            { text: 'RVC模型过拟合调优实战', link: '/audio-ai/rvc-tuning' },
            { text: '专业音频流处理与分离', link: '/audio-ai/audio-processing' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Er1cJC' }
    ]
  }
})