import styled from "styled-components";
import { Flex } from "@mantine/core";

export const FlexContainer=styled<any>(Flex)`

box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
cursor: pointer;
@media(max-width: 940px) {
    width:100%;
 }

&:hover{
    background-color:white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-bottom:3px solid #FF5A3C
}


`