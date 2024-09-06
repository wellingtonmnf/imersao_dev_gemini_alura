let dados = [
    {
      titulo: "Rayssa Leal",
      descricao: "Rayssa Leal, a 'Fadinha', é uma skatista brasileira que conquistou o mundo com seu talento e carisma. Aos poucos anos, ela se tornou um dos maiores nomes do skate mundial, inspirando jovens e quebrando barreiras no esporte.",
      link: "https://pt.wikipedia.org/wiki/Rayssa_Leal",
      tags: "skate skatista fada fadinha sk8 medalha"
    },
    {
      titulo: "Beatriz Souza",
      descricao: "Beatriz Souza é uma judoca brasileira que se destacou nas competições nacionais e internacionais. Sua dedicação e técnica fizeram dela uma referência no judô feminino brasileiro.",
      link: "https://pt.wikipedia.org/wiki/Beatriz_Souza",
      tags: "judo judô judoca medalha ouro"
    },
    {
      titulo: "Rebeca Andrade",
      descricao: "Rebeca Andrade é uma ginasta brasileira que conquistou medalhas olímpicas e se tornou um dos maiores nomes da ginástica artística mundial. Sua força e determinação inspiraram milhões de pessoas.",
      link: "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
      tags: "ginasta ginástica artistica artística medalha ouro"
    },
    {
      titulo: "Ayrton Senna",
      descricao: "Ayrton Senna foi um piloto brasileiro de Fórmula 1, considerado um dos maiores de todos os tempos. Sua habilidade, velocidade e carisma o tornaram um ícone mundial do automobilismo.",
      link: "https://pt.wikipedia.org/wiki/Ayrton_Senna",
      tags: "Fórmula 1 piloto automobilismo velocidade campeão"
    },
    {
      titulo: "Pelé",
      descricao: "Pelé, o 'Rei do Futebol', é considerado o maior jogador de futebol de todos os tempos. Seus feitos e talento marcaram a história do esporte, inspirando gerações de atletas.",
      link: "https://pt.wikipedia.org/wiki/Pel%C3%A9",
      tags: "futebol jogador rei craque bola"
    },
    {
      titulo: "Ronaldo",
      descricao: "Ronaldo Nazário de Lima, o 'Fenômeno', é um dos maiores atacantes da história do futebol. Sua habilidade, velocidade e faro de gol o consagraram como um dos melhores jogadores do mundo.",
      link: "https://pt.wikipedia.org/wiki/Ronaldo_(futebolista)",
      tags: "futebol jogador atacante Fenômeno gol"
    },
    {
      titulo: "João do Pulo",
      descricao: "João do Pulo foi um atleta brasileiro de salto em altura, conhecido por seu estilo único e por ter quebrado recordes mundiais. Sua história inspirou gerações de atletas.",
      link: "https://pt.wikipedia.org/wiki/Jo%C3%A3o_do_Pulo",
      tags: "atletismo salto em altura recorde mundial"
    },
    {
      titulo: "Maria Esther Bueno",
      descricao: "Maria Esther Bueno foi uma tenista brasileira, considerada uma das maiores de todos os tempos. Ela conquistou 19 títulos de Grand Slam e se tornou um ícone do esporte.",
      link: "https://pt.wikipedia.org/wiki/Maria_Esther_Bueno",
      tags: "tênis tenista Grand Slam"
    },
    {
      titulo: "Gustavo Kuerten",
      descricao: "Gustavo Kuerten, o 'Guga', foi um tenista brasileiro que conquistou três títulos do Roland Garros e se tornou um dos maiores nomes do tênis mundial.",
      link: "https://pt.wikipedia.org/wiki/Gustavo_Kuerten",
      tags: "tênis tenista Roland Garros Guga"
    },
    {
      titulo: "Bia Haddad",
      descricao: "Bia Haddad Maia é uma tenista brasileira que se destaca no circuito mundial. Sua força, determinação e talento a colocaram entre as melhores tenistas do mundo.",
      link: "https://pt.wikipedia.org/wiki/Bia_Haddad_Maia",
      tags: "tênis tenista WTA"
    },
    {
      titulo: "Gustavo Borges",
      descricao: "Gustavo Borges é um nadador brasileiro, considerado um dos maiores de todos os tempos. Ele conquistou diversas medalhas em competições internacionais e se tornou um ícone do esporte.",
      link: "https://pt.wikipedia.org/wiki/Gustavo_Borges",
      tags: "natação nadador medalhas olímpicas"
    },
    {
      titulo: "Daniele Hypólito",
      descricao: "Daniele Hypólito é uma ginasta brasileira, conhecida por sua habilidade e técnica. Ela conquistou diversas medalhas em competições internacionais e se tornou uma referência no esporte.",
      link: "https://pt.wikipedia.org/wiki/Daniele_Hyp%C3%B3lito",
      tags: "ginástica artística ginasta medalhas"
    },
    {
      titulo: "Diego Hypólito",
      descricao: "Diego Hypólito é um ginasta brasileiro, conhecido por sua habilidade e técnica. Ele conquistou diversas medalhas em competições internacionais e se tornou uma referência no esporte.",
      link: "https://pt.wikipedia.org/wiki/Diego_Hyp%C3%B3lito",
      tags: "ginástica artística ginasta medalhas"
    },
    {
      titulo: "Daiane dos Santos",
      descricao: "Daiane dos Santos é uma ginasta brasileira, conhecida por sua força e técnica. Ela conquistou diversas medalhas em competições internacionais e se tornou uma referência no esporte.",
      link: "https://pt.wikipedia.org/wiki/Daiane_dos_Santos",
      tags: "ginástica artística ginasta medalhas"
    },
    {
      titulo: "Giba",
      descricao: "Giba, um dos maiores nomes do vôlei brasileiro, conquistou diversas medalhas em competições internacionais e se tornou um ícone do esporte. Sua força e liderança marcaram a história do vôlei.",
      link: "https://pt.wikipedia.org/wiki/Giba_(voleibolista)",
      tags: "vôlei voleibol jogador medalhas"
    },
    {
      titulo: "Hortência",
      descricao: "Hortência Marcari foi uma jogadora de basquete brasileira, considerada uma das maiores de todos os tempos. Sua habilidade, talento e liderança marcaram a história do basquete feminino.",
      link: "https://pt.wikipedia.org/wiki/Hort%C3%AAncia_Marcari",
      tags: "basquete basquetebol jogadora medalhas"
    },
    {
      titulo: "Oscar Schmidt",
      descricao: "Oscar Schmidt é um jogador de basquete brasileiro, considerado um dos maiores de todos os tempos. Seu talento, habilidade e carisma o consagraram como um ícone do esporte.",
      link: "https://pt.wikipedia.org/wiki/Oscar_Schmidt",
      tags: "basquete basquetebol jogador medalhas"
    },
    {
      titulo: "Ronaldinho Gaúcho",
      descricao: "Ronaldinho Gaúcho é um jogador de futebol brasileiro, conhecido por seu talento, habilidade e carisma. Seus dribles e gols marcaram a história do esporte, inspirando gerações de atletas.",
      link: "https://pt.wikipedia.org/wiki/Ronaldinho_Ga%C3%BAcho",
      tags: "futebol jogador dribles magia"
    },
    {
      titulo: "Rubens Barrichello",
      descricao: "Rubens Barrichello é um piloto brasileiro de Fórmula 1, conhecido por sua habilidade, técnica e longevidade. Ele é um dos pilotos brasileiros com mais corridas disputadas na história da Fórmula 1.",
      link: "https://pt.wikipedia.org/wiki/Rubens_Barrichello",
      tags: "Fórmula 1 piloto automobilismo"
    },
    {
      titulo: "Isaquias Queiroz",
      descricao: "Isaquias Queiroz é um canoísta brasileiro, conhecido por sua força e habilidade. Ele conquistou diversas medalhas em competições internacionais e se tornou um dos maiores canoístas do mundo.",
      link: "https://pt.wikipedia.org/wiki/Isaquias_Queiroz",
      tags: "canoagem medalhas olimpíadas"
    }
  ];