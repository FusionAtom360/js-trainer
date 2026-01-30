import { errorMessage } from "../error-messages.js";

const verify = ({ answer, logs }) => {
  const feedback = []

  if (answer === undefined) {
    feedback.push(errorMessage.noReturn)
  }

  if (typeof answer !== "string") {
    feedback.push(errorMessage.wrongTypeString)
  }

  if (answer !== `Uncle Bob was driving his 1984 Toyota at 80 miles an hour in a 35 mph zone. Officer Tim pulled him over and issued a ticket for $500!`) {
    feedback.push(errorMessage.incorrectString)
  }

  return {
    pass: feedback.length === 0,
    feedback,
  }
}

export default verify;
