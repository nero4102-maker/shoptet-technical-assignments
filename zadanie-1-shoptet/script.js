document.querySelectorAll('.product-card').forEach(card => {

  const created = new Date(card.dataset.productCreated);
  const price = parseFloat(card.dataset.productPrice);

  const now = new Date();
  const diff = (now - created) / (1000 * 60 * 60 * 24);

  if (diff <= 30) {
    card.querySelector('.product-badge-new').style.display = 'block';
  }

  if (price < 50) {
    card.querySelector('.product-shipping-note').style.display = 'block';
  }

});
