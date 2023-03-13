import styled from 'styled-components'
import {Box} from '@mantine/core'

export const ImgContainer=styled<any>(Box)`
padding:10px;

height:600px;
width:50%;
@media(max-width: 940px) {
   width:100%;
}
img{
    width:100%;
    height:100%;
   

}
`
export const HintContainer=styled<any>(Box)`
padding:20px;
background-Color:#F5DFDC;
color:grey;
border-left:4px solid #FF5A3C
`