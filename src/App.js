import {signOutUser} from "./firebase";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";

function App() {
    return (
        <div className="App">
            <SignUpForm/>
            <LogInForm/>
            <button onClick={() => signOutUser()}>Sign out</button>
        </div>
    );
}

export default App;
