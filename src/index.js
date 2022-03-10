import './style.css';
import { addScore, getScores } from './apiMethods.js';

const addForm = document.querySelector('.theForm');
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(addForm));
  addScore(formData.name, formData.score);
  addForm.reset();
});

const refreshBtn = document.querySelector('.refresh');
const scoresList = document.querySelector('.scores > ul');
refreshBtn.addEventListener('click', () => {
  getScores()
    .then((data) => {
      scoresList.innerHTML = '';
      data.forEach((record) => {
        const li = document.createElement('li');
        li.innerHTML = `<div>name: ${record.user} </br> score: ${record.score}</div>`;
        scoresList.appendChild(li);
      });
    });
});