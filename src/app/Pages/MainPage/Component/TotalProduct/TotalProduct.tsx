import React from "react";
import { Box, Flex, Title, Text } from "@mantine/core";
import { AiOutlineFieldTime, AiOutlineHome, AiFillCar } from "react-icons/ai";
import { FaChair } from "react-icons/fa";

export default function TotalProduct() {
  return (
    <>
      <Box bg="#F2F6F7" mt="50px">
        <Flex
          direction="row"
          justify="space-between"
          w="70%"
          py="80px"
          mx="auto"
          mt="80px"
          wrap="wrap"
          sx={(theme) => ({
            "@media (max-width: 940px)": {
              width: "90%",
            },
          })}
        >
          <Flex
            direction="column"
            gap="20px"
            align="center"
            sx={(theme) => ({
              "@media (max-width: 940px)": {
                width: "50%",
              },
            })}
          >
            <AiOutlineFieldTime style={{ color: "#FF5A3C" }} size={70} />
            <Title order={2} size="40px">
              560+
            </Title>
            <Text color="grey">Total Area Sq</Text>
          </Flex>

          <Flex
            direction="column"
            gap="20px"
            align="center"
            sx={(theme) => ({
              "@media (max-width: 940px)": {
                width: "50%",
              },
            })}
          >
            <AiOutlineHome style={{ color: "#FF5A3C" }} size={70} />
            <Title order={2} size="40px">
              197K+
            </Title>
            <Text color="grey">Apartments Sold</Text>
          </Flex>

          <Flex
            direction="column"
            gap="20px"
            align="center"
            sx={(theme) => ({
              "@media (max-width: 940px)": {
                width: "50%",
              },
            })}
          >
            <AiFillCar style={{ color: "#FF5A3C" }} size={70} />
            <Title order={2} size="40px">
              268+
            </Title>
            <Text color="grey">Total Constructions</Text>
          </Flex>

          <Flex
            direction="column"
            gap="20px"
            align="center"
            sx={(theme) => ({
              "@media (max-width: 940px)": {
                width: "50%",
              },
            })}
          >
            <FaChair style={{ color: "#FF5A3C" }} size={70} />
            <Title order={2} size="40px">
              340+
            </Title>
            <Text color="grey">Apartio Rooms</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
