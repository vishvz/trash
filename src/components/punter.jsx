import '../assets/styles/global.css'
import pngwing3 from '../assets/images/pngwing3.png'
import pngwing2 from '../assets/images/pngwing2.png'
import Button from './button'

function Punter() {
  return (
    <section className="relative mx-auto h-auto py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        <div>
          <img
            src={pngwing3}
            alt=""
            srcSet=""
            className="lg:absolute lg:-left-14 lg:top-0"
          />
        </div>
        <div className="text-center">
          <h1 className="text-bg text-xl uppercase font-bold md:text-3xl lg:text-5xl md:pb-10 pb-5 font-['light']">
            The Punter FRIENDLY BOOK
          </h1>
          <h2 className=" text-white md:text-xl lg:text-2xl md:pb-10 pb-5 font-['Medium']">
            We Deals With All Branded Sites, And Present The Fastest Withdrawal
            Service.
          </h2>
          <h2 className=" text-white md:text-xl lg:text-3xl md:pb-5 pb-3 font-['Medium']">
            We deals only on WhatsApp
          </h2>
          <div className="sm:flex-row md:flex lg:flex gap-5 justify-center flex flex-col items-center">
            <Button />
            <Button />
          </div>
        </div>
        <div>
          <img
            src={pngwing2}
            alt=""
            srcSet=""
            className="lg:absolute lg:right-0 lg:top-0"
          />
        </div>
      </div>
    </section>
  )
}

export default Punter
