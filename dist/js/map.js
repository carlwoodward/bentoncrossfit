$(window).load(function() {
  var locations = [
    ['<div class="infobox"><h3 class="title"><a href="#contact">BentonCrossfit</a></h3><span>3/241-243 Old Hume Hwy<br/>Mittagong<br/>NSW 2575</span><br>0406607144</p></div></div></div>', -34.446293, 150.432184, 2]
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    scrollwheel: false,
    navigationControl: true,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
    styles: [ { "stylers": [ { "hue": "#80BC41" },  {saturation: 20},
      {gamma: 1} ] } ],
    center: new google.maps.LatLng(-34.446293, 150.432184),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {

    marker = new google.maps.Marker({ 
      position: new google.maps.LatLng(locations[i][1], locations[i][2]), 
      map: map
    });


    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);

      }
    })(marker, i));
  }

  $(document).on("shown.bs.tab", function(event, data){
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
});
