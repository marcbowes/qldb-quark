import { app, BrowserWindow } from "electron";
import * as electronIsDev from "electron-is-dev";
import * as path from "path"

require("electron-reload")(__dirname, {
    electron: path.join(__dirname, '..', '..', 'node_modules', '.bin', 'electron')
});

function createWindow () {
    const win = new BrowserWindow({
        width: 1680,
        height: 1050,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
    })

    win.loadFile("../assets/index.html").then(() => {
        if (electronIsDev.valueOf()) {
            win.webContents.toggleDevTools();
        }
    });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});