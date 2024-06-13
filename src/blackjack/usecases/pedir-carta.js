/**
 * @param {Array<String>}deck es un arreglo string
 * @returns {String} retorna el deck
 */

export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}