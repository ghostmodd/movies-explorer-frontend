import React from 'react';
import logoPic from '../../images/Logo.svg';
import './Logo.css';

const logo = (
  <img className='logo-pic' src={logoPic} alt='Логотип сайта: белая буква "С" на зеленом фоне' />
);

const logoLink = (
  <a className="logo link" href="/">
    {logo}
  </a>
);

function Logo(props) {
  return (
    <>
      {props.link ? logoLink : logo}
    </>

  )
}

export default Logo;
