function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const questions = ["Qual é o seu estilo de música preferido?",
        "O que gosta de fazer nos dias de folga?",
        "Qual é a sua refeição favorita?",
        "O que ainda tem vontade de aprender?",
        "Qual é o seu talento secreto?",
        "Se pudesse escolher uma cidade, em qualquer lugar do mundo para morar, qual seria?",
        "Gosta de colecionar algo?",
        "O que mais gosta em sua profissão?",
        "Tem algum bicho de estimação?",
        "Gosta do seu trabalho?",
        "Gosta de praticar alguma atividade física?",
        "Qual é a coisa mais louca que já fez e, mesmo assim, faria de novo?",
        "Qual acredita que seja a primeira impressão que as pessoas têm de você?",
        "Pelo que se considera grato(a)?",
        "O que tira o seu sono?",
        "Quando alguém tem uma notícia boa e outra ruim para contar, qual prefere ouvir primeiro?",
        "Se pudesse viver durante um dia a vida de outra pessoa, quem seria?",
        "O que significa ter sucesso para você?",
        "Qual é a banda ou cantor que sempre recomenda quando alguém pede uma indicação?",
        "Prefere o café com ou sem açúcar?",
        "Você trabalha para viver ou vive para trabalhar?",
        "Qual foi o maior segredo que já escondeu dos seus pais?",
        "Já fez trabalho voluntário?",
        "Se dinheiro não fosse problema, qual negócio iniciaria agora?",
        "Se encontrasse um gênio da lâmpada, quais seriam os seus três pedidos?",
        "Qual tarefa doméstica menos gosta de fazer?",
        "Se considera tímido(a) ou extrovertido(a)?",
        "Costuma ser pontual ou sempre chega atrasado(a)?",
        "Se pudesse aprender um idioma em um piscar de olhos, qual seria?",
        "Qual é sua série preferida no momento?",
        "Três coisas que você quer fazer antes de morrer?",
        "Do que mais sente orgulho de ter feito ou alcançado?",
        "Qual pergunta que ninguém faz, mas que gostaria que fizessem a você?",
        "Quem é a pessoa que mais admira?",
        "Dormir de conchinha: ama ou odeia?",
        "Tem amizade com algum(a) ex-namorado(a)?",
        "Se considera organizado(a) ou bagunceiro(a)?",
        "O que costuma fazer para melhorar um dia ruim?",
        "Acredita em segundas chances?",
        "O que os seus relacionamentos passados te ensinaram?",
        "Já fuxicou o celular de um(a) namorado(a)?",
        "Qual é a sua filosofia de vida?",
        "Gosta de cozinhar ou sair para comer?",
        "Qual é o seu jogo de tabuleiro preferido?",
        "Que atitude faz com que perca a confiança em alguém?",
        "Qual é o traço de sua personalidade que menos gosta?",
        "Qual foi o motivo mais bobo pelo qual já brigou com alguém?",
        "Se pudesse mudar algo em você, o que seria?",
        "Se tivesse a chance de apagar algo que fez no passado, o que seria?",
        "O que mais valoriza: beleza ou inteligência?",
        "O que faz o seu coração disparar?",
        "Qual cheiro que você ama sentir?",
        "Qual é a parte do seu corpo que você mais gosta?",
        "Como seria um encontro perfeito, em sua opinião?",
        "O que mais gosta sobre a sua família?",
        "Qual é o elogio que mais recebe?",
        "Qual comida você não divide por nada nesse mundo?",
        "Acredita em mentira do bem?",
        "Como se descreveria em apenas uma palavra?",
        "Já teve um crush em algum(a) famoso(a)?",
        "Prefere ver filmes no cinema ou em casa?",
        "Participaria de um reality show?",
        "Quando foi a última vez que ficou muito empolgado(a) com alguma coisa?",
        "Em uma escala de 0 a 10, quanto aproveita bem o dia?",
        "Qual foi a melhor decisão que tomou na vida?",
        "Se sua vida virasse um filme, qual seria o título?",
        "O que mudaria em você, se pudesse?",
        "Qual seria a primeira coisa que faria se ganhasse na loteria?",
        "Se pudesse voltar no tempo para mudar algo no passado, o que mudaria?",
        "Se fosse um super-herói, qual poder gostaria de ter?",
        "O que te faz sentir completo(a)?",
        "Prefere doce ou salgado?",
        "Se identifica com alguma religião?",
        "Considera traição ficar de papo no WhatsApp (ou outra rede social)?",
        "Quando foi a última vez que chorou de tanto rir?",
        "Qual era a sua matéria preferida na escola?",
        "Qual é o app que mais usa no celular?",
        "Acredita em astrologia?",
        "Acredita em vida extraterrestre?",
        "Seria imortal, se pudesse?",
        "Ativa o modo soneca várias vezes ou se levanta assim que o despertador toca?",
        "Julga o livro pela capa?",
        "Em qual série de TV ou streaming gostaria de viver?",
        "Qual é a música mais tocada em seu celular?",
        "Qual foi o último filme que assistiu?",
        "O que mais sente falta da infância?",
        "Qual é o emoji que mais usa?",
        "Do que gostava, mas pegou ranço?",
        "Qual é o primeiro site em que entra ao abrir o navegador de internet?",
        "Se existe vida após a morte, qual pessoa gostaria de reencontrar primeiro depois que morrer?",
        "Quais foram as melhores férias da sua vida?",
        "Qual acredita ser sua maior qualidade?",
        "Qual é o seu maior medo?",
        "Qual foi o momento mais assustador da sua vida?",
        "O que mais te motiva a trabalhar duro?",
        "Qual foi o melhor conselho que já recebeu?",
        "Qual conselho daria a si mesmo(a) de 10 anos atrás?",
        "Já precisou abrir mão para chegar onde está hoje?",
        "Já passou por alguma situação que achou ruim na hora, mas depois considerou como algo positivo?",
        "Em uma escala de 0 a 10, quanto cuida de si", 
        "Alguém já destroçou o seu coração?",
        "Biscoito ou bolacha?",
        "Com qual celebridade você gostaria de se parecer? Por quê?",
        "Com que frequência você mente?",
        "Com que personagem de filme ou livro você se identifica?",
        "Como você se acalma quando fica com raiva?",
        "Como você se descreve?",
        "De 1 a 10, qual é a importância da aparência física?",
        "De que tipo de pessoas você foge?",
        "Do que você realmente se arrepende nessa vida?",
        "Em qual filme você gostaria de morar?",
        "Em qual momento da nossa história você pensou que o mundo fosse acabar?",
        "Em qual planeta você gostaria de viver?",
        "Em que parte do mundo você gostaria de ter uma aventura?",
        "Está contente com o teu salário?",
        "Existem vidas semelhantes à humana em outros planetas?",
        "Gostaria de falar com um extraterrestre?",
        "Gostaria de mudar alguma parte do seu corpo?",
        "Já sofreu alguma desilusão no amor?",
        "O que costumam pensar de você quando te conhecem?",
        "O que é lindo sobre você?",
        "O que é machismo para você?",
        "O que significa liberdade para você?",
        "O que tira o seu sono?",
        "O que o dinheiro não compra?",
        "O que você acha que o seu 'eu' de outra dimensão está fazendo agora?",
        "O que você mais gostaria de mudar em sua vida?",
        "O que você não suporta em uma pessoa?",
        "O que você nunca perdoaria em um amigo?",
        "Por quantos dias seguidos você já ficou sem tomar banho?",
        "Qual a pergunta mais aleatória que alguém já te perguntou?",
        "Qual a pior mentira que você já contou?",
        "Qual animal doméstico você gostaria de ser?",
        "Qual animal selvagem você gostaria de ser?",
        "Qual é a comida mais estranha que você já experimentou?",
        "Qual é a hora do seu nascimento?",
        "Qual é a personalidade que hoje em dia se revira no caixão ao ver o estado do mundo?",
        "Qual é a sua maior conquista até agora?",
        "Qual é a sua relação com os seus antigos parceiros?",
        "Qual é o filme que você nunca se cansa de ver?",
        "Qual é o inseto mais fofinho de todos?",
        "Qual é o seu pior hábito?",
        "Qual foi o pior flagra que já te deram?",
        "Qual foi o sonho mais estranho que você já teve?",
        "Qual momento histórico você gostaria de ter vivido?",
        "Qual seria a primeira coisa que faria se estivesse no corpo do sexo oposto apenas por um dia?",
        "Qual seria a primeira coisa que faria se, por um dia, estivesse no corpo de um homem?",
        "Qual seria a sua estratégia para se manter vivo num mundo pós-apocalíptico?",
        "Quanto tempo você acha que vai demorar para nos vermos?",
        "Quem é o ser humano que mais te decepcionou nessa vida?",
        "Quem se define se limita?",
        "Quem são os seus verdadeiros amigos?",
        "Quem você ressuscitaria?",
        "Se você precisasse se mudar de país, para onde iria?",
        "Se você pudesse apagar uma única memória da sua vida, o que seria e por quê?",
        "Se você pudesse conversar com uma divindade, com quem seria?",
        "Se você pudesse ter nascido em outro país, que país você teria escolhido?",
        "Se você pudesse ter um superpoder, qual seria?",
        "Se você pudesse voltar no tempo, qual conselho você daria a si mesmo?",
        "Viveria com o seu parceiro sem se casar?",
        "Você acha que as pessoas podem mudar?",
        "Você acha que é justificável mentir em algumas situações?",
        "Você acha que o homem chegou mesmo à Lua?",
        "Você acredita em astrologia?",
        "Você acredita em vida após a morte?",
        "Você acredita na teoria da evolução?",
        "Você acredita que tudo é justo no amor e na guerra?",
        "Você assume suas invejas?",
        "Você concorda com a pena de morte?",
        "Você concorda com o aborto?",
        "Você conseguirias passar um mês totalmente sozinho?",
        "Você é capaz de ser 100% honesto?",
        "Você é feliz?",
        "Você é um profissional em alguma área?",
        "Você está apaixonado?",
        "Você estudou o que queria?",
        "Você foi planejado pelos seus pais ou foi um acidente?",
        "Você gosta do seu trabalho?",
        "Você gostaria de nascer de novo?",
        "Você gostaria de ser imortal?",
        "Você gostaria de viver no espaço?",
        "Você já decepcionou um amigo?",
        "Você já fez alguma simpatia?",
        "Você já fez coisas fora da lei?",
        "Você já traiu?",
        "Você já viu um fantasma ou já teve uma experiência paranormal?",
        "Você mudaria o seu nome se pudesse?",
        "Você prefere férias planejadas ou uma aventura?",
        "Você prefere ser duas vezes mais inteligente ou duas vezes mais feliz?",
        "Você sabe que dia é hoje?",
        "Você se casaria sem estar apaixonado?",
        "Você se considera um cidadão democrático?",
        "Você se excita facilmente?",
        "Você seria capaz de sobreviver um mês inteiro sem eletricidade?",
        "Você sofre com a desigualdade de gênero?",
        "Você tem algum vício?",
        "Você tem alguma doença?",
        "Você tem alguma superstição?",
        "Você tem filhos?",
        "Você tem medo da morte?",
        "Você tem problemas com seu ex?",
        "Você tem um lugar favorito para o qual gosta de fugir com frequência?",
        "Você tem uma boa relação com seus pais?",
        "Você tem algum problema com a sua personalidade?",
        "Você teria filhos fora do casamento?",
        "Você venderia sua alma por dinheiro?",
        "Você viajaria para o futuro, não importa quais sejam as consequências?",
        "Você viajaria para o passado, não importando as consequências?",
        "Você vive sozinho?",
        "Você viveria na selva, longe da civilização?",
        "Qual é o seu estilo de música preferido?",
        "O que gosta de fazer nos dias de folga?",
        "Qual é a sua refeição favorita?",
        "O que ainda tem vontade de aprender?",
        "Qual é o seu talento secreto?",
        "Se pudesse escolher uma cidade, em qualquer lugar do mundo para morar, qual seria?",
        "Gosta de colecionar algo?",
        "O que mais gosta em sua profissão?",
        "Tem algum bicho de estimação?",
        "Gosta do seu trabalho?",
        "Gosta de praticar alguma atividade física?",
        "Qual é a coisa mais louca que já fez e, mesmo assim, faria de novo?",
        "Qual acredita que seja a primeira impressão que as pessoas têm de você?",
        "Pelo que se considera grato(a)?",
        "O que tira o seu sono?",
        "Quando alguém tem uma notícia boa e outra ruim para contar, qual prefere ouvir primeiro?",
        "Se pudesse viver durante um dia a vida de outra pessoa, quem seria?",
        "O que significa ter sucesso para você?",
        "Qual é a banda ou cantor que sempre recomenda quando alguém pede uma indicação?",
        "Prefere o café com ou sem açúcar?",
        "Você trabalha para viver ou vive para trabalhar?",
        "Qual foi o maior segredo que já escondeu dos seus pais?",
        "Já fez trabalho voluntário?",
        "Se dinheiro não fosse problema, qual negócio iniciaria agora?",
        "Se encontrasse um gênio da lâmpada, quais seriam os seus três pedidos?",
        "Qual tarefa doméstica menos gosta de fazer?",
        "Se considera tímido(a) ou extrovertido(a)?",
        "Costuma ser pontual ou sempre chega atrasado(a)?",
        "Se pudesse aprender um idioma em um piscar de olhos, qual seria?",
        "Qual é sua série preferida no momento?",
        "Qual sua lembrança de infância favorita?",
        "Qual a melhor viagem que você já fez?",
        "Qual o melhor show a que foi?",
        "Se pudesse escolher qualquer outro trabalho, qual seria?",
        "Qual filme te marcou?",
        "Qual a comida da infância que adora até hoje?",
        "Qual filme pode assistir repetidas vezes sem cansar?",
        "O que considera mais importante numa amizade?",
        "Qual o programa caseiro de que mais gosta?",
        "Qual foi o passeio mais inusitado que já fez?",
        "Três coisas que você quer fazer antes de morrer?",
        "Do que mais sente orgulho de ter feito ou alcançado?",
        "Qual pergunta que ninguém faz, mas que gostaria que fizessem a você?",
        "Quem é a pessoa que mais admira?",
        "Dormir de conchinha: ama ou odeia?",
        "Tem amizade com algum(a) ex-namorado(a)?",
        "Se considera organizado(a) ou bagunceiro(a)?",
        "O que costuma fazer para melhorar um dia ruim?",
        "Acredita em segundas chances?",
        "O que os seus relacionamentos passados te ensinaram?",
        "Já fuxicou o celular de um(a) namorado(a)?",
        "Qual é a sua filosofia de vida?",
        "Gosta de cozinhar ou sair para comer?",
        "Qual é o seu jogo de tabuleiro preferido?",
        "Que atitude faz com que perca a confiança em alguém?",
        "Qual é o traço de sua personalidade de que menos gosta?",
        "Qual foi o motivo mais bobo pelo qual já brigou com alguém?",
        "Se pudesse mudar algo em você, o que seria?",
        "Se tivesse a chance de apagar algo que fez no passado, o que seria?",
        "O que mais valoriza: beleza ou inteligência?",
        "O que faz o seu coração disparar?",
        "Qual cheiro que você ama sentir?",
        "Qual é a parte do seu corpo de que você mais gosta?",
        "Como seria um encontro perfeito, em sua opinião?",
        "O que mais gosta sobre a sua família?",
        "Qual é o elogio que mais recebe?",
        "Qual comida você não divide por nada nesse mundo?",
        "Acredita em mentira do bem?",
        "Como se descreveria em apenas uma palavra?",
        "Já teve um crush em algum(a) famoso(a)?",
        "Prefere ver filmes no cinema ou em casa?",
        "Participaria de um reality show?",
        "Quando foi a última vez que ficou muito empolgado(a) com alguma coisa?",
        "Em uma escala de 0 a 10, quanto aproveita bem o dia?",
        "Qual foi a melhor decisão que tomou na vida?",
        "Se sua vida virasse um filme, qual seria o título?",
        "O que mudaria em você, se pudesse?",
        "Qual seria a primeira coisa que faria se ganhasse na loteria?",
        "Se pudesse voltar no tempo para mudar algo no passado, o que mudaria?",
        "Se fosse um super-herói, qual poder gostaria de ter?",
        "O que te faz sentir completo(a)?",
        "Prefere doce ou salgado?",
        "Se identifica com alguma religião?",
        "Considera traição ficar de papo no WhatsApp (ou outra rede social)?",
        "Quando foi a última vez que chorou de tanto rir?",
        "Qual era a sua matéria preferida na escola?",
        "Qual é o app que mais usa no celular?",
        "Acredita em astrologia?",
        "Acredita em vida extraterrestre?",
        "Seria imortal, se pudesse?",
        "Ativa o modo soneca várias vezes ou se levanta assim que o despertador toca?",
        "Julga o livro pela capa?",
        "Em qual série de TV ou streaming gostaria de viver?",
        "Qual é a música mais tocada em seu celular?",
        "Qual foi o último filme que assistiu?",
        "O que mais sente falta da infância?",
        "Qual é o emoji que mais usa?",
        "Do que gostava, mas pegou ranço?",
        "Qual é o primeiro site em que entra ao abrir o navegador de internet?",
        "Se existe vida após a morte, qual pessoa gostaria de reencontrar primeiro depois que morrer?",
        "Qual é o seu sonho profissional? Aonde deseja chegar?",
        "Qual é a sua maior saudade?",
        "Que viagem fez que não gostaria de repetir?",
        "Streaming ou canais de televisão?",
        "Podcast ou vídeo no YouTube?",
        "Instagram ou TikTok?",
        "Algum professor marcou você? Por quê?",
        "Que livro mais te marcou?",
        "Acordar cedo ou dormir muito tarde?",
        "Como seria sua tarde de preguiça perfeita?",
        "Quais foram as melhores férias da sua vida?",
        "Qual acredita ser sua maior qualidade?",
        "Qual é o seu maior medo?",
        "Qual foi o momento mais assustador da sua vida?",
        "O que mais te motiva a trabalhar duro?",
        "Qual foi o melhor conselho que já recebeu?",
        "Qual conselho daria a si mesmo(a) de 10 anos atrás?",
        "Já precisou abrir mão para chegar onde está hoje?",
        "Já passou por alguma situação que achou ruim na hora, mas depois considerou como algo positivo?",
        "Em uma escala de 0 a 10, quanto cuida de si mesmo(a)?",
        "Um livro ou filme que mudou a sua vida?",
        "Qual costuma ser a melhor parte do seu dia?",
        "Qual sonho ainda pretende realizar?",
        "Diga algo que você ama odiar secretamente?",
        "Diga três objetos que levaria para uma ilha deserta?",
        "O seu primeiro amor foi correspondido?",
        "Qual mania você tenta, mas não consegue perder?",
        "Qual foi a pior compra que já fez na vida?",
        "Com quantos travesseiros dorme?",
        "Como se vê daqui a 10 anos?",
        "Qual feito histórico gostaria de ter vivenciado?",
        "O que te deixa ansioso(a)?",
        "Você é do tipo que pensa demais ou simplesmente deixar as coisas acontecerem?",
        "Qual é a sua opinião sobre fazer terapia?",
        "Há alguma pessoa no mundo para quem você doaria um rim?",
        "Já entrou em uma briga?",
        "Se lembra de quando foi que se sentiu adulto(a) pela primeira vez?",
        "Costuma ou costumava escrever em um diário?",
        "Deixa a louça na pia de um dia para o outro ou deixa a pia limpa antes de dormir?",
        "Qual é a primeira recordação que tem da vida?",
        "Qual o melhor presente que já ganhou de alguém?",
        "Qual o melhor presente que já deu a alguém?",
        "Qual a primeira coisa que comprou com seu primeiro salário do primeiro emprego?",
        "Quando você for idoso, qual o arrependimento que não quer ter sobre a vida?",
        "O que gostaria que tivessem te avisado sobre a vida adulta?",
        "Qual o maior autocuidado que tem consigo mesmo todos os dias?",
        "Que limite já ultrassou, mas não ultrapassaria novamente?",
        "Apartamento ou casa?",
        "De qual artista gostava quando era criança?",
        "Se só puder ensinar uma coisa a seus filhos no futuro, o que seria?",
        "O que você gosta, mas tem vergonha de assumir?",
        "Qual é o seu talento inútil?",
        "Seja sincero(a): qual idade sente ter?",
        "Quais trejeitos ou características dos seus pais espera não ter herdado?",
        "Qual música ama, mas tem vergonha de admitir?",
        "Qual é a música que sempre canta no karaokê?",
        "Qual foi o pior presente que já recebeu?",
        "Qual foi o pior conselho que já recebeu?",
        "Já saiu de casa de pijama?",
        "Qual é a combinação de comida mais estranha que você adora?",
        "Quais opções gostaria de ver se pudesse clicar nas pessoas com o botão direito do mouse?",
        "Borda da pizza: você come ou deixa no canto do prato?",
        "Qual foi a coisa mais inútil que já comprou, mas não se arrepende?",
        "Qual nome jamais colocaria em um filho ou filha porque remete a alguém irritante?",
        "Se você fosse um produto, qual seria o seu slogan?",
        "O que você gostaria de nunca ter descoberto como é feito?",
        "Qual é a piada de 'tiozão'' que você sempre conta?",
        "Em qual trabalho seria um desastre?",
        "Quando era criança, comia a casca do pão de forma?",
        "Por qual apelido vergonhoso era ou ainda é chamado por sua família?",
        "Se vir um cocô de cachorro no chão, você passa por cima ou dá a volta?",
        "Qual foi o lugar mais absurdo onde já dormiu?",
        "O que você lava primeiro quando entra no banho?",
        "Com qual famoso dizem que você se parece?",
        "Qual é a gíria do momento que você odeia?",
        "Qual foi o elogio mais estranho que já recebeu?",
        "Já mandou mensagem para o grupo errado? Como foi?",
        "Qual é o jeito certo de começar a comer coxinha: por baixo ou pela pontinha?",
        "Você fala sozinho?",
        "Qual aplicativo tem vergonha de ter instalado no celular?",
        "Se você viesse com um teaser trailer, o que acha que estaria nele?",
        "Honestamente, como você era na época de escola?",
        "Qual é um hábito incomum que tem e ninguém sabe sobre ele?",
        "Qual seria sua reação se recebesse um carro de Loucura de Amor?",
        "Qual a fantasia mais engraçada que já usou?",
        "Que moda seguiu quando era mais novo e hoje se envergonha disso?",
        "Para dormir de conchinha, você é quem abraça ou é quem é abraçado?",
        "Qual passeio já fez que mais deu errado?",
        "Qual sua lacuna de conhecimento básico? Algo simples que estranhamente demorou para aprender?",
        "Que personagem fictício gostaria de conhecer na vida real?"
];


const sortQuestion = (type) => {

    

    if(type === 'sort') {
        const indiceSorteado = Math.floor(Math.random() * questions.length);
        const elementoSorteado = questions[indiceSorteado];
        document.getElementById('question').innerHTML = elementoSorteado;
      
    }

    if(type === 'reset') {
        document.getElementById('question').innerHTML = 'Clique em perguntar para começar!';
    }

}