class Empleado {
    constructor(nombre,cargo,salario) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.activo = true; 
    }
    calcularSalarioAnual(){
        return this.salario * 12;
    }
    presentarse(){
        return `Mi nombre es ${this.nombre}, mi cargo actual en la empresa es ${this.cargo}`
    }
    desactivar(){
        this.activo = false;
        return `El empleado ha sido desactivado de la base de datos`
    }
    info(){
        return `El empleado ${this.nombre} con el cargo ${this.cargo} actualmente se encuentra ${this.activo ? "activo": "inactivo"} en la compañia, con un salario de ${this.salario}`
    }

}


class Lider extends Empleado{
    constructor(nombre,salario,equipo){
        super (nombre, "Lider de equipo", salario)
        this.equipo = equipo;
    }
    presentarEquipo(){
        return `El equipo de ha actualizado y estará conformado por ${this.equipo.join(", ")}`
    }
    agregarMiembro(nombre){
        this.equipo.push(nombre);
        return `Se han agregado a los participantes ${nombre}`
    }
    info(){
        return `${super.info()} y tiene ${this.equipo.length} personas en su equipo`
    }
}

const emp1 = new Empleado("Ana", "Desarrolladora", 3000000);
const emp2 = new Empleado("Nicolas", "Desarrollador", 3000000);
const emp3 = new Empleado("Daniel", "Desarrollador", 3000000);
const emp4 = new Empleado("Kevin", "Desarrollador", 3000000);
console.log(emp1.presentarse());
console.log(emp1.calcularSalarioAnual());
console.log(emp1.info());
console.log(emp1.desactivar()); /*Aquí se desactiva al usuario y ya sabes instructor que varia entonces en la Info jaja */ 
console.log(emp1.info());



const lead1 = new Lider("Alberto",60000000,["Carlos","Pépe","Ana"]);
console.log(lead1.presentarEquipo());
console.log(lead1.calcularSalarioAnual());
console.log(lead1.info());
console.log(lead1.agregarMiembro("Luis"),lead1.presentarEquipo());

const lead2 = new Lider("Alejandra",60000000,["Ana","Nicolas","Daniel"]);
console.log(lead2.presentarEquipo());
console.log(lead2.calcularSalarioAnual());
console.log(lead2.info());
console.log(lead2.agregarMiembro("Kevin"),lead1.presentarEquipo());


/* Aquí te dejaría una forma rapida de escanearlos*/ 

const todos = [emp1,emp2,emp3,emp4,lead1,lead2];
let nominaTotal = 0;
for (let i = 0; i < todos.length; i++) {
    nominaTotal = nominaTotal + todos[i].salario
}
console.log(`El costo mensual es de: ${nominaTotal}`);
console.log(`El costo anual es de: ${nominaTotal * 12}`);
