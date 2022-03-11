import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const NavbarContainer = styled.div`
    width:100%;
    height:78px;
    /* background-color: indianred; */
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin:10px 10px;
`;
export const Greenshop = styled.div`

    display:flex;
    width:150px;
    /* background-color: indigo; */
    justify-content: space-between;
    align-items: center;

p{
  font-size:17px; 
  font-weight:700; 
  color:#46A358;
  /* margin-left:10px; */
}

img{
    width:34.3px;
    height: 34.3px;
}
`;


export const NavbarMenu = styled.div`
    display: flex;
    width: 400px;
    height: 100%;
    justify-content: space-between;
    align-items: center;

`;

export const Title = styled(NavLink)`
display:flex;
font-size: 16px;
height: 100%;;
align-items: center;
justify-content: center;
`;


/* active{
border-bottom:5px solid #46A358;
font-family:Arial, Helvetica, sans-serif;
font-weight: bold;
font-size: 16px;
color:#3D3D3D;

} */



export const Login = styled.div`
display:flex;
width: 200px;
height:100%;
/* background-color: lime; */
justify-content: space-between;
align-items: center;
padding:0px 30px;
/* justify-items: center; */
button{
    width: 100px;
    height: 35px;
    font-size: 16px;
    background-color: limegreen;
    border-radius:5px;
    cursor: pointer;
}

`;
export const Img1 = styled.img` 
    width:20px;
    height: 20px;
`;    

export const Img2 = styled.img`
    width:24px;
    height: 24px;
    margin:0px 10px;
    `;
    
