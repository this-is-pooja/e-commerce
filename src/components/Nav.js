import { Box, Flex, Image, HStack, Divider, Spacer, Menu, IconButton, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import Logo from "../assets/Ritzy.png";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<>
			<Flex bg="offWhite" p="0.3rem" align="center" w="100%">
				<Box boxSize="2rem">
					<Image src={Logo} alt="Logo" />
				</Box>
				<Spacer />
				<Box display={{ sm: "none", lg: "block" }}>
					<HStack color="lblack" direction="row" h="1rem" >
						<Flex>
							<AiOutlineShoppingCart color="lblack" />
							<Box as="button" fontSize="xs" color="lblack">
								<Link to="/cart">CART</Link>
							</Box>
						</Flex>
						<Divider orientation="vertical" />
						<Flex>
							<RiAccountCircleLine color="lblack" />
							<Box as="button" fontSize="xs" color="lblack">
								<Link to="/auth">LOGIN or SIGNUP</Link>
							</Box>
						</Flex>
					</HStack>
				</Box>
				<HStack display={{ sm: "block", lg: "none" }}>
					<Menu>
						<MenuButton
							as={IconButton}
							aria-label="Options"
							icon={<FiMenu />}
							variant="outline"
						/>
						<MenuList>
							<MenuItem icon={<AiOutlineShoppingCart color="lblack" />} >
								<Box as="button" fontSize="xs" color="lblack">
									CART
								</Box>
							</MenuItem>
							<Link to="/auth">
								<MenuItem icon={<RiAccountCircleLine color="lblack" />} >
									<Box as="button" fontSize="xs" color="lblack">
										LOGIN or SIGNUP
									</Box>
								</MenuItem>
							</Link>
						</MenuList>
					</Menu>
				</HStack>
			</Flex>
		</>
	);
}
export default Navbar;
