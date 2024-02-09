// need to have logic to determine active leement! xxx to-do

// injectCourseNavigationMenu.js

// Wrap your HTML content in a function
function injectCourseNavigationMenu() {
    var html = `
    <ul class="wd-navigation">
    <li class="wd-active"><a href="/Kanbas/Courses/Home/screen.html">Home</a></li>
    <li><a href="#">Modules</a></li>
    <li><a href="#">Piazza</a></li>
    <li><a href="/Kanbas/Courses/Grades/screen.html">Grades</a></li>
    <li><a href="/Kanbas/Courses/Assignments/screen.html">Assignments</a></li>
    <li><a href="#">Quizzes</a></li>
    <li><a href="#">Zoom Meetings</a></li>
    <li><a href="#">People</a></li>
    <li><a href="#">Panopto Video</a></li>
    <li><a href="#">Discussions</a></li>
    <li><a href="#">Announcements</a></li>
    <li><a href="#">Pages</a></li>
    <li><a href="#">Files</a></li>
    <li><a href="#">Rubrics</a></li>
    <li><a href="#">Outcomes</a></li>
    <li><a href="#">Collaborations</a></li>
    <li><a href="#">Syllabus</a></li>
    <li><a href="/Kanbas/Courses/Settings/screen.html">Settings</a></li>
</ul>`;

    // Append the HTML content directly to the body of the document
    document.body.insertAdjacentHTML('afterbegin', html);
}

// Call the function to inject the fixed menu
injectCourseNavigationMenu();
