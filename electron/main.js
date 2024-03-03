const { app, BrowserWindow, Menu } = require('electron')
const path = require('node:path')


const createWindow = () => {
    Menu.setApplicationMenu(null)
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        title: "file-share 文件共享",
        icon: path.join(__dirname,"public/logo.png"),
        webPreferences: {
            contextIsolation: false,
            webSecurity: false,
            nodeIntegration: true,
            preload: path.join(__dirname, './preload/index.js')
        }
    })

    win.loadFile('page_app/index.html').then(() => {
        console.log("load success!")
        // win.webContents.openDevTools()
    })
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    app.quit()
})