import Link from "next/link";
import React, { useState, useEffect } from "react";

import Modal from "~/components/Common/Modal";
import JoinUsForm from "~/components/JoinUsForm";
import LoginForm from "~/components/LoginForm";
// import Searchbar from "~/components/Searchbar"; obsolete for now
import Button from "~/components/Common/Button";
import Sidebar from "~/components/Common/Sidebar";
// import LogoGray from "~assets/img/logo_gray.svg";
import LogoGray from "~/assets/img/LogoGray";

import {
  NavbarContainer,
  NavBarButtons,
  NavbarWrapper,
  MenuIcon,
  RightSideNav,
  Links,
} from "./styled";

import useCurrentUser from "~/hooks/useCurrentUser";

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [whichModal, setWhichModal] = useState(0);
  const [navbar, setNavbar] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const user = useCurrentUser();

  const showNavbar = () =>
    window.scrollY >= 100 ? setNavbar(true) : setNavbar(false);

  useEffect(() => {
    window.addEventListener("scroll", showNavbar);
    return () => {
      window.removeEventListener("scroll", showNavbar);
    };
  }, [navbar]);

  const cta = [
    {
      id: 1,
      name: "Login",
      bg: "white",
    },
    {
      id: 2,
      name: "Join Us!",
      bg: "lightYellow",
    },
  ];

  return (
    <NavbarWrapper>
      <NavbarContainer isFixed={navbar}>
        <Link href="/">
          <a className="logo">
            <LogoGray />
          </a>
        </Link>

        <Links>
          <Link href="/reviews">Reviews</Link>
          <Link href="/online-battles">Online Battles</Link>
          <Link href="/challenges">Challenges</Link>
          <Link href="/game-nights">Game Nights</Link>
        </Links>

        {/* {navbar && <Searchbar scrolling={navbar} />} obsolete for now */}

        {!user?.accessToken ? (
          <NavBarButtons>
            {cta.map((btn) => (
              <Button
                key={btn.id}
                bg={btn.bg}
                onClick={() => {
                  setModalIsOpen(true);
                  setWhichModal(btn.id);
                }}
              >
                {btn.name}
              </Button>
            ))}
          </NavBarButtons>
        ) : (
          <RightSideNav>
            <MenuIcon
              onClick={() => setOpenMenu(!openMenu)}
              openMenu={openMenu}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </MenuIcon>
          </RightSideNav>
        )}

        <Sidebar menuOpen={openMenu} closeMenu={() => setOpenMenu(false)} />

        {cta.map((mdl) => (
          <Modal
            key={`${mdl.name}-${mdl.id}`}
            isOpen={modalIsOpen && whichModal === mdl.id}
            closeModal={() => setModalIsOpen(false)}
            headerLabel={whichModal === 1 ? "Login" : "Join Us!"}
          >
            {whichModal === 1 ? (
              <LoginForm closeModal={() => setModalIsOpen(false)} />
            ) : (
              <JoinUsForm closeModal={() => setModalIsOpen(false)} />
            )}
          </Modal>
        ))}
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
