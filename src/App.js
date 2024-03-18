import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import PostLists from './features/posts/PostLists'
import AddPostsForm from './features/posts/AddPostsForm'
import SinglePostPage from './features/posts/SinglePostPage'
import EditPostsForm from './features/posts/EditPostForm'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostsForm/>
                <PostLists/>
              </React.Fragment>
            )}
          />
          <Route 
          exact path="/posts/:postId"
          component={SinglePostPage}
          />
           <Route 
          exact path="/editposts/:postId"
          component={EditPostsForm}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
