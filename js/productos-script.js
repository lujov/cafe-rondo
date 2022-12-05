$(document).ready(function () {

    'use strict';

    for (let i = 0; i < productosTienda.length; i++) {
            if ( productosTienda[i]['Categoria'] == 'Cafe en granos') {
            
        $('#cafeEnGranos').append(
            '<div class="col-6 col-md-4 mt-4">' +
                '<div class="sc-product-item">' +
                    '<a data-fancybox href="img/productos/'+ productosTienda[i]['Imagen'] +'" alt="'+ productosTienda[i]['Nombre'] + 'data-fancybox="gallery" >'  
                    + 
                    '<img class="img-fluid" data-name="product_image" src="img/productos/'+ productosTienda[i]['Imagen'] +'" alt="'+ productosTienda[i]['Nombre'] +'">' +
                    '</a>' +
                    '<h4 class="fw-normal" data-name="product_name">'+ productosTienda[i]['Nombre'] +'</h4>' +
                    '<p data-name="product_desc">'+ productosTienda[i]['Descripcion'] +'</p>' +
                    '<input name="product_price" value="'+ productosTienda[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ productosTienda[i] +'" type="hidden" >' +
                    '<div>$ '+ productosTienda[i]['Precio'] +'</div>' +
                    '<button class="sc-add-to-cart btn btn-dark mt-2">Agregar</button>' +
                '</div>' +
            '</di   v>'
        );
        } else {
            $('#cafeMolido').append(
                '<div class="col-6 col-md-4 mt-4">' +
                    '<div class="sc-product-item">' +
                        '<a data-fancybox href="img/productos/'+ productosTienda[i]['Imagen'] +'" alt="'+ productosTienda[i]['Nombre'] + 'data-fancybox="gallery" >'  
                        + 
                        '<img class="img-fluid" data-name="product_image" src="img/productos/'+ productosTienda[i]['Imagen'] +'" alt="'+ productosTienda[i]['Nombre'] +'">' +
                        '</a>' +
                        '<h4 class="fw-normal" data-name="product_name">'+ productosTienda[i]['Nombre'] +'</h4>' +
                        '<p data-name="product_desc">'+ productosTienda[i]['Descripcion'] +'</p>' +
                        '<input name="product_price" value="'+ productosTienda[i]['Precio'] +'" type="hidden" >' +
                        '<input name="product_id" value="'+ productosTienda[i] +'" type="hidden" >' +
                        '<div>$ '+ productosTienda[i]['Precio'] +'</div>' +
                        '<button class="sc-add-to-cart btn btn-dark mt-2">Agregar</button>' +
                    '</div>' +
                '</div>'
            );
        }
    }


    $('#smartcart').smartCart({

        cartItemTemplate: '<div class="d-flex">'+
            //'<img class="img-fluid" src="{product_image}" />' +
            '<h3 class="h5 list-group-item-heading">{product_name}</h3>' +
        '</div>',

        lang: {
            cartTitle: 'Mis productos',
            checkout: 'Hacer pedido',
            clear: 'Borrar',
            subtotal: 'Subtotal:',
            cartRemove:'×',
            cartEmpty: '¡Sin productos aún!<br />Comenzá a elegir'
        }
    });
});