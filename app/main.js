const { app, BrowserWindow, Menu } = require('electron');

let mainWindow = null;

app.on('ready', () =>{
    console.log('Hello from Electron' + __dirname);
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
    Menu.setApplicationMenu(null);
    mainWindow.webContents.loadFile('index.html');
})
