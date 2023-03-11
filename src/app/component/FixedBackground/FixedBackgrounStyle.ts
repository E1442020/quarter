import styled from "styled-components";
import { Box } from "@mantine/core";
import cover from '../../../shared/images/pexels-max-rahubovskiy-6434582.jpg'
export const BoxContainer=styled<any>(Box)`
display:flex;
justify-content:center;
align-items:center;
background-image: url('${cover}');
height: 400px;
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;




`