import { Component, OnInit } from '@angular/core';
import Highcharts from "highcharts/highmaps";
import worldMap from "@highcharts/map-collection/custom/world.geo.json";
import UsaMap from "@highcharts/map-collection/countries/us/us-all.geo.json";
import ContinentsMap from "@highcharts/map-collection/custom/world-continents.geo.json";
import IndiaMap from "@highcharts/map-collection/countries/in/in-all.geo.json";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // World Map
  worldMap: typeof Highcharts = Highcharts;
  worldMapchartConstructor = "mapChart";
  worldMapchartOptions: Highcharts.Options = {
    chart: {
      map: worldMap
    },
    title: {
      text: ""
    },
    mapNavigation: {
      enabled: false,
      buttonOptions: {
        alignTo: "spacingBox"
      }
    },
    legend: {
      enabled: false
    },
    colorAxis: {
      min: 0
    },
    series: [
      {
        type: "map",
        name: "Random data",
        states: {
          hover: {
            color: "#268968"
          }
        },
        dataLabels: {
          enabled: false,
          format: "{point.name}"
        },
        allAreas: false,
        data: [
          ["fo", 0],
          ["um", 1],
          ["us", 2],
          ["jp", 3],
          ["sc", 4],
          ["in", 5],
          ["fr", 6],
          ["fm", 7],
          ["cn", 8],
          ["pt", 9],
          ["sw", 10],
          ["sh", 11],
          ["br", 12],
          ["ki", 13],
          ["ph", 14],
          ["mx", 15],
          ["es", 16],
          ["bu", 17],
          ["mv", 18],
          ["sp", 19],
          ["gb", 20],
          ["gr", 21],
          ["as", 22],
          ["dk", 23],
          ["gl", 24],
          ["gu", 25],
          ["mp", 26],
          ["pr", 27],
          ["vi", 28],
          ["ca", 29],
          ["st", 30],
          ["cv", 31],
          ["dm", 32],
          ["nl", 33],
          ["jm", 34],
          ["ws", 35],
          ["om", 36],
          ["vc", 37],
          ["tr", 38],
          ["bd", 39],
          ["lc", 40],
          ["nr", 41],
          ["no", 42],
          ["kn", 43],
          ["bh", 44],
          ["to", 45],
          ["fi", 46],
          ["id", 47],
          ["mu", 48],
          ["se", 49],
          ["tt", 50],
          ["my", 51],
          ["pa", 52],
          ["pw", 53],
          ["tv", 54],
          ["mh", 55],
          ["cl", 56],
          ["th", 57],
          ["gd", 58],
          ["ee", 59],
          ["ag", 60],
          ["tw", 61],
          ["bb", 62],
          ["it", 63],
          ["mt", 64],
          ["vu", 65],
          ["sg", 66],
          ["cy", 67],
          ["lk", 68],
          ["km", 69],
          ["fj", 70],
          ["ru", 71],
          ["va", 72],
          ["sm", 73],
          ["kz", 74],
          ["az", 75],
          ["tj", 76],
          ["ls", 77],
          ["uz", 78],
          ["ma", 79],
          ["co", 80],
          ["tl", 81],
          ["tz", 82],
          ["ar", 83],
          ["sa", 84],
          ["pk", 85],
          ["ye", 86],
          ["ae", 87],
          ["ke", 88],
          ["pe", 89],
          ["do", 90],
          ["ht", 91],
          ["pg", 92],
          ["ao", 93],
          ["kh", 94],
          ["vn", 95],
          ["mz", 96],
          ["cr", 97],
          ["bj", 98],
          ["ng", 99],
          ["ir", 100],
          ["sv", 101],
          ["sl", 102],
          ["gw", 103],
          ["hr", 104],
          ["bz", 105],
          ["za", 106],
          ["cf", 107],
          ["sd", 108],
          ["cd", 109],
          ["kw", 110],
          ["de", 111],
          ["be", 112],
          ["ie", 113],
          ["kp", 114],
          ["kr", 115],
          ["gy", 116],
          ["hn", 117],
          ["mm", 118],
          ["ga", 119],
          ["gq", 120],
          ["ni", 121],
          ["lv", 122],
          ["ug", 123],
          ["mw", 124],
          ["am", 125],
          ["sx", 126],
          ["tm", 127],
          ["zm", 128],
          ["nc", 129],
          ["mr", 130],
          ["dz", 131],
          ["lt", 132],
          ["et", 133],
          ["er", 134],
          ["gh", 135],
          ["si", 136],
          ["gt", 137],
          ["ba", 138],
          ["jo", 139],
          ["sy", 140],
          ["mc", 141],
          ["al", 142],
          ["uy", 143],
          ["cnm", 144],
          ["mn", 145],
          ["rw", 146],
          ["so", 147],
          ["bo", 148],
          ["cm", 149],
          ["cg", 150],
          ["eh", 151],
          ["rs", 152],
          ["me", 153],
          ["tg", 154],
          ["la", 155],
          ["af", 156],
          ["ua", 157],
          ["sk", 158],
          ["jk", 159],
          ["bg", 160],
          ["qa", 161],
          ["li", 162],
          ["at", 163],
          ["sz", 164],
          ["hu", 165],
          ["ro", 166],
          ["ne", 167],
          ["lu", 168],
          ["ad", 169],
          ["ci", 170],
          ["lr", 171],
          ["bn", 172],
          ["iq", 173],
          ["ge", 174],
          ["gm", 175],
          ["ch", 176],
          ["td", 177],
          ["kv", 178],
          ["lb", 179],
          ["dj", 180],
          ["bi", 181],
          ["sr", 182],
          ["il", 183],
          ["ml", 184],
          ["sn", 185],
          ["gn", 186],
          ["zw", 187],
          ["pl", 188],
          ["mk", 189],
          ["py", 190],
          ["by", 191],
          ["cz", 192],
          ["bf", 193],
          ["na", 194],
          ["ly", 195],
          ["tn", 196],
          ["bt", 197],
          ["md", 198],
          ["ss", 199],
          ["bw", 200],
          ["bs", 201],
          ["nz", 202],
          ["cu", 203],
          ["ec", 204],
          ["au", 205],
          ["ve", 206],
          ["sb", 207],
          ["mg", 208],
          ["is", 209],
          ["eg", 210],
          ["kg", 211],
          ["np", 212]
        ]
      }
    ]
  };
  // Usa Map
  UsaMap: typeof Highcharts = Highcharts;
  usaMapchartConstructor = "mapChart";
  usaMapchartOptions: Highcharts.Options = {
    chart: {
      map: UsaMap
    },
    title: {
      text: ""
    },
    mapNavigation: {
      enabled: false,
      buttonOptions: {
        alignTo: "spacingBox"
      }
    },
    legend: {
      enabled: false
    },
    colorAxis: {
      min: 0
    },
    series: [
      {
        type: "map",
        name: "Random data",
        states: {
          hover: {
            color: "#268968"
          }
        },
        dataLabels: {
          enabled: false,
          format: "{point.name}"
        },
        allAreas: false,
        data: [
          ['us-ma', 0],
          ['us-wa', 1],
          ['us-ca', 2],
          ['us-or', 3],
          ['us-wi', 4],
          ['us-me', 5],
          ['us-mi', 6],
          ['us-nv', 7],
          ['us-nm', 8],
          ['us-co', 9],
          ['us-wy', 10],
          ['us-ks', 11],
          ['us-ne', 12],
          ['us-ok', 13],
          ['us-mo', 14],
          ['us-il', 15],
          ['us-in', 16],
          ['us-vt', 17],
          ['us-ar', 18],
          ['us-tx', 19],
          ['us-ri', 20],
          ['us-al', 21],
          ['us-ms', 22],
          ['us-nc', 23],
          ['us-va', 24],
          ['us-ia', 25],
          ['us-md', 26],
          ['us-de', 27],
          ['us-pa', 28],
          ['us-nj', 29],
          ['us-ny', 30],
          ['us-id', 31],
          ['us-sd', 32],
          ['us-ct', 33],
          ['us-nh', 34],
          ['us-ky', 35],
          ['us-oh', 36],
          ['us-tn', 37],
          ['us-wv', 38],
          ['us-dc', 39],
          ['us-la', 40],
          ['us-fl', 41],
          ['us-ga', 42],
          ['us-sc', 43],
          ['us-mn', 44],
          ['us-mt', 45],
          ['us-nd', 46],
          ['us-az', 47],
          ['us-ut', 48],
          ['us-hi', 49],
          ['us-ak', 50]
        ]
      }
    ]
  };
  // Continents Map
  ContinentsMap: typeof Highcharts = Highcharts;
  continentsMapchartConstructor = "mapChart";
  continentsMapchartOptions: Highcharts.Options = {
    chart: {
      map: ContinentsMap
    },
    title: {
      text: ""
    },
    mapNavigation: {
      enabled: false,
      buttonOptions: {
        alignTo: "spacingBox"
      }
    },
    legend: {
      enabled: false
    },
    colorAxis: {
      min: 0
    },
    series: [
      {
        type: "map",
        name: "Random data",
        states: {
          hover: {
            color: "#268968"
          }
        },
        dataLabels: {
          enabled: false,
          format: "{point.name}"
        },
        allAreas: false,
        data: [
          ['eu', 0],
          ['oc', 1],
          ['af', 2],
          ['as', 3],
          ['na', 4],
          ['sa', 5]
        ]
      }
    ]
  };
  // India Map
  IndiaMap: typeof Highcharts = Highcharts;
  indiamapchartConstructor = "mapChart";
  indiamapchartOptions: Highcharts.Options = {
    chart: {
      map: IndiaMap
    },
    title: {
      text: ""
    },
    mapNavigation: {
      enabled: false,
      buttonOptions: {
        alignTo: "spacingBox"
      }
    },
    legend: {
      enabled: false
    },
    colorAxis: {
      min: 0
    },
    series: [
      {
        type: "map",
        name: "Random data",
        states: {
          hover: {
            color: "#268968"
          }
        },
        dataLabels: {
          enabled: false,
          format: "{point.name}"
        },
        allAreas: false,
        data: [
          ['in-py', 0],
          ['in-ld', 1],
          ['in-wb', 2],
          ['in-or', 3],
          ['in-br', 4],
          ['in-sk', 5],
          ['in-ct', 6],
          ['in-tn', 7],
          ['in-mp', 8],
          ['in-2984', 9],
          ['in-ga', 10],
          ['in-nl', 11],
          ['in-mn', 12],
          ['in-ar', 13],
          ['in-mz', 14],
          ['in-tr', 15],
          ['in-3464', 16],
          ['in-dl', 17],
          ['in-hr', 18],
          ['in-ch', 19],
          ['in-hp', 20],
          ['in-jk', 21],
          ['in-kl', 22],
          ['in-ka', 23],
          ['in-dn', 24],
          ['in-mh', 25],
          ['in-as', 26],
          ['in-ap', 27],
          ['in-ml', 28],
          ['in-pb', 29],
          ['in-rj', 30],
          ['in-up', 31],
          ['in-ut', 32],
          ['in-jh', 33]
        ]
      }
    ]
  };
}
