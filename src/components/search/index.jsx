import React from "react";
import Image from "next/image";

const Search = () => {
    return <div className={"w-[248px] flex items-center gap-x-[18px] border  rounded-[45px] px-3"}>
      <Image src={"/images/search.png"} alt="search" width={24} height={23}/>
      <input type="search" placeholder="Поиск..." className="bg-transparent text-lg text-white placeholder:text-white py-2 px-2 w-[150px]"/>  
    </div>
}

export default Search;