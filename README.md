# FARM DIRECT
Our global team of five (Indonesia, Kenya, Singapore, India, United States) was united by a desire to create a meaningful impact on the world. Inspired by the pressing issue of hunger and the belief that no one should suffer from it, we explored numerous ideas, from nutrition education to the gamification of farming. We settled on supporting farmers globally, starting with Indonesia, a decision driven by the country's diverse agriculture and our connection through a team member residing there. Our goal was to make existing technologies more accessible to farmers to help them improve their practices and market reach.

## Project details
Artificial Intelligence:
- For offering fertilizer recommendation, a ML model is built of the type - LightGBM. It is used because of its faster speed and higher accuracy in multiclassification scenarios. The dataset is imported from Kaggle. The ML model provides fertilizer recommendation based on Temperature, humidity, Ntrogen(N), Potassium(K), Phosphorus(P) and the soil type. 

IoT: 
- We used a Raspberry Pi Pico W and Arduino Uno to collect data from soil humidity sensors and store them into our database. Due to time constraints, we were unable to fully implement IoT connectivity with FarmDirect. An image of our prototype can be found here inside '/hardware_prototype'. The data collected from the Arduino Uno was used to train our AI. Moving forward, we aim to fully develop a hardware prototype along with the web app to further show the full capabilities of our idea.

Blockchain:
- While we planned to incorporate blockchain into the projet, we were unable to integrate blockchain code into the project due to technical difficulties on our end. Only user interface of the blockchain storing information can be seen.  If given more time, we will work on further integrating blockchain into our solution.

SEO Optimization:
- We are using react-helmet model to make an improvement to the SEO Optimzation. 
- We submit our demo project to google search console for indexing so that user can find our web application on Google.

Business:
- We considered the business model and logic of our idea from the entrepreneurial perspective of a start-up instead of a standard business. We have aim to leverage on the opportunies that a start-up would have in Indonesia.

UI/UX
- The user interface is not polished completely, and the flow in terms of pages is a little flawed. If given more time, we aim to improve more on the UI/UX portion of our web application. 

## Installation

1. Clone this repository:

```bash
git clone https://github.com/aldoprogrammer/farm-direct
cd farm-direct
```

2. Install dependencies:

```bash
npm install
```

## Usage

### Running the Web App

To run the web app locally, use the following command:

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`.

## Demo

You can view a demo of this project deployed on ([Demo Farm Direct](https://farm-direct.onrender.com/))

## Plugins

Currently, two official Vite plugins are available for React:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.
