import styled from "styled-components";

const MobileMenuWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &::before {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    background: ${({ theme }) => theme.colors.bgHeaderMobile};
    content: "";
    z-index: -1;
  }

  .connect-wallet-btn {
    border: 0px;
    padding: 12px;
    min-width: 185px;
    border-radius: 25px;
    background: rgba(0, 0, 0, 1);
    backdrop-filter: blur(10px);
    font-family: Outfit, sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: 0.3s;
  }
  .gittu-mobile-menu-content {
    width: 400px;
    height: 100%;
    background: ${({ theme }) => theme.colors.bgHeader};
    padding: 30px;
    animation: 0.4s sidebarAnimation;
    overflow-y: auto;
    -ms-overflow-style: none;
    /* Internet Explorer 10+ */
    scrollbar-width: none;
    transition: width 0.3s;

    &::-webkit-scrollbar {
      display: none;
      /* Safari and Chrome */
    }
  }

  @keyframes sidebarAnimation {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  .mobile-menu-top {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    margin-bottom: 56px;
  }

  .mobile-logo {
    img {
      max-width: 150px;
    }
  }

  .mobile-menu-close {
    border: 0;
    background: transparent;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.black};
  }

  .mobile-menu-list {
    text-align: center;
    li a {
      font-family: ${({ theme }) => theme.fonts.primary};
      font-weight: 500;
      font-size: 18px;
      line-height: 40px;
      color: ${({ theme }) => theme.colors.black};
      transition: 0.3s;

      &.active {
        color: ${({ theme }) => theme.colors.primary};
      }

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .mobile-social-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    li a {
      width: 40px;
      height: 40px;
      background: ${({ theme }) => theme.colors.black}26;
      backdrop-filter: blur(10px);
      border-radius: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      transition: 0.3s;
      img {
        width: 18px;
        transition: 0.3s;
      }
      &:hover {
        opacity: 0.7;
      }
    }
  }

  .connect-wallet-btn {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    .gittu-mobile-menu-content {
      width: 100%;
      padding: 20px;
    }
  }
`;

export default MobileMenuWrapper;
