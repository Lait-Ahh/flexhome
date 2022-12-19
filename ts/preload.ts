import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('modal', {
    on: (channel: string, f: (evt: Event, args: any) => void) => {
        switch(channel) {
            case 'open':
                ipcRenderer.on('open-modal', f);
            break;
        }
    }
});