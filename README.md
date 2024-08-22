# Easygames

<img src="./docs/easygames-shot.png" style="width: 70%">
<img src="./docs/swatgame-shot.png" style="width: 70%">

*A collection of simple, enjoyable browser-based games designed to entertain and challenge players of all ages.*

## Table of Contents

- [Overview](#overview)
- [User Experience (UX)](#user-experience-ux)
  - [User Stories](#user-stories)
  - [Design](#design)
    - [Color Scheme](#color-scheme)
    - [Typography](#typography)
    - [Imagery](#imagery)
  - [Wireframes](#wireframes)
- [Game Documentation](#game-documentation)
  - [Swat the Fly](#swat-the-fly)
- [Features](#features)
  - [Existing Features](#existing-features)
  - [Features Left to Implement](#features-left-to-implement)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
  - [Code Validation](#code-validation)
  - [Functionality Testing](#functionality-testing)
  - [Browser Compatibility](#browser-compatibility)
  - [Known Bugs](#known-bugs)
- [Deployment](#deployment)
- [Credits/Technologies Used](#Credits-Technologies-Used)

## Overview

**Easygames** is a platform offering a variety of lightweight, fun-filled games that you can play directly in your web browser. Designed for quick entertainment, each game on Easygames is easy to pick up and play, making it perfect for short breaks or casual gaming sessions. Whether you're looking to test your reflexes, challenge your high score, or simply enjoy a few minutes of distraction, Easygames provides an accessible and enjoyable gaming experience for everyone.

The current highlight of Easygames is **Swat the Fly**—a fast-paced game where players aim to swat flies as they randomly appear on the screen before the time runs out.

## User Experience (UX)

### User Stories - General Website

- As a **user**, I can access a Home page, so that I can get an overview of what Easygames offers.
- As a **user**, I can navigate using a clear and intuitive navigation bar, so that I can easily find my way around the website.
- As a **user**, I can visit an About page, so that I can learn more about the purpose and background of Easygames.
- As a **user**, I can explore a Games page, so that I can see a list of available games with brief descriptions and links to play each game.
- As a **user**, I can access a Suggest Game page, so that I can submit ideas for new games or features I would like to see added.
- As a **user**, I can see a footer on every page, so that I have quick access to important links and information like contact details and legal notices.
- As a **user**, I can see a favicon in my browser tab, so that I can easily identify the Easygames website when multiple tabs are open.

### Design

#### Color Scheme

- The website uses a consistent color scheme that is both playful and visually appealing, ensuring that each game is distinct yet part of the larger Easygames collection.

#### Typography

- I have built the website with Catamaran font from Google Fonts. All font weight was applied on the website.

#### Imagery

- Image was generated from Canva and credits are at the bottom of this page. Each game within Easygames uses unique imagery that fits its theme, enhancing the overall user experience. 

### Wireframes

Wireframes were created with Balsamiq to plan the layout of the Easygames platform and individual game pages.

- #### Home Page Large Screens

<img src="./docs/wireframe/homepage-large-screens.png" alt="Home Page Wire Frame Large" style="width: 60%">

- #### Home Page Mobile Screens

<img src="./docs/wireframe/homepage-mobile.png" alt="Home Page Wire Frame Mobile" style="width: 30%">

- #### Swat The Fly Homepage

<img src="./docs/wireframe/swat-game-start.png" alt="Swat The Fly Homepage" style="width: 70%">

- #### Swat The Fly Gameplay

<img src="./docs/wireframe/swat-game-inside.png" alt="Swat The Fly Gameplay" style="width: 70%">

## Game Documentation

### Swat the Fly

**Swat the Fly** is a quick-reflex game where players must swat as many flies as possible within a set time limit. The game is simple to play but challenging to master, making it a perfect addition to the Easygames collection.

#### User Stories

- **As a player**, I want to understand the game mechanics quickly so I can start playing right away.
- **As a player**, I want to hear a satisfying sound effect when I successfully swat a fly to enhance the experience.
- **As a player**, I want to be able to choose the game duration to match my desired level of challenge.
- **As a player**, I want the game to track my highest score so I can try to beat it in future sessions.
- **As a player**, I want the game to be visually appealing and responsive to create an enjoyable experience.

#### Features

- **Random Fly Movement**: Flies appear and move randomly across the screen, requiring quick reflexes to swat.
- **Custom Cursor**: The mouse cursor is replaced with a swatter image to enhance the gameplay experience.
- **Sound Effects**: A satisfying swatting sound plays each time a fly is hit, with background music adding to the immersion.
- **Customizable Timer**: Players can choose the countdown time before starting the game.
- **High Score Tracking**: The highest score is temporarily saved, allowing players to try and beat their previous best.

#### How to Play

1. Start the game by selecting a countdown timer.
2. Flies will appear randomly on the screen.
3. Use the swatter cursor to click on the flies as quickly as possible.
4. The game ends when the timer runs out, and your score is compared against the high score.

## Features

### Existing Features

- **Swat the Fly**: A fast-paced game with customizable settings and high score tracking.
- **Sound Effects and Music**: Engaging audio elements that enhance the user experience.
- **Customizable Settings**: Allow players to set their own game difficulty and timer.

### Features Left to Implement

- **New Games**: Additional games to be added to the Easygames collection.
- **Global Leaderboard**: Compare scores with other players worldwide.
- **Mobile Responsiveness**: Further enhancements to ensure all games are fully responsive across devices.

## Technologies Used

- **HTML5**: Structure of the games and platform.
- **CSS3**: Styling and responsive design.
- **JavaScript (ES6)**: Core game logic and interactivity.
- **GitHub Pages**: Deployment of the platform.

## Testing

### Code Validation

<img src="./docs/css-validation.png" style="width: 70%">

### Functionality Testing

- I have ran a console.log test and code is fine. Other manual test of game was also done by myself.

<img src="./docs/functionality-testing.png" style="width: 70%">

### Browser Compatibility

<img src="./docs/lighthouse-test.png" style="width: 70%">

### Known Bugs

- #### Swat the Fly Game Not Starting on Gitpod
The "Swat the Fly" game does not start when running on Gitpod, although it works fine on local environments like VS Code. This issue may be related to differences in how Gitpod handles file paths, scripts, or other environment-specific settings. Further investigation is needed to identify the root cause and implement a fix.

#### Solution: 
After removing some of the meta tags, the game started working correctly. The issue was isolated to a conflict with one or more of the meta tags. By reintroducing the essential meta tags one by one—specifically the description, keywords, and author tags—the game continued to function correctly. The issue may have been related to how Gitpod handled certain meta tags, affecting the loading or execution of the game.

- #### Fly Not Visible on Mobile Devices
On mobile devices, the fly element in the "Swat the Fly" game sometimes does not appear, even though the countdown timer and score are visible.

#### Solution: 
Fixed the issue by setting z-index of the fly image to 10.

## Deployment

Deployed on Github pages. Link https://easybulb.github.io/Easygames/index.html

## Credits/Technologies Used

- **HTML5**: For structuring the content on the web.
- **CSS3**: For styling the website.
- **Javascript**: For DOM Manipulation and functions.
- **TinyPNG**: For image optimization.
- **Git & GitHub**: For version control and hosting the project.
- **Canva**: For creating and optimizing images and graphics.
- **Chatgpt AI**: For project idea, images and code learning tips.
- **Favicon.io**: For Favicon generation.
- **Google Fonts**: For typography.

## Developer
- **Henry Ofodieze**
