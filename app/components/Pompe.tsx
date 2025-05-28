"use client"
import React, { useState } from "react";

const Pompe = () => {
  const [showAll, setShowAll] = useState<boolean>(false)

  return (
    <div className="flex flex-col py-10 lg:flex-row justify-between px-8 lg:px-12 gap-2">
      <video
        src="https://res.cloudinary.com/dqz0n291c/video/upload/v1707391480/Pompe_a%CC%80_Chaleur_PAC_wawkeh.mp4"
        loop
        muted
        autoPlay
        className="2xl:w-1/2 lg:w-[612px] lg:p-5 rounded-xl lg:rounded-[50px] object-cover"
      />
      <div className="flex flex-col mt-2 space-y-3">
        <p className="text-[20px] lg:text-[28px] text-center lg:text-left mb-5 lg:mb-1 text-brand sm:font-semibold">Pompe à Chaleur (PAC)</p>
        {!showAll
          ? <p className="block sm:hidden text-center">Au sein de notre gamme de services diversifiée, nous mettons à votre disposition des solutions de chauffage de pointe, incluant des chaudières conventionnelles et à granulés. Chez nous, nous comprenons l'importance cruciale d'un chauffage efficace pour votre bien-être quotidien et la maîtrise de vos coûts énergétiques. <span onClick={() => setShowAll(true)} className="text-brand underline cursor-pointer">lire la suite</span></p>
          : <div className="block sm:hidden space-y-3 text-center lg:text-left text-[16px] 2xl:text-[20px]">
            <p>
              Explorez nos pompes à chaleur de qualité parmi nos services. Chez nous, nous comprenons l'importance de maximiser l'efficacité énergétique tout en assurant votre confort quotidien.
            </p>
            <p>
              Nos pompes à chaleur sont conçues pour être des solutions écologiques et économiques. Elles utilisent les ressources renouvelables de l'air ou de la terre pour produire une chaleur constante, réduisant ainsi votre empreinte carbone et générant des économies sur vos factures énergétiques.
            </p>
            <p>
              En choisissant nos pompes à chaleur, vous optez pour une technologie de pointe, garantissant un chauffage efficace et respectueux de l'environnement. Adaptées à divers besoins, elles assurent une distribution uniforme de la chaleur, améliorant ainsi votre confort thermique.
            </p>
            <p>
              Faites le choix d'un avenir plus durable avec nos pompes à chaleur. Explorez notre gamme pour une solution énergétique propre et économique.
            </p>
          </div>}
        <div className="hidden sm:block space-y-3 text-center lg:text-left text-[16px] 2xl:text-[20px]">
          <p>
            Explorez nos pompes à chaleur de qualité parmi nos services. Chez nous, nous comprenons l'importance de maximiser l'efficacité énergétique tout en assurant votre confort quotidien.
          </p>
          <p>
            Nos pompes à chaleur sont conçues pour être des solutions écologiques et économiques. Elles utilisent les ressources renouvelables de l'air ou de la terre pour produire une chaleur constante, réduisant ainsi votre empreinte carbone et générant des économies sur vos factures énergétiques.
          </p>
          <p>
            En choisissant nos pompes à chaleur, vous optez pour une technologie de pointe, garantissant un chauffage efficace et respectueux de l'environnement. Adaptées à divers besoins, elles assurent une distribution uniforme de la chaleur, améliorant ainsi votre confort thermique.
          </p>
          <p>
            Faites le choix d'un avenir plus durable avec nos pompes à chaleur. Explorez notre gamme pour une solution énergétique propre et économique.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pompe;
