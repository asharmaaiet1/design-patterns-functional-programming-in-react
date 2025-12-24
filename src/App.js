import { GreenSmallButton, RedButton } from "./components/composition";
import { NewRedButton, SmallRedButton } from "./components/partial";
import { RecursiveComponent } from "./components/recursive";

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};

function App() {
  return (
    <>
      <h1>Recursive Component</h1>
      <RecursiveComponent data={myNestedObject} />
      <h1>Composition</h1>
      <RedButton text="Red Button" />
      <GreenSmallButton text="Green Small Button" />
      <h1>Partial Component</h1>
      <NewRedButton text="New Red Button" />
      <SmallRedButton text="Small Red Button" />
    </>
  );
}

export default App;
