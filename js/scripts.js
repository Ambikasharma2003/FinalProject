/*!
* Start Bootstrap - Small Business v5.0.5 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Slider Javascript
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




function getJobs(event) {
  
  //Check if job container has children; if yes, exit function and prevent another API call
  const jobContainer = document.querySelector("#jobContainer").childElementCount;
  if(jobContainer !== 0){
    return
  }


  const JOB_TITLE = event.currentTarget.getAttribute('data-job');
  const APP_ID = 'cb59b3b6';
  const APP_KEY = '79002bfcd2fd2eac9b1f96b7a02e596c';
  const URL = `http://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${APP_ID}&app_key=${APP_KEY}&results_per_page=5&what=${JOB_TITLE}&content-type=application/json`;
  let xmlhttp = new XMLHttpRequest();

  xmlhttp.open("GET", URL);
  xmlhttp.send();

  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let jobData = JSON.parse(this.responseText);
      showJobs(jobData);
    }
  };

}

function showJobs(jobData) {
  const jobContainer = document.querySelector("#jobContainer");

  for (let job of jobData.results) {


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

document.querySelector("#jobSearch")
  .addEventListener('click', getJobs);

