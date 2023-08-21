import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__heading">Портфолио</h2>

      <ul className="full-page-list">
        <li className="full-page-list__item">
          <a className="full-page-list__link link" href="https://ghostmodd.github.io/how-to-learn/" rel="noreferrer" target="_blank">
            Статичный сайт
            <p className="full-page-list__link-icon">↗</p>
          </a>
        </li>

        <li className="full-page-list__item">
          <a className="full-page-list__link link" href="https://ghostmodd.github.io/russian-travel/index.html#" rel="noreferrer" target="_blank">
            Адаптивный сайт
            <p className="full-page-list__link-icon">↗</p>
          </a>
        </li>

        <li className="full-page-list__item">
          <a className="full-page-list__link link" href="https://ghostmodd.github.io/mesto/" rel="noreferrer" target="_blank">
            Одностраничное приложение
            <p className="full-page-list__link-icon">↗</p>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
