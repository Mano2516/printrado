import Items from "./Items";
import { HomePageElements } from "../pagesContent/HomePageEle";

export default function HomePage({
  navigate,
  setNavigate,
  elements,
  setElements,
  setItemToDisplay,
  itemToDisplay,

  setPageItems,
  pageItems,
}) {
  // const [eles, setEles] = useState(HomePageElements);
  // setPageElemets(HomePageElements);
  setPageItems(HomePageElements);
  // console.log(pageItems);
  return (
    <div>
      <Items
        it={HomePageElements}
        navigate={navigate}
        setNavigate={setNavigate}
        elements={elements}
        setElements={setElements}
        setItemToDisplay={setItemToDisplay}
        itemToDisplay={itemToDisplay}
        // pageItems={pageItems}
      />
    </div>
  );
}
