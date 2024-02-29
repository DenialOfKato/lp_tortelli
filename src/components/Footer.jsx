import Logotipo from '../images/Logo_SVG.svg'
import Development from './Development'

function Footer() {
    return (
        <>
        <div className='bg-greenbg flex flex-col align-center text-center gap-5 px-8 py-12 text-greenlft'>
            <img className='m-auto' src={Logotipo} alt="" />
            <p>A Tortelli Empório das Chaves é a sua solução completa em segurança. Oferecemos serviços para abertura de portas, troca de segredos, cópias de chaves residenciais e automotivas (inclusive codificadas), afiação de ferramentas, instalação, manutenção e reparo de controles de portão automático.</p>
            <div className='flex flex-col gap-1'>
                <h3 className='text-3xl'>Contato</h3>
                <h4>Tel.: <a className='underline' href="tel:1198575-6644" target='blank'>(11) 98575-6644</a></h4>
                <h4><a href="https://www.google.com/maps/place/ChaveiroTortelli+Emp%C3%B3rio+das+Chaves/@-23.663606,-46.5263022,17z/data=!4m15!1m8!3m7!1s0x94ce427d0c38c753:0x7971eb713d81eb32!2sR.+Gertr%C3%BAdes+de+Lima,+552+-+Centro,+Santo+Andr%C3%A9+-+SP,+09020-000!3b1!8m2!3d-23.663606!4d-46.5237273!16s%2Fg%2F11b8z9946_!3m5!1s0x94ce427d0ecabb19:0x3bddc34abb582737!8m2!3d-23.6636985!4d-46.5237954!16s%2Fg%2F11fy2pnq4q?entry=ttu" target='blank'>R. Gertrúdes de Lima, 552 - Centro, Santo André - SP, 09020-000</a></h4>
            </div>
        </div>
        <Development />
        </>
    )
}

export default Footer