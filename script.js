const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.filter.active').classList.remove('active');
    button.classList.add('active');
    document.querySelectorAll('.product').forEach((product) => {
      product.classList.toggle('hidden', button.dataset.filter !== 'all' && product.dataset.category !== button.dataset.filter);
    });
  });
});

