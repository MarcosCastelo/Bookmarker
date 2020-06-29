const { app, BrowserWindow, Menu } = require('electron');

let mainWindow = null;

app.on('ready', () =>{
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
    });
    Menu.setApplicationMenu(null);
    mainWindow.webContents.loadFile('app/index.html');
})
