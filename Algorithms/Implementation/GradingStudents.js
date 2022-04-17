"use strict";
let a = [73, 67, 38, 33];

function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 100 && grades[i] > 95 && 100 - grades[i] < 3) {
      grades[i] = 100;
    } else if (grades[i] < 95 && grades[i] > 90 && 95 - grades[i] < 3) {
      grades[i] = 95;
    } else if (grades[i] < 90 && grades[i] > 85 && 90 - grades[i] < 3) {
      grades[i] = 90;
    } else if (grades[i] < 85 && grades[i] > 80 && 85 - grades[i] < 3) {
      grades[i] = 85;
    } else if (grades[i] < 80 && grades[i] > 75 && 80 - grades[i] < 3) {
      grades[i] = 80;
    } else if (grades[i] < 75 && grades[i] > 70 && 75 - grades[i] < 3) {
      grades[i] = 75;
    } else if (grades[i] < 70 && grades[i] > 65 && 70 - grades[i] < 3) {
      grades[i] = 70;
    } else if (grades[i] < 65 && grades[i] > 60 && 65 - grades[i] < 3) {
      grades[i] = 65;
    } else if (grades[i] < 60 && grades[i] > 55 && 60 - grades[i] < 3) {
      grades[i] = 60;
    } else if (grades[i] < 55 && grades[i] > 50 && 55 - grades[i] < 3) {
      grades[i] = 55;
    } else if (grades[i] < 50 && grades[i] > 45 && 50 - grades[i] < 3) {
      grades[i] = 50;
    } else if (grades[i] < 45 && grades[i] > 40 && 45 - grades[i] < 3) {
      grades[i] = 45;
    } else if (grades[i] < 40 && 40 - grades[i] < 3) {
      grades[i] = 40;
    }
  }
  return grades;

  //return console.log(grades);
}

gradingStudents(a);
