import { useEffect, useState } from "react";
import Link from "next/link";
import { WalletActionButton } from "@tronweb3/tronwallet-adapter-react-ui";
import HeaderWrapper from "./Header.style";
import MobileMenu from "./mobileMenu/MobileMenu";
import HeaderSocialLinks from "../../assets/data/headerSocialLinks";
import Logo from "../../assets/images/logo3.png";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = ({ variant }) => {
  const [logoImg, setLogoImg] = useState(Logo);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  return (
    <>
      <HeaderWrapper className="header-section">
        <div className="container">
          <div className="gittu-header-content">
            <div className="gittu-header-left">
              <Link className="gittu-header-logo" href="/" end>
                <img src={logoImg.src} alt="Logo" width="60px" />
              </Link>
            </div>
            <div className="gittu-header-right">
              <ul className="gittu-header-menu">
                <li>
                  <a href="#about" rel="noreferrer">
                    About
                  </a>
                </li>
              </ul>
              <ul className="gittu-header-menu">
                <li>
                  <a href="#tobuy" rel="noreferrer">
                    How to Buy
                  </a>
                </li>
              </ul>
              <ul className="gittu-header-menu">
                <li>
                  <a href="#Economics" rel="noreferrer">
                    Economics
                  </a>
                </li>
              </ul>
              <ul className="gittu-header-menu">
                <li>
                  <a href="#roadmap" rel="noreferrer">
                    Roadmap
                  </a>
                </li>
              </ul>
              <ul className="gittu-header-menu">
                <li>
                  <a href="#faq" rel="noreferrer" style={{ color: "#000" }}>
                    FAQ
                  </a>
                </li>
              </ul>
              {/* <ul className="gittu-header-menu">
                <li>
                  <a
                    href="/referral"
                    rel="noreferrer"
                    style={{ color: "#D91A21" }}
                  >
                    Referral
                  </a>
                </li>
              </ul> */}
            </div>
            <div className="gittu-header-right">
              <div className="gittu-header-menu-toggle">
                <button className="menu-toggler" onClick={handleMobileMenu}>
                  <HiMenuAlt3 />
                </button>
              </div>
              <div className="gittu-header-right-menu">
                {variant === "v1" && (
                  <ul className="gittu-header-menu">
                    <li>
                      <a href="/" target="_blank" rel="noreferrer">
                        Whitepaper
                      </a>
                    </li>
                  </ul>
                )}

                {(variant === "v2" ||
                  variant === "v3" ||
                  variant === "v5" ||
                  variant === "v6" ||
                  variant === "v7") && (
                  <ul className="social-links">
                    {HeaderSocialLinks?.map((socialLinkItem, i) => (
                      <li key={i}>
                        <a
                          href={socialLinkItem.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={socialLinkItem.icon.src}
                            alt={socialLinkItem.title.src}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex justify-center w-full">
                  <WalletActionButton className="connect-wallet-btn" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeaderWrapper>

      {isMobileMenu && <MobileMenu mobileMenuHandle={handleMobileMenu} />}
    </>
  );
};

export default Header;
