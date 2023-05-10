<!DOCTYPE html>

<html>

<head>
    <title>Dashboard</title>
    <link rel="stylesheet" href="./bootstrap.css">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <div class="row">
        <div>
            <div class="row">

                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand ms-4" href="#">
                            <img class="logo" src="./images/logo2.png" alt="">
                        </a>

                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link tx_bold active" href="#">DASHBOARD</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link tx_bold" href="#">JOBS</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link tx_bold" href="#">RESUMES</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link tx_bold" href="#">COVER LETTERS
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <ul class="navbar-nav2 me-2">
                                <li class="nav-item dropdown me-3 mt-2"></li>
                                <li class="nav-item dropdown me-3 mt-2">
                                    <a class="ms-2" href="#">
                                        <img src="./images/Bell.png" alt="">
                                    </a>
                                </li>
                                <li class="nav-item dropdown mt-2">
                                    <a class="ms-2" href="#">
                                        <img src="./images/User.png" alt="">
                                    </a>
                                </li>
                                <li class="nav-item dropdown me-5">
                                    <a class="nav-link dropdown-toggle tx_bold" href="#" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        My Account

                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="dashboad2.php">
                                            <div class="row">
                                                <div class="col-4">
                                                    <img class="dropimg" src="./images/setting.png" alt="">
                                                </div>
                                                <div class="col-8">
                                                    <h5 class="texmat">Settings</h5>
                                                </div>
                                            </div>
                                        </a></li>
                                        <li><a class="dropdown-item" href="dashboad3.php">
                                            <div class="row">
                                                <div class="col-4">
                                                    <img class="dropimg" src="./images/study.png" alt="">
                                                </div>
                                                <div class="col-8">
                                                    <h5 class="texmat">Support</h5>
                                                </div>
                                            </div>
                                        </a></li>
                                        <li><a class="dropdown-item" href="dashboad3.php">
                                            <div class="row">
                                                <div class="col-4">
                                                    <img class="dropimg" src="./images/contac.png" alt="">
                                                </div>
                                                <div class="col-8">
                                                    <h5 class="texmat">Contact Us</h5>
                                                </div>
                                            </div>
                                        </a></li>
                                        <li><a class="dropdown-item" href="#">
                                            <div class="row">
                                                <div class="col-4">
                                                    <img class="dropimg" src="./images/signout.png" alt="">
                                                </div>
                                                <div class="col-8">
                                                    <h5 class="texmat">Sign Out
                                                    </h5>
                                                </div>
                                            </div>
                                        </a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>



                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>

            </div>
        </div>
    </div>

    <div class="row box_grenn_heght d-flex align-items-end">
        <div>
            <div class="box_mg row">
                <div class="col-12 d-flex justify-content-end align-items-center">
                    <img class="close_icon" src="./images/close.webp" alt="">
                </div>
                <div class="col-12 d-flex justify-content-center align-items-center">
                    <h3 class="tex_green">Hello, User !</h3>
                </div>
            </div>
        </div>
    </div>

    <div class="row bg_centerBox">

        <div class="col-12 d-flex justify-content-center mt-5">
            <h4 class="tx_white">Welcome to your dashboard!</4>
        </div>
        <div class="col-12 d-flex justify-content-center">
            <h5 class="tx_white">From here, you can:</h5>
        </div>
        <div class="col-10 offset-1">
            <hr class="borderWhite">
        </div>
        <div class="col-12">
            <div class="row d-flex justify-content-center">
                <div class="col-6">
                    <div class="row ms-5 mt-5">
                        <div class="col-1">
                            <img src="./images/Writing.png" alt="" style="width: 100%;">
                        </div>
                        <div class="col-10">
                            <h5 class="tx_white">Fix errors on your resume</h5>
                        </div>
                    </div>
                    <div class="row ms-5 mt-5">
                        <div class="col-1">
                            <img src="./images/Puzzle.png" alt="" style="width: 100%;">
                        </div>
                        <div class="col-10">
                            <h5 class="tx_white">See recommended jobs that are the best match for you</h5>
                        </div>
                    </div>
                    <div class="row ms-5 mt-5">
                        <div class="col-1">
                            <img src="./images/Bandwidth.png" alt="" style="width: 100%;">
                        </div>
                        <div class="col-10">
                            <h5 class="tx_white">Copy
                                Apply faster and smarter on the top job boards</h5>
                        </div>
                    </div>

                </div>
                <div class="col-6">
                    <div class="row ms-5 mt-5">
                        <div class="col-1">
                            <img src="./images/Writing_1.png" alt="" style="width: 100%;">
                        </div>
                        <div class="col-10">
                            <h5 class="tx_white">Tailor your resume for any job</h5>
                        </div>
                    </div>
                    <div class="row ms-5 mt-5">
                        <div class="col-1">
                            <img src="./images/Writing_2.png" alt="" style="width: 100%;">
                        </div>
                        <div class="col-10">
                            <h5 class="tx_white">Create a custom cover letter in minutes</h5>
                        </div>
                    </div>
                    <div class="row ms-5 mt-5">
                        <div class="col-1">
                            <img src="./images/Push_notification.png" alt="" style="width: 100%;">
                        </div>
                        <div class="col-10">
                            <h5 class="tx_white">Get jobs sent right to your email</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 d-flex justify-content-center mt-5 mb-5">
            <img class="mt-5 mb-5" src="./images/arrowlR.png" alt="">
        </div>

       

    </div>
    
    <div class="row">
        <div class="col-12">
            <div class="row bg_footer">
                <div class="col-12 mt-5 color_footer mt-5">
                    <div class="row ms-2 me-2">
                        <div class="col-8">
                            <div class="row mt-3">
                                <div class="col-12 col-md-4">
                                    <h5 class="text_siz tx_white">TERMS AND CONDITIONS</h5>
                                </div>
                                <div class="col-12 col-md-3">
                                    <h5 class="text_siz tx_white mar_le">PRIVACY POLICY</h5>
                                </div>
                                <div class="col-12 col-md-2">
                                    <h5 class="text_siz tx_white mar_le2">ABOUT US</h5>
                                </div>
                                <div class="col-12 col-md-3">
                                    <h5 class="text_siz tx_white mar_le3">CONTACT US</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-4 d-flex justify-content-end">
                          
                                <h5 class="text_siz tx_white mt-3">© 2023 Works Limited. All Rights Reserved.</h5>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="./bootstrap.bundle.min.js"></script>
</body>

</html>