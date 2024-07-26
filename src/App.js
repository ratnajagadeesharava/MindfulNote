import Layout from "./components/layout/Layout";
import "./styles/index.css";
import Course from "./components/courses/Course";
// import Layout from "./components/layout/Layout";
function App(){
    return (
        <div>
            <Layout >
                <Course />
            </Layout>
        </div>
    );
}

export default App;