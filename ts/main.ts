import { app, ipcMain, BrowserWindow, Menu } from 'electron';
import * as path from 'path';

function createWindow() {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname + '/preload.js')
        }
    });

    const menu = Menu.buildFromTemplate([
        {
            label: 'Fichier',
            submenu: [
                {
                    label: 'Nouveau projet',
                    sublabel: 'Ctrl+Alt+Windows+N'
                },
                {
                    label: 'Ouvrir un projet',
                    sublabel: 'Ctrl+O'
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Enregistrer',
                    sublabel: 'Ctrl+S'
                },
                {
                    label: 'Enregistrer sous...',
                    sublabel: 'Ctrl+Maj+S'
                },
                {
                    label: 'Enregistrement automatique',
                    type: 'checkbox'
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Fermer la fenêtre',
                    sublabel: 'Alt+F4'
                }
            ]
        },
        {
            label: 'Edition',
            submenu: [
                {
                    label: 'Annuler',
                    sublabel: 'Ctrl+Z'
                },
                {
                    label: 'Rétablir',
                    sublabel: 'Ctrl+Y'
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Couper',
                    sublabel: 'Ctrl+X'
                },
                {
                    label: 'Copier',
                    sublabel: 'Ctrl+C'
                },
                {
                    label: 'Coller',
                    sublabel: 'Ctrl+V'
                }
            ]
        },
        {
            label: 'Préférences',
            submenu: [
                {
                    label: 'Paramètres MIDI'
                },
                {
                    label: 'Paramètres audios'
                },
                {
                    label: 'Paramètres généraux'
                },
                {
                    label: 'Paramètres du projet'
                }
            ]
        }
    ]);

    mainWindow.setMenu(menu);
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