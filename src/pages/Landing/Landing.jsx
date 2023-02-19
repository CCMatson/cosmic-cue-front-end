const Landing = ({ user }) => {
  return (
    <main>
      <div className="landing">
        <img src="/Logo.png" alt="" />
        <img src="https://i.imgur.com/k4iOvKo.png" alt="logo" />
        <h1>Welcome to Cosmic Cue, {user ? user.name : 'friend'}</h1>
        <h1>Click the Fortune link above to get your "cosmic cue" or sign in to create, edit, and delete new messages</h1>
      </div>
    </main>
  )
}

export default Landing
