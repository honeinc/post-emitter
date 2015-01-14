var PostEmitter = require( '..' ),
    parentDoc = new PostEmitter( {
        prefix: 'Example:'
    } );

parentDoc.on( 'show', function( msg ){
    var p = document.createElement( 'p' );
    p.textContent = msg; 
    document.body.appendChild( p );
} );

parentDoc.emit( 'ready' );