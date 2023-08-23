import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Form from "../Form/Form";
import { useNavigate } from "react-router-dom";

function Profile(props) {
  const navigate = useNavigate();
  const [name, changeName] = React.useState(props.user.name);
  const [email, changeEmail] = React.useState(props.user.email);
  const [isEditable, toggleIsEditable] = React.useState(false);
  const [formError, setFormError] = React.useState("");

  function onExitAccount() {
    navigate("/");
  }

  function onEditButtonClick() {
    toggleIsEditable(true);
  }

  function onInputChange(evt) {
    if (evt.target.id === "inputName") {
      changeName(evt.target.value);
    } else if (evt.target.id === "inputEmail") {
      changeEmail(evt.target.value);
    }
  }

  function onEditProfile() {
    setFormError("При обновлении профиля произошла ошибка.");
  }

  return (
    <>
      <Header place="profile" backgroundColor="black">
        <Navigation isLogged={true} place="header" openBurgerMenu={props.openBurgerMenu} />
      </Header>

      <main className="main">
        <Form type="profile" logo={false} heading={`Привет, ${props.user.name}!`} onSubmit={() => { onEditProfile() }}>
          <fieldset className="edit-profile fieldset">
            <div className="form__input-container form__input-container_type_profile">
              <label className="edit-profile__input-label" htmlFor="inputName">Имя</label>
              <input className="edit-profile__input input" type="text" id="inputName"
                placeholder="Введите имя" value={name} disabled={!isEditable} onChange={isEditable ? onInputChange : () => {}} />
            </div>

            <div className="form__input-container form__input-container_type_profile">
              <label className="edit-profile__input-label" htmlFor="inputEmail">E-mail</label>
              <input className="edit-profile__input input" type="email" id="inputEmail"
                placeholder="Введите электронную почту" value={email} disabled={!isEditable} onChange={isEditable ? onInputChange : () => {}} />
            </div>

            {
              isEditable
              &&
              <div className="edit-profile__toolbar">
                <p className="form__error">{formError}</p>
                <button className={`edit-profile__btn-submit ${formError.length > 0 ? "edit-profile__btn-submit_disabled" : ""} button`} disabled={formError.length > 0}>Сохранить</button>
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
