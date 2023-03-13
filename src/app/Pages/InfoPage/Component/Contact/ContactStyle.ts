import styled from "styled-components";
import { Flex ,Box,Button} from "@mantine/core";

export const BoxContainer=styled<any>(Box)`

box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
padding:40px 0px;
margin-bottom:30px

`
export const BoxTitle=styled<any>(Box)`

border-left: 3px solid #FF5A3C

`
export const InputContainer=styled<any>(Flex)`
border :1px solid #e9edc9;
padding :10px;
width :50%;
@media(max-width: 940px) {
    width:100%;
 }


`

export const TextareaContainer=styled<any>(Flex)`
border :1px solid #e9edc9;
padding :10px;



`

export const ButtonContainer=styled<any>(Button)`
width :40%;
padding:10px 0;
@media(max-width: 940px) {
    width:60%;
 }



`