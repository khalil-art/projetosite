var array_carrinho_compras = [];
var globalErroCampo = false;
var array_login = [];
var array_cadastrar = [];
var banco = window.localStorage;
var banco2 = window.localStorage;
var login = [];
var cadastrar = [];

$(document).ready(function(){
    
    $("#bGravar").click(function(){
        var nome = $("#tEscrever").val();
        var senha = $("#tEscrever-2").val();
        var aux = [];
        aux.push(nome);
        aux.push(senha);
        login.push(aux);
        banco.setItem("usuarios", JSON.stringify(login));
    });
    fLocalClickLogin();
    fLocalClickcadastrar();
    fLocalenviarcomentario();
    fLocalcompraproduto();
    fLocalcompraproduto2();
    fLocalcompraproduto3();
    fLocalcompraproduto4();
    fLocalcompraproduto5();
    fLocalcompraproduto6();
    fLocalcompraproduto7();
    fLocalcompraproduto8();

    
   
});
$(document).ready(function(){

    
    $("#bcadastrar").click(function(){
        var nome2 = $("#tescrever2").val();
        var senha2 = $("#tescrever3").val();
        var sobrenome = $("#tescrever4").val();
        var email = $("#tescrever5").val();
        var cpf = $("#tescrever6").val();
        var rg = $("#tescrever7").val();
        var aux = [];
        aux.push(nome2);
        aux.push(senha2);
        aux.push(sobrenome);
        aux.push(email);
        aux.push(cpf);
        aux.push(rg)
        cadastrar.push(aux);
        banco2.setItem("Cadastrados", JSON.stringify(cadastrar)); 
    });
    fLocalClickLogin();
    fLocalClickcadastrar();
    fLocalenviarcomentario()

    
    
});


function fLocalClickLogin(){

$("#bGravar").click(function(){
    var login = $("#tEscrever").val();
    var senha = $("#tEscrever-2").val();
    array_login.push(login, senha);
    console.log(array_login);
    if(login == false){
        alert("Os campos vazios são obrigatorios");
        $("#tEscrever").focus();
   
    }
    else{
        alert("Gravado com sucesso")
        fLocalMostralogin();
    }
    
});
}
function fLocalenviarcomentario(){
$("#enviar-comentario").click(function(){
    alert("seu comentario foi enviado, muito obrigado pelo feedback.");

    
});
}



function fLocalClickcadastrar(){

    $("#bcadastrar").click(function(){
    var cadastrar = $("#tescrever2").val();
    var cadastrar2 = $("#tescrever3").val();
    var cadastrar3 = $("#tescrever4").val();
    var cadastrar4 = $("#tescrever5").val();
    var cadastrar5 = $("#tescrever6").val();
    var cadastrar6 = $("#tescrever7").val();
    array_cadastrar.push(cadastrar, cadastrar2, cadastrar3, cadastrar4, cadastrar5, cadastrar6);
    console.log(array_cadastrar);
    if(cadastrar3 == false){
        alert("O E-mail é obrigatorio!");
        $("#tescrever4").focus();
   
    }
    else{
        alert("Gravado com sucesso")
        fLocalMostracadastro();
    }
   
    
});
}
    


function fLocalMostralogin(){
    $("#divCarrinho").html("");
    for(var i = 0; i < array_login.length; i++){
        $("#divCarrinho").append(i + " : " + array_login[i] + "<br>");

    }

}

function fLocalMostracadastro(){
    $("#divCarrinho").html("");
    for(var i = 0; i < array_cadastrar.length; i++){
        $("#divCarrinho").append(i + " : " + array_cadastrar[i] + "<br>");
    }
}

var array_carrinho_compras = ["Roupa Masculina de praia com folhas estampadas/ Tamanho: G /referencia: 518237 /R$ 30,54 reais."];
var array_carrinho_compras2 = ["Roupa Masculina de praia com passaro estampado/ Tamanho: M /referencia: 231323 /R$ 22,54 reais"];
var array_carrinho_compras3 = ["Roupa Masculina de praia com pénas estampadas/ Tamanho:g/ greferencia: 643321/R$ 50,00 reais."];
var array_carrinho_compras4 = ["Roupa Masculina de praia com Palmeiras estampadas/ Tamanho:M/ referencia: 932012/R$ 25,00 reais"];
var array_carrinho_compras5 = ["Shorts de praia feminino com flores estampadas/ Tamanho:m/ referencia: 436777/R$ 60,00 reais"];
var array_carrinho_compras6 = ["Shorts de praia feminino com little stitch estampado/Tamanho:g/referencia: 274814/R$ 47,29 reais"];
var array_carrinho_compras7 = ["conjunto feminino florado/Tamanho:g/referencia: 235253/R$ 100,00 reais."];
var array_carrinho_compras8 = ["Shorts de praia feminino com marcas de agua estampada/Tamanho:m/referencia: 134324/R$ 30,00 reais."];

function fLocalcompraproduto(){

$("#COMPRAR").click(function(){
    var compra1 = $("#tCOMPRAR1").val();
    array_carrinho_compras.push(compra1);
    console.log(array_carrinho_compras);
    fLocalMostracarrinho();
    alert("Comprado com sucesso, muito obrigado");
    
    

});



}
function fLocalMostracarrinho(){
    $("#divCarrinho").html("");
    for(var i = 0; i < array_carrinho_compras.length; i++){
        $("#divCarrinho").append(i + " : " + array_carrinho_compras[i] + "<br>");

    }

}
function fLocalcompraproduto2(){

    $("#TCOMPRAR-2").click(function(){
        var compra2 = $("#COMPRAR2").val();
        array_carrinho_compras2.push(compra2);
        console.log(array_carrinho_compras2);
        fLocalMostracarrinho();
        alert("Comprado com sucesso, muito obrigado");
    
    });
    
    }
    function fLocalMostracarrinho(){
        $("#divCarrinho").html("");
        for(var i = 0; i < array_carrinho_compras2.length; i++){
            $("#divCarrinho").append(i + " : " + array_carrinho_compras2[i] + "<br>");
    
        }
    
    }
    function fLocalcompraproduto3(){

        $("#COMPRAR-3").click(function(){
            var compra3 = $("#COMPRAR3").val();
            array_carrinho_compras3.push(compra3);
            console.log(array_carrinho_compras3);
            fLocalMostracarrinho();
            alert("Comprado com sucesso, muito obrigado");
        
        });
        
        }
        function fLocalMostracarrinho(){
            $("#divCarrinho").html("");
            for(var i = 0; i < array_carrinho_compras3.length; i++){
                $("#divCarrinho").append(i + " : " + array_carrinho_compras3[i] + "<br>");
        
            }
        
        }
        function fLocalcompraproduto4(){

            $("#COMPRAR-4").click(function(){
                var compra4 = $("#COMPRAR4").val();
                array_carrinho_compras4.push(compra4);
                console.log(array_carrinho_compras4);
                fLocalMostracarrinho();
                alert("Comprado com sucesso, muito obrigado");
            
            });
            
            }
            function fLocalMostracarrinho(){
                $("#divCarrinho").html("");
                for(var i = 0; i < array_carrinho_compras4.length; i++){
                    $("#divCarrinho").append(i + " : " + array_carrinho_compras4[i] + "<br>");
            
                }
            
            }
            function fLocalcompraproduto5(){

                $("#COMPRAR-5").click(function(){
                    var compra5 = $("#COMPRAR5").val();
                    array_carrinho_compras5.push(compra5);
                    console.log(array_carrinho_compras5);
                    fLocalMostracarrinho();
                    alert("Comprado com sucesso, muito obrigado");
                
                });
                
                }
                function fLocalMostracarrinho(){
                    $("#divCarrinho").html("");
                    for(var i = 0; i < array_carrinho_compras5.length; i++){
                        $("#divCarrinho").append(i + " : " + array_carrinho_compras5[i] + "<br>");
                
                    }
                
                }
                function fLocalcompraproduto6(){

                    $("#COMPRAR-6").click(function(){
                        var compra6 = $("#COMPRAR6").val();
                        array_carrinho_compras6.push(compra6);
                        console.log(array_carrinho_compras6);
                        fLocalMostracarrinho();
                        alert("Comprado com sucesso, muito obrigado");
                    
                    });
                    
                    }
                    function fLocalMostracarrinho(){
                        $("#divCarrinho").html("");
                        for(var i = 0; i < array_carrinho_compras6.length; i++){
                            $("#divCarrinho").append(i + " : " + array_carrinho_compras6[i] + "<br>");
                    
                        }
                    
                    }
                    function fLocalcompraproduto7(){

                        $("#COMPRAR-7").click(function(){
                            var compra7 = $("#COMPRAR7").val();
                            array_carrinho_compras7.push(compra7);
                            console.log(array_carrinho_compras7);
                            fLocalMostracarrinho();
                            alert("Comprado com sucesso, muito obrigado");
                        
                        });
                        
                        }
                        function fLocalMostracarrinho(){
                            $("#divCarrinho").html("");
                            for(var i = 0; i < array_carrinho_compras7.length; i++){
                                $("#divCarrinho").append(i + " : " + array_carrinho_compras7[i] + "<br>");
                        
                            }
                        
                        }
                        function fLocalcompraproduto8(){

                            $("#COMPRAR-8").click(function(){
                                var compra8 = $("#COMPRAR8").val();
                                array_carrinho_compras8.push(compra8);
                                console.log(array_carrinho_compras8);
                                fLocalMostracarrinho();
                                alert("Comprado com sucesso, muito obrigado");
                            
                            });
                            
                            }
                            function fLocalMostracarrinho(){
                                $("#divCarrinho").html("");
                                for(var i = 0; i < array_carrinho_compras8.length; i++){
                                    $("#divCarrinho").append(array_carrinho_compras8[i] + "<br>");
                            
                                }
                            
                            }
                        