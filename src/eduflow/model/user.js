export class User{
    constructor(id ='', email = '', password = '',
                type = '', name = '', additionalInfo = {}) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.type = type; // teacher or student
        this.name = name;

        //Information about the teacher or student
        if(type === 'teacher'){
            this.subject = additionalInfo.subject || null;
            this.experience = additionalInfo.experience || 0;
        } else if(type === 'student'){
            this.grade = additionalInfo.grade || null;
            this.age = additionalInfo.age || null;
        }
    }
    // Method to verify if it is teacher
    isTeacher() {
        return this.type === 'teacher';
    }
    // Method to verify if it is student
    isStudent() {
        return this.type === 'student';
    }
}