import React from 'react';
import Image from "next/image";

const Brand = () => {
    return (
        <div>
            <Image src={"/images/brand_logo.png"} alt={"logo"} width={122} height={66}/>
        </div>
    );
};

export default Brand;