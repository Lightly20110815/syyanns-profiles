/**
 * ============================================
 * 🏠 磁贴式个人主页 — 集中配置文件
 * ============================================
 * 所有个人信息、内容、颜色、布局都在这里修改
 * 修改此文件即可自定义整个主页
 */

const siteConfig = {

  // ========== 基础信息 ==========
  profile: {
    name: '夕妍',                          // 你的昵称
    id: '@yxrchina',                        // 你的网络 ID
    signature: '// 重构时间线，再次重逢\n// 还在找一个暖暖的、不会消失的地方……好想被抱抱',  // 签名
    avatar: '/avatar.png', // 头像URL，可替换为本地图片
    isOnline: true,                        // 在线状态 true=在线 false=离线
  },

  // ========== 状态磁贴 B ==========
  status: {
    number: '14',                          // 大号数字（日期/月份等）
    label: 'INFP',                         // MBTI / 星座 / 状态词
  },

  // ========== 情绪气象 C ==========
  mood: {
    emoji: '🌧️',
    weather: '阵雨',
    text: '想被找到，但不想说话……呜，好想哭哭呢。',
    // 可选情绪列表，鼠标悬浮时随机切换
    moods: [
      { emoji: '☀️', weather: '晴', text: '今天可以被靠近呀～' },
      { emoji: '🌤️', weather: '多云', text: '在场，但有点软软的远。' },
      { emoji: '🌧️', weather: '阵雨', text: '想被找到，但不想说话……呜，好想哭哭呢。' },
      { emoji: '🌫️', weather: '雾', text: '信号不太好，别走丢我呀～' },
      { emoji: '🌙', weather: '夜晚', text: '安静模式，留言就好哦。' },
      { emoji: '⛈️', weather: '暴风雨', text: '系统过载中……抱抱我好不好。' },
      { emoji: '🌈', weather: '雨后', text: '刚从什么地方回来呀～' },
    ],
  },

  // ========== 关于我 D ==========
  about: {
    title: '关于我',
    titleEn: 'About',
    items: [
      '坐标不固定，在合肥和软软的情绪之间轻轻漂着',
      '情绪好跳跃，时而突然过载，时而空空的什么都装不下',
      '喜欢混乱和平静撞在一起的瞬间，可惜经常只剩下一点点软软的混乱',
      '一直在用代码和一点点想象力，小心翼翼把自己拼好',
      '对"被在意的确定性"有很深很深的需要……真的好需要被温柔地喜欢呀',
      '不喜欢被归类，但超级想被温柔地看见、被轻轻 rua 一下',
      'MtFtX | HRT进行中 | oler转oder',
    ],
    quote: '不是简单的脆弱，也不是简单的敏感——是那种一直小心翼翼找一个不会丢的地方，却总觉得自己随时会先软软消失的小猫咪呀……',
  },

  // ========== 标签墙 E ==========
  tags: [
    { text: 'INFP', color: 'cyan' },
    { text: '软软易碎', color: 'pink' },
    { text: '温柔emo', color: 'cyan' },
    { text: '爱碎碎念', color: 'blue' },
    { text: '半永久在线', color: 'purple' },
    { text: '超需要抱抱', color: 'pink' },
    { text: '渴望被在意', color: 'blue' },
    { text: '易碎？', color: 'purple' },
  ],

  // ========== 喜欢的东西 F ==========
  favorites: {
    title: '喜欢的东西',
    sections: [
      {
        emoji: '🎵',
        label: '音乐',
        description: '播放列表就是我此刻最软的心情呀',
        detail: '后摇 · ambient · lo-fi · 那些能让我轻轻掉眼泪的歌',
      },
      {
        emoji: '🎮',
        label: '游戏',
        description: '在虚拟世界里悄悄建一个只属于我的、暖暖的小安全角落，好想躲进去睡觉',
        detail: 'Minecraft',
      },
      {
        emoji: '📺',
        label: '动画 & 二次元',
        description: '治愈系和致郁系都喜欢，看番口味也和我情绪一样跳跃',
        detail: '',
      },
    ],
  },

  // ========== 坐标 G ==========
  location: {
    emoji: '📍',
    label: '坐标',
    cities: '合肥 · 情绪漂流中',
    quote: 'IP地址会变，但信号一直在线……希望有人能轻轻收到我呢。',
  },

  // ========== 语言 H ==========
  languages: [
    { flag: '🇨🇳', name: '中文', check: true },
    { flag: '🇬🇧', name: 'EN', check: true },
    { flag: '🇯🇵', name: 'JP', check: false },
  ],

  // ========== 项目/作品 I ==========
  projects: {
    title: '造过的东西',
    titleEn: 'Projects',
    items: [
      {
        emoji: '🎨',
        name: 'VItePress Curve for Sy',
        description: 'VitePress 主题',
        link: 'https://github.com/Lightly20110815/vitepress-theme-curve',
        linkText: 'GitHub',
      },
      {
        emoji: '🐦',
        name: 'WebTweet',
        description: 'Web 推文项目',
        link: 'https://github.com/Lightly20110815/vitetwitter',
        linkText: 'GitHub',
      },
      {
        emoji: '🌐',
        name: '个人站点',
        description: '给自己建的一个不会轻易丢的暖暖小窝（还在慢慢构建中，好希望它能一直陪着我呀）',
        link: 'https://404yann.com',
        linkText: '404yann.com',
      },
      {
        emoji: '💻',
        name: '代码项目',
        description: '用Vite和Cpp拼世界的另一种温柔方式',
        link: 'https://github.com/Lightly20110815',
        linkText: 'GitHub',
      },
      {
        emoji: '💬',
        name: '碎碎念日常',
        description: '日常碎碎念记录',
        link: 'https://twitter.com/syyann2026',
        linkText: '@syyann2026',
      },
    ],
  },

  // ========== 联系方式 J ==========
  contact: {
    title: '找到我',
    items: [
      { emoji: '✉️', label: '邮箱', value: 'swanyang7@gmail.com', link: 'mailto:swanyang7@gmail.com' },
      { emoji: '📱', label: 'Telegram', value: '+1 703 660 5449', link: 'https://t.me/+17036605449' },
      { emoji: '🐦', label: 'Twitter/X', value: '@yxrchina', link: 'https://twitter.com/yxrchina' },
      { emoji: '💬', label: '碎碎念', value: '@syyann2026', link: 'https://twitter.com/syyann2026' },
    ],
    quote: '在信号快要消失的地方，悄悄建一座小小的、软软的房子，然后把灯一直开着……希望有一天，有人会温柔地推开门，轻轻 rua 一下我。',
  },

  // ========== 此刻在听 (填充磁贴) ==========
  nowPlaying: {
    emoji: '🎧',
    label: '此刻在听',
    text: '某首让人想哭的后摇……',
  },

  // ========== 小小心愿 (填充磁贴) ==========
  wish: {
    emoji: '🌟',
    label: '小小心愿',
    text: '想被轻轻rua一下然后说"你很好"',
  },

  // ========== 技术栈 (填充磁贴) ==========
  techStack: {
    emoji: '⚡',
    label: 'Tech Stack',
    items: ['React', 'Vite', 'C++', 'Node.js'],
  },

  // ========== 设备/平台 K ==========
  devices: ['🍎', '🪟', '🐧'],

  // ========== 底部标语 L ==========
  slogan: '在信号快要消失的地方，悄悄建一座小小的、软软的房子，然后把灯一直开着……希望有一天，有人会温柔地推开门，轻轻 rua 一下我。',

  // ========== 脚注 M ==========
  footer: '© 2026  ·  这里是我不会丢的地方  ·  Sy Yann',

  // ========== 主题配置 ==========
  theme: {
    // 主色调
    bgPrimary: '#0a0e1a',        // 深蓝黑底色
    bgSecondary: '#0f1428',      // 稍浅的背景
    // 辅色
    fogBlue: '#7eb8d4',          // 雾蓝
    frostWhite: '#e8edf2',       // 霜白
    softPink: '#d4a0b9',         // 柔粉
    // 强调色
    electricCyan: '#00f0ff',     // 电光青
    // 磁贴
    tileBg: 'rgba(255, 255, 255, 0.08)',      // 磁贴背景
    tileBorder: 'rgba(255, 255, 255, 0.12)',   // 磁贴边框
    tileBlur: '20px',                          // 毛玻璃模糊度
    tileRadius: '16px',                        // 磁贴圆角
    // 网格
    gridGap: '16px',             // 磁贴间距
    gridColumns: 6,              // 列数
    maxWidth: '1200px',          // 最大宽度
  },

  // ========== 动画配置 ==========
  animation: {
    enableParticles: true,       // 是否启用粒子背景
    particleCount: 50,           // 粒子数量
    enableBreathing: true,       // 是否启用呼吸灯
    breathingDuration: 2,        // 呼吸灯周期(秒)
    enableHoverFloat: true,      // 是否启用悬浮效果
    hoverFloatDistance: 4,       // 悬浮距离(px)
  },
}

export default siteConfig
