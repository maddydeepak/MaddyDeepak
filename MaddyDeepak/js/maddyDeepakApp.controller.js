maddyDeepakApp.controller('homeController', function($rootScope, $location) {
	window.scrollTo(0, 0);
	$rootScope.pageTitle = 'Home | Maddy Deepak';
});

maddyDeepakApp.controller('aboutController', function($rootScope) {
	window.scrollTo(0, 0);
	$rootScope.pageTitle = 'About | Maddy Deepak';
});

maddyDeepakApp.controller('photographyController', function($scope, $rootScope, $http, $uibModal, dialogService) {
	window.scrollTo(0, 0);
	$rootScope.pageTitle = 'Photography | Maddy Deepak';
	$http.get('resources/photographs.json').success(function(response) {
		$scope.imageDetails = response.imageDetails;
	});
	$scope.openImage = function(imagePath, imageDescr, facebookLink) {
		dialogService.imageModal(imagePath, imageDescr, facebookLink);
	}
});

maddyDeepakApp.controller('contactController', function($scope, $rootScope, $window) {
	$rootScope.pageTitle = 'Contact | Maddy Deepak';
	singleMap('12.948935', '77.715740');
	function singleMap(latitude, longitude) {
	    var location = 'Shirdi Sai Temple Main Road, Munnekolala, Kundalahalli, Bengaluru, Karnataka, India 560037';//Define address
	    var map = new google.maps.Map(document.getElementById('contact_map'), {
	        zoom: 12,
	        center: new google.maps.LatLng(latitude, longitude),
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	    });//initialize map and set options
	 
	    var infowindow = new google.maps.InfoWindow();
	    var marker;
	    if (location == "") {
	        return false;
	    }
	    
	    //initialize marker
	    marker = new google.maps.Marker({
	        position: new google.maps.LatLng(latitude, longitude),
	        map: map
	    });
	 
	    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');//set marker icon
	    var i = 0;
	    google.maps.event.addListener(marker, 'click', (function(marker, i) {
	        return function() {
	            var str = setMarker(location);
	            infowindow.setContent(str);
	            infowindow.open(map, marker);
	        }
	    })(marker, i));
	}
	 
	//Function for generate marker and show address in marker box
	function setMarker(location) {        
	    var str = '<div style="width:100%">';
	    str += '<div  style="float:left;text-align: center;width:100%;">' + location + '</div>';
	    str += '</div>';
	    return str;
	}
	$scope.contactPageHeight = $window.innerHeight + 'px';
	window.scrollTo(0, 0);
});

maddyDeepakApp.controller('modalInstanceController', function($timeout, $uibModalInstance, $scope, imagePath, imageDescr, facebookLink) {
	$scope.loader = true;
	$scope.imagePath = imagePath;
	$scope.imageDescr = imageDescr;
	$scope.facebookLink = facebookLink;
	$scope.closeImage = function() {
		$uibModalInstance.close();
	}
	$timeout(function() {
		$scope.loader = false;
	}, 4000);
});
