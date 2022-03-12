import React from "react";

/* Example:
Render the leaderboard
eg:
1. Adam - 4pts
2. Steve - 3pts
3. Mary - 2pts
4. Jamie - 1pt
*/

const TOURNAMENT_DATA = {
    members: [
        {
            id: 1,
            name: "Mary",

            // 1 is a win, 0 is a loss
            // the score is the sum of all results for a member
            results: [0, 1, 1, 0]
        },
        {
            id: 2,
            name: "Adam",
            results: [1, 1, 1, 1]
        },
        {
            id: 3,
            name: "Jamie",
            results: [0, 0, 0, 1]
        },
        {
            id: 4,
            name: "Steve",
            results: [1, 1, 0, 1]
        }
    ]
};

/* 
KEY TAKEAWAY
- creating a new variable that specifically goes into the object and selects the members array so we can perform 
array functions on it (.reduce, .sort, etc.)
*/
const tournamentMembers = TOURNAMENT_DATA.members;

const getScores = (number) => {
    // we compute score on demand
    // you can also memoize a new object that
    // contains the score for each member, but this is easier
    // and easier means less likely to have bugs
    // This makes the results key return one value by adding it all up.
    return number.results.reduce((acc, cV) => acc + cV, 0);
};

const Score = ({ member }) => {
    const points = getScores(member);
    // printing formating of pluralization if more than 1 add s.
    return `${points}pt${points === 1 ? '' : 's'}`;
};

// Object to the specific array.
// Its an array and we sort high to low.
const transformedData = tournamentMembers.slice().sort((a, b) => getScores(b) - getScores(a));


const Leaderboard = () => {

    return (
        <section>
            <h1>Leadership Board</h1>
            <ol>
                {transformedData.map(member => (
                    <li key={member.id}>{member.name} - <Score member={member} /></li>
                ))}
            </ol>
        </section>
    );
};

export default Leaderboard;