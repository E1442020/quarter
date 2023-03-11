import { Box, Flex, Title, Text, Button, Input } from "@mantine/core";
import React from "react";
import logo from "../../../shared/images/logo.png";
import { FaLocationArrow } from "react-icons/fa";
import pay from "../../../shared/images/pay.png";
import { ButtonContainer } from "../Affix/AffixStyle";
export default function Footer() {
  return (
    <>
      <Box
        mt="90px"
        style={{ position: "relative", bottom: "-90px", zIndex: "2222" }}
      >
        <Flex
          w="90%"
          justify="space-between"
          p="xl"
          c="white"
          mx="auto"
          bg="#FF5A3C"
          align="center"
          sx={(theme) => ({
            "@media (max-width: 940px)": {
              flexDirection: "column",

              gap: "15px",
              justifyContent: "center",
              alignItems: "center",
            },
          })}
        >
          <Flex
            direction="column"
            gap="md"
            w="60%"
            sx={(theme) => ({
              "@media (max-width: 940px)": {
                width: "100%",
              },
            })}
          >
            <Title order={2} size="40px">
              Looking for a dream home?
            </Title>
            <Text>We can help you realize your dream of a new home</Text>
          </Flex>
          <Button bg="white" c="black">
            Explore Properties
          </Button>
        </Flex>
      </Box>

      <Box bg="#03071e" c="white" pt="150px" pb="30px">
        <Flex
          w="95%"
          mx="auto"
          justify="space-between"
          wrap="wrap"
          gap="lg"
          sx={(theme) => ({
            "@media (max-width: 940px)": {
              width: "90%",
            },
          })}
        >
          <Flex
            direction="column"
            gap="md"
            w="25%"
            sx={(theme) => ({
              "@media (max-width: 940px)": {
                width: "60%",
              },
            })}
          >
            <Box>
              <img src={logo} alt="" />
            </Box>
            <Text>
              Lorem Ipsum is simply dummy text of the and typesetting industry.
              Lorem Ipsum is dummy text of the printing.
            </Text>
            <Text>Brooklyn, New York, United States</Text>
            <Text>+0123-456789</Text>
            <Text>example@example.com</Text>
          </Flex>

          <Flex direction="column" gap="md">
            <Title order={3}>Company</Title>
            <Text>About </Text>
            <Text>Blog</Text>
            <Text>All Products</Text>
            <Text>Contact</Text>
            <Text>FAQ</Text>
            <Text>Contact us</Text>
          </Flex>

          <Flex
            direction="column"
            gap="md"
            sx={(theme) => ({
              "@media (max-width: 940px)": {
                width: "60%",
              },
            })}
          >
            <Title order={3}>Services</Title>
            <Text>About </Text>
            <Text>Blog</Text>
            <Text>All Products</Text>
            <Text>Contact</Text>
            <Text>FAQ</Text>
            <Text>Contact us</Text>
          </Flex>

          <Flex direction="column" gap="md">
            <Title order={3}>Customer</Title>
            <Text>About </Text>
            <Text>Blog</Text>
            <Text>All Products</Text>
            <Text>Contact</Text>
            <Text>FAQ</Text>
            <Text>Contact us</Text>
          </Flex>

          <Flex direction="column" gap="md" w="30%">
            <Title order={3}>Newsletter</Title>
            <Text>
              Subscribe to our weekly Newsletter and receive updates via email.
            </Text>
            <Flex>
              <Input radius="0" placeholder="Email*" />
              <ButtonContainer>
                <FaLocationArrow />
              </ButtonContainer>
            </Flex>

            <Title order={3}>We Accept</Title>
            <Box>
              <img src={pay} alt="" />
            </Box>
          </Flex>
        </Flex>
      </Box>
      <Box c="white" bg="#14213d" py="lg">
        <Flex
          w="95%"
          justify="space-between"
          mx="auto"
          sx={(theme) => ({
            "@media (max-width: 940px)": {
              flexDirection: "column",
              gap: "15px",
              justifyContent: "center",

              alignItems: "center",
            },
          })}
        >
          <Text>All Rights Reserved @ Company 2023</Text>
          <Flex
            gap="md"
            w="30%"
            sx={(theme) => ({
              "@media (max-width: 940px)": {
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              },
            })}
          >
            <Text>Terms & Conditions</Text>
            <Text>Claim</Text>
            <Text>Privacy & Policy</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
