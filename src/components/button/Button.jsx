import styles from './Button.module.scss'

function Button( { children, type, addClass } ) {
  return (
    <button
      className={`${addClass} + ${styles.btn}`}
      // className={styles.btn}
      type={type}
    >
      {children}

    </button>
  )
}

export default Button;