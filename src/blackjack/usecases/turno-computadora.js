import { crearCartasHTML, pedirCarta, valorCarta } from "./";

/**turno computadora
 *@param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar  
 *@param {HTMLElement} puntosHTML element html que debe mostrar los puntos
 *@param {HTMLElement} divCartasComputadora elem para mostrar cartas conputadora
 *  @param {Array<String>} deck
*/



export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora, deck = [] ) => {
     
    if(!puntosMinimos) throw new Error('puntos minimos son neceserios');
    if(!puntosHTML) throw new Error('argumento puntosHTML es neceserios');


    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        
        const imgCarta = crearCartasHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}