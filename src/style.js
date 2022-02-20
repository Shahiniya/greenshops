import styled from 'styled-components';
import {ReactComponent as korzinka} from './section3/section.3-images/korzinka.svg';
import {ReactComponent as heart} from './section3/section.3-images/heart.svg';
import {ReactComponent as search} from './section3/section.3-images/search.svg';
import {ReactComponent as facebook} from './section9-images/Facebook.svg'
import {ReactComponent as linkedin} from './section9-images/Linkedin.svg'
import {ReactComponent as mail} from './section9-images/mail.svg'
import {ReactComponent as twitter} from './section9-images/Twitter.svg'



export const Container= styled.div`
width:80%;
/* background-color:green; */
display:flex;
flex-wrap:wrap;
gap:30px;
padding-left:50px;
align-items:center;
justify-content:center;

`;
export const Card= styled.div`
width:400px;
height:400px;
background-color:#fbfbfb;
mix-blend-mode: fill;
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

export const Button=styled.button`
color:green;
background-color:blue;
margin:0px 50px 0px 1600px ;
width:200px;
height:50px;
{
    .button{
        color:green;
        width:50px;
        height:50px;
    }
}
`;
export const SectionContainer4 = styled.div` 
background:red;
width:100%;
`;

export const Section4left = styled.div` 

`;

export const Section4right = styled.div`

`;
export const Images =styled.img``;



// Section9


export const Container9 = styled.div`
width:100%;
height:574px;
background-color:blue;
display:flex;
position:relative;


`;

export const Container9left = styled.div`
width:50%;
background:white;
height:100%;
display:flex;

`;

export const Left9 = styled.div`
width:30%;
height:100%;
background:white;
/* border-right:1px solid blue; */
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;
export const Gul1 = styled.img`
width:100px;
height:100px;
margin:5px;
background:#fbfbfb;
border:5px solid #fbfbfb;
`;
export const Right9 = styled.div`
width:70%;
height:100%;
background:white;
display:flex;
justify-content:center;
align-items:center;


`;
export const Cover= styled.div`
    display:flex;
    justify-content:center;
    align-items:center; 
   width:460px;
   height:460px;
   background:rgba(251, 251, 251, 1);
; 

 
 `;


export const Gul2 = styled.img`
width:300px;
height:300px;
margin:10px;
:hover{
   .icons{
       display:flex;
   }
}

`;
export const Icon= styled(search)`
display:none;
top:150px;
left:730px;
display:flex;
position:absolute;

`;

export const Container9right = styled.div`
width:50%;
background:white;
height:574px;
h4{
    font-weight:bold;
}
h5{
    color:green;
    font-weight:bold;
}
`;


export const RightTitle = styled.div`
display:flex;
width:100%;
height:50px;
/* background:red; */
/* margin:0px 20px; */
`;

export const Description =styled.div`

`;

export const Size = styled.button`
border-radius:50%;
color:green;
`;

export const Count = styled.div`
width:100%
height:100px;
margin:15px 0px;
background:white;
display:flex;
.btn{
    margin:0px 10px;
    border-radius:50% ;
    background:#46A358;
    font-size:18px;
    
}
h6{
    font-weight:bold;
    font-size:20px;
}
`;

export const Buy = styled.div`
margin:10px 30px 0px 110px;
/* background-color:green; */ 
.buy{
    margin:0px 10px;
    color:#46A358;
    font-weight:bold;
    border-radius:5px ;
}
.buy1{
    background:#46A358;
    color:white;
}
`;
export const Contact =styled.div`

`;
export const Share = styled.div`
display:flex;
`;

export const Facebook= styled(facebook)`
margin:10px 10px;

`;

export const Twitter= styled(twitter)`
margin:14px 10px;
`;

export const Linkedin= styled(linkedin)`
margin:10px 10px;

`;
export const Mail= styled(mail)`
margin:14px 10px;


`;

export const Container10 = styled.div`
width:100%;
height:500px;
/* background:red; */
`;

export const Title1 = styled.div`
/* display:flex; */
margin:20px 30px;
h5{
    margin:20px 30px;
}
h6{
    font-weight:bold;
}
p{
    font-size:15px;
    color:#727272;
}
`;

export const Title2 = styled.div`
display:flex;

`;

export const Container11 = styled.div`
margin:20px 120px;
justify-content:center;
align-items:center;
h6{
color:green;
font-weight:bold;
border-bottom:3px solid rgba(70, 163, 88, 0.5);
margin:30px 0px;
}
`;

export const Flower1 = styled.img`
background-color:#fbfbfb;
mix-blend-mode: multiply;
/* border:3px solid #727272; */
`;

export const Card1 = styled.div`
width:400px;
height:400px;
display:flex;
background-color:white;
mix-blend-mode: multiply;
`;

export const Card2 = styled.div`
/* width:400px;
height:400px; */
/* background-color:white;
mix-blend-mode: fill; */
h4{
    font-size:25px;
    font-weight:bold;
    margin:20px;
    color:green;
}
`;

export const Ellipse = styled.button`
display: flex;
justify-content:center;
align-items:center;
button{
border-radius:40%;
}
`;

export const Container12 = styled.div`
width:1500px;
height:400px;
background:white;
display:flex;
margin:20px 120px;
`;

export const Rasm = styled.div`
display:flex;
margin:50px;
width:1000px;

`;
export const Rasm1 = styled.img`
width:204px;
height:196;
margin:10px 40px;
`;
export const Rasmcha = styled.div`

`;
export const Join = styled.div`
width:500px;
`;

export const Input = styled.input`
width:10px;
/* border-bottom:none;/ */
`;