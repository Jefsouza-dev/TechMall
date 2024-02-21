import IProduct from "../interfaces/products";

const products: IProduct[] = [
  {
    id: 1,
    title: "Airpods Apple, com Estojo de Recarga, Bluetooth",
    shortTitle: "Airpods Apple",
    description:
      "Airpods Apple, com Estojo de Recarga, Bluetooth, Branco\nO Novo AirPods traz uma experiência nova em usar fones de ouvido sem fio. É só tirá-los do estojo e estão prontos para uso com seu iPhone, Apple Watch, iPad ou Mac. Ele oferece cinco horas de som e três horas para conversar com apenas uma carga. ",
    price: 1200,
    cover: "https://i.imgur.com/uXrbyfA.jpg",
    inclusionDate: new Date(2023, 2, 15),
  },
  {
    id: 2,
    title: "Soundbar LG SNH5, 4.1 Canais, Bluetooth",
    shortTitle: "Soundbar LG",
    description:
      "O LG Sound Bar SNH5 uniu-se ao DTS Virtual:X para transformar sua casa em um verdadeiro cinema e deixar a exibição dos seus filmes favoritos muito mais imersiva. O LG Sound Bar SNH5 suporta saída para 4.1 canais para que você possa assistir à TV com um som mais envolvente.",
    price: 1099.99,
    cover: "https://i.imgur.com/w7SeQsa.jpg",
    inclusionDate: new Date(2023, 9, 11),
  },
  {
    id: 3,
    title: "Notebook Gamer Lenovo Gaming 3i Intel Core i5",
    shortTitle: "Notebook Gamer",
    description:
      "Lenovo ideapad Gaming 3i\nNovo design com 11ª Geração de Processadores Intel Core i5-11300H e placa de vídeo NVIDIA GeForce GTX 1650 4GB. Ideal para gamers e usuários que também precisam de alta performance. Com tela de 15.6'' Full HD WVA Antirreflexo para melhor definição de imagem e cores.",
    price: 3379.9,
    cover: "https://i.imgur.com/bM5IUKe.jpg",
    inclusionDate: new Date(2023, 6, 7),
  },
  {
    id: 4,
    title: "Monitor Gamer Husky Tempest 34",
    shortTitle: "Monitor Gamer",
    description:
      "O Monitor Gamer Husky Gaming Tempest LED 34 UltraWide Curvo traz a experiência de imersão completa para o seus jogos! A tela Curva UltraWide, formato 21:9, e Quad HD (QHD), com taxa de atualização de 144Hz, confere maior campo de visão e amplifica a experiência de imersão durante seus jogos.",
    price: 2099.99,
    cover: "https://i.imgur.com/sRmbcWW.jpeg",
    inclusionDate: new Date(2023, 3, 4),
  },
  {
    id: 5,
    title: "Teclado Mecânico Gamer HyperX Alloy",
    shortTitle: "Teclado Mecânico",
    description:
      "Teclado HyperX Alloy MKW100, HKBM1-R-EUA/G - 4P5E1AA#ABA\nObtenha uma iluminação radiante e por tecla com efeitos dinâmicos para adicionar um toque de estilo ao seu setup de PC. ",
    price: 199.99,
    cover: "https://i.imgur.com/ldh1Q8O.jpg",
    inclusionDate: new Date(2023, 8, 22),
  },

  {
    id: 6,
    title: "Smartwatch Samsung Galaxy Watch 5, BT, 40mm",
    shortTitle: "Smartwatch Samsung ",
    description:
      "O smartwatch que oferece o mais completo conjunto de funções de monitoramento para o acompanhamento da Saúde e do Bem-Estar de uma maneira precisa e confiável.  ",
    price: 1139.0,
    cover: "https://i.imgur.com/Ua4bURp.jpg",
    inclusionDate: new Date(2023, 11, 28),
  },
];

export default products;
