import alunos from "../models/aluno.js";

class AlunoController {
  static listarAlunos = (req, res) => {
    res.json(alunos);
  };

  static listarAlunoPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const aluno = alunos.find((a) => a.id === id);
    if (!aluno) {
      return res.status(404).json({ message: "Aluno não encontrado." });
    }
    res.json(aluno);
  };

  static listarMedias = (req, res) => {
    const medias = alunos.map((aluno) => ({
      nome: aluno.nome,
      media: (aluno.nota1 + aluno.nota2) / 2,
    }));
    res.json(medias);
  };

  static listarAprovados = (req, res) => {
    const aprovados = alunos.map((aluno) => {
      const media = (aluno.nota1 + aluno.nota2) / 2;
      return {
        nome: aluno.nome,
        status: media >= 6 ? "aprovado" : "reprovado",
      };
    });
    res.json(aprovados);
  };

  static cadastrarAluno = (req, res) => {
    const { id, nome, ra, nota1, nota2 } = req.body;
    if (!id || !nome || !ra || nota1 === undefined || nota2 === undefined) {
      return res
        .status(400)
        .json({ message: "Todos os campos são obrigatórios." });
    }
    if (alunos.find((a) => a.id === id)) {
      return res.status(400).json({ message: "ID já existe." });
    }
    alunos.push({ id, nome, ra, nota1, nota2 });
    res.status(201).json({ message: "Aluno criado com sucesso." });
  };

  static atualizarAluno = (req, res) => {
    const id = parseInt(req.params.id);
    const alunoIndex = alunos.findIndex((a) => a.id === id);
    if (alunoIndex === -1) {
      return res.status(404).json({ message: "Aluno não encontrado." });
    }
    const { nome, ra, nota1, nota2 } = req.body;
    alunos[alunoIndex] = { ...alunos[alunoIndex], nome, ra, nota1, nota2, id };
    res.json(alunos[alunoIndex]);
  };

  static excluirAluno = (req, res) => {
    const id = parseInt(req.params.id);
    const alunoIndex = alunos.findIndex((a) => a.id === id);
    if (alunoIndex === -1) {
      return res.status(404).json({ message: "Aluno não encontrado." });
    }
    alunos.splice(alunoIndex, 1);
    res.json({ message: "Aluno removido." });
  };
}

export default AlunoController;
