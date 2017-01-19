(function() {
	function HomeCtrl(Room, Message, $uibModal){
		this.chatRooms = Room.getRooms().all;
		this.room = Room;		
		this.sendMessage = function() {
			Message.send(this.newMessage, this.selectedRoom.$id);
			this.newMessage = '';
		} 
		
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
		.controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
