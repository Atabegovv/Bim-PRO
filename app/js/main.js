'use strict';

let acc = document.getElementsByClassName("accordion");
  let i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  };


  const all_tabs = document.querySelectorAll('.tab');
  const all_contents = document.querySelectorAll('.tab_content');

  all_tabs.forEach((tab, index) => {
    tab.addEventListener('click', ()=> {
      all_tabs.forEach(tab => {tab.classList.remove('active')});
      tab.classList.add('active');

      all_contents.forEach(tab_content => {tab_content.classList.remove('active')});
      all_contents[index].classList.add('active');
    });
  });


