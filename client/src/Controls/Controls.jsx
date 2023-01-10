import {
  InputContainer,
  InputLabel,
  Login,
  LoginCreate,
  MainContainer,
  ValueInput,
} from "./styles";

const Controls = () => {
  return (
    <MainContainer>
      <Login>
        <InputContainer>
          <InputLabel>Username</InputLabel>
          <ValueInput></ValueInput>
        </InputContainer>

        <InputContainer>
          <InputLabel>Password</InputLabel>
          <ValueInput></ValueInput>
        </InputContainer>

        <LoginCreate>Login</LoginCreate>
        <LoginCreate>Create Account</LoginCreate>
      </Login>
    </MainContainer>
  );
};

export default Controls;
