$(document).ready(function () {
	////Estas selecciones siempre cambiaran de ruta tener cuidado con el manejo principal en el vintage-buil.js
	//////Este archivo corresponde a la página de semio_books.html
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
	////////
	///////////containers books
	////////
	//////
	////
	$("<div/>",{
		//"appendTo": ".rowjs",
		"insertAfter": ".aml-ps",
		"class": "col-sm-3 aml_banner book-c1 media_cont",
	});
	$("<div/>", {
		"appendTo": ".book-c1",
		"class": "army-container c1",
		html: ("<a/><h2/><p/><a/>"),
	});
	$(".c1").find("a").eq(0).html("<img class='img-army-md4' src='https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/medicinaresources_staticfiles/semiologia/imagenes_libros/semio6.jpg'>").attr({
		title: "Descarga Libro de Semiología 2016",
		href: "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/medicinaresources_staticfiles/semiologia/libros/LIBRO+DE+SEMIOLOGIA+1-2013.pdf",
	});
	$(".c1").find("h2").eq(0).html("Libro de Semiología 2016").attr({
		"class": "aml-p-army",
	})
	$(".c1").find("p").eq(0).html("Bibliografía oficial de la cátedra de Semiología.").attr({
		"class": "aml-p-army",
	});
	$(".c1").find("a").eq(1).html("Descargar").attr({
		title: "Descarga Libro de Semiología 2016",
		href: "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/medicinaresources_staticfiles/semiologia/libros/LIBRO+DE+SEMIOLOGIA+1-2013.pdf",
		"class": "aml-anat army-button p-kreon",
	});
	//container 1 rrow 2
	$("<div/>", {
		"appendTo": ".book-c1",
		"insertAfter": "c1",
		"class": "army-container c4 aml_banner media_cont",
		html: ("<a/><h2/><p/><a/>"),
	});
	$(".c4").find("a").eq(0).html("<img class='img-army-md4' src='https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/medicinaresources_staticfiles/semiologia/imagenes_libros/semio3.jpg'>").attr({
		title: "Descarga Manual Mosby 7ma. Edición",
		href: "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/medicinaresources_staticfiles/semiologia/libros/Manual+Mosby.pdf",
	});
	$(".c4").find("h2").eq(0).html("Manual Mosby 7ma. Edición").attr({
		"class": "aml-p-army",
	})
	$(".c4").find("p").eq(0).html("Bibliografía oficial de la cátedra de Semiología.").attr({
		"class": "aml-p-army",
	});
	$(".c4").find("a").eq(1).html("Descargar").attr({
		title: "Descargar Manual Mosby 7ma. Edición",
		href: "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/medicinaresources_staticfiles/semiologia/libros/Manual+Mosby.pdf",
		"class": "aml-anat army-button p-kreon",
	});
	//container 1 row 3
	$("<div/>", {
		"appendTo": ".book-c1",
		"insertAfter": "c4",
		"class": "army-container c5 aml_banner media_cont",
		html: ("<a/><h2/><p/><a/>"),
	});
	$(".c5").find("a").eq(0).html("<img class='img-army-md4' src='https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/medicinaresources_staticfiles/semiologia/imagenes_libros/semio5.jpg'>").attr({
		title: "Descarga Guía Seidel Exploración Fisica 8va. Edición",
		href: "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/medicinaresources_staticfiles/semiologia/libros/Guia+Seidel.pdf",
	});
	$(".c5").find("h2").eq(0).html("Guía Seidel Exploración Fisica 8va. Edición").attr({
		"class": "aml-p-army",
	})
	$(".c5").find("p").eq(0).html("Bibliografía oficial de la cátedra de Semiología.").attr({
		"class": "aml-p-army",
	});
	$(".c5").find("a").eq(1).html("Descargar").attr({
		title: "Descargar Guía Seidel Exploración Fisica 8va. Edición",
		href: "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/medicinaresources_staticfiles/semiologia/libros/Guia+Seidel.pdf",
		"class": "aml-anat army-button p-kreon",
	});
	//container 2
	$("<div/>",{
		//"appendTo": ".rowjs",
		"insertAfter": ".aml-ps",
		"class": "col-sm-3 aml_banner book-c2 media_cont",
	});
	$("<div/>", {
		"appendTo": ".book-c2",
		"insertAfter": "c1",
		"class": "army-container c2 gradient-aml",
		html: ("<a/><h2/><p/><a/>"),
	});
	$(".c2").find("a").eq(0).html("<img class='img-army-md4' src='https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/medicinaresources_staticfiles/semiologia/imagenes_libros/semio1.jpg'>").attr({
		title: "Descarga Manual Seidel Exploración Física 8va. Edición",
		href: "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/medicinaresources_staticfiles/semiologia/libros/Manual+Seidel+de+Exploracion.pdf",
	});
	$(".c2").find("h2").eq(0).html("Manual Seidel Exploración Física 8va. Edición").attr({
		"class": "aml-p-army",
	})
	$(".c2").find("p").eq(0).html("Bibliografía oficial de la cátedra de Semiología.").attr({
		"class": "aml-p-army",
	});
	$(".c2").find("a").eq(1).html("Descargar").attr({
		title: "Descargar Manual Seidel Exploración Física 8va. Edición",
		href: "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/medicinaresources_staticfiles/semiologia/libros/Manual+Seidel+de+Exploracion.pdf",
		"class": "aml-anat army-button p-kreon",
	});
	//container row 1
	$("<div/>", {
		"appendTo": ".book-c2",
		"insertAfter": "c2",
		"class": "army-container c3 gradient-aml aml_banner_containerbooks",
		html: ("<a/><h2/><p/><a/>"),
	});
	$(".c3").find("a").eq(0).html("<img class='img-army-md4' src='https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/medicinaresources_staticfiles/semiologia/imagenes_libros/semio2.jpg'>").attr({
		title: "Descarga Manual Suros 8va. Edició",
		href: "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/medicinaresources_staticfiles/semiologia/libros/Semiologia+Suros+8ed.pdf",
	});
	$(".c3").find("h2").eq(0).html("Manual Suros 8va. Edición").attr({
		"class": "aml-p-army",
	})
	$(".c3").find("p").eq(0).html("Bibliografía oficial de la cátedra de Semiología.").attr({
		"class": "aml-p-army",
	});
	$(".c3").find("a").eq(1).html("Descargar").attr({
		title: "Descarga Manual Suros 8va. Edició",
		href: "https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/medicinaresources_staticfiles/semiologia/libros/Semiologia+Suros+8ed.pdf",
		"class": "army-button aml-anat p-kreon",
	});
	//container 2 row 2
	$("<div/>", {
		"appendTo": ".book-c2",
		"insertAfter": "c3",
		"class": "army-container c6 gradient-aml aml_banner_containerbooks",
		html: ("<a/><h2/><p/><a/>"),
	});
	$(".c6").find("a").eq(0).html("<img class='img-army-md4' src='https://s3-us-west-2.amazonaws.com/www.medicinaresources.com/medicinaresources_staticfiles/semiologia/imagenes_libros/semio4.jpg'>").attr({
		title: "Descarga Habilidades Clínicas Pediatricas 4ta. Edición",
		href: "medicinaresources_staticfiles/semiologia/libros/Pediatric Clinical Skills.pdf",
	});
	$(".c6").find("h2").eq(0).html("Habilidades Clínicas Pediatricas 4ta. Edición").attr({
		"class": "aml-p-army",
	})
	$(".c6").find("p").eq(0).html("Bibliografía oficial de la cátedra de Semiología.").attr({
		"class": "aml-p-army",
	});
	$(".c6").find("a").eq(1).html("Descargar").attr({
		title: "Descarga Habilidades Clínicas Pediatricas 4ta. Edición",
		href: "medicinaresources_staticfiles/semiologia/libros/Pediatric Clinical Skills.pdf",
		"class": "army-button aml-anat p-kreon",
	});
})
