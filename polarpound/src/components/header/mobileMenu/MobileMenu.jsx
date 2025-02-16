import Link from "next/link";
import Image from "next/image";
import { WalletActionButton } from "@tronweb3/tronwallet-adapter-react-ui";
import MobileMenuWrapper from "./MobileMenu.style";
import Logo from "../../../assets/images/logo.png";
import Linkedin from "../../../assets/images/icons/linkedin.svg";
import Twitter from "../../../assets/images/icons/x.svg";
import { AiOutlineClose } from "react-icons/ai";
import { HeaderMobileData } from "../../../assets/data/demoMenuList";


const MobileMenu = ({ mobileMenuHandle }) => {
  console.log()
  return (
    <MobileMenuWrapper>
      <div className="gittu-mobile-menu-content">
        <div className="mobile-menu-top">
          <Link className="mobile-logo" href="/" end >
            <img src={Logo.src} alt="Logo" style={{width: "50px"}} />
          </Link>

          <button className="mobile-menu-close" onClick={mobileMenuHandle}>
            <AiOutlineClose />
          </button>
        </div>

        <ul className="mobile-menu-list mb-40" onClick={mobileMenuHandle}>
          {HeaderMobileData?.map((item, i) => (
            <li key={i}>
              <a href={item.url} end>
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <ul className="mobile-social-links mb-40">
          <li>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linkedin.src} alt="icon" />
            </a>
          </li>
          {/* <li>
            <a href="https://discord.com/" target="_blank" rel="noreferrer">
              <img src={Discord.src} alt="icon" />
            </a>
          </li> */}
          <li>
            <a href="" target="_blank" rel="noreferrer">
              <img src={Twitter.src} alt="icon" />
            </a>
          </li>
        </ul>

        <ul className="mobile-menu-list mb-40">
          <li>
            <a href="https://nationalsecurityframework.org/polarpound/public/assets/White%20Paper%20for%20Lighter%20Ledger%20Pound%20(LLP)%20(Polar%20Pound)%20Presale%20&%20Launch%20(February%202025).pdf" target="_blank" rel="noreferrer">
              Whitepaper
            </a>
          </li>
        </ul>
      </div>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
