import styled from 'styled-components'

export const Button= styled.button`
width:150px;
height:35px;
margin:20px;
cursor:pointer;
border-radius:4px;
font-size:20px;


&:nth-child(1){
    border:none;
    background-color:#0084ff;
    color:white;
}
&:nth-child(2){
    border:0.5px solid grey;
    background-color:white;
}
&:nth-child(3){
    border:0.5px dashed ;
    background-color:white;
}
&:nth-child(4){
    border:none;
    background-color:white;
}
&:nth-child(5){
    color:#0084ff;
     border:none;
    background-color:white;
}

&:hover{
    background-color:green;;
    color:white;
}

`;

export const All=styled.div`
display:grid;
grid-templete-columns:repeat(3,1fr)


`;
