import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    // A quick note - setIsEditing(!isEditing) vs setIsEditing((prevIsEditing) => !prevIsEditing);
    // Notice that setIsEditing is asynchronous, so in both forms, the state will be updated later.
    // In the first form, !isEditing is immediately resolved, and the asynchronous function is called
    // with a value that is already determined, regardless of what happens next.
    // In the latter form, the function is passed, but it does not immediately resolve isEditing.
    // The function is scheduled to run later, after the current code finishes execution,
    // allowing it to base the state update on the latest and most accurate value of isEditing.
    // try writing the following code and see what happens:
    //  setIsEditing(!isEditing) - will get setIsEditing(val)
    //  setIsEditing(!isEditing) - will get setIsEditing(val) (same val as the above line)
    // Notice that onChangeName will happen BEFORE setIsEditing.
    setIsEditing((prevIsEditing) => !prevIsEditing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  // The event object provides information about the input change.
  // event.target refers to the input element, and event.target.value
  // contains the new value of the input.
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
