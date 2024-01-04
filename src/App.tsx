import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import routes from "~react-pages";

function App() {
  return (
    <Theme
      accentColor="mint"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="full"
    >
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
    </Theme>
  );
}

export default App;
