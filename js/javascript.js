var listaPeliculas = [
    "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg",
    "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
    "https://lumiere-a.akamaihd.net/v1/images/esh25_584x800_022aaeef.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/p_findingnemo_19752_05271d3f.jpeg",
    "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG",
  ]; 

  for (var i = 0; i < listaPeliculas.length; i++) {
    document.write("<img src=" + listaPeliculas[i] + ">");
  }