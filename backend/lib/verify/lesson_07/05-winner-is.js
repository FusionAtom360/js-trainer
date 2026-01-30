import { errorMessage } from "../error-messages.js";

const verify = ({ answer, logs }) => {
  const feedback = []

    if (answer === undefined) {
    feedback.push(errorMessage.noReturn)
  }

  if (typeof answer !== "string") {
    feedback.push(errorMessage.wrongTypeString)
  }

  if (answer !== `The Academy of Motion Pictures is proud to announce the winner of the 1980 Best Picture Award to Ordinary People! Congratulations to director Robert Redford for this wonderful drama film!`) {
    feedback.push(errorMessage.incorrectString)
  }

  return {
    pass: feedback.length === 0,
    feedback,
  }
}

export default verify;
