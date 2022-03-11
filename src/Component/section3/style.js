import styled from 'styled-components';
import {ReactComponent as korzinka} from '../../assets/icons/korzinka.svg';
import {ReactComponent as heart} from '../../assets/icons/heart.svg';
import {ReactComponent as search} from '../../assets/icons/search.svg';

export const Container= styled.div`
width:80%;
/* background-color:green; */
display:flex;
flex-wrap:wrap;
gap:20px;
/* padding-left:10px; */
align-items:center;
justify-content:space-between;
margin:10px 100px;

`;
export const Card= styled.div`
width:350px;
height:400px;
background-color:#fbfbfb;
mix-blend-mode: fill;
margin:10px 20px;
position:relative;

:hover{
   .icon{
       display:flex;
   }
}
`;
export const Image= styled.img`
width:100%;
height:300px;

`;

export const Text = styled.h4`
padding:2px;
`;

export const Total=styled.div`
display:flex;
width:100px;
margin:0px 20px;
position:absolute;
top:280px;


`; 

export const KorzinkaIcon=styled(korzinka)`
display:none;
margin:0px 5px;
`;

export const HeartIcon=styled(heart)`
display:none;
margin:0px 5px;


`;export const SearchIcon=styled(search)`
display:none;
margin:0px 2px;

`;

export const Button=styled.div`
color:green;
background-color:blue;
margin:0px 50px 0px 1600px ;
width:200px;
height:50px;

    .button{
        color:green;
        width:50px;
        height:50px;
    }
    `;