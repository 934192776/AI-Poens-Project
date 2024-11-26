function displayPoem(response) {

  console.log("poem generatated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay:1,
    cursor:"",
  });
}

function generatePoem(event) {
    event.preventDefault();
    
    let instructionsInput = document.querySelector("#user-instructions")
    let apiKey = "42a0cfddect68b2caab3ec7123od7204";
    let context = 
    "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and seperate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'AI' inside a <strong> element at the end of the poem and NOT at the beginning";
    let prompt = `User instructions: Generate a Chinese poem about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("generating poem");
    console.log(`prompt:${prompt}`);
    console.log(`context:${context}`);

    axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit",generatePoem);
