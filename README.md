# Digit Recognizer App

## Overview

This is a digit recognizer app that utilizes artificial neural networks (ANN) and convolutional neural networks (CNN) for recognizing hand-written digits. The app is built with Next.js for the frontend, Flask for the backend, and includes components for training and testing the models.

## Features

- Handwritten digit recognition using ANN and CNN
- User-friendly web interface built with Next.js
- Backend server powered by Flask
- Model training and testing functionality

## Technologies Used

- Next.js
- Flask
- Python
- TensorFlow (for ANN and CNN models)

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/shivam6862/Digit-Recognizer.git
   ```

2. Install dependencies:

   ```bash
   cd digit-recognizer/frontend
   npm install
   ```

   ```bash
   cd digit-recognizer/backend
   pip install -r requirements.txt
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   ```bash
   cd backend
   python main.py
   ```

   The app will be accessible at `http://localhost:3000`.

## Usage

1. Navigate to the web interface in your browser.

2. Upload the image in my app.

3. Click the "Recognize" button to see the model's prediction.

4. Explore the training section to train and test new models.

## Training Models

To train new models, follow these steps:

1. Prepare a dataset of hand-written digits.

2. Place the dataset in the `data` directory.

## Contributing

If you'd like to contribute to this project, please follow the guidelines in [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Special thanks to shivam6862 for contributing to the project.
