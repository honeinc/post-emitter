var PostEmitter = require( '..' ),
    iframe = new PostEmitter( {
        selector: 'iframe',
        prefix: 'Example:'
    } ),
    form = document.getElementById( 'form' );

iframe.on( 'ready', function(){
  iframe.emit( 'show', 'type something then hit enter' );  
} );

form.addEventListener( 'submit', function( e ){
    var msg = form.children[ 0 ].value;
    iframe.emit( 'show', msg );
    e.preventDefault();
});