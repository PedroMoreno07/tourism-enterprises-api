# 🌍 Plataforma de Turismo – Tourism Enterprises

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)

![TOURISM ENTERPRISES](./assets/tourism-enterprises.png)

## 🧠 Sobre:

Este repositório contém o desenvolvimento de uma API REST voltada à gestão de empreendimentos turísticos. A plataforma permite o cadastro, consulta, atualização e exclusão (CRUD) de dados relacionados a empresas e serviços turísticos, como hotéis, atrativos turísticos e outros.

## 📋 Funcionalidades principais:

**● Cadastro e gerenciamento de empreendimentos turísticos**

**● Estrutura REST com boas práticas de desenvolvimento**

**● Integração com banco de dados relacional**

**● Suporte a autenticação e controle de acesso**

## 👨‍💻 Tecnologias utilizadas:

**Node.js / Express**

**SQlite / Prisma (ORM)**

**Bcrypt / Zod**

**JWT para autenticação**

## 🖥️ Instalação:

**Iniciar o Projeto:**

```bash
npm init -y
```

**Instalar Express:**

```bash
npm install express
```

**Instalar o SQlite3:**

```bash
npm install sqlite3
```

**Instalar o Prisma Client:**

```bash
npm install @prisma/client
```

**Instalar o Bycript:**

```bash
npm install bcrypt
```

**Instalar o Zod:**

```bash
npm install zod
```

**Instalar o JWT:**

```bash
npm install jsonwebtoken
```

## 📍API Endpoints:

A API fornece os seguintes endpoints:

**POST REGISTER USER**

```markdown
POST /auth/register - Rota de Registro de Turista
```

```json
{
  "name": "Pedro",
  "email": "pedro@gmail.com",
  "phone": "88990023665",
  "password": "P123456@"
}
```

**POST REGISTER ADMIN**

```markdown
POST /auth/register-admin - Rota de Registro de Admin
```

```json
{
  "name": "Pedro",
  "email": "pedro@gmail.com",
  "password": "P123456@"
}
```

**POST LOGIN**

```markdown
POST /auth/login - Rota de Login (para admin e turista)
```

```json
{
  "email": "pedro@gmail.com",
  "password": "P123456@"
}
```

**POST CREATE PLACE**

```markdown
POST /places/ - Criar locais
```

```json
{
  "name": "Grills burguer",
  "description": "hamburgueria, a melhor da cidade",
  "address": {
    "logradouro": "Rua Francisco Tomé",
    "numero": 501,
    "bairro": "Centro",
    "complemento": "Vizinho ao milk jhon"
  },
  "type": "hamburgueria",
  "rating": 4.5
}
```

**GET ALL PLACE**

```markdown
GET /places/ - Listar Locais
```

```json
{
  "name": "Grills burguer",
  "description": "hamburgueria, a melhor da cidade",
  "address": {
    "logradouro": "Rua Francisco Tomé",
    "numero": 501,
    "bairro": "Centro",
    "complemento": "Vizinho ao milk jhon"
  },
  "type": "hamburgueria",
  "rating": 4.5
}
```

**GET PLACE BY TYPE**

```markdown
GET /places/:type - Filtrar Locais Por Tipo
```

```json
{
  "name": "Grills burguer",
  "description": "hamburgueria, a melhor da cidade",
  "address": {
    "logradouro": "Rua Francisco Tomé",
    "numero": 501,
    "bairro": "Centro",
    "complemento": "Vizinho ao milk jhon"
  },
  "type": "hamburgueria",
  "rating": 4.5
}
```

**UPDATE PLACE**

```markdown
PUT /places/:id - Atualizar Local Por Id
```

```json
{
  "name": "Grills Burguer",
  "description": "hamburgueria, a melhor da cidade",
  "address": {
    "logradouro": "Rua Francisco Tomé",
    "numero": 501,
    "bairro": "Centro",
    "complemento": "Vizinho ao milk jhon"
  },
  "type": "hamburgueria",
  "rating": 4.7
}
```

**DELETE PLACE**

```markdown
DELETE /places/:id - Deletar Local Por Id
```

```json
{
  "message": "grills burguer deletado!"
}
```
