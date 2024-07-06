import Image from "next/image";
import React from "react";




const Cards = ({image, title, classnames }) => {
    return (
        <div className="col-span-4 flex flex-col justify-between gap-x-4 p-4 bg-no-repeat bg-cover w-[395px]  h-[324px]  rounded-[9px]" style={{ backgroundImage: `url(${image})` }}>
            <h3 className="text-[27px] text-white">
                {title}
            </h3>

            <button className={`flex gap-x-4 items-center ${classnames}`}>
                <p className="text-[27px] text-white">
                    Читать
                </p>

                <Image src={"/images/arrow-right.png"} alt="arrow-right" width={43} height={24}/>

            </button>
        </div>
    )
}

export default Cards;