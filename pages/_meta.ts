export default {
  nanoedit: {
    type: 'page',
    title: '🔥Nano Banana Pro',
    href: 'https://nanoedit.art'
  },
  funsites: {
    type: "menu",
    title: "Fun Sites",
    items: {
      nanoedit: {
        title: "🔥Nano Banana Pro",
        href: "https://nanoedit.art/",
      },
      compareheights: {
        title: "Compare Heights",
        href: "https://compareheights.org/",
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
