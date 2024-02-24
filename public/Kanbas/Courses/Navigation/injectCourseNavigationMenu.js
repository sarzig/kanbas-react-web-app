// injectCourseNavigationMenu.js

// Find the element with the id "inject-me"
const targetElementCourseNavigationMenu = document.getElementById('inject-course-nav-sidebar');

// Check if the element exists before injecting the HTML
if (targetElementCourseNavigationMenu) {
    // Wrap your HTML content in a function
    function injectCourseNavigationMenu() {
        // Extract the activeIndex from the query parameters in the URL
        const scriptSrc = document.currentScript.src;
        const url = new URL(scriptSrc);
        const activeIndex = url.searchParams.get('activeIndex') || '0';

        var html = `
        <ul class="wd-navigation">
            <li${activeIndex === 'home' ? ' class="wd-active"' : ''}><a href="/Kanbas/Courses/Home/screen.html">Home</a></li>
            <li${activeIndex === 'modules' ? ' class="wd-active"' : ''}><a href="#">Modules</a></li>
            <li${activeIndex === 'piazza' ? ' class="wd-active"' : ''}><a href="#">Piazza</a></li>
            <li${activeIndex === 'grades' ? ' class="wd-active"' : ''}><a href="/Kanbas/Courses/Grades/screen.html">Grades</a></li>
            <li${activeIndex === 'assignments' ? ' class="wd-active"' : ''}><a href="/Kanbas/Courses/Assignments/screen.html">Assignments</a></li>
            <li${activeIndex === 'quizzes' ? ' class="wd-active"' : ''}><a href="#">Quizzes</a></li>
            <li${activeIndex === 'zoom-meetings' ? ' class="wd-active"' : ''}><a href="#">Zoom Meetings</a></li>
            <li${activeIndex === 'people' ? ' class="wd-active"' : ''}><a href="#">People</a></li>
            <li${activeIndex === 'panopto-video' ? ' class="wd-active"' : ''}><a href="#">Panopto Video</a></li>
            <li${activeIndex === 'discussions' ? ' class="wd-active"' : ''}><a href="#">Discussions</a></li>
            <li${activeIndex === 'announcements' ? ' class="wd-active"' : ''}><a href="#">Announcements</a></li>
            <li${activeIndex === 'pages' ? ' class="wd-active"' : ''}><a href="#">Pages</a></li>
            <li${activeIndex === 'files' ? ' class="wd-active"' : ''}><a href="#">Files</a></li>
            <li${activeIndex === 'rubrics' ? ' class="wd-active"' : ''}><a href="#">Rubrics</a></li>
            <li${activeIndex === 'outcomes' ? ' class="wd-active"' : ''}><a href="#">Outcomes</a></li>
            <li${activeIndex === 'collaborations' ? ' class="wd-active"' : ''}><a href="#">Collaborations</a></li>
            <li${activeIndex === 'syllabus' ? ' class="wd-active"' : ''}><a href="#">Syllabus</a></li>
            <li${activeIndex === 'settings' ? ' class="wd-active"' : ''}><a href="/Kanbas/Courses/Settings/screen.html">Settings</a></li>
        </ul>`;

        // Replace the innerHTML of the target element with the new HTML content
        targetElementCourseNavigationMenu.innerHTML = html;
    }

    // Call the function to inject the fixed menu
    injectCourseNavigationMenu();

} else {
    console.error('Element with id "inject-course-nav-sidebar" not found.');
}
