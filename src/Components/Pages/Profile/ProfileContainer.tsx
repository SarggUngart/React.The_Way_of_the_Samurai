import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";


type MapStatePropsType = {
  profile: ProfileType | null
}

type MapDispatchPropsType = {
  setUserProfile: (profile: ProfileType) => void
}

export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile
  }
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile}/>
  }
};

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)