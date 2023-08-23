import React from "react";
import './Section.css';

function Section(props) {
  return (
    <section className={`section section_color_${props.backgroundColor}`} id={props.id ? props.id : ""}>
      <div className="section__container">
        <h2 className="section__heading">{props.heading}</h2>
        {props.children}
      </div>
    </section>
  )
}

export default Section;
