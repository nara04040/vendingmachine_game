const makeButton = (text, id, type) => {
  const $button = document.createElement('button');

  $button.appendChild(document.createElement(text));
  $button.setAttribute('id', id);

  if (type) {
    $button.setAttribute('type', type);
  }
  return $button;
};

export default makeButton;
