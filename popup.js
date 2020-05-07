var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');
function getRowValues(){
	document.getElementById("titulo").value = cell0.textContent;
	document.getElementById("plataforma").value = cell1.textContent;
	document.getElementById("genero").value = cell2.textContent;
	document.getElementById("estado").value = cell3.textContent;
}
function showPopup(evn, table){
	if(evn === 'edit'){
		overlay.classList.add('active');
		popup.classList.add('active');
		getRowValues()
		selectedRow = activeRow
	}else if (evn === 'set'){
		overlay.classList.add('active');
		popup.classList.add('active');
	}
}

btnAbrirPopup.addEventListener('click', () => {
	showPopup('set')
})


btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});
