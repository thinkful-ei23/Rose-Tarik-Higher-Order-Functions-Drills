'use strict';

function repeat (fn, n) {
  let i = 0;
  while (i < n) {
    fn();
    i++;
  }
}

function hello () {
  console.log('Hello world');
}

function goodbye () {
  console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);