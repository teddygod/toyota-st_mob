/**   google.maps.Map(document.getElementById('map_1'),
 * Created by Admin on 14.02.2017.
 */
"use strict";
$(document).ready(function () {
    $(function () {
        var map = new google.maps.Map(mocument.getElementById('map_1'),
            {
                zoom: 16,
                center: {lat: 47.946239, lng: 33.441001},
                scrollwheel: false,
                mapTypeControl: false,
                panControl: false,
                disableDefaultUI: false,
                mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                    position: google.maps.ControlPosition.RIGHT_BOTTOM
                },
                zoomControl: true,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_CENTER
                },
                scaleControl: true,
                streetViewControl: false
            });

        var image = './images/map_1.png';
        var beachMarker = new google.maps.Marker({
            position: {lat: 47.946239, lng: 33.441001},
            map: map,
            icon: image
        });
    });
});