jQuery(document).ready(function(){

    //Ordena elementos de una lista de articulos/noticias/notas/eventos
    var tabla;
    jQuery(".content").find(".node-promoted, .node-teaser").each(function(){
        tabla = jQuery(this).find("header").html();
        tabla = tabla + "<table>";
        tabla = tabla + "<tr style='background:#FFF;'>";
        if (jQuery(this).find(".field-name-field-image").html()!=undefined){
            tabla = tabla + "<td style='width:220px;border:1px solid #E1E1E1;padding:4px;text-align:center'>";
            tabla = tabla + jQuery(this).find(".field-name-field-image").html();
            tabla = tabla + "</td>";
        }
        tabla = tabla + "<td style='border-right:none;border-bottom:1px solid #FFF;vertical-align:top'>";
        if (jQuery(this).find(".field-name-field-event-date").html()!=undefined){
            tabla = tabla + jQuery(this).find(".field-name-field-event-date").html();
            tabla = tabla + "<br>";
        }
        tabla = tabla + jQuery(this).find(".field-name-body").html();
        tabla = tabla + "<br>";
        tabla = tabla + jQuery(this).find("footer").html();
        tabla = tabla + "</td>";
        tabla = tabla + "</tr></table>";
        jQuery(this).html(tabla)
    });

    //Estilos para el calendario
    jQuery( "div .monthview:contains('Ekadasi')" ).css( "background-color", "#DDDDFF" );
    jQuery( "div .monthview:contains('romper ayuno')" ).css( "background-color", "#DDDDFF" );
    jQuery( "a:contains('romper ayuno')" ).removeAttr( "href" ).css( {"text-decoration":"none"} );;
    jQuery( "div .monthview:contains('Aparición')" ).css( "background-color", "#DDFFDD" );
    jQuery( "div .monthview:contains('Desaparición')" ).css( "background-color", "#FFEEEE" );
    jQuery( ".month-view a" ).css( "font-weight", "normal" );
    jQuery( ".month-view a" ).css( "font-size", "8pt" );
    var leyenda =   "<br> \
                    <div> \
                    <span style='padding:0px 20px 0px 0px;background-color:#DDDDFF;border:1px solid #ccc;'></span> \
                    <span style='padding:0px 40px 0px 0px'>&nbsp;Ekadasi</span> \
                    <span style='padding:0px 20px 0px 0px;background-color:#DDFFDD;border:1px solid #ccc;'></span> \
                    <span style='padding:0px 40px 0px 0px'>&nbsp;Aparici&oacute;n</span> \
                    <span style='padding:0px 20px 0px 0px;background-color:#FFEEEE;border:1px solid #ccc'></span> \
                    <span>&nbsp;Desaparici&oacute;n</span> \
                    </div>";
    jQuery(".calendar-calendar").append(leyenda);

    //Estilo para el menu principal
    jQuery(".leaf,.expanded").hover(
        function() {
            jQuery(this).parent().prev().css({'background-color':'#981906','color':'#fff'});
        }, function() {
            jQuery(this).parent().prev().css({'background-color':'#333','color':'#bbb'});
        }
    );

});
