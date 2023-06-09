import './main.css';

export default function MainPage() {
  return (
    <main className="Main_container">
      <div className="main_section_one">
        <p className="main_text">Зарабатываете больше</p>
        <p className="company_main_text">с WELBEX</p>
        <p className="text">Развиваем и контролируем продажи за вас</p>
      </div>
      <div className="main_section_two">
        <p className="intro_container">
          <span className="text_intro">Вместе с </span>
          <span className="text_intro_color">бесплатной рекомендацией</span>
          <span className="text_intro"> мы дарим:</span>
        </p>
        <div className="about_container">
          <div className="about_info">
            <div className="text_intro_container">
              <hr className="line_about" />
              <p className="text_about_main container_about_main_mobile">
                Виджеты
              </p>
              <p className="text_about_main">Skype аудит</p>
            </div>
            <p className="text_about_info">30 готовых решений</p>
          </div>
          <div className="about_info">
            <div className="text_intro_container">
              <hr className="line_about" />
              <p className="text_about_main">Dashboard</p>
              <p className="text_about_main container_about_main_mobile">
                30 виджетов
              </p>
            </div>
            <p className="text_about_info">с показателями вашего бизнеса</p>
          </div>
          <div className="about_info">
            <div className="text_intro_container">
              <hr className="line_about" />
              <p className="text_about_main">Skype Аудит</p>
              <p className="text_about_main container_about_main_mobile">
                Dashboard
              </p>
            </div>
            <p className="text_about_info">отдела продажи и CRM системы</p>
          </div>
          <div className="about_info">
            <div className="text_intro_container">
              <hr className="line_about" />
              <p className="text_about_main">35 дней</p>
              <p className="text_about_main container_about_main_mobile">
                Месяц аmoCRM
              </p>
            </div>
            <p className="text_about_info">использования CRM</p>
          </div>
        </div>
        <button className="button">Получить консультацию</button>
      </div>
    </main>
  );
}
