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
    <div style={{ width: '25%', float: 'top' }}>
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
        title: 'Brian Boado',
        image: imgUrl('boado.jpg'),
        content: 'Student, Department of Information and Computer Sciences, University of Hawaii. Developer, Spring, 2016',
        imageAlign: 'left',
      },
      {
        title: 'Henri Casanova',
        image: imgUrl('casanova.jpg'),
        content: 'Professor, Department of Information and Computer Sciences, University of Hawaii. Advisory Board member, Spring, 2016 - present',
        imageAlign: 'left',
      },
      {
        title: 'David Chin',
        image: imgUrl('chin.jpg'),
        content: 'Professor, Department of Information and Computer Sciences, University of Hawaii. Advisory Board member, Summer, 2016 - present',
        imageAlign: 'left',
      },
      {
        title: 'Josephine Garces',
        image: imgUrl('garces.jpg'),
        content: 'Student, Department of Information and Computer Sciences, University of Hawaii. Developer, Spring, 2016',
        imageAlign: 'left',
      },
      {
        title: 'Philip Johnson',
        image: imgUrl('johnson.jpg'),
        content: 'Professor, Department of Information and Computer Sciences, University of Hawaii. Head Hacker Wrangler, Fall, 2015 - present',
        imageAlign: 'left',
      },
      {
        title: 'Sorapong Khongnawang',
        image: imgUrl('khongnawang.jpg'),
        content: 'Student, Department of Electrical Engineering, University of Hawaii. Developer, Spring, 2016',
        imageAlign: 'left',
      },
      {
        title: 'Kenny Luong',
        image: imgUrl('luong.png'),
        content: 'Student, Department of Electrical Engineering, University of Hawaii. Developer, Spring, 2016',
        imageAlign: 'left',
      },
      {
        title: 'Cam Moore',
        image: imgUrl('moore.jpg'),
        content: 'Professor, Department of Information and Computer Sciences, University of Hawaii. Developer, Fall, 2016 - present',
        imageAlign: 'left',
      },
      {
        title: 'Sy Morikawa',
        image: imgUrl('morikawa.jpg'),
        content: 'Student, Department of Information and Computer Sciences, University of Hawaii. Developer, Spring, 2016',
        imageAlign: 'left',
      },
      {
        title: 'Michael-Brian Ogawa',
        image: imgUrl('ogawa.jpg'),
        content: 'Professor, Department of Information and Computer Sciences, University of Hawaii. Advisory Board member, Summer, 2016 - present',
        imageAlign: 'left',
      },
      {
        title: 'Aljon Preza',
        image: imgUrl('preza.png'),
        content: 'Student, Department of Information and Computer Sciences, University of Hawaii. Developer, Spring, 2016',
        imageAlign: 'left',
      },
      {
        title: 'Scott Robertson',
        image: imgUrl('robertson.jpg'),
        content: 'Professor, Department of Information and Computer Sciences, University of Hawaii. Advisory Board member, Summer, 2016 - present',
        imageAlign: 'left',
      },
      {
        title: 'Michele Shimoda',
        image: imgUrl('shimoda.jpg'),
        content: 'Student, Department of Electrical Engineering, University of Hawaii. Developer, Spring, 2016',
        imageAlign: 'left',
      },
      {
        title: 'Michael Spencer',
        image: imgUrl('spencer.jpg'),
        content: 'Student, Department of Electrical Engineering, University of Hawaii. Developer, Spring, 2016',
        imageAlign: 'left',
      },
      {
        title: 'Amy Takayesu',
        image: imgUrl('takayesu.jpeg'),
        content: 'Student, Department of Information and Computer Sciences, University of Hawaii. Developer, Fall, 2016 - Summer, 2017',
        imageAlign: 'left',
      },
      {
        title: 'Micah Tashima',
        image: imgUrl('tashima.jpg'),
        content: 'Student, Department of Information and Computer Sciences, University of Hawaii. Developer, Spring, 2016',
        imageAlign: 'left',
      },
      {
        title: 'Danny Weng',
        image: imgUrl(''),
        content: 'Student, Department of Information and Computer Sciences, University of Hawaii. Developer, Spring 2018',
        imageAlign: 'left',
      },
      {
        title: 'Kelsie Yamakawa',
        image: imgUrl('yamakawa.jpg'),
        content: 'Student, Department of Electrical Engineering, University of Hawaii. Developer, Spring, 2016',
        imageAlign: 'left',
      },
      {
        title: 'Gilbert Yim',
        image: imgUrl('yim.jpg'),
        content: 'Student, Department of Electrical Engineering, University of Hawaii. Developer, Spring, 2016',
        imageAlign: 'left',
      },
    ];
    return (
      <Container>
        <MarkdownBlock>
          ## Semester breakdown
        </MarkdownBlock>
        <Container className='smallPadding'>RadGrad development began in Fall, 2015 with a series of brainstorming
          sessions involving Philip Johnson and Henri Casanova to generate a set of potential goals and design ideas for
          the system.</Container>
        <Container className='smallPadding'>In Summer, 2016, David Chin, Scott Robertson, Michael-Brian Ogawa, and Henri
          Casanova agreed to join Philip Johnson to form the RadGrad Advisory Board. The board will meet a few times per
          year to oversee the direction of the project.</Container>
        <Container className='smallPadding'>In Spring, 2016, members of ICS 414 (Brian Boado, Josephine Garces, Sorapong
          Khongnawang, Aljon Preza, Michael Spencer, Micah Tashima, Gilbert Yim, Kenny Luong, Sy Morikawa, Michele
          Shimoda, Philip Johnson, and Kelsie Yamakawa) generated a series of mockups and greatly refined the
          requirements and goals for the system.</Container>
        <Container className='smallPadding'>In Fall, 2016, Amy Takeyesu, Cam Moore, Josephine Garces, Aljon Preza, and
          Philip Johnson began work on the first production release of the system.</Container>
        <Container className='smallPadding'>In Summer, 2017, Amy Takeyesu finished her M.S. on RadGrad and the Pilot
          study began.</Container>
        <Container className='smallPadding'>In Spring, 2018, RadGrad was released to the Information and Computer
          Sciences students.</Container>
        <h2>Team Directory</h2>
        <div className="roundedImage team">
          <GridBlock align="left" contents={team} layout="threeColumn"/>
        </div>
      </Container>
    )
  }
}

module.exports = Team;
