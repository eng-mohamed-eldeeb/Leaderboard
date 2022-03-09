export default function addToStorage(name, score) {
  const data = JSON.parse(localStorage.getItem('data')) || [];
  const newData = {
    name: `${name}`,
    score: `${score}`,
  };
  data.push(newData);
  localStorage.setItem('data', JSON.stringify(data));
}