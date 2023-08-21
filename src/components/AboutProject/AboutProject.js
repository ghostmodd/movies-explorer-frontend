import React from "react";
import "./AboutProject.css"
import Section from "../Section/Section";

function AboutProject() {
  return (
    <Section heading="О проекте" backgroundColor="#202020" id="about-project">
      <div className="about-project">
        <ul className="two-columns">
          <li className="two-columns__item">
            <h4 className="two-columns__heading">Дипломный проект включал 5 этапов</h4>
            <p className="two-columns__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>

          <li className="two-columns__item">
            <h4 className="two-columns__heading">На выполнение диплома ушло 5 недель</h4>
            <p className="two-columns__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>

        <div className="timeline">
          <div className="timeline__segment timeline__segment_type_backend timeline__segment_color_lime">
            <p className="timeline__segment-text timeline__segment-text_color_black">1 неделя</p>
            <p className="timeline__segment-caption">Back-end</p>
          </div>

          <div className="timeline__segment timeline__segment_type_frontend timeline__segment_color_gray">
            <p className="timeline__segment-text timeline__segment-text_color_white">4 недели</p>
            <p className="timeline__segment-caption">Front-end</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AboutProject;
