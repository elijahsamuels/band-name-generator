name1 = [
  "Diamond",
  "Emerald",
  "Ruby",
  "Sapphire",
  "Golden",
  "Silver",
  "Copper",
  "Red",
  "Blue",
  "Silver",
  "Crimson",
  "Black",
  "Royal",
  "Regal",
  "Green",
  "White",
  "Funky",
  "Soul",
  "Motor",
  "Motor",
  "Blue Water",
  "Bay",
  "River",
  "Space",
  "North",
  "South",
  "East",
  "West",
  "Highline",
  "Lowlands",
  "Midlands",
  "Highlands",
  "Prestigious",
  "Pearl",
  "Opal",
  "Topaz",
  "Sonic",
  "",
]

name2 = [
  "Empire",
  "Kings",
  "Devils",
  "Angels",
  "Jesters",
  "Arrow",
  "Heart",
  "Spade",
  "Club",
  "Soul",
  "Water",
  "Sonic",
  "Star",
]

name3 = [
  "Collective",
  "Group",
  "Band",
  "Ensemble",
  "Players",
]

function getName(listOfNames) {
  return listOfNames[Math.floor(Math.random() * listOfNames.length)]
}

function bandName(list1, list2, list3) {
  return document.getElementById("bandname").innerHTML = `The ${getName(list1)} ${getName(list2)} ${getName(list3)} `
}

bandName(name1, name2, name3)

// console.log(bandName(name1, name2, name3))