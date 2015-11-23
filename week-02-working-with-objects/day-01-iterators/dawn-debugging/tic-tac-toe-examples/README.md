### Tic Tac Toe - Refactor

Take a look at the three Tic Tac Toe solutions.

- What did they do well?
    + Good style
    + Helpful comments about complex logic
    + Indentation, Spacing
    + Good variable names & function names
- What could they refactor?
    - Code "smells"
    - Don't Repeat Yourself (DRY)
        + Modularity / Encapsulation / Abstraction
    - Keep it Simple, Stupid (KISS)
        + "Premature optimization is the root of all evil" -- Donald Knuth
    - Separation of Concerns (SoC)
        + Model View Controller (MVC)
            + **M**odel Logic (Data) - e.g. player 1, player 2
            + **V**iew Logic (Presentation Logic) - What it looks like
            + **C**ontrol Logic (Game Logic) - Rules of the game
    - Mixing styles -- Vanilla Javascript DOM Manipulation vs. JQuery DOM Manipulation
    - Overloading Functions
        + Accepts too many parameters (3 or fewer is best!)
        + Does too many things (could be broken down further)
