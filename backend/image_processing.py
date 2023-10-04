import cv2
import numpy as np
from tensorflow.keras.models import load_model
from keras.preprocessing.image import img_to_array

# Load Haar Cascade for face and eye detection
face_cascade = cv2.CascadeClassifier('haarcascade_files/haarcascade_frontalface_default.xml')
eye_cascade = cv2.CascadeClassifier('haarcascade_files/haarcascade_eye.xml')

# Load the emotion detection model
emotion_model = load_model('models/_mini_XCEPTION.102-0.66.hdf5')
EMOTIONS = ["angry", "disgust", "scared", "happy", "sad", "surprised", "neutral"]

def process_image(snapshot_path):
    try:
        # Load the image using OpenCV
        image = cv2.imread(snapshot_path)
        # Perform face detection
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5, minSize=(30, 30))
        # Iterate over detected faces
        for (x, y, w, h) in faces:
            cv2.rectangle(image, (x, y), (x + w, y + h), (255, 0, 0), 2)
            roi_gray = gray[y:y + h, x:x + w]
            roi_color = image[y:y + h, x:x + w]
            # Perform eye detection within each detected face region
            eyes = eye_cascade.detectMultiScale(roi_gray)
            for (ex, ey, ew, eh) in eyes:
                cv2.rectangle(roi_color, (ex, ey), (ex + ew, ey + eh), (0, 255, 0), 2)
        # Perform emotion detection
        if len(faces) > 0:
            # Sort the faces based on area in descending order
            faces = sorted(faces, reverse=True, key=lambda x: (x[2] - x[0]) * (x[3] - x[1]))[0]
            # Take the largest face
            (fX, fY, fW, fH) = faces
            # Extract the ROI of the face from the grayscale image
            roi = gray[fY:fY + fH, fX:fX + fW]
            # Resize the ROI to 64x64 pixels
            roi = cv2.resize(roi, (64, 64))
            # Normalize the ROI
            roi = roi.astype("float") / 255.0
            # Prepare the ROI for classification via the CNN
            roi = img_to_array(roi)
            roi = np.expand_dims(roi, axis=0)
            # Predict the emotion probabilities
            preds = emotion_model.predict(roi)[0]
            # Find the emotion with the highest probability
            emotion_index = np.argmax(preds)
            emotion_probability = preds[emotion_index]
            label = EMOTIONS[emotion_index]
            # Draw the emotion labels on the image
            for (i, (emotion, prob)) in enumerate(zip(EMOTIONS, preds)):
                text = "{}: {:.2f}%".format(emotion, prob * 100)
                cv2.putText(image, text, (10, (i * 35) + 23), cv2.FONT_HERSHEY_SIMPLEX, 0.45, (0, 0, 255), 2)
            # Draw the emotion label on the face region
            cv2.putText(image, label, (fX, fY - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.45, (0, 0, 255), 2)
        # Annotated image path
        annotated_snapshot_path = 'pics/annotated_snapshot.jpg'
        # Save the annotated image with detection results
        cv2.imwrite(annotated_snapshot_path, image)
        # Return annotated image path
        return annotated_snapshot_path
    except Exception as e:
        return f'Error processing image: {str(e)}', 500