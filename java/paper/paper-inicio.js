$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el vintage-buil.js
	//////Este archivo corresponde a la página de semio_inicio.html
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
	$(".aml-body").find("a").eq(0).html("<i class='icon-download-alt'></i> Programación del curso 2016.").attr({
		title: "Descargar Programación del curso 2016.",
		href: "medicinaresources_staticfiles/semiologia/programacion/semioprogramacion.zip",
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
		html: "<tr><th style='color: #0c457d;'>Descargar</th><th style='color: 	#343d46;'>Programación de Salud Pública</th><th style='color: #0c457d;'>Semana</th><th style='color: 	#343d46;'>Código</th> </tr>",

	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #f8f8fa;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Programa de Semiología 2016",
		href: "medicinaresources_staticfiles/semiologia/programacion/Programa Semiologia I 2016.doc",
		"class": "aml-anat p-kreon",
	});
	$("tbody").find("a").eq(1).html("Programa de Semiología 2016").attr({
		title: "Descargar Programa de Semiología 2016",
		href: "medicinaresources_staticfiles/semiologia/programacion/Programa Semiologia I 2016.doc",
		"class": "aml-anat p-kreon",
	});
	$("tbody").find("td").eq(2).html("1").attr({
		"class": "p-kreon",
	});
	$("tbody").find("td").eq(3).html("2017N27A1301205PRO1").attr({
		"class": "code p-code",
	});
	//row 2
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row2srl",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row2srl").find("a").eq(0).html("Descargar").attr({
		title: " Descarga Anexo 2 Hoja de evaluación final",
		href: "medicinaresources_staticfiles/semiologia/programacion/programa-semiologc3ada-1-2015.oxps",
		"class": "aml-anat p-kreon",
	});
	$(".row2srl").find("a").eq(1).html("Anexo 2 Hoja de evaluación final").attr({
		title: "Descarga Anexo 2 Hoja de evaluación final",
		href: "medicinaresources_staticfiles/semiologia/programacion/programa-semiologc3ada-1-2015.oxps",
		"class": "aml-anat p-kreon",
	});
	$(".row2srl").find("td").eq(2).html("1").attr({
		"class": "p-kreon",
	});
	$(".row2srl").find("td").eq(3).html("2017N27A1301205PRO2").attr({
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
		title: " Descarga Programa de semiologia 2015",
		href: "medicinaresources_staticfiles/semiologia/programacion/SEMIOLOGIA_I_FINAL_2015_PROGRAMA.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row3").find("a").eq(1).html("Programa de semiología 2015").attr({
		title: "Descarga Programa de semiologia 2015",
		href: "medicinaresources_staticfiles/semiologia/programacion/SEMIOLOGIA_I_FINAL_2015_PROGRAMA.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row3").find("td").eq(2).html("1").attr({
		"class": "p-kreon",
	});
	$(".row3").find("td").eq(3).html("2017N27A1301205PRO3").attr({
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
		title: " Descarga Rotación de profesores primer semestre",
		href: "medicinaresources_staticfiles/semiologia/programacion/12417909_10153383252138004_5386054183144951572_n.jpg",
		"class": "aml-anat p-kreon",
	});
	$(".row4").find("a").eq(1).html("Rotación de profesores primer semestre").attr({
		title: "Descarga Rotación de profesores primer semestre",
		href: "medicinaresources_staticfiles/semiologia/programacion/12417909_10153383252138004_5386054183144951572_n.jpg",
		"class": "aml-anat p-kreon",
	});
	$(".row4").find("td").eq(2).html("1").attr({
		"class": "p-kreon",
	});
	$(".row4").find("td").eq(3).html("2017N27A1301205PRO4").attr({
		"class": "code p-code",
	});
});
