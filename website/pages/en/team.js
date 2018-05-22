const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const MarkdownBlock = CompLibrary.MarkdownBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/people/' + img;
}

const TeamCard = props => (
  <Container className='smallPadding'>
    <div style={{ width: '25%', float: 'left' }}>
      <img className="roundedImage" src={props.person.img_src} width="100px"/>
    </div>
    <div style={{ width: '75%', float: 'right' }}>
      <h4 style={{ padding: 0 }}>{props.person.name}</h4>
      <p>{props.person.description}</p>
      <em>{props.person.time}</em>
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
        time: 'Developer, Spring, 2016',
      },
      {
        name: 'Henri Casanova',
        img_src: imgUrl('casanova.jpg'),
        description: 'Professor, Department of Information and Computer Sciences, University of Hawaii',
        time: 'Advisory Board member, Spring, 2016 - present',
      },
      {
        name: 'David Chin',
        img_src: imgUrl('chin.jpg'),
        description: 'Professor, Department of Information and Computer Sciences, University of Hawaii',
        time: 'Advisory Board member, Summer, 2016 - present',
      },
      {
        name: 'Josephine Garces',
        img_src: imgUrl('garces.jpg'),
        description: 'Student, Department of Information and Computer Sciences, University of Hawaii',
        time: 'Developer, Spring, 2016',
      },
      {
        name: 'Philip Johnson',
        img_src: imgUrl('johnson.jpg'),
        description: 'Professor, Department of Information and Computer Sciences, University of Hawaii',
        time: 'Head Hacker Wrangler, Fall, 2015 - present',
      },
      {
        name: 'Sorapong Khongnawang',
        img_src: imgUrl('khongnawang.jpg'),
        description: 'Student, Department of Electrical Engineering, University of Hawaii',
        time: 'Developer, Spring, 2016',
      },
      {
        name: 'Kenny Luong',
        img_src: imgUrl('luong.png'),
        description: 'Student, Department of Electrical Engineering, University of Hawaii',
        time: 'Developer, Spring, 2016',
      },
      {
        name: 'Cam Moore',
        img_src: imgUrl('moore.jpg'),
        description: 'Professor, Department of Information and Computer Sciences, University of Hawaii',
        time: 'Developer, Fall, 2016 - present',
      },
      {
        name: 'Sy Morikawa',
        img_src: imgUrl('morikawa.jpg'),
        description: 'Student, Department of Information and Computer Sciences, University of Hawaii',
        time: 'Developer, Spring, 2016',
      },
      {
        name: 'Michael-Brian Ogawa',
        img_src: imgUrl('ogawa.jpg'),
        description: 'Professor, Department of Information and Computer Sciences, University of Hawaii',
        time: 'Advisory Board member, Summer, 2016 - present',
      },
      {
        name: 'Aljon Preza',
        img_src: imgUrl('preza.png'),
        description: 'Student, Department of Information and Computer Sciences, University of Hawaii',
        time: 'Developer, Spring, 2016',
      },
      {
        name: 'Scott Robertson',
        img_src: imgUrl('robertson.jpg'),
        description: 'Professor, Department of Information and Computer Sciences, University of Hawaii',
        time: 'Advisory Board member, Summer, 2016 - present',
      },
      {
        name: 'Michele Shimoda',
        img_src: imgUrl('shimoda.jpg'),
        description: 'Student, Department of Electrical Engineering, University of Hawaii',
        time: 'Developer, Spring, 2016',
      },
      {
        name: 'Michael Spencer',
        img_src: imgUrl('spencer.jpg'),
        description: 'Student, Department of Electrical Engineering, University of Hawaii',
        time: 'Developer, Spring, 2016',
      },
      {
        name: 'Amy Takayesu',
        img_src: imgUrl('takayesu.jpeg'),
        description: 'Student, Department of Information and Computer Sciences, University of Hawaii',
        time: 'Developer, Fall, 2016 - Spring, 2017',
      },
      {
        name: 'Micah Tashima',
        img_src: imgUrl('tashima.jpg'),
        description: 'Student, Department of Information and Computer Sciences, University of Hawaii',
        time: 'Developer, Spring, 2016',
      },
      {
        name: 'Danny Weng',
        img_src: imgUrl(''),
        description: 'Student, Department of Information and Computer Sciences, University of Hawaii',
        time: 'Developer, Spring 2018',
      },
      {
        name: 'Kelsie Yamakawa',
        img_src: imgUrl('yamakawa.jpg'),
        description: 'Student, Department of Electrical Engineering, University of Hawaii',
        time: 'Developer, Spring, 2016',
      },
      {
        name: 'Gilbert Yim',
        img_src: imgUrl('yim.jpg'),
        description: 'Student, Department of Electrical Engineering, University of Hawaii',
        time: 'Developer, Spring, 2016',
      },
      /*


      */
    ];
    return (
      <Container>
        <MarkdownBlock>
          ## Semester breakdown
        </MarkdownBlock>
        <Container className='smallPadding'>RadGrad development began in Fall, 2015 with a series of brainstorming sessions involving Philip Johnson and Henri Casanova to generate a set of potential goals and design ideas for the system.</Container>
        <Container className='smallPadding'>In Summer, 2016, David Chin, Scott Robertson, Michael-Brian Ogawa, and Henri Casanova agreed to join Philip Johnson to form the RadGrad Advisory Board. The board will meet a few times per year to oversee the direction of the project.</Container>
        <Container className='smallPadding'>In Spring, 2016, members of ICS 414 (Brian Boado, Josephine Garces, Sorapong Khongnawang, Aljon Preza, Michael Spencer, Micah Tashima, Gilbert Yim, Kenny Luong, Sy Morikawa, Michele Shimoda, Philip Johnson, and Kelsie Yamakawa) generated a series of mockups and greatly refined the requirements and goals for the system.</Container>
          <Container className='smallPadding'>In Fall, 2016, Amy Takeyesu, Cam Moore, Josephine Garces, Aljon Preza, and Philip Johnson began work on the first production release of the system.</Container>
        <Container className='smallPadding'>In Summer, 2017, Amy Takeyesu finished her M.S. on RadGrad and the Pilot study began.</Container>
        <Container className='smallPadding'>In Spring, 2018, RadGrad was released to the Information and Computer Sciences students.</Container>
        <h2>Team Directory</h2>
        <div style={{ width: '50%', float: 'left' }}>
          <TeamCard person={team[0]}/>
        </div>
        <div style={{ width: '50%', float: 'right' }}>
          <TeamCard person={team[1]}/>
        </div>
        <div style={{ width: '50%', float: 'left' }}>
          <TeamCard person={team[2]}/>
        </div>
        <div style={{ width: '50%', float: 'right' }}>
          <TeamCard person={team[3]}/>
        </div>
        <div style={{ width: '50%', float: 'left' }}>
          <TeamCard person={team[4]}/>
        </div>
        <div style={{ width: '50%', float: 'right' }}>
          <TeamCard person={team[5]}/>
        </div>
        <div style={{ width: '50%', float: 'left' }}>
          <TeamCard person={team[6]}/>
        </div>
        <div style={{ width: '50%', float: 'right' }}>
          <TeamCard person={team[7]}/>
        </div>
        <div style={{ width: '50%', float: 'left' }}>
          <TeamCard person={team[8]}/>
        </div>
        <div style={{ width: '50%', float: 'right' }}>
          <TeamCard person={team[9]}/>
        </div>
        <div style={{ width: '50%', float: 'left' }}>
          <TeamCard person={team[10]}/>
        </div>
        <div style={{ width: '50%', float: 'right' }}>
          <TeamCard person={team[11]}/>
        </div>
        <div style={{ width: '50%', float: 'left' }}>
          <TeamCard person={team[12]}/>
        </div>
        <div style={{ width: '50%', float: 'right' }}>
          <TeamCard person={team[13]}/>
        </div>
        <div style={{ width: '50%', float: 'left' }}>
          <TeamCard person={team[14]}/>
        </div>
        <div style={{ width: '50%', float: 'right' }}>
          <TeamCard person={team[15]}/>
        </div>
        <div style={{ width: '50%', float: 'left' }}>
          <TeamCard person={team[16]}/>
        </div>
        <div style={{ width: '50%', float: 'right' }}>
          <TeamCard person={team[17]}/>
        </div>
        <div style={{ width: '50%', float: 'left' }}>
          <TeamCard person={team[18]}/>
        </div>
      </Container>
    )
  }
}

module.exports = Team;
