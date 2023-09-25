const express = require("express");
const router = express.Router();

// Require and instance our API handler to proceed
const CharactersService = require("../service/index");
const charactersApiHandler = new CharactersService();

router.get("/list", (req, res) => {
  charactersApiHandler
    .getAllCharacters()
    .then((response) => {
      res.render("pages/characters-list", { characters: response.data });
    })
    .catch((error) => console.log(error));
});

router.get("/create", (req, res) =>
  res.send(`Here we'll render the form to create a new characters`)
);

router.post("/create", (req, res) => {
  const characterInfo = req.body;

  charactersApiHandler
    .createCharacter(characterInfo)
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

router.post("/create", (req, res) =>
  res.send(`Here we'll send the form to create a new characters`)
);

router.get("/edit/:id", (req, res) =>
  res.send(`Here we'll render the form to update character ID ${req.params.id}`)
);

router.post("/edit/:id", (req, res) => {
  const characterId = req.params.id;
  const characterInfo = req.body;

  charactersApiHandler
    .editCharacter(characterId, characterInfo)
    .then((response) => res.send(response.data))
    .catch((error) => console.log(error));
});

router.get("/delete/:id", (req, res) => {
  const characterId = req.params.id;

  charactersApiHandler
    .deleteCharacter(characterId)
    .then(() =>
      res.send(`Character deleted! Check the full characters list to test`)
    )
    .catch((error) => console.log(error));
});

module.exports = router;
