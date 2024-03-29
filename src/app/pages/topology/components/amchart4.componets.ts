import { AfterViewInit, Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { isPlatformBrowser } from '@angular/common';
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
@Component({
 
    standalone: true,
    template: `
    <div id="chart_id" style=" width: 100%; height: 500px">

    </div>
    `,
    styles: []
})
export class Amchart4Component implements OnInit, AfterViewInit {
    constructor(@Inject(PLATFORM_ID) private platformId: any, private zone: NgZone) { }
    chart: any;

    browserOnly(f: () => void) {
        if (isPlatformBrowser(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                f();
            });
        }
    }

    ngOnInit(): void {

    }
    ngAfterViewInit(): void {
        this.browserOnly(() => {
            am4core.useTheme(am4themes_animated)
            this.chart = am4core.create("chart_id", am4plugins_forceDirected.ForceDirectedTree);
            let networkSeries = this.chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

            this.chart.data = [
                {
                    name: "Core",
                    children: [
                        {
                            name: "First",
                            children: [
                                { name: "A1", value: 100 },
                                { name: "A2", value: 600 }
                            ]
                        },
                        {
                            name: "Second",
                            children: [
                                { name: "B1", value: 135 },
                                { name: "B2", value: 98 }
                            ]
                        },
                        {
                            name: "Third",
                            children: [
                                {
                                    name: "C1",
                                    children: [
                                        { name: "EE1", value: 130 },
                                        { name: "EE2", value: 87 },
                                        { name: "EE3", value: 55 }
                                    ]
                                },
                                { name: "C2", value: 148 },
                                {
                                    name: "C3", children: [
                                        { name: "CC1", value: 53 },
                                        { name: "CC2", value: 30 }
                                    ]
                                },
                                { name: "C4", value: 26 }
                            ]
                        },
                        {
                            name: "Fourth",
                            children: [
                                { name: "D1", value: 415 },
                                { name: "D2", value: 148 },
                                { name: "D3", value: 89 }
                            ]
                        },
                        {
                            name: "Fifth",
                            children: [
                                {
                                    name: "E1",
                                    children: [
                                        { name: "EE1", value: 33 },
                                        { name: "EE2", value: 40 },
                                        { name: "EE3", value: 89 }
                                    ]
                                },
                                {
                                    name: "E2",
                                    value: 148
                                }
                            ]
                        }

                    ]
                }
            ];


            networkSeries.dataFields.value = "value";
            networkSeries.dataFields.name = "name";
            networkSeries.dataFields.children = "children";
            networkSeries.nodes.template.tooltipText = "{name}:{value}";
            networkSeries.nodes.template.fillOpacity = 1;

            networkSeries.nodes.template.label.text = "{name}"
            networkSeries.fontSize = 10;

            networkSeries.links.template.strokeWidth = 1;

            let hoverState = networkSeries.links.template.states.create("hover");
            hoverState.properties.strokeWidth = 3;
            hoverState.properties.strokeOpacity = 1;

            networkSeries.nodes.template.events.on("over", function (event:any) {
                event.target.dataItem.childLinks.each(function (link:any) {
                    link.isHover = true;
                })
                if (event.target.dataItem.parentLink) {
                    event.target.dataItem.parentLink.isHover = true;
                }

            })


            networkSeries.nodes.template.event.on("out", function(event:any){
              event.target.dataItem.childLinks.each((link:any)=>{
                  link.isHover = false;
              })
              if(event.target.dataItem.parentLink){
                event.target.dataItem.parentLink.isHover = false;
              }
            })
        })

    }
}