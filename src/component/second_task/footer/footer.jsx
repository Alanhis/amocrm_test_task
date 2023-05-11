import TwitterLogo from '../../../utils/twitter.svg';
import PhoneLogo from '../../../utils/phone.svg';
import WhatAppLogo from '../../../utils/whatapp.svg';
import './footer.css';

export default function Footer() {
  return (
    <>
      {' '}
      <footer className="footer_container">
        <div className="link_container">
          <p className="footer_text_main">О компании</p>
          <a href="#" className="footer_text_info">
            Партнёрская программа
          </a>
          <a href="#" className="footer_text_info">
            Вакансии
          </a>
        </div>
        <div>
          <p className="footer_text_main">Меню</p>
          <div className="link_combined">
            <div className="link_container">
              <a href="#" className="footer_text_info">
                Расчёт стоимости
              </a>
              <a href="#" className="footer_text_info">
                Услуги
              </a>
              <a href="#" className="footer_text_info">
                Виджеты
              </a>
              <a href="#" className="footer_text_info">
                Интеграции
              </a>
              <a href="#" className="footer_text_info">
                Наши клиенты
              </a>
            </div>
            <div className="link_container">
              <a href="#" className="footer_text_info">
                Кейсы
              </a>
              <a href="#" className="footer_text_info">
                Благодарственные письма
              </a>
              <a href="#" className="footer_text_info">
                Сертификаты
              </a>
              <a href="#" className="footer_text_info">
                Блог на Youtube
              </a>
              <a href="#" className="footer_text_info">
                Вопрос / Ответ
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="footer_text_main">Контакты</p>
          <p className="footer_text_info">+7 555 555-55-55</p>
          <div className="logo_container">
            <img alt="Twitter logo" src={TwitterLogo} />
            <img alt="Phone logo" src={PhoneLogo} />
            <img alt="WhatApp logo" src={WhatAppLogo} />
          </div>
          <p className="footer_text_info">Москва, Путевой проезд 3с1, к 902</p>
          <div className="policy_container">
            <p className="policy_text">©WELBEX 2022. Все права защищены.</p>
            <a href="#" className="policy_text">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
