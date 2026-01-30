import { errorMessage } from "../error-messages.js";

const verify = ({ answer, logs }) => {
  const feedback = []

    if (answer === undefined) {
    feedback.push(errorMessage.noReturn)
  }

  if (typeof answer !== "string") {
    feedback.push(errorMessage.wrongTypeString)
  }

  if (answer !== "Marge") {
    feedback.push(errorMessage.incorrectString)
    feedback.push("Only return the name of the matching user.")
  }

  return {
    pass: feedback.length === 0,
    feedback,
  }
}

export default verify;
