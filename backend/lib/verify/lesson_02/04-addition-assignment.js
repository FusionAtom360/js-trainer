import { errorMessage } from "../error-messages.js";

const verify = ({ answer, logs }) => {
  const feedback = []

  if (answer === undefined) {
    feedback.push(errorMessage.noReturn)
  }

  if (typeof answer !== "number") {
    feedback.push(errorMessage.wrongTypeNumber)
  }

  if (answer !== 7) {
    feedback.push(errorMessage.incorrectNumber)
  }

  return {
    pass: feedback.length === 0,
    feedback,
  }
}

export default verify;
