# Import necessary libraries
import pandas as pd
import tensorflow as tf
import numpy as np
from tensorflow import keras
import matplotlib.pyplot as plt
import csv
import os
import sys
from PIL import Image

# Define the upload folder
UPLOAD_FOLDER = 'uploads'
csv_file_path = "data.csv"
# Add the current directory to the system path
sys.path.append(os.getcwd())


class Models:
    def __init__(self):
        # Initialize Linear Regression and Logistic Regression models and decision tree
        print("Initializing models...")
        self.cnn_model = keras.models.Sequential([
            keras.layers.Conv2D(filters=32, kernel_size=(3, 3),
                                activation='relu', input_shape=(28, 28, 1)),
            keras.layers.MaxPooling2D((2, 2)),
            keras.layers.Conv2D(
                filters=64, kernel_size=(3, 3), activation='relu'),
            keras.layers.MaxPooling2D((2, 2)),
            keras.layers.Flatten(),
            keras.layers.Dense(64, activation='relu'),
            keras.layers.Dense(32, activation='relu'),
            keras.layers.Dense(16, activation='relu'),
            keras.layers.Dense(10, activation='softmax')
        ])
        self.cnn_model.compile(optimizer='adam',
                               loss='sparse_categorical_crossentropy', metrics=['accuracy'])

        print("Models initialized!")

        if not os.path.exists(UPLOAD_FOLDER):
            os.makedirs(UPLOAD_FOLDER)
        print("Model created!")

        updated_data_df = pd.read_csv(csv_file_path)
        print("updated_data_df", updated_data_df.head())
        x_train = updated_data_df.iloc[:, 1:].values / 256
        y_train = updated_data_df.iloc[:, 0].values

        print("x_train", x_train)
        print("y_train", y_train)
        print("Dataframe created")
        self.cnn_model.fit(x_train.reshape(-1, 28, 28, 1), y_train, epochs=1,
                           batch_size=32, validation_split=0.2)
        print("CNN model worked successfully.")

    def model(self, dataset):
        print("dataset", dataset)

        new_dataset = []
        for image_file in dataset:
            try:
                current_directory = os.getcwd()
                image_path = os.path.join(
                    current_directory, "uploads", image_file)
                print("/uploads/image_path", image_path)

                with Image.open(image_path) as image:
                    image = image.convert('L')
                    image = image.resize((28, 28))
                    pixel_values = (np.array(image).flatten()/256).tolist()
                    new_dataset.append(pixel_values)

            except Exception as e:
                print(f"Error processing {image_file}: {e}")

        new_dataset_array = np.array(new_dataset)
        reshaped_dataset = new_dataset_array.reshape(-1, 28, 28, 1)

        y_predicted_x_test_df = self.cnn_model.predict(reshaped_dataset)

        y_classes_x_test_df = [np.argmax(i) for i in y_predicted_x_test_df]

        y_classes_x_test_df = ','.join(
            [str(elem) for elem in y_classes_x_test_df])

        print("predictions", y_classes_x_test_df)

        return y_classes_x_test_df
