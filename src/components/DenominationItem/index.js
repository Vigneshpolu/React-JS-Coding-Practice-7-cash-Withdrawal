// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="list">
      <button type="button" onClick={onClickDenomination} className="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
