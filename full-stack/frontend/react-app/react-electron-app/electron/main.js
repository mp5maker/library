const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')
const { channels } = require('../src/Shared/constants');

function createWindow() {
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '../index.html'),
        protocol: 'file:',
        slashes: true,
    });

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js'),
        }
    })

    win.loadURL(startUrl);
    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})


ipcMain.on(channels.APP_INFO, (event) => {
    event.sender.send(channels.APP_INFO, {
        appName: app.getName(),
        appVersion: app.getVersion(),
    });
});