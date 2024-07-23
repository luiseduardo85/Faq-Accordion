const paragraphs = document.querySelectorAll('.questions p');

const path = './assets/images/';

function toggleContent(element) {
  const hideText = element.parentElement.nextElementSibling;
  
  hideText.classList.toggle('hide-text');
  
  const img = element.parentElement.querySelector('img');

  if (img) {
    if (img.src.includes('icon-plus.svg')) {
      img.src = `${path}icon-minus.svg`;
    } else {
      img.src = `${path}icon-plus.svg`;
    }
  }
};

paragraphs.forEach(paragraph => {
  paragraph.addEventListener('click', () => toggleContent(paragraph));
});
