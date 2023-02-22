import most from "../assets/images/most.png";
import bannerRight from "../assets/images/image-1main-right-banner.webp";
import bannerLeft from "../assets/images/image-2main-left-banner_1.webp";
import Button from "../components/button";

function Banner() {
  return (
    <>
      <section className="  relative mx-auto h-auto py-10 md:mb-40">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="hidden md:block">
            <img
              src={bannerLeft}
              alt=""
              srcSet=""
              className="lg:absolute lg:-left-14 lg:top-0"
            />
          </div>
          <div className="flex flex-col items-center gap-5 mt-24 text-center">
            <h1 className="text-bg max-w-lg text-xl uppercase font-bold md:text-3xl lg:text-5xl md:pb-5 pb-3 font-['light']">
              Karlo duniya mutthi me, Khel ke Zetbet ke sath.
            </h1>
            <img src={most} alt="" srcSet="" className="lg:w-80 w-60" />
            <h2 className=" text-white md:text-xl lg:text-2xl md:pb-5 pb-3 text-lg font-['Medium']">
              For newID WhatsApp us on
            </h2>
            <div className="sm:flex-row md:flex lg:flex gap-5 justify-center flex flex-col items-center">
              <Button />
              <Button />
            </div>
          </div>
          <div>
            <img
              src={bannerRight}
              alt=""
              srcSet=""
              className="lg:absolute lg:right-0 lg:top-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
