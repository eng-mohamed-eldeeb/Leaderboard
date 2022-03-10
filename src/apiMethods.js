const addScore = async (username, score) => {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RbZstIDnGYdGTsk3sKDW/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: username,
      score,
    }),
  });
};

const getScores = async () => {
  const theReturn = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RbZstIDnGYdGTsk3sKDW/scores', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => data.result);
  return theReturn;
};

export { addScore, getScores };