let picture = document.querySelector('.order-summary__img');
let headphone_icon = document.querySelector('.fa-headphones');

picture.addEventListener('mousemove', (event) => {
    const x = event.clientX - picture.offsetLeft;
    const y = event.clientY - picture.offsetTop;
    
    headphone_icon.style.left = `${x}px`;
    headphone_icon.style.top = `${y}px`;
});

picture.addEventListener('touchmove', (event) => {
    const x = event.touches[0].clientX - picture.offsetLeft;
    const y = event.touches[0].clientY - picture.offsetTop;
    
    headphone_icon.style.left = `${x}px`;
    headphone_icon.style.top = `${y}px`;
  });