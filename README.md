# StandardBounties for REACT

This component allows you to add a button that publishes a StandardBounty from your React App


# Installing

`yarn add gitviction/sbjs-react`

# Usage

```javascript

const meta = {
      payload: {
        title: "My First Issue",
        description: "This is actually a test issue",
        categories: ["ipfs", "gitcoin"],
        revisions: 0,
        privateFulfillments: false,
        fulfillersNeedApproval: false,
        difficulty: "Beginner",
        issuer: {
          name: "The GitCoin Dozer"
        },
        funders: []
      },
      meta: {
        platform: "gitcoin",
        schemaVersion: "0.1",
        schemaName: "gitcoinBounty"
      }
    };

...

<GitCoinButton
            meta={meta}
            expirydelta={60 * 60 * 24 * 30 * 3}
            value="1"
            onTxHash={hash => {
              this.setState({ txhash: hash });
            }}
          />


```

## How does it work ?

Hitting the button:

- publishes the metadata on IPFS
- executes a transaction with the given parameters to the standardbounties contract

Info about the fields of the metadata can be found here : https://github.com/Bounties-Network/StandardBounties/blob/master/docs/gitcoinSchemas.md 
