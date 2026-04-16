import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "LatentEcho",
  description: "EricJC的个人技术博客 - AI音频算法与系统工程实践",
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'AI 音频研究', link: '/audio-ai/', activeMatch: '/audio-ai/' },
      { text: '系统工程', link: '/engineering/', activeMatch: '/engineering/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/audio-ai/': [
        {
          text: 'AI 与音频研究',
          items: [
            { text: '概览', link: '/audio-ai/' },
            { text: 'RVC 模型过拟合调优实战', link: '/audio-ai/rvc-tuning' },
            { text: '专业音频流处理与分离', link: '/audio-ai/audio-processing' }
          ]
        }
      ],
      '/engineering/': [
        {
          text: '系统工程实践',
          items: [
            { text: '概览', link: '/engineering/' },
            { text: '高并发网络锁控系统架构', link: '/engineering/smart-lock' },
            { text: '多端环境与底层系统调优', link: '/engineering/system-tuning' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Er1cJC/Er1cJC.github.io' }
    ],

    footer: {
      message: 'Released under the ISC License.',
      copyright: 'Copyright © 2024 EricJC'
    }
  }
})
