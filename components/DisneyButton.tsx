import { Button, ButtonProps } from "@chakra-ui/button";
import React from "react";

export default function DisneyButton(props: ButtonProps) {
  return (
    <Button
      bg="#0063e5"
      color="white"
      _hover={{ bg: "#0483ee" }}
      _focus={{ outline: "none" }}
      _active={{ transform: "scale(0.98)", bg: "#0063e5" }}
      textTransform="uppercase"
      fontWeight="normal"
      fontSize="15px"
      rounded="sm"
      //   px="14"
      {...props}
    >
      {props.children}
    </Button>
  );
}
