import styled from '@emotion/styled';

export const Container = styled.div `
    display:flex; 
    flex-direction: column;
    justify-content: center;
    padding: 60px 30px; 
    font-size: 20px;
    color: ${({theme}) => theme.colors.primaryBlack};
    letter-spacing: .03em;
`

export const MainTitle = styled.h1 `
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px; 
`
export const SecondaryTitle = styled.h2 `
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px; 

`
export const Titleparth = styled.span `
    color: ${({ theme }) => theme.colors.blue};
    text-transform: uppercase;
`
