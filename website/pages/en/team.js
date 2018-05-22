const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/people/' + img;
}

const TeamCard = props => (
  <Container className='smallPadding'>
    <div style={{ width: "25%", float: "left" }}>
      <img className="roundedImage" src={props.img_src} width="100px"/>
    </div>
    <div style={{ width: "75%" }}>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
    </div>
  </Container>
);

class Team extends React.Component {
  render() {
    const team = [
      {
        name: 'Brian Boado',
        img_src: imgUrl('boado.jpg'),
        description: 'Student, Department of Information and Computer Sciences, University of Hawaii',
      },
      {
        name: 'Henri Casanova',
        img_src: imgUrl('casanova.jpg'),
        description: 'Professor, Department of Information and Computer Sciences, University of Hawaii',
      },
      {
        name: 'David Chin',
        img_src: imgUrl('chin.jpg'),
        description: 'Professor, Department of Information and Computer Sciences, University of Hawaii',
      },
      {
        name: 'Josephine Garces',
        img_src: imgUrl('garces.jpg'),
        description: 'Student, Department of Information and Computer Sciences, University of Hawaii',
      },
/*
      ## Semester breakdown

RadGrad development began in Fall, 2015 with a series of brainstorming sessions involving Philip Johnson and Henri Casanova to generate a set of potential goals and design ideas for the system.

In Summer, 2016, David Chin, Scott Robertson, Michael-Brian Ogawa, and Henri Casanova agreed to join Philip Johnson to form the RadGrad Advisory Board. The board will meet a few times per year to oversee the direction of the project.

In Spring, 2016, members of ICS 414 (Brian Boado, Josephine Garces, Sorapong Khongnawang, Aljon Preza, Michael Spencer, Micah Tashima, Gilbert Yim, Kenny Luong, Sy Morikawa, Michele Shimoda, Philip Johnson, and Kelsie Yamakawa) generated a series of mockups and greatly refined the requirements and goals for the system.

In Fall, 2016, Amy Takeyesu, Cam Moore, Josephine Garces, Aljon Preza, and Philip Johnson began work on the first production release of the system.

<div className="row">
        {% include team-member.html name="Philip Johnson" photo="johnson.jpg" description="Professor, Department of Information and Computer Sciences, University of Hawaii"  time="Head Hacker Wrangler, Fall, 2015 - present"%}
        {% include team-member.html name="Sorapong Khongnawang" photo="khongnawang.jpg" description="Student, Department of Electrical Engineering, University of Hawaii"  time="Developer, Spring, 2016" %}
      </div>
      < div className = "row" >
        { % include team - member.html name = "Kenny Luong" photo = "luong.png" description = "Student, Department of Electrical Engineering, University of Hawaii"  time = "Developer, Spring, 2016" %
  }

    {%
      include
      team - member.html
      name = "Cam Moore"
      photo = "moore.jpg"
      description = "Professor, Department of Information and Computer Sciences, University of Hawaii"
      time = "Developer, Fall, 2016 - present" %
    }
  </div>
    <div className="row">
      {% include team-member.html name="Sy Morikawa" photo="morikawa.jpg" description="Student, Department of Information and Computer Sciences, University of Hawaii"  time="Developer, Spring, 2016" %}
      {% include team-member.html name="Michael-Brian Ogawa" photo="ogawa.jpg" description="Professor, Department of Information and Computer Sciences, University of Hawaii"  time="Advisory Board member, Summer, 2016 - present"%}
    </div>
    <div className="row">
      {% include team-member.html name="Aljon Preza" photo="preza.png" description="Student, Department of Information and Computer Sciences, University of Hawaii"  time="Developer, Spring, 2016" %}
      {% include team-member.html name="Scott Robertson" photo="robertson.jpg" description="Professor, Department of Information and Computer Sciences, University of Hawaii"  time="Advisory Board member, Summer, 2016 - present"%}
    </div>
    <div className="row">
      {% include team-member.html name="Michele Shimoda" photo="shimoda.jpg" description="Student, Department of Electrical Engineering, University of Hawaii"  time="Developer, Spring, 2016" %}

      {% include team-member.html name="Michael Spencer" photo="spencer.jpg" description="Student, Department of Electrical Engineering, University of Hawaii"  time="Developer, Spring, 2016" %}
    </div>
    <div className="row">
      {% include team-member.html name="Amy Takayesu" photo="takayesu.jpeg" description="Student, Department of Information and Computer Sciences, University of Hawaii"  time="Developer, Fall, 2016 - present" %}

      {% include team-member.html name="Micah Tashima" photo="tashima.jpg" description="Student, Department of Information and Computer Sciences, University of Hawaii"  time="Developer, Spring, 2016" %}
    </div>
    <div className="row">
      {% include team-member.html name="Kelsie Yamakawa" photo="yamakawa.jpg" description="Student, Department of Electrical Engineering, University of Hawaii"  time="Developer, Spring, 2016" %}

      {% include team-member.html name="Gilbert Yim" photo="yim.jpg" description="Student, Department of Electrical Engineering, University of Hawaii"  time="Developer, Spring, 2016" %}
    </div>
*/
  ];
    return (
      <Container>
        <h2>Team Directory</h2>
        <div style={{ width: "50%", float: "left"}}>
          <TeamCard name={team[0].name} img_src={team[0].img_src} description={team[0].description}/>
        </div>
        <div style={{ width: "50%", float: "left"}}>
          <TeamCard name={team[1].name} img_src={team[1].img_src} description={team[1].description}/>
        </div>
        <div style={{ width: "50%", float: "left"}}>
          <TeamCard name={team[2].name} img_src={team[2].img_src} description={team[2].description}/>
        </div>
        <div style={{ width: "50%", float: "left"}}>
          <TeamCard name={team[3].name} img_src={team[3].img_src} description={team[3].description}/>
        </div>
      </Container>
    )
  }
}

module.exports = Team;
