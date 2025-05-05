import Images from '../../../../assets'
import GlitchText from '../../../../components/color/textGlitch'

export default function Banner () {

  return (
    <section
      id="hero"
      className="relative z-10 bg-black grid min-h-[35rem] lg:h-[80vh] max-h-[55rem] w-full grid-cols-12 grid-rows-4"
    >
        <img
          src={Images.banner || "#"}
          alt="banner"
          className="col-span-full row-span-full h-full w-full object-cover object-[center_70%] absolute inset-0 z-0"
        />

      <div className="z-20 absolute inset-0 bg-gradient-to-r from-black to-black opacity-50 col-span-full row-span-full"></div>

      <div className="z-30 px-6 col-span-full row-span-full mx-auto grid h-full w-full max-w-7xl grid-cols-12">
        <div className="col-span-full row-span-full flex flex-col items-center justify-center justify-gap-2 bg-opacity-50 px-2 md:items-start">
          <div className="flex flex-col h-full w-full py-10 lg:py-44 justify-end">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl select-none text-white font-bold py-2">
                Transforma tu negocio <span className="text-blue-300">Hoy</span>
                <GlitchText/>
              </h1>
              <a href="#contact" className="text-white border-2 w-fit rounded-md px-3 py-1">
                Contactanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}