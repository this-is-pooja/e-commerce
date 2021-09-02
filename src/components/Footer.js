import { Box, Flex, Image, Spacer, HStack, Text, Divider } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import WLogo from "../image/favicon.ico";

function Footer() {
  return (
    <>
      <Flex bg="lblack" p="1.5rem" w="100%" mt="2rem" position="absolute">
        <HStack spacing={20}>
          <Spacer />
          <Box w="18rem" h="5rem" pl="6.5rem">
            <Image src={WLogo} alt="Logo" h="3.5rem" w="3.5rem" align="center" ml="1.3rem" />
            <Text color="white" fontSize="1.5rem" ml="0.7rem">RITZY</Text>
          </Box>
          <Box w="15rem" h="5rem">
            <Text color="white" fontSize="0.8rem" style={{ letterSpacing: "0.2rem" }}>OPTIONS</Text>
            <Text color="offWhite" fontSize="0.7rem" w="10rem" mt="0.8rem">HIM COLLECTION</Text>
            <Text color="offWhite" fontSize="0.7rem">HER COLLECTION</Text>
            <Text color="offWhite" fontSize="0.7rem">UNISEX COLLECTION</Text>
          </Box>
          <Box w="15rem" h="5rem">
            <Text color="white" fontSize="0.8rem" style={{ letterSpacing: "0.2rem" }}>CONTACT</Text>
            <Text color="offWhite" fontSize="0.7em" w="10rem" mt="0.7rem">geekyholic2275@gmail.com</Text>
            <Text color="offWhite" fontSize="0.7rem">+91 9368519210</Text>
          </Box>
          <Box w="15rem" h="5rem">
            <Text color="white" fontSize="0.8rem" style={{ letterSpacing: "0.2rem" }}><Flex>CREATED WITH {<FaHeart color="#E5383B" />} BY </Flex> </Text>
            <Text color="offWhite" fontSize="0.7rem" w="10rem" mt="0.7rem">Pooja Soliwal</Text>
            <Divider color="offWhite" orientation="horizontal" w="5rem" />
            <Text color="offWhite" fontSize="0.7rem">Shashank Mishra</Text>
            <Divider color="offWhite" orientation="horizontal" w="6rem" />
          </Box>
        </HStack>
      </Flex>
    </>
  );
}

export default Footer;

