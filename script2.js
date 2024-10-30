const options = {
  method: 'GET',
  headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWFiYmY1Nzk4MzgxZDJjNDE5NjhjMzZjYjNkOGQ4ZiIsIm5iZiI6MTczMDEyODcwNC43MTM2ODEsInN1YiI6IjY3MWNmZWVmNWJlOWU4NzU5ZGE3NjQ4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eZQrlIAVU-3ZWDdQNY5x9RNIyJ25NhkM9oft-IMW8M8'
  }
};

document.getElementById('load-button').addEventListener('click', () => {
  fetch('https://api.themoviedb.org/3/tv/latest', options)
      .then(res => res.json())
      .then(data => {
          displayResult(data);
      })
      .catch(err => console.error(err));
});

function displayResult(show) {
  const resultContainer = document.getElementById('result');
  resultContainer.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${show.poster_path}" alt="${show.name}">
      <h2>${show.name}</h2>
      <p><strong>Data de Lançamento:</strong> ${show.first_air_date}</p>
      <p><strong>Descrição:</strong> ${show.overview}</p>
  `;
}