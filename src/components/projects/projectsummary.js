import React from 'react'
import { Link } from 'react-router-dom';

const projectsummary = ({project, users}) => {
    var k ="/project/"+project.id;
    let author=false
    if(users) author = users.find(author => (author.id  === project.AuthorId ));
    return (
      <div className="card z-depth-2 project-summary">
        <div className="card-content">
          <Link to={k}><c class="stitle">{project.title}</c><br/></Link>
          <hi>{project.content.slice(0,60)}...</hi>
          <hr/>
          {author ?
            <div >
            <c class="left pimg">{author.image ?<img alt="img" src={author.image} width="40" height="40" class="img"/>
                      :<i class="blue-text material-icons">account_circle</i>}
                      </c>
                      <div class="spc grey-text-small">
                      Posted by {author.firstName} Ninja <br/>
                      <c >{project.createdAt.toDate().toString().slice(0,15)}</c>
                      </div>
            </div>:null
            }
        </div>
        
      </div>
    )
  }

export default projectsummary;