//Declaración de dependencias de Electron.
const {createWindow} = require('./main');
const {app, BrowserWindow, ipcMain, ipcRenderer} = require('electron');
require('./database');

//Instrucción que recarga la aplicación de Electron al detectar algun cambio.
require('electron-reload')(__dirname);

app.allowRendererProcessReuse = false;
app.whenReady().then(createWindow);