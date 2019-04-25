Foundation.Abide.defaults.patterns['curp'] = /^[A-Za-z]{1}[AEIOUaeiou]{1}[A-Za-z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Za-z]{1}[0-9]{1}$/; //Patron personalizado para CURP

Foundation.Abide.defaults.patterns['rfc_pf'] = /^(([A-Za-z]{1}[AEIOUaeiou]{1}[A-Za-z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))([A-Za-z0-9]{3}))|([A-Za-z]{1}[AEIOUaeiou]{1}[A-Za-z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))$/; //Patron personalizado para RFC de persona fisica

Foundation.Abide.defaults.patterns['rfc_pm'] = /^(([A-Za-z]{3}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))([A-Za-z0-9]{3}))$/; //Patron personalizado para RFC de persona moral

$(document).foundation();
setTimeout(function(){$('a[target="_blank"]').each(function(){var a=$(this).html();0==a.includes('<i class')&&$(this).append('<i class="material-icons md-1t">exit_to_app</i>')})},1e3),window.setInterval(function(){$('a[target="_blank"]').each(function(){var a=$(this).html();0==a.includes('<i class')&&$(this).append('<i class="material-icons md-1t">exit_to_app</i>')})},1e3);
$(document).ready(function() {
	$('#listado').DataTable();
} );
