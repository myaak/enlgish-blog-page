"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var BlogList_1 = require("../components/BlogList");
var Blog = function (_a) {
    var themeColor = _a.themeColor;
    var _b = __read((0, react_1.useState)([
        {
            image: "winter.jpg",
            date: "1st of December",
            title: "The beggining of the winter",
            description: "Winter has come.",
            allinfo: "We want to congratulate everyone who is reading that post. Today is the 1st of December. This day means that we need to be ready to complete all of our uncompleted tasks in the University and also prepare our asses to the finals.",
            allinfo2: "I wish everyone to success on your exams. On after-party you should/shouldnt drink a lot of vodka and eat tangerins. Everyone must prepare their Christmas tree and make a wish to Santa. The most important thing that you need to believe in Santa. If you dont believe, he wont come and it means that you wasted your time on believing in sth mythical.",
            allinfo3: "So don’t waste your time and progress a lot."
        },
        {
            image: "snow.jpg",
            title: "GLEB WITH SNOW IS A NIGHTMARE",
            date: "23rd of November",
            description: "Unexpectable white attack.",
            allinfo: "One day I offered to go to a store to buy something to eat because the fridge was absoulutely empty. All of my friends accepted my offer except of Stanislav. He wasn't in good mood and didn't want to come, but he made an offer to us to buy him a cheesecake.",
            allinfo2: "There was a lot of snow outside and on the back way we decided to throw a snowball to Stas through the opened window in our room. First of all, we needed to train our throws and tried to throw it on the roof of 2-floored house. During that train Gleb was absolutely soaked. It was because he spilt all the water he bought after his last jump. It was a nightmare, because his passport was soaked too.",
            allinfo3: "When we came to dormitory we started to throw snowballs into our window and Stanislav wasn't satisfied with it and started to throw a response. Finally, commendant came and tried to argue with us but we went to our room and she didn't recognise us on street because it was dark there."
        },
        {
            image: "fightnight.jpg",
            date: "17th of November",
            title: "Unreal night-fight",
            description: "I just wanted to watch a film.",
            allinfo: 'It was a late evening. I was trying to watch a film on my phone and Gleb was trying to sleep. I asked him a really rotten question that got furious. Suddenly, he grabbed my phone and didn’t want to give it back. We started to fight. Fight lasted for about 30 minutes but it was absolutely amazing. During our fight we spilled two full teapots on each bed in the room.',
            allinfo2: 'We also wasted at least 1.5 litres of clean water to pour into each other.Even our commandant came and said that we’re stupid idiots and we need to stop all of these.We were really disappointed but we continued it.Finally, I got my phone back but I had to sleep in soaked bed as well as Gleb.It was unforgettable fight filmed on iPhone camera that have a size for about 1.5GB.'
        },
        {
            image: "kettle.jpg",
            date: "29th of October",
            title: "Gleb's bash and a teapot",
            description: "In the early morning Gleb has done an unreal bash and got in trouble.",
            allinfo: "There was a beatuful sunny day in the end of November. It was so warm outside. Gleb tried to recover his work life balance and set an alarm to 6 AM. I was sleeping till 10 AM and was dreaming about how not to go to the university, but Gleb decided to interrupt my sweet dreams. He started to do excercises in the middle of the room and remembered our yesterday's speech about BASH.",
            allinfo2: "Gleb didn't understand properly what bash mean and tried to hit me using his 'rotten' leg while I was lying on my side and scrolling Discord messages. Rotten Gleb grabbed onto the crossbars of our 2 - floored bed and swung his foot in my face. It was pretty close to reach my beautiful rotten face, but everything went well.",
            allinfo3: "After a few moments we realised that something disappered from our bedside table. A teapot was absolutely gone and something was dripping on the floor from the Stasyan's bed.  It was a sacred teapot where Stanislav was holding his boiled water. Unfortunately, after this couple of minutes all the boiled water was on his bed and every part was soaked. Stanislav was really angry about this situation and tried to fight Gleb but they decided to forget about all of this stuff."
        },
        {
            image: 'hook.jpg',
            date: "12th of October",
            title: "Hook, night and glasses",
            description: "The game of life that he mustn't lose.",
            allinfo: 'It was a late night, for about 2 AM. I was sleeping and seeing the 3rd dream. Everything was calm. Suddenly I realised that Gleb was playing dota 2 for about 4 hours in a row. He shouted very loudly in 3 AM and I woke up.',
            allinfo2: 'When I asked him what is going on he said that he won a 75minutes game because of his lucky hook in the no vision. Tinker didn’t expect that it could end this way, but even with the biggest networth he lost the game because of lucky pudge. Of course, commandant didnt skip such event and came to us, to shut up our loud mouthes.',
            allinfo3: 'I’m still hating Gleb for that nights but I confess it was fun.'
        },
        {
            image: "images.jpeg",
            date: "10th of November",
            title: "SAVE OUR SOULS, PLEASE",
            description: "We're just lazy.",
            allinfo: "It was really cold outside. Two of us had a an awful mood. Near 12 AM everyone was in bed but the light was still turned on, of course no one wanted to stand up. Suddenly we had an idea. We remember about SOS signal in morse code and started to hit the wall using SAVE OUR SOULS signal, but no one came",
            allinfo2: "After a few minutes of our attempts to force to come someone, came only one guy. He opened the door and ask us with displeased voice : “What do you want?”. Response came immediately, we just wanted that someone turned off our light. He said that we are bastards and closed the door, of course light was still shining. ",
            allinfo3: "We were exhausted and fell asleep even with the lights."
        }
    ]), 2), blogs = _b[0], setBlogs = _b[1];
    var _c = __read((0, react_1.useState)(false), 2), openPop = _c[0], setOpenPop = _c[1];
    return (<div className="blogpage">
      <div className="blogpage__banner" style={{}}>
        210NEWSROOM
      </div>
      <div className="blogpage__container">
        <BlogList_1.default blogs={blogs} themeColor={themeColor}/>
      </div>
    </div>);
};
exports.default = Blog;
