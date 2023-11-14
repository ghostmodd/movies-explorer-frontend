import React from "react";
import "./NotFoundPage.css";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  function goToPreviousPage() {
    navigate(-1);
  }

  return (
    <main>
      <section className="not-found-error">
        <div className="not-found-error__container">
          <h1 className="not-found-error__code">404</h1>
          <p className="not-found-error__description">Страница не найдена</p>
          <button className="not-found-error__btn-previous-page button" onClick={goToPreviousPage}>Назад</button>
        </div>
      </section>
    </main>
  )
}

export default NotFoundPage;
