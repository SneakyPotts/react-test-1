import styles from './AdvantagesCard.module.scss'

function AdvantagesCard( { icon, title, text } ) {
  return (
    <li className={styles.advantagesCardItem}>
      <div className={styles.advantagesCardIconWrapper}>
        {icon}
      </div>
      <div className={styles.advantagesCardTextWrapper}>
        <h4 className={styles.advantagesCardTitle}>{title}</h4>
        <p className={styles.advantagesCardText}>{text}</p>
      </div>
    </li>
  )
}

export default AdvantagesCard;