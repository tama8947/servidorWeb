module.exports = (app) => {
	
	app.get('/', function (req, res) {
	res.send('Hello World!');
	});

	app.get('/transacciones', function (req, res) {
	res.send('Usaste una transaccion!');
	});

}