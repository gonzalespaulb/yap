import {
  InputContainer,
  InputLabel,
  Login,
  LoginCreate,
  MainContainer,
  Nav,
  Logout,
  ValueInput,
  YapAccount,
  ProfileName,
  YapControls,
  YapTabContainer,
  YapTab,
  Divider,
  NewYapContainer,
  YapItBtn,
  MyYapsContainer,
  YapContainer,
  YapDate,
  Yap,
} from "./styles";
import { useState } from "react";

const Controls = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [seeMyYaps, setSeeMyYaps] = useState(false);

  const renderLogin = () => {
    return (
      <Login>
        <InputContainer>
          <InputLabel>Username</InputLabel>
          <ValueInput></ValueInput>
        </InputContainer>

        <InputContainer>
          <InputLabel>Password</InputLabel>
          <ValueInput></ValueInput>
        </InputContainer>

        <LoginCreate onClick={() => setLoggedIn(true)}>Login</LoginCreate>
        <LoginCreate>Create Account</LoginCreate>
      </Login>
    );
  };

  const newYap = () => {
    return (
      <NewYapContainer>
        <InputContainer>
          <InputLabel>What's your yap?</InputLabel>
          <ValueInput></ValueInput>
        </InputContainer>
        <YapItBtn>Yap It!</YapItBtn>
      </NewYapContainer>
    );
  };

  const myYaps = () => {
    return (
      <MyYapsContainer>
      <YapContainer>
        <YapDate>July 22, 2019</YapDate>
        <Yap>
          First yap of the day, this is my practice for database stuff.
        </Yap>
      </YapContainer>

      <YapContainer>
        <YapDate>July 22, 2019</YapDate>
        <Yap>
          First yap of the day, this is my practice for database stuff.
        </Yap>
      </YapContainer>

      <YapContainer>
        <YapDate>July 22, 2019</YapDate>
        <Yap>
          First yap of the day, this is my practice for database stuff.
        </Yap>
      </YapContainer>

      <YapContainer>
        <YapDate>July 22, 2019</YapDate>
        <Yap>
          First yap of the day, this is my practice for database stuff.
        </Yap>
      </YapContainer>
    </MyYapsContainer>
    )
  };

  const renderYapAccount = () => {
    return (
      <YapAccount>
        <Nav>
          <ProfileName>Paulie</ProfileName>
          <Logout onClick={() => setLoggedIn(false)}>Logout</Logout>
        </Nav>
        <YapControls>
          <YapTabContainer>
            <YapTab onClick={() => setSeeMyYaps(false)} seeMyYaps={seeMyYaps} tabType={false}>New Yap</YapTab>
            <YapTab onClick={() => setSeeMyYaps(true)} seeMyYaps={seeMyYaps}  tabType={true}>My Yaps</YapTab>
          </YapTabContainer>
        </YapControls>
        <Divider />

        {seeMyYaps ? myYaps() : newYap()}
      </YapAccount>
    );
  };

  return (
    <MainContainer>
      {loggedIn ? renderYapAccount() : renderLogin()}
    </MainContainer>
  );
};

export default Controls;
