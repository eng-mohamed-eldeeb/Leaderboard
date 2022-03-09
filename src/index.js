import './style.css';
import addToStorage from './addData.js';

const addForm = document.querySelector('.theForm');
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = addForm.querySelector('.name');
  const score = addForm.querySelector('.score');
  addToStorage(name.value, score.value);
  name.value = '';
  score.value = '';
});