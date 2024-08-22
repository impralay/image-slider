let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', () => {
    let item = document.querySelector('.item');
    document.querySelector('.slider').appendChild(item);
})

prev.addEventListener('click', () => {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slider').prepend(items[items.length - 1]);
})
