angular.module('lector.controllers',['ionic','ngCordova'])

.controller("lectorController",function($scope, $cordovaBarcodeScanner){
	$scope.leerCodigo = function(){
		alert('clic funciona');
		$cordovaBarcodeScanner.scan().then( function(imagenEscaneada){
			alert(imagenEscaneada.text);
		},function(error){
			alert("Ha ocurrido un error: "+error);
		});
	}
	

} );