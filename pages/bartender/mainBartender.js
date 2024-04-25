const bartenders = [
    {
        img: "../../img/manuel.svg",
        nome: "Manuel Ramos",
        idade: "32 anos",
        origem: "Nasceu e cresceu em Porto Rico, onde desenvolveu uma paixão pela mixologia desde jovem.",
        desc: "Manuel Ramos é um verdadeiro artista por trás do balcão. Com seus cabelos escuros elegantemente penteados para trás e um sorriso acolhedor, ele cativa seus clientes assim que entram no bar. Sua aparência é sempre impecável, geralmente vestindo uma camisa branca de linho e suspensórios, combinados com calças pretas e um avental de couro marrom, conferindo-lhe um ar clássico com um toque moderno.",
        hist: `Manuel começou sua jornada na mixologia aos 18 anos, trabalhando como barback em um bar local. Com determinação e paixão pelo ofício, ele rapidamente ascendeu nas fileiras, aprendendo com os melhores bartenders da região. Depois de anos de experiência e treinamento, ele finalmente abriu seu próprio bar, o "Sabor Latino", onde combina suas raízes porto-riquenhas com técnicas de mixologia contemporâneas.`,
        est: "Manuel é conhecido por sua habilidade de criar cocktails únicos e saborosos, muitas vezes incorporando ingredientes frescos e exóticos da região caribenha. Sua destreza na preparação dos drinks é uma atração por si só, com movimentos suaves e precisos que demonstram sua perícia e dedicação à arte da mixologia. Ele tem uma abordagem calorosa e acolhedora com os clientes, sempre disposto a compartilhar histórias por trás de seus cocktails e oferecer recomendações personalizadas.",
    },
    {
        img: "../../img/ana.svg",
        nome: "Ana Carolina",
        idade: "28 anos",
        origem: "Nasceu em São Paulo, Brasil, e cresceu em uma família que sempre valorizou a cultura da culinária e da hospitalidade.",
        desc: "Ana Carolina é uma presença cativante atrás do balcão. Com seus cabelos cacheados escuros e um sorriso caloroso, ela irradia uma energia contagiante que envolve seus clientes desde o momento em que entram no bar. Sua aparência é uma mistura de estilo urbano e vintage, frequentemente vestindo blusas com estampas florais e aventais de linho, combinados com jeans desbotados e um par de botas elegantes.",
        hist: `Ana Carolina descobriu sua paixão pela mixologia enquanto cursava gastronomia na universidade. Após se formar, ela decidiu seguir seu coração e mergulhar no mundo dos coquetéis, trabalhando em diversos bares e restaurantes renomados em São Paulo. Sua abordagem criativa e sua habilidade de se conectar com as pessoas a levaram a se destacar na cena da mixologia da cidade.`,
        est: "Ana Carolina é conhecida por sua inventividade e habilidade de criar cocktails que são verdadeiras obras de arte líquida. Ela adora experimentar ingredientes locais e sazonais, combinando sabores inesperados para criar experiências sensoriais únicas para seus clientes. Sua personalidade extrovertida e sua capacidade de contar histórias envolventes tornam cada visita ao seu bar uma experiência memorável.",
    },
    {
        img: "../../img/maria.svg",
        nome: "Maria Victoria",
        idade: "32 anos",
        origem: "Maria Victoria cresceu em uma família que sempre valorizou a arte da hospitalidade e o prazer de receber bem. Nascida em São Paulo, Brasil, ela absorveu desde cedo os encantos da cultura gastronômica e da mixologia.",
        desc: "Maria Victoria é uma figura imponente e carismática atrás do balcão. Com seus cabelos longos e escuros, sempre amarrados em um coque elegante, e um sorriso acolhedor, ela exala uma aura de confiança e sofisticação. Sua aparência reflete um estilo clássico com um toque moderno, frequentemente vestindo blusas de seda combinadas com calças de alfaiataria e um avental de couro personalizado.",
        hist: `A paixão de Maria Victoria pela mixologia foi despertada durante sua jornada pelo mundo da gastronomia. Após concluir seus estudos em São Paulo, ela decidiu mergulhar de cabeça na arte dos coquetéis, trabalhando em alguns dos bares mais conceituados da cidade. Sua determinação e talento inato a levaram a se destacar rapidamente, conquistando reconhecimento e admiração entre seus colegas e clientes.`,
        est: "Maria Victoria é reconhecida por sua abordagem meticulosa e sua habilidade de criar coquetéis que são verdadeiras obras-primas líquidas. Ela domina técnicas clássicas e contemporâneas, combinando ingredientes premium de forma harmoniosa para criar experiências sensoriais únicas. Sua elegância natural e sua capacidade de cativar a atenção de seus clientes tornam cada visita ao seu bar uma experiência refinada e memorável.",
    },
    {
        img: "../../img/mateus.svg",
        nome: "Mateus Oliveira",
        idade: "34 anos",
        origem: "Natural de Belo Horizonte, Brasil, Mateus cresceu em um ambiente onde a paixão pela culinária e pela hospitalidade era parte integrante da vida familiar.",
        desc: "Mateus Oliveira é um verdadeiro contador de histórias atrás do balcão. Com sua barba aparada e um olhar penetrante, ele exala uma aura de mistério e charme. Seu estilo descontraído e elegante é refletido em suas roupas sob medida, frequentemente vestindo camisas de linho combinadas com calças de alfaiataria e um colete vintage.",
        hist: `A jornada de Mateus na mixologia começou de forma inesperada, quando ele deixou sua carreira corporativa para seguir sua verdadeira paixão: a arte de criar coquetéis. Inspirado pelas histórias contadas por seu avô, um ex-bartender, Mateus decidiu mergulhar de cabeça no mundo da mixologia, buscando aprender técnicas antigas e experimentar novas tendências.`,
        est: "Mateus é conhecido por sua abordagem inovadora e sua capacidade de criar coquetéis que contam uma história por si só. Ele adora incorporar ingredientes locais e inspirações culturais em suas criações, resultando em experiências sensoriais que transportam seus clientes para lugares distantes e tempos passados. Sua habilidade de criar uma conexão genuína com as pessoas faz com que cada visita ao seu bar seja uma jornada emocionante e memorável.",
    },
    {
        img: "../../img/ludmila.svg",
        nome: "Ludmila Silva",
        idade: "30 anos",
        origem: "Natural do Rio de Janeiro, Brasil, Ludmila cresceu imersa na cultura vibrante e diversificada da cidade maravilhosa, onde o ritmo da música e a paixão pela culinária sempre estiveram presentes em sua vida.",
        desc: "Ludmila Silva é uma presença radiante e acolhedora atrás do balcão. Com seus cabelos cacheados e um sorriso contagiante, ela irradia uma energia calorosa que envolve seus clientes desde o momento em que entram no bar. Seu estilo descontraído e boêmio se reflete em suas roupas, frequentemente vestindo blusas coloridas combinadas com calças jeans rasgadas e um avental estampado.",
        hist: `A jornada de Ludmila na mixologia começou de forma espontânea, quando ela decidiu combinar sua paixão pela culinária com seu amor pela arte de fazer coquetéis. Inspirada pelas noites animadas nos bares do Rio de Janeiro, Ludmila embarcou em uma jornada de autodescoberta e experimentação, buscando criar coquetéis que capturassem a essência da sua cidade natal.`,
        est: "Ludmila é conhecida por sua criatividade e seu talento em criar coquetéis que refletem a alma vibrante do Rio de Janeiro. Ela adora incorporar ingredientes tropicais e influências culturais em suas criações, resultando em bebidas refrescantes e cheias de sabor. Sua personalidade extrovertida e sua habilidade de se conectar com as pessoas fazem com que cada visita ao seu bar seja uma experiência divertida e memorável.",
    },
    {
        img: "../../img/felipe.svg",
        nome: "Felipe Pereira",
        idade: "36 anos",
        origem: "Natural de Salvador, Bahia, Felipe cresceu em meio à rica cultura afro-brasileira e ao caloroso espírito de comunidade da cidade.",
        desc: "Felipe Pereira é uma figura imponente e carismática atrás do balcão. Com seus cabelos escuros e cacheados, e um olhar penetrante, ele exala uma aura de confiança e autenticidade. Seu estilo casual e descontraído se reflete em suas roupas, frequentemente vestindo camisetas estampadas combinadas com bermudas e um avental de couro desgastado.",
        hist: `A jornada de Felipe na mixologia começou durante sua juventude em Salvador, onde ele foi inspirado pelas tradições da coquetelaria local e pela riqueza de sabores da culinária baiana. Após anos de experiência trabalhando em bares e restaurantes ao redor do mundo, Felipe retornou à sua cidade natal com um objetivo claro: compartilhar sua paixão pela mixologia com sua comunidade.`,
        est: "Felipe é conhecido por sua autenticidade e sua habilidade em criar coquetéis que homenageiam as raízes culturais da Bahia. Ele adora explorar ingredientes locais e técnicas tradicionais, resultando em bebidas cheias de sabor e história. Sua personalidade calorosa e sua capacidade de criar um ambiente acolhedor fazem com que cada visita ao seu bar seja uma experiência enriquecedora e memorável.",
    }

];

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const bartenderIndex = parseInt(params.get("bartender"));

if (bartenderIndex >= 0 && bartenderIndex < bartenders.length) {
    const bartender = bartenders[bartenderIndex];

    const main = document.querySelector("main");
    const content = `
        <div class="container-esquerda">
            <img src="${bartender.img}" alt="imagem-bartender" /> <br>
            <button><a href="https://www.linkedin.com/in/diogo-rodrigues-916269236/">Contratar</a></button>
        </div>

        <div class="container-direita">
            <h1>${bartender.nome}</h1>
            <p><b>Idade:</b> ${bartender.idade}</p>
            <p>
                <b>Origem:</b> ${bartender.origem}
            </p>
            <p>
                <b>Descrição:</b> ${bartender.desc}
            </p>
            <p>
                <b>História:</b> ${bartender.hist}
            </p>
            <p>
                <b>Estilo de Bartender:</b> ${bartender.est}
            </p>
        </div>
    `;
    main.innerHTML = content;
} else {
    document.querySelector('main').innerHTML = '<h1>Bartender não encontrado!!</h1>'
}
