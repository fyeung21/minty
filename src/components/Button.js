import React from "react";
import styled from "styled-components";
import { theme } from "../globalStyles";

export const Position = styled.div`
    display: flex;
    justify-content: center;
`
export const GenerateBtn = styled.button`
    background-color: transparent;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    border: 3px solid ${theme.primaryColor};
    border-radius: 20px;
    padding: 10px 20px;

    :hover {
        border: transparent;
        background-color: ${theme.buttonColor};
    }
`
export const Text = styled.p`
    color: ${theme.bodyFontColor};
    font-family: ${theme.bodyFont};
    font-size: ${theme.h2FontSize};
    font-weight: 500;
    text-transform: capitalize;
`

const Button = ({ generateName }) => {
    return (
        <Position>
            <GenerateBtn onClick={generateName}>
                <Text>Generate a new name!</Text>
            </GenerateBtn>
        </Position>
    )
}

export default Button;