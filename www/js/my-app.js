  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/anotar/',
        url: 'anotar.html',
      },
      {
        path: '/index/',
        url: 'index.html',
      },
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

var player1="";
var player2="";
var id="";
var valorPuntaje="";
var total=0;

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log('cargada');
})
$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log('index cargada');

    $$('#inGame').on('click', function(){

        player1=$$('#j1').val();
        player2=$$('#j2').val();
        
        console.log(player1, player2);

        mainView.router.navigate('/anotar/');
    })
})
// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="anotar"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log('anotar cargada');
    $$('#LJugador1').text(player1);
    $$('#LJugador2').text(player2);

    $$('.Dclick').on('click', function(){
    	id = this.id;
    	console.log(id);
    	valorPuntaje = id.replace('j1d', '');
    	console.log(valorPuntaje);
    })


    var ac2 = app.actions.create({
        buttons: [
          {
            text: 'Dado ',
            label: true
          },
          {
            text: 'Uno',
            onClick: function () {
              valorDado(1);
              Total();
            }
          },
          {
            text: 'Dos',
            onClick: function () {
              valorDado(2);
              Total();
            }
          },
          {
            text: 'Tres',
            onClick: function () {
              valorDado(3);
              Total();
            }
          },
          {
            text: 'Cuatro',
            onClick: function () {
              valorDado(4);
              Total();
            }
          },
          {
            text: 'Cinco',
            onClick: function () {
              valorDado(5);
              Total();
            }
          },
          {
            text: 'Tachar',
            onClick: function () {
              valorDado(0);
              Total();
            }
          },
        ]
      });

    $$('.ac-2').on('click', () => {
        ac2.open();
	});



})

	function valorDado(v) {
		console.log(v);
		console.log(valorPuntaje);
		multi = valorPuntaje * v;
		$$('#'+id).text(multi);
	}

	function Total() {
		for (var i=1; i<=4; i++) {
			total+=parseInt($$('#j1d'+i).text());
			console.log(total);
			$$('#totalj1').text(total);
		}
		total=0;
	}