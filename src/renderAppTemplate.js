import { DOM_SELECTOR, BUTTON_MESSAGE, TITLE_MESSAGE } from './constants';

const makeTitle = () => {
  const $title = document.createElement('h1');
  $title.appendChild(document.createTextNode(TITLE_MESSAGE));

  return $title;
};

const makeMenuTab = () => {
  const $menuTab = document.createElement('div');

  // 메뉴추가하는 것을 생성
  const $productAddMenu = makeMenuTab(BUTTON_MESSAGE.$productAddMenu, DOM_SELECTOR.$productAddMenu);

  const $vendingMachineManageMenu = makeButton(
    BUTTON_MESSAGE.vendingMachineManageMenu,
    DOM_SELECTOR.vendingMachineManageMenu,
  );
  const $productPurchaseMenu = makeButton(
    BUTTON_MESSAGE.productPurchaseMenu,
    DOM_SELECTOR.productPurchaseMenu,
  );

  $menuTab.appendChild($productAddMenu);
  $menuTab.appendChild($vendingMachineManageMenu);
  $menuTab.appendChild($productPurchaseMenu);

  return $menuTab;
};

const makeContent = () => {
  const $content = document.createElement('div');
  $content.setAttribute('id', DOM_SELECTOR.$content);

  return $content;
};

const renderAppTemplate = () => {
  const $app = document.getElementById('app');
  $app.appendChild(makeTitle());
  $app.appendChild(makeMenuTab());
  $app.appendChild(makeContent());
};

export default renderAppTemplate;
