(function() {
    function Room($firebaseArray) {
        
	var firebaseRef = firebase.database().ref().child("rooms")
        
        var rooms = $firebaseArray(firebaseRef);
        
        var addRoom = function() {
           rooms.$add({
                name: newRoomName
            });
        };
        
        return {
            all: rooms
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
