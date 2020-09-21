import React from "react";
import styled from "styled-components";
import { theme } from "../globalStyles";

export const LogoCont = styled.div`
    margin: 0.25rem 1rem;
`
export const Title = styled.h1`
    font-family: ${theme.headingFont};
    font-weight: 800;
    font-size: 3rem;
    color: ${theme.headingFontColor};
`

const Logo = () => {
    return (
        <LogoCont>
            <Title>minty</Title>
        </LogoCont>
    )
}

export default Logo;