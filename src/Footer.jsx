import React from 'react'

export default function Footer() {
  return (
    <div className="w-dvw h-[25rem] bg-[#9A031E] flex max-[768px]:flex-col max-[768px]:h-[40rem]">
        <div className="left w-1/2 h-full max-[768px]:w-full">
            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d514.4189544923668!2d4.340249104727414!3d50.8551363465972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c38c275028d3%3A0xc7799151146ebf77!2sMolenGeek!5e0!3m2!1sfr!2sbe!4v1710490942566!5m2!1sfr!2sbe"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                
            </iframe>
        </div>
        <div className="right w-1/2 h-full flex flex-col gap-5 justify-center items-end text-white pr-[8rem] max-[1200px]:pr-[2rem] max-[768px]:items-center max-[768px]:w-full max-[768px]:pr-0">
            <h1 className="text-2xl font-bold">CONTACT</h1>
            <p><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp; Pl. de la Minoterie 10, 1080 Molenbeek-Saint-Jean</p>
            <p><i class="fa-solid fa-phone"></i>&nbsp;&nbsp; 0470675141</p>
            <p><i class="fa-solid fa-globe"></i><a  href="https://www.molengeek.com">&nbsp;&nbsp;MolenPizza.com</a></p>
            <p><i class="fa-brands fa-instagram"></i><a href="https://instagram.com">&nbsp;&nbsp;Our instagram</a></p>

        </div>
        
    </div>
  )
}
