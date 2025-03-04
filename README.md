##  **📖 Projeto Fullstack: FastAPI + React + Docker**

Este é um projeto fullstack que exibe uma lista de guitarras. O backend é desenvolvido com FastAPI e o frontend com React. Ambos são dockerizados para facilitar a implantação e a execução.

---

## **Tecnologias usadas**
- Back-end: FastAPI (Python)

- Front-end: React (JavaScript)

- Banco de dados: Arquivo JSON

- Docker: contêineres para o backend e o frontend

- Axios: para consumo da API de front-end



## **Instalação e execução do Docker**
1. Executar o backend
Construir la imagen del backend:
- cd backend
- docker build . -t backend

Execute o contêiner de backend:
- docker run --name backend --rm -p 8000:8000 backend

Verifique se o backend está em execução:
- http://localhost:8000/guitars

2. Executar o front-end
Construir la imagen del frontend:
- cd frontend
- docker build . -t frontend

## **Conexão do front-end e do back-end via docker network**
Na terminal do backend:
- docker run --name backend --rm --network FOOBAR -p 8000:8000 backend

Na termianl do frontend:
- docker run --rm --name frontend--network FOOBAR -p 3000:3000 frontend


