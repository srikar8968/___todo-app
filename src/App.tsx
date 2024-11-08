import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import DashboardLayout from "./app/layouts/DashboardLayout";
import MyDay from "./app/pages/task/MyDay";
import TaskDetail from "./components/task/TaskDetail";

function App() {
    return (
        <>
            <Router>
                <DashboardLayout>
                    <Routes>
                        <Route path="/" element={<MyDay />}>
                            <Route path="t/:id" element={<TaskDetail />} />
                        </Route>
                    </Routes>
                </DashboardLayout>
            </Router>
        </>
    );
}

export default App;
