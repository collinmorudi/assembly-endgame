import { languages } from '../data/languages'

export default function LanguageChips() {
    return (
        <div className="language-chips">
            {languages.map((language) => (
                <span
                    key={language.name}
                    className="language-chip"
                    style={{
                        backgroundColor: language.backgroundColor,
                        color: language.color,
                    }}
                >
                    {language.name}
                </span>
            ))}
        </div>
    )
}