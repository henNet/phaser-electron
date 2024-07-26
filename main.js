const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");

// Habilita o live reload no Electron e no FrontEnd da aplicação com a lib electron-reload
// Assim que alguma alteração no código é feita
// require("electron-reload")(__dirname, {
//   electron: require(`${__dirname}/node_modules/electron`),
// });

function criarJanela() {
  const config = {
    // width: 800,
    // height: 600,
    // autoHideMenuBar: true /* aperece com a tecla Alt */,
    icon: path.join(__dirname, "assets/imgs/icon.ico"),
    webPreferences: {
      preload: path.join(__dirname, "preloader.js"),
    },
  };

  const janela = new BrowserWindow(config);

  janela.loadFile(path.join(__dirname, "index.html"));
  janela.setIcon(path.join(__dirname, "assets/imgs/logo.png"));
  janela.setMenuBarVisibility(false);
  janela.maximize(); /* Para a app abrir em tela cheia */
  // janela.webContents.openDevTools();
  janela.simpleFullScreen = false;

  ipcMain.on("set-full", (event, value) => {
    const webContents = event.sender;
    const win = BrowserWindow.fromWebContents(webContents);
    win.simpleFullScreen = value;
  });
}

app.whenReady().then(criarJanela);
