const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const secretKey = 'tu_clave_secreta'; // Debes usar una clave secreta segura en lugar de esto

// Ruta de inicio de sesión
app.post('/login', (req, res) => {
  // Verificar las credenciales del usuario (por ejemplo, en tu base de datos)

  if (credenciales_validas) {
    const payload = {
      user_id: user.id, // Puedes incluir información adicional en el payload
      user_email: user.email,
    };

    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    res.json({ token });
  } else {
    res.status(401).json({ error: 'Credenciales inválidas' });
  }
});

app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});
