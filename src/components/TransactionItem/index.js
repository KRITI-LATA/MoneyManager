// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetail, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetail

  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-detail">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">{amount}</p>
      <p className="transaction-text">{type}</p>

      <div className="delete-container">
        <button
          type="button"
          className="delete-button"
          onClick={onDeleteTransaction}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
