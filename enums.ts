// Enumeração
enum teste {
	a = 1,
	b,
	c,
	d
}

let numero: number = 10;


if( numero == teste.a )
	console.log( 'igual' );
else
	//este.
	console.log( 'diferente' );

let vai: teste = teste.a;

for( let a: number = 0; a <= 10; a++ )
{
	console.log( vai );
	if( a <= 3 ) vai = teste.b;
	else if ( a >= 3 && a <= 6 ) vai = teste.c;
	else vai = teste.d;
}
