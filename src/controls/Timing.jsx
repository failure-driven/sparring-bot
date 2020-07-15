import React from "react";

function Timing() {
  const timingExample = `
    Robot

    height       action       rotation
    ------       ------       --------
    H == head    S == strike    0 = back
    B == body    P == punch    90 = side
    N == knee?                180 = strike

    Fighter

    L == LEFT   H == hand    S == strike
    R == RIGHT  E == elbow?  B == block
                N == knee
                S == shins
                F == feet

    timing
    ------
    | TIME  | 1 +  2 +     3 +    4 +  |
    |       | |      |       |         |
    | FGHTR | LHS  LNB     RHB         |
    |       |      |       |           |
    | BOT   |      LNS180  RHS180      |

    meaning
    -------
    * A fighter LHS (left hand strike) to "head" of robot on the first beat
    * the hit triggers start of count
    * at 2 robot strikes LNS180 (left knee strike 180 degrees (from back to front))
    * the fighter reacts with an LNB (left knee block)
    * at 3 robot strikes RHS180 (right head strike 180°)
    * the fighter reacts with an RHB (right hand block)

    Disambiguations
    ---------------
    * use C for head ie cranium
    * use Thai terms - https://blackbeltwiki.com/muay-thai-terminology
    * boxing punch numbering - https://expertboxing.com/johnnys-punching-combinations-list
  `;
  return (
    <div>
      Timing
      <br />
      <pre>{timingExample}</pre>
    </div>
  );
}

export default Timing;
