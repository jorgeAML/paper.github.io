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
		html: "<tr><th style='color: #0c457d;'>Descargar</th><th style='color: 	#343d46;'>Modulo de Introductoria</th><th style='color: #0c457d;'>Semana</th><th style='color: 	#343d46;'>Código</th> </tr>",

	});
	//row 1
	$("<tbody/>", {
		href: "index_histo.html",
		"appendTo": ".table",
		//"insertAfter": "<thead/>",
		html: "<tr style='background-color: #f8f8fa;'><td><a/></td><td><a/></td><td/><td/></tr>",
	});
	$("tbody").find("a").eq(0).html("Descargar").attr({
		title: "Descargar Caso Clínico introductoria",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Caso clinico introductoria.pdf",
		"class": "aml-anat p-kreon",
	});
	$("tbody").find("a").eq(1).html("Caso Clínico introductoria").attr({
		title: "Descargar Caso Clínico introductoria",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Caso clinico introductoria.pdf",
		"class": "aml-anat p-kreon",
	});
	$("tbody").find("td").eq(2).html("1").attr({
		"class": "p-kreon",
	});
	$("tbody").find("td").eq(3).html("2017N27A1301205INT1").attr({
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
		title: " Descarga Código deontologico",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Codigo Deontologico.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row2").find("a").eq(1).html("Código deontologico").attr({
		title: "Descarga Código deontologico",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Codigo Deontologico.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row2").find("td").eq(2).html("2").attr({
		"class": "p-kreon",
	});
	$(".row2").find("td").eq(3).html("2017N27A1301205INT2").attr({
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
		title: " Descarga Habilidades de comunicación Médico - Paciente",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Habilidades de Comunicacioìn.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row3").find("a").eq(1).html("Habilidades de comunicación Médico - Paciente").attr({
		title: "Descarga Habilidades de comunicación Médico - Paciente",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Habilidades de Comunicacioìn.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row3").find("td").eq(2).html("3").attr({
		"class": "p-kreon",
	});
	$(".row3").find("td").eq(3).html("2017N27A1301205INT3").attr({
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
		title: " Descarga Relación Médico Paciente",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Relacioìn Meìdico-Paciente.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row4").find("a").eq(1).html("Relación Médico Paciente").attr({
		title: "Descarga Relación Médico Paciente",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Relacioìn Meìdico-Paciente.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row4").find("td").eq(2).html("4").attr({
		"class": "p-kreon",
	});
	$(".row4").find("td").eq(3).html("2017N27A1301205INT4").attr({
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
		title: " Descarga La Moral Médica",
		href: "medicinaresources_staticfiles/semiologia/introductoria/La_moral_médica_frente_a_la_med.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row5").find("a").eq(1).html("La Moral Médica").attr({
		title: "Descarga La Moral Médica",
		href: "medicinaresources_staticfiles/semiologia/introductoria/La_moral_médica_frente_a_la_med.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row5").find("td").eq(2).html("5").attr({
		"class": "p-kreon",
	});
	$(".row5").find("td").eq(3).html("2017N27A1301205INT5").attr({
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
		title: " Descarga Los Derechos del Paciente",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Los_derechos_del_paciente.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row6").find("a").eq(1).html("Los Derechos del Paciente").attr({
		title: "Descarga Los Derechos del Paciente",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Los_derechos_del_paciente.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row6").find("td").eq(2).html("6").attr({
		"class": "p-kreon",
	});
	$(".row6").find("td").eq(3).html("2017N27A1301205INT6").attr({
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
		title: " Descarga Médico Moderno Médico Deshumanizado",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Médico_moderno,_médico_deshumanizado.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row7").find("a").eq(1).html("Médico Moderno Médico Deshumanizado").attr({
		title: "Descarga Médico Moderno Médico Deshumanizado",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Médico_moderno,_médico_deshumanizado.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row7").find("td").eq(2).html("7").attr({
		"class": "p-kreon",
	});
	$(".row7").find("td").eq(3).html("2017N27A1301205INT7").attr({
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
		title: "Descarga Pensamiento Sir William Osler",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Pensamiento_Sir_William_Osler.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row8").find("a").eq(1).html("Pensamiento Sir William Osler").attr({
		title: "Descarga Pensamiento Sir William Osler",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Pensamiento_Sir_William_Osler.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row8").find("td").eq(2).html("8").attr({
		"class": "p-kreon",
	});
	$(".row8").find("td").eq(3).html("2017N27A1301205INT8").attr({
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
		title: "Descarga Juramento hipocratico",
		href: "medicinaresources_staticfiles/semiologia/introductoria/JURHIP.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row9").find("a").eq(1).html("Juramento hipocratico").attr({
		title: "Descarga Juramento hipocratico",
		href: "medicinaresources_staticfiles/semiologia/introductoria/JURHIP.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row9").find("td").eq(2).html("9").attr({
		"class": "p-kreon",
	});
	$(".row9").find("td").eq(3).html("2017N27A1301205INT9").attr({
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
		title: "Descarga Aprendizaje basado en problemas",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Aprendizaje Basado en Problemas.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row10").find("a").eq(1).html("Aprendizaje basado en problemas").attr({
		title: "Descarga Aprendizaje basado en problemas",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Aprendizaje Basado en Problemas.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row10").find("td").eq(2).html("10").attr({
		"class": "p-kreon",
	});
	$(".row10").find("td").eq(3).html("2017N27A1301205INT10").attr({
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
		title: "Descarga Medicina basada en evidencia",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Medicina Basada en la Evidencia.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row11").find("a").eq(1).html("Medicina basada en evidencia").attr({
		title: "Descarga Medicina basada en evidencia",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Medicina Basada en la Evidencia.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row11").find("td").eq(2).html("11").attr({
		"class": "p-kreon",
	});
	$(".row11").find("td").eq(3).html("2017N27A1301205INT11").attr({
		"class": "code p-code",
	});
	//row 12
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row12",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row12").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Medicina basada en pruebas",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Medicina Basada en Pruebas.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row12").find("a").eq(1).html("Medicina basada en pruebas").attr({
		title: "Descarga Medicina basada en pruebas",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Medicina Basada en Pruebas.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row12").find("td").eq(2).html("12").attr({
		"class": "p-kreon",
	});
	$(".row12").find("td").eq(3).html("2017N27A1301205INT12").attr({
		"class": "code p-code",
	});
	//row 13
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row13",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row13").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Bioseguridad Parte 1",
		href: "medicinaresources_staticfiles/semiologia/introductoria/bioseguridad.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row13").find("a").eq(1).html("Bioseguridad Parte 1").attr({
		title: "Descarga Bioseguridad Parte 1",
		href: "medicinaresources_staticfiles/semiologia/introductoria/bioseguridad.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row13").find("td").eq(2).html("13").attr({
		"class": "p-kreon",
	});
	$(".row13").find("td").eq(3).html("2017N27A1301205INT13").attr({
		"class": "code p-code",
	});
	//row 14
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row14",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row14").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Bioseguridad Parte 2",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Documento sobre Bioseguridad.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row14").find("a").eq(1).html("Bioseguridad Parte 2").attr({
		title: "Descarga Bioseguridad Parte 2",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Documento sobre Bioseguridad.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row14").find("td").eq(2).html("14").attr({
		"class": "p-kreon",
	});
	$(".row14").find("td").eq(3).html("2017N27A1301205INT14").attr({
		"class": "code p-code",
	});
	//row 15
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row15",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row15").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Guía de Aislamiento en Bioseguridad.",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Guía aislamiento Resumida.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row15").find("a").eq(1).html("Guía de Aislamiento en Bioseguridad.").attr({
		title: "Descarga Guía de Aislamiento en Bioseguridad.",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Guía aislamiento Resumida.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row15").find("td").eq(2).html("15").attr({
		"class": "p-kreon",
	});
	$(".row15").find("td").eq(3).html("2017N27A1301205INT15").attr({
		"class": "code p-code",
	});
	//row 16
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row16",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row16").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Bolsas de Bioseguridad.",
		href: "medicinaresources_staticfiles/semiologia/introductoria/JZ_0183.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row16").find("a").eq(1).html("Bolsas de Bioseguridad.").attr({
		title: "Descarga Bolsas de Bioseguridad.",
		href: "medicinaresources_staticfiles/semiologia/introductoria/JZ_0183.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row16").find("td").eq(2).html("16").attr({
		"class": "p-kreon",
	});
	$(".row16").find("td").eq(3).html("2017N27A1301205INT16").attr({
		"class": "code p-code",
	});
	//row 17
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row17",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row17").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Manual de Bioseguridad.",
		href: "medicinaresources_staticfiles/semiologia/introductoria/manual_de_Bioseguridad.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row17").find("a").eq(1).html("Manual de Bioseguridad.").attr({
		title: "Descarga Manual de Bioseguridad.",
		href: "medicinaresources_staticfiles/semiologia/introductoria/manual_de_Bioseguridad.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row17").find("td").eq(2).html("17").attr({
		"class": "p-kreon",
	});
	$(".row17").find("td").eq(3).html("2017N27A1301205INT17").attr({
		"class": "code p-code",
	});
	//row 18
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row18",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row18").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Bioetica.",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Bioetica.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row18").find("a").eq(1).html("Bioetica.").attr({
		title: "Descarga Bioetica.",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Bioetica.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row18").find("td").eq(2).html("18").attr({
		"class": "p-kreon",
	});
	$(".row18").find("td").eq(3).html("2017N27A1301205INT18").attr({
		"class": "code p-code",
	});
	//row 19
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row19",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row19").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Glosario de Etica Médica.",
		href: "medicinaresources_staticfiles/semiologia/introductoria/etica glosario.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row19").find("a").eq(1).html("Glosario de Etica Médica.").attr({
		title: "Descarga Glosario de Etica Médica.",
		href: "medicinaresources_staticfiles/semiologia/introductoria/etica glosario.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row19").find("td").eq(2).html("19").attr({
		"class": "p-kreon",
	});
	$(".row19").find("td").eq(3).html("2017N27A1301205INT19").attr({
		"class": "code p-code",
	});
	//row 20
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row20",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row20").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Glosario de Bioetica.",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Glosario_bioetica.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row20").find("a").eq(1).html("Glosario de Bioetica.").attr({
		title: "Descarga Glosario de Bioetica.",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Glosario_bioetica.pdf",
		"class": "aml-anat p-kreon",
	});
	$(".row20").find("td").eq(2).html("20").attr({
		"class": "p-kreon",
	});
	$(".row20").find("td").eq(3).html("2017N27A1301205INT20").attr({
		"class": "code p-code",
	});
	//row 21
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row21",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row21").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Glosario de Bioetica.",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Metodo de Weed.docx",
		"class": "aml-anat p-kreon",
	});
	$(".row21").find("a").eq(1).html("Método de Weed.").attr({
		title: "Descarga Glosario de Bioetica.",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Metodo de Weed.docx",
		"class": "aml-anat p-kreon",
	});
	$(".row21").find("td").eq(2).html("21").attr({
		"class": "p-kreon",
	});
	$(".row21").find("td").eq(3).html("2017N27A1301205INT21").attr({
		"class": "code p-code",
	});
	//row 22
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row22",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row22").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Implicaciones Médico legales.",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Implicaciones Meu0301dico Legales.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row22").find("a").eq(1).html("Implicaciones Médico legales.").attr({
		title: "Descarga Implicaciones Médico legales.",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Implicaciones Meu0301dico Legales.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row22").find("td").eq(2).html("22").attr({
		"class": "p-kreon",
	});
	$(".row22").find("td").eq(3).html("2017N27A1301205INT22").attr({
		"class": "code p-code",
	});
	//row 23
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row23",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row23").find("a").eq(0).html("Descargar").attr({
		title: "Descarga La Moral Médica y la Medicina Moderna.",
		href: "medicinaresources_staticfiles/semiologia/introductoria/La moral meu0301dica frente a la med.mod..doc",
		"class": "aml-anat p-kreon",
	});
	$(".row23").find("a").eq(1).html("La Moral Médica y la Medicina Moderna.").attr({
		title: "Descarga La Moral Médica y la Medicina Moderna.",
		href: "medicinaresources_staticfiles/semiologia/introductoria/La moral meu0301dica frente a la med.mod..doc",
		"class": "aml-anat p-kreon",
	});
	$(".row23").find("td").eq(2).html("23").attr({
		"class": "p-kreon",
	});
	$(".row23").find("td").eq(3).html("2017N27A1301205INT23").attr({
		"class": "code p-code",
	});
	//row 24
	$("<tr/>", {
		href: "index_histo.html",
		"appendTo": "tbody",
		"class": "row24",
		html: "<td><a/></td><td><a/></td><td/><td/>",
	});
	$(".row24").find("a").eq(0).html("Descargar").attr({
		title: "Descarga Mala Práctica Médica.",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Mala-practica-medica.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row24").find("a").eq(1).html("Mala Práctica Médica.").attr({
		title: "Descarga Mala Práctica Médica.",
		href: "medicinaresources_staticfiles/semiologia/introductoria/Mala-practica-medica.doc",
		"class": "aml-anat p-kreon",
	});
	$(".row24").find("td").eq(2).html("24").attr({
		"class": "p-kreon",
	});
	$(".row24").find("td").eq(3).html("2017N27A1301205INT24").attr({
		"class": "code p-code",
	});
	

});
