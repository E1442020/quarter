import { Box, Flex, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Group } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

import React from "react";
import { BiBed, BiBath } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import { TbSquare } from "react-icons/tb";
import img1 from "../../../shared/images/3.jpg";
import img2 from "../../../shared/images/4.jpg";
import img3 from "../../../shared/images/5.jpg";
import img4 from "../../../shared/images/6.png";
export default function SellsProperties() {
  const [opened, { open, close }] = useDisclosure(false);

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
              gap: "50px",
            },
          })}
        >
          <Flex
            direction="column"
            gap="40px"
            w="40%"
            sx={(theme) => ({
              "@media (max-width: 940px)": {
                width: "100%",
              },
            })}
          >
            <Text bg="#FFEEEB" color="#FF5A3C" p={10} w="20%" ta="center">
              About Us
            </Text>
            <Title order={2} size="45px" fw="700">
              Today Sells Properties
            </Title>
            <Text color="gray">
              Houzez allow you to design unlimited panels and real estate custom
              forms to capture leads and keep record of all information
            </Text>
            <Flex direction="column" gap="15px">
              <Flex gap={10} align="center">
                <Text color="#FF5A3C" fw={800}>
                  _
                </Text>{" "}
                <Text color="gray">Live Music Cocerts at Luviana</Text>
              </Flex>
              <Flex gap={10} align="center">
                <Text color="#FF5A3C" fw={800}>
                  _
                </Text>{" "}
                <Text color="gray">
                  Our SecretIsland Boat Tour is Just for You
                </Text>
              </Flex>
              <Flex gap={10} align="center">
                <Text color="#FF5A3C" fw={800}>
                  _
                </Text>{" "}
                <Text color="gray">Live Music Cocerts at Luviana</Text>
              </Flex>
              <Flex gap={10} align="center">
                <Text color="#FF5A3C" fw={800}>
                  _
                </Text>{" "}
                <Text color="gray">Live Music Cocerts at Luviana</Text>
              </Flex>
            </Flex>
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
              <hr />
              <Flex direction="column" gap="5px">
                <Text>
                  3450 <TbSquare />{" "}
                </Text>
                <Text>square Ft</Text>
              </Flex>
            </Flex>
          <Box >
          <Flex direction="row" gap="12px" justify="space-between">
              <Modal
                opened={opened}
                onClose={close}
                size="xl"
              >
                <Carousel  loop
            slideSize="100%" align='start' height={450}>
                  <Carousel.Slide >
                    {" "}
                    <img
                      src={img1}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Carousel.Slide>
                  <Carousel.Slide>
                    {" "}
                    <img
                      src={img2}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Carousel.Slide>
                  <Carousel.Slide>
                    <img
                      src={img3}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Carousel.Slide>
                </Carousel>
              </Modal>
              <Group position="center" w="200px" h="130px">
                <Box  onClick={open}>
                  <img
                    src={img1}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Group>
              <Group position="center" w="200px" h="130px">
                <Box  onClick={open}>
                  <img
                    src={img2}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Group>
              <Group position="center" w="200px" h="130px">
                <Box  onClick={open}>
                  <img
                    src={img3}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Group>
            </Flex>
          </Box>
          </Flex>
          <Box
            w="45%"
            sx={(theme) => ({
              "@media (max-width: 940px)": {
                width: "100%",
              },
            })}
          >
            <img
              src={img4}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
