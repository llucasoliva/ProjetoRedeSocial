// Obter referências aos elementos do DOM
const tweetBox = document.querySelector('.tweet-box');
const tweetInput = tweetBox.querySelector('textarea');
const tweetButton = tweetBox.querySelector('button');
const tweetsContainer = document.querySelector('.tweets');
const searchBox = document.querySelector('.search-box');
const searchInput = searchBox.querySelector('input[type="text"]');
const trendingTopicsContainer = document.querySelector('.trending-topics');

// Adicionar evento de clique ao botão de publicar tweet
tweetButton.addEventListener('click', () => {
  const tweet = tweetInput.value.trim();
  if (tweet) {
    // Criar o elemento do tweet
    const tweetElement = document.createElement('div');
    tweetElement.classList.add('tweet');
    tweetElement.innerHTML = `
      <h3>Username</h3>
      <p>${tweet}</p>
      <small>${new Date().toLocaleString()}</small>
    `;  
      // Adicionar o tweet ao container de tweets
    tweetsContainer.insertBefore(tweetElement, tweetsContainer.firstChild);
    // Limpar o campo de texto
    tweetInput.value = '';
  }
});
// Adicionar evento de input à caixa de pesquisa
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const tweets = tweetsContainer.querySelectorAll('.tweet');
    tweets.forEach(tweet => {
      const tweetText = tweet.querySelector('p').textContent.toLowerCase();
      if (tweetText.includes(searchTerm)) {
        tweet.style.display = 'block';
      } else {
        tweet.style.display = 'none';
      }
    });
  });
  
  // Função para obter os trending topics
  function getTrendingTopics() {
    // Simulação de dados dos trending topics
    const topics = [
      'Dota',
      'Fortnite',
      'League of Legends',
      'Valorant',
      'Legends of Runeterra'
    ];
    // Limpar o container dos trending topics
    trendingTopicsContainer.innerHTML = '';
    // Criar o elemento de título dos trending topics
    const titleElement = document.createElement('h3');
    titleElement.textContent = 'Trending Topics';
    trendingTopicsContainer.appendChild(titleElement);
    // Criar a lista de trending topics
    const listElement = document.createElement('ul');
    trendingTopicsContainer.appendChild(listElement);
    topics.forEach(topic => {
      // Criar o item da lista
      const listItemElement = document.createElement('li');
      listElement.appendChild(listItemElement);
      // Criar o link do trending topic
      const linkElement = document.createElement('a');
      linkElement.textContent = topic;
      linkElement.href = '#';
      listItemElement.appendChild(linkElement);
    });
  }
  
  // Chamar a função para obter os trending topics
  getTrendingTopics();