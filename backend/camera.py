import cv2
import tkinter as tk
from PIL import Image, ImageTk
from keras.preprocessing.image import img_to_array
import os
from keras.models import load_model
import numpy as np

class VideoCamera(object):
    def __init__(self, window, video_source=0):
        self.detection_model_path = 'haarcascade_files/haarcascade_frontalface_default.xml'
        self.emotion_model_path = 'models/_mini_XCEPTION.102-0.66.hdf5'
        self.face_detection = cv2.CascadeClassifier(self.detection_model_path)
        self.emotion_classifier = load_model(self.emotion_model_path, compile=False)
        self.EMOTIONS = ["angry", "disgust", "scared", "happy", "sad", "surprised", "neutral"]
        # directory to store the saved frames
        self.output_dir = '../public/images/frames'
        self.frame_face = os.path.join(self.output_dir, f'face.png')
        self.frame_probabilities = os.path.join(self.output_dir, f'probabilities.png')

        self.window = window
        self.window.title("Video Display")

        self.video_source = video_source
        self.vid = cv2.VideoCapture(self.video_source)

        self.canvas = tk.Canvas(window, width=self.vid.get(cv2.CAP_PROP_FRAME_WIDTH),
                                height=self.vid.get(cv2.CAP_PROP_FRAME_HEIGHT))
        self.canvas.pack()

        self.btn_scan = tk.Button(window, text="Scan", width=10, command=self.start)
        self.btn_save = tk.Button(window, text="Save", width=10, command=self.stop)

        self.btn_scan.pack(padx=20, pady=10, side=tk.LEFT)
        self.btn_save.pack(pady=0, side=tk.RIGHT)

        self.is_playing = True
        self.update()

    def start(self):
        if(not self.is_playing):
            self.is_playing = True
            self.update()

    def stop(self):
        # Save the face as an image file, overwriting the previous frame
        cv2.imwrite(self.frame_face, self.frameClone)
        self.is_playing = False

    def update(self):
        if self.is_playing:
            ret, frame = self.vid.read()
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            faces = self.face_detection.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30),
                                                    flags=cv2.CASCADE_SCALE_IMAGE)
            probabilities = np.zeros((250, 300, 3), dtype="uint8")
            self.frameClone = frame.copy()

            if len(faces) > 0:
                faces = sorted(faces, reverse=True,
                                key=lambda x: (x[2] - x[0]) * (x[3] - x[1]))[0]
                (fX, fY, fW, fH) = faces
                # Extract the ROI of the face from the grayscale image, resize it to a fixed 28x28 pixels, and then prepare
                # the ROI for classification via the CNN
                roi = gray[fY:fY + fH, fX:fX + fW]
                roi = cv2.resize(roi, (64, 64))
                roi = roi.astype("float") / 255.0
                roi = img_to_array(roi)
                roi = np.expand_dims(roi, axis=0)
                preds = self.emotion_classifier.predict(roi)[0]
                emotion_probability = np.max(preds)
                label = self.EMOTIONS[preds.argmax()]
               # for (i, (emotion, prob)) in enumerate(zip(self.EMOTIONS, preds)):
                #    text = "{}: {:.2f}%".format(emotion, prob * 100)
                 #   cv2.putText(self.frameClone, text, (10, (i * 35) + 23), cv2.FONT_HERSHEY_SIMPLEX, 0.45, (0, 0, 255), 2)
                cv2.putText(self.frameClone, label, (fX, fY - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.45, (0, 0, 255), 2)
                cv2.rectangle(self.frameClone, (fX, fY), (fX + fW, fY + fH), (0, 0, 255), 2)

            if ret:
                self.photo = ImageTk.PhotoImage(image=Image.fromarray(cv2.cvtColor(self.frameClone, cv2.COLOR_BGR2RGB)))
                self.canvas.create_image(0, 0, image=self.photo, anchor=tk.NW)
            self.window.after(10, self.update)  
    
    def __del__(self):
        if self.vid.isOpened():
            self.vid.release()
            cv2.destroyAllWindows()