import "./MainPage.css";

function MainPage( { setEmail ,userName} ) {

    function handleLogout() {
      localStorage.removeItem("email"); // localStorage'dan email'i sil
      setEmail(""); // App.js içindeki state'i temizle
    }

    return (
        <div>
            <h2>Welcome {userName}!</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default MainPage;
