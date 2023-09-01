import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Form from "../Form/Form";
import useInput from "../../utils/hooks/useInput";
import { CurrentUserContext } from "../../utils/context/CurrentUserContext";

function Profile(props) {
  const userInfo = React.useContext(CurrentUserContext);

  const [isSubmitButtonDisabled, toggleIsSubmitButtonDisabled] = React.useState(true);

  const [isEditable, toggleIsEditable] = React.useState(false);
  const [nameInput, changeNameInput, handleNameInputFocus, nameInputHasError, nameInputError] = useInput(
    userInfo.name,
    {
      type: "name",
      required: false,
      minLength: 2,
      maxLength: 30,
    }
  );
  const [emailInput, changeEmailInput, handleEmailInputFocus, emailInputHasError, emailInputError] = useInput(
    userInfo.email,
    {
      type: "email",
      required: false,
    }
  );

  React.useEffect(() => {
    if(props.formError) {
      props.setFormError("");
    } else if(props.notification) {
      props.setNotification("");
    }
  }, []);

  React.useEffect(() => {
    // Убирает ошибку после использования инпута
    if (props.formError) {
      props.setFormError("");
    }
  }, [nameInput, emailInput]);

  // Управление кнопкой отправки формы
  React.useEffect(() => {
    if (props.formError || nameInputHasError || emailInputHasError || (nameInput === userInfo.name && emailInput === userInfo.email)) {
      toggleIsSubmitButtonDisabled(true);
    } else {
      toggleIsSubmitButtonDisabled(false);
    }
  }, [isEditable, props.formError, nameInputHasError, emailInputHasError, nameInput, emailInput]);

  // Управление кнопкой "Редактировать"
  function onEditButtonClick() {
    toggleIsEditable(true);
  }

  function onEditProfile() {
    props.onEditProfile({
      name: nameInput,
      email: emailInput,
    });
    toggleIsSubmitButtonDisabled(true);
    setTimeout(() => {
      toggleIsEditable(false);
    }, 1000);
  }

  function onExitAccount() {
    props.onExitAccount();
  }

  return (
    <>
      <Header place="profile" backgroundColor="black">
        <Navigation isLogged={props.loggedIn} place="header" openBurgerMenu={props.openBurgerMenu} />
      </Header>

      <main className="main">
        <Form type="profile" logo={false} heading={`Привет, ${userInfo.name}!`} onSubmit={() => { onEditProfile() }}>
          <fieldset className="edit-profile fieldset">
            <div className="form__input-container form__input-container_type_profile">
              <label className="edit-profile__input-label" htmlFor="inputName">Имя</label>
              <input className="edit-profile__input input" type="text" id="inputName"
                placeholder="Введите имя" value={nameInput} disabled={!isEditable} onChange={isEditable ? changeNameInput : () => { }} onFocus={handleNameInputFocus} />
            </div>

            <div className="form__input-container form__input-container_type_profile">
              <label className="edit-profile__input-label" htmlFor="inputEmail">E-mail</label>
              <input className="edit-profile__input input" type="email" id="inputEmail"
                placeholder="Введите электронную почту" value={emailInput} disabled={!isEditable} onChange={isEditable ? changeEmailInput : null} onFocus={handleEmailInputFocus} />
            </div>

            {
              isEditable
              &&
              <div className="edit-profile__toolbar">
                <p className={props.formError ? "form__error" : "form__notification"}>{props.formError || props.notification}</p>
                <button className={`edit-profile__btn-submit ${isSubmitButtonDisabled ? "edit-profile__btn-submit_disabled" : ""} button`} disabled={isSubmitButtonDisabled}>Сохранить</button>
              </div>
            }

            {
              !isEditable
              &&
              <div className="edit-profile__toolbar">
                <button className="edit-profile__btn-edit-profile button" onClick={onEditButtonClick}>Редактировать</button>
                <button className="edit-profile__btn-logout button" onClick={onExitAccount}>Выйти из аккаунта</button>
              </div>
            }
          </fieldset>
        </Form>
      </main>
    </>
  )
}

export default Profile;
