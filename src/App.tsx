import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Insights from "./pages/Insights";
import Skills from "./pages/Skills";
import Planning from "./pages/Planning";
import Layout from "./components/Layout";
import "./styles/App.css";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/quiz"
          element={
            <Layout>
              <Quiz />
            </Layout>
          }
        />
        <Route
          path="/results"
          element={
            <Layout>
              <Results />
            </Layout>
          }
        />
        <Route
          path="/insights"
          element={
            <Layout>
              <Insights />
            </Layout>
          }
        />
        <Route
          path="/skills"
          element={
            <Layout>
              <Skills />
            </Layout>
          }
        />
        <Route
          path="/planning"
          element={
            <Layout>
              <Planning />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
