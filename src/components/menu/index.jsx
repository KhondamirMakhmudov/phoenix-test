import { get } from 'lodash';
import React from 'react';
import Search from '../search';
import LanguageSelectButton from '../language';


const menuData = [
    {
        id: 1,
        title: "Главная"
    },
    {
        id: 2,
        title: "О нас"
    },
    {
        id: 3,
        title: "Продукты"
    },
    {
        id: 4,
        title: "Контакты"
    },
    {
        id: 5,
        title: "Новости"
    }
]


const Menu = () => {
    return (
        <nav className="flex justify-center gap-x-[40px] items-center">
            
                {menuData.map((item) => 
                <ul key={get(item, "id")} className=''>
                    <li className="text-white text-[18px] font-bold menu-item cursor-pointer">
                        {get(item, "title")}
                    </li>
                    
                </ul> )}
            <div className='flex items-center'>
                <Search/>
                <LanguageSelectButton/>
            </div>
        </nav>
    )
}

export default Menu;