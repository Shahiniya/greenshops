import styled from 'styled-components';
import {ReactComponent as search} from '../../assets/icons/search.svg';
import {ReactComponent as facebook} from '../../assets/icons/Facebook.svg'
import {ReactComponent as linkedin} from '../../assets/icons/Linkedin.svg'
import {ReactComponent as mail} from '../../assets/icons/mail.svg'
import {ReactComponent as twitter} from '../../assets/icons/Twitter.svg'

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

export const Mindiv =styled.div`
`;
export const Btndiv =styled.div`
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
width:100%;
height:100px;
margin: 15px 0px;
background: white;
display: flex;
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



