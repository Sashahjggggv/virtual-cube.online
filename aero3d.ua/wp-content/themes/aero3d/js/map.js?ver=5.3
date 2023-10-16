jQuery(function ($) {

  var maps = [],
    mapStyles = [{
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [{
            "saturation": 36
          },
          {
            "color": "#000000"
          },
          {
            "lightness": 40
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "on"
          },
          {
            "color": "#000000"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#000000"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#000000"
          },
          {
            "lightness": 17
          },
          {
            "weight": 1.2
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
          },
          {
            "lightness": 20
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
          },
          {
            "lightness": 21
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#000000"
          },
          {
            "lightness": 17
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#000000"
          },
          {
            "lightness": 29
          },
          {
            "weight": 0.2
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
          },
          {
            "lightness": 18
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
          },
          {
            "lightness": 16
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
          },
          {
            "lightness": 19
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
          },
          {
            "lightness": 17
          }
        ]
      }
    ],
    ibOptions = {
      alignBottom: true,
      content: 'text',
      pixelOffset: new google.maps.Size(($(window).width() < 768) ? 35 : 90, -35),
      boxStyle: {
        width: ($(window).width() < 768) ? "280px" : "405px"
      },
      closeBoxMargin: "0, 0, 0, 0",
      closeBoxURL: $('.map').attr('data-ib-close-img')
    },
    ib = new InfoBox(ibOptions);

  function Map(id, mapOptions) {
    this.map = new google.maps.Map(document.getElementById(id), mapOptions);
    this.markers = [];
    this.infowindows = [];
    this.clusters = null;
  }


  function addMarker(mapId, location, index, string, image) {
    maps[mapId].markers[index] = new google.maps.Marker({
      position: location,
      map: maps[mapId].map,
      icon: {
        url: image
      }
    });

    var content = '<div class="info-box">' + string + '</div>';

    google.maps.event.addListener(maps[mapId].markers[index], 'click', function () {
      ib.setContent(content);
      ib.setPosition(location);
      ib.open(maps[mapId].map);
    });
  }

  function initialize(mapInst) {

    var lat = mapInst.attr("data-lat"),
      lng = mapInst.attr("data-lng"),
      myLatlng = new google.maps.LatLng(lat, lng),
      setZoom = parseInt(mapInst.attr("data-zoom")),
      mapId = mapInst.attr('id');

    var mapOptions = {
      zoom: setZoom,
      disableDefaultUI: true,
      scrollwheel: false,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      },
      streetViewControl: false,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM
      },
      fullscreenControl: false,
      center: myLatlng,
      styles: mapStyles
    };

    maps[mapId] = new Map(mapId, mapOptions);

    $('.marker[data-rel="' + mapId + '"]').each(function (i, el) {
      addMarker(
        mapId,
        new google.maps.LatLng(
          $(this).attr('data-lat'),
          $(this).attr('data-lng')
        ),
        i,
        $(this).attr('data-string'),
        ($(window).width() < 768) ? $(this).data('image-mobile') : $(this).data('image')
      );
    });

    //get coordinates
    /*			maps[mapId].map.addListener('rightclick', function(e){
          var lat = e.latLng.lat();
          var lng = e.latLng.lng();
          console.log(e.latLng.lat(), e.latLng.lng());
        });*/

  }

  $('.map').each(function () {
    initialize($(this));
  });

});