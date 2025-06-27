# 💼 Portfólio Pessoal - Tiago Lopes

Portfólio pessoal de desenvolvedor fullstack, apresentando informações sobre mim, meus projetos, tecnologias e formas de contato.

## 🚀 Tecnologias Utilizadas

- **Frontend**: Next.js 15, React 18, TypeScript
- **Estilização**: TailwindCSS, Framer Motion
- **UI Components**: Shadcn/ui
- **Banco de Dados**: Prisma ORM

## 📋 Características do projeto

- ✨ Design responsivo e moderno
- 📱 Interface otimizada para mobile
- 🎨 Animações com Framer Motion
- 📧 Cards com formas de contato
- 🗂️ Seção de projetos com detalhes
- 🛠️ Showcase de tecnologias

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js 18+ 
- Yarn
- Banco de dados local ou na nuvem

### Passos para instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/portfolio-tiagolopes.git
   cd portfolio-tiagolopes
   ```

2. **Instale as dependências**
   ```bash
   yarn install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env
   ```
   Edite o arquivo `.env` com suas configurações de banco de dados.

4. **Execute as migrações do banco**
   ```bash
   npx prisma migrate dev
   ```

5. **Inicie o servidor de desenvolvimento**
   ```bash
   yarn dev
   ```

6. **Acesse a aplicação**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
src/
├── app/                 # App Router do Next.js
│   ├── contact/        # Página de contato
│   ├── projects/       # Página de projetos
│   └── page.tsx        # Página inicial
├── components/         # Componentes React
│   ├── contact/        # Componentes de contato
│   ├── home/          # Componentes da home
│   ├── layout/        # Componentes de layout
│   ├── projects/      # Componentes de projetos
│   ├── technologies/  # Componentes de tecnologias
│   └── ui/           # Componentes de UI reutilizáveis
├── hooks/             # Custom hooks
├── lib/              # Utilitários e configurações
├── types/            # Definições de tipos TypeScript
└── utils/            # Funções utilitárias
```

## 🗄️ Banco de Dados

O projeto utiliza Prisma ORM para gerenciamento do banco de dados. O schema inclui tabelas para:

- Projetos
- Tecnologias

---

Feito com ❤️ por [Tiago Lopes](https://www.tiagolopes.bio)