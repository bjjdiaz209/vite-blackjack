import _ from 'underscore';

/**
 * esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales ['A','J','Q','K'];
 * @returns {Array<String>}retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
     

    if(!tiposDeCarta || tiposDeCarta.length === 0 ) 
        throw new Error('tipos de carta obligatorio como un arreglo string');
    
    if(!tiposEspeciales || tiposEspeciales.length === 0 ) 
        throw new Error('tipos especiales obligatorio como un arreglo string');

    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    
    return deck;
}

//export default crearDeck;