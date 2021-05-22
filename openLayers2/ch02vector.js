import 'ol/ol.css';
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import DragAndDrop from 'ol/interaction/DragAndDrop';
import Modify from 'ol/interaction/Modify';
import Draw from 'ol/interaction/Draw';
import Snap from 'ol/interaction/Snap';
import {Style, Fill, Stroke} from 'ol/style';
import {getArea} from 'ol/sphere';
import colormap from 'colormap';

// style warna:
const min = 1e8; //area terkecil
const max = 2e13; //area terbesar
const steps = 50;
const ramp = colormap({
  colormap: 'blackbody',
  nshades: steps
});

function clamp(value, low, high){
  return Math.max(low, Math.min(value, high));
}

function getColor(feature){
  const area = getArea(feature.getGeometry());
  const f = Math.pow(clamp((area - min) / (max - min), 0, 1), 1 / 2);
  const index = Math.round(f * (steps - 1));
  return ramp[index];
}

const source = new VectorSource();
const layer = new VectorLayer({
  source: source,
  // static style untuk FEATURE BARU: (bisa tukeran sama dynamic style di PETA ASLI)
  style: new Style({
    fill: new Fill({
      color: 'red'
    }),
    stroke: new Stroke({
      color: 'white'
    })
  })
});
const peta = new Map({
  target: 'container-peta',
  layers: [
    new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: './data/countries.json'
      }),
      // dynamic style untuk PETA ASLI berdasarkan luasan geometry: (bisa tukeran sama static style di FEATURE BARU)
      style: function(feature) {
        return new Style({
          fill: new Fill({
            color: getColor(feature)
          }),
          stroke: new Stroke({
            color: 'rgba(255,255,255,0.8)'
          })
        });
      }
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});

peta.addLayer(layer);
peta.addInteraction(new DragAndDrop({
  source: source,
  formatConstructors: [GeoJSON]
}));
peta.addInteraction(new Modify({
  source: source
}));
peta.addInteraction(new Draw({
  type: 'Polygon',
  source: source
}));
peta.addInteraction(new Snap({
  source: source
}));

const hapus = document.getElementById('hapus');
hapus.addEventListener('click', function(){
  source.clear();
})
const format = new GeoJSON({featureProjection: 'EPSG:3857'});
const download = document.getElementById('download');
source.on('change', function(){
  const features = source.getFeatures();
  const json = format.writeFeatures(features);
  download.href = 'data:text/json; charset=utf-8,' + json;
})
