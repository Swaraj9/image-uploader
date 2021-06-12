import { useState } from 'react';
import './styles/App.css';
import Upload from './components/Upload';
import Uploading from './components/Uploading';
import Uploaded from './components/Uploaded';

function App() {
  const [uploadState, setUploadState] = useState('upload');
  const [uploadedImageURL, setUploadedImageURL] = useState('');
  return (
    <div className="app">
      <main className = 'appMain'>
        {uploadState === 'uploaded' ? 
          <Uploaded uploadedImageURL = {uploadedImageURL}/> :
          uploadState === 'uploading' ? 
          <Uploading/> : 
          <Upload setUploadState = {setUploadState} setUploadedImageURL = {setUploadedImageURL}/>
        }
      </main>
      <footer className = 'appFooter'>
        created by <div className = 'appFooterName'>Swaraj9</div>
      </footer>
    </div>
  );
}

export default App;
