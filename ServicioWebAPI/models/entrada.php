<?php
    class Entradas extends Conectar{
        public function getEntradas(){
            $conectar = parent::Conexion();
            parent::set_names();
            $sql="SELECT * FROM `Entradas`";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $sql->fetchAll(PDO::FETCH_ASSOC);
        }

        public function insertEntrada($titulo,$autor,$fecha,$contenido){
            $conectar= parent::conexion();
            parent::set_names();
            $sql="INSERT INTO `Entradas` (`Titulo`, `Autor`, `Fecha`, `Contenido`) VALUES (?, ?, ?, ?);";
            $sql=$conectar->prepare($sql);
            $sql->bindValue(1, $titulo);
            $sql->bindValue(2, $autor);
            $sql->bindValue(3, $fecha);
            $sql->bindValue(4, $contenido);
            $sql->execute();
            $resultado2=$sql->fetchAll(PDO::FETCH_ASSOC);
            $mensaje = "Entrada registrada con exito";
            return $mensaje;
        }
    }
?>