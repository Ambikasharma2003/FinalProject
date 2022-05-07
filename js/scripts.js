/*!
* Start Bootstrap - Small Business v5.0.5 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Slider Javascript
/*
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
*/



function getJobs(event) {
  
  //Check if job container has children; if yes, exit function and prevent another API call
  const jobContainer = document.querySelector("#jobContainer").childElementCount;
  if(jobContainer !== 0){
    return
  }

  //the data attribute contains the job that will be passed to the API endpoint.
  //this was done in order to repurpose the use of this function.
  const JOB_TITLE = event.currentTarget.getAttribute('data-job');

  //api specific information and URL
  const APP_ID = 'cb59b3b6';
  const APP_KEY = '79002bfcd2fd2eac9b1f96b7a02e596c';
  
  //a template string is used to dynamically generate the URL
  //only 10 jobs are shown
  const URL = `http://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${APP_ID}&app_key=${APP_KEY}&results_per_page=5&what=${JOB_TITLE}&content-type=application/json`;
  
  //an HTTP object is created
  let xmlhttp = new XMLHttpRequest();

  //the call method is set to GET and the URL is passed
  xmlhttp.open("GET", URL);
  //the connection is set
  xmlhttp.send();

  //once the response is ready, the JSON will be parsed. However, it is
  //not ready, an error message will be displayed for the user
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //the this.responseText contains the JSON which is converted to an object and assigned to jobData
      let jobData = JSON.parse(this.responseText);
      
      // the showJobs method is called, and the jobs data is passed
      //the function is used to generate HTML for each job posting
      showJobs(jobData);
    }else{
      console.log('try again later');
    }
  };

}

function showJobs(jobData) {
  //the parent element where the job templates will be nested is assigned to
  //the jobContainer variable
  const jobContainer = document.querySelector("#jobContainer");

  //the jobData object contains all the job postings in an array which is assigned to the
  //results property, the array is iterated to create a template with pertinent information
  //for each job
  for (let job of jobData.results) {

    //each job posting HTML is appended to the jobContainer
    jobContainer.innerHTML += `<div class="card mt-4">
                            <div class="card-body">
                              <h5 class="card-title">Company: ${job.company.display_name}</h5>
                              <p class="card-text">
                                  <span>Job Title:</span> ${job.title}<br>
                                  <span>Location:</span> ${job.location.display_name}<br>
                                  <span>Salary:</span> ${job.salary_min == undefined ? 'not available' : job.salary_min + ' - ' + job.salary_max}</p>
                              <p class="card-text">${job.description}</p>
                              <a href="${job.redirect_url}" target="_blank" class="card-link">View More</a>
                            </div>
                          </div>`;

  }
  
}

//the API call is made when the "Job Opportunities" accordian is
//clicked by the user. THis ensure if the user is not interested in seeing the job postings
//the call is not made

document.querySelector("#jobSearch")
  .addEventListener('click', getJobs);

