"use client"
import React, { useState } from "react";

const Ventilation = () => {
  const [showAll, setShowAll] = useState<boolean>(false)

  return (
    <div className="flex flex-col space-y-9 sm:flex-row w-full justify-between">
      {/* Text and button section on the left */}
      <div className="flex flex-col px-8 lg:px-14 w-full sm:w-1/2 mt-8 sm:mt-16 space-y-3 sm:space-y-4">
        <h3 className="hidden sm:block text-lg sm:text-3xl font-semibold mt-8 sm:mt-12 text-center sm:text-left text-[#0170B7]">
          Ventilation (double flux / simple flux){" "}
        </h3>
        <div className="flex flex-col items-center justify-center w-full sm:hidden">
          <video
            src="https://res.cloudinary.com/dqz0n291c/video/upload/v1707398169/Ventilation_double_flux_simple_flux_k6nmyx.mp4"
            className="w-full h-full sm:w-[60%] sm:h-[60%] mx-auto rounded-lg"
            autoPlay
            loop
            muted
          />
          <h3 className="block sm:hidden text-lg font-regular sm:font-semibold mt-8 text-center text-[#0170B7] mb-5">
            Ventilation (double flux / simple flux){" "}
          </h3>
        </div>
        <div className="hidden sm:block space-y-3 2xl:text-[20px]">
          <p>Assurez-vous d'une Qualité d'Air Exceptionnelle avec Nos Systèmes de Ventilation</p>
          <p>Découvrez nos solutions de ventilation à double flux et à simple flux parmi nos services. Nous comprenons l'importance essentielle d'une qualité d'air intérieur optimale pour votre bien-être quotidien.</p>
          <p>Nos systèmes de ventilation à double flux vous offrent une approche innovante pour une circulation d'air continue tout en maximisant l'efficacité énergétique. Ils contribuent à maintenir un environnement intérieur sain en éliminant les polluants et en régulant l'humidité.</p>
          <p>Si vous recherchez une option plus économique, nos systèmes de ventilation à simple flux assurent une circulation d'air constante tout en évacuant l'air vicié. Ils sont une solution pratique pour améliorer la qualité de l'air dans votre espace, favorisant un environnement intérieur frais et sain.</p>
          <p>Choisissez nos systèmes de ventilation pour bénéficier de solutions de pointe qui favorisent un air intérieur propre et confortable. Explorez notre gamme et assurez-vous une atmosphère intérieure saine et agréable.</p>
        </div>
        {!showAll ? <>
          <p className="block sm:hidden px-10 text-center">Assurez-vous d'une Qualité d'Air Exceptionnelle avec Nos Systèmes de Ventilation</p>
          <p className="block sm:hidden px-10 text-center">Découvrez nos solutions de ventilation à double flux et à simple flux parmi nos services. Nous comprenons l'importance essentielle d'une qualité d'air intérieur optimale pour votre bien-être quotidien. <span onClick={() => setShowAll(true)} className="text-brand cursor-pointer underline">lire la suite</span></p>
        </>
          : <div className="block sm:hidden text-center space-y-3">
            <p>Assurez-vous d'une Qualité d'Air Exceptionnelle avec Nos Systèmes de Ventilation</p>
            <p>Découvrez nos solutions de ventilation à double flux et à simple flux parmi nos services. Nous comprenons l'importance essentielle d'une qualité d'air intérieur optimale pour votre bien-être quotidien.</p>
            <p>Nos systèmes de ventilation à double flux vous offrent une approche innovante pour une circulation d'air continue tout en maximisant l'efficacité énergétique. Ils contribuent à maintenir un environnement intérieur sain en éliminant les polluants et en régulant l'humidité.</p>
            <p>Si vous recherchez une option plus économique, nos systèmes de ventilation à simple flux assurent une circulation d'air constante tout en évacuant l'air vicié. Ils sont une solution pratique pour améliorer la qualité de l'air dans votre espace, favorisant un environnement intérieur frais et sain.</p>
            <p>Choisissez nos systèmes de ventilation pour bénéficier de solutions de pointe qui favorisent un air intérieur propre et confortable. Explorez notre gamme et assurez-vous une atmosphère intérieure saine et agréable.</p>
          </div>}
      </div>

      {/* Image section for Desktop on the right */}
      <div className="hidden sm:flex items-center justify-center">
        <video
          src="https://res.cloudinary.com/dqz0n291c/video/upload/v1707398169/Ventilation_double_flux_simple_flux_k6nmyx.mp4"
          className="w-[582px] h-[406px] object-cover"
          autoPlay
          loop
          muted
        />
      </div>

      {/* Video section for Mobile on the right */}
    </div>
  );
};

export default Ventilation;
