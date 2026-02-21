import './Discussions.css'

const Discussions = () => {
  return (
    <section className="discussions">
      <h2 className="discussions__title">Сейчас обсуждают</h2>
      <ul className="discussions__list">
        <li className="discussions__item">
          <article className="discussions__card">
            <p className="discussions__card-description">🔥 Как выучить программирование быстрее?</p>
          </article>
        </li>
        <li className="discussions__item">
          <article className="discussions__card discussions__card--middle">
            <p className="discussions__card-description">🚀 Лучшие инструменты для веб-разработки?</p>
          </article>
        </li>
        <li className="discussions__item">
          <article className="discussions__card">
            <p className="discussions__card-description">💡 Как собрать портфолио дизайнеру?</p>
          </article>
        </li>
      </ul>
    </section>
  );

}

export default Discussions;
