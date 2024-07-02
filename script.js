' use strict';
import { imgAndText } from './script-data-array.js';

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log(`Copied: ${text}`);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.main-container');

  imgAndText.forEach((item, imgIndex) => {
    const pictureContainer = document.createElement('div');
    pictureContainer.classList.add('picture-container');

    const discContainer = document.createElement('div');
    discContainer.classList.add('disc-container');

    const pictureDiv = document.createElement('div');
    pictureDiv.classList.add('picture');
    const img = document.createElement('img');
    img.src = `images/${item.img}`;
    img.alt = 'image';
    pictureDiv.appendChild(img);

    discContainer.appendChild(pictureDiv);

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    item.text.forEach((text, index) => {
      const pContainer = document.createElement('div');
      pContainer.classList.add('p-container');
      const paragraghId = `copy-text-${imgIndex}-${index + 1}`
      
      const paragragh = document.createElement('p');
      paragragh.id = paragraghId;
      paragragh.textContent = text;
      pContainer.appendChild(paragragh);

      const copyBtn = document.createElement('div');
      copyBtn.innerText = 'Copy';
      copyBtn.classList.add('copy-btn');
      copyBtn.setAttribute('data-text', paragraghId);
      copyBtn.addEventListener('click', () => copyToClipboard(text));

      pContainer.appendChild(copyBtn);
      textContainer.appendChild(pContainer);
    });

    discContainer.appendChild(textContainer);
    pictureContainer.appendChild(discContainer);
    container.appendChild(pictureContainer);
  });
});
