/*
__Reserved Words__
break case catch class const continue debugger default delete do
else enum export extends false finally for function if import in
instanceof new null return super switch this throw true try
typeof var void while with

___Strict Mode Reserved Words___
as implements interface let package private protected public static yield

___Contextual Keywords__
any boolean constructor declare get module require number set string
symbol type from of
*/

//Tipos primitivos embutidos: boolean, string, number, undefined, null, any, unknown
//			      never, void, bigint(ES2020), symbol.
//Objetos comumente embutidos: Date, Error, Array, Map, Set, Regex, Promise
//Tipos do typescript: never

//Nunca use os tipos primitivos comessados em maiúsculo: Number String e etcetera

// I M P O T A Ç Ã O	M Ó D U L O S
import { pi as pidamonhagaba, incVezes as ronaldinhoSoccer } from './module.js';

console.log( pidamonhagaba );
console.log( ronaldinhoSoccer(pidamonhagaba,10) );
console.log( ronaldinhoSoccer( 10, 10 ) );


// T I P A G E M    F O R T E

let a: number = 10;
let b: string = 'teste';
let c: boolean = true;
let d: object = { rinoceteio: ()=>{ return 'rinoceteio'; } };
let e: Array<number> = [1,2,3,4,5];
let f: number[] = [1,2,3,4,5];
let g: string[] = ['2', 'the book is on the table'];
let h: typeof b = "tipo d'outro";
console.log(a,b,c,d,e,f,g,h);

function impressao( Palavra: string, Repetir: number , Modo: boolean): string
{
	let avancador = '-';
	for( let a = 0; a <= Repetir; ++a)
	{
		switch( Modo )
		{
			case true:
				Palavra = Palavra.concat(avancador);
				console.log( Palavra );
				break;
			case false:
				console.log( Palavra );
				break;
		}
	}
	return 'Pronto!';
}


let stret = impressao("tipo certo", 10, true);

console.log( stret );


// U N I O N		A N O N Y M O U S  T Y P E	O P T I O N A L  P A R A M E T E R
//tipo Union:	este | ouEste
//tipo formado de dois ou mais outros tipos.
//outroValor: tipo anônimo  & ?Opcional
function stringOuNumber(valor: number | string, outroValor?: { atributo: string }): any
{

	//Narrowing estreitamento

	if( typeof outroValor != undefined )
		console.log(outroValor);

	if( typeof valor === "string" )
	{
		return valor.toUpperCase();
	}
	else if( typeof valor == 'number' )
	{
		return valor * 10;
	}
}

stringOuNumber(10);
stringOuNumber('oh year', { atributo: 'tipo anonimo' });

//  S A M E	M E T H O D

function pontoEmComun(valor: string[] | string)
{
	//método em comun para Array e string
	console.log( valor.slice(0,2) );
}

pontoEmComun('computador');
pontoEmComun(['a', 'b', 'c']);

//	T Y P E		D E S C R I P T I O N

//Type aliases
type NumeroOuString = number | string;
type cadeiaDeCaracteres = string;
type numeroDePontoFlutanteComVariasCasasDecimais = number;

let z: numeroDePontoFlutanteComVariasCasasDecimais = 10.57648;

let nos: NumeroOuString | cadeiaDeCaracteres = "type";
console.log(nos);

if( typeof z == 'number' )
{
	console.log(z);
}

//	T Y P E

type Retangulo =
{
	x: number;
	y: number;
};

// o NOVO type abaixo estende Point acima.

type Paralelepipedo = Retangulo &
{
	z: number;
};

let paralele: Paralelepipedo = {x:10, y:20, z:30};
console.log( paralele );

// 	I N T E R F A C E

interface Interfaces
{
	inteiro: number;
	dist( metros: number ): number;
}

interface Pessoa
{
	nome: string;
	idade: number;
};

interface Pessoa2 extends Pessoa
{
	peso: number;
};

interface Pessoa3 extends Pessoa2
{
	vivo: boolean;
	sexo: string;
};

//implements verifica se a classe satisfaz uma interface particular.
class Persona implements Pessoa
{
	nome: string;
	idade: number;

	constructor( Nome: string, Idade: number )
	{
		this.nome = Nome;
		this.idade = Idade;
	}

	andar( metros: number ): number
	{
		console.log( metros );
		return metros;
	}
}

function DemostracaoInterface(a: Pessoa, b: Pessoa2, c: Pessoa3, d: number | Persona): void
{

	// I N
	if( "peso" in c ) console.log('c contém o atributo peso IN');
	else console.log('o atributo peso não existe em c. IN');

	// I N S T A N C E O F

	if( d instanceof Persona ) console.log('c é instância de Data INSTANCEOF');
	else console.log('d não é instância da classe Data. INSTANCEOF');

	return;
}

let instanciaPersona: Persona = new Persona( "jeca", 50 );
DemostracaoInterface( { nome: 'Joao', idade:70 }, { nome:'ana', idade:20, peso:60 }, { nome:'marco', idade:30, peso:80, vivo:true, sexo:'masculino' }, instanciaPersona );

// 	L I T E R A L	T Y P E S

let autor: "luiz" = 'luiz';
let estado: "vivo" | "morto" = "vivo";

//x = "meio vivo";

//types literais mais Union podem servir para aceitamento apenas de valores conhecidos.
function interruptor(estado: "ligado" | "desligado")
{
	return estado;
}

function fileDescriptors(a: 1 | 2 | 3): 1 | 2 | 3 
{
	return a;
}

estado = 'morto';
interruptor('ligado');
fileDescriptors(3);

//	C L A S S E S

class Caixa
{
	//não associado com uma particular instância de Caixa
	public static numeroInstancias: number = 0;

	readonly nome?: string;
	public comprimento: number;
	public altura: number;
	protected largura: number;
	private senha: string;

	constructor( alt: number, lar: number, com: number, senha: string, nome?: string)
	{
		this.altura = alt;
		this.largura = lar;
		this.comprimento = com;
		if( nome != undefined ) this.nome = nome;
		this.senha = senha;

		//destrutor para -- ?
		Caixa.numeroInstancias++;
	}

	/* Sobrecarga não permitida !
	constructor(tudo: number)
	{
		this.altura = tudo;
		this.largura = tudo;
		this.comprimento = tudo;
	}*/

	protected exemplum(): string
	{
		this.senha;
		return 'exemplum' + this.secretum();
	}

	private secretum(): string
	{
		return 'secretum';
	}

	public volume(): number
	{
		return (this.altura * this.largura)* this.comprimento;
	}

};

// H E R A N Ç A

class Caixa2 extends Caixa
{
	constructor(alt: number, lar: number, com: number, senha: string, nome?: string)
	{
		if( typeof nome == undefined )
		{
			super(alt, lar, com, senha);
		}
		else super(alt, lar, com, senha, nome);
	}

	public nuntius(): string
	{
		//this.secretum();
		return this.exemplum();
	}

	public volume(): number
	{
		console.log("sobrecarga - sobrescrita do método volume de caixa com este console.log");
		return this.altura * this.largura * this.comprimento;
	}

};

let bloco1 = new Caixa(10, 20, 30, "bandeclay");
let bloco2 = new Caixa2(56, 75, 78, "fulecooceluf");
bloco1.volume();
bloco2.nuntius();
bloco2.volume();


// 	A N Y	T Y P E

//qualquer tipo sem controle.
function qualquerTipoFDS(argumento: any): any
{
	return argumento;
}

qualquerTipoFDS(1);
qualquerTipoFDS('Micro$oft');

//	G E N E R I C S

//array<number> é a mesma coisa que number[];
function controleGenerico<Type>(argumento: Array<Type>, argumento2: number[]): Array<Type>
{
	console.log(argumento.length);
	console.log(argumento2.length);
	return argumento;
}

function controleGenericoI<Type>(argumento: Type): Type
{
	return argumento;
}

console.log( controleGenerico<number>([1, 2, 3], [1,2,3,4]) );
console.log( controleGenericoI<number>( 10 ) );

console.log('- - - T Y P E S C R I P T - - -');
