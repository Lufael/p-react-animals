function App() {
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
    </div>
  );
}
export default App;
