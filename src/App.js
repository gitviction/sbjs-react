import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GitCoinButton from "./GitCoinButton";

class App extends Component {
  constructor() {
    super();
    this.state = {
      txhash: undefined
    };
  }

  render() {
    const meta = {
      payload: {
        title: "My First Issue",
        description: "This is actually a test issue",
        categories: ["ipfs", "gitcoin"],
        revisions: 0,
        privateFulfillments: false,
        fulfillersNeedApproval: false,
        //tokenAddress: DAIADDRESS,
        difficulty: "Beginner",
        issuer: {
          name: "The GitCoin Critter"
        },
        funders: []
        //symbol: "DAI"
      },
      meta: {
        platform: "gitcoin",
        schemaVersion: "0.1",
        schemaName: "gitcoinBounty"
      }
    };

    return (
      <div className="App">
        {/* <header className="App-header"> */}
          <GitCoinButton
            meta={meta}
            expirydelta={60 * 60 * 24 * 30 * 3}
            value="1"
            onTxHash={hash => {
              this.setState({ txhash: hash });
            }}
          />
          {this.state.txhash && <span>TXhash: {this.state.txhash}</span>}
        {/* </header> */}
      </div>
    );
  }
}

export default App;
