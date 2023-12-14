import styles from './TableDesktop.module.scss'

function TableDesktop( { dataTable } ) {
  const columns = dataTable.map( item => item.header )

  return (
    <table className={styles.table}>
      <thead>
      <tr className={styles.headersColumnsGroup}>
        {columns.map( ( item, idx ) => (
          <th
            className={styles.headerColumnCell}
            key={idx}
          >{item}</th>
        ) )}
      </tr>
      </thead>
      <tbody>
      {dataTable.map( ( { id, material, standard, optimal, high } ) => {
        return (
          <tr
            className={styles.tableRow}
            key={id}
          >
            <th className={styles.tableRowHeader}>{material}</th>
            <td className={styles.tableRowCell}>от {standard} грн/грамм</td>
            <td className={styles.tableRowCell}>от {optimal} грн/грамм</td>
            <td className={styles.tableRowCell}>от {high} грн/грамм</td>
          </tr>
        )
      } )}
      </tbody>
    </table>
  )
}

export default TableDesktop;