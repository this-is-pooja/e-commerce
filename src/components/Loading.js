import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Center } from "@chakra-ui/react";
function Loading() {
    return (
        <>
            <Center mt="15rem">
                <Loader
                    type="ThreeDots"
                    color="#E5383B"
                    height={120}
                    width={150}
                    timeout={3000} //3 secs
                />
            </Center>
        </>
    )
}
export default Loading