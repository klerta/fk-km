"use client"
import React, { useState } from "react";

const Isolation = () => {
  const [showAll, setShowAll] = useState<boolean>(false)

  return (
    <div className="flex flex-col py-10 lg:flex-row justify-between px-8 lg:px-12 gap-2 mt-10">
      <video
        src="https://res.cloudinary.com/dqz0n291c/video/upload/v1707466281/Isolation_Inte%CC%81rieure_et_exte%CC%81rieure_yfyypj.mp4"
        loop
        muted
        autoPlay
        className="2xl:w-1/2 lg:w-[601px] object-cover lg:p-5 rounded-xl lg:rounded-[50px]"
      />
      <div className="flex flex-col space-y-3">
        <p className="text-[20px] lg:text-[28px] text-brand text-center lg:text-left sm:font-semibold">Isolation (Intérieure et extérieure)</p>
        {!showAll
          ? <p className="block sm:hidden text-center">Parmi nos services, nous sommes fiers de vous présenter nos solutions complètes d'isolation, tant pour l'intérieur que pour l'extérieur. Chez nous, nous comprenons l'importance capitale d'une isolation efficace pour améliorer le confort thermique de votre habitation. <span onClick={() => setShowAll(true)} className="text-brand underline cursor-pointer">Lire la suite </span></p>
          : <div className="block sm:hidden space-y-3 text-center">
            <p>
              Parmi nos services, nous sommes fiers de vous présenter nos solutions complètes d'isolation, tant pour l'intérieur que pour l'extérieur. Chez nous, nous comprenons l'importance capitale d'une isolation efficace pour améliorer le confort thermique de votre habitation.
            </p>
            <p>
              Pour une isolation intérieure, nos produits de pointe garantissent une rétention optimale de la chaleur tout en réduisant les pertes énergétiques. Ils créent un cocon isolant, contribuant à maintenir une température ambiante agréable et à réduire significativement vos coûts énergétiques.
            </p>
            <p>
              En ce qui concerne l'isolation extérieure, nos solutions innovantes renforcent l'enveloppe thermique de votre bâtiment, offrant une protection efficace contre les variations climatiques. Cela se traduit par un environnement intérieur confortable en toutes saisons, tout en contribuant à une empreinte énergétique réduite.
            </p>
          </div>}
        <div className="hidden sm:block space-y-3 text-center lg:text-left text-[14px] lg:text-[16px] 2xl:text-[20px]">
          <p>
            Parmi nos services, nous sommes fiers de vous présenter nos solutions complètes d'isolation, tant pour l'intérieur que pour l'extérieur. Chez nous, nous comprenons l'importance capitale d'une isolation efficace pour améliorer le confort thermique de votre habitation.
          </p>
          <p>
            Pour une isolation intérieure, nos produits de pointe garantissent une rétention optimale de la chaleur tout en réduisant les pertes énergétiques. Ils créent un cocon isolant, contribuant à maintenir une température ambiante agréable et à réduire significativement vos coûts énergétiques.
          </p>
          <p>
            En ce qui concerne l'isolation extérieure, nos solutions innovantes renforcent l'enveloppe thermique de votre bâtiment, offrant une protection efficace contre les variations climatiques. Cela se traduit par un environnement intérieur confortable en toutes saisons, tout en contribuant à une empreinte énergétique réduite.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Isolation;
