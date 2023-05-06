import React from 'react'
import { ethers } from 'ethers';

export default function ContractInteraction() {
    const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "goerli"
      );
      const ContractAddress = "0x9Fd631352082Cfe456d50Dd9dF698550aF21e2d5";
      const ABI = [
        {
          inputs: [
            {
              internalType: "string",
              name: "a",
              type: "string",
            },
            {
              internalType: "string",
              name: "b",
              type: "string",
            },
          ],
          name: "concatenate",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "pure",
          type: "function",
        },
        {
          inputs: [],
          name: "get",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string",
            },
          ],
          name: "set",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ];
      let Contract;
      let signer;

      provider.send("eth_requestAccounts", []).then(() => {
        provider.listAccounts().then(function (accounts) {
          signer = provider.getSigner(accounts[0]);
          Contract = new ethers.Contract(ContractAddress, ABI, signer);
        });
      });

      async function get() {
        const getPromise = Contract.get();
        const name = await getPromise;
        alert("NAME : " + name);
      }

      async function set(name) {
        const SetName = document.getElementById("name").value;
        const setPromise = Contract.set(SetName);
        const txreciept = await setPromise;
        console.log(txreciept);
      }
  return (
    <div>
      <h1>This is contract Interaction Component</h1>
      <div>
      <p>Here we can set or get the :</p>
      <label for="inputbox">Input:</label> <br />
      <input type="text" id="name" />
      <button onclick="get()">Get</button>
      <button onclick="set()">Set</button>
    </div>
    <h1>Smart Contract Interaction Ends</h1>
    </div>
  )
}
