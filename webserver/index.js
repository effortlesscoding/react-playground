const express = require('express');
const app = express();
const port = 3020;
const bodyParser = require('body-parser');


app.use(bodyParser.json());

const validCredentials = [
    ['ts', '123', 'asdfasdfasdfasdfdsaf', { firstName: 'Test user', lastName: 'Junior'}],
]

var authMiddleware = function (req, res, next) {
    const authorizationHeader = req.headers.authorization || req.headers.Authorization;
    const authToken = authorizationHeader.split(' ')[1];
    const match = validCredentials.find((combo) => combo[2] === authToken); 
    if (!match) {
        return res.status(401).send({ errorMessage: 'Unauthenticated' });
    }
    req.user = match; 
    try {
        next();
    } catch (e) {
        return res.status(500).send({ e });
    }
  }


app.post('/api/authentication', (req, res) => {
    const match = validCredentials.find((combo) => combo[0] === req.body.username && combo[1] === req.body.password); 
    if (!match) {
        return res.status(401).send({ errorMessage: 'Not vaild username/password' });
    }
    return res.status(200).send({ authToken: match[2] });
});

app.get('/api/profile', authMiddleware, (req, res) => {
    res.send(req.user[3]);
});

app.put('/api/profile', authMiddleware, (req, res) => {
    const profile = req.user[3];
    if (req.body.firstName !== undefined) {
        profile.firstName = req.body.firstName;
    }
    if (req.body.lastName !== undefined) {
        profile.lastName = req.body.lastName;
    }
    return res.status(200).send({ profile });
});

app.get('/api/healthcheck', (req, res) => {
    return res.status(200).send('OK');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});