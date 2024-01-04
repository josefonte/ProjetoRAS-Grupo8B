const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const Sala = require("./models/Sala");
const horarios = require("./models/horarios");


app.use(express.json())

app.get("/", function (req, res) {
    res.send("Seja bem Vindo a Página de lógistica");
});

app.post("/cad-sala", async (req, res) => {

    await Sala.create(req.body)
        .then(() => {
            return res.json({
                mensagem: "Sala cadastrada com sucesso"
            }).catch(() => {
                return res.status(400).json({
                    erro: true,
                    mensagem: "Sala não cadastrada"
                });

            });


        });

});


app.delete("/Sala/:id", async (req, res) => {
    const { id } = req.params;
    await Sala.destroy({
        where: { id }
    }).then(() => {
        return res.json({
            mensagem: "Sala Apagada com sucesso"
        }).catch(() => {
            return res.json({
                mensagem: "Sala não apagada com sucesso"
            })

        });



        //Rotas para a Tabela Horários

        app.post("/cad-horario", async (req, res) => {
            await horarios.create(req.body)
                .then(() => {
                    return res.json({
                        mensagem: "Horario cadastrado com sucesso"
                    }).catch(() => {
                        return res.status(400).json({
                            erro: true,
                            mensagem: "Horario não cadastrado"
                        });

                    });

                });

        });



        app.get("/listar-horario ", function (req, res) {
            res.send("Salas");
        });

        app.listen(8050, () => {
            console.log("Servidor iniciado na porta 8050: http://localhost:8050");
        });