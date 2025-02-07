const myNumber = 80;
const myFriendNumber = 60;
if (myNumber >= 80) {
  if (myFriendNumber > 80) {
    console.log("then go for a lunch");
  }
  else if (myFriendNumber < 80 && myFriendNumber >= 60) {
    console.log(" good luck next time");
  }
  else if (myFriendNumber < 60 && myFriendNumber >= 40) {
    console.log("keep your friend's message unseen");
  }
  else if (myFriendNumber < 40){
    console.log("block");
  }
}
else {
  console.log("to home and sleep and act sad");
}