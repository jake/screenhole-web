import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Media from "react-media";

import PrivateRoute from "./utils/PrivateRoute"; // require auth
import PublicRoute from "./utils/PublicRoute"; // require NO auth

import Chat from "./views/Chat/Chat";
import GrabStream from "./views/GrabStream/GrabStream";
import GrabSingle from "./views/GrabSingle/GrabSingle";
import UserStream from "./views/UserStream/UserStream";
import NotFound from "./views/NotFound/NotFound";
import Login from "./views/Login/Login";
import Logout from "./views/Login/Logout";
import Register from "./views/Register/Register";
import Settings from "./views/Settings/Settings";
import Activity from "./views/Activity/Activity";

import Invite from "./views/Invite/Invite";
import Wtf from "./views/Static/Wtf";
import Eula from "./views/Static/Eula";
import Privacy from "./views/Static/Privacy";
import Apps from "./views/Static/Apps";
import Code from "./views/Static/Code";
import UserList from "./views/UserList/UserList";

import NewHole from "./views/Multihole/NewHole";
import Rules from "./views/Multihole/Rules";
import Invites from "./views/Multihole/Invites";
import Join from "./views/Multihole/Join";

// App Specific pages
import AppUpload from "./views/AppSpecific/Upload";

// Remember that route order matters for proper matching!

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={GrabStream} />
        <Route exact path="/wtf" component={Wtf} />
        <Route exact path="/eula" component={Eula} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/apps" component={Apps} />
        <Route exact path="/code" component={Code} />

        <Route exact path="/login" component={Login} />
        <PublicRoute exact path="/register" component={Register} />
        <PublicRoute exact path="/register/:code" component={Register} />

        <PrivateRoute exact path="/peeps" component={UserList} />
        <PrivateRoute exact path="/invite" component={Invite} />
        <PrivateRoute exact path="/logout" component={Logout} />
        <PrivateRoute exact path="/settings" component={Settings} />
        <PrivateRoute exact path="/sup" component={Activity} />

        {/* Multihole */}
        <PrivateRoute exact path="/cgi-bin/hole/new" component={NewHole} />
        <PrivateRoute exact path="/cgi-bin/hole/rules" component={Rules} />
        <PrivateRoute exact path="/cgi-bin/hole/invites" component={Invites} />
        <PrivateRoute exact path="/cgi-bin/hole/redeem" component={Join} />

        {/* App Specific */}
        <Route exact path="/cgi-bin/app/upload/:token" component={AppUpload} />

        <Route exact path="/:username" component={UserStream} />
        <Route exact path="/:username/~:id" component={GrabSingle} />

        {/* Special mobile routes to work with MobileNav */}
        <Route exact path="/cgi-bin/mobile/feed" component={GrabStream} />
        <Media query="(min-width: 820px)">
          {matches =>
            matches ? (
              <Route
                // Load the {GrabStream} when window matches desktop
                exact
                path="/cgi-bin/mobile/chat"
                component={GrabStream}
              />
            ) : (
              <Route
                // Load just the {Chat} when window matches mobile
                exact
                path="/cgi-bin/mobile/chat"
                component={Chat}
              />
            )
          }
        </Media>

        {/*
          This won’t work with the current implementation.
          /:username and {UserStream} is taking over priority.

          Either change the routes to /grab/:id and /user/:username
          or redirect to {NotFound} if no user is found in {UserStream}
        */}
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default Routes;
