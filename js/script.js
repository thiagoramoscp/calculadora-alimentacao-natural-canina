//Cálculo da quantidade de comida

const quantidadeBtn = document.getElementsByClassName('QuantidadeBtn')[0];
const comidaPorDia = document.getElementById('comidaPorDia');
const frutasPorDia = document.getElementById('frutasPorDia');

quantidadeBtn.addEventListener('click', (e) => {
    let pesoIdeal = document.getElementById('pesoIdeal').value;
    console.log(pesoIdeal);
});



const carnesDesossadas = {
    Frango: [
        'peito',
        'coxa desossada',
        'moela',
        'coração sem gordura',
        'sobrecoxa desossada'
    ],
    Porco: [
        'lombo suíno',
        'filé mignon suíno',
        'coração sem gordura'
    ],
    Boi: [
        'músculo',
        'lagarto',
        'patinho',
        'coxão mole',
        'bucho',
        'coxão duro',
        'coração sem gordura'
    ],
    Ovos: [
        'galinha',
        'pata',
        'codorna',
        'perua (gema e clara)'
    ],
    peixes: [
        'anchovas naturais (não a enlatada)',
        'sardinhas',
        'cavalinhas',
        'trilha',
        'bacalhau natural (sem ser o salgado!)',
        'pescada',
        'merluza',
        'truta',
        'salmão',
        'saint peter (tilápia)',
        'peixe porquinho',
        'manjuba',
        'tambaqui',
        'linguado',
        'badejo',
        'namorado',
        'corvina'
    ],
    outras: [
        'codorna',
        'coelho',
        'rã',
        'Cabrito (cortes magros)'
    ]
};

const vísceras = {
    fáceisDeEncontrar: [
        'Fígado de qualquer animal',
        'Rim',
        'Baço(ou passarinha)',
        'Pulmão(ou Bofe) / menos rico em nutrientes',
        'Cérebro(ou miolo)'
    ],
    difíceisDeEncontrar: [
        'Intestino',
        'Pâncreas'
    ]
};

const vegetaisSemRestricao = {
    vegetais: [
        'Quiabo',
        'Pimentões sem sementes (prefira os vermelhos e amarelos)',
        'Chuchu',
        'Alcachofra',
        'Pepino',
        'Aspargos',
        'Palmito pupunha ou palmito açaí',
        'Ervilha-torta (ou orelha de padre)',
        'Vagem macarrão',
        'Tomate',
        'Talos de salsão',
        'Cenoura',
        'Abóbora (ou jerimum) de qualquer tipo',
        'Beterraba',
        'Berinjela',
        'Jiló',
        'Brotos germinados de alfafa, trevo, feijão ou brócolis'
    ],
    folhas: ['agrião', 'catalonia', 'salsão', 'alface', 'acelga', 'rúcula', 'folhas de beterraba', 'folhas de cenoura', 'salsinha', 'salsa', 'manjericão'],
    algas: ['nori', 'akame', 'kombu']
};

//preferir tubérculos (aumentar a probabilidade de sair na dieta?)
const carboidratos = {
    tubérculos: [
        'Mandioquinha (batata-baroa ou batata-salsa)',
        'Inhame',
        'Cará',
        'Batata-doce roxa',
        'Batata-doce branca',
        'Batata yacón (crua ou cozida)',
        'Mandioca (macaxeira ou aipim)'
    ],
    grãosCereaisLeguminosas: [
        'Arroz integral ou parboilizado',
        'Aveia em flocos (sempre cozida)',
        'Quinoa',
        'Painço',
        'Cevadinha',
        'Lentilha',
        'Feijões de qualquer variedade',
        'Ervilha',
        'Grão-de-bico'
    ]

};

const frutas = [
    'blueberries',
    'maçã sem sementes',
    'pêra sem sementes',
    'pêssego sem caroço',
    'polpa de abacate (sem casca e caroço)',
    'ameixa',
    'banana',
    'melancia',
    'melão',
    'goiaba',
    'morango',
    'mamão',
    'kiwi',
    'laranja',
    'mexerica',
    'abacaxi',
    'acerola',
    'pitanga',
    'caqui',
    'jabuticaba',
    'romã',
    'figo',
    'damasco',
    'framboesa',
    'manga sem caroço'
];

// Dicas
const dicasCarnes = [
    'moela, língua, coração e bucho são considerados carnes para a alimentação natural',
    'se possível, deixe-as mal passadas ou ao ponto',
    'não frite as carnes usando óleos',
    'aproveite a água do cozimento das carnes e vísceras para cozinhar os legumes',
    'não tem problema ofececer a pele do frango se o cão for for jovem, ativo, não estiver gordo e não sofrer de vômitos frequentes (gastrite), doenças no fígado ou no pâncreas (pancreatite).',
    'se der apenas filé de peixe, qualquer espécie é adequada',
    'se for dar o peixe inteiro, prefira os pequenos (menores que um palmo)',
    'substitua aproximadamente 50g da porção diária de carne por 1 ovo de galinha (ou 11g por um ovo de codorna) 1x ou 2x por semana .'
];

const dicasVegetais = [
    'Capriche nas folhas. Associe regularmente folhas picadinhas (cruas ou cozidas, mas sempre bem picadinhas) aos legumes do seu amigão. Se preferir, pode refogá-las em um pouquinho de manteiga sem sal e alho picadinho ',
    'Evite combinar na mesma receita vegetais que fermentam, como brócolis, couve-flor e repolho.',
    'Espinafre apenas 1x por semana. Tem muito ácido oxálico que pode favorecer a formação de cristais e cálculos desse elemento'
];

const dicasCarboidratos = [
    'Não precisa tirar a casca de alguns tubérculos como o inhame e o cará, por exemplo',
    'Se for oferecer batata inglesa com a casca, cozinhe em panela com água e jogue fora a água (para descartar a solanina que sai da casca)',
    'Antes de conzinhas os grãos, cereais e leguminosas, deixe-os de molho por 12h (ou mais no caso das leguminosas) e descarte a água antes do cozimento (evita gases e melhora a digestão)',

];








// Precauções

const carnesAEvitar = {
    gordurosas: 'qualquer carne muito gordurosa deve ser evitada',
    peixesMarinhosGrandes: 'para evitar contaminação por metais pesados e outros poluentes'
};

const carboidratosAEvitar = {
    arrozNegroEMultiGrãos: 'Não são bem digeridos',
    arrozBranco: 'Mais pobre em nutrientes mas pode ser servido ocasionalmente. Ótima opção para pets convalescentes, debilitados e para remediar quadros agudos de diarreia e vômitos (não fermenta e tem alta digestibilidade)',
    batataInglesa: 'Mais pobre em nutrientes mas pode ser servida ocasionalmente. Ótima opção para pets doentes e com transtornos gastrintestinais (alta digestibilidade)'
};


const alimentosAEvitar = {
    cebola: 'tóxica para cães',
    soja: 'desbalanções hormonais e alergias',
    milho: 'alergia',
    enlatados: 'cheios de sódio e aditivos químicos',
    MilhoEDerivados: 'transgênico e para muitos cães, alergênico',
    SojaEDerivados: 'desbalanções hormonais e alergias',
    TrigoETriguilho: 'alergia',
    Macarrão: 'se não for de trigo, ok',
    Pão: 'contém muito açúcar, sódio, é feito com trigo, e adere aos dentes'
};

const frutasAEvitar = {
        uvasEPassas: 'prejudica os rins',
        carambola: 'prejudica os rins',
        cascaAbacate: 'tóxico',
        cascaMaracujáMelãoMelancia: '??. A vet do Aachorro Verde restrinje.',
        sementesMaçãEPera: 'tóxicos',
        frutasCítricas: 'geralmente não faz mal mas pode não ser bem aceito por alguns animais'
    }
    // se dor nas articulações => evitar solenácias
const solenáceas = ['Jiló', 'Pimentões', 'berinjela', 'nabo', 'tomate', 'pepino', 'batata branca'];
// se tem o estômago sensível => 'Experimente dividir os alimentos do dia em mais porções, introduzindo uma terceira refeição, por exemplo.'