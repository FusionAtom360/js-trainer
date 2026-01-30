import { errorMessage } from "../error-messages.js";

const verify = ({ answer, logs }) => {
  const feedback = []

  if (answer === undefined) {
    feedback.push(errorMessage.noReturn)
  }

  if (typeof answer !== "string") {
    feedback.push(errorMessage.wrongTypeString)
  }

  if (answer !== "I am feeling rested") {
    feedback.push(errorMessage.incorrectString)
  }

  return {
    pass: feedback.length === 0,
    feedback,
  }
}

export default verify;
