import { DOM_SELECTOR } from './constants';
import renderAppTemplate from './renderAppTemplate';
import renderProductAddTemplate from './renderProductAddTemplate';
import attachProductAddEvent from './attachProductAddEvent';
import Product from './product';

renderAppTemplate();

const product = new Product();

const $productAddMenu = document.getElementById(DOM_SELECTOR.productAddMenu);
$productAddMenu.addEventListener('click', () => {
  renderProductAddTemplate(); // 이 함수 필요
  attachProductAddEvent(product);
});
