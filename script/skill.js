// Skills Cloud
var entries = [ 
    
    { label: 'Adobe XD', url: '#/', target: '_top' },
    { label: 'Invision', url: '#', target: '_top' },
    { label: 'Figma', url: '#', target: '_top' },
    { label: 'Photoshop', url: '#', target: '_top' },
    { label: 'HTML', url: '#', target: '_top' },
    { label: 'CSS', url: '#', target: '_top' },
    { label: 'JavaScript', url: '#', target: '_top' },
    { label: 'Bootstrap', url: '#', target: '_top' },
    { label: 'RStudio', url: '#', target: '_top' },
    { label: 'Python', url: '#', target: '_top' },
    { label: 'Scenario Design', url: '#', target: '_top' },
    { label: 'Empathy Mapping', url: '#', target: '_top' },
    { label: 'Sitemapping', url: '#', target: '_top' },
    { label: 'Information Architecture', url: '#', target: '_top' },
    { label: 'Prototyping', url: '#', target: '_top' },
    { label: 'Wireframing', url: '#', target: '_top' },
    { label: 'Interaction Design', url: '#', target: '_top' },
    { label: 'User Research', url: '#', target: '_top' },
    { label: 'User Interview', url: '#', target: '_top' },
    { label: 'Usability Testing', url: '#', target: '_top' },
    { label: 'Data Analysis', url: '#', target: '_top' },
    { label: 'Competitor Analysis', url: '#', target: '_top' },
    
  ];
  
  var settings = {
  
    entries: entries,
    width: '100%',
    height: '100%',
    radius: '65%',
    radiusMin: 75,
    bgDraw: true,
    bgColor: 'var(--background)',
    opacityOver: 1.00,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 0.2,
    fontFamily: 'Poppins, monospace',
    fontSize: 'var(--fs-2)',
    fontColor: 'var(--text)',
    fontWeight: 'normal',//bold
    fontStyle: 'normal',//italic 
    fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: false,
    tooltipFontFamily: 'Oswald, Arial, sans-serif',
    tooltipFontSize: 'var(--fs-1)',
    tooltipFontColor: '#fff',
    tooltipFontWeight: 'normal',//bold
    tooltipFontStyle: 'normal',//italic 
    tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    tooltipFontToUpperCase: false,
    tooltipTextAnchor: 'left',
    tooltipDiffX: 0,
    tooltipDiffY: 10,
    animatingSpeed: 0.01,
    animatingRadiusLimit: 1.3
  
  };
  
  $("#skillsCloud").svg3DTagCloud(settings);