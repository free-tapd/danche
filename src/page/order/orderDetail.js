import React,{Component} from "react";
import {Card} from'antd'
class OrderDetail extends Component{
	constructor(props) {
	    super(props)
	}
	componentDidMount(){
		let BMap=window.BMap
		var map = new BMap.Map("mapContainer");
		// 创建地图实例  
		var point = new BMap.Point(116.404, 39.915);
		// 创建点坐标  
		map.centerAndZoom(point, 15);
		// 初始化地图，设置中心点坐标和地图级别  
		map.addControl(new BMap.NavigationControl());    
		map.addControl(new BMap.ScaleControl());    
		map.addControl(new BMap.OverviewMapControl());    
		map.addControl(new BMap.MapTypeControl());    
		map.setCurrentCity("北京"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用  
	}
	render(){
		return (<div>
			<div id="mapContainer" style={{height:700}}>地图</div>
			
		</div>)
	}
}
export default OrderDetail