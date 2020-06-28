const { app, BrowserWindow } = require('electron');

let mainWindow = null;

app.on('ready', () =>{
    console.log('Hello from Electron' + __dirname);
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.webContents.loadFile('index.html');
})
