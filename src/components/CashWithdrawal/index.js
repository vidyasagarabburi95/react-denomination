// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    count: 2000,
  }

  sendAmount = value => {
    this.setState(prevState => ({
      count: prevState.count - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {count} = this.state
    const name = 'Srarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="cash-withdraw-container">
          <div className="user-detail-container">
            <div className="initial-container">
              <p className="initial">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <p className="balance">
              {count}

              <br />
              <span className="currency">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">WITHDRAW</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominaton-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denomination={eachDenomination}
                key={eachDenomination.id}
                sendAmount={this.sendAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
