import styled from "styled-components";

export const MainContainer = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid black;
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

export const Yapper = styled.span`
    font-size: 32px;
    font-weight: 700;
`;

export const Yap = styled.p``;