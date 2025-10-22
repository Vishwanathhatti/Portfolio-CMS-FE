import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ClickSpark from './components/ClickSpark'
import Ribbons from './components/ui/Ribbons'

createRoot(document.getElementById('root')).render(
        <ClickSpark sparkColor='#6952E0'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}>
            <App />
        </ClickSpark>,)
