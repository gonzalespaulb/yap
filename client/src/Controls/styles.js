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
