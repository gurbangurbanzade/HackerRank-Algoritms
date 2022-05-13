let crew_id = [5, 1, 4, 2];
let job_id = [4, 7, 9, 10];

function getMinCost(crew_id, job_id) {
  let sum = 0;
  let crew = crew_id.sort(function (a, b) {
    return a - b;
  });
  let job = job_id.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < crew.length; i++) {
    sum += Math.abs(crew[i] - job[i]);
  }
  console.log(crew);
  console.log(job);
  console.log(sum);
  return sum;
}
getMinCost(crew_id, job_id);
