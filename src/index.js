import './sass/index.scss';
import buttonSet from './components/ButtonSet';
import VirtualKeyboard from './components/VirtualKeyboard';

// Keyboard Init
const virtualKeyboard = new VirtualKeyboard(buttonSet);

// Additional Elements
const textArea = document.createElement('textarea');
const container = document.createElement('div');
const info = document.createElement('div');

textArea.className = 'virtual-keyboard_textarea';
textArea.spellcheck = false;
container.className = 'container';
info.className = 'info';
info.innerHTML = `<p> <font color="#ffffff">Клавиатура создана в операционной системе <b>Windows</b><br>
Для переключения языка комбинация: <kbd>ctrl + alt</kbd></font></p>`;

// Place everything on page
container.append(textArea);
container.append(virtualKeyboard.keyboard);
container.append(info);
document.body.append(container);

// Bind textarea to keyboard
virtualKeyboard.setInput(textArea);
// Set initial lang
const lang = localStorage.getItem('lang') || 'en';
virtualKeyboard.switchLang(lang);

textArea.focus();
