interface Student {
  name: string;
  age: number;
  grades: number[];
}

function calculateAverageGrade(student: Student): number {
  if (student.grades.length === 0) {
    return 0;
  }
  const total = student.grades.reduce((acc, grade) => acc + grade, 0);
  return total / student.grades.length;
}

