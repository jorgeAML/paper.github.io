$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el vintage-buil.js
	//////Este archivo corresponde a la página de semio_adultos.html
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
	/////////// tables tables, all this tables will be in the 'index_histo.html' 
	////////
	//////
	////
	$("<div/>", {
		href: "index_present.html",
		"appendTo": ".rowjs",
		"insertAfter": ".aml-ps",
		"class": "col-md-6 aml_banner",
	});
	$("<div/>", {
		href: "index_histo.html",
		"appendTo": ".col-md-6", 
		//"insertAfter": ".col-md-6",
		"class": "table-responsive",
	});
	$("<table/>", {
		href: "index_histo.html",
		"appendTo": ".table-responsive",
		"class": "table table-striped",
	});
	$("<thead/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		"class": "p-heads",
		html: "<tr><th style='color: #0c457d;'>Descargar</th><th style='color: 	#343d46;'>Modulo de Adultos</th><th style='color: #0c457d;'>Semana</th><th style='color: 	#343d46;'>Código</th> </tr>",

	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #f8f8fa;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Lesiones Elementales de la Piel",
		href: "medicinaresources_staticfiles/semiologia/documentos/1.LESIONES_ELEMENTALES.PDF",
		"class": "aml-anat p-kreon",
	});
	$("tbody").find("a").eq(1).html("Lesiones Elementales de la Piel").attr({
		title: "Descargar Lesiones Elementales de la Piel",
		href: "medicinaresources_staticfiles/semiologia/documentos/1.LESIONES_ELEMENTALES.PDF",
		"class": "aml-anat p-kreon",
	});
	$("tbody").find("td").eq(2).html("1").attr({
		"class": "p-kreon",
	});
	$("tbody").find("td").eq(3).html("2017D03A1301205ADU1").attr({
		"class": "code p-code",
	});
	//row 2
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row2",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row2").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Enfermedades de la Piel",
		href: "medicinaresources_staticfiles/semiologia/documentos/12.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row2").find("a").eq(1).html("Enfermedades de la Piel").attr({
		title: "Descarga Enfermedades de la Piel",
		href: "medicinaresources_staticfiles/semiologia/documentos/12.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row2").find("td").eq(2).html("2").attr({
		"class": "p-kreon",
	});
	$(".row2").find("td").eq(3).html("2017D03A1301205ADU2").attr({
		"class": "code p-code",
	});
	//row 3
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row3",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row3").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Enfermedades de la Piel 2",
		href: "medicinaresources_staticfiles/semiologia/documentos/capitulo_manual.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row3").find("a").eq(1).html("Enfermedades de la Piel 2").attr({
		title: "Descarga Enfermedades de la Piel 2",
		href: "medicinaresources_staticfiles/semiologia/documentos/capitulo_manual.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row3").find("td").eq(2).html("3").attr({
		"class": "p-kreon",
	});
	$(".row3").find("td").eq(3).html("2017D03A1301205ADU3").attr({
		"class": "code p-code",
	});
	//row 4
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row4",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row4").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Enfermedades de la Piel 2",
		href: "medicinaresources_staticfiles/semiologia/adultos/Alteracion de los Signos Vitales.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row4").find("a").eq(1).html("Signos Vitales").attr({
		title: "Descarga Enfermedades de la Piel 2",
		href: "medicinaresources_staticfiles/semiologia/adultos/Alteracion de los Signos Vitales.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row4").find("td").eq(2).html("4").attr({
		"class": "p-kreon",
	});
	$(".row4").find("td").eq(3).html("2017D03A1301205ADU4").attr({
		"class": "code p-code",
	});
	//row 5
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row5",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row5").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Estructura y Función de la Piel",
		href: "medicinaresources_staticfiles/semiologia/adultos/estructura y funcion de la piel.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row5").find("a").eq(1).html("Estructura y Función de la Piel").attr({
		title: "Descarga Estructura y Función de la Piel",
		href: "medicinaresources_staticfiles/semiologia/adultos/estructura y funcion de la piel.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row5").find("td").eq(2).html("5").attr({
		"class": "p-kreon",
	});
	$(".row5").find("td").eq(3).html("2017D03A1301205ADU5").attr({
		"class": "code p-code",
	});
	//row 6
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row6",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row6").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Sistema Nervioso",
		href: "medicinaresources_staticfiles/semiologia/adultos/Semiologia.PDF",
		"class": "aml-anat p-kreon",
	});
	$(".row6").find("a").eq(1).html("Sistema Nervioso").attr({
		title: "Descarga Sistema Nervioso",
		href: "medicinaresources_staticfiles/semiologia/adultos/Semiologia.PDF",
		"class": "aml-anat p-kreon",
	});
	$(".row6").find("td").eq(2).html("6").attr({
		"class": "p-kreon",
	});
	$(".row6").find("td").eq(3).html("2017D03A1301205ADU6").attr({
		"class": "code p-code",
	});
	//row 7
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row7",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row7").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Signos Clínicos de Apendicitis Aguda",
		href: "medicinaresources_staticfiles/semiologia/adultos/signos CLÍNICOS EN LA APENDICITIS AGUDA.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row7").find("a").eq(1).html("Signos Clínicos de Apendicitis Aguda").attr({
		title: "Descarga Signos Clínicos de Apendicitis Aguda",
		href: "medicinaresources_staticfiles/semiologia/adultos/signos CLÍNICOS EN LA APENDICITIS AGUDA.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row7").find("td").eq(2).html("7").attr({
		"class": "p-kreon",
	});
	$(".row7").find("td").eq(3).html("2017D03A1301205ADU7").attr({
		"class": "code p-code",
	});
	//row 8
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row8",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row8").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Tipos de Guantes",
		href: "medicinaresources_staticfiles/semiologia/adultos/tipos_guantes.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row8").find("a").eq(1).html("Tipos de Guantes").attr({
		title: "Descarga Tipos de Guantes",
		href: "medicinaresources_staticfiles/semiologia/adultos/tipos_guantes.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row8").find("td").eq(2).html("8").attr({
		"class": "p-kreon",
	});
	$(".row8").find("td").eq(3).html("2017D03A1301205ADU8").attr({
		"class": "code p-code",
	});
	//row 9
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row9",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row9").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Signos Vitales 2",
		href: "medicinaresources_staticfiles/semiologia/adultos/Signos Vitales.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row9").find("a").eq(1).html("Signos Vitales 2").attr({
		title: "Descarga Signos Vitales 2",
		href: "medicinaresources_staticfiles/semiologia/adultos/Signos Vitales.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row9").find("td").eq(2).html("9").attr({
		"class": "p-kreon",
	});
	$(".row9").find("td").eq(3).html("2017D03A1301205ADU9").attr({
		"class": "code p-code",
	});
	//row 10
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row10",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row10").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen de Acevedo y Dumas",
		href: "medicinaresources_staticfiles/semiologia/adultos/Resumen Rotación Adultos Acevedo-Dumas.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row10").find("a").eq(1).html("Resumen de Acevedo y Dumas").attr({
		title: "Descarga Resumen de Acevedo y Dumas",
		href: "medicinaresources_staticfiles/semiologia/adultos/Resumen Rotación Adultos Acevedo-Dumas.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row10").find("td").eq(2).html("10").attr({
		"class": "p-kreon",
	});
	$(".row10").find("td").eq(3).html("2017D03A1301205ADU10").attr({
		"class": "code p-code",
	});
	//row 11
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row11",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row11").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Resumen de Orellana",
		href: "medicinaresources_staticfiles/semiologia/adultos/resumen_completo_examen_final_dr._orellanaadultos.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row11").find("a").eq(1).html("Resumen de Orellana").attr({
		title: "Descarga Resumen de Orellana",
		href: "medicinaresources_staticfiles/semiologia/adultos/resumen_completo_examen_final_dr._orellanaadultos.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row11").find("td").eq(2).html("11").attr({
		"class": "p-kreon",
	});
	$(".row11").find("td").eq(3).html("2017D03A1301205ADU11").attr({
		"class": "code p-code",
	});
});
