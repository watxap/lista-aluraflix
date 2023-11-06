var imagenPeliculas = [
    "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg",
    "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/esh25_584x800_022aaeef.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/p_findingnemo_19752_05271d3f.jpeg",
    "https://www.universalpictures.com.ar/tl_files/content/movies/fastx/poster/01.jpg",
  ]; 

/*Reemplazar el for (original) con while 
  for (var i = 0; i < imagenesPeliculas.length; i++) {
    document.write("<img src=" + imagenesPeliculas[i] + ">");
  }
  */
//agregar los títulos de las películas en formato texto

var tituloPeliculas = [
  "Escuela de Rock","Arrival","El Jóven Manos de Tijera","Buscando a Nemo","Rápidos y Furiosos X"
]

var i = 0;

while (i < imagenPeliculas.length){
  if ((imagenPeliculas[i].endsWith('jpg')) || (imagenPeliculas[i].endsWith('jpeg'))){
 
 document.write(
      "<div style='display: inline-block; margin:4%; color:white'>" +
        "<img src= " + imagenPeliculas[i] + ">" + 
        "<h5>" + tituloPeliculas[i] +"</h5>" +
        "</div>"
    );
    i++;
 }else{alert('Error - Formatos de imagen admitidas: jpg/jpeg'); break; }}