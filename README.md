# 🛡️ API de Alunos com Autenticação JWT

RESTful API desenvolvida em **Node.js** estruturada no padrão MVC para gestão e cadastro de alunos, implementando controle de acesso e proteção de endpoints por meio de tokens **JWT (JSON Web Token)**.

---

## Funcionalidades

- **CRUD de Alunos:** Criação, listagem, atualização e remoção de registros de alunos.
- **Autenticação:** Geração e assinatura de tokens JWT para sessões de usuários.
- **Segurança & Middlewares:** Interceptação e validação de tokens nas rotas privadas.
- **Arquitetura Modular:** Separação explícita entre controladores, modelos, rotas e interceptadores.

---

## Tecnologias Utilizadas

- **Ambiente de Execução:** Node.js
- **Framework Web:** Express
- **Autenticação:** JSON Web Token (`jsonwebtoken`)[cite: 5]
- **Linguagem:** JavaScript (ES6+)[cite: 5]
- **Gerenciador de Pacotes:** npm[cite: 5]

---

## Estrutura do Projeto

```text
APIAlunosJWT/src/[cite: 5]
├── controllers/    # Métodos com a lógica de negócio e respostas HTTP[cite: 5]
├── middlewares/    # Interceptadores para autenticação e validação de JWT[cite: 5]
├── models/         # Definição das entidades e schemas de dados[cite: 5]
├── routes/         # Definição e mapeamento dos endpoints da API[cite: 5]
└── app.js          # Configuração inicial do Express e middlewares globais[cite: 5]
