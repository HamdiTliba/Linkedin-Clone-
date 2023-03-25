import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="home-logo" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
            <SearchIcon>
              <img src="/images/search-icon.svg" alt="search-icon" />
            </SearchIcon>
          </div>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList>
              <a>
                <img src="/images/nav-home.svg" alt="nav-home" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-network.svg" alt="nav-network" />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-jobs.svg" alt="nav-jobs" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-messaging.svg" alt="nav-messaging" />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img
                  src="/images/nav-notifications.svg"
                  alt="nav-notifications"
                />
                <span>Notifiactions</span>
              </a>
            </NavList>
            <User>
              <a>
                <img src="/images/user.svg" alt="home-user" />
                <span>
                  Me
                  <img src="/images/down-icon.svg" alt="home-down-icon" />
                </span>
              </a>
              <SignOut onClick={() => props.signOut()}>
                <a>Sign Out</a>
              </SignOut>
            </User>
            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="nav-work" />
                <span>Work</span>
                <img src="/images/down-icon.svg" alt="home-down-icon" />
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};
const Container = styled.div``;
const Content = styled.div``;
const Logo = styled.span``;
const Search = styled.div``;
const SearchIcon = styled.div``;
const Nav = styled.nav``;
const NavListWrap = styled.ul``;
const NavList = styled.li``;
const SignOut = styled.li``;
const User = styled.ul``;
const Work = styled.li``;

export default Header;
