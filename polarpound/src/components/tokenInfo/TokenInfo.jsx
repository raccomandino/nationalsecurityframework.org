// import { usePresaleData } from "../../utils/PresaleContext";
import usePresaleInfo from "../../hooks/useContract";
import TokenInfoWrapper from "./TokenInfo.style";

const TokenInfo = ({ variant }) => {
  const { loading, presaleInfo } = usePresaleInfo();
  const tokenName = presaleInfo.name;
  const tokenSymbol = presaleInfo.symbol;
  // console.log('debug token info::', presaleInfo.tokenPerStable)
  return (
    <TokenInfoWrapper variant={variant}>
      <li>
        <p>Token Name | Symbol </p>
        <h6>
          {tokenName} ({tokenSymbol})
        </h6>
      </li>
      <li>
        <p>Current Price</p>
        {loading ? (
          <span className="placeholder col-4"></span>
        ) : (
          <h5>{presaleInfo.tokenPrice} TRX</h5>
        )}
      </li>
      <li>
        <p>Listing Price</p>
        {loading ? (
          <span className="placeholder col-4"></span>
        ) : (
          // <h6>{presaleInfo.listingPrice} TRX</h6>
          <h5>13 TRX</h5>
        )}
      </li>
      <li>
        <p>Total Deposited TRX</p>
        {loading ? (
          <span className="placeholder col-4"></span>
        ) : (
          <h5>{presaleInfo.totalDeposited} TRX</h5>
        )}
      </li>
    </TokenInfoWrapper>
  );
};

export default TokenInfo;
