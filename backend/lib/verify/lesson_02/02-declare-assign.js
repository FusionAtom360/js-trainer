import { errorMessage } from "../error-messages.js";

const verify = ({ answer, logs }) => {
  const feedback = []

  if (answer === undefined) {
    feedback.push(errorMessage.noReturn)
  }

  if (typeof answer !== "string") {
    feedback.push(errorMessage.wrongTypeString)
  }

  if (logs.length < 1) {
    feedback.push(errorMessage.noConsole)
  }

  return {
    pass: feedback.length === 0,
    feedback,
  }
}

export default verify;
