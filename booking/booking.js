//Aqui a gente pega no carregamento da página a data de hoje
var tomorrow = new Date();

//adiciona mais um dia para pegarmos a data de amanhã
tomorrow.setDate(tomorrow.getDate() + 1)

//separamos o dia, mês e ano
var dd = tomorrow.getDate();
var mm = tomorrow.getMonth() + 1;
var yyyy = tomorrow.getFullYear();

//adicionamos um zero na frente se o dia for menor que 10
if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
    
//ajustamos a data
tomorrow = yyyy + '-' + mm + '-' + dd;

//adicionamos lá no campo de calendário do html a data miníma sendo o dia de amanhã
document.getElementById("dataReserva").setAttribute("min", tomorrow);

//função que é chamada pelo onsumbmit, aqui no caso ficariam os próximos passos para o banco de dados
function getInformacoes() {
    alert("Reservado!");
}