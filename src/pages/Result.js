import React, { useState, useEffect } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { Text, Box, HStack, Image, Spacer } from "@chakra-ui/react";
import Loading from "../components/Loading";
import { useLocation } from "react-router-dom";

export default function Result() {
    const icon = { color: "#5E5E5E", fontSize: "1.4rem" };
    const [Data, setData] = useState([]);
    const [loading, setloading] = useState(false);
    const location = useLocation();
    const searchResult = location.state.data;

    useEffect(() => {
        setData(searchResult);
        setloading(true);
    }, [])
    return (
        <>

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

        </>
    )
}

