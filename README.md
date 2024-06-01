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

1. Clone the Repository

   ```bash
   git clone https://github.com/derianrddev/pokedex.git
   cd pokedex
   ```

2. Install Dependencies

   ```bash
   npm install
   ```

3. Raise the database
   ```
   docker-compose up -d
   ```

4. Clone the file ```.env.template``` and rename the copy to ```.env```.

5. Fill in the environment variables defined in the ```.env```.

6. Run the application in dev:
   ```
   npm run start:dev
   ```

7. Rebuild the database with seed
   ```
   http://localhost:3000/api/v2/seed
   ```

## Technologies

- Nest.js
- MongoDB
- Mongoose