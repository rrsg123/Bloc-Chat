(function() {
    function Room($scope, $firebaseArray) {
        var firebaseRef = new Firebase("https://bloc-chat-ce46d.firebaseio.com");
        
        $scope.rooms = $firebaseArray(firebaseRef.child('rooms'));
        
        $scope.addRoom = function() {
            $scope.rooms.$add({
                name: $scope.newRoomName
            });
        };
        
        return {
            all: rooms
        };
    }

    angular
        .module('blocChat')
        .factory('Room', ['$scope', '$firebaseArray', Room]);
})();
