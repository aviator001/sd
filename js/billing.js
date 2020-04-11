document.addEventListener('deviceready', initStore);
document.addEventListener('deviceready', refreshLockedUI);

function initStore() {

  if (!window.store) {
    console.log('Store not available');
    return;
  }

  store.verbosity = store.INFO;
  store.register({
    id:    'nonconsumable1',
    type:   store.CONSUMABLE
  });

  store.error(function(error) {
    console.log('ERROR ' + error.code + ': ' + error.message);
  });

  store.when('nonconsumable1').updated(refreshProductUI);
  store.when('nonconsumable1').approved(function(p) {
    p.verify();
  });
  store.when('nonconsumable1').verified(finishPurchase);

  store.refresh();
}

function refreshLockedUI() {
  document.getElementById('locked').textContent =
    'Feature ' + window.localStorage.unlocked === 'YES' ? 'UNLOCKED! \o/' : 'locked :(';
}

function refreshProductUI(product) {
  const info = product.loaded
  ? `<h1>${product.title}</h1>` +
    `<p>${product.description}</p>` +
    `<p>${product.price}</p>`
  : '<p>Retrieving info...</p>';
  const button = product.canPurchase
  ? '<button onclick="purchaseNonConsumable1()">Buy Now!</button>'
  : '';
  const el = document.getElementById('nonconsumable1-purchase');
  el.innerHTML = info + button;
}

function purchaseNonConsumable1() {
  store.order('nonconsumable1');
}

function finishPurchase(p) {
  window.localStorage.unlocked = 'YES';
  p.finish();
  refreshLockedUI();
}