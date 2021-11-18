export default function profile() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Profile</h2>
        <div>
          <label>Username:</label>
          <input></input>
        </div>
        <div>
          <label>Password:</label>
          <input type="password"></input>
        </div>
        <button type="submit">Change</button>
      </main>
    );
  }