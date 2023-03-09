import React from "react";
import { Box, Flex, Text, Button, Title, Select } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { AiFillHome, AiFillPlayCircle } from "react-icons/ai";
import img1 from "../../../shared/images/21.png";
import { SelectContainer,Container } from "./HeaderStyle";
export default function Header() {
  return (
    <>
      <Box bg="#F2F6F7" mt="50px" py="20px" className="c">
        <Box w="90%" pt="60px" mx="auto">
          <Carousel
            align="start"
            height={600}
            loop
            slideSize="100%"
            sx={(theme) => ({
              "@media (max-width: 940px)": {
                height: "650px",
              },
            })}
          >
            <Carousel.Slide>
              <Flex
                direction="row"
                align="start"
                justify="space-between"
                sx={(theme) => ({
                  "@media (max-width: 940px)": {
                    width: "100%",
                    flexDirection: "column",
                    gap: "40px",
                  },
                })}
              >
                <Flex
                  direction="column"
                  w="40%"
                  align="start"
                  gap={50}
                  sx={(theme) => ({
                    "@media (max-width: 940px)": {
                      width: "100%",
                      gap: "30px",
                    },
                  })}
                >
                  <Flex direction="row" align="center" gap={10}>
                    <AiFillHome size={30} style={{ color: "#FF5A3C" }} />
                    <Title order={4}>Real Estate Agancy</Title>
                  </Flex>
                  <Title
                    order={2}
                    size="60px"
                    fw="700"
                    sx={(theme) => ({
                      "@media (max-width: 940px)": {
                        fontSize: "30px",
                      },
                    })}
                  >
                    Find Your Dream House By Us
                  </Title>
                  <Box color="grey">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus, molestias!
                  </Box>
                  <Flex direction="row" align="center" gap={20}>
                    <Button bg="#FF5A3C" px="60px" color="white">
                      Make An Equiry
                    </Button>
                    <AiFillPlayCircle size={30} style={{ color: "#FF5A3C" }} />
                  </Flex>
                </Flex>
                <Box
                  w="45%"
                  h="500px"
                  sx={(theme) => ({
                    "@media (max-width: 940px)": {
                      width: "100%",
                      height: "400px",
                    },
                  })}
                >
                  <img
                    src={img1}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
              </Flex>
            </Carousel.Slide>
            <Carousel.Slide>
              <Flex
                direction="row"
                align="start"
                justify="space-between"
                sx={(theme) => ({
                  "@media (max-width: 940px)": {
                    width: "100%",
                    flexDirection: "column",
                    gap: "40px",
                  },
                })}
              >
                <Box
                  w="45%"
                  h="500px"
                  sx={(theme) => ({
                    "@media (max-width: 940px)": {
                      width: "100%",
                      height: "400px",
                    },
                  })}
                >
                  <img
                    src={img1}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
                <Flex
                  direction="column"
                  w="40%"
                  align="start"
                  gap={50}
                  sx={(theme) => ({
                    "@media (max-width: 940px)": {
                      width: "100%",
                      gap: "30px",
                    },
                  })}
                >
                  <Flex direction="row" align="center" gap={10}>
                    <AiFillHome size={30} style={{ color: "#FF5A3C" }} />
                    <Title order={4}>Real Estate Agancy</Title>
                  </Flex>
                  <Title
                    order={2}
                    size="60px"
                    fw="700"
                    sx={(theme) => ({
                      "@media (max-width: 940px)": {
                        fontSize: "30px",
                      },
                    })}
                  >
                    Find Your Dream House By Us
                  </Title>
                  <Box color="grey">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus, molestias!
                  </Box>
                  <Flex direction="row" align="center" gap={20}>
                    <Button bg="#FF5A3C" px="60px" color="white">
                      Make An Equiry
                    </Button>
                    <AiFillPlayCircle size={30} style={{ color: "#FF5A3C" }} />
                  </Flex>
                </Flex>
              </Flex>
            </Carousel.Slide>
          </Carousel>
        </Box>
      </Box>
      <Container>
        <SelectContainer>
          <Select
            placeholder="Choose Area"
            data={[
              { value: "London", label: "London" },
              { value: "newYork", label: "newYork" },
              { value: "Africa", label: "Africa" },
              { value: "Egypt", label: "Egypt" },
            ]}
          />
          <Select
            placeholder="Property Status"
            data={[
              { value: "open", label: "open" },
              { value: "Sold", label: "Sold" },
              { value: "Rent", label: "Rent" },
              { value: "Sale", label: "Sale" },
            ]}
          />
          <Select
            placeholder="Property Type"
            data={[
              { value: "Co-op", label: "Co-op" },
              { value: "Condo", label: "Condo" },
              { value: "Apartment", label: "Apartment" },
              { value: "Single Family Home", label: "Single Family Home" },
            ]}
          />
          <Button px="xl" bg="#FF5A3C">
            Find Now
          </Button>
        </SelectContainer>
      </Container>
    </>
  );
}
