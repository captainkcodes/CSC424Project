// Machine Learning
// Nearest Neighbor Recommendations
// classification-regression


var dataset;
var students; // number of students

var resultP;
var resultDivs = [];

function preload() {
  dataset = loadJSON('classdata.json'); // dataset
}

function setup() {
  noCanvas();
  students = {};

  var dropdowns = [];
//html
  var Classes = dataset.Classes;
  for (var i = 0; i < Classes.length; i++) {
    var div = createDiv(Classes[i]);
    var dropdown = createSelect('');
    dropdown.title = Classes[i];
    dropdown.option('no vote');
    dropdown.parent(div);
    dropdowns.push(dropdown);
    for (var star = 1; star < 6; star++) {
      dropdown.option(star);
    }
  }

  var button = createButton('submit');
  button.mousePressed(predictVotes);
  resultP = createP('');
//create class votings with dropdown menu
  function predictVotes() {
    var newUser = {};
    for (var i = 0; i < dropdowns.length; i++) {
      var title = dropdowns[i].title;
      var vote= dropdowns[i].value();
      if (vote== 'no vote') {
        vote= null;
      }
      newUser[title] = vote;
    }
//algorithm function call
    findNearestNeighbors(newUser);
  }
// algorithm to findNearestNeighbors
  function findNearestNeighbors(user) {
    for (var i = 0; i < resultDivs.length; i++) {
      resultDivs[i].remove();
    }
    resultDivs = [];
//clear results
    var similarityScores = {};
    for (var i = 0; i < dataset.students.length; i++) {
      var other = dataset.students[i];//students from dataset
      var similarity = euclideanDistance(user, other); //compare simularities
      similarityScores[other.name] = similarity;
      

    }
 //compare students to findNearestNeighbors
    dataset.students.sort(compareSimilarity);

    function compareSimilarity(a, b) {
      var score1 = similarityScores[a.name];
      var score2 = similarityScores[b.name];
      return score2 - score1;
    }

    for (var i = 0; i < dataset.Classes.length; i++) { //for each class, title = the class data
      var title = dataset.Classes[i];
      if (user[title] == null) { // if null 
        var k = 5;// 5 students
        var weightedSum = 0;
        var similaritySum = 0;
        for (var j = 0; j < k; j++) { // calculate sum of votes from 5 students
          var name = dataset.students[j].name;
          var sim = similarityScores[name];
          var ratings = dataset.students[j];
          var vote= ratings[title];
          if (vote!= null) {
            weightedSum += vote* sim;
            similaritySum += sim;
          }
        }

        var stars = nf(weightedSum / similaritySum, 1, 1);//calculate total to a 1 decimal point
        var total;
        if(stars >= 4){//if caculated total is high recommended/ else not recommended
            total = "top recommended"
        }
        else if(stars >= 3){
            total = "recommended";
        }
        else{
           total = "not recommended"; 

        }

      
        var div = createDiv(title + ': ' + total);// print totals

      
        resultDivs.push(div);
        if(total == "recommended" ||  total == "top recommended"){
        div.parent(resultP);//if recommended print first
         }


      }
    }


  }
}

function euclideanDistance(votes1, votes2) {//determining simularies via votes in dataset
  var Classes = dataset.Classes; //votes

  var sumSquares = 0;
  for (var i = 0; i < Classes.length; i++) { //for each class 
    var title = Classes[i];
    var vote1 = votes1[title];
    var vote2 = votes2[title];
    if (vote1 != null && vote2 != null) {
      var diff = vote1 - vote2;
      sumSquares += diff * diff;
    }
  }
  var d = sqrt(sumSquares);

  var similarity = 1 / (1 + d);//if squared sum is zero we can still divide 1 by the results plus 1.  
  
  return similarity;
}
