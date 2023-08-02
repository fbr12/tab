let tabList = document.querySelectorAll(".tab-button");
let tabContentList = document.querySelectorAll(".tab-content");
tabList.forEach(
  (tab) => {
    tab.addEventListener("click", (event) => {
      tabList.forEach((tabElement) => {
        tabElement.classList.remove("active");
      });
      tabContentList.forEach((contentElement) => {
        contentElement.classList.remove("active");
        if (contentElement.id === `content-${event.target.id}`) {
          contentElement.classList.add("active");
        }
      });
      event.target.classList.add("active");
    });
  }
);