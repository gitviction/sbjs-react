import React from "react";
import SBJS from "sbjs/src/index";
import HttpProvider from "ethjs-provider-http";

export default class GitCoinButton extends React.Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.sbjs = new SBJS({
      ipfsprovider: {
        host: "ipfs.web3.party",
        port: 5001,
        protocol: "https"
      },
      web3provider: new HttpProvider("http://localhost:8545")
    });
  }

  gitcoinIt() {
    const now = (new Date().getTime() / 1000) | 0;
    var meta = Object.assign({}, this.props.meta);
    meta.payload.created = now;

    let paysTokens = false;
    let tokenContract = "0x0000000000000000000000000000000000000000";

    if (this.props.tokencontract) {
      paysTokens = true;
      tokenContract = this.props.tokencontract;
    }

    this.sbjs
      .issueAndActivateBounty(
        meta,
        this.props.expirydelta + now,
        this.props.value,
        this.props.arbiter,
        paysTokens,
        tokenContract,
        this.props.value
      )
      .then(txhash => {
        this.props.onTxHash && this.props.onTxHash(txhash);
      });
  }

  render() {
    return (
      <input
        type="button"
        value="GitCoin it"
        onClick={e => {
          this.gitcoinIt();
        }}
      />
    );
  }
}
