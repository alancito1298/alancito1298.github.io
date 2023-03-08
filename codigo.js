
var btnEncriptar = document.querySelector(".btn-encriptar");
var btnDesencriptar = document.querySelector(".btn-desencriptar");
var btnCopiar = document.querySelector(".btn-copiar");
var munieco = document.querySelector(".conteiner-munieco");
var h3 = document.querySelector(".conteiner-h3");
var p = document.querySelector(".conteiner-p");
var msj = document.querySelector(".ocultar");
var resultado = document.querySelector(".textoResultado");
var botonCopiar = document.getElementById("boton-copiar");
botonCopiar.addEventListener("click", copiarTexto);





btnEncriptar.onclick = encriptar; 
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiarTexto;



function encriptar() {
	ocultar_D();
	resultado.textContent = encriptador(guardarTexto());
}

function desencriptar() {
	ocultar_D();
	resultado.textContent = desencriptador(guardarTexto());

}
	function guardarTexto(){
	var textoDesencriptado = document.querySelector(".textoencriptar");
	return textoDesencriptado.value;
}

	function ocultar_D(){
	munieco.classList.add("ocultar");
	h3.classList.add("ocultar");
	p.classList.add("ocultar");
	msj.classList.remove("ocultar");
	msj.classList.add("resultado-msj");
}

	function encriptador(mensaje) {
		var texto = mensaje;
		var textoFinal= "";

		for(let i = 0; i < texto.length; i++){
			
			if( texto[i] == "a"){
				textoFinal  = textoFinal + "ai";
			}
				else if( texto[i] == "e"){
				textoFinal  = textoFinal + "enter";
				}
					else if( texto[i] == "i"){
					textoFinal  =  textoFinal +"imes";
					}
						else if( texto[i] == "o"){
						textoFinal  =  textoFinal +"ober";
						}
							else if( texto[i] == "u"){
							textoFinal  = textoFinal + "ufat";
							}
								else{
									textoFinal = textoFinal + texto[i];
									}
									
								}
								return textoFinal;
							}

							


							function desencriptador(mensaje) {
								var texto = mensaje;
								var textoFinal= "";
						
								for(let i = 0; i < texto.length; i++){
									
									if( texto[i] == "a"){
										textoFinal  = textoFinal + "a";
										i+= 1;
									}
										else if( texto[i] == "e"){
										textoFinal  = textoFinal + "e";
										i+= 4;	
									}
											else if( texto[i] == "i"){
											textoFinal  =  textoFinal +"i";
											i+= 3;	
										}
												else if( texto[i] == "o"){
												textoFinal  =  textoFinal +"o";
												i+= 3;		
											}
													else if( texto[i] == "u"){
													textoFinal  = textoFinal + "u";
													i+= 3;		
												}
														else{
															textoFinal = textoFinal + texto[i];
															}
															
														}
														return textoFinal;
													}
											function copiarTexto() {
														var elemento = resultado;
														var texto = elemento.textContent;
													  
														var textarea = document.createElement("textarea");
														textarea.value = texto;
														document.body.appendChild(textarea);
													  
														textarea.select();
														document.execCommand("copy");
													  
														document.body.removeChild(textarea);
													  }