import { useState } from "react";
import "./App.css";
import { Menu, X } from "lucide-react";
function App() {
const [videoURL, setVideoURL] = useState("https://pin.it/7BrxEHVsF");
const [isOpen, setIsOpen] = useState(false);
const handleUpload = (e) => {
const file = e.target.files[0];
if (file) {
const url = URL.createObjectURL(file);
setVideoURL(url);
}
};

return ( <div className="relative min-h-screen bg-black text-white">

<nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur px-6 py-6">

  <div className="flex justify-between items-center">

    {/* Logo */}
    <div className="text-xl font-bold tracking-widest">
      IMPRINT MEDIA
    </div>
 
    <div className="hidden md:flex gap-8 text-sm">
      <a href="#work" className="hover:text-gray-300">Work</a>
      <a href="#about" className="hover:text-gray-300">About</a>
      <a href="#people" className="hover:text-gray-300">People</a>
      <a href="#contacts" className="hover:text-gray-300">Contact</a>
    </div>

    <button
      className="md:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? <X size={28} /> : <Menu size={28} />}
    </button>

  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden flex flex-col gap-6 mt-6 text-center text-sm">
      <a href="#work" onClick={() => setIsOpen(false)}>Work</a>
      <a href="#about" onClick={() => setIsOpen(false)}>About</a>
      <a href="#people" onClick={() => setIsOpen(false)}>People</a>
      <a href="#contacts" onClick={() => setIsOpen(false)}>Contact</a>

    </div>
  )}

</nav>

  {/* HERO TEXT SECTION */}
  <section className="text-white pt-32 pb-12 px-6 text-center">
    <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
      We Design. We Print. We Advertise.
    </h2>

    <p className="max-w-2xl mx-auto text-lg">
      Your one-stop solution for branding, printing, advertising,
      and corporate brand development.
    </p>
  </section>

  {/*VIDEO HERO SECTION */}
  <div className="relative h-screen w-full overflow-hidden">

    <video
      className="absolute w-full h-full object-cover"
      src={videoURL}
      autoPlay
      muted
      loop
      playsInline
    />

    <div className="absolute inset-0 bg-black/40"></div>

    <div className="absolute inset-0 flex items-center justify-center">
      <button className="border border-white px-8 py-3 tracking-widest hover:bg-white hover:text-black transition">
        VIEW SHOWREEL
      </button>
    </div>

  </div>
  <section id="work" className="min-h-screen black text-white px-6 py-20">
  <h2 className="text-4xl font-bold mb-6">Our Work</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

    <img
      src="\assets\Img.jpg"
      alt="Project"
      className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
    />
    <img
      src="\assets\Img1.jpg"
      alt="Project 1"
      className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
    />
    <img
      src="\assets\Img2.jpg"
      alt="Project 2"
      className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
    />
    </div>
</section>
<section id="about" className="bg-black text-white px-6 py-20">
  <h2 className="text-4xl font-bold mb-6">About</h2>
  <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed"><i>We are visual storytellers and brand architects, capturing moments and crafting identities that leave lasting impressions. From high-profile political campaigns and corporate branding projects to intimate weddings, vibrant birthdays, and unforgettable housewarming celebrations, we bring creativity, precision, and passion to every assignment. As photographers, we freeze powerful moments in time; as branding specialists, we shape how individuals, businesses, and public figures are seen and remembered. Whether it’s designing compelling campaign visuals, building a company’s brand presence, documenting milestone celebrations, or creating promotional content that speaks with clarity and confidence, we turn ideas into impactful visual experiences that connect, inspire, and elevate.</i></p>
  </section>
  <section id="contact" className="bg-black text-white px-6 py-20">
  <h2 className="text-4xl font-bold mb-6">Contact</h2>
  <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed">imprintmedia@gmail <br/>imprintmedi@creativity</p>
  </section>

  {/*UPLOAD SECTION  */}
  {/* <div className="p-10 bg-black text-center">
    <h2 className="text-xl mb-4">Upload Your Reel</h2>

    <input
      type="file"
      accept="video/*"
      onChange={handleUpload}
      className="bg-white text-black p-2 rounded"
    />
  </div> */}

  {/* FOOTER  */}
  <footer className="bg-black text-white text-center p-6">
    <div className="md:flex gap-6 text-sm">
      <span>Tiktok</span>
      <span>Instagram</span>
    </div>
    <p>© 2026 Imprint Media. All Rights Reserved.</p>
  </footer>

</div>

);
}

export default App;
