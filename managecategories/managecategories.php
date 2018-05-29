

    
<?php
include('configproduct.php');
												

try{
$conn = new PDO("mysql:host=$servername;dbname=$dbname","root","");
	
}
catch(Exception $e)
{
	echo 'Not connected'.$e->getMessage();
}
?>

<html>

<!-- /tables.html by , Sat, 05 Aug 2017 13:58:48 GMT -->
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="A Components Mix Bootstarp 3 Admin Dashboard Template">
<meta name="author" content="Westilian">
<title>Womenfederation Admin</title>
<link rel="stylesheet" href="css/font-awesome.css" type="text/css">
<link rel="stylesheet" href="css/bootstrap.css" type="text/css">
<link rel="stylesheet" href="css/animate.css" type="text/css">
<link rel="stylesheet" href="css/waves.css" type="text/css">
<link rel="stylesheet" href="css/layout.css" type="text/css">
<link rel="stylesheet" href="css/components.css" type="text/css">
<link rel="stylesheet" href="css/plugins.css" type="text/css">
<link rel="stylesheet" href="css/common-styles.css" type="text/css">
<link rel="stylesheet" href="css/pages.css" type="text/css">
<link rel="stylesheet" href="css/responsive.css" type="text/css">
<link rel="stylesheet" href="css/matmix-iconfont.css" type="text/css">
<script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>


    <!--Data Table-->
    <script type="text/javascript" charset="utf8" src="js/jquery.dataTables.js"></script>
    <script type="text/javascript"  src=" https://cdn.datatables.net/buttons/1.2.4/js/dataTables.buttons.min.js"></script>

    <!--Export table buttons-->
    <script type="text/javascript"  src="https://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js"></script>
    <script type="text/javascript" src="https://cdn.rawgit.com/bpampuch/pdfmake/0.1.24/build/pdfmake.min.js" ></script>
    <script type="text/javascript"  src="https://cdn.rawgit.com/bpampuch/pdfmake/0.1.24/build/vfs_fonts.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.2.4/js/buttons.html5.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/buttons/1.2.1/js/buttons.print.min.js"></script>

<!--Export table button CSS-->

<link rel="stylesheet" href="https://cdn.datatables.net/1.10.13/css/jquery.dataTables.min.css">
<link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.2.4/css/buttons.dataTables.min.css">
<script src="js/bootstrap.min.js" type="text/javascript"></script>

<link href="http://fonts.googleapis.com/css?family=Roboto:400,300,400italic,500,500italic" rel="stylesheet" type="text/css">
<link href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600" rel="stylesheet" type="text/css">
</head>
<body>

	<script>
$(document).ready(function($){

$('#anc').click(function(){
	
$('#t5').load('categorytable.php');
});
$('#anc2').click(function(){
	
$('#t5').load('scategory.php');
});
$('#anc3').click(function(){
	
$('#t5').load('childcategory.php');
});

});
	
	
	</script>

<div id="123">
          </div>
           <div class="bb-alert alert alert-success noty_animated fadeInUp">
        <span>Table Callback Demo Content</span>
    </div>
    <div class="page-container list-menu-view">
        <!--Leftbar Start Here -->
        <div class="left-aside desktop-view">
            <div class="aside-branding">
                <a href="index.html" class="iconic-logo">
                    <img src="images/logo-iconic.png" alt="Matmix Logo">
                </a>
                <a href="index.html" class="large-logo">
                    <img src="images/logo-large.png" alt="Matmix Logo">
                </a>
                <span class="aside-pin waves-effect">
                    <i class="fa fa-thumb-tack"></i>
                </span>
                <span class="aside-close waves-effect">
                    <i class="fa fa-times"></i>
                </span>
            </div>
            <div class="left-navigation">
                <ul class="list-accordion">
                    <li>
                        <a href="#" class="waves-effect">
                            <span class="nav-icon">
                                <i class="fa fa-home"></i>
                            </span>
                            <span class="nav-label">Dashboard</span>
                            <span class="label label-primary">New</span>
                        </a>

                    </li>
                    <li>
                        <a href="#" class="waves-effect">
                            <span class="nav-icon">
                                <i class="fa fa-align-justify"></i>
                            </span>
                            <span class="nav-label">User Management</span>
                        </a>
                        <ul>
                            <li>
                                <a href="manage-user.html">Manage User</a>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <span class="nav-icon">
                                <i class="fa fa-table"></i>
                            </span>
                            <span class="nav-label">Products</span>
                        </a>
                        <ul>
                            <li>
                                <a href="manageproducts.php">Manage Products</a>
                            </li>
                            <li>
                                <a href="stock.html">Stock</a>
                            </li>
                            <li>
                                <a href="vendors.php">Vendors</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">
                            <span class="nav-icon">
                                <i class="ico-hammer-wrench"></i>
                            </span>
                            <span class="nav-label">Orders</span>
                        </a>
                        <ul>
                            <li>
                                <a href="manage-order.html">Manage Order</a>
                            </li>
                            <li>
                                <a href="invoices.html">View Invoices</a>
                            </li>
                            <li>
                                <a href="track-order.html">Track Order Status</a>
                            </li>

                        </ul>
                    </li>

                    <li>
                        <a href="events.html">
                            <span class="nav-icon">
                                <i class="ico-chart"></i>
                            </span>
                            <span class="nav-label">Events</span>
                        </a>
                        <ul>
                            <li>
                                <a href="manage-events.html">Manage Events</a>
                            </li>
                            <li>
                                <a href="events-booking.html">Event Bookings</a>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <span class="nav-icon">
                                <i class="ico-lifebuoy"></i>
                            </span>
                            <span class="nav-label">Community</span>
                        </a>
                        <ul>
                            <li>
                                <a href="manage-community.html">Manage Community</a>
                            </li>
                            <li>
                                <a href="manage-community-page.html">Manage Community Page</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">
                            <span class="nav-icon">
                                <i class="fa fa-file-text-o"></i>
                            </span>
                            <span class="nav-label">Members</span>
                        </a>
                        <ul>
                            <li>
                                <a href="members.html">Manage Members</a>
                            </li>
                            <li>
                                <a href="manager-membership.html">Manager Membership</a>
                            </li>

                        </ul>
                    </li>
                </ul>
            </div>
        </div>


        <div class="page-content">
            <!--Topbar Start Here -->
            <header class="top-bar">
                <div class="container-fluid top-nav">
                    <div class="search-form search-bar">
                        <form>
                            <input name="searchbox" value="" placeholder="Search Topic..." class="search-input">
                            <input type="text" name="hh" style="visibility:hidden">
                        </form>
                        <span class="search-close waves-effect">
                            <i class="ico-cross"></i>
                        </span>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <div class="clearfix top-bar-action">
                                <span class="leftbar-action-mobile waves-effect">
                                    <i class="fa fa-bars "></i>
                                </span>
                                <span class="leftbar-action desktop waves-effect">
                                    <i class="fa fa-bars "></i>
                                </span>
                                <span class="waves-effect search-btn mobile-search-btn">
                                    <i class="fa fa-search"></i>
                                </span>
                                <span class="rightbar-action waves-effect">
                                    <i class="fa fa-bars"></i>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-4 responsive-fix top-mid">
                            <div class="notification-nav">
                                <ul class="clearfix">
                                    <li class="dropdown">
                                        <a href="#" data-toggle="dropdown" class="hide-small-device waves-effect">
                                            <i class="fa fa-envelope"></i>
                                            <span class="alert-bubble">15</span>
                                        </a>
                                        <div role="menu" class="dropdown-menu message-dropdown msg-lists fadeInUp hide-small-device">
                                            <div class="message-wrap">
                                                <h4>You have 15 new messages</h4>
                                                <ul class="clearfix">
                                                    <li class="clearfix">
                                                        <a href="#" class="message-thumb">
                                                            <img src="images/avatar/adellecharles.jpg" alt="image">
                                                        </a>
                                                        <a href="#" class="message-intro">
                                                            <span class="message-meta">Adellecharles </span>Nunc aliquam dolor...
                                                            <span class="message-time">today at 10:20 pm</span>
                                                        </a>
                                                    </li>
                                                    <li class="clearfix">
                                                        <a href="#" class="message-thumb">
                                                            <img src="images/avatar/allisongrayce.jpg" alt="image">
                                                        </a>
                                                        <a href="#" class="message-intro">
                                                            <span class="message-meta">Allisongrayce </span>In hac habitasse ...
                                                            <span class="message-time">today at 8:29 pm</span>
                                                        </a>
                                                    </li>
                                                    <li class="clearfix">
                                                        <a href="#" class="message-thumb">
                                                            <img src="images/avatar/amarkdalen.jpg" alt="image">
                                                        </a>
                                                        <a href="#" class="message-intro">
                                                            <span class="message-meta">Amarkdalen </span>Suspendisse ac mauris ...
                                                            <span class="message-time">yesterday at 12:29 pm</span>
                                                        </a>
                                                    </li>
                                                    <li class="clearfix">
                                                        <a href="#" class="message-thumb">
                                                            <img src="images/avatar/annapickard.jpg" alt="image">
                                                        </a>
                                                        <a href="#" class="message-intro">
                                                            <span class="message-meta">Annapickard </span>Vivamus lacinia facilisis...
                                                            <span class="message-time">yesterday at 11:48 pm</span>
                                                        </a>
                                                    </li>
                                                    <li class="clearfix">
                                                        <a href="#" class="message-thumb">
                                                            <img src="images/avatar/bobbyjkane.jpg" alt="image">
                                                        </a>
                                                        <a href="#" class="message-intro">
                                                            <span class="message-meta">Bobbyjkane </span>Donec vel iaculis ...
                                                            <span class="message-time">1 month ago</span>
                                                        </a>
                                                    </li>
                                                    <li class="clearfix">
                                                        <a href="#" class="message-thumb">
                                                            <img src="images/avatar/chexee.jpg" alt="image">
                                                        </a>
                                                        <a href="#" class="message-intro">
                                                            <span class="message-meta">Chexee </span> Curabitur eget blandit...
                                                            <span class="message-time">3 months ago</span>
                                                        </a>
                                                    </li>
                                                    <li class="clearfix">
                                                        <a href="#" class="message-thumb">
                                                            <img src="images/avatar/coreyweb.jpg" alt="image">
                                                        </a>
                                                        <a href="#" class="message-intro">
                                                            <span class="message-meta">Coreyweb </span>Etiam molestie nulla...
                                                            <span class="message-time">1 year ago</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <a class="btn btn-primary btn-block notification-btn clearfix waves-effect" href="#">
                                                    <span>View All</span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="dropdown">
                                        <a href="#" data-toggle="dropdown" class="hide-small-device waves-effect ">
                                            <i class="fa fa-bell"></i>
                                            <span class="alert-bubble">10</span>
                                        </a>
                                        <div role="menu" class="dropdown-menu notification-dropdown fadeInUp noty-lists hide-small-device">
                                            <div class="notification-wrap">
                                                <h4>You have 10 new notifications</h4>
                                                <ul>
                                                    <li>
                                                        <a href="#" class="clearfix">
                                                            <span class="ni w-green">
                                                                <i class="fa fa-bullhorn"></i>
                                                            </span>
                                                            <span class="notification-message">Pellentesque semper posuere.
                                                                <span class="notification-time clearfix">3 Min Ago</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="clearfix">
                                                            <span class="ni w-orange">
                                                                <i class="fa fa-life-ring"></i>
                                                            </span>
                                                            <span class="notification-message">Nulla commodo sem at purus.
                                                                <span class="notification-time clearfix">1 Hours Ago</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="clearfix">
                                                            <span class="ni w-bondi-blue">
                                                                <i class="fa fa-star-o"></i>
                                                            </span>
                                                            <span class="notification-message">Fusce condimentum turpis.
                                                                <span class="notification-time clearfix">3 Hours Ago</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="clearfix">
                                                            <span class="ni w-blue">
                                                                <i class="fa fa-trophy"></i>
                                                            </span>
                                                            <span class="notification-message">Pellentesque habitant morbi.
                                                                <span class="notification-time clearfix">Yesterday</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="clearfix">
                                                            <span class="ni w-brown">
                                                                <i class="fa fa-bolt"></i>
                                                            </span>
                                                            <span class="notification-message">Fusce bibendum lacus mauris.
                                                                <span class="notification-time clearfix">1 Month Ago</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" class="clearfix">
                                                            <span class="ni w-dark-yellow">
                                                                <i class="fa fa-bookmark-o"></i>
                                                            </span>
                                                            <span class="notification-message">Donec id mi placerat, scelerisque.
                                                                <span class="notification-time clearfix">3 Months Ago</span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <a class="btn btn-primary btn-block notification-btn clearfix waves-effect" href="#">
                                                    <span>View All</span>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="pull-left mobile-search">
                                <span class=" waves-effect search-btn">
                                    <i class="fa fa-search"></i>
                                </span>
                            </div>
                        </div>
                        <div class="col-md-6 responsive-fix">
                            <div class="top-aside-right">
                                <div class="user-nav">
                                    <ul>
                                        <li class="dropdown">
                                            <a data-toggle="dropdown" href="#" class="clearfix dropdown-toggle waves-effect waves-block waves-classic">
                                                <span class="user-info">Westilian Jaman
                                                    <cite>jaman@mymail.com</cite>
                                                </span>
                                                <span class="user-thumb">
                                                    <img src="images/avatar/jaman.jpg" alt="image">
                                                </span>
                                            </a>
                                            <ul role="menu" class="dropdown-menu fadeInUp">
                                                <li>
                                                    <a href="#">
                                                        <span class="user-nav-icon">
                                                            <i class="fa fa-briefcase"></i>
                                                        </span>
                                                        <span class="user-nav-label">My Account</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span class="user-nav-icon">
                                                            <i class="fa fa-user"></i>
                                                        </span>
                                                        <span class="user-nav-label">View Profile</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span class="user-nav-icon">
                                                            <i class="fa fa-cogs"></i>
                                                        </span>
                                                        <span class="user-nav-label">Settings</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span class="user-nav-icon">
                                                            <i class="fa fa-lock"></i>
                                                        </span>
                                                        <span class="user-nav-label">Logout</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="pull-right desktop-search">
                                    <span class="waves-effect search-btn">
                                        <i class="fa fa-search"></i>
                                    </span>
                                </div>
                                <span class="rightbar-action waves-effect">
                                    <i class="fa fa-bars"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div class="main-container">
                <div class="container-fluid">
                    <div class="page-breadcrumb">
                        <div class="row">
                            <div class="col-md-7">
                                <div class="page-breadcrumb-wrap">

                                </div>
                            </div>
                            <div class="col-md-5">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box-widget widget-module">
                                <div class="widget-head clearfix">
                                    <span class="h-icon">
                                        <i class="fa fa-table"></i>
                                    </span>
                                    <h4>Manage Categories</h4>
                                </div>
                                <div class="widget-container">
                                    <div class="widget-block">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <!-- Trigger the modal with a button -->
                                                <table><tr><td><button type="button" class="btn btn-default" id="anc">
                                                   
                                                    <i class="ico-plus"></i> Add New Category</button></td>
                                                <td><button type="button" class="btn btn-default" id="anc2">
                                                    <i class="ico-plus"></i> Add Sub Category</button></td>
                                                <td><button type="button" class="btn btn-default" id="anc3">
                                                    <i class="ico-plus"></i> Add Child Category</button></td></tr></table>
                                                
                                                <!-- Modal -->
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <form method="post">
                                <div  id="t5">
                               <?php
                               if(isset($_POST['su']))
{ 
$cat=@$_POST['cat'];
	$qwe="INSERT INTO `categorymap`(`category`) VALUES ('$cat')";
	$conn->exec($qwe);
}
									elseif(isset($_POST['subm']))
{ 
$cat=@$_POST['cat'];
$cat2=@$_POST['pcat'];
	$qwe="UPDATE `categorymap` SET `subcategory`='$cat' WHERE `category` = '$cat2'";

	$conn->exec($qwe);
}
									elseif(isset($_POST['sub']))
{ 
$cat12=@$_POST['cat23'];
$cat23=@$_POST['pcat12'];

	$qwe="UPDATE `categorymap` SET `childcategory`='$cat12' WHERE `subcategory` = '$cat23'";
	$conn->exec($qwe);
}
									elseif(isset($_POST['er'])){
										?><script>
									window.location="categoryedit.php";
									</script>
									<?php
									}
									
                   elseif(isset($_POST['er1'])){
										?><script>
									window.location="childcategoryedit.php";
									</script>
									<?php
									}
									
                   elseif(isset($_POST['er2'])){
										?><script>
									window.location="subcategoryedit.php";
									</script>
									<?php
									}
									?>
                  
                      
                          </div>
                       </form>
    <!--Rightbar Start Here -->
    <div class="right-aside">
        <div class="aside-branding">
            <div class="aside-tab">
                <ul class="nav nav-tabs pull-left">
                    <li class="active">
                        <a href="#coversetaion" data-toggle="tab" data-tooltip="tooltip" data-placement="bottom" title="Chat" class="waves-effect">
                            <i class="fa fa-comments"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#server-stats" data-toggle="tab" data-tooltip="tooltip" data-placement="bottom" title="Stats" class="waves-effect">
                            <i class="fa fa-pie-chart"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#notifications" data-toggle="tab" data-tooltip="tooltip" data-placement="bottom" title="Notifications" class="waves-effect aside-notifications">
                            <i class="fa fa-bell"></i>
                            <span class="alert-bubble">10</span>
                        </a>
                    </li>
                </ul>
            </div>
            <span class="rightbar-action waves-effect">
                <i class="fa fa-times"></i>
            </span>
        </div>
        <div class="aside-tab-wigets">
            <div class="tab-content">
                <div class="tab-pane active" id="coversetaion">
                    <div class="chat-search-form">
                        <form>
                            <input name="searchbox" value="" placeholder="Chat With" class="chat-u-search form-control">
                        </form>
                    </div>
                    <div class="block-content chat-user-list">
                        <span class="piechart"></span>
                        <h3 class="clearfix">
                            <span class="pull-left">Friends</span>
                            <span class="pull-right online-counter">3 Online</span>
                        </h3>
                        <ul class="chat-list">
                            <li>
                                <a href="#">
                                    <span class="chat-avatar">
                                        <img src="images/avatar/adellecharles.jpg" alt="Avatar">
                                    </span>
                                    <span class="chat-u-info">Adellecharles
                                        <cite>New York</cite>
                                    </span>
                                </a>
                                <span class="chat-u-status">
                                    <i class="fa fa-circle"></i>
                                </span>
                            </li>
                            <li class="chat-u-online">
                                <a href="#">
                                    <span class="chat-avatar">
                                        <img src="images/avatar/allisongrayce.jpg" alt="Avatar">
                                    </span>
                                    <span class="chat-u-info">Allisongrayce
                                        <cite>New York</cite>
                                    </span>
                                </a>
                                <span class="chat-u-status">
                                    <i class="fa fa-circle"></i>
                                </span>
                            </li>
                            <li class="chat-u-online">
                                <a href="#">
                                    <span class="chat-avatar">
                                        <img src="images/avatar/bobbyjkane.jpg" alt="Avatar">
                                    </span>
                                    <span class="chat-u-info">Bobbyjkane
                                        <cite>New York</cite>
                                    </span>
                                </a>
                                <span class="chat-u-status">
                                    <i class="fa fa-circle"></i>
                                </span>
                            </li>
                            <li class="chat-u-online">
                                <a href="#">
                                    <span class="chat-avatar">
                                        <img src="images/avatar/littlenono.jpg" alt="Avatar">
                                    </span>
                                    <span class="chat-u-info">Littlenono
                                        <cite>New York</cite>
                                    </span>
                                </a>
                                <span class="chat-u-status">
                                    <i class="fa fa-circle"></i>
                                </span>
                            </li>
                        </ul>
                        <h3 class="clearfix">
                            <span class="pull-left">Family</span>
                            <span class="pull-right online-counter">1 Online</span>
                        </h3>
                        <ul class="chat-list">
                            <li>
                                <a href="#">
                                    <span class="chat-avatar">
                                        <img src="images/avatar/geeftvorm.jpg" alt="Avatar">
                                    </span>
                                    <span class="chat-u-info">Geeftvorm
                                        <cite>New York</cite>
                                    </span>
                                </a>
                                <span class="chat-u-status">
                                    <i class="fa fa-circle"></i>
                                </span>
                            </li>
                            <li class="chat-u-online">
                                <a href="#">
                                    <span class="chat-avatar">
                                        <img src="images/avatar/amarkdalen.jpg" alt="Avatar">
                                    </span>
                                    <span class="chat-u-info">Amarkdalen
                                        <cite>New York</cite>
                                    </span>
                                </a>
                                <span class="chat-u-status">
                                    <i class="fa fa-circle"></i>
                                </span>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="chat-avatar">
                                        <img src="images/avatar/mko.jpg" alt="Avatar">
                                    </span>
                                    <span class="chat-u-info">Mko
                                        <cite>New York</cite>
                                    </span>
                                </a>
                                <span class="chat-u-status">
                                    <i class="fa fa-circle"></i>
                                </span>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="chat-avatar">
                                        <img src="images/avatar/marktimemedia.jpg" alt="Avatar">
                                    </span>
                                    <span class="chat-u-info">Marktimemedia
                                        <cite>New York</cite>
                                    </span>
                                </a>
                                <span class="chat-u-status">
                                    <i class="fa fa-circle"></i>
                                </span>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="chat-avatar">
                                        <img src="images/avatar/oykun.jpg" alt="Avatar">
                                    </span>
                                    <span class="chat-u-info">Oykun
                                        <cite>New York</cite>
                                    </span>
                                </a>
                                <span class="chat-u-status">
                                    <i class="fa fa-circle"></i>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="tab-pane" id="server-stats">
                    <div class="block-content">
                        <div class="server-stats-content">
                            <h3>Work Progress</h3>
                            <div class="progress-wrap">
                                <div class="clearfix progress-meta">
                                    <span class="pull-left progress-label">Daily Backup</span>
                                    <span class="pull-right progress-percent label label-primary"></span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" data-progress="80">
                                    </div>
                                </div>
                            </div>
                            <div class="progress-wrap">
                                <div class="clearfix progress-meta">
                                    <span class="pull-left progress-label">My Sql Backup</span>
                                    <span class="pull-right progress-percent label label-primary"></span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" data-progress="60">
                                    </div>
                                </div>
                            </div>
                            <div class="progress-wrap">
                                <div class="clearfix progress-meta">
                                    <span class="pull-left progress-label">Vps Configure </span>
                                    <span class="pull-right progress-percent label label-primary"></span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" data-progress="90">
                                    </div>
                                </div>
                            </div>
                            <h3>Usage</h3>
                            <div class="uasge-wrap">
                                <ul>
                                    <li>
                                        <h4>Bandwidth</h4>
                                        <span class="uasge-intro">950GB of 1.95 TB Used</span>
                                    </li>
                                    <li class="usage-chart">
                                        <span class="epie-chart" data-percent="60" data-barcolor="#e64a19" data-tcolor="#e0e0e0" data-scalecolor="#e0e0e0" data-linecap="butt"
                                            data-linewidth="3" data-size="55" data-animate="2000">
                                            <span class="percent"></span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div class="uasge-wrap">
                                <ul>
                                    <li>
                                        <h4>Memory </h4>
                                        <span class="uasge-intro">3 GB of 6 GB Used</span>
                                    </li>
                                    <li class="usage-chart">
                                        <span class="epie-chart" data-percent="50" data-barcolor="#00acc1" data-tcolor="#e0e0e0" data-scalecolor="#e0e0e0" data-linecap="butt"
                                            data-linewidth="3" data-size="55" data-animate="2000">
                                            <span class="percent"></span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div class="uasge-wrap">
                                <ul>
                                    <li>
                                        <h4>HDD </h4>
                                        <span class="uasge-intro">18 GB of 30 GB Used </span>
                                    </li>
                                    <li class="usage-chart">
                                        <span class="epie-chart" data-percent="60" data-barcolor="#43a047" data-tcolor="#e0e0e0" data-scalecolor="#e0e0e0" data-linecap="butt"
                                            data-linewidth="3" data-size="55" data-animate="2000">
                                            <span class="percent"></span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <h3>Used Services</h3>
                            <div class="progress-wrap">
                                <div class="clearfix progress-meta">
                                    <span class="pull-left progress-label">Email</span>
                                    <span class="pull-right progress-percent-multiple label label-primary">90%</span>
                                </div>
                                <div class="progress multi-progress">
                                    <div class="progress-bar progress-bar-success" data-progress="40">
                                    </div>
                                    <div class="progress-bar progress-bar-warning progress-bar-striped" data-progress="30">
                                    </div>
                                    <div class="progress-bar progress-bar-danger" data-progress="20">
                                    </div>
                                </div>
                                <span class="progress-intro">27 of 30 Email Used</span>
                            </div>
                            <div class="progress-wrap">
                                <div class="clearfix progress-meta">
                                    <span class="pull-left progress-label">Credits</span>
                                    <span class="pull-right progress-percent-multiple label label-primary">70%</span>
                                </div>
                                <div class="progress multi-progress">
                                    <div class="progress-bar progress-bar-success" data-progress="40">
                                    </div>
                                    <div class="progress-bar progress-bar-warning progress-bar-striped" data-progress="20">
                                    </div>
                                    <div class="progress-bar progress-bar-danger" data-progress="10">
                                    </div>
                                </div>
                                <span class="progress-intro">700 of 1000 Credits Used</span>
                            </div>
                            <h3>Task Pending</h3>
                            <div class="progress-wrap">
                                <div class="clearfix progress-meta">
                                    <span class="pull-left progress-label">Tickets</span>
                                    <span class="pull-right progress-percent label label-primary"></span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" data-progress="60">
                                    </div>
                                </div>
                                <span class="progress-intro">60 of 100 Replied / 40 Pending</span>
                            </div>
                            <div class="progress-wrap">
                                <div class="clearfix progress-meta">
                                    <span class="pull-left progress-label">Payments</span>
                                    <span class="pull-right progress-percent label label-primary"></span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" data-progress="90">
                                    </div>
                                </div>
                                <span class="progress-intro">90 of 100 Paid / 10 Unpaid</span>
                            </div>
                            <div class="progress-wrap">
                                <div class="clearfix progress-meta">
                                    <span class="pull-left progress-label">Review</span>
                                    <span class="pull-right progress-percent label label-primary"></span>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" data-progress="50">
                                    </div>
                                </div>
                                <span class="progress-intro">5 of 10 Reviewed / 5 Pending</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane" id="notifications">
                    <div class="block-content">
                        <div class="aside-notifications-wrap">
                            <div class="message-wrap">
                                <h4>You have 15 new messages</h4>
                                <ul class="clearfix">
                                    <li class="clearfix">
                                        <a href="#" class="message-thumb">
                                            <img src="images/avatar/adellecharles.jpg" alt="image">
                                        </a>
                                        <a href="#" class="message-intro">
                                            <span class="message-meta">Adellecharles </span>Nunc aliquam dolor...
                                            <span class="message-time">today at 10:20 pm</span>
                                        </a>
                                    </li>
                                    <li class="clearfix">
                                        <a href="#" class="message-thumb">
                                            <img src="images/avatar/allisongrayce.jpg" alt="image">
                                        </a>
                                        <a href="#" class="message-intro">
                                            <span class="message-meta">Allisongrayce </span>In hac habitasse ...
                                            <span class="message-time">today at 8:29 pm</span>
                                        </a>
                                    </li>
                                    <li class="clearfix">
                                        <a href="#" class="message-thumb">
                                            <img src="images/avatar/amarkdalen.jpg" alt="image">
                                        </a>
                                        <a href="#" class="message-intro">
                                            <span class="message-meta">Amarkdalen </span>Suspendisse ac mauris ...
                                            <span class="message-time">yesterday at 12:29 pm</span>
                                        </a>
                                    </li>
                                    <li class="clearfix">
                                        <a href="#" class="message-thumb">
                                            <img src="images/avatar/annapickard.jpg" alt="image">
                                        </a>
                                        <a href="#" class="message-intro">
                                            <span class="message-meta">Annapickard </span>Vivamus lacinia facilisis...
                                            <span class="message-time">yesterday at 11:48 pm</span>
                                        </a>
                                    </li>
                                    <li class="clearfix">
                                        <a href="#" class="message-thumb">
                                            <img src="images/avatar/bobbyjkane.jpg" alt="image">
                                        </a>
                                        <a href="#" class="message-intro">
                                            <span class="message-meta">Bobbyjkane </span>Donec vel iaculis ...
                                            <span class="message-time">1 month ago</span>
                                        </a>
                                    </li>
                                    <li class="clearfix">
                                        <a href="#" class="message-thumb">
                                            <img src="images/avatar/chexee.jpg" alt="image">
                                        </a>
                                        <a href="#" class="message-intro">
                                            <span class="message-meta">Chexee </span> Curabitur eget blandit...
                                            <span class="message-time">3 months ago</span>
                                        </a>
                                    </li>
                                    <li class="clearfix">
                                        <a href="#" class="message-thumb">
                                            <img src="images/avatar/coreyweb.jpg" alt="image">
                                        </a>
                                        <a href="#" class="message-intro">
                                            <span class="message-meta">Coreyweb </span>Etiam molestie nulla...
                                            <span class="message-time">1 year ago</span>
                                        </a>
                                    </li>
                                </ul>
                                <a class="btn btn-primary btn-block notification-btn waves-effect clearfix" href="#">
                                    <span>View All</span>
                                </a>
                            </div>
                            <div class="notification-wrap">
                                <h4>You have 10 new notifications</h4>
                                <ul>
                                    <li>
                                        <a href="#" class="clearfix">
                                            <span class="ni w-green">
                                                <i class="fa fa-bullhorn"></i>
                                            </span>
                                            <span class="notification-message">Pellentesque semper posuere.
                                                <span class="notification-time clearfix">3 Min Ago</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="clearfix">
                                            <span class="ni w-orange">
                                                <i class="fa fa-life-ring"></i>
                                            </span>
                                            <span class="notification-message">Nulla commodo sem at purus.
                                                <span class="notification-time clearfix">1 Hours Ago</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="clearfix">
                                            <span class="ni w-bondi-blue">
                                                <i class="fa fa-star-o"></i>
                                            </span>
                                            <span class="notification-message">Fusce condimentum turpis.
                                                <span class="notification-time clearfix">3 Hours Ago</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="clearfix">
                                            <span class="ni w-blue">
                                                <i class="fa fa-trophy"></i>
                                            </span>
                                            <span class="notification-message">Pellentesque habitant morbi.
                                                <span class="notification-time clearfix">Yesterday</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="clearfix">
                                            <span class="ni w-brown">
                                                <i class="fa fa-bolt"></i>
                                            </span>
                                            <span class="notification-message">Fusce bibendum lacus mauris.
                                                <span class="notification-time clearfix">1 Month Ago</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="clearfix">
                                            <span class="ni w-dark-yellow">
                                                <i class="fa fa-bookmark-o"></i>
                                            </span>
                                            <span class="notification-message">Donec id mi placerat, scelerisque.
                                                <span class="notification-time clearfix">3 Months Ago</span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                                <a class="btn btn-primary btn-block notification-btn clearfix waves-effect " href="#">
                                    <span>View All</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="conv-container">
            <div class="conv-u-info chat-u-online">
                <ul>
                    <li class="chat-avatar">
                        <img src="images/avatar/adellecharles.jpg" alt="Avatar">
                    </li>
                    <li class="chat-u-info">adellecharles
                        <span>New York</span>
                    </li>
                    <li>
                        <span data-tooltip="tooltip" data-placement="bottom" title="Call" class="waves-effect chat-u-call">
                            <i class="fa fa-phone"></i>
                        </span>
                    </li>
                    <li>
                        <span data-tooltip="tooltip" data-placement="bottom" title="Exit" class="waves-effect chat-close">
                            <i class="fa fa-angle-right"></i>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="converstaion-list">
                <div class="conversation-back">
                    <div class="conv-thumb">
                        <img src="images/avatar/uxceo.jpg" alt="user">
                    </div>
                    <div class="conv-text">
                        Hello John, thank you for calling Provide Support. How may I help you?
                    </div>
                </div>
                <div class="conversation-front">
                    <div class="conv-text">
                        Hello Mary. I understand the problem and will be happy to help you. Let’s see what I can do.
                    </div>
                </div>
                <div class="conversation-front">
                    <div class="conv-text">
                        Let me see if I have this correct, you want me to…” or “You would like for me to…?
                    </div>
                </div>
                <div class="conversation-back">
                    <div class="conv-thumb">
                        <img src="images/avatar/uxceo.jpg" alt="user">
                    </div>
                    <div class="conv-text">
                        I’m not sure, but let me find out for you.
                    </div>
                </div>
            </div>
            <div class="chat-input-form">
                <form>
                    <input name="chatbox" value="" class="form-control chat-input">
                </form>
            </div>
        </div>
    </div>
    <script src="js/jquery-1.11.2.min.js"></script>
    <script src="js/jquery-migrate-1.2.1.min.js"></script>
    <!--Load Mask-->
    <script src="js/jquery.loadmask.js"></script>
    <script src="js/jRespond.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/nav-accordion.js"></script>
    <script src="js/hoverintent.js"></script>
    <!--Materialize Effect-->
    <script src="js/waves.js"></script>
    <!--iCheck-->
    <script src="js/icheck.js"></script>
    <!--Select2-->
    <script src="js/select2.js"></script>
    <!--jquery.mentionsInput-->
    <script src="js/underscore.js"></script>
    <script src="js/jquery.elastic.js"></script>
    <script src="js/jquery.events.input.js"></script>
    <script src="js/jquery.mentionsInput.js"></script>
    <script src="js/bootstrap-filestyle.js"></script>
    <!--Text Editor-->
    <script src="js/summernote.min.js"></script>
    <!--CHARTS-->
    <script src="js/chart/sparkline/jquery.sparkline.js"></script>
    <script src="js/chart/easypie/jquery.easypiechart.min.js"></script>
    <!--Smart Resize-->
    <script src="js/smart-resize.js"></script>
    <!--Data Tables-->
    <script src="js/jquery.dataTables.js"></script>
    <script src="js/dataTables.responsive.js"></script>
    <script src="js/dataTables.tableTools.js"></script>
    <script src="js/dataTables.bootstrap.js"></script>
    <script src="js/stacktable.js"></script>
    <script src="js/bootbox.js"></script>
    <script src="js/sweetalert.js"></script>
    <!--Layout Initialize-->
    <script src="js/layout.init.js"></script>
    <!--Template Plugins Initialize-->
    <script src="js/matmix.init.js"></script>
    <!--High Resolution Ready-->
    <script src="js/retina.min.js"></script>
    <!-- Product-dropdown -->
    <script src="js/custom.js"></script>

</body>
<!-- /tables.html by , Sat, 05 Aug 2017 13:59:25 GMT -->

</html>