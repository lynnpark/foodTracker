import {Component} from '@angular/core';

@Component({
    selector: 'header',
    template: `
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header" align="center">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                    </button>
                    <a class="navbar-brand center-block" href="#"><img src="./app/assets/images/phood-logo-blue.png" align="middle" border="0" height="100%" /></a>
                </div>
            <div class="collapse navbar-collapse" id="myNavbar">
             
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Logout</a></li>
                </ul>
            </div>
            </div>
        </nav>
    `,
    styleUrls: ['./app/assets/css/styles.css']
})

export class Header { }