const propiedades_venta = [
    {
      nombre: 'Apartamento de lujo en zona exclusiva',
      src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
      descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
      ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
      habitaciones: 4,
      baños: 4,
      costo: 5000,
      smoke: false,
      pets: false
    },
    {
      nombre: 'Apartamento acogedor en la montaña',
      src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
      descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
      ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
      habitaciones: 2,
      baños: 1,
      costo: 1200,
      smoke: true,
      pets: true
    },
    {
      nombre: 'Penthouse de lujo con terraza panorámica',
      src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
      descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
      ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
      habitaciones: 3,
      baños: 3,
      costo: 4500,
      smoke: false,
      pets: true
    },
    {
      nombre: 'Casa de campo moderna',
      src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      descripcion: 'Una hermosa casa de campo con un toque moderno y un amplio jardín.',
      ubicacion: '123 Country Road, Rural Town, CA 67890',
      habitaciones: 4,
      baños: 2,
      costo: 3500,
      smoke: false,
      pets: true
    }
  ];
  
  // Código para renderizar las propiedades
  const contenedorPropiedades = document.getElementById('propiedades-venta');
  
  propiedades_venta.forEach(propiedad => {
    const propiedadHTML = `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento" />
          <div class="card-body">
            <h5 class="card-title">${propiedad.nombre}</h5>
            <p class="card-text">${propiedad.descripcion}</p>
            <p class="card-text">Ubicación: ${propiedad.ubicacion}</p>
            <p class="card-text">Habitaciones: ${propiedad.habitaciones}</p>
            <p class="card-text">Baños: ${propiedad.baños}</p>
            <p class="card-text">Costo: $${propiedad.costo}</p>
            <p class="card-text ${propiedad.smoke ? 'text-success' : 'text-danger'}">${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'}</p>
            <p class="card-text ${propiedad.pets ? 'text-success' : 'text-danger'}">${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}</p>
          </div>
        </div>
      </div>
    `;
  
    contenedorPropiedades.innerHTML += propiedadHTML;
  });
  