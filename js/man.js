
(function(){

    const valor = new XMLHttpRequest();
    valor.onreadystatechange = function(){
    
    if(valor.readyState == 4 && valor.status == 200){
        let parseo = JSON.parse(valor.responseText);
    
        parseo.forEach((e) => {
          document.getElementById("hombre").innerHTML +=`
    
          <div class="caja-producto">
          <img src="${e.imagen}" alt="">
          <h2>${e.producto}</h2>
          <h3>${e.precio}</h3>
          <p>${e.descripcion}</p>
        <div class="enlaces">
                <p>Contactanos: </p>
                  <a href="https://wa.me/${e.whatsapp}" target="_blank"><i class="fa-brands fa-square-whatsapp what"></i></a>
                  <a href="tel:${e.telefono}"><i class="fa-solid fa-square-phone-flip tel"></i></a>
              </div>
             
      </div>
          `;
        });
    }
    
    }
    valor.open("GET","js/man.json");
    valor.send();
    })();