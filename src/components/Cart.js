import { Box, HStack, Spacer, Text, Flex, Center, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { Scrollbars } from "react-custom-scrollbars-2";
import CartItems from "./CartItems";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function Cart() {
  const query = useQuery();
  const img = query.get('img');
  const price = query.get('price');
  return (
    <>
      <Link to='/Luxury_Watches'>
        <Flex color="red" mt="1rem" pl="20rem" fontSize="1.2rem">
          {<BsArrowLeft color="#E5383B" fontSize="1.6rem" />}
          Continue Shoping
        </Flex>
      </Link>
      <Center mt="0.2rem">
        <HStack w="46rem">
          <Box fontSize="1.6rem">Shoping Cart</Box>
          <Spacer />
          <Box fontSize="1.6rem">items</Box>
        </HStack>
      </Center>
      <Center><Divider w="46rem" color="gray" /></Center>
      <Center>
        <Box w="46rem" h="28rem" mt="2rem">
          <Scrollbars>
            <CartItems img={img} price={price} />
          </Scrollbars>
        </Box>
      </Center>
      <Link to="/checkout">
        <Center mt="2rem" ml="39.6rem">
          <Box w="6.5rem" h="1.5rem" as="button" color="white" bg="red" style={{ borderRadius: "0.2rem" }}>continue</Box>
        </Center>
      </Link>
    </>
  )
}
export default Cart