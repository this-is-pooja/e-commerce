import Img from "../assets/banner-home.jpg";
import {
	Image,
	Text,
	Box,
	VStack,
	Center,
	HStack,
	Flex
} from "@chakra-ui/react";
import Logo from "../assets/favicon.ico";
import MenW from "../assets/men.jpg";
import WomenW from "../assets/women.jpg";
import UnisexW from "../assets/unisex.jpg";
import { Link } from "react-router-dom";
import SearchHandler from "../components/search";


function Home(props) {
	return (
		<>

			<Flex
				h="36rem"
				w="100%"
				backgroundImage={Img}
				borderBottom="0.4rem solid #E5383B"
				backgroundSize="cover"
				flexDir="column"
				align="center"
				backgroundPosition="center"
				justifyContent="center"
			>
				<Box mb="12.5rem" textAlign="center">
					<Image src={Logo} h={{ sm: "1.2rem", md: "1.5rem", lg: "1.8rem", xl: "2.5rem" }} w={{ sm: "1.2rem", md: "1.5rem", lg: "1.8rem", xl: "2.5rem" }} />
					<Text color="white" fontSize={{ sm: "0.3rem", md: "0.4rem", lg: "0.5rem", xl: "0.6rem" }}>
						RITZY
					</Text>
				</Box>
				<Box mb="10.5rem" textAlign="center" color="white">
					<Text fontSize={{ sm: "1.2rem", md: "1.4rem", lg: "1.6rem", xl: "2rem" }} letterSpacing={{ sm: "0.2rem", md: "0.5rem", lg: "0.7rem", xl: "0.8rem" }}>
						LUXURIOUS WATCHES
					</Text>
					<Text fontSize={{ sm: "0.6rem", md: "0.7rem", lg: "0.8rem", xl: "1rem" }} letterSpacing={{ sm: "0.1rem", md: "0.3rem", lg: "0.4rem" }}>
						BECAUSE TIME MATTERS
					</Text>
				</Box>
			</Flex>
			<Text align="center" fonts="sec" fontSize={{ sm: "0.8rem", md: "1rem", lg: "1.6rem" }} mt="1.5rem">
				CHOOSE FROM SPECIAL HANDPICKED COLLECTION OR SEARCH SOME BRANDED LUXURY
			</Text>
			<Center mt="1.5rem">
				<Box>
					<SearchHandler />
				</Box>
			</Center>
			<Center display={{ sm: "none", md: "none", lg: "none", xl: "block" }} mt="3rem">
				<HStack spacing={24} pl="12rem" pr="12rem" justifyContent="space-evenly">
					<Card
						link="/categories/men"
						src={MenW}
						name="MENS COLLECTION"
						title="buy men's watches at min 40% off this sale"
					/>
					<Card
						link="/categories/women"
						src={WomenW}
						name="WOMENS COLLECTION"
						title="buy premium pics for her with min 50% off"
					/>
					<Card
						link="/categories/unisex"
						src={UnisexW}
						name="UNISEX COLLECTION"
						title="unisex watches picked by experts just for you"
					/>
				</HStack>
			</Center>

			<Center display={{ sm: "none", md: "none", lg: "block", xl: "none" }}mt="3rem">
				<HStack pr="3.5rem" pl="3.5rem" justifyContent="space-evenly">
					<Card
						link="/categories/men"
						src={MenW}
						name="MENS COLLECTION"
						title="buy men's watches at min 40% off this sale"
					/>
					<Card
						link="/categories/women"
						src={WomenW}
						name="WOMENS COLLECTION"
						title="buy premium pics for her with min 50% off"
					/>
					<Card
						link="/categories/unisex"
						src={UnisexW}
						name="UNISEX COLLECTION"
						title="unisex watches picked by experts just for you"
					/>
				</HStack>
			</Center>
			<Center display={{ sm: "block", md: "block", lg: "none", xl: "none" }}mt="3rem">
				<VStack spacing={10}>
					<Card
						link="/categories/men"
						src={MenW}
						name="MENS COLLECTION"
						title="buy men's watches at min 40% off this sale"
					/>
					<Card
						link="/categories/women"
						src={WomenW}
						name="WOMENS COLLECTION"
						title="buy premium pics for her with min 50% off"
					/>
					<Card
						link="/categories/unisex"
						src={UnisexW}
						name="UNISEX COLLECTION"
						title="unisex watches picked by experts just for you"
					/>
				</VStack>
			</Center>
			<Center mt="3rem">
				<Box
					as="button"
					transition="all 0.2s"
					border="1px"
					px="0.8rem"
					bg="lpink"
					borderColor="lblack"
					borderRadius="3px"
					fontSize="1.1rem"
					w="16rem"
					h="2rem"
					color="black"
					align="center"
					_active={{ transform: "scale(0.96)" }}
				>
					<Link to="/categories/all">browse all categaries</Link>
				</Box>
			</Center>
		</>
	);
}

export default Home;

const Card = ({ link, src, name, title }) => (
	<Link to={link}>
		<Box
			w="16rem"
			h="19rem"
			position="relative"
			style={{
				borderBottom: "0.4rem solid #E5383B",
				borderRadius: "4px",
				boxShadow: "1px 3px #F4F4F4",
			}}
		>
			<Image src={src} borderRadius="4px" />
			<Box
				bg="offWhite"
				w="full"
				position="absolute"
				bottom="0.1rem"
				style={{ borderTopLeftRadius: "1.5rem" }}
				h="5.2rem"
			>
				<Box p="0.7rem">
					<Text color="black" fontSize="1rem" align="center">
						<b>{name}</b>
					</Text>
					<Text fontSize="0.9rem" pl="2rem" pr="1rem" color="lblack">
						{title}
					</Text>
				</Box>
			</Box>
		</Box>
	</Link>
);
