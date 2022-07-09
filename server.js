const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

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

const characters = {
    //Class 1-A
    'yuga aoyama':{
        'name': 'Yuga Aoyama',
        'alias': 'Can\'t Stop Twinkling',
        'birthday': 'May 30',
        'gender': 'Male',
        'quirk': 'Navel Laser',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/a/a2/Yuga_Aoyama_Student_Uniform.png/revision/latest/scale-to-width-down/176?cb=20161230185513'

    },
    'mina ashido':{
        'name': 'Mina Ashido',
        'alias': 'Pinky',
        'birthday': 'July 30',
        'gender': 'Female',
        'quirk': 'Acid',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/0/05/Mina_Ashido_School_Uniform.png/revision/latest/scale-to-width-down/225?cb=20190129180054'
    },
    'tsuyu asui':{
        'name': 'Tsuyu Asui',
        'alias': 'Froppy',
        'birthday': 'February 12',
        'gender': 'Female',
        'quirk': 'Frog',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/d/dc/Tsuyu_Asui_School_Uniform.png/revision/latest/scale-to-width-down/192?cb=20160118114942'
    },
    'tenya ida':{
        'name': 'Tenya Ida',
        'alias': 'Ingenium',
        'birthday': 'August 22',
        'gender': 'Male',
        'quirk': 'Engine',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/e/ec/Tenya_Ida_School_Uniform.png/revision/latest/scale-to-width-down/174?cb=20190129175925'
    },
    'ochaco uraraka':{
        'name': 'Ochaco Uraraka',
        'alias': 'Uravity',
        'birthday': 'December 27',
        'gender': 'Female',
        'quirk': 'Zero Gravity',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/6/69/Ochaco_School_Uniform_Full_Body.png/revision/latest/scale-to-width-down/195?cb=20190215054343'
    },
    'mashirao ojiro':{
        'name': 'Mashirao Ojiro',
        'alias': 'Tailman',
        'birthday': 'May 28',
        'gender': 'Male',
        'quirk': 'Tail',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/0/09/Mashirao_Ojiro_Full_Body_Uniform.png/revision/latest/scale-to-width-down/239?cb=20161230191029'
    },
    'denki kaminari':{
        'name': 'Denki Kaminari',
        'alias': 'Chargebolt',
        'birthday': 'June 29',
        'gender': 'Male',
        'quirk': 'Electrification',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/b/bb/Denki_Kaminari.png/revision/latest/scale-to-width-down/189?cb=20190129015706',
    },
    'eihiro kirishima':{
        'name': 'Eijiro Kirishima',
        'alias': 'Red Riot',
        'birthday': 'October 16th',
        'gender': 'Male',
        'quirk': 'Hardening',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/3/3a/Eijiro_Kirishima_Student_Uniform_Profile.png/revision/latest/scale-to-width-down/167?cb=20190129175755'
    },
    'koji koda':{
        'name': 'Koji Koda',
        'alias': 'Anima',
        'birthday': 'February 1',
        'gender': 'Male',
        'quirk': 'Anivoice',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/2/20/Koji_Koda_Full_Body_Uniform.png/revision/latest/scale-to-width-down/210?cb=20161230192420'
    },
    'rikido sato':{
        'name': 'Rikido Sato',
        'alias': 'Sugarman',
        'birthday': 'June 19',
        'gender': 'Male',
        'quirk': 'Sugar Rush',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/c/c9/Rikido_Sato_Full_Body_Uniform.png/revision/latest/scale-to-width-down/163?cb=20161230192002'
    },
    'mezo shoji':{
        'name': 'Mezo Shoji',
        'alias': 'Tentacole',
        'birthday': 'February 15',
        'gender': 'Male',
        'quirk': 'Dupli-Arms',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/5/55/Mezo_Shoji_Full_Body_Uniform.png/revision/latest/scale-to-width-down/247?cb=20161230190626'
    },
    'kyoka jiro':{
        'name': 'Kyoka Jiro',
        'alias': 'Earphone Jack',
        'birthday': 'August 1',
        'gender': 'Female',
        'quirk': 'Earphone Jack',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/8c/Kyoka_Jiro_Full_Body_Uniform.png/revision/latest/scale-to-width-down/132?cb=20161230185934'
    },
    'hanta sero':{
        'name': 'Hanta Sero',
        'alias': 'Cellophane',
        'birthday': 'July 28',
        'gender': 'Male',
        'quirk': 'Tape',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/6/6c/Hanta_Sero_Full_Body_Uniform.png/revision/latest/scale-to-width-down/202?cb=20161230191259'
    },
    'fumikage tokoyami':{
        'name': 'Fumikage Tokoyami',
        'alias': 'Tsukuyomi',
        'birthday': 'October 30',
        'gender': 'Male',
        'quirk': 'Dark Shadow',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/b/ba/Fumikage_Tokoyami_Uniform.png/revision/latest/scale-to-width-down/162?cb=20200519142933'
    },
    'shoto todoroki':{
        'name': 'Shoto Todoroki',
        'alias': 'Shoto',
        'birthday': 'January 11',
        'gender': 'Male',
        'quirk': 'Half-Cold Half-hot',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/c/c4/Shoto_Todoroki_school_profile.png/revision/latest/scale-to-width-down/173?cb=20170728153443'
    },
    'toru hagakure':{
        'name': 'Toru Hagakure',
        'alias': 'Invisible Girl',
        'birthday': 'June 16',
        'gender': 'Female',
        'quirk': 'Invisibility',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/8f/Toru_Hagakure_Full_Body_Uniform.png/revision/latest/scale-to-width-down/196?cb=20161230191807'
    },
    'katsuki bakugo':{
        'name': 'Katsuki Bakugo',
        'alias': 'Great Explosion Murder God Dynamight',
        'birthday': 'April 20',
        'gender': 'Male',
        'quirk': 'Explosion',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/83/Katsuki_Bakugo_School_Uniform_Full_Body.png/revision/latest/scale-to-width-down/196?cb=20190812065435'
    },
    'izuku midoriya':{
        'name': 'Izuku Midoriya',
        'alias': 'Deku',
        'birthday': 'July 15',
        'gender': 'Male',
        'quirk': 'One For All',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/d/d9/Izuku_Midoriya_school_profile.png/revision/latest/scale-to-width-down/145?cb=20190129015623'
    },
    'minoru mineta':{
        'name': 'Minoru Mineta',
        'alias': 'Grape Juice',
        'birthday': 'October 8',
        'gender': 'Male',
        'quirk': 'Pop Off',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/6/66/Minoru_Mineta_Full_Body_School_Uniform_Anime.png/revision/latest?cb=20160118115800'
    },
    'momo yaoyorozu':{
        'name': 'Momo Yaoyorozu',
        'alias': 'Creati',
        'birthday': 'September 23',
        'gender': 'Female',
        'quirk': 'Creation',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/e/eb/Momo_Yaoyorozu_Full_Body_School_Uniform.png/revision/latest/scale-to-width-down/136?cb=20210417110718'
    },
    'unknown':{
        'name': 'unknown',
        'alias': 'unknown',
        'birthday': 'unknown',
        'gender': 'unknown',
        'quirk': 'unknown',
        'affiliation': 'unknown',
        'photo': '#'
    },
}