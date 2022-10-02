import { DOM_SELECTOR, PRODUCT_MANAGE_MESSAGE } from './constants';

const makeproductAddForm = () => {
  //
  const $productAddform = document.createElement('form');
  //
  const $productNameInput = makeInput(
    DOM_SELECTOR.productNameInput,
    'text',
    PRODUCT_MANAGE_MESSAGE.productName,
  );
  //
  const $productPriceInput = makeInput(
    DOM_SELECTOR.productPriceInput,
    'number',
    PRODUCT_MANAGE_MESSAGE.productPrice,
  );
  //
  const $productQuantityInput = makeInput(
    DOM_SELECTOR.productQuantityInput,
    'number',
    PRODUCT_MANAGE_MESSAGE.productQuantity,
  );
  //
  const $productAddButton = makeInput(
    DOM_SELECTOR.productAddMenu,
    DOM_SELECTOR.productAddButton,
    'submit',
  );

  $productAddform.appendChild($productNameInput);
  $productAddform.appendChild($productPriceInput);
  $productAddform.appendChild($productQuantityInput);
  $productAddform.appendChild($productAddButton);
  return $productAddform;
};

// 테이블생성
const makeTable = (headerElement) => {
  const $table = document.createElement('table');
  const $tableHeader = document.createElement('thead');
  const $tableRow = document.createElement('tr');
  headerElement.forEach((header) => {
    const $th = document.createElement('th');
    $th.appendChild(document.createTextNode(header));
    $tableRow.appendChild($th);
  });
  $tableHeader.appendChild($tableRow);
  $table.appendChild($tableHeader);

  return $table;
};

const renderProductAddTemplate = () => {
  const $content = document.getElementById(DOM_SELECTOR.content);
  $content.innerHTML = '';

  $content.appendChild(makeTitle(PRODUCT_MANAGE_MESSAGE.productAdd));
  $content.appendChild(makeProductAddForm());

  $content.appendChild(makeTitle(PRODUCT_MANAGE_MESSAGE.productStatus));
  $content.appendChild(
    makeTable([
      PRODUCT_MANAGE_MESSAGE.productName,
      PRODUCT_MANAGE_MESSAGE.productPrice,
      PRODUCT_MANAGE_MESSAGE.productQuantity,
    ]),
  );
};

export default makeproductAddForm;
