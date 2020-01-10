// MENU

(function menu() {
  const desktopViewport = window.matchMedia("screen and (max-width: 996px)");
  const menuButton = document.querySelector('[data-button="menu"]');
  const subMenuTrigger = document.querySelectorAll('.menu-item-has-children');
  const pageBody = document.querySelector('body');

  function toggleSub(event) {
    event.currentTarget.classList.contains('sub-visible') ? e.currentTarget.classList.remove('sub-visible') : e.currentTarget.classList.add('sub-visible');
  };

  function toggleMenu() {
    if (pageBody.classList.contains('menu-visible')) {
      pageBody.classList.remove('menu-visible');
      subMenuTrigger.forEach(elem => { elem.classList.remove('sub-visible') });
    } else {
      pageBody.classList.add('menu-visible');
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

  desktopViewport.addEventListener('change', mobileMenuHandler);
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
    const list = block.querySelector('[data-id="list"]');
    const listItems = list.childNodes;
    let currentActive;
    listItems.forEach(elem => elem.addEventListener('click', (event) => {
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
    }));
  }
}
