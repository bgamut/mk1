 var mapOptions = {zoom: 13, mapTypeId: google.maps.MapTypeId.SATELLITE};
map = new google.maps.Map(Template.contact.getElementById("map"), mapOptions); 
//
Template.contact.helpers
Template.contact.rendered = function() {
GoogleMaps.init({
	'key': 'AIzaSyDEanW5yt18XUB204sCs5TBiZOaEcK8R5k'
	},
        this.map.setCenter(new google.maps.LatLng(35.363556, 138.730438 ))
)};