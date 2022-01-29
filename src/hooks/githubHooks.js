// Criada a pasta "hooks" porque poderíamos ter outros hooks dentro da app

import { useContext } from "react";
import { GithubContext } from "../providers/githubProvider"; // Importando o contexto criado

const useGithub = () => {
    const {githubState, getUser, getUserRepos, getUserStarred, getUserFollowers, getUserFollowing} = useContext( GithubContext );
    return { githubState, getUser, getUserRepos, getUserStarred, getUserFollowers, getUserFollowing };
};

export default useGithub;