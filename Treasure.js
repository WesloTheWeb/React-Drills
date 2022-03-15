/*
Catch the Treasure

Description
This is a game inspired by the classic game ‘snake’ but simplified so that the ‘snake’ does not grow but rather stays as a dot.

* A player ‘dot’ starts at the top left corner of a 10x10 grid, and a ‘treasure’ dot appears in a random location.
* Use the keyboard arrows to move up, down, left, or right to move one tile at a time.
* Landing on the treasure increases their score by 1 point and the treasure moves to a new random location.

Notes:
- Player score that increments everytime treasure is caught
- Board component
  - Use CSS Grid
- State to keep track of:
  - Player position { row: 0, column: 0 }
  - Treasure position { row: 0, column: 0 }
      OR
  - Track board as a 2d array with 100 elements (not a good idea because it's massive)
  - Score (a number)
- Event listener for the arrow keys and way to update the player position
- Util function to generate a new treasure position
- When the player and treasure positions are the same
  - increment the score
  - place the treasure in a new position

*/

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  board: {
    display: "grid",
    gridTemplateColumns: "repeat(10, 50px)",
    gridTemplateRows: "repeat(10, 50px)"
  }
}));

export default function App() {
  const classes = useStyles();
  const [score, setScore] = useState(0);
  const [playerPos, setPlayerPos] = useState({ row: 0, column: 0 });
  const [treasurePos, setTreasurePos] = useState({
    row: Math.floor(Math.random() * 10),
    column: Math.floor(Math.random() * 10)
  });

  function board(playerPos, treasurePos) {
    let board = [];
    for (let i = 0; i < 100; i++) {
      if (false) {
        board.push(<div>P</div>);
      } else {
        board.push(<div>{i}</div>);
      }
    }

    return <div className={classes.board}>{board}</div>;
  }

  return board(playerPos, treasurePos);
}
