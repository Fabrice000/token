import React, { useState } from "react";
import { Principal } from "@dfinity/principal";
import { token_backend } from "../../../declarations/token_backend";
function Balance() {
  const [inputValue,setInput] = useState("")
  const [balanceResult,setBalance] = useState("")
  const [symbol,setSymbol] = useState("")
  const [isHidden,setHidden] = useState(true)
  async function handleClick() {
    // console.log(inputValue);
    const principal = Principal.fromText(inputValue);
    const balance = await token_backend.balanceOf(principal);
    const symbol = await token_backend.getSymbol();
    setSymbol(symbol.toLocaleString())
    setBalance(balance.toLocaleString())
    setHidden(false)

    console.log(balance);
    // setBalance(balance); // Update the balance state here to display it in the UI.
    // setLoading(false); // Hide the loading spinner when the balance is retrieved.
    // setErrorMessage(""); // Reset any error message if one occurred.
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={(event)=>setInput(event.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p hidden={isHidden}>This account has a balance of {balanceResult}  {symbol} .</p>
    </div>
  );
}

export default Balance;
