// MENU

(function menu() {
  const menuButton = document.querySelector('[data-button="menu"]');
  const subMenuTrigger = document.querySelectorAll('.menu-item-has-children');
  const pageBody = document.querySelector('body');
  const desktopViewport = window.matchMedia("screen and (max-width: 996px)");

  function toggleSub(event) {
    event.currentTarget.classList.contains('sub-visible') ? event.currentTarget.classList.remove('sub-visible') : event.currentTarget.classList.add('sub-visible');
  };

  function toggleMenu() {
    if (pageBody.classList.contains('menu-visible')) {
      pageBody.classList.remove('menu-visible');
      subMenuTrigger.forEach(elem => { elem.classList.remove('sub-visible') });
    } else {
      pageBody.classList.add('menu-visible');
      subMenuTrigger.forEach(elem => {
        if (elem.classList.contains('current-menu-ancestor')) {
          elem.classList.add('sub-visible')
        }
      });
    }
  };

  const mobileMenuHandler = (mq) => {
    if (mq.matches) {
      menuButton.addEventListener('click', toggleMenu);
      subMenuTrigger.forEach(elem => { elem.addEventListener('click', toggleSub) });
    } else {
      menuButton.removeEventListener('click', toggleMenu);
      if (pageBody.classList.contains('menu-visible')) {
        pageBody.classList.remove('menu-visible');
      };
      subMenuTrigger.forEach(elem => {
        elem.removeEventListener('click', toggleSub);
        if (elem.classList.contains('sub-visible')) {
          elem.classList.remove('sub-visible');
        };
      });
    }
  }

  desktopViewport.addListener(mobileMenuHandler);
  mobileMenuHandler(desktopViewport);
})();

// BLOCK FUNCTIONS

(function checkForBlocks() {
  const blocks = [...document.querySelectorAll('[data-block]')];
  if (blocks.some(elem => elem.dataset.block === "teacher")) {
    teacherBlockHandler();
  } else if (blocks.some(elem => elem.dataset.block === "tabs")) {
    offerBlockHandler();
  };
})();

function teacherBlockHandler() {
  const teacherButtons = document.querySelectorAll('[data-button="teacher"]');
  const toggleActive = (event) => {
    const content = event.currentTarget.parentNode.parentNode;
    content.classList.contains('active') ? content.classList.remove('active') : content.classList.add('active');
  }
  teacherButtons.forEach((button) => button.addEventListener('click', toggleActive))
}

function offerBlockHandler() {
  const block = document.querySelectorAll('[data-block="tabs"]');
  block.forEach(elem => tabHandler(elem));

  function tabHandler(block) {
    const tabletViewport = window.matchMedia("screen and (max-width: 767px)");
    let currentActive;
    const content = block.querySelectorAll('[data-id="accordion-btn"]');
    const listItems = block.querySelector('[data-id="list"]').childNodes;

    tabletViewport.addListener(selectHandler);
    function selectHandler(mq) {
      if (mq.matches) {
        console.log('matches, run accordion');
        accordionListeners();
      } else {
        console.log('not matches, run tabsb');
        tabListeners();
      }
    }
    selectHandler(tabletViewport);

    function tabClickHandler(event) {
      const clickTarget = event.currentTarget;
      if (clickTarget === currentActive) {
        return false
      } else {
        const activeTab = currentActive === undefined ? listItems[0] : currentActive;
        const activeId = activeTab.getAttribute('data-to');
        const activeContent = block.querySelector(`#${activeId}`);
        const newTab = clickTarget;
        const newContent = block.querySelector(`#${newTab.dataset.to}`);
        activeTab.classList.remove('active');
        activeContent.classList.remove('active');
        currentActive = clickTarget;
        currentActive.classList.add('active');
        newContent.classList.add('active');
      }
    };

    function accordionClickHandler(event) {
      const parent = event.target.parentNode;
      parent.classList.contains('acc-active') ? parent.classList.remove('acc-active') : parent.classList.add('acc-active');
      /*
      if (event.target.parentNode === currentActive) {
        currentActive.classList.contains('acc-active') ? currentActive.classList.remove('acc-active') : currentActive.classList.add('acc-active');
      } else {
        const activeContent = (currentActive === undefined ? content[0] : currentActive);
        const newContent = event.target.parentNode;
        activeContent.classList.remove('acc-active');
        currentActive = newContent;
        currentActive.classList.add('acc-active');
        setTimeout(() => {
          event.target.scrollIntoView();
          window.scrollBy(0, -65);
        }, 301);

      }*/
    }

    function tabListeners() {
      listItems.forEach(elem => {
        elem.removeEventListener('click', tabClickHandler);
        elem.addEventListener('click', tabClickHandler);
      });
    }

    function accordionListeners() {
      content.forEach(elem => {
        elem.removeEventListener('click', accordionClickHandler);
        elem.addEventListener('click', accordionClickHandler)
      });
    }
  }
}
