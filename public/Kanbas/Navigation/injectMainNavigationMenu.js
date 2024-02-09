// injectMainNavigationMenu.js

// Wrap your HTML content in a function
function injectMainNavigationMenu() {
    var html = `
        <div class="d-none d-sm-block kanbas-nav-column">
            <ul class="wd-kanbas-navigation">
                <li><a href="http://northeastern.edu"><i class="custom-northeastern-icon"></i></a></li>
                <li><a href="/Kanbas/Account/Profile/screen.html"><i class="fa fa-smile-o"></i><br>Account</a></li>
                <li class="wd-active"><a href="/Kanbas/Dashboard/screen.html"><i class="fa fa-tachometer"></i><br>Dashboard</a></li>
                <li><a href="/Kanbas/Courses/Home/screen.html"><i class="fa fa-book"></i><br>Courses</a></li>
                <li><a href="#"><i class="fa fa-calendar"></i><br>Calendar</a></li>
                <li><a href="#"><i class="fa fa-inbox"></i><br>Inbox</a></li>
                <li><a href="#"><i class="fa fa-clock-o"></i><br>History</a></li>
                <li><a href="#"><i class="fa fa-play"></i><br>Studio</a></li>
                <li><a href="#"><i class="fa fa-calendar"></i><br>Commons</a></li>
                <li><a href="#"><i class="fa fa-question"></i><br>Help</a></li>
                <li><a href="#"><i class="fa fa-envelope"></i><br>Messages</a></li>
            </ul>
        </div>`;

    // Append the HTML content directly to the body of the document
    document.body.insertAdjacentHTML('afterbegin', html);
}

// Call the function to inject the fixed menu
injectMainNavigationMenu();
