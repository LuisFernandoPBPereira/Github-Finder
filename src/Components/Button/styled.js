import styled from "styled-components";

export const Button = styled.button`
    border:1px solid #999999;
    border-radius: 22px;
    margin-right: 12px;
    background: #2D333B;
    font-size: 18px;
    padding: 10px;
    color: white;

    &:hover{
        filter: brightness(2.0);
        cursor: pointer;
    }
`