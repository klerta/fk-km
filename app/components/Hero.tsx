import React from "react";
import Navbar from "./navigation/Navbar";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center sm:-mt-14 -mt-20 justify-center w-full h-screen text-white hero-background">
      
      {/* Left Side: Background Image */}
      <div className="w-full h-full absolute top-0 left-0 bg-cover bg-center hero-background-image"></div>

      <div className="self-end w-[60%] space-y-4 flex items-center justify-center md:p-12">
        <div className="w-[200px] sm:w-[600px]">
          <h1 className="text-[12px] top-8 md:text-[20px] text-[#0170B7] space-y-10 font-medium md:p-8 text-center">
            L'INNOVATION ÉNERGÉTIQUE, AU CŒUR DE NOTRE EXPERTISE
          </h1>
          <p className="text-[8px] md:text-[14px] rounded-3xl leading-relaxed p-2 md:p-10 bg-[rgba(255,255,255,0.29)] text-[#000000] mb-8">
            Fondée le 2 novembre 2023, FAICAL KSIBI & KOUNOUZ MESTIRI se
            spécialise dans la distribution de solutions novatrices pour la
            rénovation énergétique au Portugal :
            <br />
            <br />
            Chauffage, Isolation, Solaire, Biomasse.
            <br />
            <br />
            En tant qu'acteur résolument engagé, FAICAL KSIBI & KOUNOUZ MESTIRI
            mobilise son réseau pour relever le défi de la transition
            énergétique, convaincu que c'est en unissant nos idées et en
            collaborant étroitement que nous atteindrons nos objectifs !
            <br />
            <br />
            Nous mettons à votre disposition une vaste gamme de produits
            certifiés, accompagnée de conseils personnalisés.
            <br />
            <br />
            FAICAL KSIBI & KOUNOUZ MESTIRI est à vos côtés pour améliorer le
            quotidien de vos clients, réduire leurs dépenses énergétiques, les
            orienter vers des opportunités de subventions, tout en agissant en
            faveur de l'environnement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
