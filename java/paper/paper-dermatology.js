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
		html: "<tr><th style='color: #0c457d;'>Descargar</th><th style='color: 	#343d46;'>Modulo de Dermatología</th><th style='color: #0c457d;'>Semana</th><th style='color: 	#343d46;'>Código</th> </tr>",

	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #f8f8fa;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Documento de Acne",
		href: "medicinaresources_staticfiles/semiologia/protocolos/acne.pdf",
		"class": "aml-anat p-kreon",
	});
	$("tbody").find("a").eq(1).html("Acne").attr({
		title: "Descargar Documento de Acne",
		href: "medicinaresources_staticfiles/semiologia/protocolos/acne.pdf",
		"class": "aml-anat p-kreon",
	});
	$("tbody").find("td").eq(2).html("0").attr({
		"class": "p-kreon",
	});
	$("tbody").find("td").eq(3).html("2017D03A1301205DER1").attr({
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
		title: " Descarga Ampollas no Hereditarias",
		href: "medicinaresources_staticfiles/semiologia/protocolos/ampollanohereditaria.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row2").find("a").eq(1).html("Ampollas no Hereditarias").attr({
		title: "Descarga Ampollas no Hereditarias",
		href: "medicinaresources_staticfiles/semiologia/protocolos/ampollanohereditaria.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row2").find("td").eq(2).html("1").attr({
		"class": "p-kreon",
	});
	$(".row2").find("td").eq(3).html("2017D03A1301205DER2").attr({
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
		title: " Descarga Angiomas",
		href: "medicinaresources_staticfiles/semiologia/protocolos/angiomas.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row3").find("a").eq(1).html("Angiomas").attr({
		title: "Descarga Angiomas",
		href: "medicinaresources_staticfiles/semiologia/protocolos/angiomas.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row3").find("td").eq(2).html("2").attr({
		"class": "p-kreon",
	});
	$(".row3").find("td").eq(3).html("2017D03A1301205DER3").attr({
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
		title: " Descarga Enfermedades Ampollosas",
		href: "medicinaresources_staticfiles/semiologia/protocolos/enfermedadesampollosas.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row4").find("a").eq(1).html("Enfermedades Ampollosas").attr({
		title: "Descarga Enfermedades Ampollosas",
		href: "medicinaresources_staticfiles/semiologia/protocolos/enfermedadesampollosas.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row4").find("td").eq(2).html("3").attr({
		"class": "p-kreon",
	});
	$(".row4").find("td").eq(3).html("2017D03A1301205DER4").attr({
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
		title: " Descarga Hamartomas",
		href: "medicinaresources_staticfiles/semiologia/protocolos/hamartomas.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row5").find("a").eq(1).html("Hamartomas").attr({
		title: "Descarga Hamartomas",
		href: "medicinaresources_staticfiles/semiologia/protocolos/hamartomas.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row5").find("td").eq(2).html("4").attr({
		"class": "p-kreon",
	});
	$(".row5").find("td").eq(3).html("2017D03A1301205DER5").attr({
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
		title: " Descarga Infecciones Cútaneas",
		href: "medicinaresources_staticfiles/semiologia/protocolos/infeccionescutaneas.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row6").find("a").eq(1).html("Infecciones Cútaneas").attr({
		title: "Descarga Infecciones Cútaneas",
		href: "medicinaresources_staticfiles/semiologia/protocolos/infeccionescutaneas.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row6").find("td").eq(2).html("5").attr({
		"class": "p-kreon",
	});
	$(".row6").find("td").eq(3).html("2017D03A1301205DER6").attr({
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
		title: " Descarga Micosis",
		href: "medicinaresources_staticfiles/semiologia/protocolos/micosis.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row7").find("a").eq(1).html("Micosis").attr({
		title: "Descarga Micosis",
		href: "medicinaresources_staticfiles/semiologia/protocolos/micosis.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row7").find("td").eq(2).html("6").attr({
		"class": "p-kreon",
	});
	$(".row7").find("td").eq(3).html("2017D03A1301205DER7").attr({
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
		title: " Descarga Pediculosis",
		href: "medicinaresources_staticfiles/semiologia/protocolos/pediculosis.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row8").find("a").eq(1).html("Pediculosis").attr({
		title: "Descarga Pediculosis",
		href: "medicinaresources_staticfiles/semiologia/protocolos/pediculosis.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row8").find("td").eq(2).html("7").attr({
		"class": "p-kreon",
	});
	$(".row8").find("td").eq(3).html("2017D03A1301205DER8").attr({
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
		title: " Descarga Urticaria",
		href: "medicinaresources_staticfiles/semiologia/protocolos/urticaria.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row9").find("a").eq(1).html("Urticaria").attr({
		title: "Descarga Urticaria",
		href: "medicinaresources_staticfiles/semiologia/protocolos/urticaria.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row9").find("td").eq(2).html("8").attr({
		"class": "p-kreon",
	});
	$(".row9").find("td").eq(3).html("2017D03A1301205DER9").attr({
		"class": "code p-code",
	});
})
