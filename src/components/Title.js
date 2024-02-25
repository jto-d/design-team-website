import React from 'react'
import FancyText from '@carefully-coded/react-text-gradient'
import styled from 'styled-components'

const Container = styled.div`
    text-align: center;
    font-family: Montserrat;
    font-size: 110px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const Title = () => {
  return (
    <Container>
        <FancyText
        gradient={{ from: '#F6AC5D', to: '#CB6774', type: 'linear' }}
        animateTo={{ from: '#BE3E5D', to: '#CA1E54' }}
        animateDuration={1500}
        >
        e-club design
        </FancyText>
    </Container>
    
  )
}

export default Title