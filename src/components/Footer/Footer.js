import React from 'react';
import './Footer.css';

function Footer(props) {
  return (
    <footer className={`footer footer_place_${props.place}`}>
      <h2 className='footer__description'>{props.description}</h2>
      <div className="footer__copyright">
        <p className="footer__current-year">© {new Date().getFullYear()}</p>
        <div className="footer__copyright-links">
          <a className="footer__copyright-link link" href="https://practicum.yandex.ru/" rel="noreferrer" target="_blank">Яндекс.Практикум</a>
          <a className="footer__copyright-link link" href="https://github.com/" rel="noreferrer" target="_blank">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
