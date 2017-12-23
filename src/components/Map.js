/**
 * Created by Administrator on 2017/12/23.
 */
import React, {Component} from 'react';

import { AREA_CONFIG } from '../config';


const CHINA_MAP = require('../images/china_map.jpg');
const TRAIN = require('../images/train.png');

export default class Map extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
        this.cx = null;
        this.ctx = null;
        this.areaData = AREA_CONFIG;
    }

    componentDidMount(){
        this.cx = document.getElementById('mapOuter');
        this.ctx = this.cx.getContext('2d');
        this.drawArea();
    }

    drawArea(){
        this.drawImage(this.ctx,CHINA_MAP,150,150,305,305);

        this.areaData.CORNER_AREAS.map((v) => {
            this.ctx.fillStyle = '#edd28b';
            switch (v){
                case 'start':{
                    this.ctx.shadowOffsetX = -2;
                    this.ctx.shadowOffsetY = -2;
                    this.ctx.shadowBlur = 5;
                    this.ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
                    this.ctx.fillRect(505,505,100,100);
                    break;
                }
                case 'prison':{
                    this.ctx.shadowOffsetX = 2;
                    this.ctx.shadowOffsetY = -2;
                    this.ctx.shadowBlur = 5;
                    this.ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
                    this.ctx.fillRect(0,505,100,100);
                    break;
                }
                case 'stop':{
                    this.ctx.shadowOffsetX = 2;
                    this.ctx.shadowOffsetY = 2;
                    this.ctx.shadowBlur = 5;
                    this.ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
                    this.ctx.fillRect(0,0,100,100);
                    break;
                }
                case 'court':{
                    this.ctx.shadowOffsetX = -2;
                    this.ctx.shadowOffsetY = 2;
                    this.ctx.shadowBlur = 5;
                    this.ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
                    this.ctx.fillRect(505,0,100,100);
                    break;
                }
            }
        });


        this.areaData.LEFT_AREAS.map((v,i) => {
            this.ctx.fillStyle = '#edd28b';
            this.ctx.shadowOffsetX = 2;
            this.ctx.shadowOffsetY = 0;
            this.ctx.shadowBlur = 5;
            this.ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
            this.ctx.fillRect(0,101+45*i,100,44);
            switch (v.type){
                case 'place':{
                    this.drawPlace(this.ctx,v.color,70,101+45*i,30,44);
                    this.drawPlaceInfo(this.ctx,'placeName',v.name,20,120+45*i);
                    this.drawPlaceInfo(this.ctx,'','￥'+v.price,20,140+45*i);
                    break;
                }
                case 'station':{

                    break;
                }
                default:{

                }
            }
        });

        this.areaData.TOP_AREAS.map((v,i) => {
            this.ctx.fillStyle = '#edd28b';
            this.ctx.shadowOffsetX = 0;
            this.ctx.shadowOffsetY = 2;
            this.ctx.shadowBlur = 5;
            this.ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
            this.ctx.fillRect(101+45*i,0,44,100);
            switch (v.type){
                case 'place':{
                    this.drawPlace(this.ctx,v.color,101+45*i,70,44,30);
                    this.drawPlaceInfo(this.ctx,'placeName',v.name,105+45*i,30);
                    this.drawPlaceInfo(this.ctx,'','￥'+v.price,105+45*i,50);
                    break;
                }
                default:{

                }
            }
        });

        this.areaData.RIGHT_AREAS.map((v,i) => {
            this.ctx.fillStyle = '#edd28b';
            this.ctx.shadowOffsetX = -2;
            this.ctx.shadowOffsetY = 0;
            this.ctx.shadowBlur = 5;
            this.ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
            this.ctx.fillRect(505,101+45*i,100,44);
            switch (v.type){
                case 'place':{
                    this.drawPlace(this.ctx,v.color,505,101+45*i,30,44);
                    this.drawPlaceInfo(this.ctx,'placeName',v.name,555,120+45*i);
                    this.drawPlaceInfo(this.ctx,'','￥'+v.price,555,140+45*i);
                    break;
                }
                default:{

                }
            }
        });

        this.areaData.BOTTOM_AREAS.map((v,i) => {
            this.ctx.fillStyle = '#edd28b';
            this.ctx.shadowOffsetX = 0;
            this.ctx.shadowOffsetY = -2;
            this.ctx.shadowBlur = 5;
            this.ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
            this.ctx.fillRect(101+45*i,505,44,100);
            switch (v.type){
                case 'place':{
                    this.drawPlace(this.ctx,v.color,101+45*i,505,44,30);
                    this.drawPlaceInfo(this.ctx,'placeName',v.name,105+45*i,560);
                    this.drawPlaceInfo(this.ctx,'','￥'+v.price,105+45*i,580);
                    break;
                }
                default:{

                }
            }
        });

    }

    drawPlaceInfo(ctx,type,text,a,b){
        ctx.fillStyle = '#000';
        if(type == 'placeName'){
            ctx.font="13px 微软雅黑";
        }else {
            ctx.font="12px bold 微软雅黑";
        }
        ctx.fillText(text,a,b);
    }

    drawPlace(ctx,color,a,b,c,d){
        ctx.fillStyle = color;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
        ctx.fillRect(a,b,c,d);
    }

    drawImage(ctx,src,a,b,c,d){
        const img = new Image();
        img.src= src;
        img.onload = ()=>{
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowBlur = 0;
            ctx.drawImage(img,a,b,c,d);
        };
    }

    render(){
        return (
            <canvas width={605} height={605} id="mapOuter" />
        )
    }
}