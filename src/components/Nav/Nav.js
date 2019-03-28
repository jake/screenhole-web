import React, { Component } from "react";
import { Subscribe } from "unstated";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Media from "react-media";
import Lottie from "react-lottie";

import LogoExplosion from "../../animations/logo/intro.json";

import AuthContainer from "../../utils/AuthContainer";

import Guest from "./Guest";
import LoggedIn from "./LoggedIn";
import MobileMenu from "./MobileMenu";
import Buttcoin from "../Buttcoin/Buttcoin";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: LogoExplosion,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

class Nav extends Component {
  render() {
    return (
      <Subscribe to={[AuthContainer]}>
        {auth => (
          <Navbar>
            <Media query="(max-width: 790px)">
              {matches =>
                matches && auth.state.buttcoins !== 0 ? (
                  <Link to="/sup">
                    <Buttcoin
                      amount={auth.state.buttcoins}
                      keepFresh={true}
                      username={auth.state.current.username}
                    />
                  </Link>
                ) : (
                  <div className="nav-logo-link">
                    {/* <Logo> */}
                    {/* <Lottie options={defaultOptions} width={400} /> */}
                    {/* </Logo> */}
                    <DropdownMenu className="nav-dropdown">
                      <MultiholeName>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                        <Link to="/">holefoods</Link>
                      </MultiholeName>
                      <Dropdown className="multihole-nav-dropdown">
                        <p>Manage holefoods</p>
                        <Link to="/cgi-bin/hole/rules">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="3" />
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                          </svg>
                          Rules
                        </Link>
                        <Link to="/cgi-bin/hole/invites">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="8.5" cy="7" r="4" />
                            <line x1="20" y1="8" x2="20" y2="14" />
                            <line x1="23" y1="11" x2="17" y2="11" />
                          </svg>
                          Invites
                        </Link>
                        <hr />
                        <OtherHoles>
                          <p>Switch holes</p>
                          <Link to="/cgi-bin/hole/invites">
                            <EnterIcon /> REAL INTERVIEWS
                          </Link>
                          <Link to="/cgi-bin/hole/invites">
                            <EnterIcon /> another hole bites the busta rhymes
                          </Link>
                          <Link to="/cgi-bin/hole/invites">
                            <EnterIcon /> DTS
                          </Link>
                        </OtherHoles>
                        <hr />
                        <NavLink to="/cgi-bin/new">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                          Create hole
                        </NavLink>
                      </Dropdown>
                    </DropdownMenu>
                  </div>
                )
              }
            </Media>
            <Menu>
              <Media query="(max-width: 790px)">
                {matches =>
                  matches ? (
                    auth.state.authenticated && auth.state.current ? (
                      <MobileMenu>
                        <LoggedIn
                          username={auth.state.current.username}
                          gravatar_hash={auth.state.current.gravatar_hash}
                          buttcoins={auth.state.buttcoins}
                        />
                      </MobileMenu>
                    ) : (
                      <MobileMenu>
                        <Guest />
                      </MobileMenu>
                    )
                  ) : auth.state.authenticated && auth.state.current ? (
                    <LoggedIn
                      username={auth.state.current.username}
                      gravatar_hash={auth.state.current.gravatar_hash}
                      buttcoins={auth.state.buttcoins}
                    />
                  ) : (
                    <Guest />
                  )
                }
              </Media>
            </Menu>
          </Navbar>
        )}
      </Subscribe>
    );
  }
}

export default Nav;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  padding: var(--app-padding);
  background-color: var(--nav-bg-color);
  border-bottom: var(--divider);
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: Nav;

  a {
    flex-shrink: 0;
  }

  .nav-logo-link {
    display: inline-block;
    height: var(--nav-height);
    width: 240px;
    position: relative;
  }

  [aria-current="true"] {
    color: white;
  }

  .activity-badge-nav {
    @media (max-width: 790px) {
      display: none !important;
    }
  }
`;

const Logo = styled.div`
  position: absolute;
  top: -10.75rem;
  left: -5rem;
  pointer-events: none;
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;

  > a {
    margin-left: 3rem;
  }
`;

const MultiholeName = styled.p`
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.25rem;
  }
`;

const DropdownMenu = styled.div`
  position: relative;
  padding: 1rem;
  padding-left: 0;
  top: 0.35rem;

  &:hover {
    .multihole-nav-dropdown {
      animation: jellyReveal 0.65s linear both;
    }
  }
`;

const Dropdown = styled.div`
  z-index: 3000;
  position: absolute;
  top: 0;
  left: -9px;
  min-width: 160px;
  background-color: #6a40ee;
  border-radius: 5px;
  margin-top: 2.75rem;
  padding: 0.25rem 0;
  box-shadow: 0 10px 35px 0 rgba(0, 0, 0, 0.35);
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;
  transform-origin: 20% -20%;

  &::after {
    content: "";
    position: absolute;
    top: -8px;
    left: 10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 7.5px 10px;
    border-color: transparent transparent #6a40ee;
  }

  a {
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;

    svg {
      flex-shrink: 0;
      margin-right: 0.35em;
      position: relative;
      top: -1px;
    }
  }

  p {
    padding: 0.5rem 1rem;
    margin: 0;
    color: var(--nav-bg-color);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  hr {
    border-color: rgba(0, 0, 0, 0.15);
  }
`;

const OtherHoles = styled.div`
  display: block;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
`;

const EnterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 9l6 6-6 6" />
    <path d="M4 4v7a4 4 0 0 0 4 4h11" />
  </svg>
);
