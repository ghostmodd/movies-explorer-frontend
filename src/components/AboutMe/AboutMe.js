import React from "react";
import "./AboutMe.css"
import Section from "../Section/Section";
import myPhoto from "../../images/about-me__photo.jpg"

function AboutMe() {
  return (
    <Section heading="Студент" backgroundColor="black">
      <article className="about-me">
        <div className="about-me__info">
          <h3 className="about-me__name">Григорий</h3>
          <p className="about-me__details">Фронтенд-разработчик, 21 год</p>
          <div className="about-me__description-container">
            <p className="about-me__description">
              По-настоящему люблю WEB-разработку. Это главный двигатель моего развития в специальности. Каждый день делаю что-то, что может улучшить мои наавыки.
            </p>
            <p className="about-me__description">
              В свободное время занимаюсь спортом: воркаут и шахматы. Играю на гитаре и учу иностранные языки. В будущем планирую начать заниматься вокалом.
            </p>
          </div>
          <a className="about-me__link link" href="https://github.com/ghostmodd" rel="noreferrer" target="_blank">GitHub</a>
        </div>
        <img className="about-me__photo" src={myPhoto} alt="Фотография студента" />
      </article>
    </Section>
  )
}

export default AboutMe;
