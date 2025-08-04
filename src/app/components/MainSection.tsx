import React from "react";
import NavBar from "./NavBar";

export default function MainSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden ">
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-[url('/bg3.jpg')] bg-cover bg-center z-0"
        aria-hidden="true"
      ></div>

      {/* Overlay en fond */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/100 via-white/10 to-transparent z-10" />


      {/* NavBar au-dessus */}
      <NavBar />
    </section>
  );
}
