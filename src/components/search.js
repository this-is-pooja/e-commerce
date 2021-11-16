import React,{useState} from 'react';
import { InputGroup,Input,InputRightAddon } from '@chakra-ui/input';
import { GoSearch } from "react-icons/go";
import { searchAll } from '../services/essentials';
import { useHistory } from 'react-router-dom';

export default function Search() {
	const [value, setValue] = useState("");
    const history=useHistory();
    const searchcollection=()=>{
        const payload ={
            searchTxt:value
        }    
		searchAll(payload)
            .then((res) =>{
                history.push(`/result/${value}`,{data:res.result})
            })
			.catch(err => console.log("err: ", err))
    }
    return (
        <>
            <InputGroup size="md" >
                <Input w={{ xl: "14rem", lg: "13rem",sm:"10rem",md:"11rem"}} bg="offWhite" placeholder="search collection..." onChange={event => setValue(event.target.value.toLowerCase())} value={value} />
                <InputRightAddon bg="black"transition="all 0.2s"_active={{ transform: "scale(0.96)" }} children={<GoSearch color="red" />} onClick={searchcollection}/>
            </InputGroup>
        </>
    )
}

