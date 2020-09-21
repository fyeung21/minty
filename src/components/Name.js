import React from "react";
import styled from "styled-components";
import { theme } from "../globalStyles";

export const NameCont = styled.div`
    margin: 0.25rem 1rem;
`
export const Title = styled.p`
    font-family: ${theme.bodyFont};
    font-weight: 800;
    font-size: 2rem;
    color: ${theme.bodyFontColor};
`

const Name = ({ firstName, secondName }) => {
    return (
        <NameCont>
            <Title>{firstName || secondName}</Title>
        </NameCont>
    )
}

export default Name;