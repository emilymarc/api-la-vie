const express = require("express");
const pacientesController = require("../controllers/controllerPacientes");
const psicologosController = require("../controllers/controllerPsicologos");
const atendimentosController = require("../controllers/controllerAtendimentos");
const pacientesValidation = require("../validators/pacientesValidation")
const psicologosValidation = require("../validators/psicologosValidation")
const atendimentosValidation = require("../validators/atendimentosValidation")
const authLoginValidation = require("../validators/auth/login")
const AuthController = require("../controllers/authControllers")
const auth = require("../middlewares/auth")
const controllerDashboard = require("../controllers/controllerDashboard")

const routes = express.Router();


routes.post("/pacientes", pacientesValidation, pacientesController.cadastrar);
routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/pacientes/:id", pacientesController.buscarPeloId);
routes.delete("/pacientes/:id", pacientesController.deletarPaciente);
routes.put("/pacientes/:id", pacientesValidation, pacientesController.atualizarPaciente);

routes.get("/psicologos", psicologosController.listarPsicologos);
routes.get("/psicologos/:id", psicologosController.listarPsicologosId);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo);
routes.post("/psicologos", psicologosValidation, psicologosController.cadastrarPsicologo);
routes.put("/psicologos/:id", psicologosValidation, psicologosController.atualizarPsicologo);

routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentosController.listarAtendimentosPorId);
routes.post("/atendimentos", auth, atendimentosValidation, atendimentosController.agendarAtendimento);

routes.post("/login", authLoginValidation, AuthController.login )

routes.get("/dashboard/numero-paciente", controllerDashboard.numeroPacientes);
routes.get("/dashboard/numero-atendimento", controllerDashboard.numeroAtendimentos);
routes.get("/dashboard/numero-psicologo", controllerDashboard.numeroPsicologos);
routes.get("/dashboard/mediaAtendimentos", controllerDashboard.mediaAtendimentos);

module.exports = routes;