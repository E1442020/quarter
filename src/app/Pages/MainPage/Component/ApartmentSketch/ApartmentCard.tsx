import { Flex, Title,Text, Box } from '@mantine/core'
import img from '../../../../../shared/images/14.png'
import React from 'react'

export default function ApartmentCard(props:any) {
  return (
    <>
   <Box  w='90%' mx='auto' mt='50px' c='white' >
   <Flex justify='space-between'
    sx={(theme) => ({
        "@media (max-width: 940px)": {
          flexDirection:'column',
          gap:'50px'
        },
      })} >
        <Flex direction='column' w='40%' gap='md' p='md'  bg='#FF5A3C'
        sx={(theme) => ({
            "@media (max-width: 940px)": {
             width:'100%'
            },
          })}  >
            <Title order={3} size='40px'>{props.name}</Title>
            <Text>Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.</Text>
            <Box mt='md'>
                <Text>Total Area ------------------------------- 2800 Sq. Ft</Text>
                <Text>Total Area ------------------------------- 2800 Sq. Ft</Text>

                <Text>Total Area ------------------------------- 2800 Sq. Ft</Text>

                <Text>Total Area ------------------------------- 2800 Sq. Ft</Text>

                <Text>Total Area ------------------------------- 2800 Sq. Ft</Text>


            </Box>

        </Flex>
        <Box w='50%' h='400px'
        sx={(theme) => ({
            "@media (max-width: 940px)": {
             width:'100%'
            },
          })} >
            <img src={img} alt='' width='100%' height='100%'/>
        </Box>
    </Flex>
   </Box>
    </>
  )
}
