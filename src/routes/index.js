const express = require("express");
const pacientesController = require("../controllers/controllerPacientes");
const psicologosController = require("../controllers/controllerPsicologos");

const routes = express.Router();


routes.post("/pacientes", pacientesController.cadastrar);
routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/pacientes/:id", pacientesController.buscarPeloId);
routes.delete("/pacientes/:id", pacientesController.deletarPaciente);
routes.put("/pacientes/:id", pacientesController.atualizarPaciente);

routes.get("/psicologos", psicologosController.listarPsicologos);
routes.get("/psicologos/:id", psicologosController.listarPsicologosId);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo)
routes.post("/psicologos/", psicologosController.cadastrarPsicologo)
routes.put("/psicologos/:id", psicologosController.atualizarPsicologo)

module.exports = routes;
