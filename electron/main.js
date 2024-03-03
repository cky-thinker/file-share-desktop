const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: false,
            webSecurity: false,
            nodeIntegration: true,
            enableRemoteModule: true,
            webviewTag: true,
            preload: path.join(__dirname, './preload/index.js')
        }
    })

    win.loadFile('app/index.html').then(() => {
        console.log("load success!")
    })
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    app.quit()
})