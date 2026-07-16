import GameStatus from './components/GameStatus'
import Header from './components/Header'
import LanguageChips from './components/LanguageChips'
import WordDisplay from './components/WordDisplay'
import Keyboard from './components/Keyboard'

function App() {
  const currentWord = 'assembly'
  return (
    <>
      <Header />
      <GameStatus />
      <LanguageChips />
      <WordDisplay word={currentWord} />
      <Keyboard />
    </>
  )
}

export default App
