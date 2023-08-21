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

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://rock-paper-scissors-tommy.netlify.app/)

## My process

Like always, I tried breaking everything down to components from the mockups. Started with the header down to the triangle of choices then moved onto the next page. Finished the mobile version first and made sure all styling was correct. I then moved on to the tablet/desktop and refactored any code at the end.

### Built with

- [React](https://reactjs.org/) - JS library
- [FramerMotion](https://www.framer.com/motion/) - For Animations
- [TailwindCSS](https://tailwindcss.com/) - For styles
- Flexbox
- Mobile-first workflow

### What I learned

This was my first typescript project, I ran into a lot of issues not being able to properly set correct types to my functions and props. Over time it became a lot more easier to at least understant what typescript is and how to use it. A question I asked myself while working on this project was "When creating interfaces in parent components is it better to create one interface for all props/functions then pass it down, or is it better to create separate interfaces for each child component?". It basically came down to, how the project is setup and and list of other factors. 

Also learned that it's always better to refactor code after your finished, not before. I ended losing quite a bit of time having to refactor my refactored code half way through the project.

Adding linear gradient colors to borders was also weird due to tailwind. 

#### TLDR:
- Learned how to use interfaces properly (hopefully lol)
- Using typescript with useStates
- Refactor code after you finish not before
- Seperate interfaces into a seperate file to keep code clean
- Learned a bit about framer motion, enhancing user experience

### Continued development

- Implement Lizard and Spock options
- Was also thinking about adding a betting option, so you would place a bet then choose rock, paper, or scissors etc.
- Since there's betting also add something the user can buy
- Auth to save money progress

## Connect with me!

- Website - [Tommy Nguyen](https://tommy-js.com/)
- Frontend Mentor - [@TommieeN](https://www.frontendmentor.io/profile/TommieeN)
- LinkedIn - [Tommy Nguyen](https://www.linkedin.com/in/tommy-nguyenn/)

