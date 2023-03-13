import { Box } from "@mantine/core";
import React from "react";
import { BoxContainer } from "./FixedBackgrounStyle";
import { AiFillPlayCircle } from "react-icons/ai";
export default function FixedBackground() {
  return (
    <>
      <BoxContainer>
        <AiFillPlayCircle
          size={100}
          style={{ color: "#FF5A3C", cursor: "pointer" }}
        />
      </BoxContainer>
    </>
  );
}
