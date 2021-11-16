import { Box, HStack, Spacer, Image, Center, VStack, Flex, Divider } from "@chakra-ui/react";
import { GrFormSubtract } from "react-icons/gr";
import { GrFormAdd } from "react-icons/gr";
import { useState, useEffect } from "react";

export default function CartItems({ img, price, key, item, setItems, reload }) {
  const [value, setValue] = useState(1);
  const [total, setTotal] = useState(price);
  const sub = () => {
    setValue(value - 1);
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
    if (value === 0) {
      const cart_items = JSON.parse(localStorage.getItem("@cart_items"))
      const updatedCart = cart_items;
      updatedCart.pop(item);
      localStorage.setItem("@cart_items", JSON.stringify(updatedCart))
      // setItems(updatedCart);
      reload();
    }
  })
  return (
    <>

      <Center display={{ sm: "none", md: "block", lg: "block", xl: "block" }}>
        <Box w="46rem">
          <Center>
            <VStack>
              <Box
                w="42.5rem"
              >
                <HStack key={key}>
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
            </VStack>
          </Center>
        </Box>
      </Center>

      <Box display={{ sm: "block", md: "none", lg: "none", xl: "none" }}>
        <Box justifyContent="center">
          <VStack key={key} >
            <Image src={img} w="8.8rem" h="8rem" />
            <Box>
              <Flex>
                <Box bg="gray" w="0.8rem" h="0.8rem" mt="0.6rem" onClick={sub}>{<GrFormSubtract />}</Box>
                <Box fontSize="1.4rem" border="1px solid #5E5E5E" w="1.8rem" h="2rem" borderRadius="4px" ml="0.6rem" mr="0.6rem" align="center">{value}</Box>
                <Box bg="gray" w="0.8rem" h="0.8rem" mt="0.6rem" onClick={add}>{<GrFormAdd />}</Box>
              </Flex>
            </Box>
            <Spacer />
            <Box fontSize="1rem">Price:- ${price}</Box>
            <Spacer />
            <Box fontSize="1rem">Total:- ${total}</Box>
          </VStack>
        </Box>
        <Center><Divider w="46rem" color="gray" /></Center>
      </Box>
    </>
  )
}



