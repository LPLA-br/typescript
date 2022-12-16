//	N A M E S P A C E S

//Úteis para módulos

namespace Validacao
{
	export interface Demo
	{
		teste: string;
		ExternoAceitavel( s: string ): boolean;
		InternoAceitavel(): boolean;
	};

	const regExpTeste = /^([A-Z]|[0-9]).*/;

	export class DemoImplement implements Demo
	{
		public teste: string;

		constructor( Teste: string )
		{
			this.teste = Teste;
		}

		ExternoAceitavel( s: string ): boolean
		{
			return regExpTeste.test( s );
		}

		InternoAceitavel(  ): boolean
		{
			return regExpTeste.test( this.teste );
		}
	};

	export class Pessoa
	{
		protected nome: string;

		constructor( Nome: string )
		{
			this.nome = Nome;
		}
	}
}


let instancia: { [nome: string]: Validacao.Demo } = {};

instancia["Acesso com espaco"] = new Validacao.DemoImplement( "Rinoceteio" );
instancia.outro = new Validacao.DemoImplement( "alt" );

instancia["Acesso com espaco"].ExternoAceitavel( "20comer70correr" );
instancia["Acesso com espaco"].InternoAceitavel();

instancia.outro.InternoAceitavel();
instancia.outro.ExternoAceitavel( "666docs" );


//	F U N C T I O N   T Y P E   E X P R E S S I O N S

//Demostração I

function recebeFuncaoDescritaAnonimamente(funcao: (num: number) => number): (num: number) => number
{
	funcao(512);
	return funcao;
}

//Demostração II

type funcaoDescritaTipo = (num: number) => number;

function recebeTypeFuncaDescrita(funcao: funcaoDescritaTipo): funcaoDescritaTipo
{
	funcao(512);
	return funcao;
}

let dobra: funcaoDescritaTipo = ( num: number ) => { return num*2; }

//Chamadas

dobra( 10 );
recebeFuncaoDescritaAnonimamente( ( a: number )=>{ return a; } );
recebeFuncaoDescritaAnonimamente( function( a:number ){ return a; } );
recebeTypeFuncaDescrita( ( a: number )=>{ return a; } );
recebeTypeFuncaDescrita( function( a:number ){ return a; } );
recebeTypeFuncaDescrita( dobra );

//	F U N C T I O N   O V E R L O A D


//	T Y P E   P R E D I C A T E S

//Forma estranha de narrowing

class Peixe
{
	constructor()
	{}
	public nadar(){ console.log('nadando'); }
};

class Passaro
{
	constructor()
	{}

	public voar(){ console.log('voando'); }
};

function ePeixe(animal: Peixe | Passaro): animal is Peixe
{
	return (animal as Peixe).nadar !== undefined;
}

let animal01 = new Passaro();

if( ePeixe( animal01 ) )
{
	animal01.nadar();
}
else
{
	animal01.voar();
}

