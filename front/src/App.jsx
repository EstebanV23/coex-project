import { useState } from "react";
import {
  NavLink,
  Route,
  Routes,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
function Home() {
  return (
    <h1 className="font-work text-2xl font-bold text-center">Here is home</h1>
  );
}

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const sendForm = (event, email) => {
    console.log("Entro");
    event.preventDefault();
    console.log(email);
    fetch("http://localhost:5000/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.error ? alert("Error") : navigate("/");
      });
  };
  console.log({ email });
  return (
    <form
      className="flex flex-col border-2 w-1/3 m-auto justify-center gap-3 items-center p-10"
      onSubmit={(e) => sendForm(e, email)}
    >
      <label htmlFor="email">Email</label>
      <input
        type="email"
        className="border-2 border-gray-500 rounded"
        required
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="px-12 py-6 rounded-md bg-amber-300">
        Send
      </button>
    </form>
  );
}

function RestartPassword() {
  const [password, setPassword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const key = searchParams.get("key");
  const navigate = useNavigate();
  function resetPassword(event, password) {
    event.preventDefault();
    fetch(`http://localhost:5000/auth/forgot-password/${key}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      });
  }
  return (
    <form
      className="flex flex-col border-2 w-1/3 m-auto justify-center gap-3 items-center p-10"
      onSubmit={(e) => resetPassword(e, password)}
    >
      <label htmlFor="email">Nueva contraseña</label>
      <input
        type="text"
        autoComplete="off"
        className="border-2 border-gray-500 rounded"
        required
        id="email"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="px-12 py-6 rounded-md bg-amber-300">
        Send
      </button>
    </form>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <h1 className="font-work text-2xl font-bold text-center">Project</h1>
      <div className="flex gap-4 p-6 justify-center text-cyan-500">
        <NavLink to="/forgot-password">Olvidó su contraseña?</NavLink>
        <NavLink to="/">Incio</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/new-password/" element={<RestartPassword />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
