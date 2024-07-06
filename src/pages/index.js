import Image from "next/image";
import Search from "@/components/search";
import Header from "@/components/header";
import Button from "@/components/button";
import Cards from "@/components/cards";
import Footer from "@/components/footer";
import {motion} from 'framer-motion';




export default function Home() {
  return (
    <div className={"min-h-screen  mx-auto"}>
      
      
      <main className="bg-main-section-sky bg-opacity-10 relative z-30 bg-no-repeat bg-cover text-transparent min-h-[879px]">
      <Header />
        <div className="container mx-auto mt-[60px] z-50">
          <motion.h1             
            initial={{ opacity: 0, translateY: "-100px" }}
            animate={{ opacity: 100, translateY: "0px" }}
            transition={{ duration: 0.7 }} className="text-[64px] max-w-[1020px]  tenor-sans-regular text-white">
          Экологически чистые продукты из богатой флоры <span className="text-[#4EB748] underline">Узбекистана</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, translateY: "100px" }}
            animate={{ opacity: 100, translateY: "0px" }}
            transition={{ duration: 0.7 }}
            className="text-white tenor-sans-regular my-[30px] text-[20px] max-w-[914px]">
                Страна Шелкового пути, древней сети торговых маршрутов, была местом культурного обмена и глубоких знаний. Опираясь на богатое историческое наследие Узбекистана и стремление к инновациям, в 2018 году в самом сердце Центральной Азии было создано современное предприятие, целью которого является использование экологически чистых, натуральных местных природных богатств — цветов, листьев, кожуры, семян, корней дикорастущих лекарственных растений, фруктов и овощей
          </motion.p>

          <motion.div 
                        initial={{ opacity: 0, translateX: "-100px" }}
                        animate={{ opacity: 100, translateX: "0px" }}
                        transition={{ duration: 0.7 }}
          className={"flex gap-x-[30px]"}>
            <Button>
              <p>Связаться с нами</p>
            </Button>

            <Button classnames={"flex items-center gap-x-2"}>
              <p>Связаться с нами</p>
              <Image src={"/images/play-circle.png"} alt="play-circle" width={30} height={30}/>
            </Button>
          </motion.div>
        </div>
        <div className=" absolute  bottom-0 -z-10 bg-main-section w-full min-h-[522px] bg-no-repeat bg-cover"></div>
        <div className=" absolute  top-0 -z-10 bg-linear-main w-full min-h-[1022px] bg-no-repeat bg-cover"></div>
        <div className=" absolute  bottom-0 -z-10 bg-linear-main-bottom w-full min-h-[152px] bg-no-repeat bg-cover"></div>
      </main>

      <section className="bg-second-section tenor-sans-regular py-[80px] bg-no-repeat bg-cover">
          <div className="container mx-auto ">
            <h1 className={" text-[48px]"}>
              Полезные статьи
            </h1>

            <p className="text-[32px] max-w-[875px] mt-[15px] mb-[70px]">
              На нашем сайте мы публикуем новости отрасли и исследовательские статьи. Будьте в курсе новостей и интересных статей.
            </p>

            <div className="flex items-center gap-x-8 ">
                <Cards classnames={"hidden"} image={"/images/card1.png"}/>
                <Cards title={"Почему следует принимать пищевые добавки?"} image={"/images/card2.png"}/>
                <Cards title={"Пищевые ингредиенты Европа 2023 Франкфурт"}  image={"/images/card3.png"}/>
            </div>
          </div>
      </section>

      <Footer/>
    </div>
  );
}
