import { Box, Flex, Input, Text, Select, Textarea,Checkbox, Button } from "@mantine/core";
import React from "react";
import {
  AiOutlineUser,
  AiFillMail,
  AiFillPhone,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import {
  InputContainer,
  BoxContainer,
  BoxTitle,
  TextareaContainer,
  ButtonContainer
} from "./ContactStyle";

export default function Contact() {
  return (
    <BoxContainer mt="60px">
      <Flex w="90%" mx="auto" direction="column" gap="30px"
       sx={(theme) => ({
        "@media (max-width: 940px)": {
         gap:'15px',
        },
      })}>
        <BoxTitle pl="15px">
          <Text size="lg" fw="700">
            Contact for any Inquiry
          </Text>
        </BoxTitle>
        <Flex justify="space-between" gap="20px"
         sx={(theme) => ({
          "@media (max-width: 940px)": {
            flexDirection:'column',
          },
        })}>
          <InputContainer justify="space-between" align="center">
            <Input
             type='text'
              placeholder="Enter your Name"
              styles={{
                input: {
                  border: "none",
                },
              }}
            />
            <AiOutlineUser size={25} style={{ color: "#FF5A3C" }} />
          </InputContainer>
          <InputContainer justify="space-between" align="center">
            <Input
            type='email'
              placeholder="Enter your Email"
              styles={{
                input: {
                  border: "none",
                },
              }}
            />
            <AiFillMail size={25} style={{ color: "#FF5A3C" }} />
          </InputContainer>
          <Flex justify="space-between"></Flex>
        </Flex>
        <Flex justify="space-between" gap="20px"
         sx={(theme) => ({
          "@media (max-width: 940px)": {
            flexDirection:'column',
          },
        })}>
          <InputContainer justify="space-between" align="center">
            <Select
            placeholder="Select Language"
              allowDeselect
              styles={{
                rightSection: {
                  display: "none",
                },
                input: {
                  border: "none",
                },
              }}
              data={["React", "Angular", "Svelte", "Vue"]}
            />
            <AiOutlineArrowDown size={25} style={{ color: "#FF5A3C" }} />
          </InputContainer>
          <InputContainer justify="space-between" align="center">
            <Input
            type='tel'
              placeholder="Enter your Phone"
              styles={{
                input: {
                  border: "none",
                },
              }}
            />
            <AiFillPhone size={25} style={{ color: "#FF5A3C" }} />
          </InputContainer>
          <Flex justify="space-between"></Flex>
        </Flex>

        <TextareaContainer w="97%" justify="space-between" align="center">
          <Textarea
          
            placeholder="Enter Message"
            radius="xs"
            styles={{
              input: {
                border: "none",
              },
            }}
          />
          <BsFillPencilFill size={22} style={{ color: "#FF5A3C" }} />
        </TextareaContainer>
        <Checkbox
      label="Save my name, email, and website in this browser for the next time I comment."
    />
    <ButtonContainer color='orange.8'>GET AN FREE SERVICES</ButtonContainer>
      </Flex>
    </BoxContainer>
  );
}
