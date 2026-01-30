import { errorMessage } from "../error-messages.js";

const verify = ({ answer, logs }) => {
  const feedback = []

    if (answer === undefined) {
    feedback.push(errorMessage.noReturn)
  }

  if (!Array.isArray(answer)) {
    feedback.push(errorMessage.wrongType)
  }

  const expectedArray = [["love","joy","peace"]]
  if (JSON.stringify(answer) !== JSON.stringify(expectedArray[0])) {
    feedback.push(errorMessage.incorrectArray)
  }

  return {
    pass: feedback.length === 0,
    feedback,
  }
}

export default verify;
