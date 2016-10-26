//整个大容器样式
var contentClass={
	display:'flex',
	justifyContent:'space-around',
	margin:'20px auto',
	alignItems: 'stretch',
}
//展示区样式
var boxClass={
	border:'3px solid orange',
	flexShrink: 1,
	display:'flex',
	flexDirection:'row',
	flexWrap:'nowrap',
	justifyContent:'flex-start',
	alignItems:'stretch',
	alignContent:'stretch',
}
//展示区小方块样式
var boxSectionClass={
	width:'100px',
	height: '100px',
	textAlign:'center',
	order:0,
	flexGrow:0,
	flexShrink:1,
	flexBasis:'auto',
	alignSelf:'auto',
}
//设置区样式
var settingClass={
	paddingLeft:'15px',
	flexShrink: 0,
	width: '300px',
	border:'1px solid #aaa',
	borderRadius:'15px' ,
}
//左侧展示区小方块
var BoxSection=React.createClass({
	render:function(){
		return(
			<div style={boxSectionClass} className='main'></div>
			)
	},	
})
//左侧展示区

var Box=React.createClass({
	render:function(){
		var section=[]
		for(let i=0;i<9;i++){
			section.push(<BoxSection />)
		}
		return(
            <div style={boxClass}>
            	{section}
            </div>
			)
	},
});

//容器属性display
var Display=React.createClass({
	render:function(){
		return(
			<select onChange={this.props.handleToggle.bind(this,'display')}>
				<option value="flex">flex</option>
				<option value="inline-flex">inline-flex</option>
			</select>
			)
	},
})
//容器属性flex-direction
var FlexDirection=React.createClass({
	render:function(){
		return(
			<select onChange={this.props.handleToggle.bind(this,'flexDirection')}>
				<option value="row">row</option>
				<option value="row-reverse">row-reverse</option>
				<option value="column">column</option>
				<option value="column-reverse">column-reverse</option>
			</select>
			)
	},
})
//容器属性flexWrap
var FlexWrap=React.createClass({
	render:function(){
		return(
			<select onChange={this.props.handleToggle.bind(this,'flexWrap')}>
				<option value="nowrap">nowrap</option>
				<option value="wrap">wrap</option>
				<option value="wrap-reverse">wrap-reverse</option>
			</select>
			)
	},
})
//容器属性justifyContent    flex-start | flex-end | center | space-between | space-around;
var JustifyContent=React.createClass({
	render:function(){
		return(
			<select onChange={this.props.handleToggle.bind(this,'justifyContent')}>
				<option value="flex-start">flex-start</option>
				<option value="flex-end">flex-end</option>
				<option value="center">center</option>
				<option value="space-between">space-between</option>
				<option value="space-around">space-around</option>
			</select>
			)
	},
})
//容器属性alignItems   flex-start | flex-end | center | baseline | stretch;
var AlignItems=React.createClass({
	render:function(){
		return(
			<select onChange={this.props.handleToggle.bind(this,'alignItems')}>
				<option value="stretch">stretch</option>
				<option value="flex-start">flex-start</option>
				<option value="flex-end">flex-end</option>
				<option value="center">center</option>
				<option value="baseline">baseline</option>
			</select>
			)
	},
})
//容器属性alignContent    flex-start | flex-end | center | space-between | space-around | stretch;
var AlignContent=React.createClass({
	render:function(){
		return(
			<select onChange={this.props.handleToggle.bind(this,'alignContent')}>
				<option value="stretch">stretch</option>
				<option value="flex-start">flex-start</option>
				<option value="flex-end">flex-end</option>
				<option value="center">center</option>
				<option value="space-between ">space-between </option>
				<option value="space-around">space-around </option>				
			</select>
			)
	},
})
//项目属性
var Order=React.createClass({
	render:function(){
		return(
			<select onChange={this.props.handleToggle.bind(this,'order')}>
				<option value="0">0</option>
				<option value="1">1</option>
			</select>
			)
	},
})
//项目属性
var FlexGrow=React.createClass({
	render:function(){
		return(
			<select onChange={this.props.handleToggle.bind(this,'flexGrow')}>
				<option value="0">0</option>
				<option value="1">1</option>
			</select>
			)
	},
})
//项目属性
var FlexShrink=React.createClass({
	render:function(){
		return(
			<select onChange={this.props.handleToggle.bind(this,'flexShrink')}>
				<option value="1">1</option>
				<option value="0">0</option>
			</select>
			)
	},
})
//项目属性
var FlexBasis=React.createClass({
	render:function(){
		return(
			<select onChange={this.props.handleToggle.bind(this,'flexBasis')}>
				<option value="auto">auto</option>
				<option value="200px">200px</option>
			</select>
			)
	},
})
//项目属性
var AlignSelf=React.createClass({
	render:function(){
		return(
			<select onChange={this.props.handleToggle.bind(this,'alignSelf')}>
				<option value="auto">auto</option>
			</select>
			)
	},
})


//右侧设置区
var Setting=React.createClass({
	render:function(){
		return(
			<div style={settingClass}>
				<p>容器属性</p>
				<p>display : <Display handleToggle={this.props.handleToggle} /></p>
				<p>flex-direction : <FlexDirection handleToggle={this.props.handleToggle} /></p>
				<p>flex-wrap : <FlexWrap handleToggle={this.props.handleToggle} /></p>
				<p>justify-content : <JustifyContent handleToggle={this.props.handleToggle} /></p>
				<p>align-items : <AlignItems handleToggle={this.props.handleToggle} /></p>
				<p>align-content : <AlignContent handleToggle={this.props.handleToggle} /></p>
				<p>项目属性</p>
				<p>order:<Order handleToggle={this.props.handleToggle} /></p>
				<p>flex-grow:<FlexGrow handleToggle={this.props.handleToggle} /></p>
				<p>flex-shrink:<FlexShrink handleToggle={this.props.handleToggle} /></p>
				<p>flex-basis:<FlexBasis handleToggle={this.props.handleToggle} /></p>
				<p>align-self:<AlignSelf handleToggle={this.props.handleToggle} /></p>			
			</div>
			)
	}
})
//整个大容器
var Content=React.createClass({
	getInitialState:function(){
		return{
			//容器属性
			display:'flex',
			flexDirection:'row',
			flexWrap:'nowrap',
			justifyContent:'flex-start',
			alignItems:'stretch',
			alignContent:'stretch',

			//项目属性
			order:0,
			flexGrow:0,
			flexShrink:1,
			flexBasis:'auto',
			alignSelf:'auto',		
		}
	},
	handleToggle:function(name,event){
		var newState={}
		newState[name]=event.target.value
		this.setState(newState);
	},
	render:function(){
		boxClass.display=this.state.display;
		boxClass.flexDirection=this.state.flexDirection;
		boxClass.flexWrap=this.state.flexWrap;
		boxClass.justifyContent=this.state.justifyContent;
		boxClass.alignItems=this.state.alignItems;
		boxClass.alignContent=this.state.alignContent;

		boxSectionClass.order=this.state.order;
		boxSectionClass.flexGrow=this.state.flexGrow;
		boxSectionClass.flexShrink=this.state.flexShrink;
		boxSectionClass.flexBasis=this.state.flexBasis;
		boxSectionClass.alignSelf=this.state.alignSelf;
		return(
			<div style={contentClass}>
				<Box />
				<Setting handleToggle={this.handleToggle}/>
			</div>
			)
	},
	componentDidMount:function(){
		//为每个小方块赋予颜色
		var mains=document.querySelectorAll('.main');
		for(let i=0;i<mains.length;i++){
			setColor(mains[i]);
		}
		function setColor(nodeName){
			nodeName.style.background='rgb('+randomNum()+','+randomNum()+','+randomNum()+')'
		}
		function randomNum(){
			return parseInt(Math.random()*255)
		}
	},
})
ReactDOM.render(<Content/>,document.getElementById('container'));