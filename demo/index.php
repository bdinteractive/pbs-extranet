<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>PBS INTRANET FILES</title>

<style>

body { font-family: Arial, Helvetica, sans-serif; }

ul {  }
li { margin-bottom:7px; }
a { color: #1B77E0; }
a:hover { color: #2C67AB; }

</style>

</head>

<body>

<?php
	if ($handle = opendir('.')) {
		while (false !== ($file = readdir($handle))){
			
			if ($file != "." && $file != ".."){
				$thelist .= '<li><a href="'.$file.'">'.$file.'</a></li>';
			}
		}
		closedir($handle);
	}
?>

<h1>PBS Intranet Files</h1>

<ul><?=$thelist?></ul>


</body>
</html>
