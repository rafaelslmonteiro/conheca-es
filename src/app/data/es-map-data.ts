import { Feature, Geometry } from 'geojson';

export const geoUrl = "https://raw.githubusercontent.com/tbrugz/geodata-br/refs/heads/master/geojson/geojs-32-mun.json";

export interface RegionInfo {
  name: string;
  cities: string[];
  color: string;
  info: {
    economy: string;
    tourism: string;
    activities: string;
    urbanization: string;
    importance: string;
    history: string;
    demographics: string;
    relief: string;
    hydrography: string;
  };
}

export const regions: RegionInfo[] = [
    {
      name: "Microrregião de Vitória",
      cities: ["Vitória", "Vila Velha", "Serra", "Cariacica"],
      color: "#FF6B6B",
      info: {
        economy: "Serviços, comércio, indústria, portos.",
        tourism: "Convento da Penha (Vila Velha), Ilha do Boi, Praia de Camburi (Vitória), Museu de Arte do Espírito Santo (MAES).",
        activities: "Comércio, indústria naval, petróleo e gás, turismo, tecnologia, educação.",
        urbanization: "Alta concentração populacional, infraestrutura urbana desenvolvida, grandes centros comerciais e indústrias. A urbanização é mais avançada, com a presença de áreas residenciais de alto padrão e grandes projetos de infraestrutura.",
        importance: "Principal centro econômico e político do estado, com o maior PIB e concentração de serviços e comércio.",
        history: "Vitória foi fundada em 1551 e tem grande importância histórica como centro administrativo e comercial desde a época colonial. O Porto de Vitória sempre foi vital para o escoamento de produtos do estado.",
        demographics: "Alta densidade populacional, com grande diversidade étnica e migratória.",
        relief: "Relevo montanhoso, com várias ilhas e enseadas. Presença de morros e pequenas planícies.",
        hydrography: "Rio Santa Maria, Rio Jucu e o litoral marinho que contribui para a dinâmica de pesca e transporte marítimo."
      }
    },
    {
      name: "Microrregião de Cachoeiro de Itapemirim",
      cities: ["Cachoeiro de Itapemirim", "Iconha", "Alegre"],
      color: "#6BCB77",
      info: {
        economy: "Indústria de pedras ornamentais, agropecuária, comércio.",
        tourism: "Pedra do Itabira, Parque Natural Municipal da Pedra dos Três Pontões, Igreja de São Sebastião.",
        activities: "Extração e beneficiamento de pedras ornamentais (granito), agropecuária, turismo rural, comércio.",
        urbanization: "Urbanização concentrada em Cachoeiro de Itapemirim, que é um polo industrial. As demais cidades possuem um nível de urbanização mais modesto.",
        importance: "Principal polo de pedras ornamentais do estado, com grande influência na economia estadual devido à sua indústria extrativa.",
        history: "Fundada em 1847, Cachoeiro é uma das cidades mais antigas do estado e tem uma forte tradição na extração de pedras ornamentais.",
        demographics: "População diversificada, com significativa presença de migrantes de outras partes do estado e do país devido à atividade industrial.",
        relief: "Relevo montanhoso, com formações rochosas e vales, predominando o relevo de planalto.",
        hydrography: "Rio Itapemirim e seus afluentes, como o Rio Muqui, são importantes para a economia local, com atividade pesqueira e agrícola."
      }
    },
    {
      name: "Microrregião de Colatina",
      cities: ["Colatina", "Baixo Guandu", "Marilândia", "Governador Lindenberg", "São Roque do Canaã"],
      color: "#4D96FF",
      info: {
        economy: "Agroindústria, comércio, serviços.",
        tourism: "Catedral de São João Batista, Parque Natural Municipal de Colatina.",
        activities: "Agricultura (café, soja, feijão), indústria alimentícia, comércio.",
        urbanization: "Colatina possui uma área urbana desenvolvida, sendo um dos centros comerciais e de serviços do interior do estado, com forte presença de pequenas indústrias e comércios.",
        importance: "É o principal polo regional de comércio e serviços do norte do estado.",
        history: "Fundada em 1892, Colatina se desenvolveu como ponto comercial importante na região devido à sua localização estratégica.",
        demographics: "População crescente, com uma mistura de residentes urbanos e rurais.",
        relief: "Relevo montanhoso e colinas, com planícies no entorno dos rios.",
        hydrography: "Rio Doce, que é um importante ponto para a navegação e a irrigação agrícola."
      }
    },
    {
      name: "Microrregião de Linhares",
      cities: ["Linhares", "Sooretama", "Jaguaré", "Rio Bananal"],
      color: "#F5B461",
      info: {
        economy: "Agropecuária, celulose, turismo.",
        tourism: "Lagoa Juparanã, Reserva Natural Vale, Praia de Regência.",
        activities: "Produção de celulose e papel, agricultura (café, cacau), pesca, turismo.",
        urbanization: "Linhares é a cidade mais urbanizada, com grande crescimento nos últimos anos devido à instalação de indústrias. Outras cidades da região ainda possuem áreas rurais significativas.",
        importance: "É o maior produtor de celulose do estado e um polo agroindustrial relevante.",
        history: "Linhares foi fundada em 1800 e cresceu com a economia do café e a implantação de grandes fábricas de celulose.",
        demographics: "A população tem crescido devido à expansão da indústria de celulose e ao comércio regional.",
        relief: "Predominância de relevo plano e colinas suaves, com áreas de restinga.",
        hydrography: "Rio Doce e diversas lagoas, sendo o principal responsável pelo abastecimento de água e a agricultura local."
      }
    },
    {
      name: "Microrregião de São Mateus",
      cities: ["São Mateus", "Nova Venécia", "Pedro Canário"],
      color: "#9D4EDD",
      info: {
        economy: "Comércio, pesca, agricultura.",
        tourism: "Ilha de Guriri, Praia de Guriri, Sítio Histórico Porto de São Mateus.",
        activities: "Pesca, turismo, agricultura (arroz, feijão).",
        urbanization: "São Mateus é a cidade central, com urbanização crescente, enquanto as outras cidades da microrregião ainda mantêm características rurais.",
        importance: "Centro comercial e pesqueiro da região norte do estado.",
        history: "Fundada em 1544, é uma das cidades mais antigas do estado, com forte presença na economia pesqueira e comercial.",
        demographics: "População mista, com forte presença de comunidades pesqueiras.",
        relief: "Relevo baixo, com planícies aluviais e áreas costeiras.",
        hydrography: "Rio Cricaré, além de várias lagoas e córregos que abastecem a região."
      }
    },
    {
      name: "Microrregião de Aracruz",
      cities: ["Aracruz", "Ibiraçu", "Fundão", "João Neiva"],
      color: "#F28482",
      info: {
        economy: "Celulose, pesca, agricultura.",
        tourism: "Praia de Coqueiral, Aldeias Indígenas, Igreja de São João Batista.",
        activities: "Produção de celulose e papel, pesca, agricultura (café, frutas), turismo.",
        urbanization: "Aracruz é bem urbanizada, com um porto industrial de celulose e presença de grandes fábricas.",
        importance: "Um dos maiores polos industriais de celulose do estado, com grande importância na economia capixaba.",
        history: "Fundada em 1848, Aracruz se destaca por sua indústria de celulose, que se tornou o motor de sua economia.",
        demographics: "A população tem se expandido devido ao crescimento industrial, com destaque para a imigração de trabalhadores.",
        relief: "Predominância de relevo plano e áreas de restinga ao longo da costa.",
        hydrography: "A região é banhada por diversos rios e lagos, com destaque para o Rio Piraquê-Açu."
      }
    },
    {
      name: "Microrregião de Santa Teresa",
      cities: ["Santa Teresa", "Santa Leopoldina", "Domingos Martins"],
      color: "#FFB5E8",
      info: {
        economy: "Agricultura, turismo rural.",
        tourism: "Museu de Biologia Professor Mello Leitão, Parque Estadual de Pedra Azul.",
        activities: "Agricultura (café, leite), turismo rural, gastronomia.",
        urbanization: "A urbanização é centrada em Santa Teresa, mas outras cidades mantêm um caráter rural, com pequena presença de indústrias.",
        importance: "Polo turístico rural, com forte apelo para ecoturismo e turismo de aventura.",
        history: "Fundada em 1875, com forte imigração italiana e alemã, Santa Teresa mantém raízes culturais europeias.",
        demographics: "População com forte presença de descendentes de imigrantes europeus.",
        relief: "Relevo montanhoso, com serras e vales profundos.",
        hydrography: "Diversos córregos e rios da bacia do Rio Santa Maria."
      }
    },
    {
      name: "Microrregião de Nova Venécia",
      cities: ["Nova Venécia", "Boa Esperança", "Vila Pavão", "Vila Valério"],
      color: "#FFC75F",
      info: {
        economy: "Agropecuária, comércio.",
        tourism: "Igreja de São Francisco de Assis, Parque Municipal de Nova Venécia.",
        activities: "Agricultura (café, feijão, milho), pecuária.",
        urbanization: "Nova Venécia é o principal centro urbano, com comércio forte e ruralidade nas áreas periféricas.",
        importance: "Grande produtora agrícola, especialmente na região noroeste.",
        history: "Fundada em 1953, surgiu da necessidade de organizar a região agrícola.",
        demographics: "População rural predominante, com urbanização recente.",
        relief: "Predominância de planalto.",
        hydrography: "Rios e córregos menores, com uso voltado para irrigação."
      }
    },
    {
      name: "Microrregião de São Gabriel da Palha",
      cities: ["São Gabriel da Palha", "Vila Valério"],
      color: "#A0E7E5",
      info: {
        economy: "Agropecuária.",
        tourism: "Igreja Matriz de São Gabriel da Palha.",
        activities: "Pecuária, agricultura (soja, arroz).",
        urbanization: "Urbanização modesta, com mais áreas rurais do que urbanas.",
        importance: "Importante polo pecuário e agrícola do estado.",
        history: "Fundada em 1981, com forte colonização rural.",
        demographics: "População rural.",
        relief: "Relevo plano.",
        hydrography: "Pequenos rios e córregos."
      }
    },
    {
      name: "Microrregião de Afonso Cláudio",
      cities: ["Afonso Cláudio", "Laranja da Terra"],
      color: "#B28DFF",
      info: {
        economy: "Agricultura, ecoturismo.",
        tourism: "Cachoeira de Matilde, Mirante da Pedra do Lagarto.",
        activities: "Agricultura (café, hortaliças), ecoturismo.",
        urbanization: "Pequenas cidades com urbanização incipiente.",
        importance: "Polo agrícola e ecoturístico.",
        history: "Fundada em 1890, com influências de imigrantes europeus.",
        demographics: "População rural.",
        relief: "Relevo montanhoso.",
        hydrography: "Rios pequenos e córregos."
      }
    },
    {
      name: "Microrregião de Montanha",
      cities: ["Montanha", "Mucurici", "Ponto Belo"],
      color: "#FBE7C6",
      info: {
        economy: "Agricultura, pecuária.",
        tourism: "Parque Natural de Montanha, eventos culturais locais.",
        activities: "Agricultura (café, hortaliças), pecuária.",
        urbanization: "Predominância rural com algumas áreas urbanizadas.",
        importance: "Exportação de produtos agrícolas.",
        history: "Colonização principalmente por imigrantes europeus.",
        demographics: "Predomínio de população rural.",
        relief: "Relevo montanhoso.",
        hydrography: "Pequenos rios."
      }
    },
    {
      name: "Microrregião de Guarapari",
      cities: ["Guarapari", "Anchieta", "Alfredo Chaves"],
      color: "#FF9AA2",
      info: {
        economy: "Turismo, pesca, serviços.",
        tourism: "Praia do Morro, Ruínas Jesuíticas (Anchieta), Parque Estadual Paulo César Vinha.",
        activities: "Turismo (praias e resorts), pesca, agricultura (banana, mandioca).",
        urbanization: "Guarapari é altamente urbanizada com infraestrutura turística desenvolvida; Anchieta e Alfredo Chaves possuem urbanização moderada com características rurais.",
        importance: "Principal destino turístico do estado, conhecido pelas praias e pelo turismo de saúde.",
        history: "Fundada em 1585, Guarapari tem origem na colonização jesuítica e se desenvolveu como polo turístico no século XX.",
        demographics: "População flutuante devido ao turismo, diversidade cultural e presença de migrantes.",
        relief: "Áreas litorâneas com relevos planos e algumas elevações.",
        hydrography: "Extenso litoral com diversas praias, rios Benevente e Una."
      }
    },
    {
      name: "Microrregião de Barra de São Francisco",
      cities: ["Barra de São Francisco", "Águia Branca", "Mantenópolis", "Água Doce do Norte"],
      color: "#80FF72",
      info: {
        economy: "Extração de granito, agropecuária.",
        tourism: "Pedra do Elefante, cachoeiras e trilhas ecológicas.",
        activities: "Extração e beneficiamento de rochas ornamentais, agricultura (café, milho), pecuária.",
        urbanization: "Urbanização concentrada em Barra de São Francisco; demais cidades com características rurais.",
        importance: "Importante produtor de granito e rochas ornamentais, contribuindo significativamente para as exportações do estado.",
        history: "Colonização iniciada no século XIX com influência de imigrantes europeus.",
        demographics: "População diversificada com influência de descendentes de italianos e alemães.",
        relief: "Montanhoso com formações rochosas significativas.",
        hydrography: "Rios São Francisco, Itaúnas e seus afluentes."
      }
    },
    {
      name: "Microrregião de Alegre",
      cities: ["Alegre", "Guaçuí", "Ibitirama", "Jerônimo Monteiro"],
      color: "#F6A6FF",
      info: {
        economy: "Agricultura, pecuária, comércio.",
        tourism: "Parque Nacional do Caparaó, Pico da Bandeira, cachoeiras de Guaçuí.",
        activities: "Agricultura (café, frutas), pecuária leiteira, turismo ecológico.",
        urbanization: "Cidades de pequeno porte com infraestrutura básica; forte presença de áreas rurais.",
        importance: "Região agrícola importante e referência em produção de café de qualidade.",
        history: "Colonização no século XIX, com influência de imigrantes italianos e suíços.",
        demographics: "População predominantemente rural com tradição agrícola.",
        relief: "Montanhoso, com serras e vales profundos.",
        hydrography: "Rios Itapemirim e Castelo, essenciais para irrigação e abastecimento."
      }
    },
    {
      name: "Microrregião de Venda Nova do Imigrante",
      cities: ["Venda Nova do Imigrante", "Domingos Martins", "Marechal Floriano"],
      color: "#FFD972",
      info: {
        economy: "Agricultura familiar, agroturismo.",
        tourism: "Pedra Azul, Rota do Lagarto, festas típicas italianas e alemãs.",
        activities: "Agricultura (hortaliças, morango, café), turismo rural, produção de laticínios e embutidos.",
        urbanization: "Pequenas cidades com boa infraestrutura turística; preservação de características rurais e arquitetônicas europeias.",
        importance: "Referência nacional em agroturismo e agricultura sustentável.",
        history: "Colonizada a partir de 1850 por imigrantes italianos e alemães.",
        demographics: "População com forte presença de descendentes europeus, valorizando a cultura e a gastronomia típicas.",
        relief: "Montanhoso, com clima ameno e paisagens naturais.",
        hydrography: "Rios Jucu e Braço Sul, além de diversas cachoeiras."
      }
    },
    {
      name: "Microrregião de Itapemirim",
      cities: ["Itapemirim", "Marataízes", "Piúma", "Presidente Kennedy"],
      color: "#A6E4FF",
      info: {
        economy: "Pesca, turismo, agricultura.",
        tourism: "Praias de Itaipava e Itaoca, Lagoa do Siri, ilhas e monumentos históricos.",
        activities: "Pesca artesanal, turismo de sol e praia, cultivo de abacaxi, cana-de-açúcar e coco.",
        urbanization: "Cidades litorâneas com infraestrutura turística em desenvolvimento; áreas rurais no interior.",
        importance: "Região pesqueira significativa e em crescimento no setor turístico.",
        history: "Fundada no século XVI, com desenvolvimento ligado à pesca e à produção agrícola.",
        demographics: "População mista com comunidades tradicionais de pescadores.",
        relief: "Planícies costeiras, áreas de restinga e manguezais.",
        hydrography: "Rios Itapemirim e Novo, além de lagoas e canais."
      }
    },
    {
      name: "Microrregião de Santa Maria de Jetibá",
      cities: ["Santa Maria de Jetibá", "Santa Leopoldina", "Itarana"],
      color: "#FFDAC1",
      info: {
        economy: "Agricultura, avicultura.",
        tourism: "Cachoeiras, igrejas históricas, festas típicas pomeranas.",
        activities: "Produção de hortifrutigranjeiros, ovos, avicultura, turismo cultural.",
        urbanization: "Pequenas cidades com forte influência rural; preservação de costumes e arquitetura pomerana.",
        importance: "Maior produtor de ovos do estado e importante polo agrícola.",
        history: "Colonizada por imigrantes pomeranos no final do século XIX.",
        demographics: "População com forte presença de descendentes pomeranos, mantendo língua e tradições.",
        relief: "Montanhoso com vales e clima temperado.",
        hydrography: "Rios Santa Maria da Vitória e seus afluentes."
      }
    },
    {
      name: "Microrregião de Conceição da Barra",
      cities: ["Conceição da Barra", "Pedro Canário"],
      color: "#C5A3FF",
      info: {
        economy: "Agricultura, turismo, pesca.",
        tourism: "Praia de Itaúnas, Parque Estadual de Itaúnas, Festival de Forró de Itaúnas.",
        activities: "Cultivo de cana-de-açúcar, eucalipto, turismo ecológico e cultural, pesca artesanal.",
        urbanization: "Cidades com desenvolvimento urbano relacionado ao turismo; áreas rurais extensas.",
        importance: "Destino turístico nacional, especialmente para o forró e as dunas de Itaúnas.",
        history: "Colonização portuguesa, com influências indígenas e africanas na cultura local.",
        demographics: "População diversa, com comunidades tradicionais e quilombolas.",
        relief: "Planícies costeiras com dunas e manguezais.",
        hydrography: "Rio Itaúnas e diversos córregos."
      }
    },
    {
      name: "Microrregião de Mimoso do Sul",
      cities: ["Mimoso do Sul", "Muqui"],
      color: "#E4FF1A",
      info: {
        economy: "Agricultura, pecuária.",
        tourism: "Centro histórico de Muqui, festas folclóricas, cachoeiras.",
        activities: "Agricultura (café, banana), pecuária leiteira, turismo cultural.",
        urbanization: "Cidades pequenas com preservação do patrimônio histórico e cultural.",
        importance: "Conhecida pela riqueza cultural e preservação de tradições folclóricas.",
        history: "Fundada no início do século XX, com influências de imigrantes europeus e cultura afro-brasileira.",
        demographics: "População rural com forte ligação à agricultura familiar.",
        relief: "Montanhoso com vales e áreas cultiváveis.",
        hydrography: "Rios Itabapoana e Muqui do Sul."
      }
    },
    {
      name: "Microrregião de Ibiraçu",
      cities: ["Ibiraçu", "João Neiva"],
      color: "#FFB3B3",
      info: {
        economy: "Agricultura, indústria.",
        tourism: "Mosteiro Zen Budista, igrejas históricas, eventos culturais.",
        activities: "Agricultura (café, pimenta-do-reino), indústrias de cerâmica e metalurgia.",
        urbanization: "Cidades com infraestrutura básica e áreas industriais em crescimento.",
        importance: "Polo cultural e industrial emergente.",
        history: "Colonização italiana no final do século XIX, com influências culturais marcantes.",
        demographics: "População mista com descendentes de italianos e outras etnias.",
        relief: "Montanhoso com áreas propícias à agricultura.",
        hydrography: "Rio Piraqueaçu e afluentes."
      }
    }
  ];
  

export function getCityRegion(cityName: string): string | undefined {
  const lowercaseCityName = cityName.toLowerCase();
  for (const region of regions) {
    if (region.cities.some(city => city.toLowerCase() === lowercaseCityName)) {
      return region.name;
    }
  }
  return undefined;
}

export function getRegionColor(regionName: string): string {
  const region = regions.find(r => r.name === regionName);
  return region ? region.color : "#D3D3D3";
}

export function getRegionInfo(regionName: string): RegionInfo | undefined {
  return regions.find(r => r.name === regionName);
}

export function filterGeographies(geographies: Feature<Geometry, any>[]): Feature<Geometry, any>[] {
  const espiritosantoMunicipalities = new Set(regions.flatMap(region => region.cities.map(city => city.toLowerCase())));
  return geographies.filter(geo => espiritosantoMunicipalities.has(geo.properties.name.toLowerCase()));
}

