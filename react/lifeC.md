当组件都实例被创建并插入到dom中
1. constructor
2. static getDerivedStateFromProps
3. render
4. componentDidMount

当组件的props或state的发生变化
1. static getDerivedStateFromProps
2. shouldComponentUpdate
3. render
4. getSnapshotBeforeUpdate
5. componentDidUpdate

组件移除
1. componentWillUnmount

当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：

1. static getDerivedStateFromError()
2. componentDidCatch()



在react class组件中
react组件主要有3个状态
初始化 
    construter
    componentWillmount
    render
    componentDidmount
更新
    shouldComponentUpdate
卸载 componentWillUnmount
