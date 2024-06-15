import { App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';

function App() {
  return (
 
    <div style={{ width:'100vw', height:'100vh' }}>
      <SendbirdApp
       
        appId={process.env.APP_ID}
      
        userId={"121212"}
        nickname={"Raks"}
      />
    </div>
  )
}

export default App;
