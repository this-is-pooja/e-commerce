
import React, { useState, useEffect, } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { RiArrowUpDownFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Center, Text, Box, HStack, Image, Spacer, Button } from "@chakra-ui/react";
import Loading from "../components/Loading";
import { useLocation } from "react-router-dom";
import { getData } from "../services/essentials";
import SearchHandler from "../components/search";

export default function Category() {
	const icon = { color: "#5E5E5E", fontSize: "1.4rem" };
	const [Data, setData] = useState([]);
	const [loading, setloading] = useState(false);
	const location = useLocation();
	const [isFirst, setisFirst] = useState(true)

	const onSortHandler = () => {
		const temp = [...Data];
		const asc = temp.sort((a, b) => {
			return a.price - b.price;
		})

		if (isFirst === true) {
			setisFirst(false)
			setData(asc)
		}
		else {
			setData(Data.reverse())
		}
	}

	useEffect(() => {
		const currentLocation = location.pathname;
		if (currentLocation === "/categories/men" || "/categories/women" || "/categories/unisex" || "/categories/all") {
			getData(currentLocation.substring(12, currentLocation.length)).then(res => {
				setData(res.result);
				setloading(true);
			}).catch(err => console.log(err))
		}
		else {
			console.log('wrong page');
		}
	}, [])
	return (
		<>
			<Box>
				<Center>
					<HStack bg="gray" w="100%" h="5rem" justifyContent="space-around">
						<Box>
							<SearchHandler />
						</Box>
						<Box display="flex">
							{/* <Center mr="1rem" fontSize="1.2rem" color="lblack" p="0 1rem" h="2.4rem" bg="white" borderRadius="4px"><Flex>filters{<FiFilter style={{ marginTop: "0.2rem" }} />}</Flex></Center> */}
							<Button onClick={onSortHandler} fontSize="1.2rem" color="lblack" p="0 1rem" h="2.4rem" bg="white" borderRadius="4px">sort{<RiArrowUpDownFill style={{ marginTop: "0.2rem", marginLeft: "0.1rem" }} />}</Button>
						</Box>
					</HStack>
				</Center>
				<Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center">
					{loading ? Data.map(post => (
						<Link to={{ pathname: '/item', hash: '', search: `Name=${post.seller}&img=${post.img}&des=${post.description}&name=${post.name}&price=${post.price}&instock=${post.inStock}` }}>
							<Box key={post.id} w="18.5rem" alignItems="center" style={{ borderRadius: "4px" }} float="left" m="4rem 1rem" boxShadow="rgba(0, 0, 0, 0.15) 0px 3px 3px 0px">
								<Image src={post.img} borderRadius="4px 4px 0 0" alt="image" />
								<Box bg="offWhite" w="18.5rem" h="5rem" borderRadius="0 0 4px 4px">
									<Box p="0.8rem">
										<Text color="lblack" fontSize="1rem" style={{ textTransform: "uppercase", letterSpacing: "0.1rem", wordSpacing: "0.1rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{post.name}</Text>
									</Box>
									<HStack pl="0.8rem" pr="0.8rem">
										<Text color="lblack" fontSize="1.1rem">${post.price}</Text>
										<Spacer />
										<MdAddShoppingCart style={icon} />
									</HStack>
								</Box>
							</Box>
						</Link>
					)) : <Loading />}
				</Box>
			</Box>
			
		</>
	)
}
