import { use } from "@node_modules/@types/react";

export default {
  nanoedit: {
    type: 'page',
    title: '🔥Nano Banana 2',
    href: 'https://trybanana2.com'
  },
  devilhunter: {
    type: "page",
    title: "🔥Devil Hunter Roblox",
    href: "https://devilhunter.org/",
  },
  usefultools: {
    type: "menu",
    title: "Useful Tools",
    items: {
      nanoedit: {
        title: "🔥Nano Banana 2",
        href: "https://trybanana2.com/",
      },
      compareheights: {
        title: "Compare Heights",
        href: "https://compareheights.org/",
      },
      devilhunter: {
        title: "🔥Devil Hunter Roblox",
        href: "https://devilhunter.org/",
      },
      theforgecalculator: {
        title: "🔥The Forge Calculator",
        href: "https://theforgecalculator.info/",
      },
      "baseball-bros-io": {
        title: "Baseball Bros Game",
        href: "https://baseballbrosio.fun",
      },
      "curve-rush": {
        title: "Curve Rush",
        href: "https://curve-rush.cc",
      },
      "crazycattle3d": {
        title: "Crazy Cattle 3D",
        href: "https://crazycattle3d.fun",
      },
    }
  },
  index: {
    type: 'page',
    title: 'Home',
    //display: 'hidden',
    theme: {
      layout: 'raw'
    }
  },
  // docs: {
  //   type: 'page',
  //   title: 'Documentation'
  // },
  tags: {
    display: "children",
    theme: {
      layout: "raw",
    },
  },
  blog: {
    type: "page",
    title: "Blog",
    theme: {
      layout: "raw",
      typesetting: "article",
      timestamp: false,
    }
  },
  concat: {
    type: 'page',
    title: 'Concat',
    theme: {
      layout: 'raw'
    }
  },
  404: {
    type: 'page',
    theme: {
      timestamp: false,
      typesetting: 'article'
    }
  }
}
