import React from 'react'
import styles from '../styles/Articles.module.scss'
import acid from '../assets/acid.jpg'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function Articles() {
  return (
    <div>
        <div className={styles.article}>
            <img src={acid} alt="acid" />
            <p>22 августа, 2022</p>
            <h2>Ученые разработали новый безопасный источник азотистоводородной кислоты</h2>
            <p>Российские ученые предложили способ синтеза нового, стабильного и невзрывоопасного источника</p>
            <div>
            <h5>Химия и материалы</h5>
            <div className={styles.news_header_right}>
          <p>Читать</p>
          <HiOutlineArrowNarrowRight className={styles.news_arrow} size={20} />
        </div>
            </div>
            
        </div>
    </div>
  )
}

export default Articles