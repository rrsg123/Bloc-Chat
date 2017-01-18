(function() {
	function Room($firebaseArray) {
		var firebaseRef = firebase.database().ref();
		var roomRef = $firebaseArray(firebaseRef.child('rooms'));
		
		var rooms = {
			getRooms: getRooms,
			addRoom: addRoom
		};
		
		return rooms;
		
		function getRooms() {
			return {
				all: roomRef
			}
		};
		
		function addRoom(name) {
			roomRef.$add(name);
		};

		function getMessages(roomId) {
			return $firebaseArray(firebaseRef.child('messages').orderByChild("roomID").equalTo(roomId));
		}
		
	}
	
	angular
		.module('blocChat')
		.factory('Room', ['$firebaseArray', Room]);
})();
