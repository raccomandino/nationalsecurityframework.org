import { CopyToClipboard } from "react-copy-to-clipboard";
import { useWallet } from "@tronweb3/tronwallet-adapter-react-hooks";
import { WalletActionButton } from "@tronweb3/tronwallet-adapter-react-ui";
import { toast } from "react-toastify";
import axios from "axios";
import Image from "next/image";
import BannerWrapper from "./Banner.style";
import DocumentIcon from "../../assets/images/icons/document-text.svg";
import PresaleLiveTextIcon from "../../assets/images/icons/presale-live-text.svg";
import Abstrac1 from "../../assets/images/banner/abstrac-1.png";
import Abstrac2 from "../../assets/images/banner/abstrac-2.png";
import { FiArrowDownRight } from "react-icons/fi";
import { HiArrowLeft } from "react-icons/hi2";
import Button from "../button/Button";
import SmoothSlider from "../smooth-slider/SmoothSlider";
import Progressbar from "../progressbar/Progressbar";
import Countdown from "../countdown/Countdown";
import BannerData, {
  AboutData,
  PowerData,
  How2Buy,
  BuySteps,
  Economics,
  TokenDistribution,
} from "../../assets/data/bannerV9";
import TokenInfo from "../tokenInfo/TokenInfo";
import StatusIcon from "../../assets/images/icons/status.png";
import BSureBrand from "../../assets/images/bsure-brand.png";
import Brand from "../../assets/images/brand.png";
import SmoothSliderData from "../smooth-slider/SmoothSliderData";
import { PowerSlideData } from "../../assets/data/smoothSliderData";
import Roadmap from "../roadmap/Roadmap";
import Faq from "../faq/Faq";
import BnbLogo from "../../assets/images/token/bnb.png";
import UsdtLogo from "../../assets/images/token/usdt.png";
import trxLogo from "../../assets/images/token/trx.png";
import {
  SALE_OWNER_ADDR,
  TRON_PRESALE_ADDR,
  SALE_TOKEN,
  TOKEN_DECIMALS,
  EXCHANGE_API_KEY,
  EXCHANGERATE_API_KEY,
} from "../../constants";
import CopiedLogo from "../../assets/images/copied.svg";
import CopyLogo from "../../assets/images/copy.svg";
import { useEffect, useState } from "react";
import usePresaleInfo, { useManageSale } from "../../hooks/useContract";
import useRefresh from "../../hooks/useRefresh";
import { tronWeb } from "../../pages/api/tronweb";
import saleAbi from "../../abi/tronsale.json";
import trc20Abi from "../../abi/trc20.json";

const Banner = () => {
  const { address, connected } = useWallet();
  const [isBuyNow, setIsBuyNow] = useState(false);
  const [llpBalance, setLlpBalance] = useState(0);
  const [trxBalance, setTrxBalance] = useState(0);
  const [claimBalance, setClaimBalance] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [buyLlpAmount, setBuyLlpAmount] = useState(0);
  const [selectedPay, setSelectedPay] = useState(0);
  const [copiedCA, setCopiedCA] = useState(false);
  const [copiedSA, setCopiedSA] = useState(false);
  const [trxPrice, setTrxPrice] = useState(0);
  const [gbp2Usd, setGbp2Usd] = useState(1);
  const [eur2Usd, setEur2Usd] = useState(1);

  const { presaleInfo, loading, presaleContract, llpTokenContract } =
    usePresaleInfo();
  const { transactionPending, buyTokenWithTRX } = useManageSale();
  const { slowRefresh, fastRefresh, apiRefresh } = useRefresh();

  const onCopyCA = () => {
    setCopiedCA(true);
    window.setTimeout(() => {
      setCopiedCA(false);
    }, 3000);
  };

  const onCopySA = () => {
    setCopiedSA(true);
    window.setTimeout(() => {
      setCopiedSA(false);
    }, 3000);
  };
  const nowTs = Math.floor(Date.now() / 1000);

  const toggleBuyNow = () => setIsBuyNow((prev) => !prev);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleBuy = async () => {
    const currentTS = Date.now();
    if (currentTS < Number(presaleInfo.startTime) * 1000) {
      toast.error("Current Sale was not started yet!");
      return;
    }
    if (currentTS > Number(presaleInfo.endTime) * 1000) {
      toast.error("Current Sale was ended already!");
      return;
    }
    await buyTokenWithTRX(inputValue);
  };

  useEffect(() => {
    setBuyLlpAmount(inputValue / presaleInfo.tokenPrice);
  }, [inputValue, presaleInfo.tokenPrice]);

  useEffect(() => {
    if (isBuyNow) {
      document.querySelector(".gittu-banner-card").classList.add("flip");
    }

    if (!isBuyNow) {
      document.querySelector(".gittu-banner-card").classList.remove("flip");
    }
  }, [isBuyNow]);

  useEffect(() => {
    async function fetchTrxPrice() {
      try {
        const response = await fetch(
          "https://apilist.tronscanapi.com/api/token/price?token=trx"
        );
        const data = await response.json();
        // console.log("debug fetch TRX::", data);
        if (data.price_in_usd) {
          setTrxPrice(parseFloat(data.price_in_usd));
        }
      } catch (error) {
        console.error("Error fetching TRX price:", error);
      }
    }
    fetchTrxPrice();
  }, [slowRefresh, loading]);

  useEffect(() => {
    async function fetchCurrencyPrice() {
      try {
        const gbpResponse = await axios.get(
          `https://v6.exchangerate-api.com/v6/${EXCHANGERATE_API_KEY}/pair/USD/GBP`
        );
        console.log("debug eur res::", gbpResponse);
        if (gbpResponse.data) {
          setGbp2Usd(gbpResponse.data.conversion_rate);
        }
        const eurResponse = await axios.get(
          `https://v6.exchangerate-api.com/v6/${EXCHANGERATE_API_KEY}/pair/USD/EUR`
        );
        if (eurResponse.data) {
          setEur2Usd(eurResponse.data.conversion_rate);
        }
        // const eurData = await eurResponse.json();
        // if (eurData) {
        //   setEur2Usd(eurData);
        // }
        // const gbpResponse = await fetch(
        //   "https://api.excelapi.org/currency/rate?pair=gbp-usd"
        // );
        // const gbpData = await gbpResponse.json();
        // if (gbpData) {
        //   setGbp2Usd(gbpData);
        // }
      } catch (error) {
        console.error("Error fetching TRX price:", error);
      }
    }

    fetchCurrencyPrice();
  }, [apiRefresh, loading]);

  useEffect(() => {
    async function fetchAccountInfo() {
      if (address && connected && presaleContract && llpTokenContract) {
        try {
          const tradeobj = await tronWeb.trx.getAccount(address);
          const balance = tradeobj.balance;
          const bnLlpBalance = await llpTokenContract
            .balanceOf(address)
            .call({ from: SALE_OWNER_ADDR });
          const bnClaimTokens = await presaleContract
            .tokensUnclaimed(address)
            .call({ from: SALE_OWNER_ADDR });
          setTrxBalance(balance / 1e6); // Convert from Sun to TRX
          setLlpBalance(Number(bnLlpBalance / Math.pow(10, TOKEN_DECIMALS)));
          setClaimBalance(Number(bnClaimTokens / Math.pow(10, TOKEN_DECIMALS)));
        } catch (error) {
          console.error("Error fetching TRX balance:", error);
        }
      }
    }

    fetchAccountInfo();
  }, [
    address,
    connected,
    fastRefresh,
    fastRefresh,
    presaleContract,
    llpTokenContract,
  ]);

  return (
    <BannerWrapper>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="gittu-banner-left">
              <h1 className="banner-title">{BannerData.title}</h1>
              <h3 className="text-black">{BannerData.titleExtra}</h3>
              <h5 className="mt-15 text-black">{BannerData.subtitle}</h5>

              <div className="mt-40 mb-40">
                <a
                  className="whitepaper-btn"
                  href="https://nationalsecurityframework.org/polarpound/public/assets/White%20Paper%20for%20Lighter%20Ledger%20Pound%20(LLP)%20(Polar%20Pound)%20Presale%20&%20Launch%20(February%202025).pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={DocumentIcon.src} alt="icon" />
                  Whitepaper
                </a>
              </div>

              <ul className="gittu-banner-list">
                <li>
                  Total Supply: {presaleInfo.totalSupply.toLocaleString()}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="gittu-banner-right">
              <div className="overlay">
                <a href="#" className="presale-live-btn">
                  <img src={PresaleLiveTextIcon.src} alt="Presale live" />
                  <span className="icon">
                    <FiArrowDownRight />
                  </span>
                </a>
              </div>
              <div className="gittu-banner-card">
                <div className="gittu-banner-card-inner">
                  <div className="bg-shape">
                    <div className="bg-shape-img img-1">
                      <img src={Abstrac1.src} alt="shape" />
                    </div>
                    <div className="bg-shape-img img-2">
                      <img src={Abstrac2.src} alt="shape" />
                    </div>
                  </div>

                  {isBuyNow ? (
                    <div className="card-content">
                      <button
                        className="presale-back-btn"
                        onClick={toggleBuyNow}
                      >
                        <HiArrowLeft />
                      </button>

                      <div className="presale-item mb-20">
                        <div className="presale-item-inner">
                          {loading ? (
                            <span className="placeholder col-4"></span>
                          ) : selectedPay == 0 ? (
                            <h5 className="fw-600 text-uppercase text-black">
                              1 {presaleInfo.symbol} = {presaleInfo.tokenPrice}{" "}
                              TRX
                            </h5>
                          ) : (
                            <h5 className="fw-600 text-uppercase text-black">
                              1 USDT
                            </h5>
                          )}
                        </div>
                      </div>

                      <div className="presale-item mb-25">
                        <div className="presale-item-inner">
                          <button
                            className={`buy-token ${
                              selectedPay == 0 ? "pay-active" : ""
                            }`}
                            onClick={() => {
                              setSelectedPay(0);
                            }}
                          >
                            <img
                              src={trxLogo.src}
                              alt="trx"
                              style={{ width: 30 }}
                            />
                            Pay with TRX
                          </button>
                          <div className="d-flex justify-content-between">
                            <h5 className="balance-sub">Balance:</h5>
                            <h5 className="balance-sub">
                              {trxBalance.toLocaleString()} TRX
                            </h5>
                          </div>
                        </div>
                        {/* <div className="presale-item-inner">
                          <button
                            className={`buy-token ${
                              selectedPay == 1 ? "pay-active" : ""
                            }`}
                            onClick={() => {
                              setSelectedPay(1);
                            }}
                          >
                            <img
                              src={UsdtLogo.src}
                              alt="usdt"
                              style={{ width: 30 }}
                            />
                            Pay with USDT
                          </button>
                          <div className="d-flex justify-content-between">
                            <h6 className="balance-sub">Balance:</h6>
                            <h6 className="balance-sub">
                              300 USDT
                            </h6>
                          </div>
                        </div> */}
                      </div>

                      <div className="presale-item">
                        <div className="presale-item-inner">
                          <h5>
                            {" "}
                            Amount{" "}
                            <span
                              style={{ fontSize: "15px", fontWeight: "bold" }}
                            >
                              {selectedPay == 0 ? "TRX" : "USDT"}
                            </span>
                          </h5>
                          <input
                            type="number"
                            placeholder="0"
                            value={inputValue}
                            onChange={handleInput}
                          />
                        </div>
                        <div className="presale-item-inner">
                          <h5>Get Amount ( {presaleInfo.symbol} )</h5>
                          <input
                            type="text"
                            placeholder="0"
                            value={buyLlpAmount.toFixed(3)}
                            disabled
                            style={{ cursor: "not-allowed" }}
                          />
                        </div>
                      </div>
                      {/*
                      <div className="presale-item mt-2 mb-30 px-1">
                        <label className="d-flex gap-2">
                          <input type="radio" name="currency" value="usd" />
                          <span className="currency-symbol">$</span>{" "}
                          {parseFloat((inputValue * trxPrice).toFixed(3))}
                        </label>
                        <label className="d-flex gap-2">
                          <input type="radio" name="currency" value="gbp" />
                          <span className="currency-symbol">&pound;</span>{" "}
                          {parseFloat(
                            (inputValue * trxPrice * gbp2Usd).toFixed(3)
                          )}
                        </label>
                        <label className="d-flex gap-2">
                          <input type="radio" name="currency" value="eur" />
                          <span className="currency-symbol">&euro;</span>{" "}
                          {parseFloat(
                            (inputValue * trxPrice * eur2Usd).toFixed(3)
                          )}
                        </label>
                      </div>*/}
                      <ul className="token-info-list mb-35">
                        <li>
                          <p>{presaleInfo.symbol} Balance</p>
                          <p>
                            {llpBalance.toLocaleString()} {presaleInfo.symbol}
                          </p>
                        </li>
                        <li>
                          <p>Claimable Amount</p>
                          <p>
                            {claimBalance.toLocaleString()} {presaleInfo.symbol}
                          </p>
                        </li>
                      </ul>

                      {!connected ? (
                        <WalletActionButton className="connect-wallet-btn" />
                      ) : transactionPending ? (
                        <Button size="large" disabled>
                          pending...
                        </Button>
                      ) : (
                        <Button size="large" onClick={handleBuy}>
                          Buy with TRX
                        </Button>
                      )}
                    </div>
                  ) : (
                    <div className="card-content">
                      {/* <p className="presale-stage-title text-uppercase">
                        Stage {currentStage}: {currentBonus}% Bonus!
                      </p> */}
                      {nowTs < parseInt(presaleInfo.startTime) && (
                        <>
                          <h5 className="fw-600 text-black text-uppercase">
                            Pre-sale starts in
                          </h5>

                          <div className="mt-1 mb-17">
                            <Countdown
                              endDate={parseInt(presaleInfo.startTime)}
                            />
                          </div>
                        </>
                      )}
                      {nowTs >= parseInt(presaleInfo.startTime) &&
                        nowTs < parseInt(presaleInfo.endTime) && (
                          <>
                            <h5 className="fw-600 text-black text-uppercase">
                              Pre-sale ends in
                            </h5>

                            <div className="mt-1 mb-17">
                              <Countdown
                                endDate={parseInt(presaleInfo.endTime)}
                              />
                            </div>
                          </>
                        )}
                      {nowTs >= parseInt(presaleInfo.endTime) && (
                        <>
                          <h5 className="fw-600 text-black text-uppercase">
                            Pre-sale ended
                          </h5>

                          <div className="mt-1 mb-17">
                            <Countdown
                              endDate={parseInt(presaleInfo.endTime)}
                            />
                          </div>
                        </>
                      )}
                      <div className="mb-15">
                        <Progressbar done={0} />
                      </div>

                      <div className="presale-raised fw-500 mb-25">
                        <p className="fs-15 text-black">
                          Sold: {presaleInfo.totalTokenSold}{" "}
                          {presaleInfo.symbol}
                        </p>
                        <p className="fs-15 text-black">
                          Goal: 500,000,000 {presaleInfo.symbol}
                        </p>
                      </div>

                      <div className="presale-raised fw-500 mb-25">
                        <p className="fs-15 text-black">
                          Raised: ${" "}
                          {(
                            presaleInfo.totalTokenSold *
                            trxPrice *
                            presaleInfo.tokenPrice
                          ).toFixed(2)}
                        </p>
                        <p className="fs-15 text-black">
                          Goal: ${" "}
                          {(
                            500000000 *
                            trxPrice *
                            presaleInfo.tokenPrice
                          ).toLocaleString(2)}
                        </p>
                      </div>

                      <div className="mb-35">
                        <TokenInfo />
                      </div>

                      <Button size="large" onClick={toggleBuyNow}>
                        Buy {presaleInfo.symbol} Token
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <section id="about" style={{ marginTop: "36px" }}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="gittu-banner-left">
                <h6 className="mt-15" style={{ color: "rgb(00 00 00)" }}>
                  {" "}
                  {AboutData.titleExtra}
                </h6>
                <h3 className="text-black">{AboutData.title}</h3>
                <h5 className="mt-15 text-black">{AboutData.subtitle}</h5>
                <div className="col-lg-6">
                  <Button
                    className="mt-15 w-[245px]"
                    size="large"
                    onClick={toggleBuyNow}
                  >
                    Buy {presaleInfo.symbol} Token
                  </Button>
                </div>
                <div className="about-item mt-15">
                  <h5 className="w-24">Token Contract Address</h5>
                  <div className="copy-box">
                    <input type="text" value={SALE_TOKEN} disabled />
                    <CopyToClipboard text={SALE_TOKEN} onCopy={onCopyCA}>
                      <img
                        src={copiedCA ? CopiedLogo.src : CopyLogo.src}
                        alt="copyLogo"
                        className="copy2board"
                        width={23}
                      />
                    </CopyToClipboard>
                  </div>
                </div>
                <div className="about-item mt-15">
                  <h5 className="w-24">Presale Contract Address</h5>
                  <div className="copy-box">
                    <input type="text" value={TRON_PRESALE_ADDR} disabled />
                    <CopyToClipboard text={TRON_PRESALE_ADDR} onCopy={onCopySA}>
                      <img
                        src={copiedSA ? CopiedLogo.src : CopyLogo.src}
                        alt="copyLogo"
                        className="copy2board"
                        width={23}
                      />
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              {/* <img
                src={BSureBrand.src}
                style={{ width: "512px", height: "512px" }}
              ></img> */}
              <Image
              src= "/images/bsure-brand.png"
              alt="llp brand"
              width={512}
              height={512}
              />
            </div>
          </div>
        </section>
        <section id="power" style={{ marginTop: "36px" }}>
          <div className="row align-items-center">
            <div className="col-lg-6 d-flex justify-content-center">
              {/* <img
                src={Brand.src}
                style={{ width: "480px", height: "480px" }}
              ></img> */}
                            <Image
              src= "/images/brand.png"
              alt="tron brand"
              width={480}
              height={480}
              />
            </div>
            <div className="col-lg-6">
              <div className="gittu-banner-left">
                <h6 className="mt-15" style={{ color: "rgb(00 00 00)" }}>
                  {" "}
                  {PowerData.titleExtra}
                </h6>
                <h3 className="text-black">{PowerData.title}</h3>
                <h5 className="mt-15 text-black">{PowerData.subtitle}</h5>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container mt-5">
        <section id="tobuy">
          <div className="row align-items-center">
            <div className="gittu-tobuy">
              <div className="gittu-banner-card">
                <div className="gittu-banner-card-inner">
                  <div className="card-content">
                    <h5
                      className="mt-15 d-flex justify-content-center text-uppercase"
                      style={{ color: "rgb(00 00 00)" }}
                    >
                      {" "}
                      {How2Buy.titleExtra}
                    </h5>
                    <h2 className="d-flex justify-content-center fs-1 text-black">
                      {How2Buy.title}
                    </h2>
                    <h5 className="mt-15 d-flex justify-content-center text-black">
                      {How2Buy.subtitle}
                    </h5>
                  </div>
                  <div className="buy-step gap-2">
                    {BuySteps?.map((buystep, sid) => (
                      <div
                        className="col-lg-4 col-md-12 card-buy-step text-black"
                        key={sid}
                      >
                        <img
                          src={buystep.icon.src}
                          alt="icon"
                          style={{ width: 48 }}
                        />
                        <h3 className="setup-title">{buystep.title}</h3>
                        <h5 className="mt-15 text-black">{buystep.des}</h5>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section id="Economics" className="section-container Economics-bg">
        <div className="card-content">
          <h5
            className="d-flex justify-content-left text-uppercase"
            style={{ color: "rgb(00 00 00)" }}
          >
            {" "}
            {Economics.titleExtra}
          </h5>
          <h1 className="d-flex justify-content-left fs-1 text-black">
            {Economics.title}
          </h1>
          <div className="mt-40 mb-40">
            <a
              className="whitepaper-btn"
              href="https://www.nationalsecurityframework.org/polarpound/public/assets/Public%20Release%20Paper.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img src={DocumentIcon.src} alt="icon" />
              Public Release
            </a>
          </div>
          <h5 className="mt-15 d-flex justify-content-left text-black">
            {Economics.subtitle}
          </h5>
        </div>

        <div className="bar-pc">
          <div
            style={{
              height: "48px",
              borderRadius: "12px",
              overflow: "hidden",
              marginTop: "12px",
              width: "100%",
            }}
            className="progress"
          >
            {TokenDistribution.map((item, index) => (
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "16.67%", background: item.bg }}
                aria-valuenow="16.67"
                aria-valuemin="0"
                aria-valuemax="100"
                key={index}
              />
            ))}
          </div>
          <div className="progress-labels">
            {TokenDistribution.map((item, index) => (
              <div key={index}>
                {item.dest} {item.percent}%
              </div>
            ))}
            {/* <div>Presale 15%</div>
            <div>Marketing 25%</div>
            <div>Project Funds 25%</div>
            <div>Rewards 15%</div>
            <div>Liquidity 10%</div>
            <div>Staking 10%</div> */}
          </div>
        </div>
        <div className="bar-mobile">
          {TokenDistribution.map((item, index) => (
            <div className="launchpad-progress-container" key={index}>
              <div className="launchpad-progress-text">
                <div>{item.dest} </div>
                <span className="text-[#00f3ef]">
                  {Number(item.percent).toLocaleString()}%
                </span>
              </div>
              <div className="launchpad-progress-bar">
                <div
                  className="launchpad-progress-bar-filled"
                  style={{
                    width: `${item.percent}%`,
                    background: item.bg,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="roadmap" className="roadmap-container">
        <Roadmap />
      </section>
      <section id="faq" className="section-container">
        <Faq />
      </section>
    </BannerWrapper>
  );
};

export default Banner;
