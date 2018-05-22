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
