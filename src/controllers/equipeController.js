const equipe = require("../models/equipe.json");
const fs = require("fs");

const getColaboradoras = (req, res) => {
  console.log(req.url);
  res.status(200).send(equipe);
};

const getPessoaById = (req, res) => {
  const id = req.params.id;

  res.status(200).send(equipe.find((pessoa) => pessoa.id == id));
};

const postColaboradora = (req, res) => {
  const { id, nome, dataNascimento } = req.body;

  equipe.push({ id, nome, dataNascimento });

  fs.writeFile(
    "./src/models/equipe.json",
    JSON.stringify(equipe),
    "utf8",
    function (err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("Arquivo atualizado com sucesso!");
    }
  );
  res.status(201).send(equipe);
};

const deleteColaboradora = (req, res) => {
  const id = req.params.id;
  const exColaboradora = equipe.find(
    (exColaboradora) => exColaboradora.id == id
  );
  const index = equipe.indexOf(exColaboradora);
  equipe.splice(index, 1);
  fs.writeFile(
    "./src/models/equipe.json",
    JSON.stringify(equipe),
    "utf8",
    function (err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("Registro de ex-colaboradora apagado com sucesso!");
    }
  );
  res.status(200).send(equipe);
};

const putColaboradora = (req, res) => {
  try {
    const id = req.params.id;
    

    const colaboradoraASerModificada = equipe.find(
      (colaboradora) => colaboradora.id == id
    );
    console.log(colaboradoraASerModificada);

    const colaboradoraAtualizada = req.body;
    console.log(colaboradoraAtualizada);

    const index = equipe.indexOf(colaboradoraASerModificada);
    console.log(index);

    equipe.splice(index, 1, colaboradoraAtualizada);
    console.log(equipe);

    fs.writeFile(
      "./src/models/equipe.json",
      JSON.stringify(equipe),
      "utf8",
      function (err) {
        if (err) {
          return res.status(424).send({ message: err });
        }
        console.log("Arquivo atualizado com sucesso!");
      }
    );

    res.status(200).send(equipe);
  } catch (err) {
    return res.status(424).send({ message: err });
  }
};
const patchColaboradora = (req, res) => {
  const id = req.params.id;
  const atualizacao = req.body;
  console.log(atualizacao);

  try {
    const colaboradoraASerModificada = equipe.find(
      (colaboradora) => colaboradora.id == id
    );

    //Ele vai buscar dentro do objeto tarefaASerModificada atributos em que o nome coincida com os do objeto atualizacao, e vai substituir o valor

    Object.keys(atualizacao).forEach((chave) => {
      colaboradoraASerModificada[chave] = atualizacao[chave];
    });

    fs.writeFile(
      "./src/models/equipe.json",
      JSON.stringify(equipe),
      "utf8",
      function (err) {
        if (err) {
          return res.status(424).send({ message: err });
        }
        console.log("Arquivo atualizado com sucesso!");
      }
    );

    return res.status(200).send(equipe);
  } catch (err) {
    return res.status(424).send({ message: err });
  }
};

module.exports = {
  getColaboradoras,
  getPessoaById,
  postColaboradora,
  deleteColaboradora,
  putColaboradora,
  patchColaboradora,
};
