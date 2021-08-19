import { useLocation } from "react-router-dom";
import {Flex,Text,Box,HStack,Image,Spacer} from "@chakra-ui/react";
function useQuery() {
	return new URLSearchParams(useLocation().search);
}
function WomenWatches(){
  const query = useQuery();
	const img = query.get('img');
  const price = query.get('price');
  const des = query.get('des');
  const Name=query.get('name');
  const Seller=query.get('Name');
  const quantity=query.get('inStock');
    return(
        <>
          <Flex p="4rem" mr="3rem">
             <HStack>
              <Box>
              <Image src={img} h="24rem"w="120rem"/>
              </Box>
              <Spacer />
              <Box>
              <Box h="4rem"w="50rem">
               <Text fonts="sec"fontSize="2rem"style={{textTransform:"uppercase",letterSpacing:"0.1rem", wordSpacing:"0.2rem"}}>{Name}</Text>
               <Text fontSize="0.9rem"fonts="sec" color="lblack">{Seller}</Text>
              </Box>
                <br />
                <br />
                <br />
                <Text fontSize="2rem">${price}</Text> 
                <br />
                <Box h="10rem">
                <Text color="lblack"fontSize="1rem">{des}</Text> 
                </Box>
                <Text fontSize="1rem" color="#5CC988">{quantity} in Stock</Text>
                <br /> 
                <Box w="6.5rem" h="1.5rem"as="button"  color="white"bg="red"  style={{borderRadius:"0.2rem"}}>add to cart</Box></Box>
             </HStack>
         </Flex>
        </>
    )
}
export default WomenWatches
