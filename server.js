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
    //UA Staff
    'nezu':{
        'name': 'Nezu',
        'alias': 'None',
        'birthday': 'January 1',
        'gender': 'Male',
        'quirk': 'High Spec',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/1/11/Nezu_Principle_Uniform_%28Anime%29.png/revision/latest?cb=20160531230249'
    },
    'chiyo shuzenji':{
        'name': 'Chiyo Shuzenji',
        'alias': 'Recovery Girl',
        'birthday': 'April 4',
        'gender': 'Female',
        'quirk': 'Heal',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/6/65/Chiyo_Shuzenji_Work_Uniform_%28Anime%29.png/revision/latest/scale-to-width-down/328?cb=20190627130624'
    },
    'anan kurose':{
        'name': 'Anan Kurose',
        'alias': 'Thirteen',
        'birthday': 'February 3',
        'gender': 'Female',
        'quirk': 'Black Hole',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/0/06/Thirteen_Hero_Costume_%28Anime%29.png/revision/latest/scale-to-width-down/280?cb=20160531225836'
    },
    'ryo inui':{
        'name': 'Ryo Inui',
        'alias': 'Hound Dog',
        'birthday': 'November 15',
        'gender': 'Male',
        'quirk': 'Dog',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/0/06/Ryo_Inui_Hero_Costume_%28Anime%29.png/revision/latest/scale-to-width-down/350?cb=20200321195126'
    },

    //UA High Teachers
    'toshinori yagi':{
        'name': 'Toshinori Yagi',
        'alias': 'All Might',
        'birthday': 'June 10',
        'gender': 'Male',
        'quirk': 'Quirkless',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/c/cd/Toshinori_Yagi_Golden_Age_Hero_Costume_%28Anime%29.png/revision/latest/scale-to-width-down/311?cb=20190129015644'
    },
    'shota aizawa':{
        'name': 'Shota Aizawa',
        'alias': 'Eraser Head',
        'birthday': 'November 8',
        'gender': 'Male',
        'quirk': 'Erasure',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/82/Shota_Aizawa_Hero_Costume_%28Anime%29.png/revision/latest/scale-to-width-down/143?cb=20160521035900'
    },
    'hizashi yamada':{
        'name': 'Hizashi Yamada',
        'alias': 'Present Mic',
        'birthday': 'July 7',
        'gender': 'Male',
        'quirk': 'Voice',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/6/64/Hizashi_Yamada_Hero_Costume_%28Anime%29.png/revision/latest/scale-to-width-down/274?cb=20190520065131'
    },
    'ken ishiyama':{
        'name': 'Ken Ishiyama',
        'alias': 'Cementoss',
        'birthday': 'March 22',
        'gender': 'Male',
        'quirk': 'Cement',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/0/06/Ken_Ishiyama_Hero_Costume_%28Anime%29.png/revision/latest/scale-to-width-down/229?cb=20180627202314'
    },
    'nemuri kayama':{
        'name': 'Nemuri Kayama',
        'alias': 'Midnight',
        'birthday': 'March 9',
        'gender': 'Female',
        'quirk': 'Somnambulist',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/7/7c/Nemuri_Kayama_Hero_Costume_%28Anime%29.png/revision/latest/scale-to-width-down/350?cb=20220317095349'
    },
    'ectoplasm':{
        'name': 'Ectoplasm',
        'alias': 'None',
        'birthday': 'March 23',
        'gender': 'Male',
        'quirk': 'Clones',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/1/15/Ectoplasm_Hero_Costume_%28Anime%29.png/revision/latest/scale-to-width-down/276?cb=20170909221034'
    },
    'sekijiro kan':{
        'name': 'Sekijiro Kan',
        'alias': 'Vlad King',
        'birthday': 'November 10',
        'gender': 'Male',
        'quirk': 'Blood Control',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/3/3c/Sekijiro_Kan_Hero_Costume_%28Anime%29.png/revision/latest/scale-to-width-down/250?cb=20180419173218'
    },
    'sorahiko torino':{
        'name': 'Sorahiko Torino',
        'alias': 'Gran Torino',
        'birthday': 'January 28',
        'gender': 'Male',
        'quirk': 'Jet',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/4/4e/Sorahiko_Torino_Hero_Costume_%28Anime%29.png/revision/latest/scale-to-width-down/350?cb=20170820191302'
    },
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
    //Class 1-B
    'yosetsu awase':{
        'name': 'Yosetsu Awase',
        'alias': 'Welder',
        'birthday': 'November 7',
        'gender': 'Male',
        'quirk': 'Weld',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/e/ee/Yosetsu_Awase_PE_Uniform.png/revision/latest/scale-to-width-down/154?cb=20181020201427'
    },
    'sen kaibara':{
        'name': 'Sen Kaibara',
        'alias': 'Spiral',
        'birthday': 'June 12',
        'gender': 'Male',
        'quirk': 'Gyrate',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/f/ff/Sen_Kaibara_PE_Uniform.png/revision/latest/scale-to-width-down/154?cb=20181020230751'
    },
    'togaru kamakiri':{
        'name': 'Togaru Kamakiri',
        'alias': 'Jack Mantis',
        'birthday': 'January 7',
        'gender': 'Male',
        'quirk': 'Razor Sharp',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/8b/Togaru_Kamakiri_PE_Uniform.png/revision/latest/scale-to-width-down/156?cb=20181127090627'
    },
    'shihai kuroiro':{
        'name': 'Shihai Kuroiro',
        'alias': 'Vantablack',
        'birthday': 'November 1',
        'gender': 'Male',
        'quirk': 'Black',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/e/e7/Shihai_Kuroiro_PE_Uniform.png/revision/latest/scale-to-width-down/143?cb=20181020225723'
    },
    'itsuka kendo':{
        'name': 'Itsuka Kendo',
        'alias': 'Battle Fist',
        'birthday': 'September 9',
        'gender': 'Female',
        'quirk': 'Big Fist',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/1/16/Itsuka_Kendo_PE_Uniform.png/revision/latest/scale-to-width-down/161?cb=20180506172637'
    },
    'yui kodai':{
        'name': 'Yui Kodai',
        'alias': 'Rule',
        'birthday': 'December 19',
        'gender': 'Female',
        'quirk': 'Size',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/a/a8/Yui_Kodai_PE_Uniform.png/revision/latest/scale-to-width-down/150?cb=20181020225434'
    },
    'kinoko komori':{
        'name': 'Kinoko Komori',
        'alias': 'Shemage',
        'birthday': 'December 2',
        'gender': 'Female',
        'quirk': 'Mushroom',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/b/b9/Kinoko_Komori_Anime_Profile.png/revision/latest/scale-to-width-down/157?cb=20181020230014'
    },
    'ibara shiozaki':{
        'name': 'Ibara Shiozaki',
        'alias': 'Vine',
        'birthday': 'September 8',
        'gender': 'Female',
        'quirk': 'Vines',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/b/bd/Ibara_Shiozaki_PE_Uniform.png/revision/latest/scale-to-width-down/234?cb=20170717233429'
    },
    'jurota shishida':{
        'name': 'Jurota Shishida',
        'alias': 'Gevaudan',
        'birthday': 'March 26',
        'gender': 'Male',
        'quirk': 'Beast',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/b/be/Jurota_Shishida_PE_Uniform.png/revision/latest/scale-to-width-down/178?cb=20181020224027'
    },
    'nirengeki shoda':{
        'name': 'Nirengeki Shoda',
        'alias': 'Mines',
        'birthday': 'February 2',
        'gender': 'Male',
        'quirk': 'Twin Impact',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/0/0c/Nirengeki_Shoda_PE_Uniform.png/revision/latest/scale-to-width-down/177?cb=20181020225139'
    },
    'pony tsunotori':{
        'name': 'Pony Tsunotori',
        'alias': 'Rocketti',
        'birthday': 'April 21',
        'gender': 'Female',
        'quirk': 'Horn Cannon',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/83/Pony_Tsunotori_Anime_Profile.png/revision/latest/scale-to-width-down/106?cb=20181020201147'
    },
    'kosei tsuburaba':{
        'name': 'Kosei Tsuburaba',
        'alias': 'Tsuburaba',
        'birthday': 'May 19',
        'gender': 'Male',
        'quirk': 'Solid Air',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/f/f0/Kosei_Tsuburaba_PE_Uniform.png/revision/latest/scale-to-width-down/189?cb=20181020224552'
    },
    'tetsutetsu tetsutetsu':{
        'name': 'Tetsutetsu Tetsutetsu',
        'alias': 'Real Steel',
        'birthday': 'October 16',
        'gender': 'Male',
        'quirk': 'Steel',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/8d/Tetsutetsu_Tetsutetsu_PE_Uniform.png/revision/latest/scale-to-width-down/213?cb=20181020200441'
    },    
    'setsuna tokage':{
        'name': 'Setsuna Tokage',
        'alias': 'Lizardy',
        'birthday': 'October 13',
        'gender': 'Female',
        'quirk': 'Lizard Tail Splitter',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/0/0a/Setsuna_Tokage_PE_Uniform.png/revision/latest/scale-to-width-down/202?cb=20180724195509'
    },
    'manga fukidashi':{
        'name': 'Manga Fukidashi',
        'alias': 'Comicman',
        'birthday': 'February 2',
        'gender': 'Male',
        'quirk': 'Comic',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/0/03/Manga_Fukidashi_PE_Uniform.png/revision/latest/scale-to-width-down/199?cb=20181020230258'
    },
    'juzo honenuki':{
        'name': 'Juzo Honenuki',
        'alias': 'Mudman',
        'birthday': 'June 20',
        'gender': 'Male',
        'quirk': 'Softening',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/3/34/Juzo_Honenuki_PE_Uniform.png/revision/latest/scale-to-width-down/204?cb=20181020224856'
    },
    'kojiro bondo':{
        'name': 'Kojiro Bondo',
        'alias': 'Plamo',
        'birthday': 'December 23',
        'gender': 'Male',
        'quirk': 'Cemedine',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/1/1c/Kojiro_Bondo_PE_Uniform.png/revision/latest/scale-to-width-down/228?cb=20181020231310'
    },
    'neito monoma':{
        'name': 'Neito Monoma',
        'alias': 'Phantom Thief',
        'birthday': 'May 13',
        'gender': 'Male',
        'quirk': 'Copy',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/8e/Neito_Monoma_PE_Uniform.png/revision/latest/scale-to-width-down/142?cb=20180723231810'
    },
    'hiryu rin':{
        'name': 'Hiryu Rin',
        'alias': 'Long Weizi',
        'birthday': 'July 14',
        'gender': 'Male',
        'quirk': 'Scales',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/b/b9/Hiryu_Rin_PE_Uniform.png/revision/latest/scale-to-width-down/194?cb=20181020224305'
    },
    'reiko yanagi':{
        'name': 'Reiko Yanagi',
        'alias': 'Emily',
        'birthday': 'February 11',
        'gender': 'Female',
        'quirk': 'Poltergeist',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/83/Reiko_Yanagi_PE_Uniform.png/revision/latest/scale-to-width-down/125?cb=20181020231545'
    },
    //The Big 3
    'mirio togata':{
        'name': 'Mirio Togata',
        'alias': 'Lemillion',
        'birthday': 'July 15',
        'gender': 'Male',
        'quirk': 'Permeation',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/6/62/Mirio_Togata_Anime.png/revision/latest/scale-to-width-down/202?cb=20190129180038'
    },
    'nejire hado':{
        'name': 'Nejire Hado',
        'alias': 'Nejire Chan',
        'birthday': 'October 6',
        'gender': 'Female',
        'quirk': 'Wave Motion',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/9/97/Nejire_Hado_Anime.png/revision/latest/scale-to-width-down/218?cb=20180921144134'
    },
    'tamaki amajiki':{
        'name': 'Tamaki Amajiki',
        'alias': 'Suneater',
        'birthday': 'March 4',
        'gender': 'Male',
        'quirk': 'Manifest',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/83/Tamaki_Amajiki_Anime.png/revision/latest/scale-to-width-down/180?cb=20181026042720'
    },
    //Other UA students
    'hitoshi shinso':{
        'name': 'Hitoshi Shinso',
        'alias': 'None',
        'birthday': 'July 1',
        'gender': 'Male',
        'quirk': 'Brainwashing',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/3/30/Hitoshi_Shinso_Anime_Profile.png/revision/latest/scale-to-width-down/218?cb=20170717225400'
    },
    'mei hatsume':{
        'name': 'Mei Hatsume',
        'alias': 'None',
        'birthday': 'April 18',
        'gender': 'Female',
        'quirk': 'Zoom',
        'affiliation': 'UA High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/e/ea/Post-War_Mei_Hatsume.png/revision/latest/scale-to-width-down/195?cb=20220111160826'
    },
    //Other Schools
    'yo shindo':{
        'name': 'Yo Shindo',
        'alias': 'Grand',
        'birthday': 'May 13',
        'gender': 'Male',
        'quirk': 'Vibrate',
        'affiliation': 'Ketsubutsu Academy High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/1/12/Yo_Shindo_Profile.png/revision/latest/scale-to-width-down/167?cb=20180725152346'
    },
    'tatami nakagame':{
        'name': 'Tatami Nakagame',
        'alias': 'Turtle Neck',
        'birthday': 'January 23',
        'gender': 'Female',
        'quirk': 'Telescopic',
        'affiliation': 'Ketsubutsu Academy High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/a/a9/Tatami_Nakagame_Hero_Costume.png/revision/latest/scale-to-width-down/204?cb=20181225203615'
    },
    'emi fukukado':{
        'name': 'Emi Fukukado',
        'alias': 'Ms. Joke',
        'birthday': 'February 5',
        'gender': 'Female',
        'quirk': 'Outburst',
        'affiliation': 'Ketsubutsu Academy High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/5/5e/Emi_Fukukado_Anime_Hero_Costume.png/revision/latest/scale-to-width-down/223?cb=20180720133517'
    },
    'inasa yoarashi':{
        'name': 'Inasa Yoarashi',
        'alias': 'Gale Force',
        'birthday': 'September 26',
        'gender': 'Male',
        'quirk': 'Whirlwind',
        'affiliation': 'Shiketsu High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/3/3b/Inasa_Yoarashi_Anime_Hero_Costume.png/revision/latest/scale-to-width-down/294?cb=20180708193353'
    },
    'camie utsushimi':{
        'name': 'Camie Utsushimi',
        'alias': 'Illus-o-Camie',
        'birthday': 'August 15',
        'gender': 'Female',
        'quirk': 'Glamour',
        'affiliation': 'Shiketsu High School',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/5/51/Camie_Utsushimi_Anime_Costume.png/revision/latest/scale-to-width-down/212?cb=20180913235056'
    },
    //Pro Heros
    'enji todoroki':{
        'name': 'Enji Todoroki',
        'alias': 'Endeavor',
        'birthday': 'August 8',
        'gender': 'Male',
        'quirk': 'Hellflame',
        'affiliation': 'Pro Hero',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/a/a6/Enji_Todoroki_Second_Hero_Costume_%28Anime%29.png/revision/latest/scale-to-width-down/250?cb=20210722002115'
    },
    'keigo takami':{
        'name': 'Keigo Takami',
        'alias': 'Hawks',
        'birthday': 'December 28',
        'gender': 'Male',
        'quirk': 'Fierce Wings',
        'affiliation': 'Pro Hero',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/e/e2/Keigo_Takami_Hero_Costume_%28Anime%29.png/revision/latest/scale-to-width-down/348?cb=20210722195242'
    },
    'tsunagu hakamada':{
        'name': 'Tsunagu Hakamada',
        'alias': 'Best Jeanist',
        'birthday': 'October 5',
        'gender': 'Male',
        'quirk': 'Fiber Master',
        'affiliation': 'Pro Hero',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/e/e4/Tsunagu_Hakamada_Second_Hero_Costume.png/revision/latest/scale-to-width-down/168?cb=20210214053955'
    },
    'shinya kamihara':{
        'name': 'Shinya Kamihara',
        'alias': 'Edgeshot',
        'birthday': 'February 22',
        'gender': 'Male',
        'quirk': 'Foldabody',
        'affiliation': 'Pro Hero',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/d/d4/Shinya_Kamihara_Hero_Costume_%28Anime%29.png/revision/latest/scale-to-width-down/262?cb=20180521222013'
    },
    'rumi usagiyama':{
        'name': 'Rumi Usagiyama',
        'alias': 'Mirko',
        'birthday': 'March 1',
        'gender': 'Female',
        'quirk': 'Rabbit',
        'affiliation': 'Pro Hero',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/b/b7/Post-War_Rumi_Usagiyama_Hero_Costume.png/revision/latest/scale-to-width-down/295?cb=20220327194505'
    },
    'shinji nishiya':{
        'name': 'Shinji Nishiya',
        'alias': 'Kamui Woods',
        'birthday': 'May 20',
        'gender': 'Male',
        'quirk': 'Arbor',
        'affiliation': 'Pro Hero',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/6/6a/Shinji_Nishiya_Second_Hero_Costume.png/revision/latest/scale-to-width-down/194?cb=20191122194330'
    },
    'susugu mitarai':{
        'name': 'Susugu Mitarai',
        'alias': 'Wash',
        'birthday': 'December 18',
        'gender': 'Male',
        'quirk': 'Clean Bubbler',
        'affiliation': 'Pro Hero',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/2/2f/Wash_Hero_Costume_%28Anime%29.png/revision/latest/scale-to-width-down/350?cb=20200328155718'
    },
    'ryuko tatsuma':{
        'name': 'Ryuko Tatsuma',
        'alias': 'Ryukyu',
        'birthday': 'September 22',
        'gender': 'Female',
        'quirk': 'Dragon',
        'affiliation': 'Pro Hero',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/2/20/Ryuko_Tatsuma_Hero_Costume_%28Anime%29.png/revision/latest/scale-to-width-down/198?cb=20211206211456'
    },
    'kugo sakamata':{
        'name': 'Kugo Sakamata',
        'alias': 'Gang Orca',
        'birthday': 'October 29',
        'gender': 'Male',
        'quirk': 'Orcinus',
        'affiliation': 'Pro Hero',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/7/71/Kugo_Sakamata_Hero_Costume_%28Anime%29.png/revision/latest/scale-to-width-down/304?cb=20180521222446'
    },
    'yu takeyama':{
        'name': 'Yu Takeyama',
        'alias': 'Mt. Lady',
        'birthday': 'August 11',
        'gender': 'Female',
        'quirk': 'Gigantification',
        'affiliation': 'Pro Hero',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/5/5c/Yu_Takeyama_Hero_Costume_%28Anime%29.png/revision/latest/scale-to-width-down/201?cb=20200602025623'
    },
    'taishiro toyomitsu':{
        'name': 'Taishiro Toyomitsu',
        'alias': 'Fat Gum',
        'birthday': 'August 8',
        'gender': 'Male',
        'quirk': 'Fat Absorption',
        'affiliation': 'Pro Hero',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/6/63/Taishiro_Toyomitsu_Hero_Costume_%28Anime%29.png/revision/latest/scale-to-width-down/334?cb=20190805011021'
    },
    'ken takagi':{
        'name': 'Ken Takagi',
        'alias': 'Rock Lock',
        'birthday': 'June 9',
        'gender': 'Male',
        'quirk': 'Lock Down',
        'affiliation': 'Pro Hero',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/d/da/Ken_Takagi_Hero_Costume_%28Anime%29.png/revision/latest/scale-to-width-down/150?cb=20220319084111'
    },
    'tomoko shiretoko':{
        'name': 'Tomoko Shiretoko',
        'alias': 'Ragdoll',
        'birthday': 'April 8',
        'gender': 'Female',
        'quirk': 'Quirkless',
        'affiliation': 'Wild, Wild Pussycats',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/9/90/Post-War_Tomoko_Shiretoko.png/revision/latest/scale-to-width-down/281?cb=20220127050253'
    },
    'yawara chatora':{
        'name': 'Yawara Chatora',
        'alias': 'Tiger',
        'birthday': 'February 29',
        'gender': 'Male',
        'quirk': 'Pliabody',
        'affiliation': 'Wild, Wild Pussycats',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/0/0d/Yawara_Chatora_Hero_Costume_%28Anime%29.png/revision/latest/scale-to-width-down/235?cb=20180212134514'
    },
    'ryuko tsuchikawa':{
        'name': 'Ryuko Tsuchikawa',
        'alias': 'Pixie-Bob',
        'birthday': 'June 26',
        'gender': 'Female',
        'quirk': 'Earth Flow',
        'affiliation': 'Wild, Wild Pussycats',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/82/Ryuko_Tsuchikawa_Hero_Costume_%28Anime%29.png/revision/latest/scale-to-width-down/242?cb=20180212134554'
    },
    'shino sosaki':{
        'name': 'Shino Sosaki',
        'alias': 'Mandalay',
        'birthday': 'May 1',
        'gender': 'Female',
        'quirk': 'Telepath',
        'affiliation': 'Wild, Wild Pussycats',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/6/61/Shino_Sosaki_Hero_Costume_%28Anime%29.png/revision/latest/scale-to-width-down/244?cb=20180212134618'
    },
    'mirai sasaki':{
        'name': 'Mirai Sasaki',
        'alias': 'Sir Nighteye',
        'birthday': 'January 2',
        'gender': 'Male',
        'quirk': 'Foresight',
        'affiliation': 'Pro Hero',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/a/a6/Sir_Nighteye_Anime.png/revision/latest/scale-to-width-down/137?cb=20190617073406'
    },
    'kaoruko awata':{
        'name': 'Kaoruko Awata',
        'alias': 'Bubble Girl',
        'birthday': 'April 23',
        'gender': 'Female',
        'quirk': 'Bubble',
        'affiliation': 'Pro Hero - Sidekick',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/1/19/Bubble_Girl_Anime.png/revision/latest/scale-to-width-down/228?cb=20190617073711'
    },
    //Villains
    'kai chisaki':{
        'name': 'Kai Chisaki',
        'alias': 'Overhaul',
        'birthday': 'March 20',
        'gender': 'Male',
        'quirk': 'Overhaul',
        'affiliation': 'Yakuza - Shie Hassaikai',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/4/4d/Kai_Chisaki_Anime_Action.png/revision/latest/scale-to-width-down/202?cb=20191030164007'
    },
    'chizome akaguro':{
        'name': 'Chizome Akaguro',
        'alias': 'Stain',
        'birthday': 'June 14',
        'gender': 'Male',
        'quirk': 'Bloodcurdle',
        'affiliation': 'Villain',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/9/9c/Stain_Anime_Profile.png/revision/latest/scale-to-width-down/287?cb=20170717012325'
    },
    'danjuro tobita':{
        'name': 'Danjuro Tobita',
        'alias': 'Gentle Criminal',
        'birthday': 'August 29',
        'gender': 'Male',
        'quirk': 'Elasticity',
        'affiliation': 'Villain',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/0/05/Danjuro_Tobita_Anime_Profile.png/revision/latest/scale-to-width-down/350?cb=20200208100618'
    },
    'manami aiba':{
        'name': 'Manami Aiba',
        'alias': 'La Brava',
        'birthday': 'February 14',
        'gender': 'Female',
        'quirk': 'Love',
        'affiliation': 'Villain',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/7/76/Manami_Aiba_Anime_Profile.png/revision/latest/scale-to-width-down/350?cb=20200208100313'
    },
    //League of Villains
    'goto imasuji':{
        'name': 'Goto Imasuji',
        'alias': 'Jailbreaker',
        'birthday': 'December 7',
        'gender': 'Male',
        'quirk': 'Pump Up',
        'affiliation': 'League of Villains',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/7/70/Muscular_anime_profile.png/revision/latest/scale-to-width-down/294?cb=20180212134717'
    },
    'all for one':{
        'name': 'All For One',
        'alias': 'None',
        'birthday': 'Unknown',
        'gender': 'Male',
        'quirk': 'All For One',
        'affiliation': 'League of Villains',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/2/2b/All_For_One%27s_current_mask.png/revision/latest/scale-to-width-down/350?cb=20220308025759'
    },
    'tomura shigaraki':{
        'name': 'Tomura Shigaraki',
        'alias': 'Real Name-Tenko Shimura',
        'birthday': 'April 4',
        'gender': 'Male',
        'quirk': 'Decay',
        'affiliation': 'League of Villains',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/4/45/Tomura_Shigaraki_Anime_Action.png/revision/latest/scale-to-width-down/212?cb=20210710091348'
    },
    'kurogiri':{
        'name': 'Kurogiri',
        'alias': 'None',
        'birthday': 'Unknown',
        'gender': 'Male',
        'quirk': 'Warp Gate',
        'affiliation': 'League of Villains',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/2/23/Kurogiri_Anime_Profile.png/revision/latest/scale-to-width-down/159?cb=20220128084527'
    },
    'gigantomachia':{
        'name': 'Gigantomachia',
        'alias': 'Machia',
        'birthday': 'Unknown',
        'gender': 'Male',
        'quirk': 'Endurance, Pain Blocker, Gigantification, Dog, Energy Saver, Fierce Gains, Mole',
        'affiliation': 'League of Villains',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/f/f8/Gigantomachia_Anime_Profile.png/revision/latest/scale-to-width-down/350?cb=20210821090451'
    },
    'dabi':{
        'name': 'Dabi',
        'alias': 'Real name-Toya Todoroki',
        'birthday': 'January 18',
        'gender': 'Male',
        'quirk': 'Blueflame',
        'affiliation': 'League of Villains',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/82/Dabi_Manga_Profile.png/revision/latest/scale-to-width-down/236?cb=20210405015607'
    },
    'himiko toga':{
        'name': 'Himiko Toga',
        'alias': 'None',
        'birthday': 'August 7',
        'gender': 'Female',
        'quirk': 'Transform',
        'affiliation': 'League of Villains',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/d/d9/Himiko_Toga_Civilian_Full_Body.png/revision/latest/scale-to-width-down/162?cb=20170923122104'
    },
    'jin bubaigawara':{
        'name': 'Jin Bubaigawara',
        'alias': 'Twice',
        'birthday': 'May 10',
        'gender': 'Male',
        'quirk': 'Double',
        'affiliation': 'League of Villains',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/3/3d/Twice_TV_Animation_Design.png/revision/latest/scale-to-width-down/212?cb=20180313231956'
    },
    'shuichi iguchi':{
        'name': 'Shuichi Iguchi',
        'alias': 'Spinner',
        'birthday': 'August 8',
        'gender': 'Male',
        'quirk': 'Gecko',
        'affiliation': 'League of Villains',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/b/b1/Spinner_TV_Animation_Design.png/revision/latest/scale-to-width-down/271?cb=20180313231732'
    },
    'atsuhiro sako':{
        'name': 'Atsuhiro Sako',
        'alias': 'Mr. Compress',
        'birthday': 'October 8',
        'gender': 'Male',
        'quirk': 'Compress',
        'affiliation': 'League of Villains',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/1/1a/Mr._Compress_TV_Animation_Design.png/revision/latest/scale-to-width-down/200?cb=20180313231706'
    },
    'kenji hikiishi':{
        'name': 'Kenji Hikiishi',
        'alias': 'Magne',
        'birthday': 'Unknown',
        'gender': 'Female',
        'quirk': 'Magnetism',
        'affiliation': 'League of Villains',
        'photo': 'https://static.wikia.nocookie.net/bokunoheroacademia/images/a/a7/Magne_TV_Animation_Design.png/revision/latest/scale-to-width-down/220?cb=20180313230730'
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