const apiKey = 'შეიყვანე_აქ_შენი_API_კოდი';
const endpoint = `https://newsapi.org/v2/top-headlines?country=us&pageSize=6&apiKey=${apiKey}`;

async function fetchNews() {
  try {
    const res = await fetch(endpoint);
    const data = await res.json();

    if (data.status === "ok") {
      displayNews(data.articles);
    } else {
      console.error("შეცდომა:", data.message);
    }
  } catch (err) {
    console.error("შეცდომა სიახლეების წამოღებისას:", err);
  }
}

function displayNews(articles) {
  const container = document.getElementById("news-container");
  container.innerHTML = "";

  articles.forEach(article => {
    const card = document.createElement("div");
    card.className = "news-item";

    card.innerHTML = `
      <h3>${article.title}</h3>
      <p>${article.description || 'ვრცლად...'}</p>
      <a href="${article.url}" target="_blank">ვრცლად</a>
    `;

    container.appendChild(card);
  });
}

fetchNews();
