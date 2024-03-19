import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { IonicModule } from '@ionic/angular';
import cytoscape, { LayoutOptions } from 'cytoscape';




@Component({
  selector: 'app-topology',
  standalone: true,
  imports: [MatButtonModule, IonicModule],
  templateUrl: './topology.component.html',
  styleUrl: './topology.component.scss'
})
export class TopologyComponent implements OnInit {

  cy: any;
  treeData = {
    nodes: [
      { data: { id: 'a',name: "d",tooltip: "tooltip",label: 'Node A' } },
      { data: { id: 'b',name: "d",tooltip: "tooltip" } },
      { data: { id: 'c',name: "d",tooltip: "tooltip" } },
      { data: { id: 'd',name: "d",tooltip: "tooltip" } },
      { data: { 'id': 'e', 'name': 'Cytoscape.js', 'tooltip':'<a href="https://github.com/QuantStack/ipycytoscape/issues/82">My 5</a>' } }
    ],
    edges: [
      { data: { source: 'a', target: 'b' } },
      { data: { source: 'a', target: 'c' } },
      { data: { source: 'b', target: 'd' } }
    ]
  };
  ngOnInit(): void {
    this.cy = cytoscape({
      container: document.getElementById('cy'), // div with id="cy" in your HTML
      elements: this.treeData,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#33FFA2',
            label: 'data(label)'
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 2,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle'
          }
        }
      ],
      layout: {
        name: 'breadthfirst',
        directed: true,
        roots: '#a',
        padding: 10
      } as LayoutOptions
    });
   this.cy.nodes().forEach((e:any) => {
    console.log("--->",e.data);
    
   });
   
  }

 
   
    
  



}
