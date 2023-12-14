import styles from './MakeCard.module.scss'

function MakeCard( { img, title, text } ) {
  return (
    <>
      <li className={styles.makeCard__item}>
        <img
          src={img}
          alt=""
          className={styles.makeCard__img}
          width="200"
          height="163"
        />
        <h3 className={styles.makeCard__item__title}>{title}</h3>
        <p className={styles.makeCard__descr}>{text}</p>
      </li>
    </>
  )
}

export default MakeCard;