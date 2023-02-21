import "../assets/styles/global.css";
import punter from "../assets/images/punter.webp";
import Button from "./button";

function Punter() {
  return (
    <section className="container mx-auto min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
        <div className="flex flex-col justify-center items-center gap-5 px-3 py-5 md:items-start md:flex-1">
          <h1 className="text-bg text-center text-3xl uppercase font-bold md:text-start md:text-3xl lg:text-5xl md:pb-5 pb-3 font-['light']">
            The Punter FRIENDLY BOOK
          </h1>
          <h2 className=" text-white md:text-xl lg:text-2xl md:pb-5 pb-3 md:text-start text-center font-['Medium']">
            We Deals With All Branded Sites, And Present The Fastest Withdrawal
            Service.
          </h2>
          <h2 className=" text-white md:text-xl lg:text-2xl md:pb-5 pb-3 font-['Medium']">
            We deals only on WhatsApp
          </h2>
          <div className="flex flex-col sm:flex-row gap-5">
            <Button />
            <Button />
          </div>
        </div>
        <div className="px-3 h-38 sm:flex-1">
          <img src={punter} alt="" srcSet="" />
        </div>
      </div>
    </section>
  );
}

export default Punter;
