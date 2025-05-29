// src/services/courseService.js

const courses = [
    {
        id: 1,
        name: 'Matemática I',
        professor: 'Juan Pérez',
        sections: ['A', 'B']
    },
    {
        id: 2,
        name: 'Programación Web',
        professor: 'Lucía Gómez',
        sections: ['1', '2']
    }
];

export default {
    async getAll() {
        return [...courses];
    },
    async create(course) {
        const newCourse = { ...course, id: Date.now() };
        courses.push(newCourse);
        return newCourse;
    },
    async remove(id) {
        const index = courses.findIndex(c => c.id === id);
        if (index !== -1) courses.splice(index, 1);
    }
};
