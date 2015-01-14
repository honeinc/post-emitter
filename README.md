
# Post Emitter

Talk between a iframe and parent window using events! This is just a wrapper around post message.


## Usage

```javascript

// top level document

var PostEmitter = require( 'post-emitter' ),
    emitter = new PostEmitter( {
        selector: 'iframe.embedded-content'
    } );

emitter.on( 'pong', function( msg ) {
    console.log( msg ); // foo
} );

emitter.emit( 'ping' );

```

```javascript

// in iframe

var PostEmitter = require( 'post-emitter' ),
    emitter = new PostEmitter();

emitter.on( 'ping', function( msg ) {
    emitter.emit( 'pong', 'foo' );
} );


```