# 自定义Hook

State Hook：useState
Effect Hook：useEffect

自定义Hook：将一些常用的、跨越多个组件的Hook功能抽离出去形成一个函数，该函数就是自定义Hook
自定义Hook，由于其内部需要使用Hook功能，所以它本身也需要按照Hook的规则实现：

1. 函数名必须以use开头
2. 调用自定义Hook函数时，应该放到顶部

例如：

1. 很多组件都需要在第一次加载完成后，获取学生数据