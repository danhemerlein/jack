import ContainerBase from "../lib/ContainerBase";
import * as contentful from "contentful";
import keys from "../config";

class MainContainer extends ContainerBase {
  view = import("../views/MainView");

  client = contentful.createClient({
    space: keys.spaceId,
    accessToken: keys.accessToken
  });

  model = () => {
    return this.client.getEntries().then(response => response.items[0]);
  };
}

export default MainContainer;
