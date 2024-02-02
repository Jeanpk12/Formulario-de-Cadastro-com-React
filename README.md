# Projeto de Cadastro com React
![image](https://github.com/Jeanpk12/Formulario-de-Cadastro-com-React/assets/122842874/56025957-cbdf-4cf4-a7d8-ed057b9106b0)

## Descrição do Projeto

Este projeto em React consiste em um formulário de cadastro simples que coleta informações como nome, telefone e e-mail. O objetivo é permitir que os usuários se cadastrem para receber informações ou acessar algum serviço.

## Funcionalidades

### Validação de Entradas

O código inclui validações para garantir que as informações inseridas pelos usuários sejam corretas.

- **Nome:** Verifica se foi inserido um nome e se não contém números.
- **Telefone:** Garante que um número de telefone seja inserido corretamente.
- **E-mail:** Verifica se um e-mail válido foi fornecido.

### Feedback ao Usuário

Utiliza a biblioteca react-toastify para exibir mensagens de erro ou sucesso ao usuário.

### Bloqueio do Botão de Cadastro

O botão de cadastro é desabilitado após um envio bem-sucedido, impedindo envios duplicados.

## Estrutura do Projeto

- **Styles.css:** Arquivo de estilo para o componente.
- **Images:** Pasta contendo a ilustração utilizada no projeto.
- **App.js:** Componente principal que contém o formulário e a lógica associada.

## Como Usar

1. Clone o repositório.
2. Instale as dependências usando `npm install`.
3. Execute o projeto usando `npm start`.
4. Preencha o formulário e clique em "Cadastrar-se" para testar as funcionalidades.
