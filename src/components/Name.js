import React from "react";
import styled from "styled-components";
import { theme } from "../globalStyles";

export const NameCont = styled.div`
    margin: 0.25rem 1rem;
    cursor: pointer;
`
export const Text = styled.p`
    color: ${theme.bodyFontColor};
    font-family: ${theme.bodyFont};
    font-size: ${theme.h2FontSize};
    font-weight: 500;
    text-transform: capitalize;
`

const Name = ({ firstLock, secondLock, firstName, secondName }) => {
    return (
        <NameCont onClick={firstLock || secondLock}>
            <Text>{firstName || secondName}</Text>
        </NameCont>
    )
}

export default Name;