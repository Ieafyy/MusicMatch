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
npm create vite@latest
```
