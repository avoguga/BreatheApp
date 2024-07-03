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
        id: "1",
        title: "Safe Driving Strategies",
        uri: "https://www.autoescolaonline.net/wp-content/uploads/2019/03/motorista3.jpg",
        description: "Master essential techniques for safe driving.",
        fullArticleText:
          "Driving safely involves maintaining a safe distance from other vehicles, wearing a seatbelt on every trip, and obeying speed limits. Paying constant attention to road conditions and avoiding distractions like texting while driving are essential practices. Additionally, defensive driving techniques, such as anticipating other drivers' actions and staying focused on the road, significantly reduce the risk of accidents.",
        additionalLinks: [
          {
            title: "Defensive Driving Tips",
            url: "https://academic.oup.com/acn/article/31/6/517/1728362",
          },
          {
            title: "Youth Safe Driving Resources",
            url: "https://youth.gov",
          },
        ],
      },
      {
        id: "2",
        title: "Wellness on the Wheel",
        uri: "https://conteudo.imguol.com.br/c/entretenimento/e1/2021/12/02/mulher-dirigindo-1638473992462_v2_900x506.jpg",
        description: "Stay active and healthy, even on the road.",
        fullArticleText:
          "Incorporating simple physical activities like stretches and light exercises during stops can significantly improve circulation and reduce the risk of muscle injuries. Regular breaks and ensuring adequate rest are crucial to avoid drowsy driving. Maintaining physical well-being is essential for staying alert and focused during long drives.",
        additionalLinks: [
          {
            title: "Health and Wellness for Drivers",
            url: "https://www.cdc.gov/healthyyouth",
          },
          {
            title: "Driving and Physical Health",
            url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
          },
        ],
      },
      {
        id: "3",
        title: "Healthy Eating While Driving",
        uri: "https://www.examepelobem.com.br/fotos/images/reeduca%C3%A7ao-alimentar-750x500.jpg",
        description:
          "Nutritional tips for drivers who spend many hours on the road.",
        fullArticleText:
          "Choosing light and nutritious foods is crucial to maintaining energy and focus during long hours of driving. This includes healthy snacks and proper hydration practices to avoid fatigue. Avoiding heavy meals that can cause drowsiness is also important. Regular small snacks can help maintain energy levels throughout the journey.",
        additionalLinks: [
          {
            title: "Nutrition Tips for Long Drives",
            url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5506098/",
          },
          {
            title: "Healthy Eating on the Go",
            url: "https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/healthy-diet/art-20046267",
          },
        ],
      },
      {
        id: "4",
        title: "How to Reduce Stress in Traffic",
        uri: "https://s2-oglobo.glbimg.com/PJOFZZPWuAF72-pkf3EvBwGCbIA=/0x0:6720x4480/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/h/M/PDZXaSQzCRRJDHXn2w6Q/young-man-sitting-car-very-upset-stressed-after-hard-failure-moving-traffic-jam.jpg",
        description: "Learn effective techniques for a more relaxed commute.",
        fullArticleText:
          "Exploring relaxation techniques such as deep breathing and maintaining a calm demeanor can make driving less stressful. Implementing mindfulness practices during commutes can help in managing traffic-related stress. Keeping a positive attitude and practicing patience are key to a more relaxed driving experience.",
        additionalLinks: [
          {
            title: "Managing Stress on the Road",
            url: "https://www.apa.org/helpcenter/stress",
          },
          {
            title: "Mindfulness for Drivers",
            url: "https://www.health.harvard.edu/mind-and-mood/mindfulness-practice-can-reduce-stress",
          },
        ],
      },
      {
        id: "5",
        title: "Vehicle Safety Checklist",
        uri: "https://dinamicarpneus.com.br/wp-content/uploads/2023/03/dinamicar-pneus-cinto-seguranca.jpg",
        description: "Essential steps for preventive vehicle maintenance.",
        fullArticleText:
          "Regular preventive maintenance is crucial for vehicle safety. This includes checking fluid levels, tire pressure, and brake conditions. Regular inspections can help prevent potential problems and ensure the vehicle operates safely and efficiently.",
        additionalLinks: [
          {
            title: "Vehicle Maintenance Guide",
            url: "https://www.nhtsa.gov/vehicle-maintenance",
          },
          {
            title: "Car Maintenance Tips",
            url: "https://www.edmunds.com/car-maintenance",
          },
        ],
      },
      {
        id: "6",
        title: "Eco-Efficient Driving",
        uri: "https://grupoqualityambiental.com.br/wp-content/uploads/2021/08/Eco-driving_ed.jpg",
        description:
          "Techniques to reduce fuel consumption and pollutant emissions.",
        fullArticleText:
          "Adopting eco-efficient driving practices not only helps save fuel but also contributes to reducing pollutant emissions. These practices include optimizing the use of the accelerator and brakes, maintaining a constant speed, and using cruise control whenever possible. Regularly checking tire pressure and performing periodic maintenance ensure the vehicle operates efficiently.",
        additionalLinks: [
          {
            title: "Eco-Driving Tips",
            url: "https://www.epa.gov/transportation-air-pollution-and-climate-change/what-you-can-do-your-vehicle",
          },
          {
            title: "Driving Tips for Fuel Efficiency",
            url: "https://www.fueleconomy.gov/feg/drive.shtml",
          },
        ],
      },
    ],
    recommended: [
      {
        title: "Classical",
        uri: "https://wx.mlcdn.com.br/ponzi/production/portaldalu/72394.jpg",
      },
      {
        title: "Jazz",
        uri: "https://www.shutterstock.com/shutterstock/photos/1009153486/display_1500/stock-vector-jazz-trumpet-player-vector-illustration-for-jazz-poster-1009153486.jpg",
      },
      {
        title: "Title here",
        uri: "https://cdn.prod.website-files.com/5e261bc81db8f19fa664899d/6490cb674e90ccac1669cfdd_out-0.png",
      },
    ],
  },
  pt: {
    tips: [
      {
        id: "1",
        title: "Estratégias de Condução Segura",
        uri: "https://www.autoescolaonline.net/wp-content/uploads/2019/03/motorista3.jpg",
        description: "Domine as técnicas essenciais para uma condução segura.",
        fullArticleText:
          "Conduzir com segurança envolve manter uma distância segura dos outros veículos, usar o cinto de segurança em todas as viagens e obedecer aos limites de velocidade. Estar constantemente atento às condições da estrada e evitar distrações, como usar o celular enquanto dirige, são práticas essenciais. Além disso, técnicas de direção defensiva, como antecipar as ações de outros motoristas e manter o foco na estrada, reduzem significativamente o risco de acidentes.",
        additionalLinks: [
          {
            title: "Dicas de Direção Defensiva",
            url: "https://academic.oup.com/acn/article/31/6/517/1728362",
          },
          {
            title: "Recursos de Condução Segura para Jovens",
            url: "https://youth.gov/feature-article/ways-promote-safe-driving-youth",
          },
        ],
      },
      {
        id: "2",
        title: "Bem-Estar ao Volante",
        uri: "https://conteudo.imguol.com.br/c/entretenimento/e1/2021/12/02/mulher-dirigindo-1638473992462_v2_900x506.jpg",
        description: "Mantenha-se ativo e saudável, mesmo na estrada.",
        fullArticleText:
          "Integrar atividades físicas simples, como alongamentos e exercícios leves durante as paradas, pode melhorar significativamente a circulação e reduzir os riscos de lesões musculares. Pausas regulares e descanso adequado são cruciais para evitar a condução cansada. Manter o bem-estar físico é essencial para permanecer alerta e focado durante longas viagens.",
        additionalLinks: [
          {
            title: "Saúde e Bem-Estar para Motoristas",
            url: "https://www.cdc.gov/healthyyouth/yrbs/index.htm",
          },
          {
            title: "Condução e Saúde Física",
            url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
          },
        ],
      },
      {
        id: "3",
        title: "Alimentação Saudável ao Dirigir",
        uri: "https://www.examepelobem.com.br/fotos/images/reeduca%C3%A7ao-alimentar-750x500.jpg",
        description:
          "Dicas nutricionais para motoristas que passam muitas horas ao volante.",
        fullArticleText:
          "Escolher alimentos leves e nutritivos é crucial para manter a energia e a concentração durante longas horas de condução. Isso inclui snacks saudáveis e práticas de hidratação adequadas para evitar a fadiga. Evitar refeições pesadas que podem causar sonolência também é importante. Pequenos lanches regulares podem ajudar a manter os níveis de energia ao longo da viagem.",
        additionalLinks: [
          {
            title: "Dicas Nutricionais para Longas Viagens",
            url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5506098/",
          },
          {
            title: "Alimentação Saudável em Movimento",
            url: "https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/healthy-diet/art-20046267",
          },
        ],
      },
      {
        id: "4",
        title: "Como Reduzir o Estresse no Trânsito",
        uri: "https://s2-oglobo.glbimg.com/PJOFZZPWuAF72-pkf3EvBwGCbIA=/0x0:6720x4480/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/h/M/PDZXaSQzCRRJDHXn2w6Q/young-man-sitting-car-very-upset-stressed-after-hard-failure-moving-traffic-jam.jpg",
        description:
          "Aprenda técnicas eficazes para um trânsito mais tranquilo.",
        fullArticleText:
          "Explorar técnicas de relaxamento, como respiração profunda e manter uma atitude calma, pode tornar a experiência de dirigir menos estressante. Implementar práticas de mindfulness durante o trajeto pode ajudar a gerenciar o estresse relacionado ao trânsito. Manter uma atitude positiva e praticar a paciência são essenciais para uma experiência de condução mais tranquila.",
        additionalLinks: [
          {
            title: "Gerenciamento de Estresse na Estrada",
            url: "https://www.apa.org/topics/stress",
          },
          {
            title: "Mindfulness para Motoristas",
            url: "https://www.health.harvard.edu/mind-and-mood/mindfulness-practice-can-reduce-stress",
          },
        ],
      },
      {
        id: "5",
        title: "Checklist de Segurança Veicular",
        uri: "https://dinamicarpneus.com.br/wp-content/uploads/2023/03/dinamicar-pneus-cinto-seguranca.jpg",
        description:
          "Passos essenciais para a manutenção preventiva do seu veículo.",
        fullArticleText:
          "A manutenção preventiva regular é crucial para a segurança do veículo. Isso inclui verificar os níveis de fluidos, a pressão dos pneus e as condições dos freios. Inspeções regulares podem ajudar a prevenir problemas potenciais e garantir que o veículo opere com segurança e eficiência.",
        additionalLinks: [
          {
            title: "Guia de Manutenção de Veículos",
            url: "https://www.nhtsa.gov/vehicle-maintenance",
          },
          {
            title: "Dicas de Manutenção de Carros",
            url: "https://www.edmunds.com/car-maintenance",
          },
        ],
      },
      {
        id: "6",
        title: "Direção Eco-Eficiente",
        uri: "https://grupoqualityambiental.com.br/wp-content/uploads/2021/08/Eco-driving_ed.jpg",
        description:
          "Técnicas para reduzir o consumo de combustível e a emissão de poluentes.",
        fullArticleText:
          "Adotar práticas de direção eco-eficiente não só ajuda a economizar combustível, mas também contribui para a redução das emissões de poluentes. Essas práticas incluem otimizar o uso do acelerador e dos freios, manter uma velocidade constante e usar o controle de cruzeiro sempre que possível. Verificar regularmente a pressão dos pneus e realizar manutenções periódicas garantem que o veículo opere de maneira eficiente.",
        additionalLinks: [
          {
            title: "Dicas de Direção Eco-Eficiente",
            url: "https://www.epa.gov/transportation-air-pollution-and-climate-change/what-you-can-do-your-vehicle",
          },
          {
            title: "Dicas de Condução para Economia de Combustível",
            url: "https://www.fueleconomy.gov/feg/drive.shtml",
          },
        ],
      },
    ],
    recommended: [
      {
        title: "Clássica",
        uri: "https://wx.mlcdn.com.br/ponzi/production/portaldalu/72394.jpg",
      },
      {
        title: "Jazz",
        uri: "https://www.shutterstock.com/shutterstock/photos/1009153486/display_1500/stock-vector-jazz-trumpet-player-vector-illustration-for-jazz-poster-1009153486.jpg",
      },
    ],
  },
};

export default stringsTipsAndRecommended;
