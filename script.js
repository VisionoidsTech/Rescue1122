var config = {
  apiKey: "AIzaSyCGefoR_04QadkVlg4_5WPYJwP8O01wvGI",
  authDomain: "tracker-d669a.firebaseapp.com",
  databaseURL: "https://tracker-d669a.firebaseio.com",
  projectId: "tracker-d669a",
  storageBucket: "tracker-d669a.appspot.com",
  messagingSenderId: "846903125766"
};
firebase.initializeApp(config);



$(document).ready(function () {

  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      if($('#sidebar').hasClass('active'))
      {
       // alert("fuck");
      }
  });

});
var mymap = L.map('mapid').setView([31.4504, 73.1350], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFsaWt1bWVyIiwiYSI6ImNqdGE4bHNicjAzeW00YXFpNDF5MmtmdXMifQ._PpurAceSZCjTiwcYa_dzg', {
   attribution: 'Rescue 1122 &copy; Developed by <a href="https://www.visionoids.com">Visionoids</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
   maxZoom: 18,
   id: 'mapbox.streets',
   accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
function addMarker(lon, lat, plate)
{
  return L.marker([lon, lat]).addTo(mymap).bindPopup(plate, {closeOnClick: false, autoClose: false}).openPopup();
}
function fuckmoveMarker(mar, lat, lon)
{
  mar.setLatLng(new L.LatLng(lat, lon)).update();
}


var ref = firebase.database().ref();
var markers = new Array();

ref.once("value", function(snapshot) {
  var snap = snapshot.val();
  var obj = snap['Ambulances'];
  var ambulances = Object.keys(obj).map(function(key) {
    return [Number(key), obj[key]];
  });
   for(var i = 0; i < ambulances.length; i++)
   {
  markers.push(addMarker(ambulances[i][1]['latitude'].toFixed(4), ambulances[i][1]['longitude'].toFixed(4), ambulances[i][1]['licenseno']));
   }
}, function (error) {
   console.log("Error: " + error.code);
});

ref.on("value", function(snapshot) {
  var snap = snapshot.val();
  var obj = snap['Ambulances'];
  var ambulances = Object.keys(obj).map(function(key) {
    return [Number(key), obj[key]];
  });
   for(var i = 0; i < ambulances.length; i++)
   {
  moveMarker(markers[i], ambulances[i][1]['latitude'].toFixed(4), ambulances[i][1]['longitude'].toFixed(4));
   }
}, function (error) {
   console.log("Error: " + error.code);
});

$(document).ready(function() {
  var value = "blablabla";

  for (var i = 0; i < 3; i++)
  {
    var html = '';
    html += '<div class="card" >';
    html += '     <div class="card-body" >';
    html += i;
    html += '     </div>';
    html += '</div>';
    $('#blabla').append(html);
  }




});
