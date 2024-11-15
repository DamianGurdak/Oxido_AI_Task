// app.js
const fs = require('fs');
const fetch = require('node-fetch');
const { OPENAI_API_KEY } = require('./config');

const articleText = fs.readFileSync('article.txt', 'utf-8');

// Przygotowanie promptu
const prompt = `
Przekonwertuj poniższy artykuł na kod HTML zgodnie z następującymi wytycznymi:
- Użyj odpowiednich tagów HTML do strukturyzacji treści.
- W miejscach, gdzie warto wstawić grafiki, użyj tagu <img> z atrybutem src="image_placeholder.jpg".
- Dodaj atrybut alt do każdego obrazka z dokładnym promptem do wygenerowania grafiki.
- Umieść podpisy pod grafikami używając odpowiedniego tagu HTML.
- Nie dodawaj żadnego kodu CSS ani JavaScript.
- Zwróć tylko kod pomiędzy <body> i </body> bez dodawania znaczników <html>, <head> czy <body>.

Artykuł:
${articleText}
`;

// Funkcja do komunikacji z API OpenAI
async function getArticleHTML(prompt) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1500,
      temperature: 0.7
    })
  });
  const data = await response.json();
  return data.choices[0].message.content;
}

// Wywołanie funkcji i zapis do pliku
(async () => {
  try {
    const articleHTML = await getArticleHTML(prompt);
    fs.writeFileSync('artykul.html', articleHTML);
    console.log('Plik artykul.html został wygenerowany.');
  } catch (error) {
    console.error('Wystąpił błąd:', error);
  }
})();
