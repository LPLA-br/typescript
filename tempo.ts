

/*Representando o tempo*/

enum MesesNum
{
	Janeiro = 1,	
	Fevereiro,
	Marco,
	Abril,
	Maio,
	Junho,
	Julho,
	Agosto,
	Setembro,
	Outubro,
	Novembro,
	Dezembro
};

interface Meses
{
	Janeiro: number;
	Fevereiro: number;
	Marco: number;
	Abril: number;
	Maio: number;
	Junho: number;
	Julho: number;
	Agosto: number;
	Setembro: number;
	Outubro: number;
	Novembro: number;
	Dezembro: number;
};


class Data
{

	protected dia: number;
	protected mes: number;
	protected ano: number;

	protected bissexto: boolean;
	protected limite: number;

	constructor( Dia: number, Mes: number, Ano: number )
	{
		this.dia = Dia;
		this.mes = Mes;
		this.ano = Ano;
		
		this.bissexto = false;

		if( ( Ano % 4 ) == 0 )
		{
			this.bissexto = true;
		}
		this.limite = 0;
		this.atualizarLimite();
	}

	protected atualizarLimite(  ):void
	{
		switch( this.mes )
		{
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				this.limite = 31;
				break;
			case 4:
			case 6:
			case 9:
			case 11:
				this.limite = 30;
				break;
			case 2:
				if( this.bissexto == true )
					this.limite = 29;
				else
					this.limite = 28;
		}

	}

	protected avancarAno(  ): void
	{
		this.ano++;
		this.bissexto = ( this.ano % 4 ) == 0 ? true : false ;
		this.mes = 1;
		this.atualizarLimite();
	}

	protected avancarMes(  ): void
	{
		if( this.mes == 12 )
		{
			this.avancarAno();
		}
		else
		{
			this.mes++;
			this.atualizarLimite();
		}
	}

	public avancarDia(  ): void
	{
		if( this.dia == this.limite )
		{
			this.dia = 1;
			this.avancarMes();
		}
		else this.dia++;
	}

	// mode: true - adiciona new line. false - não adiciona new line.
	public mostrarDataCorrente( novalinha?: boolean ): string
	{
		let data: string = "";
		if( typeof novalinha != undefined )
		{
			data = ( novalinha == true ) ? `${this.dia}/${this.mes}/${this.ano}\n` : `${this.dia}/${this.mes}/${this.ano}`;
		}
		console.log( data );
		return data;
	}

};

let evento = new Data(10, 1, 2022);

while( evento.mostrarDataCorrente() != "1/1/2023")
{
	evento.avancarDia();
	evento.mostrarDataCorrente();
}

