In .css

body{ </br>
font: 100% Helvetica, sans-serif;</br>
color: #33342;</br>
}</br>

.inverse{</br>
background-color: #33345;</br>
color: white;</br>
}</br>

In .sass

// base.scss

$font-family: Helvetica, sans-serif; </br>
$primary-color: #33342; </br>

body{</br>
font: 100% $font-family;</br>
color: $primary-color;</br>
}</br>

// styles.scss
@use 'base';

// we can import another .scss file into other .scss file by using @use
.inverse{</br>
background-color:$primary-color;</br>
color: white;</br>
}</br>