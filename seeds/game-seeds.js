const { Game } = require("../models");

const gameData = [
  {
    game_name: "Plunder",
    category_id: 2,
    min_number_of_players: 2,
    max_number_of_players: 6,
    avg_min_game_time: 40,
    avg_max_game_time: 120,
    game_description:
      "Adventure and riches await any swashbuckler brave enough to take the helm and command a fleet. Wage war against rival captains. Build and upgrade your ships with masts and cannons to increase speed and firepower. Conquer islands and exploit the land to gain valuable resources. Navigate dangerous waters and avoid the ever-wandering storm. Are you ruthless enough to prevail? Do you seek gold and infamy? If ruling the seas is your ambition, it’s time to unleash your inner pirate. It’s time to plunder!",
  },
  {
    game_name: "UNO",
    category_id: 1,
    min_number_of_players: 2,
    max_number_of_players: 10,
    avg_min_game_time: 60,
    avg_max_game_time: 180,
    game_description:
      "Easy to pick up and impossible to put down, players take turns matching a card in their hand with the current card shown on top of the deck either by color or number. The first player to rid themselves of all the cards in their hand before their opponents wins",
  },
  {
    game_name: "Cards Against Humanity",
    category_id: 3,
    min_number_of_players: 3,
    max_number_of_players: 20,
    avg_min_game_time: 30,
    avg_max_game_time: 90,
    game_description:
      "Fill-in-the-blank party game that turns your awkard personality and lackluster social skills into hours of fun. One player asks a question from a black card and everyone else answers with their funniest white card.",
  },
  {
    game_name: "Cubitos",
    category_id: 5,
    min_number_of_players: 2,
    max_number_of_players: 4,
    avg_min_game_time: 30,
    avg_max_game_time: 60,
    game_description:
      "Take on the role of participants in the annual Cube Cup, a race of strategy and luck to determine the Cubitos Champion. Each player has a runner on the racetrack and a support team, which is represented by all the dice you roll. Each turn, you roll dice and use their results to move along the racetrack, buy new dice, and use abilities — but you must be careful not to push your luck rolling too much or you could bust!",
  },
  {
    game_name: "Once Upon a Time",
    category_id: 4,
    min_number_of_players: 2,
    max_number_of_players: 6,
    avg_min_game_time: 15,
    avg_max_game_time: 60,
    game_description:
      " Stem into the world of fairy tales. It's full of wicked queens, talking cauldrons and lucky boys who stumble upon magic objects, but unlike normal fairy tales, you control the action.",
  },
  {
    game_name: "Sprit Island",
    category_id: 2,
    min_number_of_players: 1,
    max_number_of_players: 4,
    avg_min_game_time: 90,
    avg_max_game_time: 120,
    game_description:
      "In the most distant reaches of the world, magic still exists, embodied by spirits of the land, of the sky, and of every natural thing. As the great powers of Europe stretch their colonial empires further and further, they will inevitably lay claim to a place where spirits still hold power - and when they do, the land itself will fight back alongside the islanders who live there.",
  },
  {
    game_name: "Scythe",
    category_id: 2,
    min_number_of_players: 1,
    max_number_of_players: 5,
    avg_min_game_time: 90,
    avg_max_game_time: 115,
    game_description:
      "It is a time of unrest in 1920s Europa. The ashes from the first great war still darken the snow. The capitalistic city-state known simply as “The Factory”, which fueled the war with heavily armored mechs, has closed its doors, drawing the attention of several nearby countries.",
  },
  {
    game_name: "Root",
    category_id: 2,
    min_number_of_players: 2,
    max_number_of_players: 4,
    avg_min_game_time: 60,
    avg_max_game_time: 90,
    game_description:
      "Root is a game of adventure and war in which 2 to 4 (1 to 6 with the 'Riverfolk' expansion) players battle for control of a vast wilderness.",
  },
  {
    game_name: "Wingspan",
    category_id: 2,
    min_number_of_players: 1,
    max_number_of_players: 5,
    avg_min_game_time: 40,
    avg_max_game_time: 70,
    game_description:
      "Wingspan is a competitive, medium-weight, card-driven, engine-building board game from Stonemaier Games. It's designed by Elizabeth Hargrave and features over 170 birds illustrated by Beth Sobel, Natalia Rojas, and Ana Maria Martinez.",
  },
  {
    game_name: "Twilight Struggle",
    category_id: 2,
    min_number_of_players: 2,
    max_number_of_players: 2,
    avg_min_game_time: 120,
    avg_max_game_time: 180,
    game_description:
      "Now the trumpet summons us again, not as a call to bear arms, though arms we need; not as a call to battle, though embattled we are – but a call to bear the burden of a long twilight struggle",
  },
  //data used to create a new game
  // {
  //     game_name: "Clue",
  //     category_id: 2,
  //     min_number_of_players: 3,
  //     max_number_of_players: 6,
  //     avg_min_game_time: 10,
  //     avg_max_game_time: 60,
  //     game_description: "The classic detective game! Players move from room to room in a mansion to solve the mystery of: who done it, with what, and where? Players are dealt character, weapon, and location cards after the top card from each card type is secretly placed in the confidential file in the middle of the board. Players must move to a room and then make an accusation against a character by stating a specific weapon and room.Through deductive reasoning each player must figure out which character, weapon, and location are in the secret file. "
  // }
];

const seedGame = () => Game.bulkCreate(gameData);
module.exports = seedGame;
