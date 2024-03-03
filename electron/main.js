const { app, BrowserWindow, Menu } = require('electron')
const path = require('node:path')

const createWindow = () => {
    Menu.setApplicationMenu(null)
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

    win.loadFile('page_app/index.html').then(() => {
        console.log("load success!")
        win.webContents.openDevTools()
    })
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    app.quit()
})