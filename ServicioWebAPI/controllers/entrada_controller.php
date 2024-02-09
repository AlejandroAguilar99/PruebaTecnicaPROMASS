<?php
    header('Content-Type: application/json');

    require_once("../config/conexion.php");
    require_once("../models/entrada.php");

    $cultivo = new Entradas();

    $body = json_decode(file_get_contents("php://input"), true);

    switch($_GET["op"]){
        case "getEntradas":
            $datos=$cultivo->getEntradas();
            echo json_encode($datos);
        break;
        case "insertEntrada":
            $datos=$cultivo->insertEntrada($body["titulo"],$body["autor"],$body["fecha"],$body['contenido']);
            echo json_encode($datos);
        break;
    }
?>