const { Psicologos } = require('../models');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secret = require('../config/secret')
const AuthController = {

    async login(req, res) {
        const { email, senha } = req.body;
        try{
            const psicologo = await Psicologos.findOne({
                where: {
                    email,
                },
            });


            if (!psicologo) {
                return res.status(401).json("E-mail ou senha inválida, verifique e tente novamente”");
            }

            if (!bcrypt.compareSync(senha, psicologo.senha)){
                return res.status(401).json("E-mail ou senha inválida, verifique e tente novamente”");
            }

            const token = jwt.sign({
                id: psicologo.id,
                email: psicologo.email,
                nome: psicologo.nome
            },
            secret.key
            );
            
            return res.status(200).json(token)
        } catch (error) {
            return res.status(400).json("Ocorreu um erro");
        }
    },

}

module.exports = AuthController;
