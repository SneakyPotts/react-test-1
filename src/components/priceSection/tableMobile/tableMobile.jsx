import styles from './tableMobile.module.scss'

function TableMobile( { dataTable } ) {

  return (
    <>
      <table>
        <tbody className={styles.tableBody}>
        {dataTable.map( item => (
          <tr
            key={item.id}
            className={styles.tableColumn}
          >
            <tr className={styles.tableCell}>
              <th className={styles.listTitle}>Материал/Высота слоя</th>
              <td className={styles.textList}>{item.material}</td>
            </tr>
            <tr className={styles.tableCell}>
              <th className={styles.listTitle}>Стандартное качество 300 микрон</th>
              <td className={styles.textListStrong}>от {item.standard} грн/грамм</td>
            </tr>
            <tr className={styles.tableCell}>
              <th className={styles.listTitle}>Оптимальное качество 200 микрон</th>
              <td className={styles.textListStrong}>от {item.optimal} грн/грамм</td>
            </tr>
            <tr className={styles.tableCell}>
              <th className={styles.listTitle}>Высокое качество 100 микрон</th>
              <td className={styles.textListStrong}>от {item.high} грн/грамм</td>
            </tr>
          </tr>
        ) )}
        </tbody>
      </table>
    </>
  )
}

export default TableMobile;