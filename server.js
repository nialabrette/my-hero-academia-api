const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const characters = {
    'izuku midoriya':{
        'age': 14,
        'hero name': 'Deku',
        'quirk': 'One For All',
    },   
    'katsuki bakugo':{
        'age': 14,
        'hero name': 'Dynamight',
        'quirk': 'Explosion',
    },
    'unknown':{
        'age': 'unknown',
        'hero name': 'unknown',
        'quirk': 'unknown',
    } 
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:characterName', (request, response) => {
    const characterName = request.params.characterName.toLowerCase()
    if(characters[characterName]){
        response.json(characters[characterName])
    }else {
        response.json('unknown')
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})