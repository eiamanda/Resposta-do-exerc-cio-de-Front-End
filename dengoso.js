function leiamais(){
	var pontos=document.getElementById("pontos");
	var maistexto=document.getElementById("mais");
	var btnLeiaMais=document.getElementById("btnLeiaMais");

	if (pontos.style.display === "none") {
		pontos.style.display="inline";
		maistexto.style.display="none";
		btnLeiaMais.innerHTML="ver mais";
			}else{
				pontos.style.display="none";
				maistexto.style.display="inline";
				btnLeiaMais.innerHTML="";
			}

		}
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
