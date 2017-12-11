$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el vintage-buil.js
	//////Este archivo corresponde a la página de semio_dermatologia.html
	////////
	///////////AML panels navigations 
	////////
	//////
	////
	$("<div/>", {
		//href: "index_histo.html",
		"appendTo": ".aml_banner",
		"insertAfter": ".list-group-aml",
		"class": "aml-panel gradient-aml",
		html: "<div class='aml-heading'><h1 class='aml-title'>Descargar</h1></div>",
	});
	$("<div/>", {
		//href: "index_histo.html",
		"appendTo": ".aml-panel",
		"insertAfter": ".aml-heading",
		"class": "aml-body p-kreon",
		html: "<ul><li><a/></li><li><a/></li><li><a/></li></ul><p/>",
	});
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Documento de Tuberculosis.").attr({
		title: "Descargar Documento de Tuberculosis..",
		href: "edicinaresources_staticfiles/semiologia/documentos/tb.pdf",
		"class": "aml-anat",
	});
	$(".aml-body").find("a").eq(1).html("<i class='icon-download-alt'></i> Historia Clínica Adultos").attr({
		title: "Descargar Historia Clínica Adultos",
		href: "medicinaresources_staticfiles/semiologia/historias/his_cli.pdf",
		"class": "aml-anat",
	});
	$(".aml-body").find("a").eq(2).html("<i class='icon-download-alt'></i> Historia Clínica Niños").attr({
		title: "Descargar Historia Clínica Niños",
		href: "medicinaresources_staticfiles/semiologia/historias/a11v13n1s1art3.pdf",
		"class": "aml-anat",
	});
	$(".aml-body").find("p").eq(0).html("La semiología o semiótica (del griego: σημειωτικός, 'simiotikos') es la ciencia que trata de los sistemas de comunicación dentro de las sociedades humanas, estudiando las propiedades generales de los sistemas de signos, como base para la comprensión de toda actividad humana.").attr({
		"class": "p-army",
	});
	////
	//////
	////////
	/////////// container for parciales 'histo_examenes.html' 
	////////
	//////
	////
	//colum 1
	$("<div/>",{
		"appendTo": ".rowjs",
		"insertAfter": ".aml-ps",
		"class": "col-sm-3 aml_banner contpar2",
	});
	$("<div/>", {
		"appendTo": ".contpar2",
		"class": "cont2 army-container",
		html:"<h3/><ol><li/><li/><li/><li/><li/><li/><li/><li/></ol><a/>",
	});
	$(".cont2").find("h3").eq(0).html("Parciales 2014").attr({
		"class": "aml-p-army p-kreon",
	});
	$(".cont2").find("li").eq(0).html("Primer parcial.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont2").find("li").eq(1).html("Segundo parcial Adultos.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont2").find("li").eq(2).html("Segundo parcial Niños.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont2").find("li").eq(3).html("Tercer parcial Adultos.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont2").find("li").eq(4).html("Tercer parcial Niños.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont2").find("li").eq(5).html("Examen Final.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont2").find("li").eq(6).html("Examen de Recuperación 1.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont2").find("li").eq(7).html("Examen de Recuperación 2.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont2").find("a").eq(0).html("Descargar Parciales 2014").attr({
		title: "Descargar Parciales 2007",
		href: "medicinaresources_staticfiles/semiologia/examenes/2014.zip",
		"class": "aml-anat p-kreon army-button",
	});
	//Row two second line
	$("<div/>", {
		"appendTo": ".contpar2",
		"class": "cont4 army-container aml_banner",
		html:"<h3/><ol><li/><li/><li/><li/><li/><li/><li/><li/></ol><a/>",
	});
	$(".cont4").find("h3").eq(0).html("Parciales 2012").attr({
		"class": "aml-p-army p-kreon",
	});
	$(".cont4").find("li").eq(0).html("Primer parcial.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont4").find("li").eq(1).html("Segundo parcial Adultos.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont4").find("li").eq(2).html("Segundo parcial Niños.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont4").find("li").eq(3).html("Tercer parcial Adultos.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont4").find("li").eq(4).html("Tercer parcial Niños.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont4").find("li").eq(5).html("Examen Final.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont4").find("li").eq(6).html("Examen de Recuperación 1.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont4").find("li").eq(7).html("Examen de Recuperación 2.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont4").find("a").eq(0).html("Descargar Parciales 2012").attr({
		title: "Descargar Parciales 2007",
		href: "medicinaresources_staticfiles/semiologia/examenes/2012.zip",
		"class": "aml-anat p-kreon army-button",
	});
	$("<div/>", {
		"appendTo": ".contpar2",
		"class": "cont6 army-container aml_banner",
		html:"<h3/><ol><li/><li/><li/><li/><li/></ol><a/>",
	});
	$(".cont6").find("h3").eq(0).html("Parciales 2010").attr({
		"class": "aml-p-army p-kreon",
	});
	$(".cont6").find("li").eq(0).html("Segundo parcial Adultos.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont6").find("li").eq(1).html("Segundo parcial Niños.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont6").find("li").eq(2).html("Tercer parcial Adultos.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont6").find("li").eq(3).html("Tercer parcial Niños.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont6").find("li").eq(4).html("Examen Final.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont6").find("a").eq(0).html("Descargar Parciales 2010").attr({
		title: "Descargar Parciales 2007",
		href: "medicinaresources_staticfiles/semiologia/examenes/2010.zip",
		"class": "aml-anat p-kreon army-button",
	});
	//column 2 
	$("<div/>",{
		"appendTo": ".rowjs",
		"insertAfter": ".aml-ps",
		"class": "col-sm-3 aml_banner contpar",
	});
	$("<div/>", {
		"appendTo": ".contpar",
		"class": "cont1 army-container",
		html:"<h3/><ol><li/><li/><li/><li/><li/><li/><li/></ol><a/>",
	});
	$(".cont1").find("h3").eq(0).html("Parciales 2017").attr({
		"class": "aml-p-army p-kreon",
	});
	$(".cont1").find("li").eq(0).html("Primer parcial.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont1").find("li").eq(1).html("Segundo parcial Adultos.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont1").find("li").eq(2).html("Segundo Parcial Niños.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont1").find("li").eq(3).html("Tercer Parcial Adultos.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont1").find("li").eq(4).html("Tercer Parcial Niños.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont1").find("li").eq(5).html("Examen Final.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont1").find("li").eq(6).html("Examen de Recuperación.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont1").find("a").eq(0).html("Descargar Parciales 2017").attr({
		title: "Descargar Parciales 2007",
		href: "medicinaresources_staticfiles/semiologia/examenes/2017.zip",
		"class": "aml-anat p-kreon army-button",
	});
	//row 2 first line
	$("<div/>", {
		"appendTo": ".contpar",
		"class": "cont3 army-container aml_banner",
		html:"<h3/><ol><li/><li/><li/><li/><li/><li/><li/><li/></ol><a/>",
	});
	$(".cont3").find("h3").eq(0).html("Parciales 2013").attr({
		"class": "aml-p-army p-kreon",
	});
	$(".cont3").find("li").eq(0).html("Primer parcial.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont3").find("li").eq(1).html("Segundo parcial Adultos.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont3").find("li").eq(2).html("Segundo Parcial Niños.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont3").find("li").eq(3).html("Tercer Parcial Adultos.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont3").find("li").eq(4).html("Tercer Parcial Niños.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont3").find("li").eq(5).html("Examen Final.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont3").find("li").eq(6).html("Examen de Recuperación 1.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont3").find("li").eq(7).html("Examen de Recuperación 2.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont3").find("a").eq(0).html("Descargar Parciales 2013").attr({
		title: "Descargar Parciales 2007",
		href: "medicinaresources_staticfiles/semiologia/examenes/2013.zip",
		"class": "aml-anat p-kreon army-button",
	});
	$("<div/>", {
		"appendTo": ".contpar",
		"class": "cont5 army-container aml_banner",
		html:"<h3/><ol><li/><li/><li/><li/><li/><li/></ol><a/>",
	});
	$(".cont5").find("h3").eq(0).html("Parciales 2011").attr({
		"class": "aml-p-army p-kreon",
	});
	$(".cont5").find("li").eq(0).html("Primer parcial.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont5").find("li").eq(1).html("Segundo parcial Adultos.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont5").find("li").eq(2).html("Segundo Parcial Niños.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont5").find("li").eq(3).html("Tercer Parcial Adultos.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont5").find("li").eq(4).html("Tercer Parcial Niños.").attr({
		"class": "aml-p-army-left p-kreon",
	});
	$(".cont5").find("li").eq(5).html("Examen Final.").attr({
		"class": "aml-p-army-left p-kreon",
	});

	$(".cont5").find("a").eq(0).html("Descargar Parciales 2011").attr({
		title: "Descargar Parciales 2007",
		href: "medicinaresources_staticfiles/semiologia/examenes/2011.zip",
		"class": "aml-anat p-kreon army-button",
	});
})
