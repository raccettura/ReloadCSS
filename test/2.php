<?php
$color = Array ("red", "green", "blue", "yellow", "orange", "purple", "brown", "black", "pink");

header("Content-Type: text/css;");
?>

body {
    color: <?php print $color[rand(0,sizeOf($color))]; ?>;
}