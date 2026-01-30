import { errorMessage } from "../error-messages.js";

const verify = ({ answer, logs }) => {
  const feedback = []

    if (answer === undefined) {
    feedback.push(errorMessage.noReturn)
  }

  if (typeof answer !== "string" && typeof answer !== "object") {
    feedback.push(errorMessage.wrongTypeString)
  }

  if (answer !== "Bob: 2.883\nMary: 3.383\nJuan: 2.783") {
    feedback.push(errorMessage.incorrectAnswer)
  }

  return {
    pass: feedback.length === 0,
    feedback,
  }
}

export default verify;
