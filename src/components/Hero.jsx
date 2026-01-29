import React from 'react';

export default function Hero() {
  return (
    <>
      <section className="relative w-full h-[80vh] overflow-hidden max-[900px]:h-[50vh]">
        <img
          src="/images/banner.svg"
          alt="St. Joseph's College Banner"
          className="w-full h-full object-cover block"
        />
      </section>
    </>
  );
}
