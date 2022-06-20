import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {useLocation, useNavigate, useParams} from "react-router-dom";


type MapStatePropsType = {
  profile: ProfileType | null
}

type MapDispatchPropsType = {
  setUserProfile: (profile: ProfileType) => void
}

type RouterType = {
  router: any
}

export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType & RouterType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    profile: state.profilePage.profile
  }
}

function withRouter(Component: any) {
  function ComponentWithRouterProp(props: any) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{location, navigate, params}}
      />
    );
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    let userId = this.props.router.params.userId
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile}/>
  }
};

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))