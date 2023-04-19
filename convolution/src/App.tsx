import { Canvas3D } from "./components/3DExperience/Canvas3D";
import { KernelMenu } from "./components/KernelMenu";

export default function App() {
  return (
    <div id="app">
      <Canvas3D/>
      <KernelMenu/>
    </div>
  )
}