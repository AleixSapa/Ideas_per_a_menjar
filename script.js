var mostrar={}
var ai_tomate
var i_ha_macarons
function Els_ifs() {
    ai_tomate=prompt("Tens tomaquet")
    if(ai_tomate=="Si"){
        mostrar=["Amenida de tomaquet"] 
    }
    i_ha_macarons=prompt("Tens macarons")
    if(i_ha_macarons=="Si"){
        mostrar=["Macarons"] 
    }
    if(i_ha_macarons=="Si" && ai_tomate=="Si"){
        mostrar=["Macarons amb tomaquet"]
    }
 
}
function inici() {

    Els_ifs()
    alert("Les ideas son:")
    numero_contador=0
        alert(mostrar[numero_contador])
}