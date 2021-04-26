const {app, BrowserWindow} = require('electron');
const path = require('path');
const {electronEvent} = require('./eventsRoot')

// instanciate and initialize application window
// allows us to manage our application's lifecycle
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  });

  win.loadFile('index.html');
}

// Post initialization
// -------------------------------------------------------------------------
function newWin() {
  const newWin = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  });

  newWin.loadFile('newWin.html');
}
// -------------------------------------------------------------------------

// start application on load
app.whenReady()
.then(() => {
  createWindow();

  app.on('activate', () => {
    console.log("Platform: ", process.platform)
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }

    electronEvent.on('newWin', () => {
      console.log('electronEvent exectuted successfully!')
      newWin();
    })
  })
})
.catch(err => console.log(`Unable to start Electron app: ${err}`));

app.on('window-all-closed', () => {
  // check for environment that application is runing in
  if (process.platform !== 'linux') {
    app.quit();
  }
})
