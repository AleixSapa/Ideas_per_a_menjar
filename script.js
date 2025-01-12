var mostrar={}
var ai_tomate
var i_ha_macarons
numero_contador=0
function Preguntas() {
    ai_tomate=prompt("Tens tomaquet")
    i_ha_macarons=prompt("Tens macarons")
}
function Els_ifs() {
    if(ai_tomate=="Si"){
        mostrar=["Amenida de tomaquet"] 
    }
    if(i_ha_macarons=="Si"){
        mostrar=["Macarons"] 
    }
    Convinats()
}
function Convinats() {
    if(i_ha_macarons=="Si" && ai_tomate=="Si"){
        mostrar=["Macarons amb tomaquet"]
    } 
}
function inici() {
    Preguntas(i_ha_macarons=prompt("Tens macarons"))
    Els_ifs()
    alert("Les ideas son:")
    Fi()
    Fi()
    Fi()
    Fi()
    Fi()
}
function Fi() {
    alert(mostrar[numero_contador])
    numero_contador=numero_contador+1
}