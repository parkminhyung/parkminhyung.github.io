// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-downloads",
          title: "Downloads",
          description: "가상매매(virtual trading) 거래·성과 로그 데이터 다운로드.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/downloads/";
          },
        },{id: "dropdown-krx",
              title: "KRX",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/performance/";
              },
            },{id: "dropdown-jpx",
              title: "JPX",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/performance-jpx/";
              },
            },{id: "dropdown-chn",
              title: "CHN",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/performance-chn/";
              },
            },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-github-repo",
          title: "GitHub Repo",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/github.com/parkminhyung/Multi-Factor-Alpha-Strategy";
          },
        },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/parkminhyung", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
