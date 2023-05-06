import React, { useEffect } from "react";
import { ethers } from "ethers";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Update } from "./states/reducers/userDetails";
import { useSelector } from "react-redux";

export default function Wallet() {
  const userDetails = useSelector((state) => state.userDetails);
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const dispatch = useDispatch();

  const connectWalletHandler = () => {
    if (window.ethereum) {
      //metamask installed
      window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        accountChangeHandler(res[0]);
      });
    } else {
      setErrorMessage("Install Metamask");
    }
  };

  const accountChangeHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount.toString());
};

  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((bal) => {
        setUserBalance(ethers.utils.formatEther(bal));
      });
  };

  window.ethereum.on("accountsChanged", accountChangeHandler);

useEffect(()=>{
    if (defaultAccount!==null)
    {
        dispatch(Update(defaultAccount.toString()))
        console.log(userDetails)
    }

},[userBalance,defaultAccount])

  return (
    <div>
      <div className="wallet Card">
        <button onClick={connectWalletHandler}>{connButtonText}</button>
        <div className="accountDisplay"></div>
        <h3> Address: {defaultAccount} </h3>
        <div className="balanceDisplay">
          <h3> Balance: {userBalance} </h3>
        </div>{" "}
        {errorMessage}
      </div>
    </div>
  );
}
