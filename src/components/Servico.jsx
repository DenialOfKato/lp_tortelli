function Servico() {
    const H1Style = 'font-display font-bold text-6xl'
    const H2Style = 'font-sans text-3xl'
    const LiStyle = 'font-sans text-base'
    const UlStyle = 'list-disc pl-5 mt-2'

    
    return (
        <>
        <div className="bg-greenlbg flex flex-col gap-5 px-6 py-12 text-greenft">
            <h1 className={H1Style}>Nossos Serviços</h1>
            <div>
                <h2 className={H2Style}>Residencial:</h2>
                <ul className={UlStyle}>
                    <li className={LiStyle}>Abertura de portas em caso de perda de chave</li>
                    <li className={LiStyle}>Troca de segredo de fechaduras</li>
                    <li className={LiStyle}>Cópia de chaves residenciais</li>
                </ul>
            </div>
            <div>
                <h2 className={H2Style}>Automotivo:</h2>
                <ul className={UlStyle}>
                    <li className={LiStyle}>Abertura de portas em caso de perda de chave</li>
                    <li className={LiStyle}>Cópia de chaves automotivas (inclusive codificadas)</li>
                    <li className={LiStyle}>Confecção de chave reserva para veículos novos</li>
                    <li className={LiStyle}>Abertura de porta-malas</li>
                </ul>
            </div>
            <div>
                <h2 className={H2Style}>Controle de Acesso:</h2>
                <ul className={UlStyle}>
                    <li className={LiStyle}>Cópia de controles de portão automático</li>
                    <li className={LiStyle}>Programação de controles de portão automático</li>
                    <li className={LiStyle}>Instalação de controles de portão automático</li>
                    <li className={LiStyle}>Manutenção de controles de portão automático</li>
                    <li className={LiStyle}>Reparo de controles de portão automático</li>
                </ul>
            </div>
            <div>
                <h2 className={H2Style}>Afiação de ferramentas:</h2>
                <ul className={UlStyle}>
                    <li className={LiStyle}>Afiamos alicates de manicure, tesouras e outras ferramentas, para que você possa usá-las com mais segurança e eficiência.</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Servico