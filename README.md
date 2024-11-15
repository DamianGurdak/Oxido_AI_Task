# Projekt Artykuł – Konwersja tekstu na kod HTML z użyciem OpenAI API

## Opis działania aplikacji

Aplikacja jest narzędziem napisanym w JavaScript, które konwertuje podany artykuł tekstowy na kod HTML zgodnie z określonymi wytycznymi, wykorzystując API OpenAI. Dodatkowo generuje pełny podgląd artykułu w przeglądarce poprzez połączenie wygenerowanego kodu z przygotowanym szablonem HTML.

**Funkcjonalności aplikacji:**

1. **Odczyt treści artykułu** z pliku `article.txt`.
2. **Wysłanie zapytania do OpenAI API** z treścią artykułu i odpowiednim promptem.
3. **Otrzymanie wygenerowanego kodu HTML** artykułu od OpenAI.
4. **Zapis kodu HTML** w pliku `artykul.html`.
5. **Połączenie szablonu z wygenerowanym artykułem**, tworząc pełny podgląd artykułu w pliku `podglad.html`.

## Struktura projektu

- `app.js` – główny plik aplikacji.
- `article.txt` – plik tekstowy z treścią artykułu do konwersji.
- `artykul.html` – plik z wygenerowanym kodem HTML artykułu.
- `szablon.html` – szablon HTML z przygotowanymi stylami i kodem JS.
- `podglad.html` – pełny podgląd artykułu.
- `config.js` – plik konfiguracyjny z kluczem API OpenAI (**nie dodawaj go do repozytorium**).
- `README.md` – dokumentacja projektu i instrukcja uruchomienia.
- `.gitignore` – plik określający pliki i foldery ignorowane przez Git.

## Wymagania wstępne

- **Node.js** – środowisko uruchomieniowe JavaScript (zalecana wersja 18.x lub nowsza).
- **Konto OpenAI** z aktywnym kluczem API.

# Instrukcja uruchomienia

## Krok 1: Sklonowanie repozytorium i przejście do katalogu projektu

Sklonuj repozytorium i przejdź do katalogu projektu:

```bash
git clone https://github.com/twoje-repozytorium.git
cd projekt-artykul
```

## Krok 2: Instalacja zależności

Zainstaluj wymagane pakiety:

```bash
npm install
```

## Krok 3: Konfiguracja klucza API OpenAI

Utwórz plik `config.js` w katalogu głównym projektu:

```bash
touch config.js
```

Dodaj do niego swój klucz API:

```bash
// config.js
module.exports = {
  OPENAI_API_KEY: 'TWÓJ_KLUCZ_API'
};
```

Zastąp 'TWÓJ_KLUCZ_API' swoim rzeczywistym kluczem API.

Zabezpiecz plik `config.js`, dodając go do pliku .gitignore:

```bash
echo "config.js" >> .gitignore
```

## Krok 4: Upewnienie się, że plik article.txt zawiera treść artykułu

Upewnij się, że plik `article.txt` zawiera treść artykułu, który chcesz przekonwertować.

## Krok 5: Uruchomienie aplikacji

Uruchom aplikację za pomocą polecenia:

```bash
node app.js
```

Aplikacja wykona następujące czynności:

- Odczyta treść artykułu z `article.txt`.
- Wyśle zapytanie do OpenAI API z odpowiednim promptem.
- Otrzyma wygenerowany kod HTML i zapisze go w `artykul.html`.
- Połączy szablon z artykułem i zapisze pełny podgląd w `podglad.html`.

## Krok 6: Sprawdzenie wyników

Po uruchomieniu aplikacji sprawdź wygenerowane pliki:

- `artykul.html` – zawiera wygenerowany kod HTML artykułu (bez znaczników <html>, <head>, <body>).
- `podglad.html` – pełny podgląd artykułu, połączony z szablonem HTML.

## Krok 7: Wyświetlenie artykułu

Otwórz plik `podglad.html` w przeglądarce internetowej, aby zobaczyć sformatowany artykuł z zastosowanymi stylami.
