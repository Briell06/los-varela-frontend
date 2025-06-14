import Form from "next/form";

import { PlaceholdersAndVanishInput } from "./ui/BanishInput";

const SearchInput = () => {
  return (
    <Form action="/productos">
      <PlaceholdersAndVanishInput
        placeholders={["Buscar...", "Encuentre su producto"]}
      />
    </Form>
  );
};

export default SearchInput;
