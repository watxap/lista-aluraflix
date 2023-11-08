var posterPeliculas = [];

var tituloPeliculas = [];

var trailerPeliculas = [];

var i = 0;

function agregarPeliculas (tituloPelicula,posterPelicula,trailerPelicula) {
  if (
    !tituloPeliculas.includes(tituloPelicula) &&
    (posterPelicula.endsWith("jpg") || posterPelicula.endsWith("jpeg")) &&
    (trailerPelicula.startsWith("https://") || trailerPelicula.startsWith("http://"))
  ) {
    tituloPeliculas.push(tituloPelicula);
    posterPeliculas.push(posterPelicula);
    trailerPeliculas.push(trailerPelicula);
  } else if (tituloPeliculas.includes(tituloPelicula)) {
    alert(`La película ${tituloPelicula} ya existe en la lista.`);
  } else {
    alert(`La URL de las imagenes deben finalizar en .jpg o .jpeg`);
  }
}

agregarPeliculas (
  "Escuela de Rock",
  "https://es.web.img2.acsta.net/pictures/15/10/23/15/24/061018.jpg",
  "https://www.youtube.com/watch?v=alXk2rMCrNc");

agregarPeliculas (
  "Arrival",
  "https://m.media-amazon.com/images/I/91UusfCtQaL._AC_UF1000,1000_QL80_.jpg",
  "https://www.youtube.com/watch?v=tFMo3UJ4B4g",
);
agregarPeliculas (
  "El Jóven Manos de Tijera",
  "https://images.squarespace-cdn.com/content/v1/5f1811b47a7edc2eea4892b4/1628529323411-DNUOGJ9XBBKEVYVAIUM0/EDWARD+SCISSORHANDS+POSTER.jpg",
  "https://www.youtube.com/watch?v=TBHIO60whNw"
);

agregarPeliculas (
  "Pandillas de Nueva York",
  "https://pics.filmaffinity.com/Gangs_of_New_York-958873903-large.jpg",
  "https://www.youtube.com/watch?v=qHVUPri5tjA"
  );


agregarPeliculas (
  "La Película de LEGO",
  "https://www.originalfilmart.com/cdn/shop/products/lego_movie_2014_advance_original_film_art_5000x.jpg",
  "https://www.youtube.com/watch?v=fZ_JOBCLF-I"
  );


while (i < posterPeliculas.length){
   
  document.write(
      `<div style='display: inline-block; margin:2%; color:white'><a href=${trailerPeliculas[i]} target="_blank"><img src="${posterPeliculas[i]}"></a><p style="font-family: Arial;letter-spacing: -1px">${tituloPeliculas[i]}</p></div>`
      );
      i++;
   }