export const SITE = {
  website: "https://blog.dqixol.online/", // replace this with your deployed domain
  author: "Dong Qichen",
  profile: "https://blog.dqixol.online/",
  desc: "Sharing thoughts and experiences - a LHC scientist's perspective",
  title: "Dong's blog",
  ogImage: "og.png",
  dynamicOgImage: true,
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/Dqixol/qidongs_web/edit/main/",
  },
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Zurich", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
