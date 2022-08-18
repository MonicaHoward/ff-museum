import React from 'react';
import styled from 'styled-components'

const Hero = () => {
    return(
        <Wrapper>
            <Title>Celebrating Women<br/> Filmmakers</Title>
            <section>
                <div></div>
                <Subtitle>Women who are changing the future of film</Subtitle>
            </section>
           
        </Wrapper>
    )
}

export default Hero;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding: 2%;
`

const Title = styled.h1`
    font-size: 6em;
    font-weight: 400;
    font-family: 'Cinzel', serif;
`

const Subtitle = styled.h3`
    font-size: 2em;
    font-family: sans-serif;
`