export default function Home() {
  return (
    <div>
      <div className="bg-indigo-800 w-full h-screen">
        <header className="bg-indigo-100/40 h-32 w-full flex justify-center">
          <div className="max-w-4xl flex justify-between items-center w-full">
            <h1 className="text-3xl font-bold">CABEÇALHO</h1>
            <nav>
              <ul className="flex gap-x-8">
                <li>Inicio</li>
                <li>Projetos</li>
                <li>Itens</li>
                <li>Contato</li>
                <li>Sobre</li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="w-full h-full flex mt-32 justify-center">
          <div className="p-4 rounded-lg w-full max-w-4xl h-[200px]">
            <div className="flex flex-col text-white">
              <h1 className="text-7xl font-black">
                Facilitando seu acesso aos Benefícios Fiscais
              </h1>
              <p>
                Assessoria jurídica tributária focada nos benefícios fiscais da
                MP 2.199-14/2001 (Redução de 75% do IRPJ e Reinvestimento)
              </p>
              <a
                href="#"
                className="bg-white px-1 py-1 rounded shadow-inner shadow-zinc-400 text-zinc-800"
              >
                Saiba como
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="h-screen bg-orange-800 flex justify-center items-center">
        <div className="flex flex-col max-w-4xl w-full">
          <h1 className="text-lg font-bold">QUEM SOMOS</h1>
          <p>
            A AV ADVOCACIA ESTRATÉGICA opera na área de atuação da
            Superintendência do Desenvolvimento do Nordeste (Sudene) no que diz
            respeito aos benefícios fiscal da Redução de 75% (setenta e cinco
            por cento) do imposto sobre a renda e adicionais calculados com base
            no lucro da exploração e do benefício fiscal do Reinvestimento. O
            diferencial do escritório é a expertise da equipe. A sua localização
            estratégica também facilita a diligência presencial na própria sede
            da Sudene, com a finalidade de resguardar os interesses dos seus
            clientes com a maior brevidade possível. A AV ADVOCACIA ESTRATÉGICA
            ao longo dos últimos anos aprovou na SUDENE dezenas de pleitos de
            Redução de 75% do IRPJ sobre o lucro da exploração em
            empreendimentos nos setores de infraestrutura de energia; de
            turismo, considerando os empreendimentos hoteleiros; da agricultura
            irrigada-fruticultura; da indústria de transformação nos setores de
            alimentos e bebidas, produtos farmacêuticos; minerais não-metálicos;
            químicos; artefatos de madeira; componentes (microeletrônica);
            dentre outros.
          </p>
        </div>
      </section>
      <section className="h-screen bg-green-800"></section>
    </div>
  );
}
