<?php
	if (substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2) == 'fr') {
	 	header("Location: /fr/home");
		exit();
	} else {
		header("Location: /fr/home");
		exit();
	}
?>
<!DOCTYPE html>
<html>
	<head>
		<title>DuoCloud</title>
		<meta name="robots" content="noindex, nofollow">
	</head>
</html>