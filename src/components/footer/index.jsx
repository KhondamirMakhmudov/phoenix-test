import React from "react";
import Brand from "../brand";
import Link from "next/link";
import Image from "next/image";


const Footer = () => {
    return (
        <footer className="bg-[#231E1E]  2 tenor-sans-regular bg-no-repeat bg-center pt-[50px] pb-[70px] px-[50px] text-white bg-footer-section bg-blend-color-dodge" >
            <div className="container mx-auto flex justify-between">
                <div className="flex items-start gap-x-[50px]">
                    <div className="col-span-2">
                        <Brand/>
                    </div>

                    <div className="col-span-4 max-w-[421px] text-white">
                        <h4 className="mb-[15px]">
                            Адрес головного офиса:
                        </h4>
                        <p className="mb-[30px]">
                            100100, Республика Узбекистан, город Ташкент, Яккасарайский район, улица Шота Руставели, 53Б  
                        </p>

                        <h4 className="mb-[15px]">
                            Адрес производства:
                        </h4>
                        <p>
                        111305, Республика Узбекистан, Ташкентская область, Паркентский район, Каракалпакский Марказий МФУ                </p>
                    </div>
                </div>

                <div className="flex items-start gap-x-[20px]">
                    <div className="">
                        <ul className="flex flex-col gap-y-[10px]">
                            <li>Главная</li>
                            <li>О нас</li>
                            <li>Продукты</li>
                            <li>Контакты</li>
                            <li>Новости</li>

                        </ul>
                    </div>

                    <div className="">
                        <ul className="flex flex-col gap-y-[10px]">
                            <li>Как с нами связаться?</li>
                            <li>
                                <a href={"mailto:info@yumabio.com"}>
                                    info@yumabio.com
                                </a>
                            </li>
                            <li>
                                <a href={"tel:+998954788887"}>
                                    +998 95 478 88 87
                                </a>
                            </li>
                            <li>
                                <a href={"tel:+998933212442"}>
                                    +998 93 321 24 42
                                </a>
                            </li>
                            <li>
                                <ul className="flex gap-x-[15px]">
                                    <li>
                                        <Image src="/images/instagram.png" alt="instagram" width={24} height={24}/>
                                    </li>
                                    <li>
                                        <Image src="/images/facebook.png" alt="facebook" width={24} height={24}/>
                                    </li>
                                    <li>
                                        <Image src="/images/telegram.png" alt="telegram" width={24} height={24}/>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer