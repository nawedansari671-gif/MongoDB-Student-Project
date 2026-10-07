// Student MongoDB CRUD Operations

// 1. CREATE - Insert student data
db.students.insertMany([
  {
    student_id: 1,
    name: "Aarav Sharma",
    class: 10,
    section: "A",
    maths: 85,
    science: 88,
    english: 82
  },
  {
    student_id: 2,
    name: "Ananya Verma",
    class: 10,
    section: "A",
    maths: 92,
    science: 90,
    english: 89
  }
]);

// 2. READ - Display all students
db.students.find();

// 3. READ - Find a particular student
db.students.findOne({ student_id: 1 });

// 4. UPDATE - Update student's marks
db.students.updateOne(
  { student_id: 1 },
  { $set: { maths: 90 } }
);

// 5. DELETE - Delete a student
db.students.deleteOne({ student_id: 2 });
