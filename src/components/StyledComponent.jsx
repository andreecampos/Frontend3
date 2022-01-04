
import styled, {css} from 'styled-components'

const sharedStyles= css`
background-color: #eee;
height: 40px;
border-radius: 5px;
border: 1px solid #ddd;
margin: 10px 0 20px 0;
padding: 20px;
box-sizing: border-box;

`;

export const Button  = styled.button`
display: block;
background-color: blue;
color: white;
font-size: 17px;
border;  0;
border-radius:  5px;
height:  40px;
padding: 0 20px;
cursor: pointer;
box-sizing:  border-box;

&:hover {
    background: #09f;
}
`;
export const MyForm = styled.form`

width: 100%;
max-width: 700px;
padding:  40px;
background-color: #fff;
border-radius: 10px;
box-sizing  : border-box;
box-shadow:  0px 0px 20px 0px rgba(0, 0, 0, 0.2);

`;
export const MyDiv = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
 padding:  0 20px;

`;

export const MyInput  = styled.input`
display: block;
width: 100%;
${sharedStyles}
`;

