import styled from "styled-components";
import { Box } from "@mantine/core";

export const BoxContainer=styled<any>(Box)`

width:20%;
text-align:center;
background-color:white;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
padding:20px 0px;
margin 10px;
&:hover{
    background-color:#FF5A3C;
    
}
border-radius:10px;
@media(max-width: 940px) {
    width:40%;
 }


`
export const ArrowContainer=styled<any>(Box)`


position:relative;
top:40px;
background-Color:#ffff;
padding:10px;
border:none;
border-radius:50%;
width:20%;
margin:0 auto;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
cursor:pointer;
&:hover{
    color:#FF5A3C;
    
}



`