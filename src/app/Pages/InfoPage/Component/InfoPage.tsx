import { Box, Flex, Title, Text } from "@mantine/core";
import React from "react";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import img from "../../../../shared/images/rosalina.jpg";
import { ActionIcon } from "@mantine/core";
import BasicInfo from "./BasicInfo/BasicInfo";
import Services from "./Sevices/Services";
import Contact from "./Contact/Contact";
import { AffixComponent } from "../../MainPage/Component/Affix/Affix";
export default function InfoPage() {
  return (
    <>
      <Flex
        w="80%"
        mx="auto"
        justify="space-between"
        mt="100px"
        align="start"
        sx={(theme) => ({
          "@media (max-width: 940px)": {
            flexDirection: "column",
            gap: "60px",
            width: "90%",
          },
        })}
      >
        <Flex
          direction="column"
          gap="md"
          align="center"
          justify="center"
          w="30%"
          sx={(theme) => ({
            "@media (max-width: 940px)": {
              width: "100%",
            },
          })}
        >
          <Box w="90%" h="250px">
            <img src={img} alt="" width="100%" height="100%" />
          </Box>
          <Title order={2} fw="800">
            Rosalina D. William
          </Title>
          <Text fw="500" color="#FF5A3C">
            PROPERTY SELLER
          </Text>
          <Flex gap="md">
            <ActionIcon variant="outline" radius="xs">
              {" "}
              <FaFacebookF size={23} />
            </ActionIcon>
            <ActionIcon variant="outline" radius="xs">
              {" "}
              <AiFillLinkedin size={23} />
            </ActionIcon>

            <ActionIcon variant="outline" radius="xs">
              {" "}
              <AiOutlineTwitter size={23} />
            </ActionIcon>
          </Flex>
        </Flex>

        <Box
          w="67%"
          sx={(theme) => ({
            "@media (max-width: 940px)": {
              width: "100%",
            },
          })}
        >
          <BasicInfo />
          <Services />
          <Contact />
        </Box>
        <AffixComponent />
      </Flex>
    </>
  );
}
