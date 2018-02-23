function LoadGmaps() {
	var myLatlng = new google.maps.LatLng(40.7055603,-74.0139587);
	var myOptions = {
		zoom: 15,
		center: myLatlng,
		disableDefaultUI: true,
		panControl: false,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL
		},

		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
		},
		streetViewControl: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
		}
	var map = new google.maps.Map(document.getElementById("MyGmaps"), myOptions);
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title:"25 broadway, new york new york"
	});
}

