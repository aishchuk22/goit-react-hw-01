import css from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
  return (
      <table className={css.history}>
          <thead >
              <tr className={css.header}>
                  <th className={css.headerItem}>Type</th>
                  <th className={css.headerItem}>Amount</th>
                  <th className={css.headerItem}>Currency</th>
              </tr>
          </thead>
          <tbody className={css.dataBody}>
              {items.map(transaction => (
                  <tr key={transaction.id}>
                    <td className={css.dataItem}>{transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}</td>
                    <td className={css.dataItem}>{transaction.amount}</td>
                    <td className={css.dataItem}>{transaction.currency}</td>
                  </tr>
              ))}
           </tbody>
      </table>
  )
}

export default TransactionHistory