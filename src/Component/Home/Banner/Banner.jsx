import React from "react";

const Banner = () => {
  return (
    <div className=" relative w-fit h-fit bg-red-400 flex items-center justify-center">
      <div className="absolute z-10 hero-overlay bg-opacity-40"></div>
      <div className="text-right  absolute z-20 h-3/5  overflow-y-scroll sm:overflow-hidden w-8/12 ">
        <h1 className="text-base sm:text-2xl md:text-3xl font-semibold text-[#ffb300]">
          Discover Your Unique Style
        </h1>
        <p className="text-sm md:text-2xl text-[#86c9ff]">
          Elevate your fashion game with{" "}
          <span className="inline-block text-lg sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#1575c9]">
            Chic Style
          </span>{" "}
          – the ultimate destination for fashion enthusiasts. We invite you to
          embark on a journey of self-expression, where your style tells your
          story.Our commitment to quality and timeless style ensures that you
          always feel confident, stylish, and empowered. Find the perfect outfit
          for any occasion, express your individuality, and make a statement
          with your wardrobe.
        </p>
      </div>

      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://t4.ftcdn.net/jpg/06/21/12/53/240_F_621125391_a7n8jKbB9lPnLIU0Bb9h0f7zh6DCABgK.jpg"
            className="w-full"
          />
          <div className="absolute z-20 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://t4.ftcdn.net/jpg/06/21/40/87/240_F_621408782_KJnEDHdgMh42XJFSQGfa0VqhiU86Oyg3.jpg"
            className="w-full"
          />
          <div className="absolute z-20 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://t3.ftcdn.net/jpg/06/12/07/98/240_F_612079823_RY8mFpGyeGElPct7DC6VQaWuuWdRUuyP.jpg"
            className="w-full"
          />
          <div className="absolute z-20 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://t4.ftcdn.net/jpg/06/03/13/33/240_F_603133342_VOtpAE8oEwhi1hlIQzKs4Hl9IPn05FSV.jpg"
            className="w-full"
          />
          <div className="absolute z-20 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
