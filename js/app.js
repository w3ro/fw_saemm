$(document).foundation();
setTimeout(function(){$('a[target="_blank"]').each(function(){var a=$(this).html();0==a.includes('<i class')&&$(this).append('<i class="material-icons md-1t">exit_to_app</i>')})},1e3),window.setInterval(function(){$('a[target="_blank"]').each(function(){var a=$(this).html();0==a.includes('<i class')&&$(this).append('<i class="material-icons md-1t">exit_to_app</i>')})},1e3);
$(document).ready(function() {
    $('#listado').DataTable();
} );
