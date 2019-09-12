const lucas = {
    nombre: "Lucas Traverso",
    lenguajes: ["JavaScript", "Ruby", "Haskell"],
    golosina: "OREOS"
};

const dario = {
    nombre: "Dario Garcia",
    lenguajes: ["JavaScript", "Ruby", "Haskell", "Java"],
    golosina: "OREOS"
};

const belu = {
    nombre: "Belen Amat",
    jardinero: lucas,
    lenguajes: ["JavaScript", "Ruby"],
    golosina: "SKITTLES"
};

const joaquin = {
    nombre: "Joaquin Azcarate",
    jardinero: dario,
    lenguajes: ["JavaScript", "Ruby", "Cristal", "Java"],
    golosina: "OREOS"
};

const mica = {
    nombre: "Micaela Alonso",
    jardinero: lucas,
    lenguajes: ["JavaScript", "Ruby"],
    golosina: "SKITTLES"
};

const hoopla = {
    nombre: "Hoopla",
    pinos: [belu, lucas, dario],
    origen: "EEUU",
    enIngles: true
}

const teespring = {
    nombre: "Teespring",
    pinos: [joaquin, lucas, mica],
    origen: "EEUU",
    enIngles: true
}

export const pinos = [lucas, dario, belu, joaquin, mica];

export const proyectos = [hoopla, teespring];