app.controller("MyController", function($scope){
	$scope.shopName = "Angular Stores";
	$scope.newItem="";
	$scope.numNewItems = 1;
	$scope.myItems = [];
	$scope.hint="";
	/**
	Add an item and its quantity to the list.
	*/
	$scope.addItem = function(){
		$scope.myItems.push({"quantity":$scope.numNewItems,"itemName":$scope.newItem});
		$scope.newItem="";
		$scope.numNewItems=1;
	};
	/**
	Remove an item from the list, using its index.
	*/
	$scope.removeItem = function(itemIndex){
		var itemIndex = parseInt(itemIndex,10);
		$scope.myItems.splice(itemIndex,1);
		$scope.hint="";
	};
	$scope.setInputHint = function(arg){
		if($scope.newItem==""){
			$scope.hint="Please enter item name!";
		}else{
			if(arg=="num"){
				$scope.hint="How many "+$scope.newItem+"?";
			}else{
				$scope.hint="Add "+$scope.numNewItems+" x "+$scope.newItem+" to list!";
			}
		}
	}
	/**
	Increment or decrement number of entered items by 1.
	*/
	$scope.changeNumNewItems = function(index,num){
		if(index<0){
			if( ($scope.numNewItems>1) || ($scope.numNewItems==1 && num>-1)){
				$scope.numNewItems = $scope.numNewItems+num;
			}
		}else{
			if( ($scope.myItems[index].quantity>1) || ($scope.myItems[index].quantity==1 && num>-1)){
				$scope.myItems[index].quantity = $scope.myItems[index].quantity+num;
			}
		}
	};
	/**
	Check if number of entered items is less than 2.
	Return true if it is.
	*/
	$scope.checkNum = function(index){
		if(index<0){
			if($scope.numNewItems<2){
				return true;
			}return false;
		}else{
			if($scope.myItems[index].quantity<2){
				return true;
			}return false;
		}
		
	};
	/**
	Check if no item has been entered, and if item has already been added to the list.
	Return true if either have been.
	*/
	$scope.validAdd=function(){
		var valid=false;
		if($scope.newItem==""){
			return true;
		}
		for(var i=0;i<$scope.myItems.length;i++){
			if($scope.myItems[i].itemName==$scope.newItem){
				$scope.hint=$scope.newItem+" is already on the list!";
				return true;
			}
		}return valid;
	}
});