export function createWandLi(wand) {
    const li = document.createElement('li');

    li.classList.add('wizardLi');
    li.style.background = wand.color;

    const pWizard = document.createElement('p');
    pWizard.classList.add('wizard');
    pWizard.textContent = wand.wizard;

    const image = document.createElement('img');
    image.src = wands.image;

    const pLength = document.createElement('p');
    pLength.classList.add('length');
    pLength.textContent = wand.size;

    const pWood = document.createElement('p');
    pWood.classList.add('wood');
    pWood.textContent = wand.wood;

    const pCore = document.createElement('p');
    pCore.classList.add('core');
    pCore.textContent = wand.core;

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = wand.price;

    const button = document.createElement('button');
    button.textContent = 'Add To Cart';

    li.append(pWizard, image, pLength, pWood, pCore, pPrice, button);

    return li;
  
}