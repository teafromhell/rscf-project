import React from "react";
import styles from "../styles/Footer.module.scss";
import { FaTelegramPlane, FaYoutube, FaVimeo } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className={styles.wrapper}>
      <ul className={styles.nav_center}>
        <li>
          <div className={styles.dropdown}>
            <p className={styles.link}>Конкурсы</p>
            <div className={styles.dropdown_menu}>
              <p>Экспертиза</p>
              <p>Государственные премии</p>
              <p>Президентская программа</p>
              <p>Классификатор</p>
              <p>Поиск проектов</p>
              <p>Вопросы и ответы</p>
              <p>COVID-19</p>
              <p>Как стать экспертом РНФ</p>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.dropdown}>
            <p className={styles.link}>О фонде</p>
            <div className={styles.dropdown_menu}>
              <p>Общие сведения</p>
              <p>Органы управления</p>
              <p>Международное сотрудничество</p>
              <p>Хозяйственная деятельность</p>
              <p>Результаты 2020</p>
              <p>Эмблема</p>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.dropdown}>
            <p className={styles.link}>Новости</p>
            <div className={styles.dropdown_menu}>
              <p>Новости Фонда</p>
              <p>СМИ о Фонде</p>
              <p>Интервью</p>
              <p>Пресс-релизы</p>
              <p>Дайджесты</p>
              <p>Спецпроект «Неизвестные герои науки»</p>
              <p>Спецпроект «Архитектура российской науки»</p>
              <p>Спецпроект «Разговоры за жизнь»</p>
              <p>Спецпроект «Наука в формате 360°»</p>
              <p>Рассказать об исследовании</p>
            </div>
            <p className={styles.link}>Документы</p>
          </div>
        </li>
        <li>
          <p className={styles.link}>Контакты</p>
          <div className={styles.contacts}>
            <h4>МОСКВА, УЛ. СОЛЯНКА 14, СТР. 3</h4>
            <h4>+7 (499) 606 0202</h4>
            <p>Для прессы</p>
          </div>
        </li>
      </ul>
      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottom_left}>
          <p>Политика обработки персональных данных</p>
          <p>Противодействие коррупции</p>
        </div>
        <div className={styles.icons}>
          <FaTelegramPlane className={styles.icon} size={20} />
          <FaYoutube className={styles.icon} size={20} />
          <FaVimeo className={styles.icon} size={20} />
        </div>
      </div>
    </div>
    <div className={styles.copyright}>
        <p>© 2022, «Российский научный фонд». Все права защищены.</p>
    </div>
    </>
  );
}

export default Footer;
