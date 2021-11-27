// importar los dos modulos de npm necesarios para trabajar
const express = require('express');
const cors = require('cors');

// se crea el servidor
const server = express();

// se configura el servidor
server.use(cors());
server.use(express.json());

// se arranca el servidor en el puerto 3000
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.get('/users', (req, res) => {
  const response = {
    users: [{ name: 'Sofía' }, { name: 'María' }],
  };
  res.json(response);
});
