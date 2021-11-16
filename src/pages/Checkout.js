import { Divider, Text, Input, Center, Flex, Box, VStack, HStack, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
export default function Checkout() {
  return (
    <>
      <Link to="/cart">
        <Flex color="red" mt="1rem" pl="20rem" fontSize="1.2rem">
          {<FaLongArrowAltLeft color="#E5383B" fontSize="1.6rem" />}
          Cart
        </Flex>
      </Link>
      <Text mt="1.2rem" ml="28rem" fontSize="1.2rem"><b>Delivery Details</b></Text>
      <Center>
        <Divider color="gray" w="40rem" mt="0.8rem" />
      </Center>
      <Center>
        <VStack>
          <Input isInvalid errorBorderColor="lblack"
            placeholder="Name" w="18rem" h="1.6rem" mt="3rem" size="sm" />
          <Input isInvalid errorBorderColor="lblack"
            placeholder="Address" w="18rem" h="1.6rem" size="sm" />
          <Input isInvalid errorBorderColor="lblack"
            placeholder="Phone Number" w="18rem" h="1.6rem" size="sm" />
          <Spacer />
          <Spacer />
          <Link to="/payment">
          <Box as="button" color="white" bg="red" w="6rem" h="1.5rem" borderRadius="4px">Pay</Box>
          </Link>
        </VStack>
      </Center>
      <Center>
        <HStack color="lblack" mt="10rem">
          <Box mt="0.3rem">&#169;</Box>
          <Text>copyright Ritzy 2021</Text>
        </HStack>
      </Center>
    </>
  )
}
