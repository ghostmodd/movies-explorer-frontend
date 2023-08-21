import React from "react";
import './Section.css';

function Section(props) {
  return (
    <section className="section" id={props.id ? props.id : ""} style={{ backgroundColor: props.backgroundColor }}>
      <h2 className="section__heading">{props.heading}</h2>
      <div className="divider"></div>
      {props.children}
    </section>
  )
}

export default Section;
