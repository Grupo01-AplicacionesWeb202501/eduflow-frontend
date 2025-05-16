export class Student {
    constructor(
        id_estudiante = null,
        nombre = "",
        correo = "",
        tipoUsuario = "student",
        codigoAlumno = "",
        carrera = "",
        ciclo_actual = 0,
        id = "",
        contrasena = ""
    ) {
        this.id_estudiante = id_estudiante;
        this.nombre = nombre;
        this.correo = correo;
        this.tipoUsuario = tipoUsuario;
        this.codigoAlumno = codigoAlumno;
        this.carrera = carrera;
        this.ciclo_actual = ciclo_actual;
        this.id = id;
        this.contrasena = contrasena;
    }
    isSenior() {
        return this.ciclo_actual >= 8;
    }
    isNewStudent() {
        return this.ciclo_actual === 1;
    }
    getShortInfo() {
        return {
            nombre: this.nombre,
            correo: this.correo,
            carrera: this.carrera,
            ciclo_actual: this.ciclo_actual,
        };
    }
    static fromJSON(data) {
        return new Student(
            data.id_estudiante,
            data.nombre,
            data.correo,
            data.tipoUsuario,
            data.codigoAlumno,
            data.carrera,
            data.ciclo_actual,
            data.id,
            data.contrasena
        );
    }
    static toJSON(student) {
        return {
            id_estudiante: student.id_estudiante,
            nombre: student.nombre,
            correo: student.correo,
            tipoUsuario: student.tipoUsuario,
            codigoAlumno: student.codigoAlumno,
            carrera: student.carrera,
            ciclo_actual: student.ciclo_actual,
            id: student.id,
            contrasena: student.contrasena,
        };
    }
}