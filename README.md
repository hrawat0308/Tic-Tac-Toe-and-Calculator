
# Tic Tac Toe Game and Calculator

This is a small Web App which includes a Tic Tac Toe Game and a Calculator. I have created this Web App using HTML, CSS , CSS-Grid, CSS-Flex and Java Script.

This website mainly contains 5 sections:

* Header Section
* Tic Tac Toe Game Section
* Calculator Section
* Overlay Section
* Footer Section 

When the page is loaded, initially the Calculator section and Overlay section is Hidden and will appear only under some conditions.
A toggle button is provided which will help to toggle between a Tic Tac Toe Game and Calculator.




## WHY this project was chosen?

My Main motive to work on this project was to hone my Java Script Skills. Both Calculator and Tic Tac Toe Game requires different functionalities, To implement these functionalities many different functions are created. 

This project includes DOM Manipulation, selecting different elements using Java Script, to hide and display a section on required conditions, Array Methods(forEach), working with Event Listeners, confetti etc.

## HOW did you make the project?

I've used HTML to structure the website. CSS to style the website and CSS-GRID and Flexbox to layout the website. Java Script is used to create Tic Tac Toe Game and Calculator's logic.

Confetti.js is used to give a beautifull animation which start's when a player wins the Game.
This website is created using VS CODE editor. This project doesn't include any database and working with API's.

Below is the link to this website which is hosted using Netlify : 

```
https://tictactoeandcalculator.netlify.app/
```


## WHAT features, technical things you had implemented?

Tic Tac Toe Game structurally is a simple box, which consists of 9 differed boxes which acts like a button. This layout is created using CSS-GRID and Flexbox. Inside Java Script, a 2D array of size 3 * 3 is created which represents the 9 boxes of Tic Toe Game. 

Wheneven user plays and click on a box, the value is updated on the corresponding index of our 2D array. Eveytime a user Click's on the box, few functions are also run to check if a player has Won or if the game is Draw. These functions check if user has won Horizontally, Vertically, Diagonally or AntiDiagonally.

When a user Win's the game, a beautifull animation start's. This animation is created with the help of confetti.js which can be downloaded from below link.

```
https://github.com/CoderZ90/confetti/blob/main/confetti.js
```
```
Download and save this file inside your project folder and add it as a script inside your index.html file.

To Start the Animation : confetti.start();
To Stop the Animation : confetti.stop();
```

Similar to our Game structure, Calculator also is a simple box which consists of several numeric and operator buttons created using CSS-GRID and Flexbox. The input String is taken from the Calculator's input area and is Evaluated using a Java Script's eval() function. The result is then output on the same input screen. 

I have also provided a toggle button, which switches between both the apps. It's helps to avoid multiple Web Pages, and makes it a lot simpler to use. It basically Hides and Display the section and changes the Heading content based on the App which you want to use. 

