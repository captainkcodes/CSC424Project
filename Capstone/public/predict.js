
// Machine Learning
// Nearest Neighbor Recommendations
// classification-regression


var data;
var users;

var resultP;
var resultDivs = [];

function preload() {
  data = loadJSON('classdata.json');
}

function setup() {
  noCanvas();
  users = {};

  var dropdowns = [];
//html
  var titles = data.titles;
  for (var i = 0; i < titles.length; i++) {
    var div = createDiv(titles[i]);
    var dropdown = createSelect('');
    dropdown.title = titles[i];
    dropdown.option('no vote');
    dropdown.parent(div);
    dropdowns.push(dropdown);
    for (var star = 1; star < 6; star++) {
      dropdown.option(star);
    }
  }

  var button = createButton('submit');
  button.mousePressed(predictRatings);
  resultP = createP('');
//create class votings with dropdown menu
  function predictRatings() {
    var newUser = {};
    for (var i = 0; i < dropdowns.length; i++) {
      var title = dropdowns[i].title;
      var rating = dropdowns[i].value();
      if (rating == 'no vote') {
        rating = null;
      }
      newUser[title] = rating;
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
    for (var i = 0; i < data.users.length; i++) {
      var other = data.users[i];//students from dataset
      var similarity = euclideanDistance(user, other); //compare simularities
      similarityScores[other.name] = similarity;
      

    }
 //compare students to findNearestNeighbors
    data.users.sort(compareSimilarity);

    function compareSimilarity(a, b) {
      var score1 = similarityScores[a.name];
      var score2 = similarityScores[b.name];
      return score2 - score1;
    }

    for (var i = 0; i < data.titles.length; i++) { //for each class, title = the class data
      var title = data.titles[i];
      if (user[title] == null) {
        var k = 5;// 5 students
        var weightedSum = 0;
        var similaritySum = 0;
        for (var j = 0; j < k; j++) { // calculate sum of votes
          var name = data.users[j].name;
          var sim = similarityScores[name];
          var ratings = data.users[j];
          var rating = ratings[title];
          if (rating != null) {
            weightedSum += rating * sim;
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

function euclideanDistance(ratings1, ratings2) {//determining simularies via votes in dataset
  var titles = data.titles; //votes

  var sumSquares = 0;
  for (var i = 0; i < titles.length; i++) { //for each class 
    var title = titles[i];
    var rating1 = ratings1[title];
    var rating2 = ratings2[title];
    if (rating1 != null && rating2 != null) {
      var diff = rating1 - rating2;
      sumSquares += diff * diff;
    }
  }
  var d = sqrt(sumSquares);

  var similarity = 1 / (1 + d);//if squared sum is zero we can still divide 1 by the results plus 1.  
  
  return similarity;
}
