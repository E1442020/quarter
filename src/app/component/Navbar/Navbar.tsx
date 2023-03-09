import { Box, Flex, Text, Button ,Title} from "@mantine/core";
import { AiOutlineMail, AiFillInstagram,AiOutlineSearch ,AiOutlineUser,AiOutlineShoppingCart} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { SlSocialDribbble } from "react-icons/sl";
import logo from '../../../shared/images/logo.png'
import { IconContainer ,NavbarContainer} from "./NavbarStyle";


export default function Navbar() {
  return (
    <>
    
      <Box
        sx={(theme) => ({
          cursor: "pointer",
          width: "100%",
          backgroundColor: "#0B2C3D",
        })}
      >
 
         <Flex
          gap="md"
          mih={50}
          justify="space-between"
          align="center"
          direction="row"
          w="90%"
          ml="auto"
          mr="auto"
          sx={(theme) => ({
               
        
            '@media (max-width: 940px)': {
                width:'100%',
              flexDirection:'column',
              gap:'20'
              
            },
          })}
        >
            
          <Flex
            mih={50}
            gap={25}
            align="center"
            direction="row"
            wrap="wrap"
            
            c="white"
           
          >
            <Flex gap={5} align="center">
              <AiOutlineMail style={{ color: "#FF593C" }} size={20} />
              <Text> info@webmail.com</Text>
            </Flex>
            <Flex gap={5} align="center">
              <CiLocationOn style={{ color: "#FF593C" }} size={25} />
              <Text>15/A, Nest Tower, NYC</Text>
            </Flex>
          </Flex>
          <Flex mih={50} gap={60} align="center" direction="row" wrap="wrap">
            <Flex align="center" gap={10}>
              <TiSocialFacebook style={{ color: "white" }} size={20} />
              <TiSocialTwitter style={{ color: "white" }} size={20} />
              <AiFillInstagram style={{ color: "white" }} size={20} />
              <SlSocialDribbble style={{ color: "white" }} size={20} />
            </Flex>
            <Button bg='#FF593C' h='40px' radius='none' py={10} >Add Listing</Button>
          </Flex>
        </Flex>
   
       
        
      </Box>
      <NavbarContainer>
      <Flex 
        align='center'
        w='90%'
        ml='auto'
        mr='auto'
        mt={40}
       
        py={10}
        // pos='fixed'
        justify='space-between'>
            <Flex><img src={logo} alt='logo'/></Flex>
            <Flex align='center' gap={20}
             sx={(theme) => ({
               
        
              '@media (max-width: 940px)': {
                  display:'none'
               
                
              },
            })}>
                <Title order={4}>Home +</Title>
                <Title order={4}>About +</Title>
                <Title order={4}>Shop +</Title>
                <Title order={4}>News +</Title>
                <Title order={4}>Pages +</Title>
                <Title order={4}>Contact</Title>
            </Flex>
            <Flex align='center' gap={15}>
                <IconContainer><AiOutlineSearch  size={25}/></IconContainer>
                <IconContainer><AiOutlineUser size={25}/></IconContainer>
                <IconContainer><AiOutlineShoppingCart size={25}/></IconContainer>
            </Flex>
        </Flex>
      </NavbarContainer>
      
    </>
  );
}
