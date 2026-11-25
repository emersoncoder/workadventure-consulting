import { useLanguage } from '../i18n/useLanguage';

const columnCount = 10;
const wordsPerColumn = 5;

export function MatrixRain() {
  const { dictionary } = useLanguage();
  const skills = dictionary.about.skills;

  return (
    <div className="matrix-rain" aria-hidden="true">
      {Array.from({ length: columnCount }, (_, columnIndex) => (
        <div className="matrix-column" key={columnIndex}>
          {Array.from({ length: wordsPerColumn }, (_, wordIndex) => {
            const skillIndex = (columnIndex * wordsPerColumn + wordIndex) % skills.length;
            const duration = 22 + ((columnIndex * 3 + wordIndex * 5) % 13);
            const delay = -((columnIndex * 2.7 + wordIndex * 4.9) % duration);

            return (
              <span
                className={`matrix-word ${wordIndex % 4 === 0 ? 'matrix-word--amber' : ''}`}
                key={`${columnIndex}-${wordIndex}`}
                style={{
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`,
                }}
              >
                {skills[skillIndex]}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}
