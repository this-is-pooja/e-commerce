import React from 'react'
import { Box, VStack, Spacer } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function EmptyCart() {
    return (
        <>
            <VStack mt="9.5rem">
                <Box>
                    <AiOutlineShoppingCart fontSize="10rem" color="#4169E1" />
                </Box>
                <Spacer />
                <Box fontSize={{ md: "4rem", lg: "6rem", sm: "2rem" }} fontWeight="bold">
                    Your cart is empty
                </Box>
                <Spacer />
                <Link to="/">
                    <Box w={{ sm: "9.5rem", md: "14rem" }} h="2.8rem" as="button" bg="red" color="white" style={{ borderRadius: "0.2rem", fontSize: "1.2rem" }} >Return to shop</Box>
                </Link>
            </VStack>
        </>
    )
}

export default EmptyCart
