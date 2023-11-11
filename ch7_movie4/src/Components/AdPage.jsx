import React from 'react'
import Ad from './Ad'

class AdPage extends React.Component {
  constructor(props) {
		super(props);

		this.state = { isToggleOn : true };

		this.handleToggleClick = this.handleToggleClick.bind(this);
	}

  handleToggleClick(){
		this.setState(prevState => ({
			isToggleOn : !prevState.isToggleOn
		}));
  }

  render() {
  return (
    <>
      <Ad adflag={this.state.isToggleOn} />
      {this.state.isToggleOn ? <button onClick={this.handleToggleClick}>광고 안보기</button>: <button onClick={this.handleToggleClick}>광고 보기</button>}
    </>
  )
}}
export default AdPage