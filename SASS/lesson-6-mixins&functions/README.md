In .css

.box{
-webkit-transform: rotate(30deg);
-ms-transform: rotate(30deg);
transform: rotate(30deg);
}

// We can use mixin function to make a seperate function for collective properties and then use them by using @include

In .sass

@mixin transform ($property){
-webkit-transform: $property;
-ms-transform: $property;
transform: $property;
}

.box{
@include transform(rotate(30deg));
}
