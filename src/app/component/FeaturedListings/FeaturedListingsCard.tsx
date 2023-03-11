import React from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Box,
  Title,
  Flex,
  Avatar,
} from "@mantine/core";
import { BiBed, BiBath } from "react-icons/bi";
import {
  AiFillCar,
  AiOutlineArrowsAlt,
  AiOutlineHeart,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { TbSquare } from "react-icons/tb";
import avatarImg from "../../../shared/images/avatar.jpg";
export default function FeaturedListingsCard(props: any) {
  return (
    <>
      <Box>
        <Card shadow="sm" padding="lg" radius="md" withBorder w="400px">
          <Card.Section>
            <img src={props.img} alt="" height="250px" width="100%" />
          </Card.Section>
          <Flex direction="column" gap="xl">
            <Text mt="md" color="#FF5A3C" fw='800'>$34.900/Month</Text>
            <Title order={4} >
              {props.title}
            </Title>

            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
            <Flex direction="row" gap="15px">
              <Flex direction="column" gap="5px">
                <Text>
                  3 <BiBed />{" "}
                </Text>
                <Text>Bedrooms</Text>
              </Flex>
              <hr />
              <Flex direction="column" gap="5px">
                <Text>
                  2 <BiBath />{" "}
                </Text>
                <Text>Bathrooms</Text>
              </Flex>
              <hr />
              <Flex direction="column" gap="5px">
                <Text>
                  2 <AiFillCar />{" "}
                </Text>
                <Text>Car parking</Text>
              </Flex>
            </Flex>

            <hr />
            <Flex justify="space-between">
              <Flex gap="15px" align="center">
                <Avatar radius="xl" src={avatarImg} />
                <Flex direction="column" gap="5px">
                  <Title order={5}>William Seklo</Title>
                  <Text> Estate Agent</Text>
                </Flex>
              </Flex>
              <Flex gap="15px" align="center">
                <AiOutlineArrowsAlt />
                <AiOutlineHeart />
                <AiOutlinePlusCircle />
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </Box>
    </>
  );
}
