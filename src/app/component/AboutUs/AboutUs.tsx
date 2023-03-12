import React from "react";
import { Box, Flex, Text, Title, Button } from "@mantine/core";
import img from "../../../shared/images/2.png";
import { ImgContainer, HintContainer } from "./AboutUsStyle";
import { AiOutlineHome, AiOutlineSecurityScan } from "react-icons/ai";
import { GiBallPyramid } from "react-icons/gi";
import { CiHeadphones } from "react-icons/ci";

export default function AboutUs() {
  return (
    <>
      <Box mt="90px">
        <Flex
          direction="row"
          justify="space-between"
          w="90%"
          mx="auto"
          sx={(theme) => ({
            "@media (max-width: 940px)": {
              flexDirection: "column",
              gap: "30px",
            },
          })}
        >
          <ImgContainer>
            <img src={img} alt="" />
          </ImgContainer>
          <Flex
            direction="column"
            gap="30px"
            w="45%"
            sx={(theme) => ({
              "@media (max-width: 940px)": {
                width: "100%",
              },
            })}
          >
            <Text bg="#F5DFDC" color="#FF5A3C" w="20%" ta="center">
              About Us
            </Text>
            <Title order={2} size="40px" fw="900">
              The Leading Real Estate Rental Marketplace.
            </Title>
            <Text color="gray">
              Over 39,000 people work for us in more than 70 countries all over
              the This breadth of global coverage, combined with specialist
              services
            </Text>
            <Flex direction="column" gap="20px">
              <Flex direction="row" justify="space-between">
                <Flex direction="row" gap="10px" align="center">
                  <AiOutlineHome
                    size={25}
                    style={{
                      color: "#FF5A3C",
                      backgroundColor: "#F5DFDC",
                      border: "none",
                      borderRadius: "50%",
                    }}
                  />
                  <Text>Smart Home Design</Text>
                </Flex>
                <Flex direction="row" gap="10px" align="center">
                  <GiBallPyramid
                    size={25}
                    style={{
                      color: "#FF5A3C",
                      backgroundColor: "#F5DFDC",
                      border: "none",
                      borderRadius: "50%",
                    }}
                  />
                  <Text>Beautiful Scene Around</Text>
                </Flex>
              </Flex>
              <Flex direction="row" justify="space-between">
                <Flex direction="row" gap="10px" align="center">
                  <CiHeadphones
                    size={25}
                    style={{
                      color: "#FF5A3C",
                      backgroundColor: "#F5DFDC",
                      border: "none",
                      borderRadius: "50%",
                    }}
                  />
                  <Text>Smart Home Design</Text>
                </Flex>
                <Flex direction="row" gap="10px" align="center">
                  <AiOutlineSecurityScan
                    size={25}
                    style={{
                      color: "#FF5A3C",
                      backgroundColor: "#F5DFDC",
                      border: "none",
                      borderRadius: "50%",
                    }}
                  />
                  <Text>Beautiful Scene Around</Text>
                </Flex>
              </Flex>
            </Flex>
            <HintContainer>
              "Enimad minim veniam quis nostrud exercitation llamco laboris.
              Lorem ipsum dolor sit amet"
            </HintContainer>
            <Button color='orange.8' w="30%" ta="center">
              Our Services
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
