const visualizationLink = document.getElementById('visualization-link');
visualizationLink.addEventListener('click', openVisualization);

function openVisualization(event) {
    event.preventDefault();
    
    const iframe = document.getElementById('visualization-iframe');
    iframe.src = 'projects/SoE/index.html';
    iframe.style.display = 'block';
  }