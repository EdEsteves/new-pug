const app = require("./config-express/express")();

const port = process.env.PORT || 3000

app.listen(port, function(){
    console.log("Servidor rodando na porta: " + port);
});