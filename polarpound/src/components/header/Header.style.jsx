import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  padding: 25px 0;
  transition: 0.3s;

  &.sticky {
    background: ${({ theme }) => theme.colors.bgHeader};
  }

  .gittu-header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .gittu-header-left {
    display: flex;
    align-items: center;
    gap: 60px;
  }

  .gittu-header-right {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .gittu-header-right-menu {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .gittu-header-menu {
    li a {
      font-family: ${({ theme }) => theme.fonts.primary};
      font-weight: 700;
      font-size: 16px;
      line-height: 30px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.black};
    }
  }

  .gittu-header-menu-toggle {
    display: none;

    .menu-toggler {
      border: 0;
      padding: 0;
      background: transparent;
      color: ${({ theme }) => theme.colors.black};
      font-size: 30px;
    }
  }

  .social-links {
    display: flex;
    align-items: center;
    gap: 10px;
    li a {
      flex: 0 0 auto;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.black}26;
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      img {
        width: 20px;
        transition: 0.3s;
      }
      &:hover {
        opacity: 0.7;
      }
    }
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

  @media screen and (max-width: 991px) {
    .gittu-header-menu-toggle {
      display: block;
    }

    .gittu-header-menu {
      display: none;
    }

    .gittu-header-left {
      gap: 30px;
    }

    .gittu-header-right {
      flex-direction: row-reverse;

      .social-links {
        display: none;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .gittu-header-left {
      gap: 15px;
    }

    .gittu-header-logo {
      flex: 0 0 auto;
      max-width: 128px;
    }

    .dropdown-demo {
      display: none;
    }

    .gittu-header-right {
      gap: 10px;
    }
  }
`;

export default HeaderWrapper;
