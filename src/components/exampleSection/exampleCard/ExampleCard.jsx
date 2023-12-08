import styles from './ExampleCard.module.scss'
import { ReactComponent as MagnifyingGlass } from "../../../images/magnifying-glass.svg";

function ExampleCard( { img, title, description } ) {
  return (
    <>
      <div
        // className={styles.exampleCard}
      >
        <img
          // className={styles.exampleCarImg}
          src={img}
          alt={description}
          width='300'
          height='236'
        />
        <button
          className={styles.magnifyingGlassIconBtn}
          type="button"
        >
          <MagnifyingGlass />
        </button>
        <div className={styles.descriptionExampleCarImg}>
          <h4 className={styles.descriptionTitle}>{title}</h4>
          <p className={styles.descriptionText}>{description}</p>
        </div>
      </div>

    </>
  )
}

export default ExampleCard;