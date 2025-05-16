export class Teacher {
    constructor(
        id_teacher = null,
        nombre = "",
        correo = "",
        tipoUsuario = "teacher",
        materia = "",
        codigoProfesor = "",
        id = "",
        contrasena = ""
    ) {
        this.id_teacher = id_teacher;
        this.nombre = nombre;
        this.correo = correo;
        this.tipoUsuario = tipoUsuario;
        this.materia = materia;
        this.codigoProfesor = codigoProfesor;
        this.id = id;
        this.contrasena = contrasena;
    }
    teachesSubject(subject) {
        return this.materia.toLowerCase() === subject.toLowerCase();
    }
    getShortInfo() {
        return {
            nombre: this.nombre,
            correo: this.correo,
            materia: this.materia,
        };
    }
    static fromJSON(data) {
        return new Teacher(
            data.id_teacher,
            data.nombre,
            data.correo,
            data.tipoUsuario,
            data.materia,
            data.codigoProfesor,
            data.id,
            data.contrasena
        );
    }
    static toJSON(teacher) {
        return {
            id_teacher: teacher.id_teacher,
            nombre: teacher.nombre,
            correo: teacher.correo,
            tipoUsuario: teacher.tipoUsuario,
            materia: teacher.materia,
            codigoProfesor: teacher.codigoProfesor,
            id: teacher.id,
            contrasena: teacher.contrasena,
        };
    }
}