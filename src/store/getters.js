const getters = {
  minWindowWidth: state => state.app.minWindowWidth,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  username: state => state.user.username
}

export default getters
