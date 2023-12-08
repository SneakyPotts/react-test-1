import { Splide, SplideSlide } from '@splidejs/react-splide';
import { ExampleCard, Title } from "../index";
import { ReactComponent as ArrowLeft } from "../../images/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../images/arrow-right.svg";
import styles from './ExampleSection.module.scss'
import '@splidejs/react-splide/css';
// import '@splidejs/react-splide/css/core';

const data = [
  {
    id: '1', img: "/assets/example/example1.png", title: 'Промышленные прототипы',
    description: 'Технология: FDM'
  },
  {
    id: '2', img: "/assets/example/example1.png", title: 'Архитектурные макеты',
    description: 'Технология: SLA'
  },
  {
    id: '3', img: "/assets/example/example1.png", title: 'Ювелирные изделия',
    description: 'Технология: SLA'
  },
  {
    id: '4', img: "/assets/example/example1.png", title: 'Промышленные прототипы',
    description: 'Технология: FDM'
  },
  {
    id: '5', img: "/assets/example/example1.png", title: 'Архитектурные макеты',
    description: 'Технология: SLA'
  },
  {
    id: '6', img: "/assets/example/example1.png", title: 'Ювелирные изделия',
    description: 'Технология: SLA'
  },
]

function ExampleSection() {
  const options = {
    type: 'loop',
    fixedWidth: "470px",
    // perPage: 3,
    perMove: 1,
    gap: '30px',
    pagination: false,
    breakpoints: {
      375: {
        perPage: 2,
        gap: '20px'
      }
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <Title className={styles.exampleSectionTitle}>Примеры работ</Title>
          
          {/*<div className={styles.btnWrapper}>*/}
          {/*<button*/}
          {/*  type="button"*/}
          {/*  className={styles.btnIcon}*/}
          {/*>*/}
          {/*  /!*<ArrowLeft />*!/*/}
          {/*</button>*/}
          {/*<button*/}
          {/*  // style={{ width: '40px', height: '40px', backgroundColor: 'red' }}*/}
          {/*  type="button"*/}
          {/*  className={styles.btnIcon}*/}
          {/*>*/}
          {/*  /!*<ArrowRight />*!/*/}
          {/*</button>*/}
          {/*</div>*/}

        </div>
        <Splide
          options={options}
          // className={styles.exampleList}
        >
          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
              Prev
            </button>
            <button className="splide__arrow splide__arrow--next">
              Next
            </button>
          </div>
          {data.map( ( { id, title, description, img } ) => (
            <SplideSlide key={id}>
              <ExampleCard
                title={title}
                description={description}
                img={img}
              />
            </SplideSlide>
          ) )}
        </Splide>
      </div>
    </>
  )
}

export default ExampleSection;