import { GoSearch } from "react-icons/go";
import { FiFilter } from "react-icons/fi";
import { RiArrowUpDownFill } from "react-icons/ri";
import { MdAddShoppingCart } from "react-icons/md";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Flex,
	Center,
	Text,
	Box,
	Input,
	InputGroup,
	InputRightAddon,
	HStack,
	Image,
	Spacer,
} from "@chakra-ui/react";

function MenCollection() {
	const icon = { color: "#5E5E5E",fontSize:"1.4rem"};
	const BASE_URL = "https://ritzy-backend.vercel.app";
	const [Images, setImages] = useState([]);
	useEffect(() => {
		axios
			.get(`${BASE_URL}/products/men`)
			.then((res) => {
				setImages(res.data.result);
			})
			.catch((err) => {
				console.log("error: ", err);
			});
	}, []);
	
	return (
		<>
			<Flex bg="gray" w="100%" h="5rem">
				<Center>
					<HStack spacing={16}>
						<Box>
							<InputGroup size="md" ml="27.2rem">
								<Input w="14rem" bg="offWhite" placeholder="search collection..." />
								<InputRightAddon bg="black" children={<GoSearch color="red" />} />
							</InputGroup>
						</Box>
						<Center
							fontSize="1.2rem"
							color="lblack"
							w="8.6rem"
							h="2.4rem"
							bg="white"
							borderRadius="4px"
						>
							<Flex>filters{<FiFilter style={{ marginTop: "0.2rem" }} />}</Flex>
						</Center>
						<Center
							fontSize="1.2rem"
							color="lblack"
							w="8.4rem"
							h="2.4rem"
							bg="white"
							borderRadius="4px"
						>
							<Flex>
								sort by
								{
									<RiArrowUpDownFill
										style={{ marginTop: "0.2rem", marginLeft: "0.1rem" }}
									/>
								}
							</Flex>
						</Center>
					</HStack>
				</Center>
			</Flex>
			<Box p="1rem">
				{Images.map((post) => (
					<Link
						to={{
							pathname: "/MenWatches",
							hash: "",
							search: `Name=${post.seller}&img=${post.img}&des=${post.description}&name=${post.name}&price=${post.price}&inStock=${post.inStock}`,
						}}
					>
						<Box
							key={post.id}
							w="18.5rem"
							h="18rem"
							position="relative"
							style={{
								borderRadius: "5px",
								boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
							}}
							float="left"
							m="6.2rem"
						>
							<Image src={post.img} borderRadius="4px" align="center" />
							<Box bg="offWhite" w="18.5rem" position="absolute" h="5rem">
								<Box p="0.8rem">
									<Text
										color="lblack"
										fontSize="1rem"
										style={{
											textTransform: "uppercase",
											letterSpacing: "0.1rem",
											wordSpacing: "0.1rem",
											overflow:"hidden",
											textOverflow:"ellipsis",
											whiteSpace:"nowrap"
										}}
									>
										{post.name}
									</Text>
								</Box>
								<HStack pl="0.8rem" pr="0.8rem">
									<Text color="lblack" fontSize="1.1rem">
										${post.price}
									</Text>
									<Spacer />
									<MdAddShoppingCart style={icon} />
								</HStack>
							</Box>
						</Box>
					</Link>
				))}
			</Box>
		</>
	);
}
export default MenCollection;
