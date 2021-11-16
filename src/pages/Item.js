import { useLocation } from "react-router-dom";
import { Flex, Text, Box, HStack, Image, Spacer, VStack } from "@chakra-ui/react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {useState} from 'react'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function alert() {
  const MySwal = withReactContent(Swal);
  MySwal.fire({
      icon:'success',
      title: 'Your item is added to cart'
  })      
}
function Items() {
  const query = useQuery();
  const img = query.get('img');
  const price = query.get('price');
  const des = query.get('des');
  const Name = query.get('name');
  const Seller = query.get('Name');
  const quantity = query.get('instock');

  const [text,setText]=useState('add to cart');

  const onAddCartHandler = () => {
    const cart_items = JSON.parse(localStorage.getItem("@cart_items"))
    const updatedCart = [];
    if (cart_items && cart_items != []) {
      updatedCart.push({ img: `${img}`, price: `${price}` }, ...cart_items)
    } else {
      updatedCart.push({ img: `${img}`, price: `${price}` })
    }
    setText('added to cart');
    {alert()}
    localStorage.setItem("@cart_items", JSON.stringify(updatedCart))
  }

  return (
    <>
      <Flex p="4rem" mr="3rem" display={{ lg: "block", xl: "block", sm: "none", md: "none" }}>
        <HStack>
          <Box>
            <Image src={img} w={{ sm: "50%", md: "77rem", xl: "80rem" }} objectFit="contain" />
          </Box>
          <Spacer />
          <Box>
            <Box h={{ lg: "5rem", xl: "7rem" }} w={{lg: "25rem", xl: "50rem" }}>
              <Text fonts="sec" fontSize={{ xl: "2rem", lg: "1.1rem" }} style={{ textTransform: "uppercase", letterSpacing: "0.1rem", wordSpacing: "0.2rem" }}>{Name}</Text>
              <Text fonts="sec" fontSize={{ xl: "0.9rem", lg: "0.7rem" }} color="lblack">{Seller}</Text>
            </Box>
            <Text fontSize={{ xl: "2rem", lg: "1.2rem" }} mt="4rem">${price}</Text>
            <Box h="10rem" mt="1.5rem">
              <Text color="lblack" fontSize={{ xl: "1rem", lg: "0.8rem" }}>{des}</Text>
            </Box>
            <Text fontSize="1rem" color="#5CC988">{quantity} in Stock</Text>
            <Box w="7.2rem" mt="1.5rem" h="1.5rem" as="button" color="white" bg="red" style={{ borderRadius: "0.2rem" }} onClick={onAddCartHandler}>{text}</Box>
          </Box>
        </HStack>
      </Flex>

      <Flex p={{ md: "4rem", sm: "2rem" }} ml={{ md: "5.2rem", sm: "3rem" }} display={{ lg: "none", xl: "none", md: "block", sm: "block" }}>
        <VStack>
          <Box h={{ sm: "6rem", md: "5rem" }} w={{ sm: "18rem", md: "40rem" }}>
            <Text fonts="sec" mr={{ sm: "2.2rem" }} fontSize={{ md: "1.5rem", sm: "0.8rem" }} style={{ textTransform: "uppercase", letterSpacing: "0.1rem", wordSpacing: "0.2rem" }}>{Name}</Text>
            <Text fonts="sec" fontSize={{ md: "0.9rem", sm: "0.6rem" }} color="lblack">{Seller}</Text>
          </Box>
          <Box >
            <Box mr={{ sm: "3rem", md: "4rem" }} mt="1.5rem">
              <Image src={img} h={{ sm: "14rem", md: "25rem" }} w={{ sm: "45rem", md: "30rem" }} />
            </Box>
            <Text fontSize={{ md: "2rem", sm: "1.2rem" }} mt="1.5rem">${price}</Text>
            <Box h={{ md: "10rem", sm: "5rem" }} mt="1.5rem" w={{ md: "32rem", sm: "15.8rem" }} mr={{ md: "7rem", sm: "2.6rem" }}>
              <Text color="lblack" fontSize={{ md: "0.9rem", sm: "0.6rem" }}>{des}</Text>
            </Box>
            <Text fontSize="1rem" mt="4rem" color="#5CC988">{quantity} in Stock</Text>
            <Box w="6.5rem" mt="1.5rem" h="1.5rem" as="button" color="white" bg="red" transition="all 0.2s" _active={{ transform: "scale(0.96)" }} style={{ borderRadius: "0.2rem" }} onClick={onAddCartHandler}>add to cart</Box>
          </Box>
        </VStack>
      </Flex>
    </>
  )
}
export default Items
