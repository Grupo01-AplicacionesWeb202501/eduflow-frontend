import {Student} from "../model/student.js";
import {Teacher} from "../model/teacher.js";

export class UserService {
    constructor() {
        this.apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
        this.studentsEndPoint = `${this.apiBaseUrl}${import.meta.env.VITE_STUDENTS_ENDPOINT_PATH}`;
        this.teachersEndPoint = `${this.apiBaseUrl}${import.meta.env.VITE_TEACHERS_ENDPOINT_PATH}`;
    }

    async signInStudent(email, password) {
        const response = await fetch(this.studentsEndPoint);
        const students = await response.json();

        const student = students.find(
            (s) => s.correo === email && s.contrasena === password
        );

        if (!student) {
            throw new Error("Credenciales inválidas. Verifique su correo y contraseña.");
        }

        return Student.fromJSON(student);
    }

    async signUpStudent(nombre, correo, carrera, ciclo_actual, contrasena) {
        const response = await fetch(this.studentsEndPoint);
        const students = await response.json();

        // Verificar si el correo ya está registrado
        const existingStudent = students.find((s) => s.correo === correo);
        if (existingStudent) {
            throw new Error("El correo ya está registrado. Intente con otro correo.");
        }

        const id_estudiante = students.length > 0 ? students[students.length - 1].id_estudiante + 1 : 1;
        const codigoAlumno = `S2025${String(id_estudiante).padStart(5, "0")}`;
        const id = Math.random().toString(16).slice(2, 6) + Math.random().toString(16).slice(2, 6);

        // Crear un nuevo estudiante
        const newStudent = new Student(
            id_estudiante,
            nombre,
            correo,
            "student",
            codigoAlumno,
            carrera,
            ciclo_actual,
            id,
            contrasena
        );

        await fetch(this.studentsEndPoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Student.toJSON(newStudent)),
        });

        return newStudent;
    }

    async signInTeacher(identifier, password) {
        const response = await fetch(this.teachersEndPoint);
        const teachers = await response.json();

        const teacher = teachers.find(
            (t) =>
                (t.correo === identifier || t.codigoProfesor === identifier) &&
                t.contrasena === password
        );

        if (!teacher) {
            throw new Error("Credenciales inválidas. Verifique su correo/código y contraseña.");
        }

        return Teacher.fromJSON(teacher);
    }

    async signUpTeacher(nombre, correo, materia, contrasena) {
        const response = await fetch(this.teachersEndPoint);
        const teachers = await response.json();

        const existingTeacher = teachers.find((t) => t.correo === correo);
        if (existingTeacher) {
            throw new Error("El correo ya está registrado. Intente con otro correo.");
        }

        const id_teacher = teachers.length > 0 ? teachers[teachers.length - 1].id_teacher + 1 : 1;
        const codigoProfesor = `T2025${String(id_teacher).padStart(5, "0")}`;
        const id = Math.random().toString(16).slice(2, 6) + Math.random().toString(16).slice(2, 6);

        const newTeacher = new Teacher(
            id_teacher,
            nombre,
            correo,
            "teacher",
            materia,
            codigoProfesor,
            id,
            contrasena
        );

        await fetch(this.teachersEndPoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Teacher.toJSON(newTeacher)),
        });

        return newTeacher;
    }
}

















