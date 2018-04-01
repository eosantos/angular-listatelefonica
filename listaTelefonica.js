		var app = angular.module("listaTelefonica", []);
		angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope){
			
			$scope.app = "Lista Telefonica";
			$scope.contatos = [
			{nome: 'Eduardo', telefone: '9364-5478'},
			{nome: 'João', telefone: '9852-5212'},
			{nome: 'Rosita', telefone: '9521-2314'},
			{nome: 'Kleber', telefone: '9845-6312'}

			];
			
			$scope.operadoras = [
			{nome: "Oi", codigo: 14},
			{nome: "Vivo", codigo: 15},
			{nome: "Tim", codigo: 41}
			];
			
			$scope.adicionarContato = function(contato){
				$scope.contatos.push(contato);
				delete $scope.contato; // para limpar a caixa 
				$scope.contatoForm.$setPristine(); // volta o campo ao estado pristine
			};
			
			$scope.apagarContatos = function (contatos){
				$scope.contatos = contatos.filter(function(contato){
					if(!contato.selecionado) return contato;
				});
			};

			$scope.isContatoSelecionado = function(contatos){
				return contatos.some(function(contato){
					return contato.selecionado;
				});
			};		
				
		});	