import styled from "styled-components";
import { Box } from "@mantine/core";
export const ServicesContainer=styled<any>(Box)`
display:flex;
flex-direction:column;
gap:15px;
  padding:20px;
  text-align:center;
  background-color:white;
  cursor:pointer;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  &:hover{
    transition: all 1s;

     border-bottom:5px solid #FF593C;
  }

`