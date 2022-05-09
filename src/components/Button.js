export default function createButton(data) {
  const buttonColor = data.color || 'default';
  const buttonSize = data.size || '1u';
  const buttonKey = (typeof data.key === 'object') ? data.key.en : data.key;

  const button = document.createElement('button');

  button.classList.add('btn');
  button.classList.add(`btn--${buttonColor}`);
  button.classList.add(`btn--${buttonSize}`);

  button.setAttribute('tabindex', '-1');
  button.value = data.code;

  if (data.system) {
    button.insertAdjacentHTML('beforeend', `<span class="btn_syskey">${buttonKey}</span>`);
  }

  if (data.altkey) {
    button.insertAdjacentHTML('beforeend', `<span class="btn_altkey">${data.altkey.en}</span>`);
  }

  if (!data.system) {
    button.insertAdjacentHTML('beforeend', `<span class="btn_stdkey">${buttonKey}</span>`);
  }

  if (data.icon) {
    button.innerHTML = `<i class="material-icons">${data.icon}</i>`;
  }

  if (data.hasLed) {
    button.insertAdjacentHTML('beforeend', '<div class="btn_led"></div>');
  }

  return button;
}
