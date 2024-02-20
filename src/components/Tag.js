import React from 'react'
import styled, { css } from 'styled-components'

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
        background-color: transparent;

        ${props => props.transparent && css`
          background: linear-gradient(90deg, #F6AC5D 0%, #DB6575 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `}

        ${props => props.transparentRight && css`
          background: linear-gradient(90deg, #DB6575 0%, #CA1E54 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `}
        
    }

    

`

const Tag = ({ text, color, opacity, transparent }) => {
  return (
    <Container color={color} opacity={opacity} transparent={transparent}>
        <p>
            {text}
        </p>
    </Container>
  )
}

export default Tag