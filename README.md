# Company Information Management Form

[![Netlify Status](https://api.netlify.com/api/v1/badges/1eb458a1-0f56-4d2a-807d-44172760f1fe/deploy-status)](https://app.netlify.com/sites/prospace-amadzuki/deploys)

> A frontend coding challange from ProSpace

It's a simple company and office listing app. It records company's information and its offices. Built on React and used Redux for the state management (as stated in the requirements). For the CSS framework I used Tailwind CSS. And for the form component I utilized React Hook Form. I also set a simple Node.js + Express backend that deployed on a free hosting service.

You can see the deployed demo on this link: [https://prospace-amadzuki.netlify.app/](https://prospace-amadzuki.netlify.app/)

## Non-trivial Assumption

It might be too excessive for me to include a backend in this challange. But it's written in the challange description that creating _NodeJS Server Application is for better data persistence_. As a result, the Redux is mostly using **RTK Query** middleware to handle data change. I just recently trying out this particular tool (RTK Query) and I think that this is clearly a better solution for Redux to communicate with server.

## Tech Stacks

These are the stacks I used in this project:

- **Git** — Distributed version control system
  - **GitHub** — Provides hosting for software development and version control using Git
- **React** — JavaScript library for building user interfaces
- **Redux** — Predictable state container for JS apps
- **React Redux** — Official React binding for Redux
- **Redux Toolkit** — The official, opinionated, batteries-included toolset for efficient Redux development
- **RTK Query** — A powerful data fetching and caching tool
- **React Router DOM** — Declarative routing for React
- **React Hook Form** — Simple React forms binding and validation
- **React Toastify** — Super easy toast component
- **Tailwind CSS** — Rapidly build modern websites without ever leaving your HTML

## Getting Started

### Installation

Install dependencies with `yarn`:

```sh
yarn
```

### Setup Environment Variables

We need to connect to the deployed backend. Edit the `.env` file as follows:

```sh
REACT_APP_API_URL=https://prospace-backend-production.up.railway.app/
```

### Run Development

```sh
yarn start
```

Access the running app on: http://localhost:3000

## Author

[Ahmad Marzuki](https://github.com/amadzuki)
