# MusicMatch

Repositório referente a terceira entrega do projeto

Siga esses passos para adicionar features e realizar o deploy do projeto

---

### 1) Configuração do git

Primeiramente tenha certeza de que tem o git instalado em seu computador https://git-scm.com/

Depois de instalado, pode checar se a instalação ocorreu com sucesso. Basta abrir o CMD e digitar:

```bash
git -v
```

Com o Git instalado, digite os seguintes comandos para realizar a configuração inicial do seu perfil:

```bash
git config --global user.name "SEU NOME"
git config --global user.email EMAIL@A.COM
```

---

### 1.1) Instalar node

Node é o gerenciador de pacotes do JavaScript e precisamos dele para executar qualquer projeto nessa linguagem. Entre na página oficial (https://nodejs.org/en) e instale a versão mais nova. Para checar se a instalação foi bem sucedida digite no terminal: (a versão que estou usando no momento é 20.11.1)

```bash
node -v
```

---

### 2) Clonando repositório

Após instalação e configuração basta clonar o repositório em seu computador. Para isso crie uma pasta para o projeto, abra no VSCode e no terminal digite

```bash
git clone https://github.com/Ieafyy/MusicMatch.git
```

(Se nunca tiver clonado nenhum repositório antes provavelmente irá precisar de realizar o login na sua conta do GitHub)

(Não é obrigatório, mas recomendo instalar algum plugin pra gerir o fluxo do git, o https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph é o que eu uso)

---

### 3) Iniciando o projeto localmente

Com o repositório clonado digite os seguintes comandos:

```bash
cd MusicMatch
npm run dev
```

Se tudo estiver correto você já estará apto a executar o projeto localmente e desenvolver suas próprias telas!

(Para finalizar a execução basta digitar CTRL+C)

### 3) Boas práticas de desenvolvimento

---

1. Manter um padrão na formatação é importante, nesse projeto estou usando o Prettier (https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). Ele formata automaticamente o código para padronizar o desenvolvimento

---

2. Toda nova página que for fazer crie em uma nova branch. No canto inferior esquerdo do VS Code tem a sua branch atual e provavelmente vai estar na main. Clique nela e selecione para criar uma nova (pode chamar como quiser mas geralmente seguimos o padrão:

- feature/{nome da feature} para novas paginas e funções.

- fix/{erro corrigido}) para correção de erros

Desenvolver dessa forma impede conflitos entre versões do projeto. Para salvar suas alterações realize o commit clicando no ícone de grafo no painel esquerdo e selecione commit. Para subir suas alterações pra main vá no site do github e vá na opção de Pull Request.

---

O link com o projeto na web é
https://ieafyy.github.io/MusicMatch/
