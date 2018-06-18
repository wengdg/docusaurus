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
      <img className="roundedImageCorner" src={props.person.img_src} width="100px"/>
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
    const advisoryBoard = [
      {
        title: 'Robert Brewer',
        image: imgUrl('brewer.jpg'),
        content: 'Engineering Manager, Tableau, Inc.',
        imageAlign: 'left',
      },
      {
        title: 'Henri Casanova',
        image: imgUrl('casanova.jpg'),
        content: 'Professor, Department of Information and Computer Sciences, University of Hawaii',
        imageAlign: 'left',
      },
      {
        title: 'Aaron Kagawa',
        image: imgUrl('kagawa.jpeg'),
        content: 'Technical Lead, Native Stories',
        imageAlign: 'left',
      },
      {
        title: 'Yuka Nagashima',
        image: imgUrl('nagashima.jpg'),
        content: 'President, Paideia Enterprises',
        imageAlign: 'left',
      },
      {
        title: 'Michael-Brian Ogawa',
        image: imgUrl('ogawa.jpg'),
        content: 'Professor, Department of Information and Computer Sciences, University of Hawaii',
        imageAlign: 'left',
      },
      {
        title: 'Guylaine Poisson',
        image: imgUrl('poisson.jpg'),
        content: 'Professor, Department of Information and Computer Sciences, University of Hawaii',
        imageAlign: 'left',
      },
      {
        title: 'Scott Robertson',
        image: imgUrl('robertson.jpg'),
        content: 'Professor, Department of Information and Computer Sciences, University of Hawaii',
        imageAlign: 'left',
      },
      {
        title: 'Amy Takayesu',
        image: imgUrl('takayesu.jpeg'),
        content: 'Software Engineer, LiveAction, Inc.',
        imageAlign: 'left',
      },
    ];
    const developmentTeam = [
      {
        title: 'Philip Johnson',
        image: imgUrl('johnson.jpeg'),
        content: 'Professor, Department of Information and Computer Sciences, University of Hawaii',
        imageAlign: 'left',
      },
      {
        title: 'Peter Leong',
        image: imgUrl('leong.jpg'),
        content: 'Professor, Department of Educational Technology, University of Hawaii',
        imageAlign: 'left',
      },
      {
        title: 'Cam Moore',
        image: imgUrl('moore.jpg'),
        content: 'Professor, Department of Information and Computer Sciences, University of Hawaii',
        imageAlign: 'left',
      },
      {
        title: 'Seungoh Paek',
        image: imgUrl('paek.jpg'),
        content: 'Professor, Department of Learning Design and Technology, University of Hawaii',
        imageAlign: 'left',
      },
      {
        title: 'Danny Weng',
        image: imgUrl('weng.jpg'),
        content: 'Student, Department of Information and Computer Sciences, University of Hawaii',
        imageAlign: 'left',
      },
    ];
    const alumni = [
      {
        title: 'Brian Boado',
        image: imgUrl('boado.jpg'),
        content: 'Student, Department of Information and Computer Sciences, University of Hawaii. Spring, 2016',
        imageAlign: 'left',
      },

      {
        title: 'Josephine Garces',
        image: imgUrl('garces.jpg'),
        content: 'Student, Department of Information and Computer Sciences, University of Hawaii. Spring, 2016',
        imageAlign: 'left',
      },

      {
        title: 'Sorapong Khongnawang',
        image: imgUrl('khongnawang.jpg'),
        content: 'Student, Department of Electrical Engineering, University of Hawaii. Spring, 2016',
        imageAlign: 'left',
      },
      {
        title: 'Kenny Luong',
        image: imgUrl('luong.png'),
        content: 'Student, Department of Electrical Engineering, University of Hawaii. Spring, 2016',
        imageAlign: 'left',
      },

      {
        title: 'Sy Morikawa',
        image: imgUrl('morikawa.jpg'),
        content: 'Student, Department of Information and Computer Sciences, University of Hawaii. Spring, 2016',
        imageAlign: 'left',
      },
      {
        title: 'Aljon Preza',
        image: imgUrl('preza.png'),
        content: 'Student, Department of Information and Computer Sciences, University of Hawaii. Spring, 2016',
        imageAlign: 'left',
      },

      {
        title: 'Michele Shimoda',
        image: imgUrl('shimoda.jpg'),
        content: 'Student, Department of Electrical Engineering, University of Hawaii. Spring, 2016',
        imageAlign: 'left',
      },
      {
        title: 'Michael Spencer',
        image: imgUrl('spencer.jpg'),
        content: 'Student, Department of Electrical Engineering, University of Hawaii. Spring, 2016',
        imageAlign: 'left',
      },
      {
        title: 'Micah Tashima',
        image: imgUrl('tashima.jpg'),
        content: 'Student, Department of Information and Computer Sciences, University of Hawaii. Spring, 2016',
        imageAlign: 'left',
      },

      {
        title: 'Kelsie Yamakawa',
        image: imgUrl('yamakawa.jpg'),
        content: 'Student, Department of Electrical Engineering, University of Hawaii. Spring, 2016',
        imageAlign: 'left',
      },
      {
        title: 'Gilbert Yim',
        image: imgUrl('yim.jpg'),
        content: 'Student, Department of Electrical Engineering, University of Hawaii. Spring, 2016',
        imageAlign: 'left',
      },
    ];
    return (
      <Container>
        <h2 style={{fontWeight: "500"}}>Development Team</h2>
        <div className="roundedImageCorner team">
          <GridBlock align="left" contents={developmentTeam} layout="twoColumn"/>
        </div>
        <h2 style={{fontWeight: "500"}}>Advisory Board</h2>
        <div className="roundedImageCorner team">
          <GridBlock align="left" contents={advisoryBoard} layout="twoColumn"/>
        </div>
        <h2 style={{fontWeight: "500"}}>Alumni</h2>
        <div className="roundedImageCorner team">
          <GridBlock align="left" contents={alumni} layout="twoColumn"/>
        </div>
      </Container>
    )
  }
}

module.exports = Team;
