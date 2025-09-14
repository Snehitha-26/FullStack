console.log("SRIT");
//Data Types
num=12;
str="hi";
bol=true;
bigint=752085208228520520;
undefined=undefined;

//var,let,const
var name1="srit";
console.log(name1);
var name1="hi";
console.log(name1);

let course="cse";

let age=20;
console.log(age)
age=21;
console.log(age);

const givename="srinivasa rit";
console.log(givename);
//functions
function generateWelcomeMessage(name) {
    return "Welcome, " + name+"! Good morning";
}
let welcome_message = generateWelcomeMessage(givename);
console.log(welcome_message);

let addage=age+2;
let subage=age-2;
let mulage=age*2;
let divage=age/2;

console.log(addage);
console.log(subage);
console.log(mulage);
console.log(divage);

console.log("Web page");

let length=10;
let width=30;

area=length*width;
console.log(area);

height=15;
triarea=length*width*height;
console.log(triarea);

let n=7;
let fact=1;

for(let i=1;i<=n;i++){
    fact=fact*i;
}
console.log("factorial of" ,n,"is",fact);

let a=10;
let b=5;

function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
function mul(a,b)
{
    return a*b;
}
function div(a,b)
{
    return a/b;
}
console.log(add(4,5));
console.log(sub(10,5));
console.log(mul(5,6));
console.log(div(3,4));

function compoundinterest(p,r,t)
{
    return p*(Math.pow((1+r/100),t));
}
console.log("CI:" +compoundinterest(20000,2,3));
//let input=prompt("enter a number");
//console.log(input1);
age=20
if(age>=18){
    console.log("eligible to vote");
}
else{
    console.log("not eligible");
}

function calc(a,b,opr)
{
    if(opr==1)
    {
        return a+b;
    }
    if(opr==2)
    {
        return a-b;
    }
    if(opr==3)
    {
        return a*b;
    }
    if(opr==4)
    {
        return a/b;
    }
}
console.log(calc(6,7,1));
console.log(calc(7,5,2));
console.log(calc(7,5,3));
console.log(calc(7,5,4));

marks=87;
if(marks>=90)
{
    console.log("Grade A");
}
else if(marks>=80)
{
    console.log("Grade B");
}
else if(marks>=70)
{
    console.log("Grade C");
}
else if(marks>=60)
{
    console.log("Grade D");
}
 else if(marks>=50)
{
    console.log("Grade E");
}
else{
    console.log("Fail")
}
//a>>b
//sp=30kmph
//every 10 sp =sp*2
//max speed=120
//he travelled for 96mins
let speed=30;
let distance=0;
for(i=10;i<=90;i+=10){
    distance=distance+speed/6;
    if(speed<120){
        speed*=2;
    }
}
distance=distance+speed/10
console.log(distance);
//i1 =10
//d=d+s/6==0+30/6=5
//i=i+10
//s<120 so s=s*2 == 30*3=60
//i2 
//i=20
//d=5+60/6=5+10=15
//s<120 s=sa*2=120
//i=i+10=30
//i3 
//i=30
//d=15+120/6==15+20
//i=i+10=40
// b=30 for 4km
// for the next 5km the price is 10
// for the nxt 10km the price is 15
//if the kms are more the will be 20
//person travelled 19.5 kms what will be the price

function calculateFare(km) {
    let fare = 0;

    if (km <= 4) {

        fare = 30;
    } else if (km <= 9) {
        fare = 30 + (km - 4) * 10;
    } else if (km <= 19) {

        fare = 30 + (5 * 10) + (km - 9) * 15;
    } else {
        fare = 30 + (5 * 10) + (10 * 15) + (km - 19) * 20;
    }

    return fare;
}

let dist = 19.5;
console.log("Total fare for " + dist + " km = Rs." + calculateFare(dist));
let j=0;
while(j <3){
    console.log(j);
    j++;
}

let k=1;
let m=5;
while(k<=10){
    console.log(m ,"*", k, "=",m*k);
    k++;
}
//eh65vkek

