const cartas = [
    {
        "numero": 1,
        "nome": "Cavaleiro",
        "palavras": "Novidades • Notícias • Movimento",
        "significado": "Representa movimento e a chegada de novidades. Pode indicar notícias, visitas ou situações que começam a se movimentar.",
        "amor": "Pode indicar a chegada de alguém ou novidades na vida amorosa.",
        "trabalho": "Novidades profissionais, propostas ou movimentação na carreira.",
        "espiritualidade": "Movimento, busca e abertura para novas experiências espirituais.",
        "conselho": "Esteja atento às novidades e não tenha medo de dar o primeiro passo."
    },
    {
        "numero": 2,
        "nome": "Trevo",
        "palavras": "Sorte • Oportunidade • Imprevistos",
        "significado": "Fala de pequenas oportunidades e sorte passageira. Também aconselha atenção aos imprevistos.",
        "amor": "Pequenas oportunidades afetivas. Aproveite os momentos sem criar expectativas exageradas.",
        "trabalho": "Pequenas oportunidades e chances inesperadas.",
        "espiritualidade": "Pequenas oportunidades de aprendizado e reflexão.",
        "conselho": "Valorize pequenas oportunidades, mas mantenha os pés no chão."
    },
    {
        "numero": 3,
        "nome": "Navio",
        "palavras": "Viagens • Mudanças • Distância",
        "significado": "Representa viagens, mudanças e novos horizontes. Pode indicar afastamento ou desejo de explorar algo diferente.",
        "amor": "Pode indicar distância, viagens ou mudanças na relação.",
        "trabalho": "Mudanças profissionais, viagens ou novos horizontes.",
        "espiritualidade": "Jornada de autoconhecimento e busca por novos horizontes.",
        "conselho": "Permita-se conhecer novos caminhos e ampliar seus horizontes."
    },
    {
        "numero": 4,
        "nome": "Casa",
        "palavras": "Família • Lar • Segurança",
        "significado": "Está ligada ao lar, à família, à estrutura e à segurança. Representa aquilo que oferece estabilidade.",
        "amor": "Busca por segurança, estabilidade e construção de um lar.",
        "trabalho": "Estabilidade e trabalho ligado ao ambiente familiar ou doméstico.",
        "espiritualidade": "Valorização das raízes, da ancestralidade e dos ensinamentos familiares.",
        "conselho": "Fortaleça suas bases e cuide daquilo que oferece segurança."
    },
    {
        "numero": 5,
        "nome": "Árvore",
        "palavras": "Saúde • Crescimento • Raízes",
        "significado": "Simboliza crescimento, raízes, saúde e desenvolvimento gradual. Lembra que algumas coisas precisam de tempo.",
        "amor": "Relacionamento que cresce com paciência e cuidado.",
        "trabalho": "Crescimento profissional gradual e consistente.",
        "espiritualidade": "Desenvolvimento interior que acontece com tempo e dedicação.",
        "conselho": "Respeite seu tempo de crescimento. Nem tudo acontece rapidamente."
    },
    {
        "numero": 6,
        "nome": "Nuvens",
        "palavras": "Dúvidas • Confusão • Incerteza",
        "significado": "Representa dúvidas, confusão e falta de clareza. É um convite para esperar até conseguir enxergar melhor a situação.",
        "amor": "Dúvidas e falta de clareza nos sentimentos. Converse com sinceridade.",
        "trabalho": "Incertezas sobre decisões profissionais. Busque informações.",
        "espiritualidade": "Momento de reflexão diante de dúvidas e incertezas.",
        "conselho": "Não decida no meio da confusão. Busque clareza primeiro."
    },
    {
        "numero": 7,
        "nome": "Cobra",
        "palavras": "Estratégia • Ciúmes • Complicações",
        "significado": "Pode representar complicações, ciúmes ou situações que exigem estratégia e cautela.",
        "amor": "Atenção a ciúmes, desconfianças e complicações afetivas.",
        "trabalho": "Tenha cautela com situações complicadas no ambiente de trabalho.",
        "espiritualidade": "Discernimento e cuidado com interpretações precipitadas.",
        "conselho": "Observe melhor a situação antes de agir ou confiar."
    },
    {
        "numero": 8,
        "nome": "Caixão",
        "palavras": "Fim de ciclo • Transformação • Encerramento",
        "significado": "Representa encerramentos e transformações. Uma fase pode estar chegando ao fim para dar espaço a outra.",
        "amor": "Encerramento de uma fase ou transformação no relacionamento.",
        "trabalho": "Encerramento de um projeto ou mudança de ciclo profissional.",
        "espiritualidade": "Transformação interior e encerramento de ciclos.",
        "conselho": "Aceite que algumas fases terminam e outras começam."
    },
    {
        "numero": 9,
        "nome": "Buquê",
        "palavras": "Alegria • Presentes • Gentileza",
        "significado": "Simboliza alegria, gentileza, presentes e acontecimentos agradáveis. Pode indicar reconhecimento e satisfação.",
        "amor": "Carinho, encontros agradáveis e demonstrações de afeto.",
        "trabalho": "Reconhecimento, elogios e oportunidades agradáveis.",
        "espiritualidade": "Gratidão, alegria e valorização das boas experiências.",
        "conselho": "Valorize os momentos bons e demonstre gratidão."
    },
    {
        "numero": 10,
        "nome": "Foice",
        "palavras": "Decisão • Corte • Mudança repentina",
        "significado": "Representa cortes, decisões e mudanças repentinas. Pode pedir atenção antes de tomar uma atitude.",
        "amor": "Decisões importantes ou necessidade de romper padrões.",
        "trabalho": "Decisões rápidas e mudanças na rotina profissional.",
        "espiritualidade": "Necessidade de cortar hábitos que já não fazem sentido.",
        "conselho": "Pense antes de tomar decisões definitivas."
    },
    {
        "numero": 11,
        "nome": "Chicote",
        "palavras": "Conflitos • Discussões • Repetição",
        "significado": "Está relacionada a conflitos, discussões e situações repetitivas. Também pode indicar disciplina e esforço.",
        "amor": "Discussões repetidas. Procure compreender a origem dos conflitos.",
        "trabalho": "Conflitos, cobranças ou tarefas repetitivas.",
        "espiritualidade": "Disciplina e atenção aos padrões que se repetem.",
        "conselho": "Evite alimentar discussões e padrões que não ajudam."
    },
    {
        "numero": 12,
        "nome": "Pássaros",
        "palavras": "Conversas • Notícias • Comunicação",
        "significado": "Representa conversas, comunicação e troca de informações. Pode indicar ansiedade ou muitas conversas ao mesmo tempo.",
        "amor": "Conversas, mensagens e aproximações.",
        "trabalho": "Reuniões, conversas e troca de informações.",
        "espiritualidade": "Troca de conhecimentos e conversas sobre espiritualidade.",
        "conselho": "Converse, escute e procure esclarecer mal-entendidos."
    },
    {
        "numero": 13,
        "nome": "Criança",
        "palavras": "Início • Inocência • Novidade",
        "significado": "Simboliza começos, inocência, curiosidade e novidades. Também fala de simplicidade e espontaneidade.",
        "amor": "Um novo começo afetivo ou uma relação mais espontânea.",
        "trabalho": "Aprendizado, projetos novos e oportunidades iniciais.",
        "espiritualidade": "Curiosidade, aprendizado e abertura para descobrir.",
        "conselho": "Tenha curiosidade e permita-se começar novamente."
    },
    {
        "numero": 14,
        "nome": "Raposa",
        "palavras": "Esperteza • Cautela • Trabalho",
        "significado": "Representa esperteza, observação e cautela. Recomenda analisar bem as situações antes de confiar.",
        "amor": "Observe as atitudes e evite confiar apenas nas aparências.",
        "trabalho": "Atenção aos detalhes e às atitudes no ambiente profissional.",
        "espiritualidade": "Discernimento para avaliar ensinamentos e orientações.",
        "conselho": "Use sua inteligência com honestidade e atenção."
    },
    {
        "numero": 15,
        "nome": "Urso",
        "palavras": "Força • Proteção • Poder",
        "significado": "Simboliza força, proteção, autoridade e poder. Pode representar alguém influente ou a necessidade de firmeza.",
        "amor": "Proteção, intensidade e necessidade de equilíbrio na relação.",
        "trabalho": "Liderança, autoridade e capacidade de administrar recursos.",
        "espiritualidade": "Força interior, proteção simbólica e firmeza.",
        "conselho": "Reconheça sua força sem tentar controlar tudo."
    },
    {
        "numero": 16,
        "nome": "Estrelas",
        "palavras": "Esperança • Inspiração • Espiritualidade",
        "significado": "Representa esperança, inspiração e orientação. Também pode simbolizar fé e objetivos.",
        "amor": "Esperança de viver uma relação alinhada aos seus sentimentos.",
        "trabalho": "Inspiração para projetos e objetivos profissionais.",
        "espiritualidade": "Esperança, inspiração e conexão com seus ideais.",
        "conselho": "Mantenha a esperança e continue trabalhando por seus objetivos."
    },
    {
        "numero": 17,
        "nome": "Cegonha",
        "palavras": "Mudança • Renovação • Novos caminhos",
        "significado": "Representa mudanças, renovação e transições. Indica movimento para uma nova fase.",
        "amor": "Renovação e mudanças na vida amorosa.",
        "trabalho": "Mudança de emprego, função ou direção profissional.",
        "espiritualidade": "Renovação de práticas e mudanças no caminho pessoal.",
        "conselho": "Esteja aberto às mudanças e às novas possibilidades."
    },
    {
        "numero": 18,
        "nome": "Cachorro",
        "palavras": "Amizade • Lealdade • Confiança",
        "significado": "Simboliza amizade, lealdade, companheirismo e confiança.",
        "amor": "Amizade, lealdade e confiança como base do relacionamento.",
        "trabalho": "Parcerias confiáveis e apoio de colegas.",
        "espiritualidade": "Confiança, respeito e lealdade aos próprios valores.",
        "conselho": "Valorize quem demonstra lealdade por meio das atitudes."
    },
    {
        "numero": 19,
        "nome": "Torre",
        "palavras": "Isolamento • Instituições • Introspecção",
        "significado": "Representa isolamento, instituições, estrutura e introspecção.",
        "amor": "Necessidade de espaço individual ou distanciamento emocional.",
        "trabalho": "Instituições, empresas grandes ou trabalho individual.",
        "espiritualidade": "Silêncio, recolhimento e estudo individual.",
        "conselho": "Respeite seu espaço e reserve um tempo para refletir."
    },
    {
        "numero": 20,
        "nome": "Jardim",
        "palavras": "Encontros • Sociedade • Comunidade",
        "significado": "Simboliza encontros, vida social, grupos e espaços públicos.",
        "amor": "Encontros, amizades e oportunidades de conhecer pessoas.",
        "trabalho": "Contatos profissionais, eventos e oportunidades em grupo.",
        "espiritualidade": "Comunidade, convivência e aprendizado coletivo.",
        "conselho": "Esteja aberto a conhecer pessoas e compartilhar experiências."
    },
    {
        "numero": 21,
        "nome": "Montanha",
        "palavras": "Obstáculos • Desafios • Lentidão",
        "significado": "Representa obstáculos, desafios e atrasos. Pede paciência e persistência diante das dificuldades.",
        "amor": "Dificuldades que pedem diálogo e paciência.",
        "trabalho": "Obstáculos e atrasos que exigem persistência.",
        "espiritualidade": "Desafios no caminho de autoconhecimento.",
        "conselho": "Tenha paciência e enfrente os desafios um passo de cada vez."
    },
    {
        "numero": 22,
        "nome": "Caminhos",
        "palavras": "Escolhas • Decisões • Alternativas",
        "significado": "Representa escolhas e alternativas. Indica que uma decisão pode influenciar os próximos passos.",
        "amor": "Escolhas importantes no campo afetivo.",
        "trabalho": "Escolha entre caminhos ou propostas profissionais.",
        "espiritualidade": "Escolhas pessoais e reflexão sobre seus caminhos.",
        "conselho": "Analise as alternativas antes de escolher seu caminho."
    },
    {
        "numero": 23,
        "nome": "Ratos",
        "palavras": "Desgaste • Preocupações • Perdas",
        "significado": "Simboliza desgaste, preocupações e perdas graduais. Pode indicar algo que precisa de atenção.",
        "amor": "Desgaste emocional. Cuide dos seus limites.",
        "trabalho": "Despesas, cansaço ou situações que consomem recursos.",
        "espiritualidade": "Desapego de preocupações e hábitos desgastantes.",
        "conselho": "Identifique o que está causando desgaste e cuide dos seus limites."
    },
    {
        "numero": 24,
        "nome": "Coração",
        "palavras": "Amor • Sentimentos • Afeto",
        "significado": "Representa amor, afeto, sentimentos e relações emocionais.",
        "amor": "Afeto, paixão, carinho e sentimentos verdadeiros.",
        "trabalho": "Trabalhar com algo que desperta satisfação pessoal.",
        "espiritualidade": "Conexão com sentimentos, empatia e amor.",
        "conselho": "Escute seus sentimentos sem deixar de lado a razão."
    },
    {
        "numero": 25,
        "nome": "Aliança",
        "palavras": "União • Compromisso • Parceria",
        "significado": "Simboliza união, compromisso, parceria e acordos.",
        "amor": "Compromisso, união e construção de vínculos.",
        "trabalho": "Contratos, sociedades e acordos profissionais.",
        "espiritualidade": "Compromisso com seus valores e práticas pessoais.",
        "conselho": "Honre seus compromissos e valorize as parcerias."
    },
    {
        "numero": 26,
        "nome": "Livro",
        "palavras": "Conhecimento • Segredos • Estudos",
        "significado": "Representa conhecimento, estudos e assuntos ainda desconhecidos. Pode indicar segredos ou descobertas.",
        "amor": "Sentimentos ainda não revelados ou necessidade de conhecer melhor alguém.",
        "trabalho": "Estudos, cursos e conhecimentos ainda em desenvolvimento.",
        "espiritualidade": "Estudo, conhecimento e respeito às tradições.",
        "conselho": "Continue aprendendo e não tenha medo de buscar conhecimento."
    },
    {
        "numero": 27,
        "nome": "Carta",
        "palavras": "Mensagem • Documento • Comunicação",
        "significado": "Representa mensagens, documentos, notícias e comunicação escrita.",
        "amor": "Mensagens e conversas importantes no relacionamento.",
        "trabalho": "Documentos, mensagens e respostas profissionais.",
        "espiritualidade": "Mensagens, registros e ensinamentos compartilhados.",
        "conselho": "Preste atenção às informações e organize seus documentos."
    },
    {
        "numero": 28,
        "nome": "Homem",
        "palavras": "Figura masculina • Atitude • Presença",
        "significado": "Pode representar uma figura masculina importante na situação.",
        "amor": "Pode representar uma figura masculina na questão amorosa.",
        "trabalho": "Pode representar um homem envolvido na questão profissional.",
        "espiritualidade": "Reflexão sobre atitudes e presença masculina simbólica.",
        "conselho": "Observe o papel das figuras masculinas envolvidas na situação."
    },
    {
        "numero": 29,
        "nome": "Mulher",
        "palavras": "Figura feminina • Atitude • Presença",
        "significado": "Pode representar uma figura feminina importante na situação.",
        "amor": "Pode representar uma figura feminina na questão amorosa.",
        "trabalho": "Pode representar uma mulher envolvida na questão profissional.",
        "espiritualidade": "Reflexão sobre atitudes e presença feminina simbólica.",
        "conselho": "Observe o papel das figuras femininas envolvidas na situação."
    },
    {
        "numero": 30,
        "nome": "Lírios",
        "palavras": "Paz • Maturidade • Harmonia",
        "significado": "Simboliza paz, maturidade, harmonia e tranquilidade.",
        "amor": "Busca por paz, maturidade e harmonia afetiva.",
        "trabalho": "Ambiente de trabalho tranquilo e decisões maduras.",
        "espiritualidade": "Equilíbrio, serenidade e maturidade interior.",
        "conselho": "Escolha a tranquilidade e aja com maturidade."
    },
    {
        "numero": 31,
        "nome": "Sol",
        "palavras": "Sucesso • Clareza • Vitalidade",
        "significado": "Representa sucesso, clareza, energia e vitalidade.",
        "amor": "Alegria, clareza e momentos positivos no amor.",
        "trabalho": "Resultados positivos, reconhecimento e clareza nos objetivos.",
        "espiritualidade": "Clareza, confiança e vitalidade espiritual simbólica.",
        "conselho": "Confie no seu esforço e valorize suas conquistas."
    },
    {
        "numero": 32,
        "nome": "Lua",
        "palavras": "Reconhecimento • Emoções • Intuição",
        "significado": "Representa emoções, intuição, sensibilidade e reconhecimento.",
        "amor": "Romantismo, sensibilidade e emoções intensas.",
        "trabalho": "Criatividade, reconhecimento e valorização do trabalho.",
        "espiritualidade": "Intuição, sensibilidade e contato com as próprias emoções.",
        "conselho": "Respeite sua sensibilidade e procure equilíbrio emocional."
    },
    {
        "numero": 33,
        "nome": "Chave",
        "palavras": "Solução • Resposta • Conquista",
        "significado": "Simboliza soluções, respostas e oportunidades.",
        "amor": "Possibilidade de encontrar uma solução para questões amorosas.",
        "trabalho": "Encontrar soluções e abrir novas oportunidades.",
        "espiritualidade": "Descoberta de respostas por meio do estudo e da reflexão.",
        "conselho": "Procure alternativas: uma solução pode estar mais perto do que imagina."
    },
    {
        "numero": 34,
        "nome": "Peixes",
        "palavras": "Dinheiro • Recursos • Prosperidade",
        "significado": "Representa dinheiro, recursos, negócios e prosperidade material.",
        "amor": "Pode indicar generosidade, troca de sentimentos e abundância afetiva.",
        "trabalho": "Movimentação financeira e administração de recursos.",
        "espiritualidade": "Gratidão, abundância e relação com o mundo material.",
        "conselho": "Organize seus recursos e tenha responsabilidade financeira."
    },
    {
        "numero": 35,
        "nome": "Âncora",
        "palavras": "Estabilidade • Persistência • Trabalho",
        "significado": "Representa estabilidade, segurança e persistência.",
        "amor": "Busca por segurança e estabilidade na relação.",
        "trabalho": "Estabilidade, continuidade e dedicação profissional.",
        "espiritualidade": "Firmeza, constância e compromisso com o próprio caminho.",
        "conselho": "Continue firme, mas lembre-se de respeitar seus limites."
    },
    {
        "numero": 36,
        "nome": "Cruz",
        "palavras": "Responsabilidade • Aprendizado • Fé",
        "significado": "Representa responsabilidades, desafios, aprendizados e fé.",
        "amor": "Desafios afetivos que pedem reflexão e responsabilidade.",
        "trabalho": "Responsabilidades e desafios que exigem comprometimento.",
        "espiritualidade": "Fé, responsabilidade e aprendizado diante dos desafios.",
        "conselho": "Aprenda com os desafios sem carregar responsabilidades que não são suas."
    }
];
