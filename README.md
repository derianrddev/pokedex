<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Pokedex

## Overview

It is a REST API based on the PokeAPI.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Nest CLI 

  ```bash 
  npm i -g @nestjs/cli 
  ```

- [Docker Desktop](https://www.docker.com/get-started/)
- [Mongo Compass](https://www.mongodb.com/try/download/compass)

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/derianrddev/pokedex.git
   cd pokedex
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Application**

    Use Docker Compose to build and start the application in detached mode:

   ```bash
   docker compose up -d
   ```

    Alternatively, you can start the application in development mode using npm:

   ```bash
   npm run start:dev
   ```

## Technologies

- Nest.js
- MongoDB
- Mongoose