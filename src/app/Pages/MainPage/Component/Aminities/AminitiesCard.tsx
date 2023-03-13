import { Box, Flex, Title } from '@mantine/core'
import { ActionIcon } from '@mantine/core';
import {AiOutlineArrowRight} from 'react-icons/ai'
import { BoxContainer ,ArrowContainer} from './AminitiesStyle';

import React from 'react'

export default function AminitiesCard(props:any) {
  return (
   <>
   
   <BoxContainer >
   <Flex justify='center' mb={20}><ActionIcon size='90px' color="orange.7" radius='50%' variant="light" >
      <Box>{props.icon}</Box>
    </ActionIcon></Flex>
    <Title order={3}>{props.name}</Title>
    <ArrowContainer>
        <AiOutlineArrowRight/>
    </ArrowContainer>
   </BoxContainer>
   
   </>
  )
}
