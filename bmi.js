const height = 2 ;//height in m
const weight = 80;//weight in kg

 const BMI = weight / (height * height);
console.log(BMI);
if (BMI < 18.5)
{
  console.log("underWeighy");

}
else if (BMI >= 18.5 && BMI <= 24.9)
{
  console.log("normal");
}
else if (BMI >= 25 && BMI <= 29.9)
{
  console.log("you are overweight");
}
else {
  console.log("overweight");
}