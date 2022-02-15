import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { incrementByValue, decrementByValue } from "../redux/atmSlice"

function ATM() {
  const dispatch = useDispatch();
  const { atm } = useSelector((state) => state.atm);
  const [money, setMoney] = useState(0)

  const handleAddCustomMoney = () => {
    let value = +document.querySelector("#addCustom").value
    if (money >= 0) {
      setMoney(value)
    } else {
      console.log("Please choose a positive value");
    }
  }

  const handleCustomDeposit = () => {
    dispatch(incrementByValue(money));
  }

  const handleCustomWithdraw = () => {
    if(atm > money){
      dispatch(decrementByValue(money))
    } else {
      console.log(`You can't withdraw ${money} kr from your account! you only have ${atm} kr in your account!`);
    }
  }

  const handleAddByValue = (value) => {
    dispatch(incrementByValue(value));
  }

  const handleSubByValue = (value) => {
    if (atm >= value) {
      dispatch(decrementByValue(value))
    } else {
      console.log(`You can't withdraw ${value} kr from your account! you only have ${atm} kr in your account!`);
    }
  }

  return (
    <div style={{ border: "1px solid white" }}>
      <div>
        <span style={{ display: "block" }}>Deposit/Withdraw: </span>
        <span style={{ display: "block" }}>{money} kr</span>
        <div>
          <input type="text" id='addCustom' onChange={() => { handleAddCustomMoney() }} />
          <button onClick={() => { handleCustomDeposit() }}>Deposit</button>
          <button onClick={() => { handleCustomWithdraw() }}>Withdraw</button>
        </div>
        <button onClick={() => { handleAddByValue(100) }}>+100</button>
        <button onClick={() => { handleAddByValue(200) }}>+200</button>
        <button onClick={() => { handleAddByValue(500) }}>+500</button>
        <button onClick={() => { handleAddByValue(1000) }}>+1000</button>
        <div>
          <button onClick={() => { handleSubByValue(100) }}>-100</button>
          <button onClick={() => { handleSubByValue(200) }}>-200</button>
          <button onClick={() => { handleSubByValue(500) }}>-500</button>
          <button onClick={() => { handleSubByValue(1000) }}>-1000</button>
        </div>

      </div>
      <h2>Money: {atm} kr</h2>
    </div>
  )
}

export default ATM