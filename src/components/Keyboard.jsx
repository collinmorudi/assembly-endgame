export default function Keyboard() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")
  return (
    <div className="keyboard">
        {alphabet.map((letter) => (
          <button className="key" key={letter}>
            {letter.toUpperCase()}
          </button>
        ))}
    </div>
  )
}