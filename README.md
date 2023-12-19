# Horrer Quiz

## Responsive Website

![Responsiveness](https://github.com/Idehed/Project2/assets/146822758/14e943b8-b636-48ac-a956-a5cf66f57e76)

---

## Purpose

---

Horrer Quiz is a game that let's you show your skills in knowlegde about horrer movies.
You will have 10 questions to answer and you have 4 different options. Choose the right answer before
the time runs out!

[Click here to go to live website]()

---

## Design

---

New Site Users

- I want to understand what the buttons do.
- I want to easy understand how to play the game.
- I want to understand the questions.
- I want to know witch answer is right even if I press wrong answer.
- I want to know how many right and wrong answers I got.
  
Returning Site Users

- I want to earn more knowledge about horrer movies.
- I want to score better tan last time.

---

## Features

---

### **Home welcome page**
  
![Welcome page](https://github.com/Idehed/Project2/assets/146822758/4b31ad38-729c-4191-9727-29966abd387a)

- This first page is very simple.
- It contains a header named Horrer Quiz and a welcome text to get the user to feel welcome.
- It also contains a play button for users to press to start the quiz.

### **Quiz info section**

![Quiz info](https://github.com/Idehed/Project2/assets/146822758/938c43fd-e39e-4901-a77f-5c74b1530b20)

- This section of the page is where the user understands how to play game.
- The user looks at the instructions and know very clear on how to play.
- An continue button is located belove the info text for users to continue to the game area.

### **Quiz game section**

![Quiz game area](https://github.com/Idehed/Project2/assets/146822758/cc12c81c-b383-489b-84f4-c8db081e61cb)

- This is the quiz section.
- Here the user see the first question and they also have 4 different answers.
- A timer is set on the top right corner of the quiz. The user will have 10 seconds on each question.
- In the bottom left corner they have question counter that lets you know with question you are on.

![Quiz game, after you pressed](https://github.com/Idehed/Project2/assets/146822758/146080fd-eaa8-464d-87f3-c2ca7be98cc2)

- If the user pressed the wrong answer a red color appears and the right answer shows. To easy understand if I get right or wrong on that question.
- Whenever an answer is pressed only then the next question button is shown.
- If the timer runs out the user gets 0 points and the answers is disabled.

---

### **End of game section**

![End of quiz](https://github.com/Idehed/Greatskate-P1/assets/146822758/444c5b31-99de-41cc-ac00-1fbcd07bf1af)

- Here the user is shown there result of the quiz.
- It show the " Your completed the quiz " text to let users know that the quiz is done.
- Depends on how good you were different text is shown:
  
1. If Score < 4 ,Shows this text: " Is that all you got? ".

2. If Score >= 4 && score <= 6 ,Shows this text: "You can do better!".

3. If score >= 7 ,Shows this text: "That is more like it!".

- The user also has a play again button to start the quiz over and maybe make a better score this time!

---

## Design Choices

---

---

## Wireframes

I used the website [Whimsical](https://whimsical.com/login) to make my wireframes.

---

### Phone view

---

![Phone Wireframe](https://github.com/Idehed/Project2/assets/146822758/1a986b1f-7f86-467c-b91e-e37b94eb888e)

### Computer view

---

![Computer Wireframe)](https://github.com/Idehed/Project2/assets/146822758/b0ed37bd-779b-4727-96e0-4a2bd4e350e3)

---

## Technologies used

### Languages

- [HTML](https://en.wikipedia.org/wiki/HTML )
- [CSS](https://en.wikipedia.org/wiki/CSS )
- [Javascript](https://en.wikipedia.org/wiki/JavaScript)

### Libraries & Frameworks

- [Google Fonts](https://fonts.google.com/)
- [Font Awesome library](https://fontawesome.com/)
- [Favicon](https://favicon.io/)

### Tools

- [Wireframes](https://whimsical.com/login)
- [W3C HTML Validation Service](https://validator.w3.org/ )
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/ )
- [JSHint JavaScript Validator](https://jshint.com/ )
- 

## Testing

- I tested this weste in 3 different browsers : Safari , Google Chrome, Firefox. All worked with no problem.
- Tested that the functions in the quiz works:
  
1. PLay button is taken you to the info section.
2. The continue button takes you to the quiz area.
3. When you press right/wrong answer the right color light up. And is shown the right answer even if wrong answer is pressed.
4. The next button takes you to the next question.
5. Question counter show the right number.
6. Timer is working. Goes from 10sec to 0sec and stops when answer is pressed. Also resets when a new question is shown.
7. When last question is answerd takes you to end of quiz section. Shows you how many right/wrong you had.
8. Play again button takes you to the start of quiz. And resets the score.

---

## Automated testing

- W3C CSS Validator: [Result](https://github.com/Idehed/Project2/assets/146822758/2ce7b5fa-390e-47af-9439-7a02877769c3)
- W3C HTML Validator: [Result](https://github.com/Idehed/Project2/assets/146822758/4ce161d0-0070-46e0-baa8-b84a287c7bd6)
- JSHint JavaScript Validator: [Result](https://github.com/Idehed/Greatskate-P1/assets/146822758/2cb39b8c-a726-41f3-ba34-a8a9301fcd6d)

---

### Lighthouse

Mobile

![Mobile](https://github.com/Idehed/Project2/assets/146822758/d583da72-240e-4fc9-a419-3167c3feacdf)

Desktop

![Desktop](https://github.com/Idehed/Project2/assets/146822758/d33f65dd-82ed-4cf4-b337-4e686ea62fef)

---

## Bugs

- I got this errors when I deployed my website.
- ![bug](https://github.com/Idehed/Greatskate-P1/assets/146822758/4b22dd8d-5b40-4a6d-b799-4192a2b76976)
- I fixed it by using import/export declaration.
- ![solution](https://github.com/Idehed/Greatskate-P1/assets/146822758/e215b659-c781-4f80-ae16-dbed137ec4e7)
- ![solution](https://github.com/Idehed/Greatskate-P1/assets/146822758/07d97220-70bf-4d00-8886-59ba226e265e)
- Found the solution from [stackoverflow.com](https://stackoverflow.com/)

---

## Credits

 I got some of my code from this youtube video. And some inspiration:

- [Youtube.com](https://www.youtube.com/watch?v=WUBhpSRS_fk&t=268s&ab_channel=CodingNepal)
  
I got my button from this website:

- [cssbuttons.app](https://cssbuttons.app/)
  
Questions to the quiz I got from:

- [play.howstuffworks.com](https://play.howstuffworks.com/quiz/the-ultimate-horror-movie-quiz)

Background image was taken from:

- [Unsplash](https://unsplash.com/)

---

## Deployment

---

1.Go to the Settings tab of your GitHub repo.

2.On the left-hand sidebar, in the Code and automation section, select Pages.

3.Make sure:
-Source is set to 'Deploy from Branch'.
-Main branch is selected.
-Folder is set to / (root).
-Under Branch, click Save.

4.Go back to the Code tab. Wait a few minutes for the build to finish and refresh your repo.

5.On the right-hand side, in the Environments section, click on 'github-pages'.

6.Click View deployment to see the live site.

The live link can be found here [live link](https://idehed.github.io/P1/)

---

## Acknowledgements

---

I would like to thank my mentor Ronan Mc for helping me through the whole process of making my first website!
I had some moments when I really got stuck and you really helped through it.
