import { DOM_SELECTOR } from './constants';
import renderAppTemplate from './renderAppTemplate';
import renderProductAddTemplate from './renderProductAddTemplate';

renderAppTemplate();

const $productAddMenu = document.getElementById(DOM_SELECTOR.productAddMenu);
$productAddMenu.addEventListener('click', () => {
  renderProductAddTemplate(); // 이 함수 필요
});
