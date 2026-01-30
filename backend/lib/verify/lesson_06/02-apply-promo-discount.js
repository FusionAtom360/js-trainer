import { errorMessage } from "../error-messages.js";

const verify = ({ answer, logs }) => {
  const feedback = []

  if (!Array.isArray(answer)) {
    feedback.push(errorMessage.wrongType)
  }

  if (answer.length !== 7) {
    feedback.push(errorMessage.wrongArrayLength)
  }

  const expected = [75.98, 882.79, 12.6, 212.5, 720.04, 406.44, 89.98]
  for (let i = 0; i < expected.length; i++) {
    if (answer[i] !== expected[i]) {
      feedback.push(errorMessage.incorrectAnswerArray)
      break
    }
  }

  return {
    pass: feedback.length === 0,
    feedback,
  }
}

export default verify;
