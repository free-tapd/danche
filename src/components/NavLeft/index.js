import React, { Component } from 'react';
import menuList from "../../config/menuConfig"
import { Menu, Icon, Switch } from 'antd';
import {Link} from "react-router-dom"
const { SubMenu } = Menu;
class NavLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    // 菜单渲染
    renderMenu=(data)=>{
          return data.map( (item)=>{
               
            if(item.children){
               
                return (
                    <SubMenu key={item.key} title={item.title}>
                        { this.renderMenu(item.children)}
                  </SubMenu>
                )
            }
            return (
                <Menu.Item key={item.key} title={item.title}>
                    <Link to={item.key}>{item.title}</Link>
                </Menu.Item>
            )
        })
    }
    componentDidMount(){
      const menuTreeNode= this.renderMenu(menuList)
      console.log(menuTreeNode);
      
        this.setState({
            menuTreeNode
        })
        console.log(this.state.menuTreeNode);
        
    }
    render() { 

        return ( 
            <div style={{backgroundColor:'#f00'}}>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
                
            </div>
         );
    }
}
 
export default NavLeft;