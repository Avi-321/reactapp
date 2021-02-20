import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './card';
import sdata from './fname';

ReactDOM.render(
  <>
  	<h1 className="heading">List of my all time favorite flims</h1>
    <Card
    	imgsrc={sdata[0].imgsrc}
    	fname={sdata[0].name}
    	link={sdata[0].link}
    />
    <Card
    	imgsrc={sdata[1].imgsrc}
    	fname={sdata[1].name}
    	link={sdata[1].link}
    />
    <Card
      imgsrc={sdata[2].imgsrc}
      fname={sdata[2].name}
      link={sdata[2].link}
    />
    <Card
      imgsrc={sdata[3].imgsrc}
      fname={sdata[3].name}
      link={sdata[3].link}
    />
    <Card
      imgsrc={sdata[4].imgsrc}
      fname={sdata[4].name}
      link={sdata[4].link}
    />
    <Card
      imgsrc={sdata[5].imgsrc}
      fname={sdata[5].name}
      link={sdata[5].link}
    />
    <Card
      imgsrc={sdata[6].imgsrc}
      fname={sdata[6].name}
      link={sdata[6].link}
    />
    <Card
      imgsrc={sdata[7].imgsrc}
      fname={sdata[7].name}
      link={sdata[7].link}
    />
    <Card
      imgsrc={sdata[8].imgsrc}
      fname={sdata[8].name}
      link={sdata[8].link}
    />
  </>,
  document.getElementById('root')
);


