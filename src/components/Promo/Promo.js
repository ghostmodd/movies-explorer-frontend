import React from "react";
import "./Promo.css";
import promoImg from "../../images/promo__img.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__text-block">
        <h1 className="promo__heading">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="promo__caption">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <a className="promo__link-learn-more link" href="#about-project">Узнать больше</a>
      </div>
      <img className="promo__image" src={promoImg} alt="Картинка: глобус, выстроенный из слов 'WEB'" />
    </section>
  )
}

export default Promo;
