import { Post } from "./post"
import "./global.css"
import { Header } from "./components/Header" 

export const App = () => {
  return (
    <div>
      <Header/>
      <Post 
        author="Welder"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa ea asperiores tempore ullam rem vero omnis totam sequi placeat quas tenetur nihil a non voluptatum similique ab, magnam itaque officia numquam at. Sit, tempora ullam est nemo distinctio pariatur doloremque expedita, eos inventore quibusdam velit, minus nihil. Dolore, voluptates!"
      />
      <Post 
        author="Diego"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa ea asperiores tempore ullam rem vero omnis totam sequi placeat quas tenetur nihil a non"
      />
    </div>
  )}
