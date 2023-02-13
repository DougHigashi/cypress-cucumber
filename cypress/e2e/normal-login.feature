# language: pt
Funcionalidade: Criação de usuário
  
  Cenário: Criando usuário na Demoblaze
    Dado que criamos um usuário
    Quando realizar login com esse usuário
    Então devo ver usuário no topo da página

  Cenário: Logando com um usuário existente
    Dado que o usuário "usuario_ME" já está cadastrado
    Quando tentar criar o usuário "usuario_ME"
    Então devo validar o alerta "signupError"