import React from "react";
import "./AboutMe.css"
import Section from "../Section/Section";
import myPhoto from "../../images/about-me__photo.png"

function AboutMe() {
  return (
    <Section heading="Студент" backgroundColor="black">
      <article className="about-me">
        <div className="about-me__info">
          <h3 className="about-me__name">Григорий</h3>
          <p className="about-me__details">Фронтенд-разработчик, 21 год</p>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С
            2015 года работал
            в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className="about-me__link link" href="https://github.com/ghostmodd" rel="noreferrer" target="_blank">GitHub</a>
        </div>
        <img className="about-me__photo" src={myPhoto} alt="Фотография студента" />
      </article>
    </Section>
  )
}

export default AboutMe;
