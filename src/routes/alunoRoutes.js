import express from "express";
import AlunoController from "../controllers/alunoController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/alunos/medias", authMiddleware, AlunoController.listarMedias);
router.get(
  "/alunos/aprovados",
  authMiddleware,
  AlunoController.listarAprovados
);

router.get("/alunos", authMiddleware, AlunoController.listarAlunos);
router.get("/alunos/:id", authMiddleware, AlunoController.listarAlunoPorId);
router.post("/alunos", authMiddleware, AlunoController.cadastrarAluno);
router.put("/alunos/:id", authMiddleware, AlunoController.atualizarAluno);
router.delete("/alunos/:id", authMiddleware, AlunoController.excluirAluno);

export default router;
