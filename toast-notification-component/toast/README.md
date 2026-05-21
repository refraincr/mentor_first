## What makes me proud

- I quickly find 'solution'.
- I use multiple AI tools to solve problems.
- I use a flex layout that allows multiple prompt windows toi appear reasonably.

## The challages I have encountered.

- The prompt window disappears quickly after appearing, instead of disappearing after 4 seconds.
- All prompt windows disappear simultaneously.
- Using 'useEffect'.

## Solution

- useEffect的依赖为空时，内部的回调挂载时执行一次
- useEffect的依赖不为空时，监视依赖是否变化来执行回调（使用===来判断是否更新）
- ===是判断引用是否相等，也就是监视的是引用类型的数据时内容不变化，也会被认为是更新
- 连续计时器注意时间
