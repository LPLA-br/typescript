// @filename: module.ts

//JSdoc

/**
 * @type = {number} constante PI
 */
export const pi: number = 3.14;

/**
 * @param {number} numero - numero a ser incrementado
 * @param { number } vezes - numero de vezes a incrementar
*  @returns { number } numero incrementado N vezes
* */
export function incVezes(numero: number, vezes: number): number
{
	for(let i: number = 0; i<=vezes; i++)
	{
		numero += i;
	}
	return numero;
}

