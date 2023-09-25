import './index.css'

const DenominationItem = props => {
  const {denomination, sendAmount} = props
  const {value} = denomination

  const changeAmount = () => {
    sendAmount(value)
  }

  return (
    <li className="button-container">
      <button
        className="denominationButton"
        type="button"
        onClick={changeAmount}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
