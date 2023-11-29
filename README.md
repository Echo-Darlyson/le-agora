# le-agora
Aplicativo de uma biblioteca digital de livros sob domínio público. Projeto extensionista para a disciplina de Programação para Dispositivos Móveis em Android.

# Como rodar o aplicativo?
1. Instalar node.js (**Caso dê problema ao usar o npx, executar o comando `npm install -g npm`**)
2. Instalar git
3. Clonar o repositório do GitHub com o comando `git clone https://github.com/Echo-Darlyson/le-agora.git`
4. Acessar o diretório le-agora
5. Executar o comando `npm install expo-cli --global`
6. Executar o comando `npm install` para instalar todas as dependências
7. Executar o comando `npm install -g eas-cli`
8. Executar o comando `npx expo install expo-dev-client`
9. Executar o comando `eas login` e realizar o login no Expo
10. Executar o comando `eas build --profile development --platform android`
