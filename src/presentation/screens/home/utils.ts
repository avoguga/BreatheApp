export const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${hours}h ${minutes}m ${remainingSeconds}s`;
};

const stringsTipsAndRecommended = {
  en: {
    tips: [
      {
        id: '1',
        title: 'Safe Driving Strategies',
        uri: 'https://www.autoescolaonline.net/wp-content/uploads/2019/03/motorista3.jpg',
        description: 'Master essential techniques for safe driving.',
        fullArticleText:
          'Driving safely means maintaining a safe distance from other vehicles, wearing a seatbelt on every trip, and obeying speed limits. Constant attention to road conditions and avoiding distractions like texting while driving are practices that save lives and prevent serious accidents.',
        additionalLinks: [
          {
            title: 'Learn more about road safety',
            url: 'https://example.com/road-safety',
          },
        ],
      },
      {
        id: '2',
        title: 'Wellness on the Wheel',
        uri: 'https://conteudo.imguol.com.br/c/entretenimento/e1/2021/12/02/mulher-dirigindo-1638473992462_v2_900x506.jpg',
        description: 'Stay active and healthy, even on the road.',
        fullArticleText:
          'Integrating simple physical activities like stretches and light exercises during stops can significantly improve circulation and reduce the risk of muscle injuries. This guide offers quick and effective exercises that can be done in small intervals during your travels.',
        additionalLinks: [
          {
            title: 'Tips for more sustainable driving',
            url: 'https://example.com/sustainable-driving',
          },
        ],
      },
      {
        id: '3',
        title: 'Healthy Eating While Driving',
        uri: 'https://www.examepelobem.com.br/fotos/images/reeduca%C3%A7ao-alimentar-750x500.jpg',
        description:
          'Nutritional tips for drivers who spend many hours on the road.',
        fullArticleText:
          'Choosing light and nutritious foods is crucial to maintaining energy and focus during long hours of driving. This article offers suggestions for healthy snacks and hydration practices that help maintain focus and avoid fatigue at the wheel.',
        additionalLinks: [
          {
            title: 'Learn more about nutrition and driving',
            url: 'https://example.com/nutrition-driving',
          },
        ],
      },
      {
        id: '4',
        title: 'How to Reduce Stress in Traffic',
        uri: 'https://s2-oglobo.glbimg.com/PJOFZZPWuAF72-pkf3EvBwGCbIA=/0x0:6720x4480/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/h/M/PDZXaSQzCRRJDHXn2w6Q/young-man-sitting-car-very-upset-stressed-after-hard-failure-moving-traffic-jam.jpg',
        description: 'Learn effective techniques for a more relaxed commute.',
        fullArticleText:
          'Exploring meditation and breathing techniques can transform your driving experience, making it calmer and more controlled. Discover how mindfulness apps and simple practices can be incorporated into your daily routine to face traffic chaos with serenity.',
        additionalLinks: [
          {
            title: 'Tips to reduce stress in traffic',
            url: 'https://example.com/reduce-stress-traffic',
          },
        ],
      },
      {
        id: '5',
        title: 'Vehicle Safety Checklist',
        uri: 'https://dinamicarpneus.com.br/wp-content/uploads/2023/03/dinamicar-pneus-cinto-seguranca.jpg',
        description: 'Essential steps for preventive vehicle maintenance.',
        fullArticleText:
          "Preventive vehicle maintenance is crucial to ensuring everyone's safety on the road. This guide details the periodic checks you should perform on your car, including fluid checks, tire pressure, and brake condition analysis, helping to prevent problems before they occur.",
        additionalLinks: [
          {
            title: 'Learn more about vehicle maintenance',
            url: 'https://example.com/vehicle-maintenance',
          },
        ],
      },
      {
        id: '6',
        title: 'Eco-Efficient Driving',
        uri: 'https://grupoqualityambiental.com.br/wp-content/uploads/2021/08/Eco-driving_ed.jpg',
        description:
          'Techniques to reduce fuel consumption and pollutant emissions.',
        fullArticleText:
          'Adopting eco-efficient driving practices not only helps save fuel but also contributes to reducing pollutant emissions, an important step for environmental protection. Learn to optimize the use of the accelerator and brakes, maintain a constant speed, and use the cruise control system whenever possible. Regularly check tire pressure and perform periodic maintenance to ensure your vehicle is operating efficiently. This guide provides practical and simple tips that can make a big difference in your environmental footprint and your wallet. Additionally, incorporating the practice of turning off the engine during prolonged stops can significantly reduce fuel consumption and the emission of harmful gases. Another effective strategy is to plan your routes in advance to avoid congestion, which not only saves time but also reduces the amount of fuel spent in heavy traffic. Choosing higher quality or alternative fuels, such as biofuels, can also positively impact engine efficiency and pollutant emissions. Awareness of the importance of eco-efficient driving is growing, and by adopting these practices, you not only save money but also contribute to a healthier planet. We encourage all drivers to become sustainability advocates in their communities, promoting driving practices that benefit both the environment and the local economy.',
        additionalLinks: [
          {
            title: 'Learn more about eco-efficient driving',
            url: 'https://example.com/eco-efficient-driving',
          },
        ],
      },
    ],
    recommended: [
      {
        title: 'Classical',
        uri: 'https://wx.mlcdn.com.br/ponzi/production/portaldalu/72394.jpg',
      },
      {
        title: 'Jazz',
        uri: 'https://www.shutterstock.com/shutterstock/photos/1009153486/display_1500/stock-vector-jazz-trumpet-player-vector-illustration-for-jazz-poster-1009153486.jpg',
      },
      {
        title: 'Title here',
        uri: 'https://cdn.prod.website-files.com/5e261bc81db8f19fa664899d/6490cb674e90ccac1669cfdd_out-0.png',
      },
    ],
  },
  pt: {
    tips: [
      {
        id: '1',
        title: 'Estratégias de Condução Segura',
        uri: 'https://www.autoescolaonline.net/wp-content/uploads/2019/03/motorista3.jpg',
        description: 'Domine as técnicas essenciais para uma condução segura.',
        fullArticleText:
          'Conduzir com segurança significa manter uma distância prudente dos outros veículos, utilizar o cinto de segurança em todas as viagens, e obedecer aos limites de velocidade. Atenção constante às condições da estrada e evitar distrações como mensagens de texto ao volante são práticas que salvam vidas e evitam acidentes graves.',
        additionalLinks: [
          {
            title: 'Saiba mais sobre segurança viária',
            url: 'https://example.com/seguranca-viaria',
          },
        ],
      },
      {
        id: '2',
        title: 'Wellness no Volante',
        uri: 'https://conteudo.imguol.com.br/c/entretenimento/e1/2021/12/02/mulher-dirigindo-1638473992462_v2_900x506.jpg',
        description: 'Mantenha-se ativo e saudável, mesmo na estrada.',
        fullArticleText:
          'Integrar atividades físicas simples, como alongamentos e exercícios leves, durante as paradas pode melhorar significativamente a circulação e reduzir os riscos de lesões musculares. Este guia oferece exercícios rápidos e eficazes que podem ser realizados em pequenos intervalos durante suas viagens.',
        additionalLinks: [
          {
            title: 'Dicas para uma direção mais sustentável',
            url: 'https://example.com/direcao-sustentavel',
          },
        ],
      },
      {
        id: '3',
        title: 'Alimentação Saudável ao Dirigir',
        uri: 'https://www.examepelobem.com.br/fotos/images/reeduca%C3%A7ao-alimentar-750x500.jpg',
        description:
          'Dicas nutricionais para motoristas que passam muitas horas ao volante.',
        fullArticleText:
          'Escolher alimentos leves e nutritivos é crucial para manter a energia e a concentração durante longas horas de condução. Este artigo oferece sugestões de snacks saudáveis e práticas de hidratação que ajudam a manter o foco e evitar a fadiga ao volante.',
        additionalLinks: [
          {
            title: 'Saiba mais sobre nutrição e direção',
            url: 'https://example.com/nutricao-direcao',
          },
        ],
      },
      {
        id: '4',
        title: 'Como Reduzir o Estresse no Trânsito',
        uri: 'https://s2-oglobo.glbimg.com/PJOFZZPWuAF72-pkf3EvBwGCbIA=/0x0:6720x4480/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/h/M/PDZXaSQzCRRJDHXn2w6Q/young-man-sitting-car-very-upset-stressed-after-hard-failure-moving-traffic-jam.jpg',
        description:
          'Aprenda técnicas eficazes para um trânsito mais tranquilo.',
        fullArticleText:
          'Explorar técnicas de meditação e respiração pode transformar sua experiência ao volante, tornando-a mais calma e controlada. Descubra como aplicativos de mindfulness e práticas simples podem ser incorporados na sua rotina diária para enfrentar o caos do trânsito com serenidade.',
        additionalLinks: [
          {
            title: 'Dicas para reduzir o estresse no trânsito',
            url: 'https://example.com/reduzir-estresse-transito',
          },
        ],
      },
      {
        id: '5',
        title: 'Checklist de Segurança Veicular',
        uri: 'https://dinamicarpneus.com.br/wp-content/uploads/2023/03/dinamicar-pneus-cinto-seguranca.jpg',
        description:
          'Passos essenciais para a manutenção preventiva do seu veículo.',
        fullArticleText:
          'A manutenção preventiva do veículo é fundamental para garantir a segurança de todos na estrada. Este guia detalha as verificações periódicas que você deve realizar em seu carro, incluindo a verificação de fluidos, a calibragem dos pneus, e a análise das condições dos freios, ajudando a prevenir problemas antes que eles ocorram.',
        additionalLinks: [
          {
            title: 'Saiba mais sobre manutenção veicular',
            url: 'https://example.com/manutencao-veicular',
          },
        ],
      },
      {
        id: '6',
        title: 'Direção Eco-Eficiente',
        uri: 'https://grupoqualityambiental.com.br/wp-content/uploads/2021/08/Eco-driving_ed.jpg',
        description:
          'Técnicas para reduzir o consumo de combustível e a emissão de poluentes.',
        fullArticleText:
          'Adotar práticas de direção eco-eficiente não só ajuda a economizar combustível, mas também contribui para a redução das emissões de poluentes, um passo importante para a proteção ambiental. Aprenda a otimizar o uso do acelerador e dos freios, mantenha a velocidade constante e utilize o sistema de controle de cruzeiro sempre que possível. Verifique regularmente a pressão dos pneus e faça manutenções periódicas para garantir que seu veículo esteja funcionando de maneira eficiente. Este guia fornece dicas práticas e simples que podem fazer uma grande diferença na sua pegada ambiental e no seu bolso. Além disso, incorporar a prática de desligar o motor em paradas prolongadas pode reduzir significativamente o consumo de combustível e a emissão de gases nocivos. Outra estratégia eficaz é planejar suas rotas com antecedência para evitar congestionamentos, o que não só poupa tempo como também reduz a quantidade de combustível gasto em tráfego pesado. A escolha de combustíveis de maior qualidade ou alternativos, como biocombustíveis, também pode impactar positivamente a eficiência do motor e a emissão de poluentes. A conscientização sobre a importância da direção eco-eficiente está crescendo, e ao adotar essas práticas, você não só economiza dinheiro, mas também contribui para um planeta mais saudável. Encorajamos todos os motoristas a se tornarem defensores da sustentabilidade em suas comunidades, promovendo práticas de condução que beneficiem tanto o ambiente quanto a economia local.',
        additionalLinks: [
          {
            title: 'Saiba mais sobre direção eco-eficiente',
            url: 'https://example.com/direcao-eco-eficiente',
          },
        ],
      },
    ],
    recommended: [
      {
        title: 'Clássica',
        uri: 'https://wx.mlcdn.com.br/ponzi/production/portaldalu/72394.jpg',
      },
      {
        title: 'Jazz',
        uri: 'https://www.shutterstock.com/shutterstock/photos/1009153486/display_1500/stock-vector-jazz-trumpet-player-vector-illustration-for-jazz-poster-1009153486.jpg',
      },
      {
        title: 'Titulo aqui',
        uri: 'https://cdn.prod.website-files.com/5e261bc81db8f19fa664899d/6490cb674e90ccac1669cfdd_out-0.png',
      },
    ],
  },
};

export default stringsTipsAndRecommended;
