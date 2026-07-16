import GameStatus from './components/GameStatus'
import Header from './components/Header'
import LanguageChips from './components/LanguageChips'
import WordDisplay from './components/WordDisplay'

function App() {
  const currentWord = 'assembly'
  return (
    <>
      <Header />
      <GameStatus />
      <LanguageChips />
      <WordDisplay word={currentWord} />
    </>
  )
}

export default App
