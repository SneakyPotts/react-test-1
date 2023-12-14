import { OffersAccordion, Title } from "../index";
import styles from "./OffersSection.module.scss";

const data = [
  {
    id: "1",
    title: "FDM",
    text:
      "Печать методом аддитивного производства: расплавленный пластик (или другой филамент)" +
      " наносится слой за слоем для построения объекта.Для создания изделий из широкого спектра материалов с различными характеристиками и свойствами.",
  },
  {
    id: "2",
    title: "SLA",
    text:
      "Печать методом аддитивного производства: расплавленный пластик" +
      " Для создания изделий из широкого спектра материалов с различными" +
      " характеристиками и свойствами.",
  },
];

function OffersSection() {
  return (
    <div className={styles.offersSection}>
      <div className={styles.offersTitleWrapper}><Title className={styles.offersTitle}> <span
        className={styles.offersTitleAccent}
      >3D</span> -печать </Title></div>
      <div className={styles.container}>
        <p className={styles.offersDescription}>
          Предлагаем услуги 3D-печати для производства прототипов или готовых изделий любой формы,
          цвета и прочности. Готовы производить как единичные экземпляры, так и целые партии для
          мелких и больших производств.
        </p>
        <div className={styles.containerRightSide}>
          <p>В нашей студии используются две основных технологии печати:</p>
          <ul className={styles.offersList}>
            {data.map( ( { id, title, text } ) => (
              <OffersAccordion
                key={id}
                title={title}
                text={text}
              />
            ) )}
          </ul>
          <p> Благодаря высокой точности проработки и качеству материалов можем быть полезны для
            целого ряда отраслей: промышленных стартапов, автомобильного производства, сферы
            архитектуры и медицины, сувениров и произведений искусства.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OffersSection;
