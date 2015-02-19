$("document").ready(function() {
  if ($('#codeflower').length) {
    var myFlower = new CodeFlower("#codeflower", 600, 400);
    myFlower.update('data/bookkeeping.json');
  }
});