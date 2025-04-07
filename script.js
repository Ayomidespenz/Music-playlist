//Create my playlist

const playlist = [{
    title : "Ojuelegba",
    artist : "wizkid",
    duration : "3min:45sec",
    genre : "Afropop",
    yearOfProduction : "2014",
}
]
console.table(playlist)

//Loop through  the playlist using for...of loop

for (let song of playlist){
    console.log(`Now playing : ${song.title} by ${song.artist} ${song.duration}  ${song.genre} ${song.yearOfProduction}`)
}

// I created a new array for rocksongs
const rockSongs = [{
    title : "Ojuelegba",
    artist : "wizkid",
    duration : "3min:45sec",
    genre : "rock",

},
{
    title  : "Lagos vibes",
    genre : "rock",
    duration : "6mins : 00sec"


}
  ];
  console.table(rockSongs)
  //Filter songs with array method

  const playlists =  rockSongs.filter(song => song.genre === "rock");
  console.table(playlists)
 
  //Filter songs with a duration longer than 5mins

const Song = rockSongs.filter(song => {
    const [minutes, seconds] = song.duration;
    return minutes > 5 ;
});
console.table(Song);

// Step 4: Modify Songs with Array Methods

//I create another object in array called list.
const list =[{
    title : "Ojuelegba",
    artist : "wizkid",

},{    title : "Essence",
    artist : "wizkid",
    
    
},{
    title : "God's plan",
    artist : "drake"
}

]
console.table(list)
//Using map method 
const upperCasePlaylist = list.map(song => ({
    title: song.title.toUpperCase(),
    artist: song.artist.toUpperCase(),
    playCount: 0, // Add playCount property
  }));
  
  console.table(upperCasePlaylist);

  //I created my playlist
  const songs = [
    { title: "Moving", duration: "3:10" },
    { title: "BAND4BAND", duration: "3:02" },
    { title: "Loju", duration: "2:30" },
    { title: "Wavy", duration: "3:03" },
    { title: "One Kind Love", duration: "4:35" },
  ];

  //This is my function called formatDuration

  function formatDuration(duration) {
    const parts = duration.split(':');
    const minutes = parseInt(parts[0]);
    const seconds = parseInt(parts[1]);

    //This lines of code i commented is my conditional statement using if...else && Ternary operator But i still try another way to get the same output thats the second method beneath it !!!!  
  
//     let result = '';
  
//     if (minutes > 0) {
//       result += `${minutes} minute${minutes > 1 ? 's' : ''}`;
//     }
  
//     if (minutes > 0 && seconds > 0) {
//       result += ' and ';
//     }
  
//     if (seconds > 0) {
//       result += `${seconds} second${seconds > 1 ? 's' : ''}`;
//     }
  
//     return result;
//   }

let result = '';

if (minutes > 0) {
  result += minutes + ' minute';
  if (minutes > 1) {
    result += 's';
  }
}

if (minutes > 0 && seconds > 0) {
  result += ' and ';
}

if (seconds > 0) {
  result += seconds + ' second';
   if (seconds > 1) {
     result += 's';
   }
}

return result;
}

  songs.forEach(song => {
    const formattedDuration = formatDuration(song.duration);
    console.log(`${song.title}: ${formattedDuration}`);
  });



// Sort by title alphabetically
const sortedByTitle = [...songs]; // Create a copy without repeating the array have declared already.And that 3 dots is called "Spread syntax"

sortedByTitle.sort(function(a, b) {
  if (a.title < b.title) {
    return -1; // a comes before b
  }
  if (a.title > b.title) {
    return 1; // a comes after b
  }else
  return 0; // titles are the same
});

console.table(sortedByTitle);

// Sort by duration (convert to seconds)
const sortedByDuration = [...songs]; // Create a copy without repeating the array have declared already.And that 3 dots is called "Spread syntax"

function convertToSeconds(duration) {
  const parts = duration.split(':');
  const minutes = parseInt(parts[0]);
  const seconds = parseInt(parts[1]);
  return minutes * 60 + seconds;
}

sortedByDuration.sort(function(a, b) {
  const durationA = convertToSeconds(a.duration);
  const durationB = convertToSeconds(b.duration);
  return durationA - durationB; // Sort by difference
});


console.table(sortedByDuration);

function playRandomSong(songs) {
    // 1. Get the number of songs in the playlist
    const numberOfSongs = songs.length;
  
    // 2. Generate a random number between 0 and the number of songs - 1
    const randomNumber = Math.random(); // This creates a number between 0 and 1
    const randomNumber2 = randomNumber * numberOfSongs; 
    const RoundedDown = Math.floor(randomNumber2); // Round it down to a whole number
  
    // 3. Use the random number to pick a song from the playlist
    const randomSong = songs[RoundedDown];
  
    console.log(`Now playing a random song: ${randomSong.title} by  ${randomSong.artist}`);
  }
  
  playRandomSong(list);
//   console.log(songs)

