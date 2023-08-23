import React from "react";
import "./Techs.css";
import Section from "../Section/Section";

function Techs() {
  return (
    <Section heading="Технологии" backgroundColor="gray">
      <article className="techs">
        <h3 className="techs__heading">7 технологий</h3>
        <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

        <ul className="tag-list">
          <li className="tag-list__item">HTML</li>
          <li className="tag-list__item">CSS</li>
          <li className="tag-list__item">JS</li>
          <li className="tag-list__item">React</li>
          <li className="tag-list__item">Git</li>
          <li className="tag-list__item">Express.js</li>
          <li className="tag-list__item">mongoDB</li>
        </ul>
      </article>
    </Section>
  )
}

export default Techs;
