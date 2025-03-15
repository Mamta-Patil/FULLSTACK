// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// let users = [];

// export async function POST(req) {
//   const { email, password, action } = await req.json();

//   if (action === "signup") {
//     const existingUser = users.find((u) => u.email === email);
//     if (existingUser) {
//       return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 });
//     }

//     const hashedPassword = bcrypt.hashSync(password, 10);
//     const newUser = { email, password: hashedPassword };
//     users.push(newUser);

//     const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
//     return new Response(JSON.stringify({ user: { email }, token }), { status: 201 });
//   }

//   if (action === "login") {
//     const user = users.find((u) => u.email === email);
//     if (!user || !bcrypt.compareSync(password, user.password)) {
//       return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 401 });
//     }

//     const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
//     return new Response(JSON.stringify({ user: { email }, token }), { status: 200 });
//   }

//   return new Response(JSON.stringify({ message: "Invalid request" }), { status: 400 });
// }
export async function POST(req) {
    try {
      const { email, password, action } = await req.json();
  
      if (!email || !password || !action) {
        return new Response(JSON.stringify({ message: "Invalid input" }), { status: 400 });
      }
  
      if (action === "signup") {
        const existingUser = users.find((u) => u.email === email);
        if (existingUser) {
          return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 });
        }
  
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = { email, password: hashedPassword };
        users.push(newUser);
  
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
  
        return new Response(JSON.stringify({ user: { email }, token }), { status: 201 });
      }
  
      if (action === "login") {
        const user = users.find((u) => u.email === email);
        if (!user || !bcrypt.compareSync(password, user.password)) {
          return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 401 });
        }
  
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
        return new Response(JSON.stringify({ user: { email }, token }), { status: 200 });
      }
  
      return new Response(JSON.stringify({ message: "Invalid request" }), { status: 400 });
    } catch (error) {
      console.error("Error in API:", error);
      return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
    }
  }
  