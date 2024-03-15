import React from 'react'

export default function Footer() {
  return (
    <div className="w-dvw h-[25rem] bg-red-400 flex">
        <div className="left w-1/2 h-full">
            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d514.4189544923668!2d4.340249104727414!3d50.8551363465972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c38c275028d3%3A0xc7799151146ebf77!2sMolenGeek!5e0!3m2!1sfr!2sbe!4v1710490942566!5m2!1sfr!2sbe"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                
            </iframe>
        </div>
        <div className="right w-1/2 h-full flex flex-col justify-center items-center">
            <h1>CONTACT</h1>
            <p>Address: Pl. de la Minoterie 10, 1080 Molenbeek-Saint-Jean</p>
            <p>Phone: 0470675141</p>
            <a href="https://www.molengeek.com">MolenPizza.com</a>
            <a href="https://instagram.com">Our instagram</a>

        </div>
        
    </div>
  )
}
