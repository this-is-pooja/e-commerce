import {Divider,Text,Input,Center,HStack,Box,VStack} from "@chakra-ui/react";
import { FaLongArrowAltLeft } from "react-icons/fa";
function Checkout(){
    return(
        <>
         <HStack mt="1.5rem" ml="15rem">
         <FaLongArrowAltLeft color="red"/>
         <Text color="red">Cart</Text>
         </HStack>
         <Text mt="1.5rem" ml="20rem"><b>Delivery Details</b></Text>
         <Center>
         <Divider color="offWhite"  w="24rem"/>
         <br/>
         </Center>
         <Center>
         <VStack>
         <Input isInvalid errorBorderColor="#5E5E5E"
         placeholder="Name"w="18rem"h="1.5rem" size="sm"/>
         <Input isInvalid errorBorderColor="lblack"
         placeholder="Address"w="18rem"h="1.5rem"size="sm"/>
         <Input isInvalid errorBorderColor="lblack"
         placeholder="Phone Number"w="18rem"h="1.5rem"size="sm"/>
         <br/>
         <Box as="button" color="white" bg="red"w="6rem" h="1.5rem" borderRadius="4px">Pay</Box>
         </VStack>
         </Center>
         <Text color="lblack" align="center" mt="10rem">&#169;copyright Ritzy 2021</Text>
        </>
    )
}
export default Checkout