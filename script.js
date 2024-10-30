// script.js

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWFiYmY1Nzk4MzgxZDJjNDE5NjhjMzZjYjNkOGQ4ZiIsIm5iZiI6MTczMDEyODcwNC43MTM2ODEsInN1YiI6IjY3MWNmZWVmNWJlOWU4NzU5ZGE3NjQ4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eZQrlIAVU-3ZWDdQNY5x9RNIyJ25NhkM9oft-IMW8M8'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/popular?language=pt-br&page=1', options)
    .then(res => res.json())
    .then(data => {
      const movies = data.results;
      const moviesGrid = document.getElementById('movies-grid');
      
      movies.forEach(movie => {
        // Criando um elemento div para cada filme
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        
        // Adicionando a imagem do filme
        const movieImage = document.createElement('img');
        movieImage.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        movieImage.alt = movie.title;
        
    
        // Adicionando a imagem e o título ao cartão do filme
        movieCard.appendChild(movieImage);

        
        // Adicionando o cartão ao grid
        moviesGrid.appendChild(movieCard);
      });
    })
    .catch(err => console.error(err));
  


    