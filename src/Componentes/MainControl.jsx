import Balance from "./Balance"

const MainControl = ({ count }) => {
  return (
    <div className="main-control">
      <Balance count={count} />
    </div>
  );
}

export default MainControl;