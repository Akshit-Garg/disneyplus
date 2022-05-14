import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName ,selectUserphoto, setSignOutState, setUserLoginDetails } from "../features/user/userSlice";

function Header() {

  const history = useHistory();
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserphoto);

  const handleAuth = ()  => {
    if(!userName){
      signInWithPopup(auth, provider).then((result) => {
        GoogleAuthProvider.credentialFromResult(result);
        // const token = credentials.accessToken;
        // const user = result.user;
        console.log(result);
        setUser(result.user);
      }).catch((error) => {
        console.log("Error at HandleAuth SignIn functionality" + error.message);
      });
    } else if(userName) {
      signOut(auth).then(()=> {
        dispatch(setSignOutState());
        history.push("/");
      }).catch((error) => {
        console.log("Error at HandleAuth SignOut functionality" + error.message);
      })
    }
    
  }

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    )
  }

  useEffect(() => {
    auth.onAuthStateChanged( async (user) => {
      if(user){
        setUser(user);
        history.push("/home");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);

  return (
    <Nav>
      <Logo href="/">
        <img src="images/logo.svg" alt="Disney+" />
      </Logo>

      { !userName ? <Login onClick={handleAuth}> Login </Login> :
      <>
      <NavMenu>
        <a href="/home" >
          <img src="images/home-icon.svg" alt="home-icon"/>
          <span> HOME </span>
        </a>
        <a href="/">
          <img src="images/search-icon.svg" alt="search-icon"/>
          <span> SEARCH </span>
        </a>
        <a href="/">
          <img src="images/watchlist-icon.svg" alt="watchlist-icon"/>
          <span> WATCHLIST </span>
        </a>
        <a href="/">
          <img src="images/original-icon.svg" alt="original-icon"/>
          <span> ORIGINALS </span>
        </a>
        <a href="/">
          <img src="images/movie-icon.svg" alt="movies-icon"/>
          <span> MOVIES </span>
        </a>
        <a href="/">
          <img src="images/series-icon.svg" alt="series-icon"/>
          <span> SERIES </span>
        </a>
      </NavMenu>

      <SignOut>
        <UserImg src={userPhoto} alt={userName} />
        <DropDown>
          <span onClick={handleAuth}>Sign&nbsp;Out</span>
        </DropDown>
      </SignOut>
    </>} 
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  background-color: #090b13;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  height: 70px;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  width: 100%;
`
const Logo = styled.a`
  padding: 0;
  width: 80px;
  display: inline-block;
  font-size: 0;
  max-height: 70px;

  img {
    display: block;
    width: 100%;
  }
`

const NavMenu = styled.div`
  position: relative;
  padding: 0;
  margin: 0 auto 0 25px;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      width: 20px;
      min-width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      position: relative;
      white-space: nowrap;
      padding: 0 2px;
      line-height: 1.08;
      letter-spacing: 1.42px;
      font-size: 13px;

      &:before {
        background-color: rgb(249, 249, 249);
        transform: scaleX(0);
        visibility: hidden;
        opacity: 0;
        content: "";
        border-radius: 0 0 4px 4px;
        height: 2px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform-origin: left center;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`
const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 0.2 ease 0s;
  
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
    cursor: pointer;
  }
`

const UserImg = styled.img`
  height: 100%;
`

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  display: block;
  opacity: 0;
`

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`

export default Header