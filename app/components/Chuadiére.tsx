"use client"
import React, { useState } from "react";

const Chuadiére = () => {
  const [showAll, setShowAll] = useState<boolean>(false)

  return (
    <div>
      <p className="text-lg md:text-[22px] mb-4 text-center font-bold leading-relaxed text-[#0170B7]">
        Chaudière normal / à granulés
      </p>
      <div className=" mx-auto  w-[80%] h-[80%]">
        <video
          src="https://res.cloudinary.com/dqz0n291c/video/upload/v1707317556/Chaudie%CC%80re_normal_a%CC%80_granule%CC%81s_j3vata.mp4"
          className=" "
          autoPlay
          loop
          muted
        />
      </div>
      <div className="hidden sm:block lg:w-[65%] w-[90%] text-center mx-auto text-base leading-8 space-y-5">
        <p>Au sein de notre gamme de services diversifiée, nous mettons à votre disposition des solutions de chauffage de pointe, incluant des chaudières conventionnelles et à granulés. Chez nous, nous comprenons l'importance cruciale d'un chauffage efficace pour votre bien-être quotidien et la maîtrise de vos coûts énergétiques.</p>
        <p>Les chaudières conventionnelles que nous proposons sont synonymes de fiabilité avérée et de performances constantes. Dotées des dernières avancées technologiques, elles assurent une répartition homogène de la chaleur dans votre espace, créant ainsi une atmosphère confortable.</p>
        <p>Si vous recherchez une solution respectueuse de l'environnement et économe en énergie, nos chaudières à granulés sont une option moderne. Fonctionnant avec des granulés de bois, elles contribuent à réduire votre empreinte carbone tout en offrant une alternative durable.</p>
      </div>
      {!showAll
        ? <p className="block sm:hidden text-center px-10">Au sein de notre gamme de services diversifiée, nous mettons à votre disposition des solutions de chauffage de pointe, incluant des chaudières conventionnelles et à granulés. Chez nous, nous comprenons l'importance cruciale d'un chauffage efficace pour votre bien-être quotidien et la maîtrise de vos coûts énergétiques. <span onClick={() => setShowAll(true)} className="text-brand underline cursor-pointer">lire la suite</span></p>
        : <div className="block sm:hidden lg:w-[65%] w-[90%] text-center mx-auto text-base space-y-5">
          <p>Au sein de notre gamme de services diversifiée, nous mettons à votre disposition des solutions de chauffage de pointe, incluant des chaudières conventionnelles et à granulés. Chez nous, nous comprenons l'importance cruciale d'un chauffage efficace pour votre bien-être quotidien et la maîtrise de vos coûts énergétiques.</p>
          <p>Les chaudières conventionnelles que nous proposons sont synonymes de fiabilité avérée et de performances constantes. Dotées des dernières avancées technologiques, elles assurent une répartition homogène de la chaleur dans votre espace, créant ainsi une atmosphère confortable.</p>
          <p>Si vous recherchez une solution respectueuse de l'environnement et économe en énergie, nos chaudières à granulés sont une option moderne. Fonctionnant avec des granulés de bois, elles contribuent à réduire votre empreinte carbone tout en offrant une alternative durable.</p>
        </div>}
    </div>
  );
};

export default Chuadiére;
