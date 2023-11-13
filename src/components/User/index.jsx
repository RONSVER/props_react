import Info from "../Info";

function User({ num, str, bool, obj }) {
  return (
    <div>
      <Info num={num} str={str} bool={bool} obj={obj} />
    </div>
  );
}

export default User;
