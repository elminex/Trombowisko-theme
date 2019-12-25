console.log("skrypty dzialaja")
window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  const menuButton = document.getElementById('menu-button');
  const toggleClass = (e) => {
    const wrapper = document.getElementById('header');
    wrapper.classList.toggle('menu-visible');
    console.log('menu-toggled');
  }
  menuButton.addEventListener('click', toggleClass);
});

window.addEventListener('DOMContentLoaded', (event) => {
  const teacherButtons = document.querySelectorAll('.teacher__button');
  const toggleActive = (e) => {
    console.log(e.currentTarget)
    e.currentTarget.parentNode.parentNode.classList.toggle('active');
  }
  teacherButtons.forEach((button) => button.addEventListener('click', toggleActive))
})

window.addEventListener('DOMContentLoaded', (e) => {
  const list = document.getElementById('list');
  list.addEventListener('click', (event) => {
    console.log(event.target);
    const clickTarget = event.target.classList.contains('oferta__tab-text') ? event.target.parentNode : event.target;
    if (clickTarget.classList.contains('active')) {
      return false;
    } else if (clickTarget.classList.contains('oferta__tabs')) {
      return false;
    } else {
      const activeTab = document.getElementsByClassName('oferta__tab active');
      const activeId = activeTab[0].getAttribute('data-to');
      const activeContent = document.getElementById(activeId);
      const newTab = clickTarget;
      const newContent = document.getElementById(newTab.dataset.to);
      activeTab[0].classList.remove('active');
      activeContent.classList.remove('active');
      newTab.classList.add('active');
      newContent.classList.add('active');
    }
  })
});
