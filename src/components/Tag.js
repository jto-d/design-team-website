import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 10px 30px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    

    border-radius: 50px;
    background-color: ${props => props.color};
    opacity: ${props => props.opacity};

    p {
        color: #FBF9FF;
        text-align: center;
        font-family: "Proxima Nova";
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

`

const Tag = ({ text, color, opacity }) => {
  return (
    <Container color={color} opacity={opacity}>
        <p>
            {text}
        </p>
    </Container>
  )
}

export default Tag