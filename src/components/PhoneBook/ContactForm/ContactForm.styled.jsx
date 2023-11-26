import styled from "@emotion/styled";

export const Form = styled.form `
   padding: 0 10px;
   margin: 0 auto;
   border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
     
`

export const FormField = styled.div `
    display: flex;
    flex-direction: column;
    
    
    &:nth-of-type(2) {
        margin-top: 8px;
    }
`
export const Label = styled.label `
    font-size: 12px;
    color: ${({ theme }) => theme.colors.grey};
    margin-bottom: 4px; 
`

export const Input = styled.input `
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    border-radius: 10px; 
    padding: 12px;
    padding-left: 35px;  
    outline: rgba(0,0,0,0);
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
    &:hover, :focus  {
        border-color: ${({ theme }) => theme.colors.hoverBlue};
    }

    &:hover + svg, :focus +svg  {
        fill: ${({ theme }) => theme.colors.hoverBlue};
    }
`

export const InputSection = styled.div `
    position: relative;

    svg {
        width: 15px;
        height: 15px;
        position: absolute;
        top: 50%;
        left: 12px;
        transform: translateY(-50%);
    }
`

export const SubmitButton = styled.button `
    display:flex;
    align-items: center;
    justify-content: space-around;
    min-width: 180px; 
    padding: 8px 16px;
    margin: 20px auto 20px;
    background-color: ${({ theme }) => theme.colors.blue};
    border: none;
    border-radius:10px;
    box-shadow: 0px 4px 4px rgba(0,0,0,.15);
    font-weight: 600; 
    letter-spacing: .06em;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
        background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
        

    :hover, :focus {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.hoverBlue};
    }

     svg {
        width: 18px;
        height: 18px; 
    }
   
`

