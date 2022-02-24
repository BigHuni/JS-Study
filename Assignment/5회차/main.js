const modal = document.querySelector('.modal');
const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close');

btnOpen.addEventListener('click', () => {
    modal.style.display = 'block';
});

btnClose.addEventListener('click', () => {
    modal.style.display = 'none';
});
