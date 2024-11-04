import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.mushy.mom/", // replace this with your deployed domain
  author: "Dong Qichen",
  profile: "https://blog.mushy.mom/",
  desc: "Sharing thoughts and experiences - a LHC scientist's perspective",
  title: "Dong's personal blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "GitLab",
    href: "https://gitlab.cern.ch/qidong",
    linkTitle: ` ${SITE.author} on CERN GitLab`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/dqixol",
    linkTitle: `${SITE.author} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/qichendong/",
    linkTitle: `${SITE.author} on Linkedin`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:qidong@cern.ch",
    linkTitle: `Send an email to ${SITE.author}`,
    active: false,
  },
];
