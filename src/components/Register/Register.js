import React from "react";
import "./Register.css"
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";

function Register() {
  const [formError, setFormError] = React.useState("");
  const navigate = useNavigate();

  function onRegister() {
    setFormError("При регистрации пользователя произошла ошибка.");
  }

  function handleChangeApproach() {
    navigate("/signin");
  }

  return (
    <main className="main">
      <Form type="auth" logo={true} heading="Добро пожаловать!" onSubmit={() => { onRegister() }}>
        <fieldset className="authentication fieldset">
          <div className="form__input-container form__input-container_type_auth">
            <label className="authentication__input-label" htmlFor="registration-name-input">Имя</label>
            <input className="authentication__input input" id="registration-name-input" type="text" required={true} />
            <p className="authentication__input-error"></p>
          </div>

          <div className="form__input-container form__input-container_type_auth">
            <label className="authentication__input-label" htmlFor="registration-email-input">E-mail</label>
            <input className="authentication__input input" id="registration-email-input" type="email" required={true} />
            <p className="authentication__input-error"></p>
          </div>

          <div className="form__input-container form__input-container_type_auth">
            <label className="authentication__input-label"
              htmlFor="registration-password-input">Пароль</label>
            <input className="authentication__input authentication__input_type_error input"
              id="registration-password-input"
              type="password" required={true} />
            <p className="authentication__input-error">Что-то пошло не так...</p>
          </div>

          <div className="authentication__toolbar authentication__toolbar_type_registration">
            <p className="form__error">{formError}</p>
            <button className={`authentication__btn-submit ${formError.length > 0 ? "authentication__btn-submit_disabled" : ""} button`} disabled={formError.length > 0}>Зарегистрироваться</button>
            <div className="authentication__btn-change-approach-container">
              <p className="authentication__btn-change-approach-text">Уже зарегистрированы?</p>
              <button className="authentication__btn-change-approach button"
                      onClick={handleChangeApproach}>Войти
              </button>
            </div>
          </div>
        </fieldset>

      </Form>
    </main>
  )
}

export default Register;
