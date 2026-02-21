import './Advantages.css'

const Advantages = () => {
  return (
    <section className="advantages">
      <h2 className="advantages__title">Преимущества fastQ</h2>
      <ul className="advantages__list">
        <li className="advantages__item">
          <article className="advantages__card">
            <svg className="advantages__card-icon" viewBox="0 0 64 64" id="icon-chat">
              <rect x="8" y="12" width="48" height="32" rx="8" stroke="currentColor" stroke-width="2" />
              <path d="M20 50L28 44H44" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M34 20L28 32H36L30 44" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h3 className="advantages__card-title">Мгновенные ответы</h3>
            <p className="advantages__card-description">Сообщество реагирует быстро.</p>
          </article>
        </li>
        <li className="advantages__item">
          <article className="advantages__card advantages__card--middle">
            <svg className="advantages__card-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 8L52 16V30C52 42 43 50 32 56C21 50 12 42 12 30V16L32 8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
              <path d="M24 32L30 38L42 26" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h3 className="advantages__card-title">Эксперты</h3>
            <p className="advantages__card-description">Ответы от профессионалов.</p>
          </article>
        </li>
        <li className="advantages__item">
          <article className="advantages__card">
            <svg className="advantages__card-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="14" width="44" height="28" rx="4" stroke="currentColor" stroke-width="2" />
              <path d="M22 50H42" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              <path d="M26 42V50" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              <circle cx="20" cy="22" r="2" fill="currentColor" />
              <rect x="26" y="20" width="20" height="4" rx="2" fill="currentColor" />
              <rect x="26" y="28" width="14" height="4" rx="2" fill="currentColor" />
            </svg>
            <h3 className="advantages__card-title">Современный UI</h3>
            <p className="advantages__card-description">Удобство и стиль.</p>
          </article>
        </li>
      </ul>
    </section>
  );
};

export default Advantages;
