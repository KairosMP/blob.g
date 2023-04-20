import { Center, VStack } from "@chakra-ui/react"
import { Header } from "./components/commons/Header"
import { HorizontsCard } from "./components/card/HorizontsCard"

import { horizonts_cards, cards } from "./components-mock.json"
import { Card } from "./components/card/Card"

function App() {
  return (
    <div>
      <Header />
      <Center>
        <VStack spacing={"64px"} marginY={"64px"}>
          {horizonts_cards.map((horizonts_card) => (
            <HorizontsCard key={horizonts_card.title} card={horizonts_card}
            />
          ))}
          {cards.map((card) => (
            <Card key={card.title} card={card}/>
          ))}
        </VStack>
      </Center>
    </div>
  )
}

export default App
