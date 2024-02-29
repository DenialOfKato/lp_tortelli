import Logotipo from '../images/Logo_SVG.svg'
import ImagemUm from    '../images/image_1.jpg'
import ImagemDois from    '../images/image_2.jpg'


function Hero() {
    return (
        <div className=''>
            <div className='bg-greenbg flex flex-col items-center m-auto'>
                <div className='my-8'><img src={ Logotipo } alt="logotipo-da-empresa" /></div>
                <h1 id='estilo-texto' className='text-white font-display font-bold text-6xl text-center mt-7'>Chaveiro</h1>
                <h1 className='text-white font-display font-bold text-6xl text-center'>Santo André</h1>
                <p className='text-white font-sans font-normal text-2xl mt-3 mb-7 text-center mx-10'>Soluções  <strong>Residenciais</strong>, <strong>Comerciais</strong> e <strong>Automotivas</strong> em Santo André e Região</p>
                <div className='flex flex-row h-36 sm:h-60'><img className='w-1/2 object-cover object-center' src={ImagemUm} alt="chaveiro-executando-servico" /><img className='w-1/2 object-cover object-left' src={ImagemDois} alt="chaveiro-em-santo-andre" /></div>
            </div>
        </div>
    )
}
export default Hero