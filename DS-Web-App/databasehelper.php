<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$db = "diningslug";

	//Create connection
	$conn = mysqli_connect($servername, $username, $password, $db) or die("Connection Failed");
	echo "Connected Successfully";
	//Execute the webscraper 
	$result = exec("scraper.py C:\wamp64\www\Dining-Slug\Webscraper");
	//Extract result of webscraper from .txt file
	$filename = "data.txt";
	$data = file_get_contents($filename);
	$dharray = json_decode($data, true);
	foreach($dharray as $row){
		$sql = "INSERT INTO dininghalldata (ID, DiningHall, Breakfast, Lunch, Dinner, LateNight)
		VALUES ('".$row["ID"]."', '".$row["DiningHall"]."', '".$row["Breakfast"]."', '".$row["Lunch"]"', '".$row["Dinner"]."', '".$row["LateNight"]."')";
	}

	if ($conn->query($sql) === TRUE) {
    		echo "New record created successfully";
	} else {
    		echo "Error: " . $sql . "<br>" . $conn->error;
	}

		

?>