import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const users = [];

class AuthController {
  static async register(req, res) {
    try {
      const { username, password } = req.body;

      console.log("Register attempt:", username);

      if (!username || !password) {
        return res.status(400).json({
          message: "Username e password são obrigatórios.",
        });
      }

      const userExists = users.find((u) => u.username === username);
      if (userExists) {
        return res.status(400).json({
          message: "Usuário já existe.",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      users.push({ username, password: hashedPassword });

      console.log("Users after register:", users);

      return res.status(201).json({
        message: "Usuário criado.",
      });
    } catch (error) {
      console.error("Register error:", error);
      return res.status(500).json({
        message: "Erro interno do servidor",
      });
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;

      console.log("Login attempt:", username);
      console.log("Available users:", users);

      if (!username || !password) {
        return res.status(400).json({
          message: "Username e password são obrigatórios.",
        });
      }

      const user = users.find((u) => u.username === username);

      if (!user) {
        console.log("User not found:", username);
        return res.status(401).json({
          message: "Login Incorreto.",
        });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        console.log("Password mismatch for user:", username);
        return res.status(401).json({
          message: "Login Incorreto.",
        });
      }

      const token = jwt.sign(
        { username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: "1h", algorithm: "HS256" }
      );

      console.log("Login successful for:", username);

      return res.json({
        message: `Login efetuado pelo usuário ${user.username}`,
        jwt: token,
      });
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({
        message: "Erro interno do servidor",
      });
    }
  }
}

export default AuthController;
