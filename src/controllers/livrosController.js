const livros = require("../models/livros.json");
const fs = require("fs");

const getLivros = (req, res) => {
  console.log(req.url);
  res.status(200).send(livros);
};

const getLivroById = (req, res) => {
  const id = req.params.id;

  res.status(200).send(livros.find((livro) => livro.id == id));
};

const getLivroByCategory = (req, res) => {
  const categoria = req.params.categoria; 

  const livrosFiltrados = livros.filter((livro) => livro.categoria == categoria);

  res.status(200).send({ livrosFiltrados });
}

const postLivro = (req, res) => {
  console.log(req.body);
  const { id, titulo, autoria, editora, categoria, emEstoque } = req.body;

  livros.push({ id, titulo, autoria, editora, categoria, emEstoque });

  fs.writeFile(
    "./src/models/livros.json",
    JSON.stringify(livros),
    "utf8",
    function (err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("O arquivo foi atualizado com sucesso!");
    }
  );
  res.status(201).send(livros);
};

const deleteLivro = (req, res) => {
  const id = req.params.id;
  const livroFiltrado = livros.find((livroFiltrado) => livroFiltrado.id == id);
  const index = livros.indexOf(livroFiltrado);
  livros.splice(index, 1);
  fs.writeFile(
    "./src/models/livros.json",
    JSON.stringify(livros),
    "utf8",
    function (err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("O arquivo foi atualizado com sucesso!");
    }
  );
  res.status(200).send(livros);
};

const putLivro = (req, res) => {
  try {
    const id = req.params.id;

    const livroASerAtualizado = livros.find((livro) => livro.id == id);
    console.log(livroASerAtualizado);

    const livroAtualizado = req.body;
    console.log(livroAtualizado);

    const index = livros.indexOf(livroASerAtualizado);
    console.log(index);

    livros.splice(index, 1, livroAtualizado);
    console.log(livros);

    fs.writeFile(
      "./src/models/livros.json",
      JSON.stringify(livros),
      "utf8",
      function (err) {
        if (err) {
          return res.status(424).send({ message: err });
        }
        console.log("Registro atualizado com sucesso!");
      }
    );
    res.status(200).send(livros);
  } catch (err) {
    return res.status(424).send({ message: err });
  }
} 

const patchLivro = (req, res) => {
  const id = req.params.id;
  const atualizacao = req.body;
  console.log(atualizacao);

  try {
    const livroASerAtualizado = livros.find(
      (livro) => livro.id == id
    );

    Object.keys(atualizacao).forEach((chave) => {
      livroASerAtualizado[chave] = atualizacao[chave];
    });

    fs.writeFile(
      "./src/models/livros.json",
      JSON.stringify(livros),
      "utf8",
      function (err) {
        if (err) {
          return res.status(424).send({ message: err });
        }
        console.log("Arquivo atualizado com sucesso!");
      }
    );

    return res.status(200).send(livros);
  } catch (err) {
    return res.status(424).send({ message: err });
  }
};


module.exports = {
  getLivroById,
  getLivros,
  getLivroByCategory,
  postLivro,
  deleteLivro,
  putLivro,
  patchLivro,
}
