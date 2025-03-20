# 📋 Barbearia App (Front-end)

Este é o projeto front-end do sistema de agendamento para um salão de beleza com apenas um profissional. Desenvolvido em **Angular**, este sistema se conecta à [API REST do Barbearia App](https://github.com/Daviigs/dio-barbearia-api) para gerenciar clientes e agendamentos.

## 🛠️ Tecnologias Utilizadas

- **Angular**: Framework para construção do front-end.
- **TypeScript**: Linguagem utilizada para o desenvolvimento.
- **Angular Material**: Componentes para a interface do usuário.
- **RxJS**: Programação reativa.

## 🚀 Funcionalidades

- Listagem de clientes
- Cadastro, edição e exclusão de clientes
- Visualização de agendamentos por mês
- Integração com a API REST

## 📦 Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- Node.js (>= 18.x.x)
- Angular CLI (>= 17.x.x)

### Passos para execução

1. Clone este repositório:

   ```bash
   https://github.com/Daviigs/dio-barberia-ui.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd barbearia-frontend
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure a URL da API em `src/environments/environment.ts`:

   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:8080/'
   };
   ```

5. Inicie a aplicação:

   ```bash
   ng serve
   ```

Acesse o sistema no seu navegador em: http://localhost:4200

## 🔗 Integração com a API

Este projeto se conecta diretamente à [API do Barbearia App](https://github.com/Daviigs/dio-barbearia-api), responsável por gerenciar o banco de dados e as regras de negócio.

Certifique-se de que a API esteja em execução antes de iniciar o front-end.

## 🤝 Contribuindo

1. Fork este repositório.
2. Crie uma branch com sua feature: `git checkout -b minha-feature`
3. Faça commit das suas alterações: `git commit -m 'Minha nova feature'`
4. Envie para a branch principal: `git push origin minha-feature`

## 📧 Contato

Em caso de dúvidas ou sugestões, sinta-se à vontade para abrir uma issue ou entrar em contato pelo GitHub.

---

🔗 **Confira também a [API do Barbearia App](https://github.com/Daviigs/dio-barbearia-api)** para integração completa do sistema.

