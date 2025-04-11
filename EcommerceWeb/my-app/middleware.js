export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/"], // Protect the home page (chatbot) if needed
};