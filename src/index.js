import './styles/style.scss'

const p = document.createElement('p')
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
p.textContent = array3.join(' ')
document.body.appendChild(p)

