export let siteMetadata = {
  title: 'Salih Kayiplar - Cloud and DevOps Journey',
  author: 'Salih Kayiplar',
  fullName: 'Salih Kayiplar',
  headerTitle: 'Salih Kayiplar - Cloud and DevOps Journey',
  footerTitle: 'Salih Kayiplar - Cloud and DevOps Journey',
  description:
    'Salih Kayiplar - Cloud and DevOps Journey - Dedidcated to Cloud and DevOps Engineer trying to share my knowledge and experience with the world.',
  language: 'en-us',
  siteUrl: 'https://salih-kayiplar.dev',
  siteRepo: 'https://github.com/kayiplar/dev-blog',
  siteLogo: '/static/images/logo.jpg',
  image: '/static/images/logo.jpg',
  socialBanner: '/static/images/logo.jpg',
  email: 'salih.kayiplar@gmail.com',
  github: 'https://github.com/kayiplar',
  twitter: 'https://twitter.com/',
  facebook: 'https://facebook.com/',
  youtube: 'https://www.youtube.com/',
  linkedin: 'https://www.linkedin.com/',
  locale: 'en-US',
  //analyticsURL: 'https://analytics.leohuynh.dev/share/jkwRskv0/leohuynh.dev',
  analyticsURL: '',
  analytics: {
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '2df62ae5-7f13-455b-8e54-c15b96ff2b8b', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  socialAccounts: {
    github: 'kayiplar',
    twitter: 'kayiplar',
    linkedin: 'kayiplar',
  },
}

/**
 * Select a provider and use the environment variables associated to it
 * https://vercel.com/docs/environment-variables
 * --
 *
 * Visit each provider's documentation link and follow the instructions, then add the environment variable to your project.
 */
export let commentConfig = {
  provider: 'giscus', // 'giscus' | 'utterances' | 'disqus',
  // https://giscus.app/
  giscusConfig: {
    repo: '', // process.env.GISCUS_REPO
    repositoryId: '', // process.env.GISCUS_REPOSITORY_ID
    category: '', // process.env.GISCUS_CATEGORY
    categoryId: '', // process.env.GISCUS_CATEGORY_ID
    mapping: 'title',
    reactions: '1',
    metadata: '0',
    lightTheme: 'light',
    darkTheme: 'transparent_dark',
    themeURL: '',
  },
  // https://utteranc.es/
  utterancesConfig: {
    repo: '', // process.env.UTTERANCES_REPO
    issueTerm: '',
    label: '',
    lightTheme: '',
    darkTheme: '',
  },
  // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
  disqus: {
    shortname: '', // process.env.DISQUS_SHORTNAME
  },
}
