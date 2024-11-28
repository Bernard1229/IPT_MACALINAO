 // Typing effect for welcome text
 const welcomeText = "Hi I'm Bernard B. Macalinao\nWelcome!";
 let index = 0;

 function typeWriter() {
     const element = document.getElementById('typing-text');
     if (index < welcomeText.length) {
         element.innerHTML += welcomeText.charAt(index) === '\n' ? '<br>' : welcomeText.charAt(index);
         index++;
         setTimeout(typeWriter, 100);
     }
 }

 // Scroll animation
 function handleScroll() {
     const elements = document.querySelectorAll('.fade-in');
     elements.forEach(element => {
         const rect = element.getBoundingClientRect();
         const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
         if (isVisible) {
             element.classList.add('visible');
         }
     });
 }

 // Logo bounce effect
 function bounceLogo() {
     const logo = document.querySelector('.image-container');
     logo.classList.add('bounce');
     setTimeout(() => {
         logo.classList.remove('bounce');
     }, 500);
 }

 // Achievement hover effect
 function setupAchievements() {
     const achievements = document.querySelectorAll('#achievements-list li');
     achievements.forEach(achievement => {
         achievement.addEventListener('click', function() {
             this.classList.toggle('highlight');
         });
     });
 }

 // Enhanced resume button click
 function handleResumeClick() {
     // Add bounce effect before navigation
     const button = document.querySelector('.resume-button');
     button.classList.add('bounce');
     setTimeout(() => {
         location.href = 'resume.html';
     }, 300);
 }

 // Calculate age
 function calculateAge() {
     const birthDate = new Date('2003-05-29');
     const today = new Date();
     let age = today.getFullYear() - birthDate.getFullYear();
     const monthDiff = today.getMonth() - birthDate.getMonth();
     
     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
         age--;
     }
     
     // Update age in personal info
     const personalInfo = document.getElementById('personal-info');
     personalInfo.innerHTML = personalInfo.innerHTML.replace('21 yrs Old', `${age} yrs Old`);
 }

 // Education timeline animation
 function setupEducationTimeline() {
     const timelineItems = document.querySelectorAll('#education-timeline p');
     timelineItems.forEach((item, index) => {
         item.style.opacity = '0';
         item.style.transform = 'translateX(-20px)';
         item.style.transition = 'all 0.5s ease';
         item.style.transitionDelay = `${index * 0.2}s`;
     });

     document.querySelector('details').addEventListener('toggle', function(e) {
         if (this.open) {
             timelineItems.forEach(item => {
                 item.style.opacity = '1';
                 item.style.transform = 'translateX(0)';
             });
         }
     });
 }

 // Initialize everything
 window.onload = function() {
     typeWriter();
     calculateAge();
     setupAchievements();
     setupEducationTimeline();
     handleScroll(); // Initial check for visible elements
     
     // Add scroll event listener
     window.addEventListener('scroll', handleScroll);
 };