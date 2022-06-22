import React, { useState } from "react";
import Button from '@mui/material/Button';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {storage,db} from "./firebase";
function ImageUpload({username}) {
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState('');
    const db = firebase.firestore();
    const storage = firebase.storage();
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }
    const handleUpload = () => {
        const uploadTask = storage.ref(`image/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
                alert(error.message);

            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        db.collection("post").add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imageUrl: url,
                            username: username
                        });
                        setProgress(0);
                        setCaption("");
                        setImage(null);
                    });
            }

        )
    }


    return (
        <div>
            <progress value={progress} max= "100"/>
            <input type="text" placeholder="Enter a caption..." onChange={event => setCaption(event)} value={caption} />
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}
export default ImageUpload