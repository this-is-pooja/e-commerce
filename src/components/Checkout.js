import { Divider, Text, Input, Center, Flex, Box, VStack, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
function Checkout() {
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
        <Divider color="gray" w="40rem" />
        <br />
      </Center>
      <br />
      <br />
      <Center>
        <VStack>
          <Input isInvalid errorBorderColor="#5E5E5E"
            placeholder="Name" w="18rem" h="1.6rem" size="sm" />
          <Input isInvalid errorBorderColor="lblack"
            placeholder="Address" w="18rem" h="1.6rem" size="sm" />
          <Input isInvalid errorBorderColor="lblack"
            placeholder="Phone Number" w="18rem" h="1.6rem" size="sm" />
          <br />
          <Box as="button" color="white" bg="red" w="6rem" h="1.5rem" borderRadius="4px">Pay</Box>
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
export default Checkout