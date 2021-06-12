import '../styles/uploaded.css';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useState } from 'react';

const Uploaded = ({uploadedImageURL}) => {

    const [linkCopied, setLinkCopied] = useState(false);

    const copyLink = () => {
        navigator.clipboard.writeText(uploadedImageURL)
        .then(() => {
            setLinkCopied(true);
        })
    }

    return (
        <div className = 'uploaded'>
            <CheckCircleIcon style = {{color: '#63d10f', fontSize: '45px'}}/>
            <div className = 'uploadedTitle'>Uploaded Successfully!</div>
            <div className = 'uploadedImageContainer'>
                <img className = 'uploadedImage' src = {uploadedImageURL} alt = 'Uploaded File'/>
            </div>
            <div className = 'uploadedLinkContainer'>
                <div className = 'uploadedLink'>{uploadedImageURL}</div>
                <button className = {`${!linkCopied && 'uploadedLinkButton'} ${linkCopied && 'uploadedLinkButtonCopied'}`} onClick = {copyLink}>Copy Link</button>
            </div>
        </div>
    )
}

export default Uploaded
