// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="bg-container">
        <div className="container">
          <div className="initial-name-container">
            <div className="initial">
              <p>{initial}</p>
            </div>
            <p className="para">{name}</p>
          </div>
          <div className="balance-container">
            <p>Your Balance</p>
            <div>
              <p>{balance}</p>
              <br />
              <span className="currency">In Rupees</span>
            </div>
          </div>

          <div>
            <p>Withdraw</p>
            <p>CHOOSE SUM (IN RUPEES)</p>
            <ul className="money-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  key={eachItem.id}
                  denominationDetails={eachItem}
                  updateBalance={this.updateBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
