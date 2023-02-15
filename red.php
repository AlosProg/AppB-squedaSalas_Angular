<?php
// Cabeceras para poder obtener los datos de la API del gobierno
header("Access-Control-Allow-Origin: *"); // habilitamos al servidor para que acepte cualquier solicitud del cliente
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // habilitamos al servidor para que acepte estos métodos
// Url del gobierno de donde se obtienen los datos de las salas
echo file_get_contents("https://datos.madrid.es/portal/site/egob/menuitem.ac61933d6ee3c31cae77ae7784f1a5a0/?vgnextoid=00149033f2201410VgnVCM100000171f5a0aRCRD&format=json&file=0&filename=217921-0-salas-estudio&mgmtid=2b25f4c22d4a1510VgnVCM1000000b205a0aRCRD&preview=full");
   
    