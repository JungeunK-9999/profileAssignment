import React from 'react';
import './Profile.css';

class Profile extends React.Component {
    state = {

    }

    add = () => {
        this.setState(current => ({ count: current.count + 1 }));
    };

    render() {
        return (
            <div className="profilepafe">
                <div className="slide first">
                    <img className="profileImg" src="https://i.pinimg.com/736x/d1/ff/84/d1ff846f36c85ebeffa22d8345b6a4a1.jpg"
                    alt="profileImage" />
                    <h1 className="message">"Hello, World!"</h1>
                    <div className="hrDiv">
                        <hr></hr>
                    </div>
                    <div className="sogae">
                        <span>안녕하세요</span><br/>
                        <br/>
                        <span>대충 이 자리에 무언가의 메세지가 들어가면 좋을 거 같은데</span><br/>
                        <span>무슨 말을 써야할 지 모르겠네요.</span><br/>
                        <br/>
                        <span>이번 과제가 내용이 중요한 과제는 아닐 거라고 합리화하면서</span><br/>
                        <span>아, 근데 진짜 앞으로 무슨 말 쓰지 아 도움</span>

                    </div>
                </div>

                <div className="slide second">
                    <h2>학력</h2>
                </div>

                <div className="slide third">
                    <h2>스택</h2>
                </div>

                <div className="slide fourth">
                    <h2>아, 도움!</h2>
                </div>
            </div>


        )
    }
}

export default Profile;