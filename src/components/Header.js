import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import styles from "../styles/Header.module.scss";
import { FaTelegramPlane, FaYoutube, FaVimeo } from "react-icons/fa";

function Header() {
  const arr = [styles.one, styles.two, styles.three, styles.four, styles.five];
  const [backImage, setBackImage] = useState(styles.one);
  const [drawer, setDrawer] = useState(false);
  const [toggleIcon, setToggleIcon] = useState(styles.toggler);

  useEffect(() => {
    let count = 0;
    function changeBack() {
      setBackImage(arr[count]);
      if (count === arr.length - 1) {
        count = 0;
      } else {
        count++;
      }
      setTimeout(changeBack, 10000);
    }
    changeBack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sidebarToggle = () => {
    setDrawer(!drawer);
    drawer
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");

    toggleIcon === styles.toggler
      ? setToggleIcon(`${styles["toggle"]} ${styles["toggler"]}`)
      : setToggleIcon(styles.toggler);
  };

  const goBack = () => {
    setDrawer(false);
    setToggleIcon(styles.toggler);

    document.body.style.overflow = "auto";
  };

  return (
    <header className={`${styles.header} ${backImage}`}>
      <nav className={styles.nav}>
        <h1>РНФ</h1>
        <ul className={`${styles.nav_center}`}>
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
          <IoSearchOutline
            className={styles.icon_search}
            size={25}
            style={{ color: "white", cursor: "pointer" }}
            onClick={sidebarToggle}
          />
          <li
            style={{ padding: "0 20px" }}
            className={`${toggleIcon} ${styles.eng}`}
          >
            ENG
          </li>

          <div onClick={sidebarToggle} className={toggleIcon}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
        </ul>
      </nav>

      {drawer && (
        <div
          onClick={goBack}
          className={`${styles.overlay} ${drawer ? styles.active : ""}`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`${styles.sidebar} ${
              drawer ? styles.active_sidebar : ""
            }`}
          >
            <div className={styles.input_wrapper}>
              <input
                className={styles.input_sidebar}
                type="text"
                placeholder="Поиск"
              />
              <IoSearchOutline className={styles.input_icon} size={32} />
            </div>

            <div className={styles.container_menu}>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <div className={styles.sidebar_li}>
                    <div className={styles.sidebar_li_title}>
                      <MdKeyboardArrowDown size={27} />
                      <MdKeyboardArrowUp size={27} />
                      <h1>конкурсы</h1>
                    </div>
                    <div className={styles.sidebar_li_body}>
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
                  <div className={styles.sidebar_li}>
                    <div className={styles.sidebar_li_title}>
                      <MdKeyboardArrowDown size={27} />
                      <MdKeyboardArrowUp size={27} />
                      <h1>о фонде</h1>
                    </div>

                    <div className={styles.sidebar_li_body}>
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
                  <div className={styles.sidebar_li}>
                    <div className={styles.sidebar_li_title}>
                      <MdKeyboardArrowDown size={27} />
                      <MdKeyboardArrowUp size={27} />
                      <h1>новости</h1>
                    </div>

                    <div className={styles.sidebar_li_body}>
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
                  </div>
                </li>
                <li>
                  <div className={styles.sidebar_li}>
                    <div className={styles.sidebar_li_title}>
                      <MdKeyboardArrowDown size={27} />
                      <MdKeyboardArrowUp size={27} />
                      <h1>документы</h1>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles.sidebar_li}>
                    <div className={styles.sidebar_li_title}>
                      <MdKeyboardArrowDown size={27} />
                      <MdKeyboardArrowUp size={27} />
                      <h1>контакты</h1>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles.sidebar_li}>
                    <div className={styles.sidebar_li_title}>
                      <MdKeyboardArrowDown size={27} />
                      <MdKeyboardArrowUp size={27} />
                      <h1>иас</h1>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
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
          <a href="#news">К новостям</a>
        </div>
        <div className={styles.icons}>
          <FaTelegramPlane className={styles.icon} size={20} />
          <FaYoutube className={styles.icon} size={20} />
          <FaVimeo className={styles.icon} size={20} />
        </div>
      </div>
    </header>
  );
}

export default Header;
