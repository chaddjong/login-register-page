import { Component } from "react";
// import LoginButton from "./LoginButton";

class HeaderPage extends Component {
    render() {
        return (
            <div>
                {/* <div id="like_button_container">
		            <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
		            <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
		            <script src="like_button.js"></script>
	            </div> */}
                <div class="Container">
		            <div class="font">
			            <h1>Hello!</h1>
			            <h3>Create your username</h3>
		            </div>
		            <div class="input">
			            <form>
				            <label><input type="input" name="Input" id="input" placeholder="Registration Number"></input></label>
			            </form>
			            <form>
				            <label><input type="password" name="Password" id="password" placeholder="Password"></input></label>
			            </form>
			            <form>
				            <label><input type="checkbox" name="check" id="check"></input></label>
			            </form>
			            <p id="go">Remember Me</p>
                        <button class="login" type="submit"><img src="./components/img/right-arrows.png" alt="login"></img></button>
			            <p id="jo">2022 U-DINE from Scientia Elit</p>
		            </div>
	            </div>
            </div>
        );
    }
}

export default HeaderPage;