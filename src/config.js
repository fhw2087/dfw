/**
 * Created by Administrator on 2017/12/23.
 */

const TOP_AREAS = [{
    type:'place',
    price:200,
    name:'地区1',
    color:'yellow'
},{
    type:'place',
    price:210,
    name:'地区2',
    color:'yellow'
},{
    type:'place',
    price:220,
    name:'地区3',
    color:'yellow'
},{
    type:'flower'
},{
    type:'station'
},{
    type:'round',
},{
    type:'place',
    price:230,
    name:'地区4',
    color:'pink'
},{
    type:'place',
    price:240,
    name:'地区5',
    color:'pink'
},{
    type:'place',
    price:250,
    name:'地区6',
    color:'pink'
}];

const LEFT_AREAS = [{
    type:'place',
    price:200,
    name:'地区1',
    color:'#33CEFC'
},{
    type:'place',
    price:210,
    name:'地区2',
    color:'#33CEFC'
},{
    type:'place',
    price:220,
    name:'地区3',
    color:'#33CEFC'
},{
    type:'court'
},{
    type:'station'
},{
    type:'adventure',
},{
    type:'place',
    price:230,
    name:'地区4',
    color:'#00a300'
},{
    type:'place',
    price:240,
    name:'地区5',
    color:'#00a300'
},{
    type:'place',
    price:250,
    name:'地区6',
    color:'#00a300'
}];

const BOTTOM_AREAS = [{
    type:'adventure'
},{
    type:'place',
    price:210,
    name:'地区2',
    color:'yellow'
},{
    type:'place',
    price:220,
    name:'地区3',
    color:'yellow'
},{
    type:'round'
},{
    type:'station'
},{
    type:'flower',
},{
    type:'place',
    price:230,
    name:'地区4',
    color:'#6d3a0f'
},{
    type:'place',
    price:240,
    name:'地区5',
    color:'#6d3a0f'
},{
    type:'place',
    price:250,
    name:'地区6',
    color:'#6d3a0f'
}];

const RIGHT_AREAS = [{
    type:'place',
    price:200,
    name:'地区1',
    color:'#f76d12'
},{
    type:'place',
    price:210,
    name:'地区2',
    color:'#f76d12'
},{
    type:'place',
    price:220,
    name:'地区3',
    color:'#f76d12'
},{
    type:'adventure'
},{
    type:'station'
},{
    type:'flower',
},{
    type:'place',
    price:230,
    name:'地区4',
    color:'pink'
},{
    type:'place',
    price:240,
    name:'地区5',
    color:'pink'
},{
    type:'stop'
}];

const CORNER_AREAS = ['start','prison','stop','court'];

export const AREA_CONFIG = {
    TOP_AREAS,LEFT_AREAS,BOTTOM_AREAS,RIGHT_AREAS,CORNER_AREAS
};