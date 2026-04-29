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
            { text: '人脸识别机柜锁项目', link: '/engineering/smart-lock' },
            { text: '多端环境与底层系统调优', link: '/engineering/system-tuning' }
          ]
        }
      ],
      '/audio-ai/': [
        {
          text: '算法与体验',
          items: [
            { text: 'UVR 音声分离', link: '/audio-ai/uvr' },
            { text: 'RVC 模型调优', link: '/audio-ai/rvc-tuning' },
            { text: '音频流', link: '/audio-ai/audio-processing' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Er1cJC' }
    ]
  }
})