
var BusinessLayer=angular.module("BusinessLayer");

BusinessLayer.factory("BusinessLogic",function($http){
	
	   let BusinessLogic={};
		  Businesslogic.SignUp = (customer)=>{
			$http.post("http://localhost:49753/FoodService.asmx/SignUp",customer);
		};
		  /*Businesslogic.LogIn = (cust)=>{
		   
		   };*/
	 
	   
	return BusinessLogic;
		
});