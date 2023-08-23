import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";

function Login() {
  const [formError, setFormError] = React.useState("");
  const navigate = useNavigate();

  function onLogin() {
    setFormError("При авторизации произошла ошибка. Токен не передан или передан не в том формате.");
  }

  function handleChangeApproach() {
    navigate("/signup");
  }

  return (
    <main className="main">
      <Form type="auth" logo={true} heading="Рады видеть!" onSubmit={() => { onLogin() }}>
        <fieldset className="authentication fieldset">
          <div className="form__input-container form__input-container_type_auth">
            <label className="authentication__input-label" htmlFor="registration-email-input">E-mail</label>
            <input className="authentication__input input" id="registration-email-input" type="email" required={true} />
            <p className="authentication__input-error"></p>
          </div>

          <div className="form__input-container form__input-container_type_auth">
            <label className="authentication__input-label"
              htmlFor="registration-password-input">Пароль</label>
            <input className="authentication__input input" id="registration-password-input"
              type="password" required={true} />
            <p className="authentication__input-error"></p>
          </div>

          <div className={`authentication__toolbar authentication__toolbar_type_login`}>
            <p className="form__error">{formError}</p>
            <button className={`authentication__btn-submit ${formError.length > 0 ? "authentication__btn-submit_disabled" : ""} button`} disabled={formError.length > 0}>Войти</button>
            <div className="authentication__btn-change-approach-container">
              <p className="authentication__btn-change-approach-text">Еще не зарегистрированы?</p>
              <button className="authentication__btn-change-approach button"
                      onClick={handleChangeApproach}>Регистрация
              </button>
            </div>
          </div>
        </fieldset>
      </Form>
    </main>
  )
}

export default Login;

