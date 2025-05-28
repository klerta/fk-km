import React from "react";

const Contact = () => {
  return (
    <div id='contact' className="flex flex-col items-center gap-5 lg:gap-[5rem] px-7 xl:px-32 py-16">
      <div>
        <p className="text-brand font-bold text-center text-[18px] lg:text-4xl">
          Contact
        </p>
        <p className="text-brand font-medium text-[13px] lg:text-2xl text-center">
          N&apos;HÉSITEZ PAS À NOUS ENVOYER UN MESSAGE
        </p>
      </div>
      <div className="border-[0.5px] border-brand rounded-[25px] p-3 xl:p-10 w-auto 2xl:w-[1200px]">
        <div className="flex flex-col xl:flex-row xl:gap-6">
          <div className="flex justify-center">
            <iframe
              src="https://maps.google.com/maps?q=Avenida 5 de Outubro, n.o 148 - 3.o G&t=&z=10&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[280px] xl:w-[404px] lg:h-[377px] 2xl:w-[600px] rounded-[20px] border-brand border-[0.5px]"
              loading="lazy"
            />
          </div>
          <div className='flex flex-col w-full xl:px-10'>
            <div className="flex flex-col lg:gap-5 justify-between mt-10">
              <div className="flex flex-col gap-5">
                <div className="flex flex-row justify-between lg:justify-normal gap-2 lg:gap-5">
                  <input
                    className="border-brand bg-[#fcf8f8] border-[0.5px] rounded-[10px] w-full h-[45px] lg:h-[49px] pl-5 text-black"
                    placeholder="Nom"
                  />
                  <input
                    className="border-brand bg-[#fcf8f8] border-[0.5px] rounded-[10px] w-full h-[45px] lg:h-[49px] pl-5 text-black"
                    placeholder="Prenom"
                  />
                </div>
                <input
                  className="border-brand bg-[#fcf8f8] border-[0.5px] rounded-[10px] h-[45px] lg:h-[49px] pl-5 text-black"
                  placeholder="Adresse Email"
                />
                <textarea
                  className="border-brand bg-[#fcf8f8] border-[0.5px] rounded-[10px] h-[100px] pl-5 pt-3 text-black"
                  placeholder="Message"
                />
              </div>
            </div>
            <button className="bg-brand text-white py-3 w-[154px] rounded-[10px] hover:bg-brand duration-300 ml-auto mt-8 mb-2">
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
