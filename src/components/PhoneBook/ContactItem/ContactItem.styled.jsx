import styled from "@emotion/styled";

export const Contact = styled.li `
    display:flex;
    justify-content: space-between;
    gap: 20px; 
    align-items: center; 

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`

export const Name = styled.p `
    font-size: 16px;
    font-weight: 500;
    color: ${({theme})=> theme.colors.primaryBlack};
    
`

export const Number = styled.span `
    color: ${({ theme }) => theme.colors.grey};
    margin-left: 10px; 
`

export const RemoveButton = styled.button `
    /* text-align: center; */
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.blue};
    border: none;
    border-radius:50%;
    box-shadow: 0px 4px 4px rgba(0,0,0,.15);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
        background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
        scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

    svg {
        width: 15px;
        height: 15px;
    }

     :hover, :focus {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.hoverBlue};
        transform: scale(1.1);
    }
`
