async function fetchApi() {
  let result = await fetch(
    "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=pk&max=9&apikey=a817dcbe66606b5895dd64310ccb4f70"
  );
  let finalData = await result.json();
  console.log(finalData);
  let data = "";
  finalData.articles.forEach((values) => {
    data += `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
          <img src=${values.image} alt="" />
          <span class="titleheading">${values.title}</span>
          <div class="">
          <p><a href=${values.url} target=_blank>See full details</a></p>
            
          
          </div>
          <div class="desc">
            ${values.description}
          </div>
        </div>
      </div>
    `;
  });
  document.getElementById("outermain").innerHTML = data;
}

fetchApi();

// for sports
async function sportsapi(){
  let result = await fetch(
    "https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=pk&max=9&apikey=a817dcbe66606b5895dd64310ccb4f70"
  );
  let finalData = await result.json();
  console.log(finalData);
  let data = "";
  finalData.articles.forEach((values) => {
    data += `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
          <img src=${values.image} alt="" />
          <span class="titleheading">${values.title}</span>
          <div class="">
          <p><a href=${values.url} target=_blank>See full details</a></p>
            
          
          </div>
          <div class="desc">
            ${values.description}
          </div>
        </div>
      </div>
    `;
  });
  document.getElementById("outermain").innerHTML = data;
}

// for technology

async function technologyapi(){
  let result = await fetch(
    "https://gnews.io/api/v4/top-headlines?category=technology&lang=en&country=pk&max=9&apikey=a817dcbe66606b5895dd64310ccb4f70"
  );
  let finalData = await result.json();
  console.log(finalData);
  let data = "";
  finalData.articles.forEach((values) => {
    data += `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
          <img src=${values.image} alt="" />
          <span class="titleheading">${values.title}</span>
          <div class="">
          <p><a href=${values.url} target=_blank>See full details</a></p>
            
          
          </div>
          <div class="desc">
            ${values.description}
          </div>
        </div>
      </div>
    `;
  });
  document.getElementById("outermain").innerHTML = data;
}

// for entertainment

async function entertainmentapi(){
  let result = await fetch(
    "https://gnews.io/api/v4/top-headlines?category=entertainment&lang=en&country=pk&max=9&apikey=a817dcbe66606b5895dd64310ccb4f70"
  );
  let finalData = await result.json();
  console.log(finalData);
  let data = "";
  finalData.articles.forEach((values) => {
    data += `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
          <img src=${values.image} alt="" />
          <span class="titleheading">${values.title}</span>
          <div class="">
          <p><a href=${values.url} target=_blank>See full details</a></p>
            
          
          </div>
          <div class="desc">
            ${values.description}
          </div>
        </div>
      </div>
    `;
  });
  document.getElementById("outermain").innerHTML = data;
}

// for general
async function generalapi(){
  let result = await fetch(
    "https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=pk&max=9&apikey=a817dcbe66606b5895dd64310ccb4f70"
  );
  let finalData = await result.json();
  console.log(finalData);
  let data = "";
  finalData.articles.forEach((values) => {
    data += `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
          <img src=${values.image} alt="" />
          <span class="titleheading">${values.title}</span>
          <div class="">
          <p><a href=${values.url} target=_blank>See full details</a></p>
            
          
          </div>
          <div class="desc">
            ${values.description}
          </div>
        </div>
      </div>
    `;
  });
  document.getElementById("outermain").innerHTML = data;
}
