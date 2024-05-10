//variéveis para guaradar os textos originais
var textoone = document.getElementById('tone').innerText;
var iconone = document.getElementById('ione').href;
var imgone = document.getElementById('mone').src;


function mudarInformacoes(botaoClicado){
    var texto, icone, imagem;
     // Verificar qual botão foi clicado e atualizar as informações correspondentes
     if (botaoClicado === 'luffy') {
        texto = 'Monkey D. Luffy, também conhecido como "Luffy do Chapéu de Palha" e comumente como "Chapéu de Palha", é o fundador e capitão dos cada vez mais \ninfames e poderosos Piratas do Chapéu de Palha, bem como o mais poderoso de seus melhores lutadores. Ele deseja encontrar o tesouro lendário \ndeixado para trás pelo falecido Gol D. Roger e assim se tornar o Rei dos Piratas, o que ajudaria a facilitar um sonho desconhecido dele que ele contou apenas para \nShanks, seus irmãos e tripulação. Ele acredita que ser o Rei dos Piratas significa ter a maior liberdade do mundo. Nascido na Vila Foosha, \nLuffy acidentalmente comeu a Gomu Gomu no Mi aos 7 anos de idade, que deu ao seu corpo propriedades de borracha. Nesta época, Luffy conheceu Shanks, \n"o Ruivo", que lhe deu seu chapéu de palha como parte de uma promessa para que eles se encontrassem novamente. Luffy é o filho do líder Revolucionário Monkey D. Dragon, \nneto paterno do herói da Marinha Monkey D. Garp,  irmão jurado do falecido "Punhos de Fogo" Portgas D. Ace e do chefe de gabinete Revolucionário Sabo, e filho adotivo de Curly Dadan. \nEle é uma das poucas pessoas no mundo que carregam a Vontade de D.';
        icone = "https://pm1.aminoapps.com/6618/8aeb0fc0f33c9faf2bb51b8d43dd2f52a6b6bb82_00.jpg";
        imagem = "https://www.fashionbubbles.com/wp-content/uploads/2023/08/luffy-gear-5-one-piece-destaque.jpg";
    } else if (botaoClicado === 'Shanks') {
        texto = 'Shanks, "o Ruivo", comumente conhecido apenas como "Ruivo",  é o chefe dos Piratas do Ruivo e um dos Quatro Imperadores que governam o Novo Mundo. avegando com os infames Piratas do Roger desde criança, Shanks começaria sua carreira de pirata em seu navio como um aprendiz ao lado de Buggy, antes de formar sua própria tripulação \ndepois da morte de Roger.';
        icone = "https://i.pinimg.com/originals/04/95/15/0495156dd28b70cde8928b18e6c4dbfe.png";
        imagem = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhdt7hncqGNFyZE4u02xq8EygHqFR51aBau8qQqYeHunWV5PiwSzbFoY3Y7uicx3IzpDnlfalMwxLTrsz4UufZM09IFyifDIMNxKssLj50BZRQzDovekpYw0SxJB8OYvi-SWGb7YHwQsfD0zG8SlILGpBnA3GiJI_eqHoSkDp8syyXI81ssv4nbIjSBRw/s1920/E%20se%20Shanks%20for%20o%20grande%20vil%C3%A3o%20de%20One%20Piece.png";
    } else if (botaoClicado === 'Buggy') {
        texto = 'Buggy, o Palhaço Estrela é o capitão dos Piratas Buggy bem como o co-líder da Aliança Buggy e Alvida, e um ex-aprendiz dos Piratas do Roger ao lado de Shanks. Após a Batalha de Marineford, ele se tornou membro dos Shichibukai e líder da organização de despacho pirata "Buggy Delivery". Mais tarde, ele perdeu seu título de Shichibukai quando o sistema foi abolido mas foi então reconhecido como um dos Quatro Imperadores após as derrotas de Kaidou e Big Mom e a criação da Cross Guild, da qual ele é publicamente reconhecido como o líder';
        icone = "https://i.pinimg.com/originals/6e/fd/25/6efd25bd70e9002ecc7fa7f94bbda466.png";
        imagem = "https://static.wikia.nocookie.net/onepiece/images/f/f7/Buggy_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/1200?cb=20220909015332&path-prefix=pt";
    } else if (botaoClicado === 'Barbanegra') {
        texto = 'Marshall D. Teach, mais comumente chamado por seu epíteto Barba Negra, é o capitão que virou almirante dos Piratas do Barba Negra, e um dos Quatro Imperadores.\n Ele também é a única pessoa conhecida na história a exercer os poderes de duas Akuma no Mi. Além disso, ele também faz parte de uma linhagem especial. Esse fato, no entanto, só é conhecido por um pequeno número de indivíduos, incluindo sua própria tripulação e os Cinco Anciões.';
        icone = "https://dendenmushibr.wordpress.com/wp-content/uploads/2017/10/1-jolly-roger.jpg";
        imagem = "https://eoszsmvknnh.exactdn.com/wp-content/uploads/2024/02/One-Piece-Finalmente-mostra-porque-o-Barba-Negra-e-a.jpg?strip=all&lossy=1&ssl=1";
    } else if (botaoClicado === 'inicio' ) {
        texto = textoone;
        icone = iconone;
        imagem = imgone;
    }

    // Atualizar os elementos HTML com as novas informações
    document.getElementById('tone').innerText = texto;
    document.getElementById('ione').href = icone;
    document.getElementById('mone').src = imagem;
}
