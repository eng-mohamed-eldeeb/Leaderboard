import './style.css';
import addToStorage from './addData.js';
// const data = JSON.parse(localStorage.getItem('data')) || [];
const form = document.querySelector('.theForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.querySelector('.name');
  const score = form.querySelector('.score');
  addToStorage(name.value, score.value);
  name.value = '';
  score.value = '';
});