import { Box, HStack, Spacer, Image, Center, VStack, Flex, Text } from "@chakra-ui/react";
import { GrFormSubtract } from "react-icons/gr";
import { GrFormAdd } from "react-icons/gr";
import { useState, useEffect } from "react";
function CartItems({ img, price }) {
  const [value, setValue] = useState(1);
  const [total, setTotal] = useState(price);
  const sub = () => {
    setValue(value - 1);
    if (value === 1) {
      setValue(value - 1 != 0) & setValue(1)
    }
  }
  const add = () => {
    setValue(value + 1);
  }
  useEffect(() => {
    if (value > 1) {
      setTotal(price * value);
    }
    if (value === 1) {
      setTotal(price)
    }
  })
  return (
    <>
      <Center>
        <HStack w="44rem">
          <Box color="lblack" fontSize="0.8rem" style={{ letterSpacing: "0.1rem" }}>PRODUCT DETAILS</Box>
          <Spacer />
          <Box color="lblack" fontSize="0.8rem" style={{ letterSpacing: "0.1rem" }}>QUANTITY</Box>
          <Spacer />
          <Box color="lblack" fontSize="0.8rem" style={{ letterSpacing: "0.1rem" }}>PRICE</Box>
          <Spacer />
          <Box color="lblack" fontSize="0.8rem" style={{ letterSpacing: "0.1rem" }}>TOTAL</Box>
        </HStack>
      </Center>
      <br />
      <Center>
        <VStack>
          <Box
            w="42.5rem"
            h="7.8rem"
            borderRadius="4px"
          >
            <HStack>
              <Image src={img} w="6.6rem" h="7rem" />
              <Spacer />
              <Box>
                <Flex>
                  <Box bg="gray" w="1rem" h="1rem" mt="0.6rem" onClick={sub}>{<GrFormSubtract />}</Box>
                  <Box fontSize="1.4rem" border="1px solid #5E5E5E" w="2.2rem" h="2.2rem" borderRadius="4px" ml="0.6rem" mr="0.6rem" align="center">{value}</Box>
                  <Box bg="gray" w="1rem" h="1rem" mt="0.6rem" onClick={add}>{<GrFormAdd />}</Box>
                </Flex>
              </Box>
              <Spacer />
              <Box>${price}</Box>
              <Spacer />
              <Box>${total}</Box>
            </HStack>
          </Box>
          <br />
        </VStack>
      </Center>
      <Box fontSize="1rem" ml="2rem">TOTAL:-${total}</Box>
    </>
  )
}
export default CartItems