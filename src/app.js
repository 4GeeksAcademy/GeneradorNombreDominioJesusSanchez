import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['El', 'tu'];
  let adj = ['rincon', 'libro'];
  let noun = ['vago', 'mapache'];
                                     
  for (let primero = 0; primero < pronoun.length; primero++) 
  for (let segundo = 0; segundo < adj.length; segundo++)
  for (let tercero = 0; tercero < noun.length; tercero++)

  console.log(pronoun[primero] + adj[segundo] + noun [tercero] + ".com");


  console.log("Hello Rigo from the console!");
};
