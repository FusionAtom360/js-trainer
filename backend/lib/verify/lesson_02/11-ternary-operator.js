import { errorMessage } from "../error-messages.js";

const verify = ({ answer, logs }) => {
  const feedback = []

  if (answer === undefined) {
    feedback.push(errorMessage.noReturn)
  }

  if (typeof answer !== "string") {
    feedback.push(errorMessage.wrongTypeString)
  }

  if (answer !== "The light is on") {
    feedback.push(errorMessage.incorrectString)
  }

  return {
    pass: feedback.length === 0,
    feedback,
  }
}

export default verify;
