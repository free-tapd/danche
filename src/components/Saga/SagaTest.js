class SagaTestComp extends React.Component {

    _onCount = () => {
        //将当前count传给action watcher saga监听到这个action后 会将action传递给worker saga
        const curCount = this.props.data.get('count')
        this.props.count(curCount)
    }

    render() {
        console.log('SagaTestComp rendered')
        return (
            <div>
                <span>{this.props.data.get('count')}</span>
                <button onClick={this._onCount}>count</button>
            </div>
        )
    }
}

// 作者：DumpCicada
// 链接：https://www.jianshu.com/p/9cbc1e2b6a1d
// 来源：简书
// 简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。