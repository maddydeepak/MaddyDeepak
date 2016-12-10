maddyDeepakApp.factory('dialogService', [ '$uibModal', function($uibModal) {
	return {
		imageModal : imageModal
	}
	function imageModal(imagePath, imageDescr, facebookLink) {
		var modalInstance = $uibModal.open( {
			templateUrl : 'views/imageModal.html',
			controller : 'modalInstanceController',
			resolve : {
				imagePath : function() {
					return imagePath;
				},
				imageDescr : function() {
					return imageDescr;
				},
				facebookLink : function() {
					return facebookLink;
				}
			}
		});
		return modalInstance.result;
	}
} ])