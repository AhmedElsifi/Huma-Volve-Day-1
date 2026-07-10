const http = require("http");

let students = [
  {
    id: 1,
    name: "Ahmed Ali",
    age: 20,
    grade: "A",
  },
  {
    id: 2,
    name: "Sara Mohamed",
    age: 19,
    grade: "B+",
  },
  {
    id: 3,
    name: "Omar Hassan",
    age: 21,
    grade: "A-",
  },
  {
    id: 4,
    name: "Mariam Adel",
    age: 20,
    grade: "B",
  },
  {
    id: 5,
    name: "Youssef Khaled",
    age: 22,
    grade: "A",
  },
  {
    id: 6,
    name: "Nour Tarek",
    age: 19,
    grade: "A+",
  },
  {
    id: 7,
    name: "Mahmoud Samir",
    age: 21,
    grade: "C+",
  },
  {
    id: 8,
    name: "Salma Mostafa",
    age: 20,
    grade: "B-",
  },
  {
    id: 9,
    name: "Karim Emad",
    age: 22,
    grade: "A-",
  },
  {
    id: 10,
    name: "Hana Ashraf",
    age: 19,
    grade: "B+",
  },
];

const server = http.createServer((request, result) => {
  result.setHeader("Content-Type", "application/json");
  // GET /students
  if (request.url === "/students" && request.method === "GET") {
    return result.end(JSON.stringify(students));
  }
  // POST /students
  if (request.url === "/students" && request.method === "POST") {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => {
      const newStudent = JSON.parse(body);

      students.push(newStudent);

      result.end(
        JSON.stringify({
          message: "Student added",
          students,
        }),
      );
    });

    return;
  }

  // PUT /students
  if (request.url === "/students" && request.method === "PUT") {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => {
      const updatedStudent = JSON.parse(body);

      const student = students.find((s) => s.id === updatedStudent.id);

      if (!student) {
        result.statusCode = 404;
        return result.end(JSON.stringify({ message: "Student not found" }));
      }

      student.name = updatedStudent.name;
      student.age = updatedStudent.age;
      student.grade = updatedStudent.grade;

      result.end(
        JSON.stringify({
          message: "Student updated",
          students,
        }),
      );
    });

    return;
  }

  // DELETE /students
  if (request.url === "/students" && request.method === "DELETE") {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => {
      const data = JSON.parse(body);

      students = students.filter((student) => student.id !== data.id);

      result.end(
        JSON.stringify({
          message: "Student deleted",
          students,
        }),
      );
    });

    return;
  }

  // GET Student By ID
  if (request.url.startsWith("/student") && request.method === "GET") {
    const url = new URL(request.url, "http://localhost:3000");

    const id = Number(url.searchParams.get("id"));

    const student = students.find((s) => s.id === id);

    if (!student) {
      result.statusCode = 404;
      return result.end(
        JSON.stringify({
          message: "Student not found",
        }),
      );
    }

    return result.end(JSON.stringify(student));
  }

  result.statusCode = 404;
  result.end(
    JSON.stringify({
      message: "Route not found",
    }),
  );
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
