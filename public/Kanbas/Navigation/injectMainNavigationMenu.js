// injectMainNavigationMenu.js

// Find the element with the id "inject-me"
const targetElementMainNavigationMenu = document.getElementById('inject-main-nav-sidebar');

// Check if the element exists before injecting the HTML
if (targetElementMainNavigationMenu) {
    // Wrap your HTML content in a function
    function injectMainNavigationMenu() {
        // Extract the activeIndex from the query parameters in the URL
        const scriptSrc = document.currentScript.src;
        const url = new URL(scriptSrc);
        const activeIndex = url.searchParams.get('activeIndex') || '0';

        var html = `        
            <ul class="wd-kanbas-navigation">
                <li><a href="http://northeastern.edu"><i class="custom-northeastern-icon"></i></a></li>
                <li${activeIndex === 'account' ? ' class="wd-active"' : ''}><a href="/Kanbas/Account/Profile/screen.html"><i class="fa fa-smile-o"></i><br>Account</a></li>
                <li${activeIndex === 'dashboard' ? ' class="wd-active"' : ''}><a href="/Kanbas/Dashboard/screen.html"><i class="fa fa-tachometer"></i><br>Dashboard</a></li>
                <li${activeIndex === 'courses' ? ' class="wd-active"' : ''}><a href="/Kanbas/Courses/Home/screen.html"><i class="fa fa-book"></i><br>Courses</a></li>
                <li${activeIndex === 'calendar' ? ' class="wd-active"' : ''}><a href="#"><i class="fa fa-calendar"></i><br>Calendar</a></li>
                <li${activeIndex === 'inbox' ? ' class="wd-active"' : ''}><a href="#"><i class="fa fa-inbox"></i><br>Inbox</a></li>
                <li${activeIndex === 'history' ? ' class="wd-active"' : ''}><a href="#"><i class="fa fa-clock-o"></i><br>History</a></li>
                <li${activeIndex === 'studio' ? ' class="wd-active"' : ''}><a href="#"><i class="fa fa-play"></i><br>Studio</a></li>
                <li${activeIndex === 'commons' ? ' class="wd-active"' : ''}><a href="#"><i class="fa fa-calendar"></i><br>Commons</a></li>
                <li${activeIndex === 'help' ? ' class="wd-active"' : ''}><a href="#"><i class="fa fa-question"></i><br>Help</a></li>
                <li${activeIndex === 'messages' ? ' class="wd-active"' : ''}><a href="#"><i class="fa fa-envelope"></i><br>Messages</a></li>
            </ul>`;
        // Replace the innerHTML of the target element with the new HTML content
        targetElementMainNavigationMenu.innerHTML = html;
    }

    // Call the function to inject the fixed menu
    injectMainNavigationMenu();

} else {
    console.error('Element with id "inject-main-nav-sidebar" not found.');
}
