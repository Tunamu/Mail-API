import "./MainPage.css";

function MainPage() {

    return (
    <div className="MainPage">
        Hello
        <button onClick={localStorage.setItem("email","")}>Press to reload</button>    
    </div>
    );
}

export default MainPage;
