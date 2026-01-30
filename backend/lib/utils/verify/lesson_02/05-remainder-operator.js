import { errorMessage } from "../error-messages.js";

const verify = ({ answer, logs }) => {
  const feedback = []

  if (answer === undefined) {
    feedback.push(errorMessage.noReturn)
  }

  if (typeof answer !== "boolean") {
    feedback.push(errorMessage.wrongTypeBoolean)
  }

  if (answer !== true) {
    feedback.push(errorMessage.incorrectBoolean)
  }

  return {
    pass: feedback.length === 0,
    feedback,
  }
}

export default verify;
