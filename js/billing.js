document.addEventListener('deviceready', onDeviceReady);

function onDeviceReady() {
  refreshUI();
  store.register({type: store.CONSUMABLE, id: 'my_product'});
  store.when('my_product')
    .updated(refreshUI)
    .approved(finishPurchase);
  store.refresh();
}

function finishPurchase(p) {
  localStorage.goldCoins = (localStorage.goldCoins | 0) + 10;
  p.finish();
  refreshUI();
}

function refreshUI() {
  const product = store.get('my_product');
  const button = `<button onclick="store.order('my_product')">Purchase</button>`;

  document.getElementsByTagName('body')[0].innerHTML = `
  <div>
    <pre>
      Gold: ${localStorage.goldCoins | 0}

      Product.state: ${product.state}
             .title: ${product.title}
             .descr: ${product.description}
             .price: ${product.price}

    </pre>
    ${product.canPurchase ? button : ''}
  </div>`;
}