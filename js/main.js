'use strict';

// inizializzazione e montaggio di VUE JS nel DOM HTML

const { createApp } = Vue;

createApp({data() {return {message: 'Hello Vue!'}}}).mount('#app')

// array di dati to-do

let todo = [
    { text: "Completare le consegne per il corso di programmazione", done: false },
    { text: "Fare la spesa al supermercato", done: false },
    { text: "Chiamare l'elettricista", done: false },
    { text: "Andare in palestra", done: false },
    { text: "Guardare un film", done: false }];

console.log(todo);

