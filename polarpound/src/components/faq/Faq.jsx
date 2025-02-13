import React from "react";
// import "./Faq.css";

const Faq = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="section-header section-header--center section-header--medium-margin">
            <h4>FAQ</h4>
            <h2>Frequently Asked Questions</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <ul className="accordion">
            <li>
              <a>What is LLP?</a>
              <p>
                LLP is a trailblazer in real-world asset tokenization.
                Our innovative approach leverages tokenized assets on our
                proprietary private blockchain offering unparalleled security,
                efficiency and transparency.
              </p>
            </li>
            <li>
              <a>How do I purchase LLP token from presale?</a>
              <p>
                All you need to do is connect your wallet, enter the amount of
                TRX you want to buy the tokens with, and press
                the buy button.
              </p>
            </li>
            {/* <li>
              <a>Which blockchain network is LLP token on?</a>
              <p>
                The LLP token operates on the LLP Blockchain.
                Empower your business with advanced tokenization solutions.
                LLP is at the forefront of real-world asset
                tokenization, leveraging a secure private blockchain to digitize
                assets like real estate, events, and brands. Seamlessly bridge
                traditional assets with the digital economy for unmatched
                efficiency, transparency, and innovation.
              </p>
            </li> */}
            {/* <li>
              <a>How do you add the LLP token to a wallet ?</a>
              <p>
                {`To add LLP token to any wallet use the following info for "Add A New Network"`}
                <br />
                {`Network Name - LLP \n`}
                <br />
                {`New RPC URL - https://main.blocksurety.net:484/`}
                <br />
                {`Chain ID - 484`}
                <br />
                {`Currency Symbol - LLP`}
                <br />
                {`Block Explorer URL - Https://blocksurety.net`}
              </p>
            </li> */}
            <li>
              <a>How can I store and manage my LLP tokens?</a>
              <p>
                LLP tokens can be stored and managed in compatible
                cryptocurrency wallets. We recommend using wallets that support
                the Tron chain, such as TronLink or WalletConnect.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
