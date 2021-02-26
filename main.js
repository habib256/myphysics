// Electron Application

const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width:900,
    height: 750,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('public/index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

