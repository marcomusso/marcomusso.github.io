$("document").ready(function() {

  d3.json('data/bookkeeping.json', function(json){
    if ($('#codeflower').length) {
      var myFlower = new CodeFlower("#codeflower", 800, 800);
      myFlower.update(json);
    }
  });
});