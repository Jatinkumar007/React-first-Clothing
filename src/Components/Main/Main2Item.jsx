import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Box, Text, Image, Button } from "@chakra-ui/react";

function Main2Item({ id, image, title, description, price, handleWishlist }) {
  const [hide, setHide] = useState(false);
  const [color, setColor] = useState(false);
  return (
    <Box
      key={id}
      onMouseEnter={() => setHide(true)}
      onMouseLeave={() => setHide(false)}
    >
      <Image src={image} width={"225px"} height={"300px"} alt="error" />
      {hide ? (
        <Box
          onMouseEnter={() => setColor(true)}
          onMouseLeave={() => setColor(false)}
          border={`1px solid ${color ? "black" : "#d4d5d8"}`}
          width={"200px"}
          height={"45px"}
          mt={"15px"}
          ml={"15px"}
          mb={"15px"}
        >
          <Button p={"0px"} display={"block"} margin={"auto"} fontSize={"13px"} onClick={()=>handleWishlist(id)}>
            {" "}
            <AiOutlineHeart
              style={{
                padding: "0px",
                paddingRight: "5px",
                width: "25px",
                display: "inline",
              }}
            />{" "}
            WISHLIST
          </Button>
        </Box>
      ) : (
        <>
          {" "}
          <Text mt={"5px"} fontWeight={"bold"}>
            {title}
          </Text>
          <Text fontSize={"12px"}>{description}</Text>
        </>
      )}
      <Text mt={"5px"} fontWeight={"bold"} fontSize={"14px"}>
        Rs.{price}
      </Text>
    </Box>
  );
}

export default Main2Item;
