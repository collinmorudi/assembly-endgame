# Assembly: Endgame

A Hangman-style React game where every wrong guess wipes out a programming language until only Assembly remains. Guess the word to keep the modern programming world safe!

## 🎮 How to Play

- You are presented with a hidden word to guess.
- You have a maximum of 8 incorrect guesses.
- With each incorrect guess, one programming language (starting from modern languages down to Assembly) is eliminated.
- **Win:** Guess the word correctly before running out of attempts.
- **Lose:** Fail to guess the word, eliminating all languages until only Assembly is left!

## 🛠️ Tech Stack

- **React** - UI components and state management
- **JavaScript/ES6+** - Game logic

## 🚀 Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/assembly-endgame.git
   cd assembly-endgame
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The app will automatically open in your browser at `http://localhost:5173`.

## 🏗️ Project Structure Highlights

- **State:** Tracks only the `currentWord` and an array of `guessedLetters`.
- **Derived Data:** Game status (win/loss) and eliminated languages are calculated dynamically on every render to keep the state clean and bug-free.

---

_This project was built as a fun way to practice React component structure, state management, and derived state calculations._
