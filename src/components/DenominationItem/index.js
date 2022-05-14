import './index.css'

const DenominationItem = props => {
  const {denominations, updateBalance} = props
  const {value} = denominations

  const OnClickForDenomination = () => {
    updateBalance(value)
  }
  return (
    <li className="denomination-list">
      <button type="button" onClick={OnClickForDenomination} className="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
