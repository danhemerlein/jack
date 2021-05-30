import * as contentful from 'contentful'
import ContainerBase from '../lib/ContainerBase'

class MainContainer extends ContainerBase {
  view = import('../views/MainView')

  client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  })

  model = () => {
    return this.client.getEntries().then((response) => response.items)
  }
}

export default MainContainer
