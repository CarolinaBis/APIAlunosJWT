import express from "express";
import alunoRoutes from "./alunoRoutes.js";
import authRoutes from "./authRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("API de Alunos com JWT");
  });

  app.use(express.json(), authRoutes, alunoRoutes);
};

export default routes;
