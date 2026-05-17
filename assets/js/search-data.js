// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
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
            },{id: "nav-downloads",
          title: "Downloads",
          description: "가상매매(virtual trading) 거래·성과 로그 데이터 다운로드.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/downloads/";
          },
        },{id: "nav-about",
          title: "About",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about/";
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
      },];
