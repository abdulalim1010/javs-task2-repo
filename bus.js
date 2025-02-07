let age = 35;
let ticketPrice = 800;
if (age < 10) {
  discout = "free";
  console.log(discout);

}
else if (age >= 11 && age <= 30)
{
  discount = ticketPrice / 2;
  console.log(discount); 
  
}
else if (age >= 60) {
  discount = ticketPrice * 15 / 100;
  console.log(ticketPrice-discount);

}
else {
  console.log(ticketPrice);
}