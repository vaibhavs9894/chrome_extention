document.getElementById('searchButton').addEventListener('click', function() {
  const novelName = document.getElementById('novelName').value;
  if (novelName) {
    searchNovel(novelName);
  }
});

function searchNovel(novelName) {
  // Replace with the actual API endpoint
  https://www.google.com/search?tbm=bks&q=twostate
  const apiUrl = `https://www.google.com/search?tbm=bks&q=${novelName}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => displayResults(data))
    .catch(error => console.error('Error:', error));
}

function displayResults(data) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  if (data && data.results) {
    data.results.forEach(result => {
      const resultItem = document.createElement('div');
      resultItem.className = 'result-item';
      resultItem.textContent = result.title; // Adjust according to the API response structure
      resultsDiv.appendChild(resultItem);
    });
  } else {
    resultsDiv.textContent = 'No results found';
  }
}
