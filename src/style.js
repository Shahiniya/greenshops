import styled from 'styled-components';
import {ReactComponent as korzinka} from './section.3-images/korzinka.svg';
import {ReactComponent as heart} from './section.3-images/heart.svg';
import {ReactComponent as search} from './section.3-images/search.svg';

export const Container= styled.div`
width:80%;
/* background-color:green; */
display:flex;
flex-wrap:wrap;
gap:27px;
padding-left:50px;
`;
export const Card= styled.div`
width:360px;
height:420px;
background-color:#fbfbfb;
mix-blend-mode: multiply;
position:relative;
:hover{
   .icon{
       display:flex;
   }
}
`;
export const Image= styled.img`
width:100%;
height:350px;

`;

export const Total=styled.div`
display:flex;
width:100px;
margin:0px 20px;
position:absolute;
top:320px;


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
