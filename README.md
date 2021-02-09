# React Rolling Counter

> 旨在简短记录开发中遇到的问题与解决办法
>
> 本次 React 项目使用了 Hook

## JSX

```jsx
<span
  data-before={countBefore}
  data-after={countAfter}
  className={`${isBefore ? "before" : ""}${isAfter ? "after" : ""}`}
>
  {count}
</span>

//关于动态className

//错误
//className={{isBefore ? "before" : "" , isAfter ? "after" : ""}}

//正确
//className={[isBefore ? "before" : "" , isAfter ? "after" : ""].join(" ")}
//className={`${isBefore ? "before" : ""}${isAfter ? "after" : ""}`}
```

## CSS

`position`

`box-shadow`

`linear-gradient别忘了在deg后的,`

`attr()`

`z-index记得用`

> 动态添加 class 来做动画效果

> 使用 hook 确实简化了代码 但是相较于 vue 我还是有很多不懂 期待在接下来的过程中继续解惑
