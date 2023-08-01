import UserList from "../../molecules/UserList";
import Button from "../../atoms/Buttton/button";

function Conversations() {
  return (
    <div className="convo w-full flex flex-col">
      <div className="flex justify-between items-center">
        <h3 style={{ color: "#45464E", marginRight: "20px" }}>
          Conversations with Customers
        </h3>
        <Button text="New Message" />
      </div>
      <UserList />
    </div>
  );
}

export default Conversations;
