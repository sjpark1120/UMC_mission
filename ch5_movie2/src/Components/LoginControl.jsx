import React from 'react'

class LoginControl extends React.Component {
	constructor(props) {
		super(props);

		this.state = { isLoggedin : false };

		this.handleLoginClick = this.handleLoginClick.bind(this);
	}

	handleLoginClick() {
		this.setState(prevState => ({
			isLoggedin : !prevState.isLoggedin
		}));
	}

	render() {
        return(
            <>
              {this.state.isLoggedin ? <span className='login_text'><button className='login_btn' onClick={this.handleLoginClick}>로그아웃</button>환영합니다!</span> : <span className='login_text'><button className='login_btn' onClick={this.handleLoginClick}>로그인</button>로그인 해주세요!</span>}
            </>
        );
	}
}

export default LoginControl