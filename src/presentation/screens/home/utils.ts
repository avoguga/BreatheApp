export const AppDriversTips = [
  {
    id: "1",
    title: "Estratégias de Condução Segura",
    uri: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/gojo-satoru.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
    description: "Domine as técnicas essenciais para uma condução segura.",
    fullArticleText:
      "Conduzir com segurança significa manter uma distância prudente dos outros veículos, utilizar o cinto de segurança em todas as viagens, e obedecer aos limites de velocidade. Atenção constante às condições da estrada e evitar distrações como mensagens de texto ao volante são práticas que salvam vidas e evitam acidentes graves.",
  },
  {
    id: "2",
    title: "Wellness no Volante",
    uri: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/gojo-satoru.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
    description: "Mantenha-se ativo e saudável, mesmo na estrada.",
    fullArticleText:
      "Integrar atividades físicas simples, como alongamentos e exercícios leves, durante as paradas pode melhorar significativamente a circulação e reduzir os riscos de lesões musculares. Este guia oferece exercícios rápidos e eficazes que podem ser realizados em pequenos intervalos durante suas viagens.",
  },
  {
    id: "3",
    title: "Alimentação Saudável ao Dirigir",
    uri: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/gojo-satoru.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
    description:
      "Dicas nutricionais para motoristas que passam muitas horas ao volante.",
    fullArticleText:
      "Escolher alimentos leves e nutritivos é crucial para manter a energia e a concentração durante longas horas de condução. Este artigo oferece sugestões de snacks saudáveis e práticas de hidratação que ajudam a manter o foco e evitar a fadiga ao volante.",
  },
  {
    id: "4",
    title: "Como Reduzir o Estresse no Trânsito",
    uri: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/gojo-satoru.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
    description: "Aprenda técnicas eficazes para um trânsito mais tranquilo.",
    fullArticleText:
      "Explorar técnicas de meditação e respiração pode transformar sua experiência ao volante, tornando-a mais calma e controlada. Descubra como aplicativos de mindfulness e práticas simples podem ser incorporados na sua rotina diária para enfrentar o caos do trânsito com serenidade.",
  },
  {
    id: "5",
    title: "Checklist de Segurança Veicular",
    uri: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/gojo-satoru.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
    description:
      "Passos essenciais para a manutenção preventiva do seu veículo.",
    fullArticleText:
      "A manutenção preventiva do veículo é fundamental para garantir a segurança de todos na estrada. Este guia detalha as verificações periódicas que você deve realizar em seu carro, incluindo a verificação de fluidos, a calibragem dos pneus, e a análise das condições dos freios, ajudando a prevenir problemas antes que eles ocorram.",
  },
  {
    id: "6",
    title: "Direção Eco-Eficiente",
    uri: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/gojo-satoru.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
    description:
      "Técnicas para reduzir o consumo de combustível e a emissão de poluentes.",
    fullArticleText:
      "Adotar práticas de direção eco-eficiente não só ajuda a economizar combustível, mas também contribui para a redução das emissões de poluentes, um passo importante para a proteção ambiental. Aprenda a otimizar o uso do acelerador e dos freios, mantenha a velocidade constante e utilize o sistema de controle de cruzeiro sempre que possível. Verifique regularmente a pressão dos pneus e faça manutenções periódicas para garantir que seu veículo esteja funcionando de maneira eficiente. Este guia fornece dicas práticas e simples que podem fazer uma grande diferença na sua pegada ambiental e no seu bolso. Além disso, incorporar a prática de desligar o motor em paradas prolongadas pode reduzir significativamente o consumo de combustível e a emissão de gases nocivos. Outra estratégia eficaz é planejar suas rotas com antecedência para evitar congestionamentos, o que não só poupa tempo como também reduz a quantidade de combustível gasto em tráfego pesado. A escolha de combustíveis de maior qualidade ou alternativos, como biocombustíveis, também pode impactar positivamente a eficiência do motor e a emissão de poluentes. A conscientização sobre a importância da direção eco-eficiente está crescendo, e ao adotar essas práticas, você não só economiza dinheiro, mas também contribui para um planeta mais saudável. Encorajamos todos os motoristas a se tornarem defensores da sustentabilidade em suas comunidades, promovendo práticas de condução que beneficiem tanto o ambiente quanto a economia local.",
  },
];

export const mockRecomended = [
  {
    title: "Meditação",
    uri: "https://cdn.prod.website-files.com/5e261bc81db8f19fa664899d/6490cb674e90ccac1669cfdd_out-0.png",
  },
  {
    title: "Titulo 2",
    uri: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/gojo-satoru.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
  },
  {
    title: "Titulo 3",
    uri: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/09/gojo-satoru.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
  },
];

export const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${hours}h ${minutes}m ${remainingSeconds}s`;
};
