<?php
    class Conectar{
        protected $dbh;

        protected function Conexion(){
            try {
				//$conectar = $this->dbh = new PDO("mysql:local=localhost;dbname=blogPROMASS_bd","root","");
                $conectar = $this->dbh = new PDO("mysql:host=mysql-pruebasapp.alwaysdata.net;dbname=pruebasapp_blogpromass","347524_pruebas",'prueba123$"');
				return $conectar;	
			} catch (Exception $e) {
				print "¡Error BD!: " . $e->getMessage() . "<br/>";
				die();	
			}
        }

        public function set_names(){	
			return $this->dbh->query("SET NAMES 'utf8'");
        }
    }
?>