// here we are styling triangle </br>
// In this way we can actually make css functional
In .css </br>

.next{ </br>
height: 0; </br>
width: 0; </br>
border-color: transprent; </br>
border-style: solid; </br>
border-width: 2.5px; </br>
border-left-color: black; </br>
} </br>

In .scss </br>

@mixin triangle($size, $color, $direction){ </br>
height: 0; </br>
width: 0; </br>
border-color: transprent; </br>
border-style: solid; </br>
border-width: $size/2; </br>

@if $direction == up{ </br>
    border-bottom-color: $color; </br>
} @else if $direction == right{ </br>
    border-left-color: $color; </br>
} @else if $direction == down{ </br>
    border-top-color: $color; </br>
} @else if $direction == left{ </br>
    border-right-color: $color; </br>
} @else{ </br>
    @error "Unknown direction #($diection)."; </br>
} </br>
} </br>

.next { </br>
@include triangle(5px, black, right); </br>
} </br>
