import { ReactComponent as MagnifyingGlass } from "../../../images/magnifying-glass.svg";
import styles from './ExampleCard.module.scss'

function ExampleCard( { img, title, description } ) {
  return (
    <>
      <div
        className={styles.card}
      >
        <picture className={styles.exampleCardImg}>
          <source
            srcSet="/assets/example/example-desktop.webp"
            media="(min-width: 450px)"
            type="image/webp"
          />
          <source
            srcSet="/assets/example/example-desktop.jpg"
            media="(min-width: 450px)"
          />
          <source
            srcSet="/assets/example/example-mobile.webp"
            media="(max-width: 345px)"
            type="image/webp"
          />
          <source
            srcSet="/assets/example/example-mobile.jpg"
            media="(max-width: 345px)"
          />
          <img
            src="/assets/example/example-mobile.jpg"
            alt="example"
            width="300"
          />
        </picture>
        <button
          className={styles.magnifyingGlassIconBtn}
          type="button"
        >
          <MagnifyingGlass/>
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