import React, { Component } from 'react';
import ShortForm from '../components/short-form/ShortForm';
import Display from '../components/display/Display';
import List from '../components/list/List';
import { getUserInfo, getUserRepos } from '../services/githubAPI';

export default class MainContainer extends Component {

    state = {
      userName: '',
      userInfo: {},
      repos: []
    }

    handleChange = ({ target }) => {
      this.setState({ userName: target.value });
    }

    handleSubmit = event => {
      event.preventDefault();

      const { userName } = this.state;
      Promise.all([
        getUserInfo(userName),
        getUserRepos(userName) 
      ])
        .then(([userInfo, repos]) => this.setState({ userInfo, repos }));
    }

    render() {
      console.log(this.state.repos);
      //   getUserInfo('Jpendy')
      //     .then(me => console.log(me));

      const { repos, userName, userInfo: { login, followers, following, html_url } } = this.state;
      return (
        <>
          <ShortForm userName={userName} onChange={this.handleChange} onSubmit={this.handleSubmit} />
          <Display name={login || ''} followerCount={followers || 0} followingCount={following || 0} githubLink={html_url || ''} />
          <List  repoList={repos} />
          <div>hello</div>
        
        </>
      );   
    }
}
