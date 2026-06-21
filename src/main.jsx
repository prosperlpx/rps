import { createRoot } from "react-dom/client";

// all imports goes here
import App from './App'
import './index.css'

const root = createRoot(
    document.getElementById('root')
)

root.render(
    <App />
)