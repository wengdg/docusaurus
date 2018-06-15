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
        content: 'Professor, Department of Information and Computer Sciences, University of Hawaii. Head Wrangler, Fall, 2015 - present',
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
        image: imgUrl('weng.jpg'),
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
        <h2>Team Directory</h2>
        <div className="roundedImage team">
          <GridBlock align="left" contents={team} layout="threeColumn"/>
        </div>
      </Container>
    )
  }
}

module.exports = Team;
