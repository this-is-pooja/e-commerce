import { Box, Flex, Image, HStack, Divider, Spacer } from "@chakra-ui/react";
import { HiOutlineHeart } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import Logo from "../image/Ritzy.png";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<>
			<Flex bg="offWhite" p="0.3rem" align="center" w="100%">
				<Box boxSize="2rem">
					<Image src={Logo} alt="Logo" />
				</Box>
				<Spacer />

				<HStack color="lblack" direction="row" h="1rem">
					<Flex>
						<HiOutlineHeart color="lblack" />
						<Box as="button" fontSize="xs" color="lblack">
							WISHLIST
						</Box>
					</Flex>
					<Divider orientation="vertical" />
					<Flex>
						<AiOutlineShoppingCart color="lblack" />
						<Box as="button" fontSize="xs" color="lblack">
							CART
						</Box>
					</Flex>
					<Divider orientation="vertical" />
					<Flex>
						<RiAccountCircleLine color="lblack" />
						<Box as="button" fontSize="xs" color="lblack">
							<Link to="/login">LOGIN or SIGNUP</Link>
						</Box>
					</Flex>
				</HStack>
			</Flex>
		</>
	);
}
export default Navbar;
