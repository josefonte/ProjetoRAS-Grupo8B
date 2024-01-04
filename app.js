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

//Rotas para apagar uma sala identificando o id
app.delete("/Sala/:id", async (req, res) => {
    const { id } = req.params;
    await Sala.destroy({
        where: { id }
    }).then(() => {
        return res.json({
            mensagem: "{id} Sala Apagada com sucesso"
        }).catch(() => {
            return res.json({
                mensagem: "Sala não apagada com sucesso"
            });

        });
    });
});
//Rota para listar as salas cadastradas
app.get("/Salas", (req, res) => {
    Sala.findAll().then((salas) => {
        return res.json(salas);
    }).catch((erro) => {
        return res.status(400).json({
            mensagem: "Nenhuma sala encontrada"

        });
    });

});

//Rota para editar as salas cadastradas
app.put("/update_sala/:id", (req, res) => {
    Sala.updateOne({ _id: req.params.id }, req.body, (err) => {
        if (err) return res.status(400).json({
            mensagem: "Sala não editada"
        });
        return res.json({
            mensagem: "Sala editada com sucesso"
        });
    });


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
//Rota para listar as salas cadastradas
app.get("/Horarios", (req, res) => {
    horarios.findAll().then((horarios) => {
        return res.json(horarios);
    }).catch((erro) => {
        return res.status(400).json({
            mensagem: "Nenhum horário encontrada"

        });
    });

});
app.delete("/Horario/:id", async (req, res) => {
    const { id } = req.params;
    await horarios.destroy({
        where: { id }
    }).then(() => {
        return res.json({
            mensagem: "Horario Apagado com sucesso"
        }).catch(() => {
            return res.json({
                mensagem: "Horario não apagado"
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
