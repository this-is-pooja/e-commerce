import Img from "../image/Frame 10.jpg";
import {
	Image,
	Text,
	Input,
	Box,
	InputRightAddon,
	InputGroup,
	Center,
	HStack,
} from "@chakra-ui/react";
import { GoSearch } from "react-icons/go";
import Logo from "../image/favicon.ico";
import MenW from "../image/mens.png";
import WomenW from "../image/women.png";
import UnisexW from "../image/unisex.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Home() {
	return (
		<>
			<Box position="relative">
				<Image src={Img} />
				<Center>
					<Box position="absolute" w="4rem" h="4rem" bottom="30rem" align="center">
						<Image src={Logo} h="2.5rem" w="2.5rem" />
						<Text color="white" fontSize="0.6rem">
							RITZY
						</Text>
					</Box>
					<Box
						position="absolute"
						w="40rem"
						h="5rem"
						bottom="15rem"
						align="center"
					>
						<Text color="white" fontSize="2rem" style={{ letterSpacing: "0.8rem" }}>
							LUXURIOUS WATCHES
						</Text>
						<Text color="white" fontSize="1rem" style={{ letterSpacing: "0.4rem" }}>
							BECAUSE TIME MATTERS
						</Text>
					</Box>
				</Center>
			</Box>
			<br />
			<Text align="center" fonts="sec"fontSize="1.6rem">
				CHOOSE FROM SPECIAL HANDPICKED COLLECTION OR SEARCH SOME BRANDED LUXURY
			</Text>
			<br />
			<Center>
				<Box>
					<InputGroup size="md">
						<Input w="14rem" bg="offWhite" placeholder="search collection..." />
						<InputRightAddon bg="black" children={<GoSearch color="red" />} />
					</InputGroup>
				</Box>
			</Center>
			<br />
            <br />
			<Center>
				<HStack spacing={24}>
					<Card
						link="/Men"
						src={MenW}
						name="MENS COLLECTION"
						title="buy men's watches at min 40% off this sale"
					/>
					<Card
						link="/Women"
						src={WomenW}
						name="WOMENS COLLECTION"
						title="buy premium pics for her with min 50% off"
					/>
					<Card
						link="/Unisex"
						src={UnisexW}
						name="UNISEX COLLECTION"
						title="unisex watches picked by experts just for you"
					/>
				</HStack>
			</Center>
			<br />
			<br />
			<Center>
				<Box
					as="button"
					transition="all 0.2s "
					border="1px"
					px="0.8rem"
					borderRadius="2px"
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
					<Link to="/Luxury_Watches">browse all categaries</Link>
				</Box>
			</Center>
			<br />
			<Footer />
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
