import React, { useState } from "react";
import { token_backend, canisterId,createActor } from "../../../declarations/token_backend";
import { AuthClient } from "@dfinity/auth-client";
function Faucet() {
  const [isDisable,setDisable] = useState(false)
  const [buttonText,setText] = useState("gimme gimme")
  async function handleClick(event) {
    setDisable(true)

    // const authClient = await AuthClient.create();
    // const identity = await authClient.getIdentity();
    // const authenticatedCanister = createActor(canisterId, {
    //   agentOptions:{
    //     identity,
    //   },
    // });
    // const result = await authenticatedCanister.payOut();

    const result = await token_backend.payOut();
    // setDisable(false)
    setText(result)
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DD4rkC4rl tokens here! Claim 10,000 DANG tokens to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisable}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
