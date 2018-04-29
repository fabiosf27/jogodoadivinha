var RNumero;		//Numero aleatorio
var RMaxNumero;		//Numero maximo aleatorio
var RTentativas = 0;	//Numero de tentativas

function Init() {
    RNumero = gerarAleatorio();
	RMaxNumero = pedirRMaxNumero()
    	document.getElementById('areaMensagens').innerHTML = 'Estou a pensar num número entre 1 e ' + (RMaxNumero) +'. Tenta adivinhar qual é?';
    	document.getElementById('RTentativas').innerHTML = RTentativas;
    	document.getElementById('areaDica').innerHTML = 'Boa sorte!';
}
	
function pedirRMaxNumero() {
	var valorValido = false; //Variável usada para verificar o valor
	while (!valorValido) { //Enquanto o valor for inválido
		var RMaxNumero = parseInt(prompt("Escreve o número máximo")); //Define a variável com o valor inserido pelo utilizador
		if (!isNaN(RMaxNumero) && RMaxNumero > 0) { //Se a variável for um número
			valorValido = true; //Sair do loop
		}
	}
	console.log("user input: " + RMaxNumero);
	return RMaxNumero; //Devolve o valor da variável
}

//Com esta função, o programa vai buscar um numero aleatorio
function gerarAleatorio() {
    var RNumero = Math.floor(Math.random() * RMaxNumero) + 1;
	console.log("random number: " + RNumero);
    return RNumero;
}

//Função que adiciona os valores quando se clica nos botões
function adicionar(numero) {
	jogoAdivinha.input.value += numero;
}

//Função que verifica os valores quando se clica no botão verificar
function verificarValores() {
	var regex = /^[0-9]+$/; //Cria um filtro com todos os números
	var input = jogoAdivinha.input.value;
	console.log("input: " + input);
	
	jogoAdivinha.input.value = ''; //Reset do valor do input
	
	if (!input.match(regex)) { //Caso os valores do input contenham qualquer caráter que não seja um número
		//Atualiza a área de informações
		document.getElementById('areaMensagens').innerHTML = 'Apenas são permitidos números!'; 
    }
	else if (input > RMaxNumero) { //Caso o input seja maior que o valor máximo
		//Atualiza a área de informações
       		document.getElementById('areaMensagens').innerHTML = 'Número muito grande!'; 
	}
	else {
		jogo(input);
	}
}

//Função que trata da lógica do jogo
function jogo(numero) {
    if (numero == RNumero) { //Caso o utilizador acerte
         RTentativas++; //Adiciona um valor às tentativas
	 //Atualiza a área de informações
	 document.getElementById('areaMensagens').innerHTML = 'Acertaste em ' + RTentativas + ' RTentativas! Era o número ' + RNumero + '! Clica em Recomeçar para jogar outra vez';
	 document.getElementById('areaDica').innerHTML = 'O número está certoooooooooo!';
	 document.getElementById('RTentativas').innerHTML = RTentativas;
	 document.jogoAdivinha.input.value = '';
	 setTimeout(recomecar, 1000); //Executa a função recomecar passado 1segundo
	}
    else  { //Caso falhe
	RTentativas++; //Adiciona um valor às tentativas
	//Atualiza a área de informações
	document.getElementById('areaMensagens').innerHTML = 'Não, ' + numero + ' não é o número em que estou a pensar!';
	document.getElementById('areaDica').innerHTML = (RNumero > numero) ? 'O número é mais alto!' : 'O número é mais baixo!';
	document.getElementById('RTentativas').innerHTML = RTentativas;
	}
}

//Função que reinicia o jogo
function recomecar() {
	var recomecar = confirm('Recomeçar?'); //Pergunta ao usuário se quer recomeçar
	if (recomecar){
		Init(); //Reinicia o jogo
	}
}