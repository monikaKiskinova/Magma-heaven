# Magma-heaven
JS Back-End exam preparation task @SoftUni

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