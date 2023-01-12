import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  position: sticky;
  top: 0;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// NOTE ---------------------------------------------- LOGIN

export const Login = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  :not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const InputLabel = styled.span`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const ValueInput = styled.input`
  width: 100%;
  height: 48px;
`;

export const LoginCreate = styled.span`
  cursor: pointer;
  font-size: 24px;

  :hover {
    text-decoration: underline;
  }
`;

// NOTE ---------------------------------------------- YAP ACCOUNT

export const YapAccount = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
`;

export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Logout = styled.span`
  font-size: 24px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const ProfileName = styled.span`
  font-size: 24px;
`;

export const YapControls = styled.div`
  width: 100%;
`;

export const YapTabContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const YapTab = styled.span`
  font-size: 24px;
  cursor: pointer;

  text-decoration: ${(props) => props.seeMyYaps === props.tabType ? "underline" : "none"};

  :hover {
    text-decoration: underline;
  }

  :not(:last-child) {
    margin-right: 24px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  border: 2px dashed black;
  margin-top: 24px;
  margin-bottom: 24px;
`;

// NOTE ---------------------------------------------- NEW YAP CONTAINER

export const NewYapContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const YapItBtn = styled.span`
  cursor: pointer;
  font-size: 24px;

  :hover {
    color: green;
  }
`;

// NOTE ---------------------------------------------- MY YAPS CONTAINER

export const MyYapsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const YapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 20px 0;

  :not(:last-child) {
      margin-bottom: 10px;
      border-bottom: 1px solid black;
  }
`;

export const YapDate = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

export const Yap = styled.p``;