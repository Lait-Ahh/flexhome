import { app, ipcMain, BrowserWindow } from 'electron';
import * as path from 'path';

function createWindow() {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname + 'preload.js')
        }
    });
    mainWindow.loadFile(path.join(__dirname + '/../index.html'));
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow();
    })
});

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
});