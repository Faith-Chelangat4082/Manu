import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
return (
     <div className="min-h-screen bg-gray-50 text-gray-800">

      
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-5xl font-bold text-BLACK-600">IMPRINT MEDIA</h1>

          <div className="space-x-6 hidden md:block font-medium">
            <a href="#services" className="hover:text-purple-600">Services</a>
            <a href="#portfolio" className="hover:text-purple-600">Portfolio</a>
            <a href="#about" className="hover:text-purple-600">About</a>
            <a href="#contact" className="hover:text-purple-600">Contact</a>
          </div>
        </div>
      </nav>

    
      <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white pt-32 pb-24 px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          We Design. We Print. We Advertise.
        </h2>

        <p className="max-w-2xl mx-auto text-lg mb-8">
          Your one-stop solution for branding, printing, advertising, and corporate brand development.
        </p>

        {/* <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:scale-105 transition">
          Get Quote
        </button> */}
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12">Our Services</h3>

          <div className="grid md:grid-cols-4 gap-8">

            {/* Printing */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <h4 className="text-xl font-bold mb-3">Printing</h4>
              <p>Posters, banners, business cards, t-shirts, stickers and more.</p>
            </div>

            {/* Advertising */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <h4 className="text-xl font-bold mb-3">Advertising</h4>
              <p>Billboards, social media adverts, marketing campaigns.</p>
            </div>

            {/* Personal Branding */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <h4 className="text-xl font-bold mb-3">Personal Branding</h4>
              <p>Logos, CV branding, portfolio branding, social media kits.</p>
            </div>

            {/* Company Branding */}
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
              <h4 className="text-xl font-bold mb-3">Company Branding</h4>
              <p>Corporate identity, brand guidelines, packaging design.</p>
            </div>

          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12">Our Work</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="h-60 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl"></div>
            <div className="h-60 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-xl"></div>
            <div className="h-60 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl"></div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-bold mb-6">About Us</h3>
          <p className="text-lg text-gray-600">
            Imprint Media is a creative company specializing in printing, advertising,
            and brand development. We help businesses and individuals stand out with
            professional, high-quality branding solutions.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-purple-600 text-white py-20 px-6 text-center">
        <h3 className="text-4xl font-bold mb-6">Let’s Work Together</h3>
        <p className="mb-8">Contact us today for professional branding and printing services.<br/>
        Phone:0714777678
        <br/>
        Instagram:
        <br/>
        Email:
        </p>
       
        <button className="bg-white text-purple-600 px-10 py-3 rounded-full font-bold hover:scale-105 transition">
          Contact Us
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center p-6">
        <p>© 2026 Imprint Media. All Rights Reserved.</p>
      </footer>

    </div>
  )
}
 
  


export default App
