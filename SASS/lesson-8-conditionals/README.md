// here we are styling triangle

In .css

.next{
height: 0;
width: 0;
border-color: transprent;
border-style: solid;
border-width: 2.5px;
border-left-color: black;
}

In .scss

@mixin triangle($size, $color, $direction){
height: 0;
width: 0;
border-color: transprent;
border-style: solid;
border-width: $size/2;

@if $direction == up{
    border-bottom-color: $color;
} @else if $direction == right{
    border-left-color: $color;
} @else if $direction == down{
    border-top-color: $color;
} @else if $direction == left{
    border-right-color: $color;
} @else{
    @error "Unknown direction #($diection).";
}
}

.next {
@include triangle(5px, black, right);
}
