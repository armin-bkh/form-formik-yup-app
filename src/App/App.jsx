import NewSignupForm from "../Components/NewSignupForm/NewSignupForm";
import SignupForm from "../Components/SignupForm/SignupForm";
import "./App.scss";

const App = () => {
  return (
    <main
      className={`bg-gray-900 min-h-screen w-full flex justify-center items-center p-5`}
    >
      {/* <SignupForm /> */}
      <NewSignupForm />
    </main>
  );
};

export default App;
