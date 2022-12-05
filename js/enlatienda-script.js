$(document).ready(function () {

    'use strict';

//                  '<div class="row d-flex">' +
     for (let i = 0; i < productos.length; i++) {
          if ( productos[i]['Categoria'] == 'Cafe de especialidad') {
                 
             
             $('#cafeDeEspecialidad').append(

                    '<div class="col-6 col-md-4 mt-4">' +
                    '<div class="sc-product-item">' +
                    '<a data-fancybox href="img/productos/'+ productos[i]['Imagen'] +'" alt="'+ productos[i]['Nombre'] + 'data-fancybox="gallery" >'  
                    + 
                    '<img class="img-fluid" data-name="product_image" src="img/productos/'+ productos[i]['Imagen'] +'" alt="'+ productos[i]['Nombre'] +'">' +
                    '</a>' +
                    '<h4 class="fw-normal" data-name="product_name">'+ productos[i]['Nombre'] +'</h4>' +
                    '<p data-name="product_desc">'+ productos[i]['Descripcion'] +'</p>' +
                    '<input name="product_price" value="'+ productos[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ productos[i] +'" type="hidden" >' +
                    '<div>$ '+ productos[i]['Precio'] +'</div>' +
                    '<button class="sc-add-to-cart btn btn-dark mt-2">Agregar</button>' +
                    '</div>' +
                    '</div>' 
                 );
             } else if (productos[i]['Categoria'] == 'Cafe frio') {
                $('#cafesFrios').append(
                    '<div class="col-6 col-md-4 mt-4">' +
                    '<div class="sc-product-item">' +
                    '<a data-fancybox href="img/productos/'+ productos[i]['Imagen'] +'" alt="'+ productos[i]['Nombre'] + 'data-fancybox="gallery" >'  
                    + 
                    '<img class="img-fluid" data-name="product_image" src="img/productos/'+ productos[i]['Imagen'] +'" alt="'+ productos[i]['Nombre'] +'">' +
                    '</a>' +
                    '<h4 class="fw-normal" data-name="product_name">'+ productos[i]['Nombre'] +'</h4>' +
                    '<p data-name="product_desc">'+ productos[i]['Descripcion'] +'</p>' +
                    '<input name="product_price" value="'+ productos[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ productos[i] +'" type="hidden" >' +
                    '<div>$ '+ productos[i]['Precio'] +'</div>' +
                    '<button class="sc-add-to-cart btn btn-dark mt-2">Agregar</button>' +
                    '</div>' +
                    '</div>'
                    );
             } else if (productos[i]['Categoria'] == 'Desayunos/Promos') {
                $('#desayunosPromos').append(
                    '<div class="col-6 col-md-4 mt-4">' +
                    '<div class="sc-product-item">' +
                    '<a data-fancybox href="img/productos/'+ productos[i]['Imagen'] +'" alt="'+ productos[i]['Nombre'] + 'data-fancybox="gallery" >'  
                    + 
                    '<img class="img-fluid" data-name="product_image" src="img/productos/'+ productos[i]['Imagen'] +'" alt="'+ productos[i]['Nombre'] +'">' +
                    '</a>' +
                    '<h4 class="fw-normal" data-name="product_name">'+ productos[i]['Nombre'] +'</h4>' +
                    '<p data-name="product_desc">'+ productos[i]['Descripcion'] +'</p>' +
                    '<input name="product_price" value="'+ productos[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ productos[i] +'" type="hidden" >' +
                    '<div>$ '+ productos[i]['Precio'] +'</div>' +
                    '<button class="sc-add-to-cart btn btn-dark mt-2">Agregar</button>' +
                    '</div>' +
                    '</div>'
                    );
             } else if (productos[i]['Categoria'] == 'Jugos Naturales') {
                $('#jugosNaturales').append(
                    '<div class="col-6 col-md-4 mt-4">' +
                    '<div class="sc-product-item">' +
                    '<a data-fancybox href="img/productos/'+ productos[i]['Imagen'] +'" alt="'+ productos[i]['Nombre'] + 'data-fancybox="gallery" >'  
                    + 
                    '<img class="img-fluid" data-name="product_image" src="img/productos/'+ productos[i]['Imagen'] +'" alt="'+ productos[i]['Nombre'] +'">' +
                    '</a>' +
                    '<h4 class="fw-normal" data-name="product_name">'+ productos[i]['Nombre'] +'</h4>' +
                    '<p data-name="product_desc">'+ productos[i]['Descripcion'] +'</p>' +
                    '<input name="product_price" value="'+ productos[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ productos[i] +'" type="hidden" >' +
                    '<div>$ '+ productos[i]['Precio'] +'</div>' +
                    '<button class="sc-add-to-cart btn btn-dark mt-2">Agregar</button>' +
                    '</div>' +
                    '</div>'
                    );
             } else if (productos[i]['Categoria'] == 'Pastelería') {
                $('#pasteleria').append(
                    '<div class="col-6 col-md-4 mt-4">' +
                    '<div class="sc-product-item">' +
                    '<a data-fancybox href="img/productos/'+ productos[i]['Imagen'] +'" alt="'+ productos[i]['Nombre'] + 'data-fancybox="gallery" >'  
                    + 
                    '<img class="img-fluid" data-name="product_image" src="img/productos/'+ productos[i]['Imagen'] +'" alt="'+ productos[i]['Nombre'] +'">' +
                    '</a>' +
                    '<h4 class="fw-normal" data-name="product_name">'+ productos[i]['Nombre'] +'</h4>' +
                    '<p data-name="product_desc">'+ productos[i]['Descripcion'] +'</p>' +
                    '<input name="product_price" value="'+ productos[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ productos[i] +'" type="hidden" >' +
                    '<div>$ '+ productos[i]['Precio'] +'</div>' +
                    '<button class="sc-add-to-cart btn btn-dark mt-2">Agregar</button>' +
                    '</div>' +
                    '</div>'
                    );
             } else {
                $('#otros').append(
                    '<div class="col-6 col-md-4 mt-4">' +
                    '<div class="sc-product-item">' +
                    '<a data-fancybox href="img/productos/'+ productos[i]['Imagen'] +'" alt="'+ productos[i]['Nombre'] + 'data-fancybox="gallery" >'  
                    + 
                    '<img class="img-fluid" data-name="product_image" src="img/productos/'+ productos[i]['Imagen'] +'" alt="'+ productos[i]['Nombre'] +'">' +
                    '</a>' +
                    '<h4 class="fw-normal" data-name="product_name">'+ productos[i]['Nombre'] +'</h4>' +
                    '<p data-name="product_desc">'+ productos[i]['Descripcion'] +'</p>' +
                    '<input name="product_price" value="'+ productos[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ productos[i] +'" type="hidden" >' +
                    '<div>$ '+ productos[i]['Precio'] +'</div>' +
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
            cartEmpty: '¡Sin productos aún!<br />Comenzá a elegir:'
        }
    });
});

