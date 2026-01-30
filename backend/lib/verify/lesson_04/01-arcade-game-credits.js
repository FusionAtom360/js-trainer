import { errorMessage } from "../error-messages.js";

const verify = ({ answer, logs }) => {
  const feedback = []

  if (answer === undefined) {
    feedback.push(errorMessage.noReturn)
  }

  if (typeof answer !== "string") {
    feedback.push(errorMessage.wrongTypeString)
  }

  if (answer && !answer.startsWith("Bob is playing and has 2 credit(s) left!\nBob is playing and has 1 credit(s) left!\nLily is playing and has 2 credit(s) left!\nBob's game is over!")) {
    feedback.push(errorMessage.incorrectString)
    feedback.push("Run the four example calls described in the exercise, then return eventLog to generate the correct output.")
  }

  const combinedLog = logs.map(l => l.message).join("\n")
  if (!answer && combinedLog.includes("Bob is playing and has 2 credit(s) left!\nBob is playing and has 1 credit(s) left!\nLily is playing and has 2 credit(s) left!\nBob's game is over!")) {
    feedback.push("Part 1 completed!")
  }

  return {
    pass: feedback.length === 0,
    feedback,
  }
}

export default verify;
