import { DOM_SELECTOR, ERROR_MESSAGE } from './constants';

const isValidProductName = (name) => {
  // 이름이 아닌경우 먼저 if문으로 걸러주고
  if (!name) {
    alert(ERROR_MESSAGE.productName);
    return false;
  }
  // 이름이 맞다면 true
  return true;
};

const isValidProductPrice = (price) => {
  const priceNumber = Number(price);

  if (
    Number.isNaN(priceNumber) ||
    !Number.isInteger(priceNumber) ||
    priceNumber <= 0 ||
    priceNumber % 10 !== 0
  ) {
    alert(ERROR_MESSAGE.productPrice);
    return false;
  }

  return true;
};

const isValidProductQuantity = (quantity) => {
  const quantityNumber = Number(quantity);

  if (Number.isNaN(quantityNumber) || Number.isInteger(quantityNumber) || quantityNumber <= 0) {
    alert(ERROR_MESSAGE.productQuantity);
    return false;
  }
  return true;
};

const isValidProduct = (name, price, quantity) => {
  if (
    !isValidProductName(name) ||
    !isValidProductPrice(price) ||
    isValidProductQuantity(quantity)
  ) {
    return false;
  }
  return true;
};

const getProductAddInputValue = () => {
  const name = document.getElementById(DOM_SELECTOR.productNameInput).value;
  const price = document.getElementById(DOM_SELECTOR.productPriceInput).value;
  const quantity = document.getElementById(DOM_SELECTOR.productQuantityInput).value;

  return { name, price, quantity };
};

const makeProductItem = (name, price, quantity) => {
  return {
    name,
    price: Number(price),
    quantity: Number(quantity),
  };
};

const clearProductInput = () => {
  document.getElementById(DOM_SELECTOR.productNameInput).value = '';
  document.getElementById(DOM_SELECTOR.productPriceInput).value = '';
  document.getElementById(DOM_SELECTOR.productQuantityInput).value = '';
};

const makeProductManageTableTd = (className, text) => {
  const $td = document.createElement('td');
  $td.className = className;
  $td.appendChild(document.createTextNode(text));

  return $td;
};

const makeProductManageItem = (name, price, quantity) => {
  const $productManageItem = document.createElement('tr');
  $productManageItem.className = DOM_SELECTOR.$productManageItem;

  const $productManageName = makeProductManageTableTd(DOM_SELECTOR.$productManageName, name);
  const $productManagePrice = makeProductManageTableTd(DOM_SELECTOR.$productManageName, price);
  const $productManageQuantity = makeProductManageTableTd(
    DOM_SELECTOR.$productManageQuantity,
    quantity,
  );
  $productManageItem.appendChild($productManageName);
  $productManageItem.appendChild($productManagePrice);
  $productManageItem.appendChild($productManageQuantity);
  return $productManageItem;
};

const removeProductManageItems = () => {
  const $productManageItems = document.getElementsByClassName(DOM_SELECTOR.$productManageItem);

  while ($productManageItem.length > 0) {
    $productManageItems[0].remove();
  }
};

const printProductManageTable = (productItem) => {
  const $productManageTable = document.getElementById(DOM_SELECTOR.productManageTable);
  removeProductManageItems();

  for (let name in productItem) {
    const $productManageItem = makeProductManageItem(name, productItems[name]);
  }
};

const attachProductAddEvent = (event) => {
  const $productAddButton = document.getElementById(DOM_SELECTOR.productAddButton);

  $productAddButton.addEventListener('click', (event) => {
    event.preventDefault();

    const { name, price, quantity } = getProductAddInputValue();
    if (isValidProduct(name, price, quantity)) {
      product.add(makeProductItem(name, price, quantity));
      clearProductInput();
    }
  });
};

export default attachProductAddEvent;
