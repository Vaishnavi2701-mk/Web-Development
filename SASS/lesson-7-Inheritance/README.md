/_ This css will print because message-shared is extended_/ </br>

// In Inheritance we can declare a function as we declared variables </br>

//then we can inherit them by using @extend </br>

$message-shared{ </br>
border: 1px solid #cccc; </br>
padding: 10px; </br>
color: #333; </br>
} </br>

.message { </br>
@extended $message-shared; </br>
} </br>

.success { </br>
@extended $message-shared; </br>
border-color: green; </br>
} </br>

.error { </br>
@extended $message-shared; </br>
border-color: red; </br>
} </br>

.warning { </br>
@extended $message-shared; </br>
border-color: yellow; </br>
} </br>
