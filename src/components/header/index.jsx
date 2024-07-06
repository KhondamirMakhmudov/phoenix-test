import React from "react";
import Brand from "../brand";
import Menu from "../menu";
import {motion} from 'framer-motion';

const Header = () => {
    return (
        <motion.header className="container mx-auto flex justify-between items-center py-4"             initial={{ opacity: 0, translateY: "-100px" }}
        animate={{ opacity: 100, translateY: "0px" }}
        transition={{ duration: 0.7 }}>

            <Brand />
            <Menu/>
        </motion.header>
    )
}

export default Header;