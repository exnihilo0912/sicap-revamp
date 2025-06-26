import type { Route } from "./+types/sign-in";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Sign In" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function SignIn() {
  return <h1>Sign In</h1>;
}