import React, { useState, useEffect } from "react";

/*
 * Update this component to call setMessage("I'm fine")
 * 1 second after the component has mounted. You can click
 * the "Reset Greeting.js Component" button to recreate this
 * component and observe the lifecycle again. Your solution
 * should use useEffect, setTimeout, and clearTimeout
 *
 * For a fully correct solution, be sure to call clearTimeout
 * when the component is unmounted. You should not see the
 * following error in the console after clicking the button
 * multiple times before the timeout resolves:
 *
 *   Warning: Can't perform a React state update on an unmounted component.
 *
 * Note: Your solution must use useEffect. If you simply call
 * setTimeout in the render function, you will call setTimeout
 * on every render, instead of just the first render.
 *
 */

function Greeting() {
  const [message, setMessage] = useState("How are you?");

  useEffect(() => {
      setMessage("I'm fine")
  })

  return <p>{message}</p>;
}

export default Greeting;
