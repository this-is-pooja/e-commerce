import React, { useRef } from 'react';
import { Box, Input, Text, Center, HStack } from "@chakra-ui/react";
import { Link ,useHistory} from "react-router-dom"
import { signInHandler } from '../services/essentials';
import CircleIcon from "./filledIcon";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Loginpopup() {
	const MySwal = withReactContent(Swal);
	MySwal.fire({
		icon: 'success',
		title: 'Login successfully'
	})
}
export default function SignIn(props) {
	const history=useHistory();
	const email = useRef()
	const password = useRef()
	const onClickHandler = () => {
		const payload = {
			email: email.current.value,
			password: password.current.value
		}
		signInHandler(payload)
			.then(() => { Loginpopup() })
			.then(() => {history.push("/") })
			.catch(err => console.log("err: ", err))
	}

	return (
		<>
			<Link to="/auth">
				<Center>
					<CircleIcon mt="2rem" h="2.6rem" w="2.6em" color="lblack" />
				</Center>
				<Text align="center" mb="3rem" color="black" fontSize="0.6rem">RITZY</Text>
				<Text align="center" mb="1.5rem" color="lblack" fontSize="0.9rem" letterSpacing="0.2rem">BECAUSE TIME MATTERS</Text>
				<Center >
					<Box h="14.2rem" w="16rem" p="1rem" bg="white" style={{ borderRadius: "0.2rem", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
						<form >
							<Input size="md" variant="flushed" type="email" ref={email} placeholder="Email" />
							<Input size="md" mb="3.4rem" variant="flushed" type="password" ref={password} placeholder="Password" />
							<Box w="14rem" h="1.8rem" as="button" bg="red" color="white" style={{ borderRadius: "0.2rem" }} onClick={onClickHandler}>SignIn</Box>
						</form>
						<HStack h="1.8rem" w="16rem" mt="0.6rem">
							<Box fontSize="0.8rem" pl="0.3rem" color="lblack">Having not account?</Box>
							<Box fontSize="0.8rem" color="#0645AD" onClick={() => props.setShowSignIn(false)}>Create Account</Box>
						</HStack>
					</Box>
				</Center>
			</Link>
		</>

	)
}
