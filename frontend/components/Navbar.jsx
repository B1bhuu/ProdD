import React from 'react'
import {Button,Container,Flex,HStack,Text,useColorMode} from "@chakra-ui/react"
import { Link } from 'react-router-dom'

import {PlusSquareIcon} from "@chakra-ui/icons"

import {IoMoon} from "react-icon/lu"


const Navbar = () => {
    const {colorMode,toggleColorMode}=useColorMode();

    return (
    <Container maxW={"1140px"} px={"4"}>
        <Flex h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:'column',
                sm:"row",
            }}
        >

        </Flex>
    </Container>
  )
}

export default Navbar