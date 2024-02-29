import LogoNaut from '../images/Logotipo_Mono_Branco_vetor_1.svg'

function Development() {
    return (
        <>
        <div className='bg-bluefooter text-white flex flex-col pt-6 px-3 items-center pb-32'>
            <div className='flex w-4/5 items-center justify-between'>
                <div className='hidden sm:block sm:grow'></div>
                <div className='flex justify-between items-center w-full sm:max-w-96'>
                    <p>Desenvolvido por:</p>
                    <img src={ LogoNaut } alt="" />
                </div>
                
            </div>          
        </div>
        </>
    )
}

export default Development