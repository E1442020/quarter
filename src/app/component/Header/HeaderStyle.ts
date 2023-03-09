import styled from "styled-components";
import { Flex, Box } from "@mantine/core";

export const SelectContainer = styled<any>(Flex)`
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 50px;
  margin: 0 auto;
   background-color: #FDFDFD;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (max-width: 940px) {
    flex-direction: column;
    gap: 30px;
    margin-top: 90px;
  }
`;

export const Container = styled<any>(Box)`
  position: relative;
  top: -70px;
  z-index: 9999999999999999;
`;
