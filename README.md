# QUIZ node demo app (Express + WS + lowdb)

QUIZ app with questions about British culture. Example of using:
- [Express](https://expressjs.com/) - as a web framework
- [ws](https://github.com/websockets/ws) - websockets
- [lowdb](https://github.com/typicode/lowdb) - file database

## Installation

Clone repo and run:
```bash
npm install
```

## Setup

```bash
node app.js 
```
or more easy way with [nodemon](https://github.com/remy/nodemon)
```bash
nodemon app.js 
```

## Usage

There are 2 roles: players and admin.

Players open http://localhost:3000/

Admin opens http://localhost:3000/admin

Admin can change the current question by pressing Previous or Next buttons.

When Admin change the question it will be changed for all Players (thanks to websockets).

Questions are stored in slides.json file.

## Quiz answers

1. No word in the English language rhymes with: month, orange, silver or purple. **True**
1. Prime Minister Winston Churchill was born in the ladies’ toilet during a dance. **False**
1. French was once the official language for about 300 years in England. **True**
1. What percentage of people living in London were born outside of Great Britain? **A: 35%**
1. What is the real name of Big Ben? **B: Elizabeth Tower**
1. How many people were killed in the Great Fire of London in 1666? **C: 6**
1. Name the regions that make up the United Kingdom. **England, Scotland, Wales and Northern Ireland**
1. The two main political parties are? **Conservative Party and the Labour Party**
1. What is the capital city of Scotland? **Edinburgh**
1. **Ewan McGregor, Trainspotting**
1. **Emma Watson, Harry Potter and the Sorcerer's Stone**
1. **Daniel Craig, Casino Royale**
