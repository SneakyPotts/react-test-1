import styles from './tableMobile.module.scss'

function TableMobile( { dataTable } ) {

  return (

    <div className={styles.content}>
      {dataTable.map( item => (
        <div
          key={item.id}
          className={styles.contentBox}
        >
          <h4 className={styles.listTitle}>Материал/Высота слоя</h4>
          <h3 className={styles.listSubtitle}>{item.material}</h3>
          <h4 className={styles.listTitle}>Стандартное качество 300 микрон</h4>
          <p className={styles.listPrice}>от {item.standard} грн/грамм</p>
          <h4 className={styles.listTitle}>Оптимальное качество 200 микрон</h4>
          <p className={styles.listPrice}>от {item.optimal} грн/грамм</p>
          <h4 className={styles.listTitle}>Высокое качество 100 микрон</h4>
          <p className={styles.listPrice}>от {item.high} грн/грамм</p>
        </div>) )}
    </div>

  )
}

export default TableMobile;