type Album = {
  artist: string;
  title: string;
  src: string;
};

const data: Album[] = [
  {
    artist: '070 Shake',
    title: 'Modus Vivendi',
    src: 'https://i.scdn.co/image/aa21603983c3e31764f7cbe8f4e2e8d7a00f37eb'
  },
  {
    artist: 'Adele',
    title: '21',
    src: 'https://i.scdn.co/image/26007fcd7781ea9222b23ab3654ba86f60dd6e18'
  },
  {
    artist: 'Anderson .Paak',
    title: 'Malibu',
    src: 'https://i.scdn.co/image/8f1948fa598aae4a5e804c7b144b77f3d4bbd181'
  },
  {
    artist: 'Anderson .Paak',
    title: 'Ventura',
    src: 'https://i.scdn.co/image/bd29e31de1a00012c20836f3a30bac49abefaebe'
  },
  {
    artist: 'The Arcs',
    title: 'Yours, Dreamily,',
    src: 'https://i.scdn.co/image/ffed1531cb2e195d0989dcc1abcfec154ac98de2'
  },
  {
    artist: 'Broken Bells',
    title: 'After the Disco',
    src: 'https://i.scdn.co/image/ebfa0a96c727c9dacd575d8f5f56f27d8bfa11c3'
  },
  {
    artist: 'Cage The Elephant',
    title: 'Social Cues',
    src: 'https://i.scdn.co/image/aed16b7912374b753810d0d89cd923bd26381772'
  },
  {
    artist: 'Cage The Elephant',
    title: 'Thank You Happy Birthday',
    src: 'https://i.scdn.co/image/852bc71d5dc4e1dd74a6debf7f4f3cb980ec58a0'
  },
  {
    artist: 'Capital Cities',
    title: 'In a Tidal Wave of Mystery',
    src: 'https://i.scdn.co/image/fab535fc182927f5c90625f838378b7b318ac24f'
  },
  {
    artist: 'Car Seat Headrest',
    title: 'Teens of Denial',
    src: 'https://i.scdn.co/image/44a940469cc54c0a0eb3bdf6ef48f20f776110c1'
  },
  {
    artist: 'Car Seat Headrest',
    title: 'Teens of Style',
    src: 'https://i.scdn.co/image/56c7eef83e481717bf9c2f698880b544065d54b7'
  },
  {
    artist: 'Car Seat Headrest',
    title: 'Twin Fantasy',
    src: 'https://i.scdn.co/image/086082cb51c9dac76d913b8adb31f0e3afdea7aa'
  },
  {
    artist: 'Common',
    title: 'Be',
    src: 'https://i.scdn.co/image/a7d3fbe053e83e5f7a61204cd3c4929b741b4a0a'
  },
  {
    artist: 'Cordae',
    title: 'The Lost Boy',
    src: 'https://i.scdn.co/image/1036782a6cd826b580b77efc0e871b2cf9dfec73'
  },
  {
    artist: 'Declan McKenna',
    title: 'What Do You Think About the Car?',
    src: 'https://i.scdn.co/image/dc9d2b0cf38e51fb3f7e58ca372bdda2b8b8daca'
  },
  {
    artist: 'Declan McKenna',
    title: 'Zeros',
    src: 'https://i.scdn.co/image/ab67616d0000b2733a06b188cf0080ce95f662eb'
  },
  {
    artist: 'Denzel Curry',
    title: 'TA13OO',
    src: 'https://i.scdn.co/image/ab67616d0000b2737d05dd3ebb77cc048d66b294'
  },
  {
    artist: 'The Districts',
    title: 'A Flourish and a Spoil',
    src: 'https://i.scdn.co/image/6bc2ae40cc6c817924d2ea4d577c9d75f1fc20a1'
  },
  {
    artist: 'The Districts',
    title: 'Popular Manipulations',
    src: 'https://i.scdn.co/image/2e4158eb071e2349c6600f93f43b8437d2a01f7c'
  },
  {
    artist: 'The Districts',
    title: 'Telephone',
    src: 'https://i.scdn.co/image/5e4f6883e5efe55599d3925cf2f05231a1337eee'
  },
  {
    artist: 'The Dodos',
    title: 'Beware the Maniacs',
    src: 'https://i.scdn.co/image/ab67616d0000b27354dff508633a713f34121f92'
  },
  {
    artist: 'Dr. Dog',
    title: 'Critical Equation',
    src: 'https://i.scdn.co/image/6905558ed43aff440730992747d5d7bc87289a59'
  },
  {
    artist: 'Drake',
    title: 'Take Care',
    src: 'https://i.scdn.co/image/fc52fd54ad72190904dd0e82055b32c14dee0f04'
  },
  {
    artist: 'Drake',
    title: 'Thank Me Later',
    src: 'https://i.scdn.co/image/f7565507d22e18a50d8e615852c5a2f928ddb556'
  },
  {
    artist: 'Dreamville',
    title: 'Revenge of the Dreamers III',
    src: 'https://i.scdn.co/image/ab67616d0000b273a145ed96ce61bf4201d619c3'
  },
  {
    artist: 'Electric Guest',
    title: 'Mondo',
    src: 'https://i.scdn.co/image/b75b7e569fb13f964c19c007d7de2605abd8f8d1'
  },
  {
    artist: 'Electric Guest',
    title: 'Plural',
    src: 'https://i.scdn.co/image/fa32de5c81b0496fe9e6c1fddf9678055459a671'
  },
  {
    artist: 'Father John Misty',
    title: 'Fear Fun',
    src: 'https://i.scdn.co/image/ab67616d0000b273f8445f566ccdb3efff4694b2'
  },
  {
    artist: 'Fleet Foxes',
    title: 'Crack-Up',
    src: 'https://i.scdn.co/image/ab271d811b2f755d07657a2b4b924a6ec1b13c6e'
  },
  {
    artist: 'Fleet Foxes',
    title: 'Fleet Foxes',
    src: 'https://i.scdn.co/image/2dd7a119118f7b77b622c27cc0e16ae862539d1f'
  },
  {
    artist: 'Foster the People',
    title: 'Supermodel',
    src: 'https://i.scdn.co/image/ad1ae891423adf3842ad505d10b72c148caeccd5'
  },
  {
    artist: 'Foster the People',
    title: 'Torches',
    src: 'https://i.scdn.co/image/fb4998c955d8eba049ffbfc7ab8523a4a4a1f7e9'
  },
  {
    artist: 'Frank Ocean',
    title: 'Blonde',
    src: 'https://i.scdn.co/image/e22f959dae6f088b9c6614c4f777efacaf3544f1'
  },
  {
    artist: 'Frank Ocean',
    title: 'channel ORANGE',
    src: 'https://i.scdn.co/image/274280f8c875eadbd0c08bf6bf48bf41803c055e'
  },
  {
    artist: 'fun.',
    title: 'Aim and Ignite',
    src: 'https://i.scdn.co/image/209de0a5213165ed26855482257f2a2be55cd872'
  },
  {
    artist: 'fun.',
    title: 'Some Nights',
    src: 'https://i.scdn.co/image/45aa3c0ca065d0eebe79193cc6f9753b3d415e9f'
  },
  {
    artist: 'Glass Animals',
    title: 'How to Be a Human Being',
    src: 'https://i.scdn.co/image/1cd723595cfd4dd9375cfdf980b1b9b0134913eb'
  },
  {
    artist: 'Highly Suspect',
    title: 'The Boy Who Died Wolf',
    src: 'https://i.scdn.co/image/c2afd4ee2dc6ae704733654c20ca772abe0e590f'
  },
  {
    artist: 'IDK',
    title: 'Is He Real?',
    src: 'https://i.scdn.co/image/ab67616d0000b27321036922dca01ae33cac03ad'
  },
  {
    artist: 'J. Cole',
    title: '2014 Forest Hills Drive',
    src: 'https://i.scdn.co/image/9c5d0ed04c5d5ca1fb3027cdc860698c89da4942'
  },
  {
    artist: 'J. Cole',
    title: 'Born Sinner',
    src: 'https://i.scdn.co/image/70d5d04703139de6ea3d708a489f8ffdb25855e0'
  },
  {
    artist: 'Jack Garratt',
    title: 'Phase',
    src: 'https://i.scdn.co/image/9ae70d59c8c44b5aa64f2c5bb135d4f4ad37687b'
  },
  {
    artist: 'James Vincent McMorrow',
    title: "We Don't Eat EP",
    src: 'https://i.scdn.co/image/a955d987b82e25135677ebc9ae91c56e8e91a1cf'
  },
  {
    artist: 'JAY Z, Kanye West',
    title: 'Watch the Throne',
    src: 'https://i.scdn.co/image/53a873782700273b05ceb310699cb22d08b345ae'
  },
  {
    artist: 'J.I.D',
    title: 'The Never Story',
    src: 'https://i.scdn.co/image/a80ff343af9ab34ca312b91a01483fc846591a33'
  },
  {
    artist: 'Joey Bada$$',
    title: 'B4.DA.$$',
    src: 'https://i.scdn.co/image/59aacc03bbea4c8fc5a3debb1d6a56ddcff6daf3'
  },
  {
    artist: 'The Jungle Giants',
    title: 'Learn to Exist',
    src: 'https://i.scdn.co/image/e19387817f3533da80d5101441318d36c8a4a543'
  },
  {
    artist: 'Kanye West',
    title: 'The College Dropout',
    src: 'https://i.scdn.co/image/e0cfe86b86a8e52cddc57cb7be3a662fed3fec24'
  },
  {
    artist: 'Kanye West',
    title: 'Graduation',
    src: 'https://i.scdn.co/image/76b60fce50c9af8ec1aa4e8fb2cb4a7265ff2004'
  },
  {
    artist: 'Kanye West',
    title: 'Late Registration',
    src: 'https://i.scdn.co/image/92db1dda6ed503723c89c3cf03369c908b1393a3'
  },
  {
    artist: 'Kanye West',
    title: 'The Life of Pablo',
    src: 'https://i.scdn.co/image/443372cd2c6d4245833fb46ac1c5dabca00c78a9'
  },
  {
    artist: 'Kanye West',
    title: 'My Beautiful Dark Twisted Fantasy',
    src: 'https://i.scdn.co/image/cafd8763a050dabc4f6157172bb09a23d09abde3'
  },
  {
    artist: 'Kate Bollinger',
    title: "I Don't Wanna Lose",
    src: 'https://i.scdn.co/image/ab67616d0000b27301709f805e42d2ee0d0e2407'
  },
  {
    artist: 'Khruangbin',
    title: 'Mordechai',
    src: 'https://i.scdn.co/image/ab67616d0000b2739ebb959418f1e621f8934faa'
  },
  {
    artist: 'KIDS SEE GHOSTS',
    title: 'KIDS SEE GHOSTS',
    src: 'https://i.scdn.co/image/e7df5661e0e360ebbeb065a9b4fde3db73823729'
  },
  {
    artist: 'The Killers',
    title: 'Hot Fuss',
    src: 'https://i.scdn.co/image/ac68a9e4a867ec3ce8249cd90a2d7c73755fb487'
  },
  {
    artist: 'The Killers',
    title: "Sam's Town",
    src: 'https://i.scdn.co/image/3d7b7545a896adc90ba3926be09d4cd3858c7bcb'
  },
  {
    artist: 'Logic',
    title: 'The Incredible True Story',
    src: 'https://i.scdn.co/image/6d25bd982779e26081c55c5760a94fef529cd855'
  },
  {
    artist: 'Logic',
    title: 'No Pressure',
    src: 'https://i.scdn.co/image/ab67616d0000b2731c76e29153f29cc1e1b2b434'
  },
  {
    artist: 'Logic',
    title: 'Under Pressure',
    src: 'https://i.scdn.co/image/eb3752f897c83b42a4c66512466b2d0652e54aa3'
  },
  {
    artist: 'Lupe Fiasco',
    title: 'The Cool',
    src: 'https://i.scdn.co/image/80d4ce3f70072ed03b72ba4b17d2a72d2d0cfe31'
  },
  {
    artist: 'Lupe Fiasco',
    title: 'Food & Liquor',
    src: 'https://i.scdn.co/image/520bc52bb0ebfe7554bafc55992071efa2e96fec'
  },
  {
    artist: 'Mosie',
    title: 'Tangerine',
    src: 'https://i.scdn.co/image/6acd293555254a74c956daa52f91ad92e23d121c'
  },
  {
    artist: 'Of Monsters and Men',
    title: 'My Head Is an Animal',
    src: 'https://i.scdn.co/image/af5597ca69007b39e6be0d424f6a169e92cbaff0'
  },
  {
    artist: 'Phoebe Bridgers',
    title: 'Punisher',
    src: 'https://i.scdn.co/image/ab67616d0000b2733040ca980277cf1445934add'
  },
  {
    artist: 'Phoebe Bridgers',
    title: 'Stranger in the Alps',
    src: 'https://i.scdn.co/image/ab67616d0000b273bbc87dd5388d9a98e80650a4'
  },
  {
    artist: 'Portugal. The Man',
    title: 'Evil Friends',
    src: 'https://i.scdn.co/image/83bfab824fbd6f7ac96ad44dc4d4be78a1a7b0f3'
  },
  {
    artist: 'Pusha T',
    title: 'Daytona',
    src: 'https://i.scdn.co/image/a159c06b308a6fb14ef85e962ade81c30fd2a44a'
  },
  {
    artist: 'Pusha T',
    title: 'My Name Is My Name',
    src: 'https://i.scdn.co/image/789c6a88ba54d143af7877fc30aad3d831393f89'
  },
  {
    artist: 'Raury',
    title: 'All We Need',
    src: 'https://i.scdn.co/image/a12a3b925d49fbe32dbca90a19898b879a5457d9'
  },
  {
    artist: 'Saint Motel',
    title: 'Voyeur',
    src: 'https://i.scdn.co/image/43be68e9c1d86451e55cc2e70c782d568591269d'
  },
  {
    artist: 'Shakey Graves',
    title: 'And the War Came',
    src: 'https://i.scdn.co/image/f546d600a395b07f0079a7cc3e5b4da9c09e2319'
  },
  {
    artist: 'The Shins',
    title: 'Wincing the Night Away',
    src: 'https://i.scdn.co/image/28319e7683072624fe6bd251599ca18937d26fd8'
  },
  {
    artist: 'Still Woozy',
    title: 'Lately EP',
    src: 'https://i.scdn.co/image/e43306ad08e48944e3fe92e5b5c72d84fd820bc3'
  },
  {
    artist: 'The Strokes',
    title: 'Is This It',
    src: 'https://i.scdn.co/image/36ad5132eee494bb519cd43e70fafe427cab95de'
  },
  {
    artist: 'The Strokes',
    title: 'The New Abnormal',
    src: 'https://i.scdn.co/image/ab67616d0000b273bfa99afb5ef0d26d5064b23b'
  },
  {
    artist: 'Sufjan Stevens',
    title: 'Carrie & Lowell',
    src: 'https://i.scdn.co/image/a0779f588d1f1f50921a083f5a1fc4217f0ddf7d'
  },
  {
    artist: 'Sylvan Esso',
    title: 'Sylvan Esso',
    src: 'https://i.scdn.co/image/3fe606ee0c0bd62492628687b83b63c4d0d6bcf6'
  },
  {
    artist: 'Tame Impala',
    title: 'Currents',
    src: 'https://i.scdn.co/image/fed3593129c6254d7620b58f5af2754dff0c36a8'
  },
  {
    artist: 'Tokyo Police Club',
    title: 'Champ',
    src: 'https://i.scdn.co/image/ff7a53508a8587af1148f8bff665f930b222d618'
  },
  {
    artist: 'Vansire',
    title: 'Angel Youth',
    src: 'https://i.scdn.co/image/ab67616d0000b273c556c8613499c8e465d3ba3c'
  },
  {
    artist: 'Vince Staples',
    title: "Summertime '06",
    src: 'https://i.scdn.co/image/17576d8352989483a3067003e929ca400a74d3e6'
  },
  {
    artist: 'Wale',
    title: 'The Album About Nothing',
    src: 'https://i.scdn.co/image/6893694e2a6842d4cfef5dbc5a88eee71f12a5d4'
  },
  {
    artist: 'Wale',
    title: 'Attention Deficit',
    src: 'https://i.scdn.co/image/f5fd0927d8b41a90d7d9feafae3060619a7d9523'
  },
  {
    artist: 'WALK THE MOON',
    title: 'Walk the Moon',
    src: 'https://i.scdn.co/image/c9544bf73e1fb770fb39ffa54c30598a41f80a79'
  },
  {
    artist: 'Wolfmother',
    title: 'Wolfmother',
    src: 'https://i.scdn.co/image/aa0385072a34fb7b43bfd9454137f00012ec2f8e'
  },
  {
    artist: 'The xx',
    title: 'xx',
    src: 'https://i.scdn.co/image/765dd18a89c2dbbb8d548dfb6387001eb362d25c'
  },
  {
    artist: 'Young the Giant',
    title: 'Home of the Strange',
    src:
      'https://www.youngthegiant.com/sites/g/files/g2000007966/f/styles/music_600_600/public/201608/YTG_HOTS_AlbumArt_1000_1.jpg?itok=MotHU_rS'
  },
  {
    artist: 'Young the Giant',
    title: 'Mirror Master',
    src:
      'https://www.youngthegiant.com/sites/g/files/g2000007966/f/styles/music_600_600/public/201810/YTG_MirrorMaster_Cover_HR_final.jpg?itok=h2cudpVA'
  },
  {
    artist: 'Young the Giant',
    title: 'Young the Giant',
    src: 'https://i.scdn.co/image/443c2f393d74bbe325d50b8b13b59bf2f74d3fde'
  }
];

export default data;
