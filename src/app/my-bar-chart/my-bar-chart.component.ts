import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
declare var require:any;
const{urlresults}=require('@balakrishnan/npm-module3');

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {


  //declare var jquery:any;
 // declare var $:any;

  public barChartOptions={
    scaleShowVerticalLines:false,
    responsive:true
  };
  public barChartLabels=['2006','2007','2008','2009','2010','2011','2012'];
  public barChartType="bar";
  public barChartLegend=true;
  public BarChartData=[
    {data:[65,59,80,83,56,55,40],label:"Series A"},
    {data:[20,48,40,19,86,27,98],label:"Series B"}
  ];

  constructor() { }

  ngOnInit() {
  }

  urldisplay(){
    let canvas=<HTMLCanvasElement> document.getElementById('barchart')
    //var dataURL=canvas.toDataURL('image/jpeg');
    //console.log(dataURL);
    urlresults(canvas);
  }
  
}
