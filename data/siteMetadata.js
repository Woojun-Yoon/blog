/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Junlog',
  author: 'Yoon Woo Jun',
  headerTitle: 'Everything like scratch',
  description: '안녕하세요! 개발자 윤우준입니다.',
  language: 'ko-KR',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://junlog.com',
  siteRepo: 'https://github.com/Woojun-Yoon/blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'dbsdnwns11@naver.com',
  github: 'https://github.com/Woojun-Yoon',
  instagram: 'https://www.instagram.com/woojun123',
  locale: 'ko-KR',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: `${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`,
    },
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      inputPosition: 'top',
      theme: 'noborder_light',
      darkTheme: 'noborder_dark',
      // If the theme option above is set to 'custom`
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      lang: 'ko',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
