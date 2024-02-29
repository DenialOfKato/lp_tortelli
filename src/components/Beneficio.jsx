import IconeEquipe from '../images/equipe_espec_SVG.svg'
import IconeAtend from '../images/pronto_atend_SVG.svg'

function Beneficio() {
    return (
    <>
        <div className='flex flex-col items-center text-center mx-6 my-20 font-sans text-greenft gap-12'>
            <div className='flex flex-col items-center'>
            <img src={ IconeEquipe } alt="" />
            <h2 className='text-3xl mt-5'>Equipe Especialista</h2>
            <p className='text-base mt-3'>Somos especialistas em serviços de chaveiro automotivo, residencial e comercial. Estamos prontos para atender a todas as suas necessidades, oferecendo soluções rápidas e eficientes. Não importa qual seja o seu problema, estamos aqui para ajudar.</p>    
            </div> 
            <div className='flex flex-col items-center'>
            <img src={ IconeAtend } alt="" />
            <h2 className='text-3xl mt-5'>Pronto Atendimento</h2>
            <p className='text-base mt-3'>Oferecemos serviços de chaveiro com rapidez e eficiência, reduzindo significativamente o tempo de espera. Estamos prontos para chegar até você, seja em casa, no trabalho ou à beira da estrada. Nossa equipe está comprometida em proporcionar soluções ágeis para suas necessidades, garantindo conveniência e resolvendo seus problemas com chaves de forma eficaz.</p>            
            </div>           
        </div>
    </>


    )
    
}

export default Beneficio