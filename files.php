<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP files</title>
</head>
<body>
    <?php 
        echo "Hola caracola";
         if (isset($_FILES["inputFiles[]"])) {
            for ($i = 0; $i < count($_FILES["inputFiles"]["name"]); $i++) {
                echo $_FILES["inputFiles"]["tmp_name"][$i] . '<br>';  
                echo $_FILES["inputFiles"]["name"][$i] . '<br>';  
            }
        }
    ?>
</body>
</html>