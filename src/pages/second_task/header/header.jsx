import MainLogo from '../../../utils/main_logo.svg';
import TwitterLogo from '../../../utils/twitter.svg';
import PhoneLogo from '../../../utils/phone.svg';
import WhatAppLogo from '../../../utils/whatapp.svg';
import './header.css';
export default function Header() {
  return (
    <header className="Header_container">
      <img alt="Company logo" src={MainLogo} id="main_logo" />
      <div className="Header_link">
        <a href="#" className="header_text">
          Услуги
        </a>
        <a href="#" className="header_text">
          Виджеты
        </a>
        <a href="#" className="header_text">
          Кейсы
        </a>
        <a href="#" className="header_text">
          Сертификаты
        </a>
      </div>
      <a href="#" className="header_text" id="phone">
        +7 555 555-55-55
      </a>
      <div className="Header_logos">
        <img alt="Twitter logo" src={TwitterLogo} />
        <img alt="Phone logo" src={PhoneLogo} />
        <img alt="WhatApp logo" src={WhatAppLogo} />
      </div>
    </header>
  );
}
