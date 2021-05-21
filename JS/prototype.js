var job = function() {
  this.pays = true;
};

job.prototype.print = function() {
  console.log("I am printing from parent");
};

var TechJob = function(title, pays) {
  job.bind(this);
  this.title = title;
  this.pays = pays;
};

TechJob.prototype = Object.create(job.prototype);

var type1 = new TechJob("ux engineer", true);
type1.print();
