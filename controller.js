app.controller("MyController", function($scope){
	$scope.shopName = "Angular Stores";
	$scope.newItem="";
	$scope.numNewItems = 1;
	$scope.myItems = [];
	$scope.errorText="";
	$scope.addItem = function(numItems, item){
		$scope.myItems.push({"num":numItems,"item":item});
		$scope.newItem="";
		$scope.numNewItems=1;
		$scope.errorText="";
	};
	$scope.removeItem = function(itemIndex){
		var itemIndex = parseInt(itemIndex,10);
		$scope.myItems.splice(itemIndex,1);
	};
	$scope.changeNumNewItems = function(num){
		var num = parseInt(num,10);
		if( ($scope.numNewItems>1) || ($scope.numNewItems==1 && num>-1)){
			$scope.numNewItems = $scope.numNewItems+num;
		}
	};
	$scope.checkNum = function(){
		if($scope.numNewItems<2){
			return true;
		}return false;
	};
	$scope.validAdd=function(){
		if($scope.newItem=="" || $scope.alreadyHave()){
			return true;
		}return false;
	}
	$scope.alreadyHave = function(){
		for(var i=0;i<$scope.myItems.length;i++){
			if($scope.myItems[i].item==$scope.newItem){
				return true;
			}
		}return false;
	};
});