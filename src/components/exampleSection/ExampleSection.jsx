import { Splide, SplideSlide } from '@splidejs/react-splide';
import cn from 'classnames'
import { ExampleCard, Title } from "../index";

import styles from './ExampleSection.module.scss'
import '@splidejs/splide/css/core';

const data = [
  {
    id: '1', img: "/assets/example/example-mobile-1.png", title: 'Промышленные прототипы',
    description: 'Технология: FDM'
  },
  {
    id: '2', img: "/assets/example/example-mobile-1.png", title: 'Архитектурные макеты',
    description: 'Технология: SLA'
  },
  {
    id: '3', img: "/assets/example/example-mobile-1.png", title: 'Ювелирные изделия',
    description: 'Технология: SLA'
  },
  {
    id: '4', img: "/assets/example/example-mobile-1.png", title: 'Промышленные прототипы',
    description: 'Технология: FDM'
  },
  {
    id: '5', img: "/assets/example/example-mobile-1.png", title: 'Архитектурные макеты',
    description: 'Технология: SLA'
  },
  {
    id: '6', img: "/assets/exampleexample-mobile-1.pngpng", title: 'Ювелирные изделия',
    description: 'Технология: SLA'
  },
]

function ExampleSection() {
  const options = {
    type: 'loop',
    perPage: 3,
    fixedWidth: '30rem',
    perMove: 1,
    gap: 30,
    pagination: false,
    breakpoints: {
      400: {
        perPage: 2,
        fixedWidth: '19rem',
        gap: 20,
      }
    },

    classes: {
      arrows: cn( 'splide__arrows', styles.arrows ),
      arrow: cn( 'splide__arrow', styles.arrow ),
      prev: cn( 'splide__arrow--prev', styles.prev ),
      next: cn( 'splide__arrow--next', styles.next ),
    }
  }

  return (
    <>
      <div className={styles.container}>
        <Title className={styles.exampleSectionTitle}>Примеры работ</Title> <Splide
        options={options}
      >
        {data.map( ( { id, title, description, img } ) => (
          <SplideSlide key={id}> <ExampleCard
            title={title}
            description={description}
            img={img}
          /> </SplideSlide>
        ) )}
      </Splide>
      </div>
    </>
  )
}

export default ExampleSection;