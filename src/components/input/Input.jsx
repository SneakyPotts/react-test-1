import styles from './Input.module.scss'

function Input( { type, name, classInput, classSpan, placeholder } ) {
  return (
    <label className={styles.label}>
      <span className={classSpan}>{name}</span>
      <input
        className={classInput}
        type={type}
        placeholder={placeholder}
      />
    </label>
  )
}

export default Input;