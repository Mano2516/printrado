import { SoftwareBooks } from "../pagesContent/SoftWareBooks";
import Items from "./Items";

export default function SoftWarePage({
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
  setPageItems(SoftwareBooks);
  return (
    <div>
      <Items
        it={SoftwareBooks}
        navigate={navigate}
        setNavigate={setNavigate}
        elements={elements}
        setElements={setElements}
        setItemToDisplay={setItemToDisplay}
        itemToDisplay={itemToDisplay}
        pageItems={pageItems}
      />
    </div>
  );
}
