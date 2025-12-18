import { Benefit, Module, FaqItem } from './types';

export const COPY = {
  headline: 'Por que você faz tudo "certo" e ela escolhe o cara que não faz nada?',
  subheadline: 'Esqueça as frases prontas de sedução. Descubra como desligar o "Modo Bonzinho" que sabota suas chances e faz você ser tratado como o "melhor amigo" ou pior, como nada...',
  price: {
    full: 'R$ 157,90',
    discounted: 'R$ 34,90',
    installments: '5x de R$ 6,98'
  },
  cta: 'SIM! QUERO DOMINAR MINHA PRESENÇA',
  guaranteeTitle: 'Garantia de "Homem Novo" de 7 Dias',
  guaranteeText: 'Aplique o método por uma semana. Se você não sentir que está mais confiante ao se olhar no espelho, eu devolvo 100% do seu dinheiro. Sem perguntas.'
};

export const BENEFITS: Benefit[] = [
  {
    title: 'O Fim do "Pisar em Ovos"',
    description: 'Como falar o que pensa sem medo de perder a garota (e ver o respeito dela por você triplicar).'
  },
  {
    title: 'O Olhar de Águia',
    description: 'Como sustentar contato visual de forma que gera tensão sexual, não desconforto.'
  },
  {
    title: 'O Silêncio Constrangedor vira sua Arma',
    description: 'Aprenda a usar pausas na conversa para deixá-la ansiosa pela sua aprovação.'
  },
  {
    title: 'Postura de Alto Valor',
    description: 'Pequenos ajustes na sua linguagem corporal que gritam "confiança" antes de você dizer "oi".'
  }
];

export const MODULES: Module[] = [
  {
    title: 'FASE 1: O DETOX DO PERSONAGEM',
    days: 'Dias 1-7',
    goal: 'Parar de fazer o que atrapalha.',
    items: [
      'O Diagnóstico – Identificando onde você busca validação externa.',
      'Silenciando a Desculpa – Eliminando a justificação excessiva da sua fala.',
      'Postura de Ocupação – Como ocupar espaço físico no ambiente.',
      'O Olhar que Não Desvia – Técnica de fixação ocular em estranhos.'
    ]
  },
  {
    title: 'FASE 2: ATIVAÇÃO DA PRESENÇA',
    days: 'Dias 8-14',
    goal: 'A Promessa se cumpre aqui.',
    items: [
      'A Pergunta Invertida – Fazendo ela se qualificar para você.',
      'A Arte da Discordância – Por que discordar dela cria atração.',
      'O Desafio da Interação Real – Puxar assunto sem intenção (Teste prático).'
    ]
  },
  {
    title: 'FASE 3: CONSOLIDAÇÃO E MAGNETISMO',
    days: 'Dias 15-30',
    goal: 'Estilo de vida inabalável.',
    items: [
      'Linguagem Corporal Avançada e Estilo Básico.',
      'Inteligência Social e Leitura de Ambiente.',
      'Criando um Estilo de Vida Atrativo (Lifestyle).'
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Isso funciona se eu for tímido?",
    answer: "Sim. O método não exige que você vire um 'falastrão'. Ele ensina a usar o silêncio e a presença a seu favor, transformando timidez em mistério."
  },
  {
    question: "Preciso ter boa aparência ou dinheiro?",
    answer: "Não. O curso foca em comportamento e subcomunicação. A atração biológica responde à confiança e postura, não ao saldo bancário."
  },
  {
    question: "Em quanto tempo vejo resultados?",
    answer: "Muitos alunos relatam mudança na percepção das pessoas nos primeiros 3 dias (Fase de Detox). A transformação interna sólida ocorre em 30 dias."
  },
  {
    question: "Como recebo o acesso?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link para baixar o eBook e acessar os bônus."
  }
];