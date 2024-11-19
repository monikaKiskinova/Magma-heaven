# Magma-heaven
JS Back-End exam preparation task @SoftUni

A Back-end application for a colection of volcanoes. 

Functionality: 
- visitors and users can view a collection of volcanoes;
- offers registration of users;
- registered users can create, edit, delete and vote for posts;

- the application implements route guards; data validation and shows error messages;


Views/Pages: 
- Home page - a static page with a welcome message;
- Register page - for logged out users only; registration with username, email and password;
- Login page - for registerer users; login with email and password; redirects to Home page (after successful login); 
- Create Volcano Wiki page - contains a form for adding new volcano posts;
- All volcanoes page - a list of all volcanoes posts with name location, volcano type, an image and a Details button that redirects to the details page;
- Details page - shows information about the chosen volcano: name, location, type,	elevation, year of last eruption, votes, description and buttons depending in the status of the currently logged in user (no button if user is not logged in, Edit and Delete buttons if user is the creator of the post, Vote button if user is not the creator);
- Edit Volcano Post page - the post's creator/owner can edit their volcano post;
- 404 page - shows for invalid path;


Technologies: 
- Javascript
- Node.js, ExpressJS
- Handlebars
- MongoDB (Atlas) with mongoose


  Implementation:
1. Initialize project
  - initialize node package;
  - install nodemon; 
  - add start and dev scripts;
  - add module type; 
  - add initial folder structure;
  - add debugging configuration; 
2. Set up Express
  - install and set up express; 
  - add resources; 
  - add modular routers;
3. Set up Handlebars
  - install handlebars; 
  - add and set view engine; 
  - add home view; 
  - configure static middleware; 
  - add layout; 
  - add dynamic title;
  - add 404 page;
4. Add database
  - install mongoose; 
  - connect to local database;
  - add .env variable file; 
  - add user model; 
5. Register
  - add Register Page
    - add template, 
    - userController, 
    - and render page on get;
  - add post action; 
    - add body parser, 
    - add user service; 
    - hash password
      - install bcrypt
    - confirm password;
    - check if user exists;
6. Login
  - install jsonwebtoken;
  - install cookie-parser; 
  - add cookie-parser middleware; 
  - convert jsonwebtoken to promise-based (in lib);
  - add login page; 
  - add login post action;
    - add user service login method;
    - generate jwt; 
    - return jwt with httpOnly cookie; 
  - add auto login after register;
7. Logout
  - clear cookie;
8. Error Handling
  - show error notification; 
  - add error message util; 
  - handle register and login errors; 
9. Authorization
  - add userAuth middleware; 
  - add route guard (add isAuthenticated middleware);
10. Dynamic navigation

11. Create Page
  - render create.hbs;
  - create Volcano model;
  - add volcano service;
  - error handling on post action; 
  - fix selected option for volcano type input; 
12. All volcanoes page
  - render all volcanoes page; 
  - add getAll in volcanoService;
  - details button; 
13. Details Page
  - render details.hbs;
  - edit and delete buttons visible to volcano owner; 
  - no buttons are visible if user is not logged in;
  - add vote functionality; 
  - vote count;
  - add delete button functionality;
  - add edit button functionality; 
    - render edit page; 
    - add selected volcano type; 
    - add selected volcano type partial;
    -add post action on edit;
