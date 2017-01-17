(function() {
	function HomeCtrl(Room, $uibModal){
		this.chatRooms = Room.getRooms().all;
		this.room = Room;
		
		this.openModal = function() {
			var modal_instance = $uibModal.open({
				templateUrl: '/templates/modal.html',
				controller: function ($scope, $uibModalInstance) {
					$scope.newRoom = {name: ''};
					$scope.cancel = function() {
						$uibModalInstance.dismiss('cancel');
					};
		
					$scope.create = function() {
						$uibModalInstance.close($scope.newRoom);
					};
				},
				size: 'md',
			});
			
			modal_instance.result.then(function(data) {
				Room.addRoom(data);
			});
		};
	};
	
	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
