import React from "react";
import Brand from "../brand";
import Menu from "../menu";

const Header = () => {
    return (
        <header className="container mx-auto flex justify-between items-center py-4">
            <Brand />
            <Menu/>
        </header>
    )
}

export default Header;