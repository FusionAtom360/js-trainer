import { errorMessage } from "../error-messages.js";

const verify = ({ answer, logs }) => {
  const feedback = []

    if (answer === undefined) {
    feedback.push(errorMessage.noReturn)
  }

  if (typeof answer !== "string") {
    feedback.push(errorMessage.wrongTypeString)
  }

  if (answer !== `Hey, everyone! I'm selling a 2020 Honda Civic Sport Sedan CVT for just $20480! It has just 64199 miles and is in great condition. So, my question is, "What's it gonna take to get you into this car?"`) {
    feedback.push(errorMessage.incorrectString)
  }

  return {
    pass: feedback.length === 0,
    feedback,
  }
}

export default verify;
