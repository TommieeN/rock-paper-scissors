# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Screenshot

<img width="1440" alt="Screenshot 2023-08-21 at 4 15 52 PM" src="https://github.com/TommieeN/rock-paper-scissors/assets/123577810/7e13d388-f277-4f9a-b0b9-fe492a8cfc74">

<img width="324" alt="Screenshot 2023-08-21 at 4 16 23 PM" src="https://github.com/TommieeN/rock-paper-scissors/assets/123577810/9bc28de5-1e0f-47eb-a5ba-c1525d320d81">

### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/rock-paper-scissors-typescript-react-tailwindcss-and-framermotion-Q3KLoU_J9k)
- Live Site URL: [Deployment](https://rock-paper-scissors-tommy.netlify.app/)

## My process

Like always, I tried breaking everything down to components from the mockups. Started with the header down to the triangle of choices then moved onto the next page. Finished the mobile version first and made sure all styling was correct. I then moved on to the tablet/desktop and refactored any code at the end.

### Built with

- [React](https://reactjs.org/) - JS library
- [FramerMotion](https://www.framer.com/motion/) - For Animations
- [TailwindCSS](https://tailwindcss.com/) - For styles
- Flexbox
- Mobile-first workflow

### What I learned

This was my first TypeScript project, and I faced numerous challenges while trying to assign accurate types to my functions and props. Over time, however, understanding TypeScript and its usage became much easier. One question that frequently crossed my mind during this project was, "Should I create a single interface for all props/functions in the parent component and pass it down? Or is it more effective to develop separate interfaces for each child component?" The answer largely depended on the project's structure and a range of other factors.

I also learned the value of refactoring code after its completion, rather than before. I found myself spending a considerable amount of time reworking my refactored code midway through the project.

Adding linear gradient colors to borders was also weird due to tailwind. 

#### TLDR:
- Learned how to use interfaces properly (hopefully lol)
- Using typescript with useStates
- Refactor code after you finish not before
- Seperate interfaces into a seperate file to keep code clean
- Learned a bit about framer motion, enhancing user experience

### Continued development

- Implement Lizard and Spock options
- Was also thinking about adding a form of currency so you can bet if you win.
- Since there's betting maybe add something the user can buy
- Auth to save money progress

## Connect with me!

- Website - [Tommy Nguyen](https://tommy-js.com/)
- Frontend Mentor - [@TommieeN](https://www.frontendmentor.io/profile/TommieeN)
- LinkedIn - [Tommy Nguyen](https://www.linkedin.com/in/tommy-nguyenn/)

