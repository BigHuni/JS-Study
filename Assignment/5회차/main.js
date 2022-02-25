const modal = document.querySelector('.modal');
const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close');

btnOpen.addEventListener('click', () => {
    modal.style.display = 'block';
});

btnClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (i) => {
    const eventTarget = i.target;
    if(eventTarget.classList.contains('modal')) {
        modal.style.display = 'none'
    }
});
