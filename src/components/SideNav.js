import React from 'react';
const SideNav = () => {
    return (<div>
        <ul id="slide-out" class="sidenav">
            <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
            <li><a href="#!">Second Link</a></li>
            <li><div class="divider"></div></li>
            <li><a className="subheader" href="#!">Subheader</a></li>
            <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>
        <a href="!#" data-target="slide-out" class="sidenav-trigger">
            <i class="material-icons">
                menu
                </i>
        </a>

    </div>)
}

export default SideNav;