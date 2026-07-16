export default function WordDisplay({ word }) {
    return (
        <div className="word-display">
            {word.toUpperCase().split('').map((letter, index) => (
                <span key={index} className="letter-box">
                    {letter}
                </span>
            ))}
        </div>
    )
}