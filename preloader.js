const { contextBridge, ipcRenderer } = require("electron");

/* Realiza uma comunicação interprocesso: 
camada de renderização (html) envia uma mensagem a camada 
de interface (main.js) */
contextBridge.exposeInMainWorld("electronAPI", {
  setFullScreen: (value) => ipcRenderer.send("set-full", value),
});
