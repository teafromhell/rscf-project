import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import styles from "../styles/Header.module.scss";
import {FaTelegramPlane, FaYoutube, FaVimeo} from 'react-icons/fa'

function Header() {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <h1>РНФ</h1>
        <ul className={styles.nav_center}>
          <li>
            <div className={styles.dropdown}>
              <p className={styles.link}>Конкурсы</p>
              <MdKeyboardArrowDown className={styles.arrow_down} size={17} />
              <MdKeyboardArrowUp className={styles.arrow_up} size={17} />
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
              <MdKeyboardArrowDown className={styles.arrow_down} size={17} />
              <MdKeyboardArrowUp className={styles.arrow_up} size={17} />
              <div className={styles.dropdown_menu}>
                <p>Общие сведения</p>
                <p>Органы управления</p>
                <p>Международное сотрудничество</p>
                <p>Хозяйственная деятельность</p>
                <p>Результаты 2020</p>
                <br />
                <p>Эмблема</p>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.dropdown}>
              <p className={styles.link}>Новости</p>
              <MdKeyboardArrowDown className={styles.arrow_down} size={17} />
              <MdKeyboardArrowUp className={styles.arrow_up} size={17} />
              <div className={styles.dropdown_menu}>
                <p>Новости Фонда</p>
                <br /> <p>СМИ о Фонде</p>
                <br />
                <p>Интервью</p>
                <br />
                <p>Пресс-релизы</p>
                <br />
                <p>Дайджесты</p>
                <p>Спецпроект «Неизвестные герои науки»</p>
                <p>Спецпроект «Архитектура российской науки»</p>
                <p>Спецпроект «Разговоры за жизнь»</p>
                <p>Спецпроект «Наука в формате 360°»</p>
                <p>Рассказать об исследовании</p>
              </div>
            </div>
          </li>
          <li>
            <p>Документы</p>
          </li>
          <li>
            <p>Контакты</p>
          </li>
          <li>
            <p>ИАС</p>
          </li>
        </ul>
        <ul className={styles.nav_right}>
          <IoSearchOutline size={25} style={{ color: "white" }} />
          <li style={{ padding: "0 40px" }}>ENG</li>
          <GiHamburgerMenu size={25} style={{ color: "white" }} />
        </ul>
      </nav>

      <div className={styles.title}>
        <div className={styles.header_title}>
          <h1>Создавая</h1>
          <h1>Фундамент</h1>
          <h1>Будущего</h1>
        </div>

        <div className={styles.text_title}>
          <span>
            Фонд позволяет лучшим научным коллективам
            <br />
            воплощать в жизнь амбициозные проекты
            <br />
            и получать результаты мирового уровня
            <br />
            для науки, экономики и общества
          </span>
        </div>

        <button className={styles.button_title}>Узнать о конкурсах</button>
      </div>
      <div className={styles.bottom_nav}>
        <div className={styles.arrow_news}>
          <MdKeyboardArrowDown size={30} />
          <p>К новостям</p>
        </div>
        <div className={styles.icons}>
          <FaTelegramPlane className={styles.icon} size={20}/>
          <FaYoutube className={styles.icon} size={20}/>
          <FaVimeo className={styles.icon} size={20}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
