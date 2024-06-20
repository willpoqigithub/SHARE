<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Share Boost</title>
   </head>
   <body>
      <div class="wrapper-container">
         <div class="container">
            <h1>SHARE BOOST</h1>
            <p>A user-friendly automated website that utilizes your browser's cookies to streamline the process of sharing posts on Facebook using the provided URL.</p>
            <div class="container">
         <div class="form-wrapper">
            <form onsubmit="submitForm(event)" class="form-container">
               <div class="form-item">
                  <label for="cookies">APPSTATE:</label>
                  <input type="text" id="cookies" name="cookie" placeholder="">
               </div>
               <div class="form-item">
                  <label for="urls">LINK:</label>
                  <input type="text" id="urls" name="url" placeholder="">
               </div>
               <div class="form-item">
                  <label for="amounts">LIMIT:</label>
                  <input type="text" id="amounts" name="amount" placeholder="">
               </div>
               <div class="form-item">
                  <label for="intervals">DELAY:</label>
                  <input type="text" id="intervals" name="interval" placeholder="" pattern="[0-9]*">
               </div>
               <div class="form-item">
                  <button type="submit" onclick="submitForm()" id="submit-button">Submit</button>
               </div>
               </div>
               <div class="form-item">
                  <div id="result"></div>
               </div>
            </form>
         </div>
         <div class="container" id="process-container">
            <h1>SHARE BOOST</h1>
            <h4>PROCESSING:</h4>
            <div id="processing">
            </div>
         </div>
         </div>
      </div>
      <style>
         body, html {
         margin: 0;
         }
         body {
         padding: 20px;
         font-family: 'Poppins', sans-serif;
         background-image: url("https://i.imgur.com/Yus9p8c.jpeg");
         display: flex;
         justify-content: center;
         align-items: center;
         }
         .container {
         background-color: darkslategrey;
         border: solid 1px white;
        border-radius: 10px;
         padding: 20px;
         margin: 20px auto;
         overflow: auto;
    max-width: 100%;
    max-height: 40%;
    margin-bottom: 20px;
    padding: 20px;
    margin: 20px auto;
    cursor: default;
    outline: 1px solid #fff;
    background: ;
    border-radius: 10px;
    animation: animate 1.5s linear infinite;
    border: 1px solid transparent;
    animation: neon-border 2s linear infinite alternate;
}

@keyframes neon-border {
    from {
        border-color: yellow;
        box-shadow: 0 0 10px yellow, 0 0 20px yellow, 0 0 30px yellow;
              }
    to {
        border-color: red;
        box-shadow: 0 0 20px red, 0 0 30px red, 0 0 40px red;
    }
}

         .form-item {
         padding: 8px;
         }
         h1 {
         color: whitesmoke;
         text-align: center;
         }
         h4 {
           text-align: center;
         }
         p {
           text-align: center;
           color: whitesmoke;
         }
         .form-item label {
         font-size: 13px;
         color: white;
         margin-bottom: 5px; 
         display: block; 
         }
         input, button {
         background: ghostwhite;
         color: black; 
         border: solid 1px #222;
         box-sizing: border-box;
         width: 100%;
         margin-bottom: 10px;
         padding: 10px;
         border-radius: 4px;
         font-size: 11px;
         }
         button {
         cursor: none;
         color: #0a0a0a;
         background-color: #ededed;
         }
         button:hover {
         background: #CCC;
         }
         #result {
         display: none;
         text-align: center;
         background-color: #ededed;
         border: solid 1px #222;
         padding: 10px;
         border-radius: 4px;
         color: #0a0a0a;
         }
         #process {
         }
         .current-online {
         font-size: 13px;
         background: #0a0a0a;
         padding: 10px;
         color: #898989;
         border: solid 1px #898989;
         border-radius: 4px;
         box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
         margin-bottom: 10px;
         overflow: auto;
         white-space: nowrap; 
         }
      </style>
      <script>
         async function submitForm() {
           event.preventDefault();
           const result = document.getElementById('result');
           const button = document.getElementById('submit-button');
           try {
             result.style.display = 'block';
             button.style.display = 'none';
             const response
