# Projeto de jogo usando Phaser e Electron

## Design do Projeto

## Mecânicas e funcionalidades do Jogo

- [x] Personagem anda para os lados e pula
- [x] Coleta de **stars** e aumenta pontos
- [x] Bombas (inimigos) caem matam o personagem se encostar
- [x] Gameover se uma bomba encostar no personagem
- [x] Jogabilidade Teclado:
  - [x] Setas direira e esqueda movem o personagem
  - [x] Seta cima faz o personagem pular
  - [x] Tecla espaço faz o personagem pular
- [x] Jogabilidade Gamepad:
  - [x] Axes Sticks movem o personagem para direita e esquerda
  - [x] Botão X faz o personagem pular

## Arquivos do Projeto

- **index.html**: Arquivo com a estrutura html básica do jogo
- **preloader.js**: Arquivos para criar funções de comunicação entre o html e a interface gráfica
- **game.js**: Arquivo que cria e gerencia o jogo (códigos do phaser)
- **main.js**: Arquivo que cria a interface gráfica (códigos do electron)
- **forge.config.js**: Arquivo de configuração usado pelo electron-forge para criar o executável (build)
- **/assets**: Arquivos de imagem usados no jogo

## Ferramentas utilizadas

As seguintes ferramentas foram utilizadas:

### Node

Ambiente de execução de JavaScript disponível para várias plataformas, de código aberto e gratuita, que permite os programadores criar servidores, aplicações da Web, ferramentas de linha de comando e programas de automação de tarefas.

**Download e Instalação**: https://nodejs.org/pt

### Phaser

O phaser é um framework HTML5 para desenvolvimento de jogos em plataforma desktop e mobile. Ele foi importado ao projeto via link CDN.

**Instalação**:

```
<script src="https://cdn.jsdelivr.net/npm/phaser@3.60.0/dist/phaser-arcade-physics.min.js"></script>
```

### Electron

Framework que te permite criar aplicações desktop multiplataforma (windows, linux e mac) com JavaScript, HTML e CSS.

**Instalação**:

```
npm install --save-dev electron
```

### Electron Reload

Pacote adicional do electron que permite fazer alterações no código e já atualizar a interface da aplicação sem precisar executar novamente.

**Instalação**:

```
npm install --save-dev electron-reload
```

> [!NOTE]
> Tanto a instalação do **electron** e **electron-reload** foram instaladas com a flag **--save-dev** para que sejam incluídos como dependência de desenvolvimento apenas, pois na geração do executável (build), elas não seram necessárias.

## Executar o projeto

Primeiramente, certificique-se de instalar as dependências:

```
npm install
```

Para executar, digite a segunte linha no diretório raiz do projeto

```
npm run dev
```

## Gerar o executável (Build)

Para gerar um executável, bastar seguir os seguintes passos abaixo. Eles seguem a documentação do electron: https://www.electronjs.org/pt/docs/latest/tutorial/tutorial-packaging

### Passo 1: Instalar as dependências para geração do build

```
npm install --save-dev @electron-forge/cli
npx electron-forge import
```

> [!NOTE]
> A primeira linha instala o pacote do electron-forge responsável pela geração do executável

> [!NOTE]
> A segunda linha atualiza o arquivo package.json importando alguns scripts necessários para a geração do executável

### Passo 2: Gerando o executável

```
npm run make
```

> [!NOTE]
> Após a execução desse script, uma pasta chamada **out** será criada contendo o executável da aplicação, assim como os arquivos necessários para a sua execução.

> [!NOTE]
> Alguns detalhes são **importantes** na hora de gerar o build:

> [!IMPORTANT]
> Não usar **caracteres especiais** como acentos, cedilha, ..., no caminho/diretórios da aplicação.

> [!IMPORTANT]
> Retirar as linhas de código do **electron-reload**, caso esteja usando.

> [!IMPORTANT]
> No arquivo package.json, atribuir valores para os seguintes atributos: **name**, **productName**, **description** e **author**.

> [!IMPORTANT]
> Necessária a instalação do **git** para desktop.
