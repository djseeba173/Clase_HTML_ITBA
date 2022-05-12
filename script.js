const misFrases = [
    "Cuando pierdas, no pierdas la lección - Dalai Lama",
    "No busques los errores, busca un remedio - Henry Ford",
    "La vida es una aventura, atrévete - Teresa de Calcuta",
    "Tu actitud, no tu aptitud, determinará tu altitud - Zig Ziglar",
    "Tienes que hacer las cosas que crees que no puedes hacer - Eleanor Roosevelt",
    "Si te caíste ayer, levántate hoy - H. G. Wells",
    "Siempre parece imposible... hasta que se hace - Nelson Mandela",
    "Si no pierdes, no puedes disfrutar de las victorias - Rafael Nadal",
    "No dejes que el miedo se interponga en tu camino - Babe Ruth",
    "Haz de cada día tu obra maestra John Wooden" ,
    "No cuentes los días, haz que los días cuenten - Muhammad Ali",
    "El mejor momento del día es ahora - Pierre Bonnard",
    "Si la oportunidad no llama, construye una puerta - Milton Berle",
    "Deja que cada hombre ejerza el arte que domina - Aristófanes",
    "El valor de una idea radica en su uso - Thomas Edison",
];

function obtenerFrase(){
    const frase = misFrases[Math.floor(Math.random()*misFrases.length)]

    const input = document.getElementById('frase');

    input.value = frase;
}