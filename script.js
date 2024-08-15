import genres from './genres.js';

function createOption(genre) {
  const select = document.getElementById('genres');

  const option = document.createElement('option');
  option.textContent = genre.name;

  select.append(option);
}

genres.forEach((genre) => createOption(genre));
