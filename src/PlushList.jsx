
import Plush from './Plush.jsx'

import React, {useMemo} from 'react';

const amigurumiCharacters = new Map([
  [1, {
    name: "Octavia the Overachiever Octopus",
    emoji: "🐙📖",
    personality: "Always multitasking, Octavia juggles eight hobbies at once.",
    twist: "Each tentacle holds a different item: a book, a paintbrush, a teacup, etc.",
    url: "https://www.youtube.com/embed/Jh-VH3jqQmw?si=9fpZNQ7cPEujDrDl"
  }],
  [2, {
    name: "Terrence the Time-Traveling Turtle",
    emoji: "🐢🕓",
    personality: "Speaks in riddles and claims to have seen the future.",
    twist: "Wears a tiny clock as a shell.",
    url: "https://www.youtube.com/embed/GKyTjMKKBWY?si=O7dnUmWvTx0WYOyb"
  }],
  [3, {
    name: "Uni the Unicycle Unicorn",
    emoji : "🚲🦄",
    personality: "Loves circus tricks and always has a joke ready.",
    twist: "Rides a unicycle made of yarn.",
    url: "https://www.youtube.com/embed/nh6SrAgRvyk?si=Jb7Hq8XvXuut6y__"
  }],
  [4, {
    name: "Bella the Ballet Bat",
    emoji : "🦇🩰",
    personality: "Elegant and graceful, she practices pirouettes.",
    twist: "Wears a tutu and ballet slippers.",
    url: "https://www.youtube.com/embed/-hgtQuZVXSY?si=EmNSE8QuYinKYTrX"
  }],
  [5, {
    name: "Sid the Superhero Snake",
    emoji: "🦸🐍",
    personality: "Believes he's destined to save the world.",
    twist: "Sports a cape and mask.",
    url: "https://www.youtube.com/embed/Vcf0wGTmXSE?si=rDQshVBKusBUXtP8"
  }],
  [6, {
    name: "Sparkle the Disco Dragon",
    emoji: "🪩🐉",
    personality: "Loves to dance and throw glitter parties.",
    twist: "Scales shimmer like disco balls.",
    url: "https://www.youtube.com/embed/1FQA5cuN4B4?si=Bu6gmVWWyl2QLswE"
  }],
  [7, {
    name: "Ellie the Electric Elephant",
    emoji: "⚡🐘",
    personality: "Always charged up and full of energy.",
    twist: "Trunk acts as a charging port.",
    url: "https://www.youtube.com/embed/qdbunVKic_o?si=zRrWp4mNqRcobhJQ"
  }],
  [8, {
    name: "Gerald the Guitar Giraffe",
    emoji: "🎸🦒",
    personality: "A laid-back musician who loves jam sessions.",
    twist: "Neck doubles as a guitar neck.",
    url: "https://www.youtube.com/embed/TCxFMO-yDUM?si=eaFfjIhV_02vKOoe"
  }],
  [9, {
    name: "Pandy the Pirate Panda",
    emoji: "🏴‍☠️🐼",
    personality: "Swashbuckling adventurer seeking treasure.",
    twist: "Wears an eye patch and carries a bamboo sword.",
    url: "https://www.youtube.com/embed/z00CviUcbCw?si=AsE3_P4cqZ9AQbnY"
  }],
  [10, {
    name: "Hazel the Hipster Hedgehog",
    emoji: "👓🦔",
    personality: "Loves vintage fashion and indie music.",
    twist: "Spines are decorated with tiny records.",
    url: "https://www.youtube.com/embed/PdmB7jqz47U?si=k_eyjDx-QDv2PrWY"
  }],
  [11, {
    name: "Penny the Penguin Pilot",
    emoji: "✈️🐧",
    personality: "Dreams of flying and exploring the skies.",
    twist: "Wears a tiny aviator hat and goggles.",
    url: "https://www.youtube.com/embed/VSatryxsJTs?si=wSjkz2cHnXLvrKec"
  }],
  [12, {
    name: "Barkley the Bookworm Beagle",
    emoji: "🐶📖🐛",
    personality: "Always with a book in hand, loves reading.",
    twist: "Carries a tiny stack of books.",
    url: "https://www.youtube.com/embed/ERow6QEvXSg?si=oDHi1Mjda0yuimqx"
  }],
  [13, {
    name: "Whiskers the Wizard Cat",
    emoji: "🧙🔮🐱",
    personality: "Mysterious and magical, always casting spells.",
    twist: "Wears a wizard hat and carries a wand.",
    url: "https://www.youtube.com/embed/BfWBgeRMcCU?si=nF8Exx2ZRmT_fllO"
  }],
  [14, {
    name: "Thumper the Thespian Rabbit",
    emoji: "🎭🐰",
    personality: "Dramatic and loves the stage.",
    twist: "Wears a tiny costume and holds a script.",
    url: "https://www.youtube.com/embed/atNjKb-DWtw?si=vktFJ2Ml2wsSI7w2"
  }],
  [15, {
    name: "Felix the Fashionista Fox",
    emoji: "👗🦊",
    personality: "Always stylish and up-to-date with trends.",
    twist: "Wears a tiny scarf and sunglasses.",
    url: "https://www.youtube.com/embed/01nCcg9NFUo?si=BNQP5aQZlVHeUpoM"
  }],
  [16, {
    name: "Frodo the Philosopher Frog",
    emoji: "🤔🐸",
    personality: "Deep thinker, always pondering life's mysteries.",
    twist: "Wears glasses and carries a notebook.",
    url: "https://www.youtube.com/embed/0MbX8uekGc8?si=ZKCVApoFmkhKadPL"
  }],
  [17, {
    name: "Trixie the Tap-Dancing Tiger",
    emoji: "💃🐯",
    personality: "Energetic and loves to dance.",
    twist: "Wears tap shoes and a bowtie.",
    url: "https://www.youtube.com/embed/MPUnhUYBNsw?si=fIph4thQDv2MCGzb"
  }],
  [18, {
    name: "Kiki the Karaoke Koala",
    emoji: "🎤🐨",
    personality: "Loves to sing and perform.",
    twist: "Holds a tiny microphone.",
    url: "https://www.youtube.com/embed/PVIBRWJo1Ik?si=ku3JY48PqjCKvKQn"
  }],
  [19, {
    name: "Zane the Zany Zebra",
    emoji: "🎉🦓",
    personality: "Always the life of the party, loves to joke.",
    twist: "Wears a clown nose and oversized shoes.",
    url: "https://www.youtube.com/embed/JbBZM85WHuo?si=v4wUFeq73oAgllGQ"
  }],
  [20, {
    name: "Petunia the Punk Pig",
    emoji: "🎸🐷",
    personality: "Rebel with a cause, loves punk music.",
    twist: "Wears a leather jacket and spiked collar.",
    url: "https://www.youtube.com/embed/atfGljrIDrQ?si=BXMabqQPmwTt-urM"
  }],
  [21, {
    name: "Joey the Juggling Kangaroo",
    emoji: "🦘🤹",
    personality: "Always on the move, loves to juggle.",
    twist: "Carries juggling balls in its pouch.",
    url: "https://www.youtube.com/embed/sGRESWH9_tk?si=K-WyLJaooTLMnGOR"
  }],
  [22, {
    name: "Ricky the Rocker Raccoon",
    emoji: "🦝🧷",
    personality: "Loves rock music and playing guitar.",
    twist: "Wears a bandana and holds a guitar.",
    url: "https://www.youtube.com/embed/g7VvyjOsyaM?si=sss5O6v0GnjvynE1"
  }],
  [23, {
    name: "Bruno the Baker Bear",
    emoji: "🐻🍰🍪",
    personality: "Loves baking and sharing treats.",
    twist: "Wears a chef's hat and apron.",
    url: "https://www.youtube.com/embed/tPd8sFNlgwU?si=nh2NIh-QvbG36P7_"
  }],
  [24, {
    name: "Lenny the Luchador Lemur",
    emoji: "🤼🦝",
    personality: "Loves wrestling and performing stunts.",
    twist: "Wears a luchador mask and cape.",
    url: "https://www.youtube.com/embed/oRQN9fyz-g0?si=jw5c9bpJCoqJ0Ode"
  }],
  [25, {
    name: "Kylie the Karate Kangaroo",
    emoji: "🥋🦘",
    personality: "Disciplined and loves martial arts.",
    twist: "Wears a karate gi and belt.",
    url: "https://www.youtube.com/embed/sGRESWH9_tk?si=K-WyLJaooTLMnGOR"
  }],
  [26, {
    name: "Bamboo the Beatboxing Panda",
    emoji: "🎶🐼🎧",
    personality: "Loves music and making beats.",
    twist: "Holds a tiny microphone and wears headphones.",
    url: "https://www.youtube.com/embed/z00CviUcbCw?si=AsE3_P4cqZ9AQbnY"
  }],
  [27, {
    name: "Lily the Librarian Frog",
    emoji: "📖🐸",
    personality: "Quiet and loves organizing books.",
    twist: "Wears glasses and carries a stack of books.",
    url: "https://www.youtube.com/embed/0MbX8uekGc8?si=ZKCVApoFmkhKadPL"
  }],
  [28, {
    name: "Luna the Lullaby Cat",
    emoji: "🌙🐱",
    personality: "Gentle and loves to sing lullabies.",
    twist: "Wears a nightcap and holds a teddy bear.",
    url: "https://www.youtube.com/embed/BfWBgeRMcCU?si=nF8Exx2ZRmT_fllO"
  }],
  [29, {
    name: "Pippin the Pirate Bunny",
    emoji: "🏴‍☠️🐰",
    personality: "Adventurous and loves treasure hunting.",
    twist: "Wears an eye patch and carries a map.",
    url: "https://www.youtube.com/embed/atNjKb-DWtw?si=vktFJ2Ml2wsSI7w2"
  }],
  [30, {
    name: "Vixen the Violinist Fox",
    emoji: "🎻🦊",
    personality: "Elegant and loves playing the violin.",
    twist: "Holds a tiny violin and bow.",
    url: "https://www.youtube.com/embed/01nCcg9NFUo?si=BNQP5aQZlVHeUpoM"
  }],
  [31, {
    name: "Grizzly the Gardener Bear",
    emoji: "🐻🌱🌸",
    personality: "Loves nature and gardening.",
    twist: "Wears a straw hat and carries a watering can.",
    url: "https://www.youtube.com/embed/tPd8sFNlgwU?si=nh2NIh-QvbG36P7_"
  }],
  [32, {
    name: "Milo the Mechanic Koala",
    emoji: "🔧🐨",
    personality: "Handy and loves fixing things.",
    twist: "Wears a tool belt and carries a wrench.",
    url: "https://www.youtube.com/embed/PVIBRWJo1Ik?si=ku3JY48PqjCKvKQn"
  }],
  [33, {
    name: "Ziggy the Zookeeper Zebra",
    emoji: "🧑‍🌾🦓",
    personality: "Loves animals and taking care of them.",
    twist: "Wears a zookeeper uniform and holds a clipboard.",
    url: "https://www.youtube.com/embed/JbBZM85WHuo?si=v4wUFeq73oAgllGQ"
  }],
  [34, {
    name: "Wilbur the Woodworker Pig",
    emoji: "🔨🐷",
    personality: "Creative and loves building things.",
    twist: "Wears a tool belt and carries a hammer.",
    url: "https://www.youtube.com/embed/atfGljrIDrQ?si=BXMabqQPmwTt-urM"
  }],
  [35, {
    name: "Boomer the Baseball Kangaroo",
    emoji: "🧢🦘⚾",
    personality: "Sports enthusiast and loves baseball.",
    twist: "Wears a baseball cap and holds a bat.",
    url: "https://www.youtube.com/embed/sGRESWH9_tk?si=K-WyLJaooTLMnGOR"
  }],
  [36, {
    name: "Rocky the Racer Raccoon",
    emoji: "🏎️💨🦝",
    personality: "Speedy and loves racing.",
    twist: "Wears a racing suit and helmet.",
    url: "https://www.youtube.com/embed/g7VvyjOsyaM?si=sss5O6v0GnjvynE1"
  }],
  [37, {
    name: "Paddington the Painter Bear",
    emoji: "🎨🖌️🐻",
    personality: "Artistic and loves painting.",
    twist: "Wears a beret and holds a paintbrush.",
    url: "https://www.youtube.com/embed/tPd8sFNlgwU?si=nh2NIh-QvbG36P7"
  }],
  [38, {
    name: "Coco the Chef Koala",
    emoji: "🧑‍🍳🍽️🐨",
    personality: "Loves cooking and trying new recipes.",
    twist: "Wears a chef's hat and apron.",
    url: "https://www.youtube.com/embed/PVIBRWJo1Ik?si=ku3JY48PqjCKvKQn"
  }],
  [39, {
    name: "Stripe the Skateboarding Zebra",
    emoji: "🛹🦓👟",
    personality: "Adventurous and loves skateboarding.",
    twist: "Wears a helmet and knee pads.",
    url: "https://youtu.be/SS4YujgvX_4?feature=shared"
  }],
  [40, {
    name: "Truffle the Trucker Pig",
    emoji: "🐷🚚🛣️",
    personality: "Loves the open road and driving trucks.",
    twist: "Wears a trucker hat and holds a steering wheel.",
    url: "https://www.youtube.com/embed/atfGljrIDrQ?si=BXMabqQPmwTt-urM"
  }],
  [41, {
    name: "Hopper the Hiker Kangaroo",
    emoji : "🦘⛰️🎒" ,
    personality: "Outdoorsy and loves hiking.",
    twist: "Wears a backpack and hiking boots.",
    url: "https://www.youtube.com/embed/sGRESWH9_tk?si=K-WyLJaooTLMnGOR"
  }],
  [42, {
    name: "Bandit the Crocheting Raccoon",
    emoji: "🧶🦝",
    personality: "Loves to crochet but never knows what to crochet!",
    twist: "Holds knitting needles because he wants to broaden his horizons.",
    url: "https://www.youtube.com/embed/g7VvyjOsyaM?si=sss5O6v0GnjvynE1"
  }],
  [43, {
    name: "Scout the Scout Bear",
    emoji: "🐻🧭",
    personality: "Adventurous and loves scouting.",
    twist: "Wears a scout uniform and carries a compass.",
    url: "https://www.youtube.com/embed/tPd8sFNlgwU?si=nh2NIh-QvbG36P7"
  }],
  [44, {
    name: "Koko the Kayaker Koala",
    emoji: "🛶🌊🐨",
    personality: "Loves water sports and kayaking.",
    twist: "Wears a life jacket and holds a paddle.",
    url: "https://www.youtube.com/embed/PVIBRWJo1Ik?si=ku3JY48PqjCKvKQn"
  }],
  [45, {
    name: "Dash the Detective Zebra",
    emoji: "🕵️🧥🦓",
    personality: "Curious and loves solving mysteries.",
    twist: "Wears a detective hat and holds a magnifying glass.",
    url: "https://www.youtube.com/embed/JbBZM85WHuo?si=v4wUFeq73oAgllGQ"
  }],
  [46, {
    name: "Pudding the Pilot Pig",
    emoji: "✈️🐷",
    personality: "Dreams of flying and exploring the skies.",
    twist: "Wears a pilot's hat and goggles.",
    url: "https://www.youtube.com/embed/atfGljrIDrQ?si=BXMabqQPmwTt-urM"
  }],
  [47, {
    name: "Boing the Ballerina Kangaroo",
    emoji: "🩰🦘",
    personality: "Graceful and loves ballet.",
    twist: "Wears a tutu and ballet slippers.",
    url: "https://www.youtube.com/embed/sGRESWH9_tk?si=K-WyLJaooTLMnGOR"
  }],
  [48, {
    name: "Sly the Scientist Raccoon",
    emoji: "🔬🦝",
    personality: "Inquisitive and loves experiments.",
    twist: "Wears safety goggles and holds a test tube.",
    url: "https://www.youtube.com/embed/g7VvyjOsyaM?si=sss5O6v0GnjvynE1"
  }],
  [49, {
    name: "Maple the Mountain Bear",
    emoji: "⛰️🐻",
    personality: "Loves the mountains and hiking.",
    twist: "Wears a hiking hat and carries a walking stick.",
    url: "https://www.youtube.com/embed/tPd8sFNlgwU?si=nh2NIh-QvbG36P7_"
  }],
  [50, {
    name: "Tiki the Tourist Koala",
    emoji: "📸🐨",
    personality: "Loves traveling and exploring new places.",
    twist: "Wears a tourist hat and carries a camera.",
    url: "https://www.youtube.com/embed/PVIBRWJo1Ik?si=ku3JY48PqjCKvKQn"
  }],
  [51, {
    name: "Ollie the Opera Octopus",
    emoji: "🎭🐙",
    personality: "A dramatic diva who loves the stage.",
    twist: "Wears a tiny tuxedo and holds a microphone.",
    url: "https://www.youtube.com/embed/Jh-VH3jqQmw?si=9fpZNQ7cPEujDrDl"
  }],
  [52, {
    name: "Timmy the Tap-Dancing Turtle",
    emoji: "",
    personality: "Graceful and loves to dance.",
    twist: "Wears tap shoes and a bowtie.",
    url: "https://youtu.be/vqPlfiTzTcA?feature=shared"
  }],
  [53, {
    name: "Glitter the Galactic Unicorn",
    emoji: "🚀🦄",
    personality: "Loves space and stargazing.",
    twist: "Wears a spacesuit and helmet.",
    url: "https://www.youtube.com/embed/nh6SrAgRvyk?si=Jb7Hq8XvXuut6y__"
  }],
  [54, {
    name: "Luna the Lullaby Bat",
    emoji: "🌙🦇",
    personality: "Gentle and loves to sing lullabies.",
    twist: "Wears a nightcap and holds a teddy bear.",
    url: "https://www.youtube.com/embed/-hgtQuZVXSY?si=EmNSE8QuYinKYTrX"
  }],
  [55, {
    name: "Slinky the Superhero Snake",
    emoji: "🦸🐍",
    personality: "Believes he's destined to save the world.",
    twist: "Sports a cape and mask.",
    url: "https://www.youtube.com/embed/Vcf0wGTmXSE?si=rDQshVBKusBUXtP8"
  }],
  [56, {
    name: "Stardust the Steampunk Unicorn",
    emoji: "⚙️🦄",
    personality: "Loves all things vintage and mechanical.",
    twist: "Wears goggles and a gear necklace.",
    url: "https://www.youtube.com/embed/nh6SrAgRvyk?si=Jb7Hq8XvXuut6y__"
  }],
  [57, {
    name: "Zappy the Zookeeper Elephant",
    emoji: "🐘📋",
    personality: "Loves animals and taking care of them.",
    twist: "Wears a zookeeper uniform and holds a clipboard.",
    url: "https://www.youtube.com/embed/qdbunVKic_o?si=zRrWp4mNqRcobhJQ"
  }],
  [58, {
    name: "Marvin the Magician Giraffe",
    emoji: "🎩🦒",
    personality: "Loves performing magic tricks.",
    twist: "Wears a magician's hat and holds a wand.",
    url: "https://www.youtube.com/embed/TCxFMO-yDUM?si=eaFfjIhV_02vKOoe"
  }],
  [59, {
    name: "Rocky the Rocker Panda",
    emoji: "🎸🐼",
    personality: "Loves rock music and playing guitar.",
    twist: "Wears a bandana and holds a guitar.",
    url: "https://www.youtube.com/embed/z00CviUcbCw?si=AsE3_P4cqZ9AQbnY"
  }],
  [60, {
    name: "Pippin the Pirate Hedgehog",
    emoji: "🏴‍☠️🦔",
    personality: "Adventurous and loves treasure hunting.",
    twist: "Wears an eye patch and carries a map.",
    url: "https://www.youtube.com/embed/PdmB7jqz47U?si=k_eyjDx-QDv2PrWY"
  }],
  [61, {
    name: "Daisy the Detective Dog",
    emoji: "🕵️🐶",
    personality: "Curious and loves solving mysteries.",
    twist: "Wears a detective hat and holds a magnifying glass.",
    url: "https://www.youtube.com/embed/ERow6QEvXSg?si=oDHi1Mjda0yuimqx"
  }],
  [62, {
    name: "Cleo the Circus Cat",
    emoji: "🎪🐱",
    personality: "Loves performing tricks and stunts.",
    twist: "Wears a clown nose and holds a juggling ball.",
    url: "https://www.youtube.com/embed/BfWBgeRMcCU?si=nF8Exx2ZRmT_fllO"
  }],
  [63, {
    name: "Bella the Ballet Bunny",
    emoji: "🩰🐰",
    personality: "Graceful and loves ballet.",
    twist: "Wears a tutu and ballet slippers.",
    url: "https://www.youtube.com/embed/atNjKb-DWtw?si=vktFJ2Ml2wsSI7w2"
  }],
  [64, {
    name: "Felix the Firefighter Fox",
    emoji: "🚒🦊",
    personality: "Brave and loves helping others.",
    twist: "Wears a firefighter's helmet and holds a hose.",
    url: "https://www.youtube.com/embed/01nCcg9NFUo?si=BNQP5aQZlVHeUpoM"
  }],
  [65, {
    name: "Freddie the Farmer Frog",
    emoji: "🐸🌾",
    personality: "Loves farming and gardening.",
    twist: "Wears overalls and holds a pitchfork.",
    url: "https://www.youtube.com/embed/0MbX8uekGc8?si=ZKCVApoFmkhKadPL"
  }],
  [66, {
    name: "Tara the Tapir",
    emoji: "🌿🦏",
    personality: "Shy and loves the rainforest.",
    twist: "Wears a leaf hat and carries a watering can.",
    url: ""
  }],
  [67, {
    name: "Kiki the Karate Koala",
    emoji: "🥋🐨",
    personality: "Disciplined and loves martial arts.",
    twist: "Wears a karate gi and belt.",
    url: "https://www.youtube.com/embed/PVIBRWJo1Ik?si=ku3JY48PqjCKvKQn"
  }],
  [68, {
    name: "Ziggy the Zany Zebra",
    emoji: "🎉🦓",
    personality: "Always the life of the party, loves to joke.",
    twist: "Wears a clown nose and oversized shoes.",
    url: "https://www.youtube.com/embed/JbBZM85WHuo?si=v4wUFeq73oAgllGQ"
  }],
  [69, {
    name: "Truffle the Trucker Pig",
    emoji: "🐷🚚🛣️",
    personality: "Loves the open road and driving trucks.",
    twist: "Wears a trucker hat and holds a steering wheel.",
    url: "https://www.youtube.com/embed/atfGljrIDrQ?si=BXMabqQPmwTt-urM"
  }],
  [70, {
    name: "Boomer the Baseball Kangaroo",
    emoji: "🧢🦘⚾",
    personality: "Sports enthusiast and loves baseball.",
    twist: "Wears a baseball cap and holds a bat.",
    url: "https://www.youtube.com/embed/sGRESWH9_tk?si=K-WyLJaooTLMnGOR"
  }],
  [71, {
    name: "Rocky the Racer Raccoon",
    emoji: "🏎️💨🦝",
    personality: "Speedy and loves racing.",
    twist: "Wears a racing suit and helmet.",
    url: "https://www.youtube.com/embed/g7VvyjOsyaM?si=sss5O6v0GnjvynE1"
  }],
  [72, {
    name: "Paddington the Painter Bear",
    emoji: "🎨🖖️🐻",
    personality: "Artistic and loves painting.",
    twist: "Wears a beret and holds a paintbrush.",
    url: "https://www.youtube.com/embed/tPd8sFNlgwU?si=nh2NIh-QvbG36P7_"
  }],
  [73, {
    name: "Coco the Chef Koala",
    emoji: "👨‍🍳🍽️🐨",
    personality: "Loves cooking and trying new recipes.",
    twist: "Wears a chef's hat and apron.",
    url: "https://www.youtube.com/embed/PVIBRWJo1Ik?si=ku3JY48PqjCKvKQn"
  }],
  [74, {
    name: "Stripe the Skateboarding Zebra",
    emoji: "🛹🦓👟",
    personality: "Adventurous and loves skateboarding.",
    twist: "Wears a helmet and knee pads.",
    url: "https://youtu.be/SS4YujgvX_4?feature=shared"
  }],
  [75, {
    name: "Pudding the Pilot Pig",
    emoji: "✈️🐷",
    personality: "Dreams of flying and exploring the skies.",
    twist: "Wears a pilot's hat and goggles.",
    url: "https://www.youtube.com/embed/atfGljrIDrQ?si=BXMabqQPmwTt-urM"
  }],
  [76, {
    name: "Boing the Ballerina Kangaroo",
    emoji: "🩰🦘",
    personality: "Graceful and loves ballet.",
    twist: "Wears a tutu and ballet slippers.",
    url: "https://www.youtube.com/embed/sGRESWH9_tk?si=K-WyLJaooTLMnGOR"
  }],
  [77, {
    name: "Sly the Scientist Raccoon",
    emoji: "🔬🦝",
    personality: "Inquisitive and loves experiments.",
    twist: "Wears safety goggles and holds a test tube.",
    url: "https://www.youtube.com/embed/g7VvyjOsyaM?si=sss5O6v0GnjvynE1"
  }],
  [78, {
    name: "Maple the Mountain Bear",
    emoji: "⛰️🐻",
    personality: "Loves the mountains and hiking.",
    twist: "Wears a hiking hat and carries a walking stick.",
    url: "https://www.youtube.com/embed/tPd8sFNlgwU?si=nh2NIh-QvbG36P7_"
  }],
  [79, {
    name: "Tiki the Tourist Koala",
    emoji: "📸🐨",
    personality: "Loves traveling and exploring new places.",
    twist: "Wears a tourist hat and carries a camera.",
    url: "https://www.youtube.com/embed/PVIBRWJo1Ik?si=ku3JY48PqjCKvKQn"
  }],
  [80, {
    name: "Dash the Detective Zebra",
    emoji: "🕵️🧥🦓",
    personality: "Curious and loves solving mysteries.",
    twist: "Wears a detective hat and holds a magnifying glass.",
    url: "https://www.youtube.com/embed/JbBZM85WHuo?si=v4wUFeq73oAgllGQ"
  }],
]);



function getRandomKey(collection) {
    let index = Math.floor(Math.random() * collection.size);
    let cntr = 0;
    for (let key of collection.keys()) {
        if (cntr++ === index) {
            return key;
        }
    }
}

// spread operator , takes all properties of the
// passed in object such as the name, personality, and twist
// Generate a random plush character once when the module loads


export default function PlushList() {
  // Use the pre-generated random plush data
  const randomKey = useMemo(() => getRandomKey(amigurumiCharacters), []);
  const plushData = amigurumiCharacters.get(randomKey);
  return (
  <>
  <Plush {...plushData}/>
  </>
  );
}
