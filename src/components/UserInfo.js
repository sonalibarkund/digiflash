import React from 'react';

class UserInfo extends React.Component {

  render() {
    if(this.props.userData !== undefined && this.props.userData !== null ){
      return (
        <div className="Ui card">
          <img src={this.props.userData.avatar_url} alt={this.props.userData.login}/>
          <p> {this.props.userData.login} </p>
        </div>
      )
    } else {
      return <div> No data to display</div>;
    }
  }
}

export default UserInfo;