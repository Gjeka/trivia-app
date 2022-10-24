import { getRandomQuestions } from "../src/utilities/helpers";
import { questions } from "../src/utilities/questions";

it(`shuffled array has correct length`, () => {
  expect(getRandomQuestions(questions).length).toBe(5);
});

it(`question array has all correct objects`, () => {
  let wrongObject = false;
  getRandomQuestions(questions).map((question) => {
    if (
      !(
        question.question &&
        question.possibleAnswers.length &&
        question.introvertAnswers
      )
    ) {
      wrongObject = true;
    }
  });
  expect(wrongObject).toBe(false);
});
