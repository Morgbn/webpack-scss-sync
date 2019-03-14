import './style/main.scss'

let component = () => {
  let element = document.createElement('div');
  element.innerHTML = 'Hello webpack !';
  return element;
}

document.body.appendChild(component());