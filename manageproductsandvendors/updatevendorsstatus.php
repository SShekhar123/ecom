<?php
include('configproduct.php');
												

try{
$conn = new PDO("mysql:host=$servername;dbname=$dbname","root","");
	
}
catch(Exception $e)
{
	echo 'Not connected'.$e->getMessage();
}
$a=$_GET['status_id'];
$id=$_GET['id'];


echo $id;
$qw="UPDATE `vendors` SET `Status`='$a' WHERE `ID`='$id'";
     $conn->exec($qw);
?>