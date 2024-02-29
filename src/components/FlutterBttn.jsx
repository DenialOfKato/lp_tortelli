import WhatsIcon from '../images/WPP.svg'
import WhatsIconHover from '../images/WPP-Dark.svg'

function FlutterBttn() {

    return (
        <>

        <div className='fixed bottom-5'>
            <div className='flex flex-col w-screen  items-center'>
                <a href="https://wa.me/5511985756644"><button className="text-white px-10 py-5 bg-wppcolor border-4 border-solid border-wppcolor hover:hidden absolute rounded-full">
                    <div className='flex flex-row items-center gap-5'>
                    <img className=''src={WhatsIcon} alt="" />
                    <h2 className='text-2xl'>Entre em Contato</h2>               
                    </div>
                </button>
                <button className="px-10 py-5 bg-white text-wppcolor border-4 border-solid border-wppcolor rounded-full">
                    <div className='flex flex-row items-center gap-5'>
                    <img className=''src={WhatsIconHover} alt="" />
                    <h2 className='text-2xl'>Entre em Contato</h2>               
                    </div>
                </button>
                </a>
            </div>
        
        </div>
        
        </>
    )
}

export default FlutterBttn