//Proceso para iniciar una ventana de inicio para la aplicación.
const {BrowserWindow} = require('electron');

let ventana;

function createWindow() {
	ventana = new BrowserWindow({
		width: 1200,
		heigth: 1200,
		webPreferences: {
			nodeIntegration: true
		}
	})
	ventana.loadFile('src/empleado/index.html');
	ventana.loadUrl(`file://${__dirname}/index.html`);
	ventana.loadUrl(`file://${__dirname}/crear.html`);
	ventana.loadUrl(`file://${__dirname}/editar.html`);
}

module.exports = {
	createWindow
}