import React from "react";
import "./Techs.css";
import Section from "../Section/Section";

function Techs() {
  return (
    <Section heading="Технологии" backgroundColor="gray">
      <article className="techs">
        <h3 className="techs__heading">9 технологий</h3>
        <p className="techs__text">За время обучения я освоил 9 технологий, которые применил в своих проектах.</p>

        <ul className="tag-list">
          <li className="tag-list__item">HTML</li>
          <li className="tag-list__item">CSS</li>
          <li className="tag-list__item">JavaScript</li>
          <li className="tag-list__item">TypeScript</li>
          <li className="tag-list__item">React</li>
          <li className="tag-list__item">Redux</li>
          <li className="tag-list__item">Git</li>
          <li className="tag-list__item">Express.js</li>
          <li className="tag-list__item">mongoDB</li>
        </ul>
      </article>
    </Section>
  )
}

export default Techs;
